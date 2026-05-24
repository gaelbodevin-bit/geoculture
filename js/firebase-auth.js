// \u2500\u2500 Firebase Auth + Historique \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
  from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';
import { getFirestore, collection, addDoc, query, where, orderBy, limit, getDocs, serverTimestamp, doc, getDoc, setDoc }
  from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js';
import { getFunctions, httpsCallable } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-functions.js';

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
var fbFunctions = getFunctions(fbApp);
var currentUserPremium = false;
var fbProvider = new GoogleAuthProvider();

// Utilisateur courant
var currentUser = null;

// \u2500\u2500 Auth state \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
onAuthStateChanged(fbAuth, function(user) {
  currentUser = user;
  if(user) {
    getDoc(doc(fbDb, 'users', user.uid)).then(function(snap) {
      currentUserPremium = snap.exists() && snap.data().premium === true;
      window.isPremium = currentUserPremium;
      updateAuthUI(user);
      // Rafraîchir le menu si visible (sans boucle)
      var ov = document.getElementById('overlay');
      if(ov && !ov.classList.contains('h') && typeof gameActive !== 'undefined' && !gameActive) {
        if(typeof showMenu === 'function') showMenu();
      }
    }).catch(function() {
      currentUserPremium = false;
      window.isPremium = false;
      updateAuthUI(user);
      var ov = document.getElementById('overlay');
      if(ov && !ov.classList.contains('h') && typeof gameActive !== 'undefined' && !gameActive) {
        if(typeof showMenu === 'function') showMenu();
      }
    });
  } else {
    currentUserPremium = false;
    window.isPremium = false;
    updateAuthUI(user);
    var ov = document.getElementById('overlay');
    if(ov && !ov.classList.contains('h') && typeof gameActive !== 'undefined' && !gameActive) {
      if(typeof showMenu === 'function') showMenu();
    }
  }
  // Retour de Stripe
  var params = new URLSearchParams(window.location.search);
  if(params.get('premium') === 'success') {
    window.history.replaceState({}, '', window.location.pathname);
    setTimeout(function() {
      if(typeof showToast==='function') showToast('Merci ! Accés Premium activé. Rechargez si nécessaire.');
      if(user) {
        getDoc(doc(fbDb, 'users', user.uid)).then(function(snap) {
          currentUserPremium = snap.exists() && snap.data().premium === true;
          window.isPremium = currentUserPremium;
        });
      }
    }, 800);
  }
  if(params.get('premium') === 'cancel') {
    window.history.replaceState({}, '', window.location.pathname);
    if(typeof showToast==='function') showToast('Paiement annulé.');
  }
});

function updateAuthUI(user) {
  var btn = document.getElementById('auth-btn');
  var avatar = document.getElementById('auth-avatar');
  var name = document.getElementById('auth-name');
  if (!btn) return;
  if (user) {
    btn.textContent = 'D\u00e9connexion';
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
    showToast('D\u00e9connect\u00e9');
  });
}

// \u2500\u2500 Sauvegarder une partie \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function saveGame(scores, total, pct, mode) {
  console.log('saveGame appel\u00e9, currentUser=', currentUser ? currentUser.uid : 'NULL');
  if (!currentUser) {
      return;
  }
  var data = {
    uid: currentUser.uid,
    displayName: currentUser.displayName || 'Joueur',
    photoURL: currentUser.photoURL || '',
    total: total,
    pct: pct,
    mode: mode || 'normal',
    rounds: (scores||[]).map(function(s) {
      return { name: s.name||'', pts: s.pts||0, maxPts: s.maxPts||0, distM: s.distM!=null?s.distM:null };
    }),
    createdAt: serverTimestamp()
  };
  addDoc(collection(fbDb, 'games'), data)
    .then(function() { showToast('Partie sauvegard\u00e9e !'); })
    .catch(function(e) { console.error('Save error:', e); });
}

// \u2500\u2500 Charger l'historique \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function loadHistory(callback) {
  if (!currentUser) {
      callback([]); 
    return; 
  }
  var q = query(
    collection(fbDb, 'games'),
    where('uid', '==', currentUser.uid),
    orderBy('createdAt', 'desc'),
    limit(20)
  );
  getDocs(q).then(function(snap) {
    var games = [];
    snap.forEach(function(doc) { 
      var d = doc.data();
      games.push(Object.assign({id: doc.id}, d)); 
    });
    callback(games);
  }).catch(function(e) {
    console.error('Load error:', e);
    callback([]);
  });
}

