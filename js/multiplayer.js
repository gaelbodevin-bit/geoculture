// ?? GéoCulture Multijoueur – v3.1 (tous jouent ensemble, panel live, marqueurs)
import { initializeApp, getApps } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getDatabase, ref, set, get, onValue, off, update, remove }
  from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js';

var firebaseConfig = {
  apiKey: "AIzaSyDm7KMECwQVWvnOnMmSVm8aK7FdP03QWyA",
  authDomain: "geo-culture-73453.firebaseapp.com",
  databaseURL: "https://geo-culture-73453-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "geo-culture-73453",
  storageBucket: "geo-culture-73453.firebasestorage.app",
  messagingSenderId: "701399534769",
  appId: "1:701399534769:web:ea9418505d8d2e9a9ea690"
};

var mpApp = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);
var rtdb = getDatabase(mpApp, 'https://geo-culture-73453-default-rtdb.europe-west1.firebasedatabase.app');

// ??? État local ???????????????????????????????????????????????????????????????
var mp = {
  roomCode: null, playerId: null, playerName: null,
  isHost: false, roomRef: null,
  listeners: [], timerInterval: null
};

var mpCurrentRound = -1;   // index de la manche actuellement jouée
var mpAnswered    = false;  // le joueur local a-t-il répondu ce round ?
var mpRoundActive = false;  // la manche est-elle en cours (empêche les ré-init)
var mpOtherMarkers = {};    // { playerId: L.marker }
var mpPolylines   = [];    // polylines de fin de manche à supprimer

// Couleurs fixes par joueur
var MP_COLORS = ['#3b82f6','#a855f7','#ec4899','#14b8a6','#f59e0b','#06b6d4','#84cc16','#f43f5e'];
var _colorMap = {};
function mpColorFor(pid) {
  if(!_colorMap[pid]) _colorMap[pid] = MP_COLORS[Object.keys(_colorMap).length % MP_COLORS.length];
  return _colorMap[pid];
}

