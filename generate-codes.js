// ????????????????????????????????????????????????????????????????
// Génère des codes testeurs Premium dans Firestore (testCodes)
// Usage :  node generate-codes.js [nombre]   (défaut : 100)
// Prérequis : serviceAccountKey.json à côté de ce fichier
//             npm install firebase-admin
// ?? Ce script utilise l'Admin SDK : à lancer UNIQUEMENT en local,
//    jamais à committer avec la clé, jamais côté client.
// ????????????????????????????????????????????????????????????????
const admin = require('firebase-admin');
const crypto = require('crypto');
const fs = require('fs');

const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

const COUNT = Math.min(parseInt(process.argv[2] || '100', 10), 500);

// Alphabet sans caractères ambigus (pas de 0/O, 1/I/L)
// Format : GEO-XXXX-XXXX ? compatible avec la regex de redeemCode (^[A-Z0-9-]{4,24}$)
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
function randomBlock(n) {
  let s = '';
  const bytes = crypto.randomBytes(n);
  for (let i = 0; i < n; i++) s += ALPHABET[bytes[i] % ALPHABET.length];
  return s;
}
function makeCode() { return 'GEO-' + randomBlock(4) + '-' + randomBlock(4); }

async function main() {
  // Unicité locale
  const codes = new Set();
  while (codes.size < COUNT) codes.add(makeCode());
  const list = [...codes];

  // create() (et non set) : échoue si le doc existe déjà ? aucun risque
  // d'écraser un code existant, même déjà utilisé.
  const batch = db.batch();
  list.forEach(code => {
    batch.create(db.collection('testCodes').doc(code), {
      used: false,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      batch: new Date().toISOString().slice(0, 10)
    });
  });
  await batch.commit();

  const out = 'codes-' + Date.now() + '.txt';
  fs.writeFileSync(out, list.join('\n') + '\n');
  console.log('? ' + list.length + ' codes créés dans testCodes');
  console.log('?? Liste sauvegardée dans ' + out + ' (à ne pas committer !)');
  console.log('\nAperçu :');
  list.slice(0, 5).forEach(c => console.log('  ' + c));
  process.exit(0);
}

main().catch(e => {
  if (e.code === 6 || /already exists/i.test(e.message || '')) {
    console.error('? Collision improbable avec un code existant — relance simplement le script.');
  } else {
    console.error('? Erreur :', e.message);
  }
  process.exit(1);
});