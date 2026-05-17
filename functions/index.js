const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe');

admin.initializeApp();
const db = admin.firestore();

const ALLOWED_ORIGIN = 'https://gaelbodevin-bit.github.io';

function setCORS(res, req) {
  const origin = req.headers.origin || '';
  if (origin.startsWith('https://gaelbodevin-bit.github.io')) {
    res.set('Access-Control-Allow-Origin', origin);
  } else {
    res.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  }
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.set('Access-Control-Max-Age', '3600');
}

// Webhook Stripe
exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
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
      console.log('Premium active uid=' + uid);
    } catch (err) {
      console.error('Firestore error:', err);
      return res.status(500).send('DB error');
    }
  }
  res.status(200).json({ received: true });
});

// Creer session Checkout via fetch + Bearer token
exports.createCheckoutSession = functions.https.onRequest(async (req, res) => {
  setCORS(res, req);
  if (req.method === 'OPTIONS') return res.status(204).send('');
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  // Verifier token Firebase Auth
  const authHeader = req.headers.authorization || '';
  if (!authHeader.startsWith('Bearer ')) return res.status(401).json({ error: 'Non authentifie' });

  let uid, email;
  try {
    const decoded = await admin.auth().verifyIdToken(authHeader.split('Bearer ')[1]);
    uid = decoded.uid;
    email = decoded.email || '';
  } catch (err) {
    console.error('Auth error:', err.message);
    return res.status(401).json({ error: 'Token invalide' });
  }

  let amount;
  try {
    const data = req.body.data || req.body;
    amount = Math.max(100, Math.round(Number(data.amount) * 100));
  } catch (err) {
    return res.status(400).json({ error: 'Montant invalide' });
  }

  const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: { name: 'GeoCulture Premium', description: 'Acces aux modes No-Zoom, Perfection et Multijoueur' },
          unit_amount: amount
        },
        quantity: 1
      }],
      mode: 'payment',
      customer_email: email,
      metadata: { uid },
      success_url: 'https://gaelbodevin-bit.github.io/geoculture/epremium=success',
      cancel_url: 'https://gaelbodevin-bit.github.io/geoculture/epremium=cancel',
      locale: 'fr'
    });
    return res.status(200).json({ result: { url: session.url, sessionId: session.id } });
  } catch (err) {
    console.error('Stripe error:', err);
    return res.status(500).json({ error: 'Erreur Stripe: ' + err.message });
  }
});

// Verifier statut premium
exports.checkPremium = functions.https.onCall(async (data, context) => {
  if (!context.auth) return { premium: false };
  const doc = await db.collection('users').doc(context.auth.uid).get();
  return { premium: doc.exists && doc.data().premium === true };
});

// Supprimer compte (RGPD)
exports.deleteAccount = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError('unauthenticated', 'Connexion requise');
  const uid = context.auth.uid;
  try {
    await db.collection('users').doc(uid).delete();
    const games = await db.collection('games').where('uid', '==', uid).get();
    if (!games.empty) { const b = db.batch(); games.forEach(d => b.delete(d.ref)); await b.commit(); }
    const daily = await db.collection('daily_scores').where('uid', '==', uid).get();
    if (!daily.empty) { const b2 = db.batch(); daily.forEach(d => b2.delete(d.ref)); await b2.commit(); }
    await admin.auth().deleteUser(uid);
    return { success: true };
  } catch (err) {
    throw new functions.https.HttpsError('internal', err.message);
  }
});