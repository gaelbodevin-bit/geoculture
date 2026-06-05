/**
 * GéoCulture — Extraction URLs photos Wikipedia → data_with_photos.js
 * node generate_photos.js
 * 
 * Ne télécharge PAS les images (Wikimedia bloque).
 * Écrit les URLs directement dans data.js → le navigateur les charge.
 * Pour les manquantes : place une image dans photos/slug.jpg
 */

const fs    = require('fs');
const path  = require('path');
const https = require('https');

const DATA_PATH  = path.join(__dirname, 'js', 'data.js');
const PHOTOS_DIR = path.join(__dirname, 'photos');
const DELAY_MS   = 600; // délai entre requêtes pour éviter le rate limit

if (!fs.existsSync(PHOTOS_DIR)) fs.mkdirSync(PHOTOS_DIR);

// ── Lire data.js ─────────────────────────────────────────────────────────
const raw    = fs.readFileSync(DATA_PATH, 'utf-8');
const rounds = [];
const re     = /\{name:"([^"]+)"[^{]*lat:([-\d.]+),lng:([-\d.]+),desc:"([^"]*)"/g;
let m;
while ((m = re.exec(raw)) !== null) {
  const [, name, lat, lng, desc] = m;
  const sep  = name.indexOf('\u2014');
  const lieu = sep >= 0 ? name.slice(0, sep).trim() : name.trim();
  const loc  = sep >= 0 ? name.slice(sep + 1).trim() : '';
  const slug = lieu.normalize('NFD').replace(/[\u0300-\u036f]/g,'')
                   .replace(/[^a-zA-Z0-9]+/g,'_').replace(/^_|_$/g,'').toLowerCase();
  rounds.push({ name, lieu, loc, lat: parseFloat(lat), lng: parseFloat(lng), desc, slug });
}
console.log(`\n✓ ${rounds.length} lieux chargés\n`);

// ── HTTP GET JSON ─────────────────────────────────────────────────────────
function httpGetJSON(url) {
  return new Promise((resolve) => {
    https.get(url, {
      headers: { 'User-Agent': 'Test/1.0', 'Accept': 'application/json' },
      timeout: 8000
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location)
        return httpGetJSON(res.headers.location).then(resolve);
      if (res.statusCode !== 200) { res.resume(); return resolve(null); }
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => { try { resolve(JSON.parse(d)); } catch { resolve(null); } });
    });
    req => { req.on('error', () => resolve(null)); req.on('timeout', () => { req.destroy(); resolve(null); }); };
  });
}

function httpGetJSONsafe(url) {
  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'Test/1.0', 'Accept': 'application/json' },
      timeout: 8000
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location)
        return httpGetJSONsafe(res.headers.location).then(resolve);
      if (res.statusCode !== 200) { res.resume(); return resolve(null); }
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => { try { resolve(JSON.parse(d)); } catch { resolve(null); } });
    });
    req.on('error', () => resolve(null));
    req.on('timeout', () => { req.destroy(); resolve(null); });
  });
}

