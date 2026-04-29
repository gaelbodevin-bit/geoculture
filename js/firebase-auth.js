// ── Firebase Auth + Historique ──────────────────────────────────────────────
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
  from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';
import { getFirestore, collection, addDoc, query, where, orderBy, limit, getDocs, serverTimestamp }
  from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js';

var firebaseConfig = {
  apiKey: "AIzaSyDm7KMECwQVWvnOnMmSVm8aK7FdP03QWyA",
  authDomain: "geo-culture-73453.firebaseapp.com",
  projectId: "geo-culture-73453",
  storageBucket: "geo-culture-73453.firebasestorage.app",
  messagingSenderId: "701399534769",
  appId: "1:701399534769:web:ea9418505d8d2e9a9ea690"
};

var fbApp = initializeApp(firebaseConfig);
var fbAuth = getAuth(fbApp);
var fbDb = getFirestore(fbApp);
var fbProvider = new GoogleAuthProvider();

// Utilisateur courant
var currentUser = null;

// ── Auth state ───────────────────────────────────────────────────────────────
onAuthStateChanged(fbAuth, function(user) {
  currentUser = user;
  updateAuthUI(user);
});

function updateAuthUI(user) {
  var btn = document.getElementById('auth-btn');
  var avatar = document.getElementById('auth-avatar');
  var name = document.getElementById('auth-name');
  if (!btn) return;
  if (user) {
    btn.textContent = 'Déconnexion';
    btn.onclick = fbSignOut;
    if (avatar) { avatar.src = user.photoURL || ''; avatar.style.display = 'inline-block'; }
    if (name) name.textContent = user.displayName || user.email;
  } else {
    btn.textContent = 'Connexion Google';
    btn.onclick = fbSignIn;
    if (avatar) avatar.style.display = 'none';
    if (name) name.textContent = '';
  }
}

function fbSignIn() {
  signInWithPopup(fbAuth, fbProvider).catch(function(e) {
    console.error('Auth error:', e);
    showToast('Erreur de connexion : ' + e.message);
  });
}

function fbSignOut() {
  signOut(fbAuth).then(function() {
    showToast('Déconnecté');
  });
}

// ── Sauvegarder une partie ───────────────────────────────────────────────────
function saveGame(scores, total, pct, mode) {
  if (!currentUser) return;
  var data = {
    uid: currentUser.uid,
    displayName: currentUser.displayName || 'Joueur',
    photoURL: currentUser.photoURL || '',
    total: total,
    pct: pct,
    mode: mode || 'normal',
    rounds: scores.map(function(s) {
      return { name: s.name, pts: s.pts, maxPts: s.maxPts, distM: s.distM };
    }),
    createdAt: serverTimestamp()
  };
  addDoc(collection(fbDb, 'games'), data)
    .then(function() { showToast('Partie sauvegardée !'); })
    .catch(function(e) { console.error('Save error:', e); });
}

// ── Charger l'historique ─────────────────────────────────────────────────────
function loadHistory(callback) {
  if (!currentUser) { callback([]); return; }
  var q = query(
    collection(fbDb, 'games'),
    where('uid', '==', currentUser.uid),
    orderBy('createdAt', 'desc'),
    limit(20)
  );
  getDocs(q).then(function(snap) {
    var games = [];
    snap.forEach(function(doc) { games.push(Object.assign({id: doc.id}, doc.data())); });
    callback(games);
  }).catch(function(e) {
    console.error('Load error:', e);
    callback([]);
  });
}

// ── Afficher l'historique ────────────────────────────────────────────────────
function showHistory() {
  if (!currentUser) {
    showToast('Connecte-toi pour voir ton historique');
    return;
  }
  var ov = document.getElementById('overlay');
  ov.innerHTML = '<div class="otitle" style="font-size:32px">⏳ Chargement...</div>';
  ov.classList.remove('h');

  loadHistory(function(games) {
    var h = [];
    h.push('<div class="otitle" style="font-size:28px">Mes parties</div>');
    h.push('<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">');
    h.push('<img src="'+(currentUser.photoURL||'')+'" style="width:32px;height:32px;border-radius:50%;object-fit:cover">');
    h.push('<span style="color:#e2e8f0;font-size:14px;font-weight:600">'+(currentUser.displayName||'')+'</span>');
    h.push('</div>');

    if (games.length === 0) {
      h.push('<div class="osub">Aucune partie enregistrée pour le moment.</div>');
    } else {
      h.push('<div class="ocard" style="max-height:320px;overflow-y:auto;width:100%;max-width:420px">');
      games.forEach(function(g) {
        var date = g.createdAt ? new Date(g.createdAt.seconds * 1000) : new Date();
        var dateStr = date.toLocaleDateString('fr-FR', {day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'});
        var modeLabel = g.mode === 'nozoom' ? ' · No-Zoom' : '';
        var barColor = g.pct >= 80 ? '#22c55e' : g.pct >= 50 ? '#fbbf24' : '#f97316';
        h.push('<div style="padding:10px 0;border-bottom:1px solid #1e2d45">');
        h.push('<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">');
        h.push('<span style="font-size:12px;color:#6b7280">'+dateStr+modeLabel+'</span>');
        h.push('<span style="font-size:14px;font-weight:700;color:'+barColor+'">'+g.pct+'%</span>');
        h.push('</div>');
        h.push('<div style="display:flex;justify-content:space-between;font-size:12px;color:#94a3b8;margin-bottom:6px">');
        h.push('<span>'+g.total.toLocaleString('fr-FR')+' pts</span>');
        h.push('<span>'+g.rounds.length+' manches</span>');
        h.push('</div>');
        // Mini liste des lieux
        if (g.rounds && g.rounds.length) {
          h.push('<div style="font-size:11px;color:#4b5563">');
          g.rounds.forEach(function(r) {
            var dist = r.distM != null ? (r.distM < 1000 ? r.distM+'m' : Math.round(r.distM/1000)+'km') : 'raté';
            h.push('<span style="margin-right:8px">'+r.name.split('—')[0].trim()+' ('+dist+')</span>');
          });
          h.push('</div>');
        }
        h.push('</div>');
      });
      h.push('</div>');
    }

    h.push('<div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap;justify-content:center">');
    h.push('<div style="display:flex;gap:10px;justify-content:center">');
    h.push('<button class="btn bg" onclick="closeHistory()" style="width:auto;padding:10px 20px">&#8592; Retour</button>');
    h.push('</div>');
    h.push('</div>');

    ov.innerHTML = h.join('');
    ov.classList.remove('h');
  });
}

// Exposer globalement
window.fbSignIn = fbSignIn;
window.fbSignOut = fbSignOut;
window.saveGame = saveGame;
window.showHistory = showHistory;
window.getCurrentUser = function() { return currentUser; };

// Fermer l'historique intelligemment
function closeHistory() {
  var ov = document.getElementById('overlay');
  if (typeof gameActive !== 'undefined' && gameActive) {
    // Partie en cours - juste fermer l'overlay
    ov.classList.add('h');
  } else if (typeof roundScores !== 'undefined' && roundScores.length > 0 && typeof curR !== 'undefined') {
    // Partie terminee ou inter-manche - retourner au menu
    if (typeof showMenu === 'function') showMenu();
  } else {
    // Pas de partie - menu
    if (typeof showMenu === 'function') showMenu();
  }
}
window.closeHistory = closeHistory;