// \u2500\u2500 Afficher l'historique \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function showHistory() {
  if (!currentUser) {
    if(typeof showToast==='function') showToast('Connecte-toi pour voir ton historique');
    return;
  }
  var ov = document.getElementById('overlay');
  // Sauvegarder l'etat actuel
  window._prevOverlayHTML = ov.innerHTML;
  window._prevOverlayHidden = ov.classList.contains('h');
  ov.innerHTML = '<div class="otitle" style="font-size:32px">Chargement...</div>';
  ov.classList.remove('h');

  loadHistory(function(games) {
    var h = [];
    h.push('<div class="otitle" style="font-size:28px">Mes parties</div>');
    h.push('<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">');
    h.push('<img src="'+(currentUser.photoURL||'')+'" style="width:32px;height:32px;border-radius:50%;object-fit:cover">');
    h.push('<span style="color:#e2e8f0;font-size:14px;font-weight:600">'+(currentUser.displayName||'')+'</span>');
    h.push('</div>');

    // S\u00e9parer Normal et No-Zoom
    var gamesPerf = games.filter(function(g){ return (g.mode||'').indexOf('perfection') >= 0; });
    var gamesNozoom = games.filter(function(g){ return (g.mode||'').indexOf('nozoom') >= 0 && (g.mode||'').indexOf('perfection') < 0; });
    var gamesNormal = games.filter(function(g){ return (g.mode||'').indexOf('nozoom') < 0 && (g.mode||'').indexOf('perfection') < 0; });

    if (games.length === 0) {
      h.push('<div class="osub">Aucune partie enregistr\u00e9e pour le moment.</div>');
    } else {
      // Afficher les parties normales
      if(gamesNormal.length > 0){
        h.push('<div style="font-size:11px;color:#f97316;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px">Mode Normal</div>');
        h.push('<div class="ocard" style="max-height:200px;overflow-y:auto;width:100%;max-width:420px;margin-bottom:8px">');
        gamesNormal.forEach(function(g) {
        var date = g.createdAt ? new Date(g.createdAt.seconds * 1000) : new Date();
        var dateStr = date.toLocaleDateString('fr-FR', {day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'});
        var _modeMap={'tout-niveaux':'Tout niveaux','expert':'Expert','difficile':'Difficile','moyen':'Moyen','facile':'Facile','tres-facile':'Tr\u00e8s Facile'};
        var _isNZ=(g.mode||'').indexOf('nozoom')>=0;
        var _lvlKey=(g.mode||'tout-niveaux').replace('nozoom-','');
        var modeLabel=' \u00b7 '+(_isNZ?'No-Zoom \u00b7 ':'')+(_modeMap[_lvlKey]||_lvlKey);
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
            var dist = r.distM != null ? (r.distM < 1000 ? r.distM+'m' : Math.round(r.distM/1000)+'km') : 'rat\u00e9';
            h.push('<span style="margin-right:8px">'+r.name.split('\u2014')[0].trim()+' ('+dist+')</span>');
          });
          h.push('</div>');
        }
        h.push('</div>');
        });
        h.push('</div>');
      }
      // Afficher les parties No-Zoom
      if(gamesNozoom.length > 0){
        h.push('<div style="font-size:11px;color:#f97316;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;margin-top:4px">Mode No-Zoom</div>');
        h.push('<div class="ocard" style="max-height:200px;overflow-y:auto;width:100%;max-width:420px">');
        gamesNozoom.forEach(function(g) {
          var date = g.createdAt ? new Date(g.createdAt.seconds * 1000) : new Date();
          var dateStr = date.toLocaleDateString('fr-FR', {day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'});
          var barColor = g.pct >= 80 ? '#22c55e' : g.pct >= 50 ? '#fbbf24' : '#f97316';
          h.push('<div style="padding:10px 0;border-bottom:1px solid #1e2d45">');
          h.push('<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">');
          h.push('<span style="font-size:12px;color:#6b7280">'+dateStr+'</span>');
          h.push('<span style="font-size:14px;font-weight:700;color:'+barColor+'">'+g.pct+'%</span>');
          h.push('</div>');
          h.push('<span style="font-size:12px;color:#94a3b8">'+g.total.toLocaleString('fr-FR')+' pts</span>');
          h.push('</div>');
        });
        h.push('</div>');
      }
      // Parties Perfection
      if(gamesPerf.length > 0){
        h.push('<div style="font-size:11px;color:#a78bfa;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;margin-top:4px">&#11088; Perfection</div>');
        h.push('<div class="ocard" style="max-height:200px;overflow-y:auto;width:100%;max-width:420px">');
        gamesPerf.forEach(function(g) {
          var date = g.createdAt ? new Date(g.createdAt.seconds * 1000) : new Date();
          var dateStr = date.toLocaleDateString('fr-FR', {day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'});
          var _modeMap={'tout-niveaux':'Tout niveaux','expert':'Expert','difficile':'Difficile','moyen':'Moyen','facile':'Facile'};
          var _lvlKey=(g.mode||'').replace('perfection-','').replace('nozoom-','');
          var barColor = g.pct >= 80 ? '#22c55e' : g.pct >= 50 ? '#fbbf24' : '#f97316';
          h.push('<div style="padding:10px 0;border-bottom:1px solid #1e2d45">');
          h.push('<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">');
          h.push('<span style="font-size:12px;color:#6b7280">'+dateStr+' \u00b7 '+(_modeMap[_lvlKey]||_lvlKey)+'</span>');
          h.push('<span style="font-size:14px;font-weight:700;color:'+barColor+'">'+g.pct+'%</span>');
          h.push('</div>');
          h.push('<span style="font-size:12px;color:#94a3b8">'+g.total.toLocaleString('fr-FR')+' pts \u00b7 '+g.rounds.length+' manches</span>');
          h.push('</div>');
        });
        h.push('</div>');
      }
    }

    h.push('<div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap;justify-content:center">');
    h.push('<div style="display:flex;gap:10px;justify-content:center">');
    h.push('<div style="margin-top:24px;padding-top:16px;border-top:1px solid #1e2d45;width:100%;max-width:460px">');
    h.push('<div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px">Zone de danger</div>');
    h.push('<button onclick="confirmDeleteAccount()" style="padding:8px 16px;border-radius:8px;border:1px solid #ef4444;background:transparent;color:#ef4444;font-size:13px;cursor:pointer;font-weight:600">Supprimer mon compte et mes donn&#233;es</button>');
    h.push('<div style="font-size:11px;color:#6b7280;margin-top:6px">Supprime d&#233;finitivement votre compte, vos parties et vos scores. Irr&#233;versible.</div>');
    h.push('</div>');
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
  if (window._prevOverlayHTML !== undefined) {
    ov.innerHTML = window._prevOverlayHTML;
    if (window._prevOverlayHidden) {
      ov.classList.add('h');
    } else {
      ov.classList.remove('h');
    }
    window._prevOverlayHTML = undefined;
    window._prevOverlayHidden = undefined;
  } else if (typeof gameActive !== 'undefined' && gameActive) {
    ov.classList.add('h');
  } else {
    if (typeof showMenu === 'function') showMenu();
  }
}
window.closeHistory = closeHistory;

// Classement
function loadLeaderboard(mode, callback) {
  var q = query(
    collection(fbDb, 'games'),
    where('mode', '==', mode),
    limit(100)
  );
  getDocs(q).then(function(snap) {
    var entries = [];
    snap.forEach(function(doc) { entries.push(doc.data()); });
    entries.sort(function(a,b){ return (b.total||0)-(a.total||0); });
    callback(entries.slice(0,20));
  }).catch(function(e) {
    console.error('Leaderboard error:', e);
    callback([]);
  });
}

function showLeaderboard() {
  var ov = document.getElementById('overlay');
  window._prevOverlayHTML = ov.innerHTML;
  window._prevOverlayHidden = ov.classList.contains('h');

  var GAME_MODES = [
    {key:'normal',    label:'Normal',     color:'#f97316'},
    {key:'nozoom',    label:'No-Zoom',    color:'#a78bfa'},
    {key:'perfection',label:'Perfection', color:'#22c55e'}
  ];
  var LEVELS = [
    {key:'tout-niveaux', label:'Tout niveaux'},
    {key:'expert',       label:'Expert'},
    {key:'difficile',    label:'Difficile'},
    {key:'moyen',        label:'Moyen'},
    {key:'facile',       label:'Facile'}
  ];

  var currentGameMode = 'normal';
  var currentLevel    = 'tout-niveaux';

  function getModeFilter(gm, lvl) {
    // Le champ 'mode' en base: 'tout-niveaux', 'expert', 'nozoom-expert', 'perfection-tout-niveaux'...
    var prefix = gm === 'nozoom' ? 'nozoom-' : gm === 'perfection' ? 'perfection-' : '';
    return prefix + lvl;
  }

  function render(gm, lvl, entries) {
    var h = [];
    h.push('<div class="otitle" style="font-size:26px">CLASSEMENT</div>');

    // Onglets mode jeu
    h.push('<div style="display:flex;gap:5px;margin-bottom:8px;flex-wrap:wrap;justify-content:center">');
    GAME_MODES.forEach(function(m) {
      var active = m.key === gm;
      h.push('<button data-gm="' + m.key + '" data-lvl="' + lvl + '" onclick="window._showLB(this.dataset.gm,this.dataset.lvl)" style="padding:5px 12px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;border:2px solid ' + m.color + ';background:' + (active ? m.color : 'transparent') + ';color:' + (active ? '#fff' : m.color) + '">' + m.label + '</button>');
    });
    h.push('</div>');

    // Onglets niveau
    h.push('<div style="display:flex;gap:4px;margin-bottom:10px;flex-wrap:wrap;justify-content:center">');
    LEVELS.forEach(function(lv) {
      var active = lv.key === lvl;
      h.push('<button data-gm="' + gm + '" data-lvl="' + lv.key + '" onclick="window._showLB(this.dataset.gm,this.dataset.lvl)" style="padding:4px 10px;border-radius:6px;font-size:11px;cursor:pointer;border:1px solid #2d3f5e;background:' + (active ? '#1e2d45' : 'transparent') + ';color:' + (active ? '#e2e8f0' : '#6b7280') + '">' + lv.label + '</button>');
    });
    h.push('</div>');

    if (entries.length === 0) {
      h.push('<div class="osub" style="margin:16px 0">Aucune partie pour ce mode.</div>');
    } else {
      h.push('<div class="ocard" style="max-height:340px;overflow-y:auto;width:100%;max-width:460px;padding:8px 0">');
      entries.forEach(function(g, i) {
        var medals = ['&#129351;','&#129352;','&#129353;'];
        var medal = i < 3 ? medals[i] : (i+1) + '.';
        var barColor = g.pct >= 80 ? '#22c55e' : g.pct >= 50 ? '#fbbf24' : '#f97316';
        var isMe = currentUser && g.uid === currentUser.uid;
        h.push('<div style="display:flex;align-items:center;gap:10px;padding:8px 14px;border-bottom:1px solid #1e2d45' + (isMe ? ';background:#1a2238;border-radius:8px' : '') + '">');
        h.push('<span style="font-size:16px;min-width:28px;text-align:center">' + medal + '</span>');
        if (g.photoURL) h.push('<img src="' + g.photoURL + '" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0">');
        else h.push('<div style="width:28px;height:28px;border-radius:50%;background:#1e2d45;flex-shrink:0"></div>');
        h.push('<span style="flex:1;font-size:13px;color:' + (isMe ? '#f97316' : '#e2e8f0') + ';font-weight:' + (isMe ? '700' : '400') + ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + (g.displayName || 'Joueur') + '</span>');
        h.push('<div style="text-align:right"><div style="font-size:15px;font-weight:700;color:' + barColor + '">' + (g.total || 0).toLocaleString('fr-FR') + ' pts</div>');
        h.push('<div style="font-size:11px;color:#6b7280">' + (g.pct || 0) + '%</div></div></div>');
      });
      h.push('</div>');
    }
    h.push('<button class="btn bg" onclick="closeHistory()" style="width:auto;padding:10px 20px;margin-top:8px">&#8592; Retour</button>');
    ov.innerHTML = h.join('');
    ov.classList.remove('h');
  }

  window._showLB = function(gm, lvl) {
    currentGameMode = gm;
    currentLevel    = lvl;
    ov.innerHTML = '<div class="otitle" style="font-size:26px">Chargement&#8230;</div>';
    ov.classList.remove('h');
    var modeFilter = getModeFilter(gm, lvl);
    loadLeaderboard(modeFilter, function(entries) { render(gm, lvl, entries); });
  };

  window._showLB('normal', 'tout-niveaux');
}

function saveDailyScore(level, total, pct) {
  if(!currentUser) return;
  var dateStr = typeof getDailyDateFR==='function' ? getDailyDateFR() : new Date().toISOString().slice(0,10);
  // ID déterministe uid+date+level → un seul document par joueur/jour/niveau (setDoc écrase si rejoué)
  var docId = currentUser.uid + '_' + dateStr + '_' + level;
  setDoc(doc(fbDb,'daily_scores', docId), {
    uid: currentUser.uid,
    displayName: currentUser.displayName || 'Joueur',
    photoURL: currentUser.photoURL || '',
    total: total, pct: pct, level: level, date: dateStr,
    createdAt: serverTimestamp()
  }).catch(function(e){ console.error('saveDailyScore:', e); });
}

function loadDailyLeaderboard(level, callback) {
  var dateStr = typeof getDailyDateFR==='function' ? getDailyDateFR() : new Date().toISOString().slice(0,10);
  getDocs(query(collection(fbDb,'daily_scores'), where('date','==',dateStr), where('level','==',level), limit(100)))
    .then(function(snap) {
      var entries = [];
      snap.forEach(function(doc) { entries.push(doc.data()); });
      entries.sort(function(a,b){ return (b.total||0)-(a.total||0); });
      callback(entries.slice(0,20));
    }).catch(function(e){ console.error('loadDailyLB:', e); callback([]); });
}

function showDailyLB() {
  var ov = document.getElementById('overlay');
  window._prevOverlayHTML = ov.innerHTML;
  window._prevOverlayHidden = ov.classList.contains('h');
  var LVLS = [
    {i:0, label:'Expert', color:'#ef4444'},
    {i:1, label:'Difficile', color:'#f97316'},
    {i:2, label:'Moyen', color:'#eab308'},
    {i:3, label:'Facile', color:'#22c55e'}
  ];
  function render(level, entries) {
    var dateStr = typeof getDailyDateFR==='function' ? getDailyDateFR() : '';
    var h = [];
    h.push('<div class="otitle" style="font-size:26px">CLASSEMENT DU JOUR</div>');
    h.push('<div style="font-size:11px;color:#6b7280;margin-bottom:8px">' + dateStr + '</div>');
    h.push('<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-bottom:10px">');
    LVLS.forEach(function(lv) {
      var active = lv.i === level;
      h.push('<button data-lvl="' + lv.i + '" onclick="window._showDailyLbLevel(parseInt(this.dataset.lvl))" style="padding:5px 12px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;border:2px solid ' + lv.color + ';background:' + (active ? lv.color : 'transparent') + ';color:' + (active ? '#fff' : lv.color) + '">' + lv.label + '</button>');
    });
    h.push('</div>');
    if (entries.length === 0) {
      h.push('<div class="osub" style="margin:16px 0">Aucune partie aujourd&#39;hui.</div>');
    } else {
      h.push('<div class="ocard" style="max-height:340px;overflow-y:auto;width:100%;max-width:460px;padding:8px 0">');
      entries.forEach(function(g, i) {
        var medals = ['&#129351;','&#129352;','&#129353;'];
        var medal = i < 3 ? medals[i] : (i+1) + '.';
        var bc = g.pct >= 80 ? '#22c55e' : g.pct >= 50 ? '#fbbf24' : '#f97316';
        var me = currentUser && g.uid === currentUser.uid;
        h.push('<div style="display:flex;align-items:center;gap:10px;padding:8px 14px;border-bottom:1px solid #1e2d45' + (me ? ';background:#1a2238;border-radius:8px' : '') + '">');
        h.push('<span style="font-size:16px;min-width:28px;text-align:center">' + medal + '</span>');
        if (g.photoURL) h.push('<img src="' + g.photoURL + '" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0">');
        else h.push('<div style="width:28px;height:28px;border-radius:50%;background:#1e2d45;flex-shrink:0"></div>');
        h.push('<span style="flex:1;font-size:13px;color:' + (me ? '#f97316' : '#e2e8f0') + ';font-weight:' + (me ? '700' : '400') + ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + (g.displayName || 'Joueur') + '</span>');
        h.push('<div style="text-align:right"><div style="font-size:15px;font-weight:700;color:' + bc + '">' + (g.total || 0).toLocaleString('fr-FR') + ' pts</div><div style="font-size:11px;color:#6b7280">' + (g.pct || 0) + '%</div></div></div>');
      });
      h.push('</div>');
    }
    h.push('<button class="btn bg" onclick="closeHistory()" style="width:auto;padding:10px 20px;margin-top:8px">&#8592; Retour</button>');
    ov.innerHTML = h.join('');
    ov.classList.remove('h');
  }
  window._showDailyLbLevel = function(level) {
    ov.innerHTML = '<div class="otitle" style="font-size:26px">Chargement&#8230;</div>';
    ov.classList.remove('h');
    loadDailyLeaderboard(level, function(entries) { render(level, entries); });
  };
  window._showDailyLbLevel(0);
}

// ── Premium ───────────────────────────────────────────────────────────────────

function isPremiumUser() {
  return currentUserPremium === true;
}

function showPremiumOverlay(featureName) {
  var ov = document.getElementById('overlay');
  window._prevOverlayHTML = ov.innerHTML;
  window._prevOverlayHidden = ov.classList.contains('h');
  var h = [];
  if(!currentUser) {
    h.push('<div class="otitle" style="font-size:26px;color:#fbbf24">Connexion requise</div>');
    h.push('<div style="font-size:14px;color:#94a3b8;margin-bottom:20px;text-align:center;max-width:340px">Connecte-toi pour acc&#233;der &#224; <strong style="color:#e2e8f0">'+featureName+'</strong>.</div>');
    h.push('<button onclick="fbSignIn()" style="padding:10px 28px;border-radius:8px;border:none;background:#f97316;color:#fff;font-weight:700;font-size:14px;cursor:pointer">Se connecter avec Google</button>');
    h.push('<button onclick="closeHistory()" style="margin-top:10px;padding:8px 20px;border-radius:8px;border:1px solid #2d3f5e;background:transparent;color:#6b7280;cursor:pointer;font-size:13px;display:block">&#8592; Retour</button>');
    ov.innerHTML=h.join(''); ov.classList.remove('h'); return;
  }
  h.push('<div class="otitle" style="font-size:26px;color:#fbbf24">&#11088; Premium</div>');
  h.push('<div style="font-size:14px;color:#94a3b8;margin-bottom:16px;text-align:center;max-width:340px">D&#233;bloquez <strong style="color:#e2e8f0">'+featureName+'</strong> et tous les modes avanc&#233;s.</div>');
  h.push('<div style="background:#0d1120;border:1px solid #1e2d45;border-radius:12px;padding:14px;width:100%;max-width:340px;margin-bottom:16px">');
  h.push('<div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px">Inclus dans Premium</div>');
  [['&#9203;','Acc&#232;s permanent sans abonnement'],['&#128683;','Mode No-Zoom'],['&#11088;','Mode Perfection'],['&#127760;','Mode Multijoueur'],['&#9989;','Soutien ind&#233;pendant']].forEach(function(f){
    h.push('<div style="display:flex;align-items:center;gap:8px;padding:5px 0;font-size:13px;color:#e2e8f0"><span>'+f[0]+'</span><span>'+f[1]+'</span></div>');
  });
  h.push('</div>');
  h.push('<div style="width:100%;max-width:340px;margin-bottom:12px">');
  h.push('<div style="font-size:12px;color:#6b7280;margin-bottom:8px;text-align:center">Choisissez le montant (min. 1&#8364;)</div>');
  h.push('<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:6px;margin-bottom:8px">');
  [2,5,10,20].forEach(function(amt){
    h.push('<button data-amt="'+amt+'" onclick="selectAmount(parseInt(this.dataset.amt))" id="amt-btn-'+amt+'" style="padding:8px;border-radius:7px;border:2px solid #1e2d45;background:#0d1120;color:#e2e8f0;font-size:13px;font-weight:600;cursor:pointer">'+amt+'&#8364;</button>');
  });
  h.push('</div>');
  h.push('<input id="custom-amount" type="number" min="1" step="1" placeholder="Montant libre (&#8364;)" style="width:100%;background:#1a2238;border:1px solid #2d3f5e;border-radius:7px;padding:8px 12px;color:#e2e8f0;font-size:13px">');
  h.push('</div>');
  h.push('<button onclick="initiatePremiumPayment()" id="pay-btn" style="width:100%;max-width:340px;padding:12px;border-radius:9px;border:none;background:#fbbf24;color:#111;font-weight:700;font-size:15px;cursor:pointer">Soutenir et d&#233;bloquer &#8594;</button>');
  h.push('<div style="font-size:11px;color:#4b5563;margin-top:8px;text-align:center">Paiement s&#233;curis&#233; via Stripe</div>');
  h.push('<div style="width:100%;max-width:340px;margin-top:14px;border-top:1px solid #1e2d45;padding-top:14px">');
  h.push('<div style="font-size:11px;color:#6b7280;text-align:center;margin-bottom:8px">Vous avez un code testeur ?</div>');
  h.push('<div style="display:flex;gap:6px">');
  h.push('<input id="redeem-input" placeholder="CODE-XXXX" maxlength="12" style="flex:1;background:#1a2238;border:1px solid #2d3f5e;border-radius:7px;padding:8px 10px;color:#e2e8f0;font-size:13px;letter-spacing:2px;text-transform:uppercase">');
  h.push('<button onclick="redeemCode()" style="padding:8px 14px;border-radius:7px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:700;cursor:pointer">Activer</button>');
  h.push('</div>');
  h.push('<div id="redeem-msg" style="font-size:12px;margin-top:6px;text-align:center;min-height:18px"></div>');
  h.push('</div>');
  h.push('<div style="display:flex;gap:12px;margin-top:10px">');
  h.push('<button onclick="closeHistory()" style="padding:8px 20px;border-radius:8px;border:1px solid #2d3f5e;background:transparent;color:#6b7280;cursor:pointer;font-size:13px">&#8592; Retour</button>');
  h.push('<a href="https://gaelbodevin-bit.github.io/geoculture/legal.html" style="padding:8px 12px;border-radius:8px;border:1px solid #2d3f5e;background:transparent;color:#6b7280;cursor:pointer;font-size:11px;text-decoration:none">Mentions l&#233;gales</a>');
  h.push('</div>');
  ov.innerHTML=h.join(''); ov.classList.remove('h');
  window._selectedAmount=5; selectAmount(5);
}

function selectAmount(amt) {
  window._selectedAmount=amt;
  [2,5,10,20].forEach(function(a){
    var el=document.getElementById('amt-btn-'+a);
    if(!el) return;
    el.style.borderColor=a===amt?'#fbbf24':'#1e2d45';
    el.style.color=a===amt?'#fbbf24':'#e2e8f0';
  });
  var inp=document.getElementById('custom-amount');
  if(inp) inp.value='';
}

function redeemCode() {
  if (!currentUser) { if(typeof showToast==='function') showToast('Connecte-toi d\'abord !'); return; }
  var input = document.getElementById('redeem-input');
  var msg = document.getElementById('redeem-msg');
  if (!input || !msg) return;
  var code = input.value.trim().toUpperCase();
  if (code.length < 4) { msg.style.color='#ef4444'; msg.textContent='Code invalide.'; return; }
  msg.style.color='#94a3b8'; msg.textContent='V\u00e9rification\u2026';
  var codeRef = doc(fbDb, 'testCodes', code);
  getDoc(codeRef).then(function(snap) {
    if (!snap.exists()) { msg.style.color='#ef4444'; msg.textContent='Code introuvable.'; return; }
    var data = snap.data();
    if (data.used) { msg.style.color='#ef4444'; msg.textContent='Code d\u00e9j\u00e0 utilis\u00e9.'; return; }
    return setDoc(codeRef, { used: true, usedBy: currentUser.uid, usedAt: serverTimestamp() }, { merge: true })
      .then(function() {
        return setDoc(doc(fbDb, 'users', currentUser.uid), { premium: true, premiumSource: 'testCode', premiumCode: code }, { merge: true });
      })
      .then(function() {
        currentUserPremium = true;
        window.isPremium = true;
        msg.style.color='#22c55e'; msg.textContent='\u2713 Premium activ\u00e9 ! Profitez bien.';
        setTimeout(function() { if(typeof showMenu==='function') showMenu(); }, 1200);
      });
  }).catch(function(e) {
    msg.style.color='#ef4444'; msg.textContent='Erreur : '+e.message;
  });
}

function initiatePremiumPayment() {
  if(!currentUser){ if(typeof fbSignIn==='function') fbSignIn(); return; }
  var inp=document.getElementById('custom-amount');
  var amount=inp&&inp.value?parseFloat(inp.value):(window._selectedAmount||5);
  if(isNaN(amount)||amount<1){ if(typeof showToast==='function') showToast('Montant minimum : 1€'); return; }
  var btn=document.getElementById('pay-btn');
  if(btn){ btn.textContent='Redirection...'; btn.disabled=true; }
  currentUser.getIdToken(true).then(function(token){
    return fetch('https://us-central1-geo-culture-73453.cloudfunctions.net/createCheckoutSession',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},
      body:JSON.stringify({data:{amount:amount}})
    });
  }).then(function(res){ return res.json(); }).then(function(result){
    var url=result&&result.result&&result.result.url;
    if(url){ window.location.href=url; }
    else{ throw new Error('URL manquante'); }
  }).catch(function(err){
    console.error('Stripe error:',err);
    if(typeof showToast==='function') showToast('Erreur: '+err.message);
    if(btn){ btn.textContent='Soutenir et débloquer →'; btn.disabled=false; }
  });
}

function deleteMyAccount() {
  confirmDeleteAccount();
}

function confirmDeleteAccount() {
  var ov=document.getElementById('overlay');
  var h=[];
  h.push('<div class="otitle" style="font-size:24px;color:#ef4444">&#9888; Supprimer le compte</div>');
  h.push('<div style="font-size:14px;color:#94a3b8;margin:12px 0;text-align:center;max-width:380px;line-height:1.6">Cette action est <strong style="color:#ef4444">irr&#233;versible</strong>.<br>Toutes vos donn&#233;es seront supprim&#233;es&nbsp;:<br><span style="font-size:12px;color:#6b7280">compte, parties, scores, statut premium</span></div>');
  h.push('<div style="display:flex;gap:10px;margin-top:8px">');
  h.push('<button onclick="doDeleteAccount()" style="padding:10px 20px;border-radius:8px;border:none;background:#ef4444;color:#fff;font-weight:700;font-size:14px;cursor:pointer">Oui, supprimer</button>');
  h.push('<button onclick="closeHistory()" style="padding:10px 20px;border-radius:8px;border:1px solid #2d3f5e;background:transparent;color:#6b7280;font-size:14px;cursor:pointer">Annuler</button>');
  h.push('</div>');
  ov.innerHTML=h.join(''); ov.classList.remove('h');
}

function doDeleteAccount() {
  if(!currentUser) return;
  var ov=document.getElementById('overlay');
  ov.innerHTML='<div class="otitle" style="font-size:22px;color:#ef4444">Suppression en cours&#8230;</div>';
  ov.classList.remove('h');
  var deleteFn=httpsCallable(fbFunctions,'deleteAccount');
  deleteFn({}).then(function(){
    ov.innerHTML='<div class="otitle" style="font-size:22px">Compte supprim&#233;</div><div style="color:#6b7280;font-size:14px;margin-top:8px">Vos donn&#233;es ont &#233;t&#233; effac&#233;es. Au revoir&nbsp;!</div>';
    setTimeout(function(){ window.location.reload(); },2500);
  }).catch(function(e){
    console.error('deleteAccount:',e);
    ov.innerHTML='<div class="otitle" style="font-size:22px;color:#ef4444">Erreur</div><div style="color:#94a3b8;font-size:14px;margin-top:8px">'+e.message+'</div><button onclick="closeHistory()" style="margin-top:16px;padding:8px 20px;border-radius:8px;border:1px solid #2d3f5e;background:transparent;color:#6b7280;cursor:pointer">Fermer</button>';
  });
}


window.showDailyLB=showDailyLB;
window.showLeaderboard=showLeaderboard;window.saveDailyScore=saveDailyScore;
window.isPremiumUser=isPremiumUser;window.showPremiumOverlay=showPremiumOverlay;
window.initiatePremiumPayment=initiatePremiumPayment;window.selectAmount=selectAmount;
window.redeemCode=redeemCode;
window.deleteMyAccount=deleteMyAccount;
window.confirmDeleteAccount=confirmDeleteAccount;
window.doDeleteAccount=doDeleteAccount;
window.isPremiumUser=isPremiumUser;
window.showPremiumOverlay=showPremiumOverlay;
window.initiatePremiumPayment=initiatePremiumPayment;
window.selectAmount=selectAmount;