// ??? Utilitaires ??????????????????????????????????????????????????????????????
function genCode(){ var c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789',s=''; for(var i=0;i<6;i++)s+=c[Math.floor(Math.random()*c.length)]; return s; }
function genPid(){ return 'p_'+Math.random().toString(36).substr(2,9)+'_'+Date.now(); }
function getPlayerName(){ var u=typeof getCurrentUser==='function'?getCurrentUser():null; return u?(u.displayName||u.email.split('@')[0]):(mp.playerName||'Joueur'); }
function getPlayerPhoto(){ var u=typeof getCurrentUser==='function'?getCurrentUser():null; return u?(u.photoURL||''):''; }
function fmtPts(n){ return (n||0).toLocaleString('fr-FR'); }
function fmtDst(km){ if(km==null)return '—'; return km<1?Math.round(km*1000)+'m':Math.round(km)+'km'; }

// ??? Créer un salon ???????????????????????????????????????????????????????????
function mpCreateRoom(options) {
  var code = genCode();
  mp.roomCode = code; mp.playerId = genPid(); mp.isHost = true;
  mp.roomRef = ref(rtdb, 'rooms/'+code);
  _colorMap = {};
  var myColor = mpColorFor(mp.playerId);

  var data = {
    code, host: mp.playerId, status: 'waiting',
    options: {
      fixedLevel: options.fixedLevel!==undefined ? options.fixedLevel : -1,
      noZoomMode: options.noZoomMode||false,
      perfectionMode: options.perfectionMode||false,
      chillMode: options.chillMode||false,
      nbRounds: options.nbRounds||5, timerDuration: 30
    },
    players: {}, round: 0, roundSeeds: null, createdAt: Date.now()
  };
  data.players[mp.playerId] = { name:getPlayerName(), photo:getPlayerPhoto(), color:myColor, isHost:true, score:0, online:true, joinedAt:Date.now() };

  return set(mp.roomRef, data).then(function() {
    setTimeout(function(){ if(mp.roomRef) remove(mp.roomRef); }, 7200000);
    mpListenRoom(); mpShowLobby(); return code;
  });
}

// ??? Rejoindre un salon ???????????????????????????????????????????????????????
function mpJoinRoom(code, playerName) {
  code = code.toUpperCase().trim();
  mp.roomCode = code; mp.playerId = genPid(); mp.playerName = playerName; mp.isHost = false;
  mp.roomRef = ref(rtdb, 'rooms/'+code);

  return get(mp.roomRef).then(function(snap) {
    if(!snap.exists()) throw new Error('Salon introuvable');
    var room = snap.val();
    if(room.status !== 'waiting') throw new Error('Partie déjà commencée');
    if(Object.keys(room.players||{}).length >= 8) throw new Error('Salon complet (8/8)');
    _colorMap = {};
    Object.entries(room.players||{}).forEach(function(e){ if(e[1].color) _colorMap[e[0]]=e[1].color; });
    var myColor = mpColorFor(mp.playerId);
    return set(ref(rtdb,'rooms/'+code+'/players/'+mp.playerId), {
      name: getPlayerName()||playerName||'Joueur', photo:getPlayerPhoto(),
      color: myColor, isHost:false, score:0, online:true, joinedAt:Date.now()
    });
  }).then(function(){ mpListenRoom(); mpShowLobby(); });
}

// ??? Écouter le salon (un seul listener sur la room entière) ?????????????????
function mpListenRoom() {
  if(!mp.roomRef) return;
  var fn = onValue(mp.roomRef, function(snap) {
    if(!snap.exists()){ mpCleanup(); return; }
    mpHandleRoomChange(snap.val());
  });
  mp.listeners.push({ref: mp.roomRef, fn});
}

// ??? Routeur principal ????????????????????????????????????????????????????????
function mpHandleRoomChange(room) {
  // --- Mise à jour panel live si on est en train de jouer ---
  if(mpRoundActive) {
    mpUpdateLivePanel(room);
    mpUpdateOtherMarkers(room);
  }

  switch(room.status) {
    case 'waiting':   mpUpdateLobby(room); break;
    case 'countdown': mpHandleCountdown(room); break;
    case 'playing':   mpHandlePlaying(room); break;
    case 'roundEnd':  mpHandleRoundEnd(room); break;
    case 'finished':  mpShowFinalResults(room); break;
    case 'disbanded': mpOnDisbanded(room); break;
  }
}

// ??? Lobby ????????????????????????????????????????????????????????????????????
function mpShowLobby() {
  document.getElementById('overlay').classList.remove('h');
  mpUpdateLobby(null);
}

function mpUpdateLobby(room) {
  // Ne redessiner que si on est bien en 'waiting' (évite d'écraser l'écran de jeu)
  if(mpRoundActive) return;

  var ov = document.getElementById('overlay');
  if(!room) {
    ov.innerHTML = '<div class="otitle">GEO<br>CULTURE</div><div style="color:#94a3b8;font-size:14px;margin-top:8px">Connexion au salon...</div>';
    return;
  }

  var players = room.players||{}, plist = Object.entries(players);
  var opts = room.options||{};
  var canStart = mp.isHost && plist.length >= 2;
  var lvlNames = ['Tout niveaux','Expert','Difficile','Moyen','Facile'];
  var lvlLabel = lvlNames[opts.fixedLevel>=0 ? opts.fixedLevel+1 : 0] || 'Tout niveaux';

  var h = [];
  h.push('<div style="text-align:center;margin-bottom:12px">');
  h.push('<div class="otitle" style="font-size:32px;margin-bottom:4px">MULTIJOUEUR</div>');
  h.push('<div style="font-size:13px;color:#94a3b8">Salon : <span style="font-family:monospace;font-size:20px;font-weight:700;color:#f97316;letter-spacing:4px;background:#1a2238;padding:4px 12px;border-radius:6px">'+room.code+'</span></div>');
  h.push('<div style="font-size:11px;color:#6b7280;margin-top:4px">Partage ce code avec tes amis</div>');
  h.push('</div>');

  h.push('<div style="display:flex;gap:8px;justify-content:center;margin-bottom:12px;flex-wrap:wrap">');
  h.push('<span style="background:#1a2238;border:1px solid #2d3f5e;border-radius:6px;padding:4px 10px;font-size:12px;color:#94a3b8">'+lvlLabel+'</span>');
  h.push('<span style="background:#1a2238;border:1px solid #2d3f5e;border-radius:6px;padding:4px 10px;font-size:12px;color:#94a3b8">'+(opts.noZoomMode?'No-Zoom':opts.perfectionMode?'Perfection':'Normal')+'</span>');
  h.push('<span style="background:#1a2238;border:1px solid #2d3f5e;border-radius:6px;padding:4px 10px;font-size:12px;color:#94a3b8">'+(opts.nbRounds||5)+' manches</span>');
  h.push('</div>');

  h.push('<div style="width:100%;max-width:400px;margin-bottom:12px">');
  h.push('<div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Joueurs ('+plist.length+'/8)</div>');
  plist.forEach(function([pid,p]) {
    var isMe = pid===mp.playerId, col = p.color||mpColorFor(pid);
    h.push('<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:'+(isMe?'#1a2238':'#0d1120')+';border:1px solid '+(isMe?col:'#1e2d45')+';border-radius:8px;margin-bottom:4px">');
    h.push('<div style="width:10px;height:10px;border-radius:50%;background:'+col+';flex-shrink:0"></div>');
    if(p.photo) h.push('<img src="'+p.photo+'" style="width:28px;height:28px;border-radius:50%;object-fit:cover">');
    else h.push('<div style="width:28px;height:28px;border-radius:50%;background:#1e2d45;display:flex;align-items:center;justify-content:center;font-size:12px;color:#94a3b8">'+p.name[0].toUpperCase()+'</div>');
    h.push('<span style="flex:1;font-size:13px;color:'+(isMe?col:'#e2e8f0')+';font-weight:'+(isMe?'700':'400')+'">'+p.name+(isMe?' (moi)':'')+'</span>');
    if(p.isHost) h.push('<span style="font-size:10px;color:#f97316;background:#3d1a05;padding:2px 6px;border-radius:4px">Hôte</span>');
    h.push('</div>');
  });
  h.push('</div>');

  h.push('<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">');
  if(mp.isHost) {
    h.push('<button onclick="mpLaunchGame()" '+(canStart?'':'disabled')+' style="padding:10px 28px;font-size:14px;font-weight:700;border-radius:9px;border:none;cursor:'+(canStart?'pointer':'not-allowed')+';background:'+(canStart?'#f97316':'#374151')+';color:#fff">'+(canStart?'▶ Lancer la partie':'En attente (min. 2 joueurs)')+'</button>');
  } else {
    h.push('<div style="color:#94a3b8;font-size:13px;padding:10px">En attente que l\'hôte lance...</div>');
  }
  h.push('<button onclick="mpLeaveRoom()" style="padding:10px 20px;font-size:13px;border-radius:9px;border:1px solid #2d3f5e;background:transparent;color:#94a3b8;cursor:pointer">Quitter</button>');
  h.push('</div>');
  ov.innerHTML = h.join('');
}

// ??? Lancer la partie ?????????????????????????????????????????????????????????
function mpLaunchGame() {
  if(!mp.isHost || !mp.roomRef) return;
  get(mp.roomRef).then(function(snap) {
    var nb = (snap.val().options||{}).nbRounds||5;
    var indices = Array.from({length: typeof ROUNDS!=='undefined'?ROUNDS.length:493}, (_,i)=>i);
    var seed = Date.now();
    function sr(max){ seed=(seed*1664525+1013904223)&0xffffffff; return Math.abs(seed)%max; }
    for(var j=indices.length-1;j>0;j--){ var k=sr(j+1); [indices[j],indices[k]]=[indices[k],indices[j]]; }
    update(mp.roomRef, { status:'countdown', roundSeeds:indices.slice(0,nb), countdownStart:Date.now(), round:0 });
  });
}

// ??? Countdown ???????????????????????????????????????????????????????????????
// Chaque client affiche le countdown localement.
// L'hôte passe à 'playing' quand c'est terminé — les autres reçoivent la mise à jour Firebase.
var _cdTimer = null;
var _cdDone  = false;

function mpHandleCountdown(room) {
  if(_cdDone) return;
  clearTimeout(_cdTimer);
  var ov = document.getElementById('overlay');
  var elapsed = Date.now() - (room.countdownStart||Date.now());
  var remaining = Math.max(0, 3000 - elapsed);
  var sec = Math.ceil(remaining/1000);

  ov.innerHTML = '<div class="otitle" style="font-size:90px;color:#f97316;line-height:1">'+(sec||'?')+'</div><div style="font-size:16px;color:#94a3b8;margin-top:8px">La partie commence !</div>';
  ov.classList.remove('h');

  if(remaining > 0) {
    _cdTimer = setTimeout(function(){ mpHandleCountdown(room); }, Math.min(remaining, 300));
  } else {
    // L'hôte écrit roundStart dans le futur (+1500ms) pour absorber le délai réseau
    // Tous les clients recevront le même timestamp et démarreront au même moment
    if(mp.isHost) {
      var syncedStart = Date.now() + 2500; // +2500ms : absorbe délai onValue (200-800ms) + marge
      update(mp.roomRef, { status:'playing', roundStart: syncedStart });
    }
    // Les non-hôtes reçoivent status:'playing' via onValue avec le même roundStart
  }
}

// ??? Démarrer un round – appelé quand status passe à 'playing' ???????????????
function mpHandlePlaying(room) {
  var rIdx = room.round||0;

  // Stopper définitivement le countdown local
  _cdDone = true;
  clearTimeout(_cdTimer);

  // Même round déjà actif ? simple rafraîchissement panel
  // MAIS si le timer n'est pas lancé (roundStart absent au premier appel), continuer
  if(rIdx === mpCurrentRound && mpRoundActive && mp.timerInterval) return;

  // Même round actif SANS timer (roundStart absent au 1er onValue) → lancer le timer
  if(rIdx === mpCurrentRound && mpRoundActive && !mp.timerInterval) {
    var _rsRetry = room.roundStart;
    if(_rsRetry && _rsRetry > 0) {
      var optsRetry = room.options||{};
      mpStartSyncTimer(_rsRetry, optsRetry.timerDuration||30, rIdx);
    }
    return;
  }

  // Nouveau round ? initialiser
  mpCurrentRound = rIdx;
  mpAnswered = false;
  mpRoundActive = true;
  mpClearOtherMarkers();

  var seeds = room.roundSeeds||[];
  if(!seeds || seeds.length <= rIdx || seeds[rIdx] === undefined) {
    setTimeout(function(){
      get(ref(rtdb,'rooms/'+mp.roomCode)).then(function(s){
        if(s.exists()) mpHandlePlaying(s.val());
      }).catch(function(){});
    }, 500);
    return;
  }
  var place = (typeof ROUNDS!=='undefined') ? ROUNDS[seeds[rIdx]] : null;
  if(!place) return;

  var opts = room.options||{};

  // ?? Configurer les variables globales de game.js ??
  clearInterval(tiv);
  roundList    = [place];
  curR         = 0; curL = 0;
  playerPos    = null; confirming = false; gameActive = true;
  fixedLevel   = opts.fixedLevel!==undefined ? opts.fixedLevel : -1;
  noZoomMode   = opts.noZoomMode||false;
  perfectionMode = opts.perfectionMode||false;
  chillMode    = opts.chillMode||false;
  total        = (room.players[mp.playerId]||{}).score||0;

  // ?? UI ??
  var ov = document.getElementById('overlay');
  ov.classList.add('h');
  document.body.classList.remove('menu-mode');
  document.getElementById('hrnd').textContent = (rIdx+1)+'/'+(opts.nbRounds||5);
  document.getElementById('hsc').textContent  = fmtPts(total);
  document.getElementById('confb').disabled   = true;
  var skipb = document.getElementById('skipb');
  if(skipb) skipb.style.display = fixedLevel>=0 ? 'none' : 'block';

  // ?? Carte ??
  if(map){ map.setView([20,0], map.getMinZoom(), {animate:false}); }
  if(playerMarker){ playerMarker.remove(); playerMarker=null; }
  if(targetMarker){ targetMarker.remove(); targetMarker=null; }
  if(lineLayer)   { lineLayer.remove();    lineLayer=null;    }

  // ?? Indice + dots ??
  updateDots();
  showHint();

  // ?? Panel live à créer et forcer visible AVANT que l'overlay soit caché ??
  mpEnsureLivePanel();
  var _panel = document.getElementById('mp-live-panel');
  if(_panel) _panel.style.display = 'block';
  mpRenderLivePanel(room);

  // Timer synchronisé — attendre que roundStart soit disponible dans Firebase
  var _rs = room.roundStart;
  if(!_rs || _rs <= 0) {
    // roundStart pas encore écrit par l'hôte — attendre le prochain onValue
    // mpHandlePlaying sera rappelé avec le roundStart correct
    // On affiche quand même l'indice mais sans démarrer le timer
    return;
  }
  mpStartSyncTimer(_rs, opts.timerDuration||30, rIdx);
}

// ??? Timer synchronisé ???????????????????????????????????????????????????????
function mpStartSyncTimer(roundStart, duration, rIdx) {
  clearInterval(mp.timerInterval);
  var C = 2*Math.PI*38;

  if(chillMode){
    timeLeft=999;
    var _a=document.getElementById('arc');
    if(_a){_a.style.transition='none';_a.style.strokeDashoffset='0';_a.style.stroke='#3b82f6';}
    var _t2=document.getElementById('tnum');
    if(_t2){_t2.textContent='?';_t2.style.color='#3b82f6';}
    return;
  }


  // Désactiver toute transition CSS sur l'arc à mise à jour directe par JS
  var arcEl = document.getElementById('arc');
  if(arcEl) arcEl.style.transition = 'none';

  function tick() {
    var now     = Date.now();
    var elapsed = (now - roundStart) / 1000; // peut être négatif si roundStart est dans le futur

    var remaining;
    if(elapsed < 0) {
      // roundStart pas encore atteint ? afficher duration, arc plein, attendre
      remaining = duration;
    } else {
      remaining = Math.max(0, duration - elapsed);
    }
    timeLeft = remaining;

    var arc = document.getElementById('arc');
    if(arc) {
      var pct = remaining / duration;
      arc.style.strokeDashoffset = C * (1 - pct);
      var col = remaining > 19 ? '#22c55e' : remaining > 9 ? '#fbbf24' : '#ef4444';
      arc.style.stroke = col;
      var numEl = document.getElementById('tnum');
      if(numEl) {
        numEl.textContent = elapsed < 0 ? duration : Math.ceil(remaining);
        numEl.style.color = col;
      }
    }

    if(elapsed >= 0 && remaining <= 0) {
      clearInterval(mp.timerInterval);
      if(!mpAnswered && !chillMode) {
        mpAnswered = true;
        gameActive = false;
        mpSubmitAnswer(null, null, 0, rIdx);
      }
    }
  }
  mp.timerInterval = setInterval(tick, 100);
  tick();
}

// ??? Soumettre une réponse ????????????????????????????????????????????????????
function mpSubmitAnswer(pos, dist, pts, rIdx) {
  if(!mp.roomCode || !mp.playerId) return;

  var ansRef = ref(rtdb, 'rooms/'+mp.roomCode+'/answers/'+rIdx+'/'+mp.playerId);
  set(ansRef, {
    pts: pts||0, dist, pos: pos ? {lat:pos.lat, lng:pos.lng} : null, submittedAt:Date.now()
  }).then(function() {
    // Mettre à jour le score total du joueur
    var scRef = ref(rtdb, 'rooms/'+mp.roomCode+'/players/'+mp.playerId+'/score');
    get(scRef).then(function(s){ set(scRef, (s.val()||0)+(pts||0)); });
    // L'hôte surveille si tout le monde a répondu
    if(mp.isHost) mpWatchAllAnswered(rIdx);
  });
}

// ??? Hôte surveille les réponses de tous ?????????????????????????????????????
function mpWatchAllAnswered(rIdx) {
  var aRef = ref(rtdb,'rooms/'+mp.roomCode+'/answers/'+rIdx);
  var pRef = ref(rtdb,'rooms/'+mp.roomCode+'/players');
  var _to = chillMode ? null : setTimeout(function(){ clearInterval(_iv); mpAdvance(rIdx); }, 35000);
  var _iv = setInterval(function() {
    Promise.all([get(aRef),get(pRef)]).then(function([as,ps]) {
      var answers=as.val()||{}, players=ps.val()||{};
      if(Object.keys(players).every(function(pid){ return answers[pid]!==undefined; })) {
        clearInterval(_iv); clearTimeout(_to); mpAdvance(rIdx);
      }
    });
  }, 800);
}

function mpAdvance(rIdx) {
  get(mp.roomRef).then(function(snap) {
    var room = snap.val(), opts = room.options||{}, next = rIdx+1;
    var players = room.players||{};
    var updates = { status: 'roundEnd', currentRoundResults: rIdx };
    Object.keys(players).forEach(function(pid) {
      var total = 0;
      for(var r = 0; r <= rIdx; r++) {
        var ans = ((room.answers||{})[r]||{})[pid];
        if(ans && ans.pts) total += ans.pts;
      }
      updates['players/' + pid + '/score'] = total;
    });
    // Stocker le numéro de la manche suivante dans Firebase
    // L'hôte déclenchera manuellement via le bouton "Manche suivante"
    updates['nextRound'] = next;
    updates['totalRounds'] = opts.nbRounds||5;
    update(mp.roomRef, updates);
  });
}


// Appelé par le bouton "Manche suivante" (hôte uniquement)
function mpLaunchNextRound() {
  if(!mp.isHost || !mp.roomRef) return;
  var btn = document.getElementById('mp-next-btn');
  if(btn) { btn.disabled = true; btn.textContent = 'Chargement...'; }
  get(mp.roomRef).then(function(snap) {
    var room = snap.val(), opts = room.options||{};
    var next = room.nextRound !== undefined ? room.nextRound : 0;
    update(mp.roomRef, next >= (room.totalRounds||opts.nbRounds||5)
      ? { status: 'finished' }
      : { status: 'playing', round: next, roundStart: Date.now()+2500 });
  });
}


function mpHandleRoundEnd(room) {
  clearInterval(mp.timerInterval);
  mpRoundActive = false;
  gameActive    = false;
  mpCurrentRound = -1;

  var rIdx    = room.currentRoundResults!==undefined ? room.currentRoundResults : (room.round||0);
  var seeds   = room.roundSeeds||[];
  var place   = typeof ROUNDS!=='undefined' ? ROUNDS[seeds[rIdx]||0] : {name:'?',lat:0,lng:0};
  var answers = (room.answers||{})[rIdx]||{};
  var players = room.players||{};

  // ?? Vérifier que toutes les réponses sont présentes ??????????????????????
  var allPresent = Object.keys(players).every(function(pid){ return answers[pid]!==undefined; });
  if(!allPresent) {
    setTimeout(function(){
      get(ref(rtdb,'rooms/'+mp.roomCode)).then(function(s){
        if(s.exists()) mpHandleRoundEnd(s.val());
      }).catch(function(){});
    }, 1000);
    return;
  }

  // ?? Masquer panel live ????????????????????????????????????????????????????
  var lp = document.getElementById('mp-live-panel');
  if(lp) lp.style.display='none';

  // ?? Carte : lieu cible + marqueurs + lignes de tous ???????????????????????
  mpClearOtherMarkers();
  if(window.map && place.lat) {
    if(targetMarker){ targetMarker.remove(); targetMarker=null; }
    if(lineLayer){    lineLayer.remove();    lineLayer=null;    }

    var placeName = place.name ? place.name.split('\u2014')[0].trim() : '?';
    targetMarker = L.marker([place.lat,place.lng], {icon:makePin('#22c55e')})
      .bindPopup('<div style="font-family:system-ui;font-size:13px"><b style="color:#15803d">\u2713 '+placeName+'</b></div>',{maxWidth:220})
      .addTo(map).openPopup();

    var bounds = [[place.lat,place.lng]];
    Object.entries(answers).forEach(function([pid,ans]) {
      if(!ans.pos||ans.pos.lat==null) return;
      var p=players[pid], col=(p&&p.color)||mpColorFor(pid);
      var isMe = pid===mp.playerId;
      var icon = isMe ? makePin(col) : L.divIcon({
        className:'',
        html:'<div style="width:22px;height:22px;background:'+col+';border:2.5px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 8px rgba(0,0,0,.4);position:relative">'
            +'<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(45deg);font-size:9px;color:#fff;font-weight:700">'+((p&&p.name)?p.name[0].toUpperCase():'?')+'</div></div>',
        iconSize:[22,22],iconAnchor:[11,22]
      });
      var popup = '<div style="font-family:system-ui;font-size:12px">'
        +'<b style="color:'+col+'">'+(p?p.name:'?')+(isMe?' (moi)':'')+'</b><br>'
        +fmtDst(ans.dist)+'<br>'
        +'<b style="color:#f97316">+'+fmtPts(ans.pts)+' pts</b></div>';
      var m = L.marker([ans.pos.lat,ans.pos.lng],{icon}).bindPopup(popup).addTo(map);
      var _p1=[ans.pos.lat,ans.pos.lng], _p2=[place.lat,place.lng];
      var _dLng=_p2[1]-_p1[1];
      if(_dLng>180) _p1[1]+=360; else if(_dLng<-180) _p1[1]-=360;
      var pl=L.polyline([_p1,_p2],
        {color:col,weight:2.5,dashArray:'6 4',opacity:0.8,noClip:true}).addTo(map);
      mpPolylines.push(pl);
      mpOtherMarkers[pid] = m;
      bounds.push([ans.pos.lat,ans.pos.lng]);
    });
    if(bounds.length>1) try{ map.fitBounds(L.latLngBounds(bounds),{padding:[60,60]}); }catch(e){}
  }

  // ?? Construire l'overlay style showInter ??????????????????????????????????
  var nb      = (room.options||{}).nbRounds||5;
  var next    = rIdx+1;
  var myAns   = answers[mp.playerId]||{};
  var myPts   = myAns.pts||0;
  var myDist  = myAns.dist;
  var placeName = place.name ? place.name.split('\u2014')[0].trim() : '?';
  var placeDesc = place.desc || '';

  // Score perso cette manche
  var myPlayer = players[mp.playerId]||{};
  var myScore  = myPlayer.score||0;
  var effLevel = chillMode ? 5 : (fixedLevel>=0 ? 5-fixedLevel : 5-(curL||0));
  var maxPts   = (typeof BASE_PTS!=='undefined') ? BASE_PTS[Math.max(0,Math.min(5,effLevel))] : 3000;
  var pctRound = maxPts>0 ? Math.round(myPts/maxPts*100) : 0;
  var barColor = pctRound>=80?'#22c55e':pctRound>=50?'#fbbf24':'#f97316';

  // Résultats triés par pts de ce round
  var results = Object.entries(players).map(function([pid,p]) {
    var ans=answers[pid]||{};
    return {pid,name:p.name,photo:p.photo,color:p.color||mpColorFor(pid),score:p.score||0,pts:ans.pts||0,dist:ans.dist};
  }).sort(function(a,b){ return b.pts-a.pts; });

  var imgId = 'mpwimg'+Date.now();
  var medals = ['\uD83E\uDD47','\uD83E\uDD48','\uD83E\uDD49'];

  var h=[];

  // Photo Wikipedia (placeholder)
  h.push('<div id="'+imgId+'" style="width:100%;max-width:500px;height:280px;background:#111827;border-radius:12px;overflow:hidden;position:relative;flex-shrink:0"></div>');

  // Label manche
  h.push('<div style="font-size:11px;color:#f97316;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-top:2px">Manche '+(rIdx+1)+'/'+nb+'</div>');

  // Nom du lieu
  h.push('<div style="font-size:20px;font-weight:700;color:#e2e8f0;text-align:center;max-width:380px">'+placeName+'</div>');

  // Description
  if(placeDesc){
    h.push('<div style="font-size:13px;color:#e2e8f0;text-align:center;max-width:440px;line-height:1.65;margin-top:-2px;background:rgba(17,24,39,0.6);border-radius:8px;padding:8px 14px">'+placeDesc+'</div>');
  }

  // Score perso + barre
  h.push('<div style="width:100%;max-width:340px;background:#111827;border-radius:12px;padding:12px 16px;display:flex;flex-direction:column;gap:6px">');
  h.push('<div style="display:flex;justify-content:space-between;align-items:center">');
  h.push('<span style="font-size:24px;font-weight:700;color:'+barColor+'">+'+fmtPts(myPts)+' pts</span>');
  h.push('<span style="font-size:12px;color:#6b7280">'+(myDist!=null?fmtDst(myDist):'Raté')+'</span>');
  h.push('</div>');
  h.push('<div style="height:7px;background:#1e2d45;border-radius:4px;overflow:hidden">');
  h.push('<div style="width:'+pctRound+'%;height:100%;background:'+barColor+';border-radius:4px"></div>');
  h.push('</div>');
  h.push('<div style="font-size:11px;color:#6b7280">'+fmtPts(myPts)+' / '+fmtPts(maxPts)+' pts max • Total : <b style="color:#f97316">'+fmtPts(myScore)+' pts</b></div>');
  h.push('</div>');

  // Classement joueurs
  h.push('<div style="width:100%;max-width:380px;display:flex;flex-direction:column;gap:3px">');
  results.forEach(function(r,i) {
    var isMe=r.pid===mp.playerId;
    var medal=i<3?medals[i]:(i+1)+'.';
    h.push('<div style="display:flex;align-items:center;gap:8px;padding:7px 12px;background:'+(isMe?'#1a2238':'#0d1120')+';border-radius:8px;border:1px solid '+(isMe?r.color:'#1e2d45')+'">');
    h.push('<span style="font-size:14px;min-width:24px;text-align:center">'+medal+'</span>');
    if(r.photo) h.push('<img src="'+r.photo+'" style="width:22px;height:22px;border-radius:50%;border:2px solid '+r.color+';object-fit:cover;flex-shrink:0">');
    else h.push('<div style="width:22px;height:22px;border-radius:50%;background:'+r.color+'33;border:2px solid '+r.color+';display:flex;align-items:center;justify-content:center;font-size:9px;color:'+r.color+';font-weight:700;flex-shrink:0">'+r.name[0].toUpperCase()+'</div>');
    h.push('<span style="flex:1;font-size:12px;font-weight:'+(isMe?'700':'400')+';color:'+(isMe?r.color:'#e2e8f0')+';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+r.name+'</span>');
    h.push('<span style="font-size:11px;color:#6b7280;margin-right:6px;flex-shrink:0">'+fmtDst(r.dist)+'</span>');
    h.push('<span style="font-size:13px;font-weight:700;color:#f97316;flex-shrink:0">+'+fmtPts(r.pts)+'</span>');
    h.push('<span style="font-size:10px;color:#4b5563;margin-left:4px;flex-shrink:0">'+fmtPts(r.score)+'</span>');
    h.push('</div>');
  });
  h.push('</div>');

  // Boutons : Explorer la carte + Manche suivante / attente
  h.push('<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:4px">');
  h.push('<button onclick="window.mpEnterExplore&&window.mpEnterExplore()" style="padding:10px 20px;border-radius:9px;border:1px solid #2d3f5e;cursor:pointer;background:rgba(30,45,69,.9);color:#e2e8f0;font-size:13px;font-weight:600">Explorer la carte</button>');
  if(next < nb) {
    if(mp.isHost) {
      h.push('<button id="mp-next-btn" onclick="window.mpLaunchNextRound&&window.mpLaunchNextRound()" style="padding:12px 32px;border-radius:10px;border:none;background:#f97316;color:#fff;font-size:15px;font-weight:700;cursor:pointer;transition:opacity .2s" onmouseover="this.style.opacity=\'0.85\'" onmouseout="this.style.opacity=\'1\'">Manche suivante ▶</button>');
    } else {
      h.push('<div style="font-size:13px;color:#94a3b8;padding:8px 16px;background:#0d1120;border-radius:8px;border:1px solid #1e2d45">En attente que l\'hôte lance la manche suivante...</div>');
    }
  } else {
    if(mp.isHost) {
      h.push('<button id="mp-next-btn" onclick="window.mpLaunchNextRound&&window.mpLaunchNextRound()" style="padding:12px 32px;border-radius:10px;border:none;background:#22c55e;color:#fff;font-size:15px;font-weight:700;cursor:pointer">?? Voir le bilan final</button>');
    } else {
      h.push('<div style="font-size:13px;color:#94a3b8;padding:8px 16px;background:#0d1120;border-radius:8px;border:1px solid #1e2d45">En attente du bilan final…</div>');
    }
  }
  h.push('</div>');

  // Montrer la carte 3s avant d'ouvrir le bilan
  // L'overlay reste caché pendant 3s pour que les joueurs voient les marqueurs
  var ov = document.getElementById('overlay');
  setTimeout(function(){
    ov.innerHTML = h.join('');
    ov.classList.remove('h');

    // Fetch photo Wikipedia (identique à showInter)
  // Photo locale prioritaire, sinon Wikipedia
  (function(id, round, q){
    var el = document.getElementById(id);
    if(!el) return;
    function tryWiki(lang){
      fetch('https://'+lang+'.wikipedia.org/api/rest_v1/page/summary/'+encodeURIComponent(q))
        .then(function(r){return r.json();})
        .then(function(d){
          var el2=document.getElementById(id);if(!el2)return;
          if(d.thumbnail&&d.thumbnail.source){
            el2.innerHTML='<img src="'+d.thumbnail.source+'" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:12px" alt="">';
          } else if(lang==='fr'){tryWiki('en');}
          else{el2.style.display='none';}
        }).catch(function(){var el2=document.getElementById(id);if(el2)el2.style.display='none';});
    }
    if(round && round.photo){
      var img=new Image();
      img.onload=function(){
        var el2=document.getElementById(id);if(!el2)return;
        el2.innerHTML='<img src="'+round.photo+'" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:12px" alt="">';
      };
      img.onerror=function(){
        var el2=document.getElementById(id);if(el2)el2.style.display='none';
      };
      img.src=round.photo;
    } else {
      var el2=document.getElementById(id);if(el2)el2.style.display='none';
    }
  })(imgId, place, placeName);
  }, 8000); // 8s de carte visible avant le bilan
}


function mpShowFinalResults(room) {
  clearInterval(mp.timerInterval);
  mpRoundActive = false;
  mpRemoveLivePanel();
  mpClearOtherMarkers();

  var players = room.players||{};
  var answers = room.answers||{};
  var opts    = room.options||{};
  var nbR     = opts.nbRounds||5;
  var seeds   = room.roundSeeds||[];
  var medals  = ['??','??','??'];

  // ── Stats complètes par joueur ────────────────────────────────────────
  var results = Object.entries(players).map(function([pid,p]) {
    var totalPts=0, totalDist=0, distCount=0, bestDist=Infinity, worstDist=0, totalTime=0, timeCount=0;
    for(var r=0;r<nbR;r++) {
      var ans=(answers[r]||{})[pid]||{};
      if(ans.pts)  totalPts+=ans.pts;
      if(ans.dist!=null){totalDist+=ans.dist;distCount++;if(ans.dist<bestDist)bestDist=ans.dist;if(ans.dist>worstDist)worstDist=ans.dist;}
      if(ans.time!=null){totalTime+=ans.time;timeCount++;}
    }
    return {
      pid,name:p.name,photo:p.photo,color:p.color||mpColorFor(pid),
      score:p.score||totalPts,
      avgDist:distCount>0?totalDist/distCount:null,
      bestDist:bestDist===Infinity?null:bestDist,
      worstDist:worstDist||null,
      avgTime:timeCount>0?totalTime/timeCount:null
    };
  }).sort(function(a,b){return b.score-a.score;});

  function avatar(r,sz) {
    sz=sz||32;
    if(r.photo) return '<img src="'+r.photo+'" style="width:'+sz+'px;height:'+sz+'px;border-radius:50%;border:2px solid '+r.color+';object-fit:cover;flex-shrink:0">';
    return '<div style="width:'+sz+'px;height:'+sz+'px;border-radius:50%;background:'+r.color+'33;border:2px solid '+r.color+';display:flex;align-items:center;justify-content:center;font-size:'+(sz*0.4)+'px;color:'+r.color+';font-weight:700;flex-shrink:0">'+r.name[0].toUpperCase()+'</div>';
  }

  var h=[];

  // ── Titre ─────────────────────────────────────────────────────────────
  h.push('<div class="otitle" style="font-size:36px">?? Fin de partie !</div>');

  // ── Classement final ──────────────────────────────────────────────────
  h.push('<div style="width:100%;max-width:440px">');
  h.push('<div style="font-size:10px;color:#4b5563;text-transform:uppercase;letter-spacing:1px;padding:0 12px 6px">Classement final</div>');
  results.forEach(function(r,i) {
    var isMe=r.pid===mp.playerId;
    var medal=i<3?medals[i]:(i+1)+'.';
    h.push('<div style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:'+(isMe?'#1a2238':'#0d1120')+';border-radius:9px;margin-bottom:4px;border:1px solid '+(isMe?r.color:'#1e2d45')+'">');
    h.push('<span style="font-size:18px;min-width:28px;text-align:center">'+medal+'</span>');
    h.push(avatar(r,28));
    h.push('<span style="flex:1;font-size:13px;font-weight:'+(isMe?'700':'500')+';color:'+(isMe?r.color:'#e2e8f0')+';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+r.name+(isMe?' (moi)':'')+'</span>');
    if(r.avgDist!=null) h.push('<span style="font-size:11px;color:#6b7280;flex-shrink:0;margin-right:6px">~'+fmtDst(r.avgDist)+'</span>');
    h.push('<span style="font-size:17px;font-weight:700;color:#f97316;flex-shrink:0">'+fmtPts(r.score)+' pts</span>');
    h.push('</div>');
  });
  h.push('</div>');

  // ── Tableau par manche ────────────────────────────────────────────────
  h.push('<div style="width:100%;max-width:440px;background:#0d1120;border-radius:12px;padding:12px 16px;border:1px solid #1e2d45">');
  h.push('<div style="font-size:10px;color:#4b5563;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Détail par manche</div>');
  h.push('<div style="display:flex;font-size:10px;color:#4b5563;text-transform:uppercase;letter-spacing:.5px;padding-bottom:6px;border-bottom:1px solid #1e2d45;margin-bottom:4px">');
  h.push('<span style="flex:1">Lieu</span>');
  results.forEach(function(r){h.push('<span style="min-width:60px;text-align:right;color:'+r.color+'">'+r.name.split(' ')[0]+'</span>');});
  h.push('</div>');
  for(var rIdx=0;rIdx<nbR;rIdx++) {
    var place=(typeof ROUNDS!=='undefined')?ROUNDS[seeds[rIdx]||0]:{name:'?'};
    var pn=place.name?place.name.split('—')[0].trim().slice(0,22):'?';
    h.push('<div style="display:flex;align-items:center;padding:5px 0;border-bottom:1px solid #1e2d4533">');
    h.push('<span style="flex:1;font-size:11px;color:#94a3b8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+pn+'</span>');
    results.forEach(function(r){
      var pts=((answers[rIdx]||{})[r.pid]||{}).pts||0;
      var col=pts>0?(pts>=1500?'#22c55e':pts>=700?'#fbbf24':'#f97316'):'#4b5563';
      h.push('<span style="min-width:60px;text-align:right;font-size:11px;font-weight:600;color:'+col+'">'+fmtPts(pts)+'</span>');
    });
    h.push('</div>');
  }
  h.push('<div style="display:flex;align-items:center;padding:8px 0 2px;margin-top:2px;border-top:1px solid #1e2d45">');
  h.push('<span style="flex:1;font-size:11px;font-weight:700;color:#e2e8f0;text-transform:uppercase;letter-spacing:.5px">Total</span>');
  results.forEach(function(r){h.push('<span style="min-width:60px;text-align:right;font-size:13px;font-weight:700;color:#f97316">'+fmtPts(r.score)+'</span>');});
  h.push('</div>');
  h.push('</div>');

  // ── Succès ────────────────────────────────────────────────────────────
  var awards=[];
  var mostAcc=results.filter(function(r){return r.avgDist!=null;}).sort(function(a,b){return (a.avgDist||999)-(b.avgDist||999);})[0];
  if(mostAcc) awards.push({emoji:'??',title:'Le plus précis',desc:'~'+fmtDst(mostAcc.avgDist)+' en moyenne',player:mostAcc});
  var fastest=results.filter(function(r){return r.avgTime!=null;}).sort(function(a,b){return (a.avgTime||999)-(b.avgTime||999);})[0];
  if(fastest) awards.push({emoji:'⚡',title:'Le plus réactif',desc:'Temps de réponse le plus court',player:fastest});
  var longShot=results.filter(function(r){return r.worstDist!=null;}).sort(function(a,b){return b.worstDist-a.worstDist;})[0];
  if(longShot) awards.push({emoji:'??',title:'Tir le plus loin',desc:fmtDst(longShot.worstDist)+' de la cible',player:longShot});
  var bestRound=null,bestRPts=0;
  results.forEach(function(r){for(var i=0;i<nbR;i++){var pts=((answers[i]||{})[r.pid]||{}).pts||0;if(pts>bestRPts){bestRPts=pts;bestRound={player:r,pts:pts};}}});
  if(bestRound) awards.push({emoji:'⭐',title:'Meilleure manche',desc:'+'+fmtPts(bestRound.pts)+' pts',player:bestRound.player});
  if(results.length>0) awards.push({emoji:'??',title:'Champion',desc:fmtPts(results[0].score)+' pts au total',player:results[0]});

  if(awards.length>0) {
    h.push('<div style="width:100%;max-width:440px">');
    h.push('<div style="font-size:10px;color:#4b5563;text-transform:uppercase;letter-spacing:1px;padding:0 0 6px">Succès</div>');
    h.push('<div style="display:flex;flex-wrap:wrap;gap:8px">');
    awards.forEach(function(a){
      var isMe=a.player.pid===mp.playerId;
      h.push('<div style="flex:1;min-width:180px;background:#0d1120;border:1px solid '+(isMe?a.player.color:'#1e2d45')+';border-radius:10px;padding:10px 12px;display:flex;align-items:center;gap:10px">');
      h.push('<span style="font-size:22px">'+a.emoji+'</span>');
      h.push('<div style="flex:1;min-width:0">');
      h.push('<div style="font-size:10px;color:#f97316;font-weight:700;text-transform:uppercase;letter-spacing:.5px">'+a.title+'</div>');
      h.push('<div style="font-size:12px;color:#e2e8f0;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+a.player.name+'</div>');
      h.push('<div style="font-size:10px;color:#6b7280">'+a.desc+'</div>');
      h.push('</div>');
      h.push(avatar(a.player,22));
      h.push('</div>');
    });
    h.push('</div>');
    h.push('</div>');
  }

  // ── Boutons ────────────────────────────────────────────────────────────
  h.push('<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:8px">');
  h.push('<button onclick="mpLeaveRoom()" style="padding:12px 28px;font-size:14px;border-radius:10px;border:1px solid #2d3f5e;background:transparent;color:#e2e8f0;cursor:pointer;font-weight:600">⌂ Menu</button>');
  h.push('<button onclick="window.mpEnterExplore&&window.mpEnterExplore()" style="padding:10px 20px;border-radius:9px;border:1px solid #2d3f5e;cursor:pointer;background:rgba(30,45,69,.9);color:#e2e8f0;font-size:13px;font-weight:600">Explorer la carte</button>');
  h.push('</div>');

  var ov=document.getElementById('overlay');
  ov.innerHTML=h.join('');
  ov.classList.remove('h');
}

// ??? Panel live (style Skribbl) ???????????????????????????????????????????????
function mpEnsureLivePanel() {
  if(document.getElementById('mp-live-panel')) return;
  var p = document.createElement('div');
  p.id = 'mp-live-panel';
  p.style.cssText = 'position:fixed;top:64px;right:12px;z-index:9000;background:rgba(13,17,32,0.93);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid #1e2d45;border-radius:12px;padding:10px 12px;min-width:170px;max-width:220px;box-shadow:0 4px 24px rgba(0,0,0,.5);font-family:system-ui,sans-serif;pointer-events:none;transition:opacity .2s';
  document.body.appendChild(p);
}

function mpUpdateLivePanel(room) {
  // Appelé depuis mpHandleRoomChange (mises à jour temps réel)
  // Seulement si le panel existe et que l'overlay est caché (on est en train de jouer)
  var panel = document.getElementById('mp-live-panel');
  if(!panel) return;
  var ov = document.getElementById('overlay');
  if(!ov || !ov.classList.contains('h')) { panel.style.display='none'; return; }
  panel.style.display = 'block';
  mpRenderLivePanel(room);
}

function mpRenderLivePanel(room) {
  // Remplit le contenu du panel sans toucher à display
  var panel = document.getElementById('mp-live-panel');
  if(!panel) return;

  var rIdx    = room.round||0;
  var answers = (room.answers||{})[rIdx]||{};
  var players = room.players||{};
  var opts    = room.options||{};
  var sorted  = Object.entries(players).sort(function(a,b){ return (b[1].score||0)-(a[1].score||0); });

  var html=[];
  html.push('<div style="font-size:10px;color:#f97316;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:7px">Manche '+(rIdx+1)+'/'+(opts.nbRounds||5)+'</div>');
  sorted.forEach(function([pid,p]) {
    var isMe=pid===mp.playerId, col=p.color||mpColorFor(pid);
    var ans=answers[pid], done=ans!==undefined;
    html.push('<div style="display:flex;align-items:center;gap:7px;padding:5px 0;border-bottom:1px solid #1e2d4555">');
    if(p.photo) html.push('<img src="'+p.photo+'" style="width:22px;height:22px;border-radius:50%;border:2px solid '+col+';flex-shrink:0;object-fit:cover">');
    else html.push('<div style="width:22px;height:22px;border-radius:50%;background:'+col+'33;border:2px solid '+col+';display:flex;align-items:center;justify-content:center;font-size:10px;color:'+col+';font-weight:700;flex-shrink:0">'+p.name[0].toUpperCase()+'</div>');
    html.push('<span style="flex:1;font-size:12px;color:'+(isMe?col:'#e2e8f0')+';font-weight:'+(isMe?'700':'400')+';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+p.name+'</span>');
    html.push(done
      ? '<span style="font-size:11px;color:#22c55e;font-weight:700;flex-shrink:0">+'+fmtPts(ans.pts||0)+'</span>'
      : '<span style="font-size:13px;color:#6b7280;flex-shrink:0;animation:pulse 1.2s infinite">?</span>');
    html.push('</div>');
    html.push('<div style="font-size:10px;color:#4b5563;padding-left:29px;padding-bottom:2px">'+fmtPts(p.score||0)+' pts</div>');
  });
  panel.innerHTML = html.join('');
}

function mpRemoveLivePanel() {
  var p=document.getElementById('mp-live-panel'); if(p)p.remove();
}

// ??? Marqueurs adversaires en temps réel ?????????????????????????????????????
function mpUpdateOtherMarkers(room) {
  if(!window.map) return;
  var rIdx=room.round||0, answers=(room.answers||{})[rIdx]||{}, players=room.players||{};

  // Supprimer les markers obsolètes
  Object.keys(mpOtherMarkers).forEach(function(pid) {
    if(!answers[pid]||!answers[pid].pos){ mpOtherMarkers[pid].remove(); delete mpOtherMarkers[pid]; }
  });

  // Ajouter/mettre à jour
  Object.entries(answers).forEach(function([pid,ans]) {
    if(pid===mp.playerId||!ans.pos||ans.pos.lat==null) return;
    var p=players[pid]; if(!p) return;
    var col=(p&&p.color)||mpColorFor(pid);
    var icon = L.divIcon({className:'',
      html:'<div style="width:20px;height:20px;background:'+col+';border:2.5px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 8px rgba(0,0,0,.4);position:relative"><div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(45deg);font-size:8px;color:#fff;font-weight:700">'+p.name[0].toUpperCase()+'</div></div>',
      iconSize:[20,20],iconAnchor:[10,20]});
    var popup='<div style="font-family:system-ui;font-size:12px"><b style="color:'+col+'">'+p.name+'</b><br>'+fmtDst(ans.dist)+'<br><b style="color:#f97316">+'+fmtPts(ans.pts)+'</b></div>';
    if(mpOtherMarkers[pid]){ mpOtherMarkers[pid].setLatLng([ans.pos.lat,ans.pos.lng]).setPopupContent(popup); }
    else { mpOtherMarkers[pid]=L.marker([ans.pos.lat,ans.pos.lng],{icon}).bindPopup(popup).addTo(map); }
  });
}

function mpClearOtherMarkers() {
  Object.values(mpOtherMarkers).forEach(function(m){ try{m.remove();}catch(e){} });
  mpOtherMarkers={};
  mpPolylines.forEach(function(p){ try{p.remove();}catch(e){} });
  mpPolylines=[];
}

// ??? Hook sur confirmGuess / timer écoulé de game.js ?????????????????????????
// STRATÉGIE : on surcharge window.resolveRound
// En mode MP on bloque l'affichage solo (showInter) et on soumet à Firebase à la place.
// ??? mpOnConfirm : appelé par game.js (confirmGuess/nextLevel) en mode MP ?????
// game.js a été patché pour appeler window.mpOnConfirm() au lieu de resolveRound()
window.mpOnConfirm = function() {
  if(!window._mpMode || !mp.roomCode) return;
  if(mpAnswered) return;
  mpAnswered = true;
  gameActive = false;
  clearInterval(tiv);            // stopper timer solo (sécurité)
  // timer MP continue (cf. mpHandleRoundEnd)

  var r     = roundList[curR];
  var level = 5-(fixedLevel>=0?fixedLevel:curL);
  var pts=0, dist=null;
  if(playerPos && r) {
    dist = haversine(playerPos.lat,playerPos.lng,r.lat,r.lng);
    var effLevel = chillMode ? 5 : level; // Chill : toujours score max, pas de pénalité d'indice ni de timer
    var distCoef  = chillMode ? 1.0 : 0.8;
    var timeBonus = chillMode ? 0   : BASE_PTS[effLevel]*0.2*(timeLeft/30);
    pts  = Math.round(BASE_PTS[effLevel]*distCoef*Math.exp(-DIST_K*dist) + timeBonus);
  }

  // Afficher marqueur couleur du joueur sur la carte
  if(playerPos && window.map) {
    if(playerMarker) playerMarker.remove();
    var myColor = (_colorMap[mp.playerId]) ? _colorMap[mp.playerId] : '#f97316';
    playerMarker = L.marker([playerPos.lat,playerPos.lng],{icon:makePin(myColor)}).addTo(map);
  }

  // Désactiver le bouton confirmer
  var confb = document.getElementById('confb');
  if(confb) confb.disabled = true;

  // Toast "en attente"
  if(typeof showToast==='function') {
    showToast(dist!=null ? fmtDst(dist)+' ? +'+pts+' pts — En attente des autres...' : 'Raté — En attente des autres...');
  }

  // Soumettre à Firebase
  mpSubmitAnswer(playerPos, dist, pts, mpCurrentRound);
};

// ??? Quitter ?????????????????????????????????????????????????????????????????
function mpLeaveRoom() {
  clearInterval(mp.timerInterval);
  clearTimeout(_cdTimer); _cdDone=false;
  mpRemoveLivePanel(); mpClearOtherMarkers();
  if(mp.roomRef && mp.playerId) {
    update(mp.roomRef, { status:'disbanded', disbandedBy:mp.playerId, disbandedAt:Date.now() }).catch(function(){});
  }
  mp.listeners.forEach(function(l){ try{off(l.ref,'value',l.fn);}catch(e){} });
  mp.listeners=[];
  if(mp.roomRef) { setTimeout(function(){ remove(mp.roomRef).catch(function(){}); }, 1000); }
  mp.roomCode=mp.playerId=mp.roomRef=null; mp.isHost=false;
  mpCurrentRound=-1; mpAnswered=false; mpRoundActive=false; window._mpMode=false;
  if(typeof showMenu==='function') showMenu();
}
function mpOnDisbanded(room) {
  if(mp.playerId && room.disbandedBy === mp.playerId) return;
  clearInterval(mp.timerInterval);
  clearTimeout(_cdTimer); _cdDone=false;
  mpRemoveLivePanel(); mpClearOtherMarkers();
  mp.listeners.forEach(function(l){ try{off(l.ref,'value',l.fn);}catch(e){} });
  mp.listeners=[];
  var ov = document.getElementById('overlay');
  if(ov){
    ov.innerHTML = '<div class="otitle" style="font-size:28px">Partie terminée</div>'
      + '<div style="font-size:14px;color:#94a3b8;margin-top:8px">Un joueur a quitté la partie.</div>';
    ov.classList.remove('h');
  }
  mp.roomCode=mp.playerId=mp.roomRef=null; mp.isHost=false;
  mpCurrentRound=-1; mpAnswered=false; mpRoundActive=false; window._mpMode=false;
  setTimeout(function(){ if(typeof showMenu==='function') showMenu(); }, 2000);
}


function mpEnterExplore() {
  var ov = document.getElementById('overlay');
  if(ov) ov.classList.add('h');
  var bb = document.getElementById('back-btn');
  if(bb) bb.style.display = 'block';
}
window.mpEnterExplore = mpEnterExplore;

// ── Exports ──────────────────────────────────────────────────────────────────
window.mpCreateRoom       = mpCreateRoom;
window.mpJoinRoom         = mpJoinRoom;
window.mpLaunchGame       = mpLaunchGame;
window.mpLeaveRoom        = mpLeaveRoom;
window.mpSubmitAnswer     = mpSubmitAnswer;
window.mpCheckAllAnswered = mpWatchAllAnswered;
window.mpLaunchNextRound  = mpLaunchNextRound;
window.mpOnConfirm        = window.mpOnConfirm || function(){};