// ── Variantes de noms ─────────────────────────────────────────────────────
function variants(lieu, loc) {
  const v = [lieu];
  if (lieu.startsWith('Le '))  v.push(lieu.slice(3));
  if (lieu.startsWith('La '))  v.push(lieu.slice(3));
  if (lieu.startsWith("L'"))   v.push(lieu.slice(2));
  if (lieu.startsWith('Les ')) v.push(lieu.slice(4));
  if (lieu.startsWith('The ')) v.push(lieu.slice(4));
  v.push(lieu.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
  if (loc) { const city = loc.split(',')[0].trim(); if (city) v.push(`${lieu} ${city}`); }
  return [...new Set(v)];
}

// ── Chercher URL photo sur Wikipedia ─────────────────────────────────────
async function findPhotoUrl(lieu, loc) {
  for (const lang of ['fr', 'en']) {
    for (const t of variants(lieu, loc)) {
      // Slug direct
      const slug = encodeURIComponent(t.replace(/ /g, '_'));
      let d = await httpGetJSONsafe(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${slug}`);
      if (d && d.type !== 'disambiguation' && d.thumbnail?.source) {
        // Retourner l'URL originale (pas la thumb — la thumb est bloquée)
        // Construire l'URL originale depuis la thumb
        const thumb = d.thumbnail.source;
        const original = thumb.replace(/\/thumb\/(.+)\/\d+px-[^/]+$/, '/$1');
        return { url: original, thumb };
      }
      // Recherche
      const q   = encodeURIComponent(t);
      const res = await httpGetJSONsafe(`https://${lang}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${q}&srlimit=2&format=json&srprop=`);
      if (res?.query?.search?.length) {
        const title = res.query.search[0].title;
        const slug2 = encodeURIComponent(title.replace(/ /g, '_'));
        d = await httpGetJSONsafe(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${slug2}`);
        if (d && d.type !== 'disambiguation' && d.thumbnail?.source) {
          const thumb    = d.thumbnail.source;
          const original = thumb.replace(/\/thumb\/(.+)\/\d+px-[^/]+$/, '/$1');
          return { url: original, thumb };
        }
      }
    }
  }
  return null;
}

// ── Traitement ────────────────────────────────────────────────────────────
async function run() {
  const results = [];
  let found = 0, missing = 0, local = 0;

  for (let i = 0; i < rounds.length; i++) {
    const r = rounds[i];

    // Vérifier si photo locale existe déjà
    const localPath = path.join(PHOTOS_DIR, r.slug + '.jpg');
    if (fs.existsSync(localPath) && fs.statSync(localPath).size > 5000) {
      results.push({ ...r, photo: `photos/${r.slug}.jpg`, source: 'local' });
      local++;
    } else {
      const info = await findPhotoUrl(r.lieu, r.loc);
      if (info) {
        results.push({ ...r, photo: info.url, thumb: info.thumb, source: 'wiki' });
        found++;
      } else {
        results.push({ ...r, photo: '', source: 'missing' });
        missing++;
      }
    }

    const pct = String(Math.round((i+1)/rounds.length*100)).padStart(3);
    const ok  = results[results.length-1].photo ? '📷' : '  ';
    process.stdout.write(`\r[${pct}%] ${i+1}/${rounds.length} ${ok} ${r.lieu.slice(0,40).padEnd(40)} ok:${found+local} ✗:${missing}`);
    await new Promise(r => setTimeout(r, DELAY_MS));
  }
  console.log('\n');
  return results;
}

// ── Injecter photo dans data.js ───────────────────────────────────────────
function injectPhotos(results, src) {
  let out = src;
  // Traiter en ordre inverse pour ne pas décaler les positions
  for (const r of [...results].reverse()) {
    if (!r.photo) continue;
    const marker   = `desc:"${r.desc}"`;
    const idx      = out.indexOf(`name:"${r.name}"`);
    if (idx < 0) continue;
    const descIdx  = out.indexOf(marker, idx);
    if (descIdx < 0) continue;
    const afterDesc = descIdx + marker.length;
    if (out.slice(afterDesc, afterDesc + 10).includes('photo')) continue; // déjà présent
    out = out.slice(0, afterDesc) + `,photo:"${r.photo}"` + out.slice(afterDesc);
  }
  return out;
}

// ── Page des manquantes ───────────────────────────────────────────────────
function makeMissingHTML(results) {
  const missing = results.filter(r => !r.photo);
  const rows    = missing.map(r => `
<tr>
  <td style="color:#4b5563;text-align:center">${results.indexOf(r)+1}</td>
  <td><b>${r.lieu}</b><br><span style="color:#94a3b8;font-size:11px">${r.loc}</span></td>
  <td style="color:#94a3b8;font-size:11px;max-width:300px">${r.desc.slice(0,120)}</td>
  <td>
    <a href="https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(r.lieu)}" target="_blank" style="color:#f97316;font-size:11px;display:block">🔍 Wikipedia FR</a>
    <a href="https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(r.lieu)}" target="_blank" style="color:#60a5fa;font-size:11px;display:block">🔍 Wikipedia EN</a>
    <a href="https://www.google.com/search?q=${encodeURIComponent(r.lieu+' '+r.loc)}&tbm=isch" target="_blank" style="color:#22c55e;font-size:11px;display:block">🖼️ Google Images</a>
  </td>
  <td style="font-family:monospace;font-size:10px;color:#6b7280">photos/${r.slug}.jpg</td>
</tr>`).join('');

  return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">
<title>📸 ${missing.length} photos manquantes</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{background:#07090f;color:#e2e8f0;font-family:system-ui,sans-serif;padding:20px}
h1{color:#ef4444;margin-bottom:8px}
p{color:#6b7280;font-size:13px;margin-bottom:16px;line-height:1.7;background:#0d1120;border:1px solid #1e2d45;border-radius:8px;padding:12px 16px}
code{background:#1a2238;padding:2px 6px;border-radius:4px;font-size:12px;color:#f97316}
input{background:#111827;border:1px solid #2d3f5e;border-radius:8px;padding:8px 14px;color:#e2e8f0;font-size:13px;width:360px;margin-bottom:10px}
.cnt{color:#6b7280;font-size:12px;margin-bottom:10px}
table{width:100%;border-collapse:collapse;font-size:12px}
th{background:#111827;color:#6b7280;padding:8px 10px;text-align:left;border-bottom:2px solid #1e2d45;font-size:10px;text-transform:uppercase;letter-spacing:1px;position:sticky;top:0}
td{padding:8px 10px;border-bottom:1px solid #1e2d4533;vertical-align:top}
tr:hover td{background:#0d1120}
tr.h{display:none}
b{color:#e2e8f0}
</style></head><body>
<h1>📸 ${missing.length} photos manquantes sur ${results.length}</h1>
<p>
  Pour chaque lieu manquant :<br>
  1. Clique sur un des liens de recherche<br>
  2. Télécharge une photo libre de droits<br>
  3. Renomme-la avec le nom indiqué dans la colonne <b>Fichier</b><br>
  4. Place-la dans le dossier <code>photos/</code><br>
  5. Relance <code>node generate_photos.js</code> — les photos locales ont priorité
</p>
<input type="text" placeholder="Filtrer par lieu…" oninput="f(this.value)">
<div class="cnt" id="c">${missing.length} manquantes</div>
<table>
<thead><tr><th>N°</th><th>Lieu</th><th>Description</th><th>Recherche</th><th>Fichier attendu</th></tr></thead>
<tbody id="tb">${rows}</tbody>
</table>
<script>function f(q){q=q.toLowerCase();var r=document.querySelectorAll('#tb tr'),v=0;r.forEach(x=>{var s=!q||x.textContent.toLowerCase().includes(q);x.classList.toggle('h',!s);if(s)v++;});document.getElementById('c').textContent=v+' manquantes';}</script>
</body></html>`;
}

// ── Main ──────────────────────────────────────────────────────────────────
(async () => {
  const results   = await run();
  const found     = results.filter(r => r.photo).length;
  const missing   = results.filter(r => !r.photo).length;

  console.log(`📷 Avec photo : ${found}/${rounds.length} (${Math.round(found/rounds.length*100)}%)`);
  console.log(`✗  Manquantes : ${missing}\n`);

  // Injecter dans data.js
  const newData = injectPhotos(results, raw);
  fs.writeFileSync(path.join(__dirname, 'js', 'data_with_photos.js'), newData, 'utf-8');
  console.log('✓ js/data_with_photos.js créé');
  console.log('  → Remplace js/data.js par ce fichier quand tout est complet\n');

  // JSON de résultats (pour reprise)
  fs.writeFileSync('photos_result.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log('✓ photos_result.json (sauvegarde des URLs trouvées)');

  // Page manquantes
  if (missing > 0) {
    fs.writeFileSync('manquantes.html', makeMissingHTML(results), 'utf-8');
    console.log(`✓ manquantes.html (${missing} lieux à compléter)`);
  }

  console.log('\n💡 Étapes suivantes :');
  if (missing > 0) {
    console.log('   1. Ouvre manquantes.html dans ton navigateur');
    console.log('   2. Pour chaque lieu, télécharge une photo et place-la dans photos/');
    console.log('   3. Relance node generate_photos.js');
  }
  console.log('   4. Remplace js/data.js par js/data_with_photos.js');
  console.log('   5. Dans game.js, ajoute la lecture du champ photo du round\n');
  console.log('✅ Terminé !');
})();
