// \u2500\u2500 Firebase Auth + Historique \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
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

// \u2500\u2500 Auth state \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
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
    orderBy('total', 'desc'),
    limit(20)
  );
  getDocs(q).then(function(snap) {
    var entries = [];
    snap.forEach(function(doc) { entries.push(doc.data()); });
    callback(entries);
  }).catch(function(e) {
    console.error('Leaderboard error:', e);
    callback([]);
  });
}

function showLeaderboard() {
  var ov = document.getElementById('overlay');
  window._prevOverlayHTML = ov.innerHTML;
  window._prevOverlayHidden = ov.classList.contains('h');

  var MODES = [
    {key:'tout-niveaux',label:'Tout niveaux',color:'#f97316'},
    {key:'expert',label:'Expert',color:'#ef4444'},
    {key:'difficile',label:'Difficile',color:'#f97316'},
    {key:'moyen',label:'Moyen',color:'#eab308'},
    {key:'facile',label:'Facile',color:'#22c55e'}
  ];

  function render(mode, entries) {
    var h = [];
    h.push('<div class="otitle" style="font-size:28px">Classement</div>');
    h.push('<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-bottom:8px">');
    MODES.forEach(function(m) {
      var active = m.key === mode;
      h.push('<button onclick="window._showLbMode(\''+m.key+'\')" style="padding:5px 12px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;border:2px solid '+m.color+';background:'+(active?m.color:'transparent')+';color:'+(active?'#fff':m.color)+'">'+m.label+'</button>');
    });
    h.push('</div>');

    if(entries.length===0){
      h.push('<div class="osub" style="margin:16px 0">Aucune partie pour ce mode.</div>');
    } else {
      h.push('<div class="ocard" style="max-height:380px;overflow-y:auto;width:100%;max-width:480px;padding:8px 0">');
      entries.forEach(function(g,i){
        var medal = i===0?'\ud83e\udd47':i===1?'\ud83e\udd48':i===2?'\ud83e\udd49':(i+1)+'.';
        var barColor = g.pct>=80?'#22c55e':g.pct>=50?'#fbbf24':'#f97316';
        var isMe = currentUser&&g.uid===currentUser.uid;
        h.push('<div style="display:flex;align-items:center;gap:10px;padding:8px 14px;border-bottom:1px solid #1e2d45'+(isMe?';background:#1a2238;border-radius:8px':'')+'" >');
        h.push('<span style="font-size:16px;min-width:28px;text-align:center">'+medal+'</span>');
        if(g.photoURL){
          h.push('<img src="'+g.photoURL+'" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0">');
        } else {
          h.push('<div style="width:28px;height:28px;border-radius:50%;background:#1e2d45;flex-shrink:0"></div>');
        }
        h.push('<span style="flex:1;font-size:13px;color:'+(isMe?'#f97316':'#e2e8f0')+';font-weight:'+(isMe?'700':'400')+';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+(g.displayName||'Joueur')+'</span>');
        h.push('<div style="text-align:right"><div style="font-size:15px;font-weight:700;color:'+barColor+'">'+(g.total||0).toLocaleString('fr-FR')+' pts</div>');
        h.push('<div style="font-size:11px;color:#6b7280">'+(g.pct||0)+'%</div></div></div>');
      });
      h.push('</div>');
    }
    h.push('<button class="btn bg" onclick="closeHistory()" style="width:auto;padding:10px 20px;margin-top:8px">&#8592; Retour</button>');
    ov.innerHTML=h.join('');
    ov.classList.remove('h');
  }

  window._showLbMode = function(mode) {
    ov.innerHTML='<div class="otitle" style="font-size:28px">Chargement...</div>';
    ov.classList.remove('h');
    loadLeaderboard(mode, function(entries){ render(mode, entries); });
  };

  window._showLbMode('tout-niveaux');
}

window.showLeaderboard = showLeaderboard;
function saveDailyScore(level,total,pct){if(!currentUser)return;var d=typeof getDailyDateFR==='function'?getDailyDateFR():new Date().toISOString().slice(0,10);addDoc(collection(fbDb,'daily_scores'),{uid:currentUser.uid,displayName:currentUser.displayName||'Joueur',photoURL:currentUser.photoURL||'',total:total,pct:pct,level:level,date:d,createdAt:serverTimestamp()}).catch(function(e){console.error(e);});}
function loadDailyLeaderboard(level,callback){var d=typeof getDailyDateFR==='function'?getDailyDateFR():new Date().toISOString().slice(0,10);getDocs(query(collection(fbDb,'daily_scores'),where('date','==',d),where('level','==',level),limit(100))).then(function(snap){var e=[];snap.forEach(function(doc){e.push(doc.data());});e.sort(function(a,b){return(b.total||0)-(a.total||0);});callback(e.slice(0,20));}).catch(function(e){callback([]);});}
function showDailyLB(){var ov=document.getElementById('overlay');window._prevOverlayHTML=ov.innerHTML;window._prevOverlayHidden=ov.classList.contains('h');var LVLS=[{i:0,label:'Expert',color:'#ef4444'},{i:1,label:'Difficile',color:'#f97316'},{i:2,label:'Moyen',color:'#eab308'},{i:3,label:'Facile',color:'#22c55e'}];function render(level,entries){var d=typeof getDailyDateFR==='function'?getDailyDateFR():'';var h=[];h.push('<div class="otitle" style="font-size:26px">CLASSEMENT DU JOUR</div>');h.push('<div style="font-size:11px;color:#6b7280;margin-bottom:8px">'+d+'</div>');h.push('<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-bottom:10px">');LVLS.forEach(function(lv){var a=lv.i===level;h.push('<button onclick="window._showDailyLbLevel('+lv.i+')" style="padding:5px 12px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;border:2px solid '+lv.color+';background:'+(a?lv.color:'transparent')+';color:'+(a?'#fff':lv.color)+'">'+lv.label+'</button>');});h.push('</div>');if(entries.length===0){h.push('<div class="osub" style="margin:16px 0">Aucune partie aujourd&#39;hui.</div>');}else{h.push('<div class="ocard" style="max-height:340px;overflow-y:auto;width:100%;max-width:460px;padding:8px 0">');entries.forEach(function(g,i){var medals=['&#129351;','&#129352;','&#129353;'];var medal=i<3?medals[i]:(i+1)+'.';var bc=g.pct>=80?'#22c55e':g.pct>=50?'#fbbf24':'#f97316';var me=currentUser&&g.uid===currentUser.uid;h.push('<div style="display:flex;align-items:center;gap:10px;padding:8px 14px;border-bottom:1px solid #1e2d45'+(me?';background:#1a2238;border-radius:8px':'')+'">');h.push('<span style="font-size:16px;min-width:28px;text-align:center">'+medal+'</span>');if(g.photoURL)h.push('<img src="'+g.photoURL+'" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0">');else h.push('<div style="width:28px;height:28px;border-radius:50%;background:#1e2d45;flex-shrink:0"></div>');h.push('<span style="flex:1;font-size:13px;color:'+(me?'#f97316':'#e2e8f0')+';font-weight:'+(me?'700':'400')+';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+(g.displayName||'Joueur')+'</span>');h.push('<div style="text-align:right"><div style="font-size:15px;font-weight:700;color:'+bc+'">'+(g.total||0).toLocaleString('fr-FR')+' pts</div><div style="font-size:11px;color:#6b7280">'+(g.pct||0)+'%</div></div></div>');});h.push('</div>');}h.push('<button class="btn bg" onclick="closeHistory()" style="width:auto;padding:10px 20px;margin-top:8px">&#8592; Retour</button>');ov.innerHTML=h.join('');ov.classList.remove('h');}window._showDailyLbLevel=function(level){ov.innerHTML='<div class="otitle" style="font-size:26px">Chargement...</div>';ov.classList.remove('h');loadDailyLeaderboard(level,function(entries){render(level,entries);});};window._showDailyLbLevel(0);}window.showDailyLB=showDailyLB;window.saveDailyScore=saveDailyScore;