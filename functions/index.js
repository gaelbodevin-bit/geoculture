const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe');

admin.initializeApp();
const db = admin.firestore();

// ?? Webhook Stripe ????????????????????????????????????????????????????????????
// Déclenché par Stripe quand un paiement est complété
exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    event = stripeClient.webhooks.constructEvent(
      req.rawBody,
      req.headers['stripe-signature'],
      webhookSecret
    );
  } catch (err) {
    console.error('Webhook signature error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Paiement réussi
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const uid = session.metadata && session.metadata.uid;
    const email = session.customer_email || (session.customer_details && session.customer_details.email);
    const amountPaid = session.amount_total; // en centimes

    if (!uid) {
      console.error('No uid in session metadata');
      return res.status(400).send('No uid');
    }

    try {
      await db.collection('users').doc(uid).set({
        premium: true,
        premiumSince: admin.firestore.FieldValue.serverTimestamp(),
        lastPayment: admin.firestore.FieldValue.serverTimestamp(),
        amountPaid: amountPaid,
        stripeSessionId: session.id,
        email: email || ''
      }, { merge: true });

      // Log de paiement
      await db.collection('payments').add({
        uid: uid,
        sessionId: session.id,
        amount: amountPaid,
        currency: session.currency,
        email: email || '',
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });

      console.log(`Premium activé pour uid=${uid}, montant=${amountPaid}c`);
    } catch (err) {
      console.error('Firestore error:', err);
      return res.status(500).send('DB error');
    }
  }

  res.status(200).json({ received: true });
});

// ?? Créer une session Stripe Checkout ?????????????????????????????????????????
// Appelée par le client pour générer l'URL de paiement
exports.createCheckoutSession = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Connexion requise');
  }

  const uid = context.auth.uid;
  const email = context.auth.token.email || '';
  const amount = Math.max(100, Math.round(Number(data.amount) * 100)); // min 1€, en centimes

  const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'GéoCulture Premium',
            description: 'Accès aux modes No-Zoom, Perfection et Multijoueur',
            images: ['https://gaelbodevin-bit.github.io/geoculture/assets/logo.png']
          },
          unit_amount: amount
        },
        quantity: 1
      }],
      mode: 'payment',
      customer_email: email,
      metadata: { uid: uid },
      success_url: 'https://gaelbodevin-bit.github.io/geoculture/?premium=success',
      cancel_url: 'https://gaelbodevin-bit.github.io/geoculture/?premium=cancel',
      locale: 'fr'
    });

    return { url: session.url, sessionId: session.id };
  } catch (err) {
    console.error('Stripe error:', err);
    throw new functions.https.HttpsError('internal', 'Erreur Stripe: ' + err.message);
  }
});

// ?? Vérifier le statut premium ????????????????????????????????????????????????
exports.checkPremium = functions.https.onCall(async (data, context) => {
  if (!context.auth) return { premium: false };
  const doc = await db.collection('users').doc(context.auth.uid).get();
  return { premium: doc.exists && doc.data().premium === true };
});

// ?? Supprimer le compte (RGPD) ????????????????????????????????????????????????
exports.deleteAccount = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Connexion requise');
  }
  const uid = context.auth.uid;
  try {
    // Supprimer données Firestore
    await db.collection('users').doc(uid).delete();
    // Supprimer parties
    const games = await db.collection('games').where('uid', '==', uid).get();
    const batch = db.batch();
    games.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
    // Supprimer compte Auth
    await admin.auth().deleteUser(uid);
    return { success: true };
  } catch (err) {
    throw new functions.https.HttpsError('internal', err.message);
  }
});