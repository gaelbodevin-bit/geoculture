/**
 * generate-codes.js
 * Génère des codes testeurs et les insère dans Firestore.
 *
 * Usage :
 *   npm install firebase-admin
 *   node generate-codes.js --count 10 --prefix TEST
 *
 * Prérequis : télécharger la clé de service Firebase Admin depuis
 *   Console Firebase → Paramètres du projet → Comptes de service → Générer une clé privée
 *   et la placer dans le même dossier sous le nom "serviceAccountKey.json"
 */

const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// ── Config ──────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const COUNT  = parseInt(args[args.indexOf('--count')  + 1] || '10');
const PREFIX = (args[args.indexOf('--prefix') + 1] || 'TEST').toUpperCase();
// ────────────────────────────────────────────────────────────────────────────

function randomSuffix(len = 6) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sans 0/O/1/I pour éviter confusion
  let s = '';
  for (let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

async function generateCodes() {
  const batch = db.batch();
  const codes = [];

  for (let i = 0; i < COUNT; i++) {
    const code = `${PREFIX}-${randomSuffix()}`;
    const ref = db.collection('testCodes').doc(code);
    batch.set(ref, {
      used: false,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      note: `Généré le ${new Date().toLocaleDateString('fr-FR')}`
    });
    codes.push(code);
  }

  await batch.commit();

  console.log(`\n✅ ${COUNT} codes générés dans Firestore (collection "testCodes") :\n`);
  codes.forEach(c => console.log('  ' + c));
  console.log('\nPartagez ces codes avec vos testeurs. Chaque code est à usage unique.\n');
  process.exit(0);
}

generateCodes().catch(err => {
  console.error('Erreur :', err);
  process.exit(1);
});
