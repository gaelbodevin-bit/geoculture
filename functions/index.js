const { onRequest, onCall, HttpsError } = require('firebase-functions/v2/https');
const { setGlobalOptions } = require('firebase-functions/v2');
const admin = require('firebase-admin');
const stripe = require('stripe');

admin.initializeApp();
const db = admin.firestore();

// Limite le nombre d'instances simultanées : borne le coût maximal en cas de spam/DoS
setGlobalOptions({ region: 'us-central1', maxInstances: 10 });

// CORS : liste blanche stricte (égalité exacte, pas de startsWith)
const ALLOWED_ORIGINS = ['https://www.geo-culture.io', 'https://geo-culture.io'];
const MAX_AMOUNT_EUR = 500; // plafond anti-fraude (carding, erreurs de saisie, litiges)

function setCORS(res, req) {
  const origin = (req && req.headers && req.headers.origin) || '';
  res.set('Access-Control-Allow-Origin', ALLOWED_ORIGINS.indexOf(origin) !== -1 ? origin : ALLOWED_ORIGINS[0]);
  res.set('Vary', 'Origin');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.set('Access-Control-Max-Age', '3600');
}

// ── Webhook Stripe ──────────────────────────────────────────────────────────
exports.stripeWebhook = onRequest(async (req, res) => {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event;
  try {
    event = stripeClient.webhooks.constructEvent(req.rawBody, req.headers['stripe-signature'], webhookSecret);
  } catch (err) {
    console.error('Webhook error:', err.message);
    return res.status(400).send('Webhook Error: ' + err.message);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const uid = session.metadata && session.metadata.uid;
    const email = session.customer_email || (session.customer_details && session.customer_details.email) || '';
    if (!uid) return res.status(400).send('No uid');
    try {
      await db.collection('users').doc(uid).set({
        premium: true,
        premiumSince: admin.firestore.FieldValue.serverTimestamp(),
        lastPayment: admin.firestore.FieldValue.serverTimestamp(),
        amountPaid: session.amount_total,
        stripeSessionId: session.id,
        email: email
      }, { merge: true });
      await db.collection('payments').add({
        uid, sessionId: session.id, amount: session.amount_total,
        currency: session.currency, email,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
      console.log('Premium activé uid=' + uid);
    } catch (err) {
      console.error('Firestore error:', err);
      return res.status(500).send('DB error');
    }
  }
  res.status(200).json({ received: true });
});

// ── Créer session Checkout via fetch + Bearer token ─────────────────────────
exports.createCheckoutSession = onRequest(async (req, res) => {
  setCORS(res, req);
  if (req.method === 'OPTIONS') return res.status(204).send('');
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  // Vérifier token Firebase Auth
  const authHeader = req.headers.authorization || '';
  if (!authHeader.startsWith('Bearer ')) return res.status(401).json({ error: 'Non authentifié' });

  let uid, email;
  try {
    const decoded = await admin.auth().verifyIdToken(authHeader.split('Bearer ')[1]);
    uid = decoded.uid;
    email = decoded.email || '';
  } catch (err) {
    console.error('Auth error:', err.message);
    return res.status(401).json({ error: 'Token invalide' });
  }

  // Validation stricte du montant : nombre fini, min 1€, max 500€
  const data = req.body.data || req.body || {};
  const eur = Number(data.amount);
  if (!isFinite(eur) || eur < 1) {
    return res.status(400).json({ error: 'Montant invalide (minimum 1€)' });
  }
  if (eur > MAX_AMOUNT_EUR) {
    return res.status(400).json({ error: 'Montant maximum : ' + MAX_AMOUNT_EUR + '€' });
  }
  const amount = Math.round(eur * 100);

  const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: { name: 'GéoCulture Premium', description: 'Accès aux modes No-Zoom, Perfection et Multijoueur' },
          unit_amount: amount
        },
        quantity: 1
      }],
      mode: 'payment',
      customer_email: email,
      metadata: { uid },
      success_url: 'https://www.geo-culture.io/?premium=success',
      cancel_url: 'https://www.geo-culture.io/?premium=cancel',
      locale: 'fr'
    });
    return res.status(200).json({ result: { url: session.url, sessionId: session.id } });
  } catch (err) {
    console.error('Stripe error:', err);
    return res.status(500).json({ error: 'Erreur Stripe: ' + err.message });
  }
});

// ── Vérifier statut premium ─────────────────────────────────────────────────
exports.checkPremium = onCall(async (request) => {
  if (!request.auth) return { premium: false };
  const snap = await db.collection('users').doc(request.auth.uid).get();
  return { premium: snap.exists && snap.data().premium === true };
});

// ── Activer un code de test (Premium) — 100% côté serveur ───────────────────
// redeemCode : requête HTTP (même modèle que createCheckoutSession, évite les frictions onCall/SDK)
// Sécurité : vérifie le token Firebase en Bearer, valide le format, transaction atomique.
exports.redeemCode = onRequest(async (req, res) => {
  setCORS(res, req);
  if (req.method === 'OPTIONS') return res.status(204).send('');
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const authHeader = req.headers.authorization || '';
  if (!authHeader.startsWith('Bearer ')) return res.status(401).json({ error: 'Connexion requise.' });

  let uid;
  try {
    const decoded = await admin.auth().verifyIdToken(authHeader.split('Bearer ')[1]);
    uid = decoded.uid;
  } catch (err) {
    console.error('Auth error:', err.message);
    return res.status(401).json({ error: 'Session invalide, reconnecte-toi.' });
  }

  const body = req.body && req.body.data ? req.body.data : (req.body || {});
  const code = String(body.code || '').trim().toUpperCase();
  if (!/^[A-Z0-9-]{4,24}$/.test(code)) {
    return res.status(400).json({ error: 'Code invalide.' });
  }

  const codeRef = db.collection('testCodes').doc(code);
  const userRef = db.collection('users').doc(uid);

  try {
    await db.runTransaction(async (tx) => {
      const snap = await tx.get(codeRef);
      if (!snap.exists) { const e = new Error('nf'); e.http = 404; e.msg = 'Code introuvable.'; throw e; }
      if (snap.data().used === true) { const e = new Error('used'); e.http = 409; e.msg = 'Code déjà utilisé.'; throw e; }
      tx.update(codeRef, { used: true, usedBy: uid, usedAt: admin.firestore.FieldValue.serverTimestamp() });
      tx.set(userRef, {
        premium: true, premiumSource: 'testCode', premiumCode: code,
        premiumAt: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    if (err.http) return res.status(err.http).json({ error: err.msg });
    console.error('redeemCode error:', err);
    return res.status(500).json({ error: 'Erreur serveur.' });
  }
});

// ── Supprimer compte (RGPD) ─────────────────────────────────────────────────
exports.deleteAccount = onCall(async (request) => {
  if (!request.auth) throw new HttpsError('unauthenticated', 'Connexion requise');
  const uid = request.auth.uid;
  try {
    await db.collection('users').doc(uid).delete();
    const games = await db.collection('games').where('uid', '==', uid).get();
    if (!games.empty) { const b = db.batch(); games.forEach(d => b.delete(d.ref)); await b.commit(); }
    const daily = await db.collection('daily_scores').where('uid', '==', uid).get();
    if (!daily.empty) { const b2 = db.batch(); daily.forEach(d => b2.delete(d.ref)); await b2.commit(); }
    await admin.auth().deleteUser(uid);
    return { success: true };
  } catch (err) {
    throw new HttpsError('internal', err.message);
  }
});