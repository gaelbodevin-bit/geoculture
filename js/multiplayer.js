// ?? GùoCulture Multijoueur ù v3.1 (tous jouent ensemble, panel live, marqueurs)
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

// ??? ùtat local ???????????????????????????????????????????????????????????????
var mp = {
  roomCode: null, playerId: null, playerName: null,
  isHost: false, roomRef: null,
  listeners: [], timerInterval: null
};

var mpCurrentRound = -1;   // index de la manche actuellement jouùe
var mpAnswered    = false;  // le joueur local a-t-il rùpondu ce round ?
var mpRoundActive = false;  // la manche est-elle en cours (empùche les rù-init)
var mpOtherMarkers = {};    // { playerId: L.marker }

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
function fmtDst(km){ if(km==null)return 'ù'; return km<1?Math.round(km*1000)+'m':Math.round(km)+'km'; }

// ??? Crùer un salon ???????????????????????????????????????????????????????????
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
    if(room.status !== 'waiting') throw new Error('Partie dùjù commencùe');
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

// ??? ùcouter le salon (un seul listener sur la room entiùre) ?????????????????
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
  // --- Mise ù jour panel live si on est en train de jouer ---
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
  }
}

// ??? Lobby ????????????????????????????????????????????????????????????????????
function mpShowLobby() {
  document.getElementById('overlay').classList.remove('h');
  mpUpdateLobby(null);
}

function mpUpdateLobby(room) {
  // Ne redessiner que si on est bien en 'waiting' (ùvite d'ùcraser l'ùcran de jeu)
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
    if(p.isHost) h.push('<span style="font-size:10px;color:#f97316;background:#3d1a05;padding:2px 6px;border-radius:4px">Hùte</span>');
    h.push('</div>');
  });
  h.push('</div>');

  h.push('<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">');
  if(mp.isHost) {
    h.push('<button onclick="mpLaunchGame()" '+(canStart?'':'disabled')+' style="padding:10px 28px;font-size:14px;font-weight:700;border-radius:9px;border:none;cursor:'+(canStart?'pointer':'not-allowed')+';background:'+(canStart?'#f97316':'#374151')+';color:#fff">'+(canStart?'? Lancer la partie':'En attente (min. 2 joueurs)')+'</button>');
  } else {
    h.push('<div style="color:#94a3b8;font-size:13px;padding:10px">En attente que l\'hùte lance...</div>');
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
// L'hùte passe ù 'playing' quand c'est terminù ù les autres reùoivent la mise ù jour Firebase.
var _cdTimer = null;
function mpHandleCountdown(room) {
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
    // L'hùte ùcrit roundStart dans le futur (+1500ms) pour absorber le dùlai rùseau
    // Tous les clients recevront le mùme timestamp et dùmarreront au mùme moment
    if(mp.isHost) {
      var syncedStart = Date.now() + 2500; // +2500ms : absorbe dùlai onValue (200-800ms) + marge
      update(mp.roomRef, { status:'playing', roundStart: syncedStart });
    }
    // Les non-hùtes reùoivent status:'playing' via onValue avec le mùme roundStart
  }
}

// ??? Dùmarrer un round ù appelù quand status passe ù 'playing' ???????????????
function mpHandlePlaying(room) {
  var rIdx = room.round||0;

  // Annuler le countdown local (cas non-hÙte : _cdTimer encore actif)
  clearTimeout(_cdTimer);

  // Si c'est le mÍme round et qu'il est dÈj‡ actif ? simple rafraÓchissement panel
  if(rIdx === mpCurrentRound && mpRoundActive) return;

  // Nouveau round ? initialiser
  mpCurrentRound = rIdx;
  mpAnswered = false;
  mpRoundActive = true;
  mpClearOtherMarkers();

  var seeds = room.roundSeeds||[];
  var place = (typeof ROUNDS!=='undefined') ? ROUNDS[seeds[rIdx]||0] : null;
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

  // ?? Panel live ù crùer et forcer visible AVANT que l'overlay soit cachù ??
  mpEnsureLivePanel();
  var _panel = document.getElementById('mp-live-panel');
  if(_panel) _panel.style.display = 'block';
  mpRenderLivePanel(room);

  // ?? Timer synchronisù ??
  mpStartSyncTimer(room.roundStart||Date.now(), opts.timerDuration||30, rIdx);
}

// ??? Timer synchronisù ???????????????????????????????????????????????????????
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


  // DÈsactiver toute transition CSS sur l'arc ó mise ‡ jour directe par JS
  var arcEl = document.getElementById('arc');
  if(arcEl) arcEl.style.transition = 'none';

  function tick() {
    var now     = Date.now();
    var elapsed = (now - roundStart) / 1000; // peut Ítre nÈgatif si roundStart est dans le futur

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

// ??? Soumettre une rùponse ????????????????????????????????????????????????????
function mpSubmitAnswer(pos, dist, pts, rIdx) {
  if(!mp.roomCode || !mp.playerId) return;

  var ansRef = ref(rtdb, 'rooms/'+mp.roomCode+'/answers/'+rIdx+'/'+mp.playerId);
  set(ansRef, {
    pts: pts||0, dist, pos: pos ? {lat:pos.lat, lng:pos.lng} : null, submittedAt:Date.now()
  }).then(function() {
    // Mettre ù jour le score total du joueur
    var scRef = ref(rtdb, 'rooms/'+mp.roomCode+'/players/'+mp.playerId+'/score');
    get(scRef).then(function(s){ set(scRef, (s.val()||0)+(pts||0)); });
    // L'hùte surveille si tout le monde a rùpondu
    if(mp.isHost) mpWatchAllAnswered(rIdx);
  });
}

// ??? Hùte surveille les rùponses de tous ?????????????????????????????????????
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
    var room=snap.val(), opts=room.options||{}, next=rIdx+1;
    update(mp.roomRef, { status:'roundEnd', currentRoundResults:rIdx }).then(function() {
      setTimeout(function() {
        update(mp.roomRef, next >= (opts.nbRounds||5)
          ? { status:'finished' }
          : { status:'playing', round:next, roundStart:Date.now()+1500 }); // +1500ms pour absorber dùlai rùseau
      }, 6000);
    });
  });
}

// ??? Rùsultats d'un round ?????????????????????????????????????????????????????
function mpHandleRoundEnd(room) {
  clearInterval(mp.timerInterval);
  mpRoundActive = false;
  gameActive = false;
  mpCurrentRound = -1; // reset pour que le prochain round passe le guard dans mpHandlePlaying

  var rIdx  = room.currentRoundResults!==undefined ? room.currentRoundResults : (room.round||0);
  var seeds = room.roundSeeds||[];
  var place = typeof ROUNDS!=='undefined' ? ROUNDS[seeds[rIdx]||0] : {name:'?',lat:0,lng:0};
  var answers = (room.answers||{})[rIdx]||{};
  var players = room.players||{};

  // Masquer le panel live
  var lp = document.getElementById('mp-live-panel');
  if(lp) lp.style.display='none';

  // ?? Afficher le lieu cible + lignes de tous ??
  mpClearOtherMarkers();
  if(window.map && place.lat) {
    if(targetMarker){ targetMarker.remove(); targetMarker=null; }
    if(lineLayer){    lineLayer.remove();    lineLayer=null;    }

    var popup = '<div style="font-family:system-ui,sans-serif;font-size:13px"><b style="color:#15803d">? '+place.name.split('ù')[0].trim()+'</b></div>';
    targetMarker = L.marker([place.lat,place.lng], {icon:makePin('#22c55e')})
      .bindPopup(popup,{maxWidth:220}).addTo(map).openPopup();

    var bounds = [[place.lat,place.lng]];
    Object.entries(answers).forEach(function([pid,ans]) {
      if(!ans.pos||ans.pos.lat==null) return;
      var p=players[pid], col=(p&&p.color)||mpColorFor(pid);
      var isMe=pid===mp.playerId;
      var icon = isMe ? makePin(col) : L.divIcon({
        className:'',
        html: '<div style="width:20px;height:20px;background:'+col+';border:2.5px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 8px rgba(0,0,0,.4);position:relative">'
            + '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(45deg);font-size:8px;color:#fff;font-weight:700">'+((p&&p.name)?p.name[0].toUpperCase():'?')+'</div></div>',
        iconSize:[20,20],iconAnchor:[10,20]
      });
      var m = L.marker([ans.pos.lat,ans.pos.lng], {icon})
        .bindPopup('<div style="font-family:system-ui;font-size:12px"><b style="color:'+col+'">'+(p?p.name:'?')+(isMe?' (moi)':'')+'</b><br>'+fmtDst(ans.dist)+'<br><b style="color:#f97316">+'+fmtPts(ans.pts)+' pts</b></div>')
        .addTo(map);
      L.polyline([[ans.pos.lat,ans.pos.lng],[place.lat,place.lng]],{color:col,weight:2,dashArray:'6 4',opacity:0.75}).addTo(map);
      mpOtherMarkers[pid] = m;
      bounds.push([ans.pos.lat,ans.pos.lng]);
    });
    if(bounds.length>1) try{ map.fitBounds(L.latLngBounds(bounds),{padding:[60,60]}); }catch(e){}
  }

  // ?? Overlay classement ??
  var results = Object.entries(players).map(function([pid,p]) {
    var ans=(answers[pid]||{}); return {pid,name:p.name,photo:p.photo,color:p.color||mpColorFor(pid),score:p.score||0,pts:ans.pts||0,dist:ans.dist};
  }).sort(function(a,b){ return b.pts-a.pts; });

  var nb = (room.options||{}).nbRounds||5;
  var next = rIdx+1;
  var h=[];
  h.push('<div style="font-size:13px;color:#f97316;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px">Manche '+(rIdx+1)+'/'+nb+'</div>');
  h.push('<div style="font-size:17px;font-weight:700;color:#e2e8f0;margin-bottom:14px">'+place.name.split('ù')[0].trim()+'</div>');

  results.forEach(function(r,i) {
    var isMe=r.pid===mp.playerId, medal=i===0?'??':i===1?'??':i===2?'??':(i+1)+'.';
    h.push('<div style="display:flex;align-items:center;gap:10px;padding:8px 14px;background:'+(isMe?'#1a2238':'transparent')+';border-radius:8px;margin-bottom:2px;border:'+(isMe?'1px solid '+r.color:'1px solid transparent')+'">');
    h.push('<span style="font-size:16px;min-width:26px">'+medal+'</span>');
    if(r.photo) h.push('<img src="'+r.photo+'" style="width:24px;height:24px;border-radius:50%;border:2px solid '+r.color+';object-fit:cover">');
    else h.push('<div style="width:24px;height:24px;border-radius:50%;background:'+r.color+'33;border:2px solid '+r.color+';display:flex;align-items:center;justify-content:center;font-size:10px;color:'+r.color+';font-weight:700">'+r.name[0].toUpperCase()+'</div>');
    h.push('<span style="flex:1;font-size:13px;font-weight:'+(isMe?'700':'400')+';color:'+(isMe?r.color:'#e2e8f0')+'">'+r.name+(isMe?' (moi)':'')+'</span>');
    h.push('<span style="font-size:11px;color:#6b7280;margin-right:6px">'+fmtDst(r.dist)+'</span>');
    h.push('<span style="font-size:14px;font-weight:700;color:#f97316">+'+fmtPts(r.pts)+'</span>');
    h.push('</div>');
    h.push('<div style="font-size:10px;color:#4b5563;padding-left:56px;margin-bottom:3px">Total : '+fmtPts(r.score)+' pts</div>');
  });

  h.push('<div style="font-size:12px;color:#6b7280;margin-top:10px">'+(next<nb ? 'Prochaine manche dans 6sù' : 'Fin de partie dans 6sù')+'</div>');

  var ov = document.getElementById('overlay');
  ov.innerHTML = h.join('');
  ov.classList.remove('h');
}

// ??? Rùsultats finaux ?????????????????????????????????????????????????????????
function mpShowFinalResults(room) {
  clearInterval(mp.timerInterval);
  mpRoundActive = false;
  mpRemoveLivePanel();
  mpClearOtherMarkers();

  var players = room.players||{};
  var results = Object.entries(players).map(function([pid,p]){
    return {pid,name:p.name,photo:p.photo,color:p.color||mpColorFor(pid),score:p.score||0};
  }).sort(function(a,b){ return b.score-a.score; });

  var h=[];
  h.push('<div class="otitle" style="font-size:28px;margin-bottom:12px">?? Fin de partie !</div>');
  results.forEach(function(r,i) {
    var isMe=r.pid===mp.playerId, medal=i===0?'??':i===1?'??':i===2?'??':(i+1)+'.';
    h.push('<div style="display:flex;align-items:center;gap:12px;padding:10px 16px;background:'+(isMe?'#1a2238':'transparent')+';border-radius:9px;margin-bottom:4px;border:'+(isMe?'1px solid '+r.color:'1px solid transparent')+'">');
    h.push('<span style="font-size:20px">'+medal+'</span>');
    if(r.photo) h.push('<img src="'+r.photo+'" style="width:32px;height:32px;border-radius:50%;border:2px solid '+r.color+';object-fit:cover">');
    else h.push('<div style="width:32px;height:32px;border-radius:50%;background:'+r.color+'33;border:2px solid '+r.color+';display:flex;align-items:center;justify-content:center;font-size:13px;color:'+r.color+';font-weight:700">'+r.name[0].toUpperCase()+'</div>');
    h.push('<span style="flex:1;font-size:14px;font-weight:'+(isMe?'700':'400')+';color:'+(isMe?r.color:'#e2e8f0')+'">'+r.name+(isMe?' (moi)':'')+'</span>');
    h.push('<span style="font-family:monospace;font-size:18px;font-weight:700;color:#f97316">'+fmtPts(r.score)+' pts</span>');
    h.push('</div>');
  });
  h.push('<div style="display:flex;gap:8px;margin-top:12px;justify-content:center">');
  h.push('<button onclick="mpLeaveRoom()" style="padding:10px 24px;font-size:14px;border-radius:9px;border:none;background:#f97316;color:#fff;cursor:pointer;font-weight:700">Retour au menu</button>');
  h.push('</div>');
  document.getElementById('overlay').innerHTML = h.join('');
  document.getElementById('overlay').classList.remove('h');
}

// ??? Panel live (style Skribbl) ???????????????????????????????????????????????
function mpEnsureLivePanel() {
  if(document.getElementById('mp-live-panel')) return;
  var p = document.createElement('div');
  p.id = 'mp-live-panel';
  p.style.cssText = 'position:fixed;top:12px;right:12px;z-index:9000;background:rgba(13,17,32,0.93);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid #1e2d45;border-radius:12px;padding:10px 12px;min-width:170px;max-width:220px;box-shadow:0 4px 24px rgba(0,0,0,.5);font-family:system-ui,sans-serif;pointer-events:none;transition:opacity .2s';
  document.body.appendChild(p);
}

function mpUpdateLivePanel(room) {
  // Appelù depuis mpHandleRoomChange (mises ù jour temps rùel)
  // Seulement si le panel existe et que l'overlay est cachù (on est en train de jouer)
  var panel = document.getElementById('mp-live-panel');
  if(!panel) return;
  var ov = document.getElementById('overlay');
  if(!ov || !ov.classList.contains('h')) { panel.style.display='none'; return; }
  panel.style.display = 'block';
  mpRenderLivePanel(room);
}

function mpRenderLivePanel(room) {
  // Remplit le contenu du panel sans toucher ù display
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

// ??? Marqueurs adversaires en temps rùel ?????????????????????????????????????
function mpUpdateOtherMarkers(room) {
  if(!window.map) return;
  var rIdx=room.round||0, answers=(room.answers||{})[rIdx]||{}, players=room.players||{};

  // Supprimer les markers obsolùtes
  Object.keys(mpOtherMarkers).forEach(function(pid) {
    if(!answers[pid]||!answers[pid].pos){ mpOtherMarkers[pid].remove(); delete mpOtherMarkers[pid]; }
  });

  // Ajouter/mettre ù jour
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
}

// ??? Hook sur confirmGuess / timer ùcoulù de game.js ?????????????????????????
// STRATùGIE : on surcharge window.resolveRound
// En mode MP on bloque l'affichage solo (showInter) et on soumet ù Firebase ù la place.
// ??? mpOnConfirm : appelù par game.js (confirmGuess/nextLevel) en mode MP ?????
// game.js a ùtù patchù pour appeler window.mpOnConfirm() au lieu de resolveRound()
window.mpOnConfirm = function() {
  if(!window._mpMode || !mp.roomCode) return;
  if(mpAnswered) return;
  mpAnswered = true;
  gameActive = false;
  clearInterval(tiv);            // stopper timer solo (sùcuritù)
  clearInterval(mp.timerInterval); // stopper timer MP

  var r     = roundList[curR];
  var level = 5-(fixedLevel>=0?fixedLevel:curL);
  var pts=0, dist=null;
  if(playerPos && r) {
    dist = haversine(playerPos.lat,playerPos.lng,r.lat,r.lng);
    var effLevel = chillMode ? 5 : level; // Chill : toujours score max, pas de pùnalitù d'indice ni de timer
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

  // Dùsactiver le bouton confirmer
  var confb = document.getElementById('confb');
  if(confb) confb.disabled = true;

  // Toast "en attente"
  if(typeof showToast==='function') {
    showToast(dist!=null ? fmtDst(dist)+' ù +'+pts+' pts ù En attente des autres...' : 'Ratù ù En attente des autres...');
  }

  // Soumettre ù Firebase
  mpSubmitAnswer(playerPos, dist, pts, mpCurrentRound);
};

// ??? Quitter ?????????????????????????????????????????????????????????????????
function mpLeaveRoom() {
  clearInterval(mp.timerInterval);
  clearTimeout(_cdTimer);
  mpRemoveLivePanel(); mpClearOtherMarkers();
  mp.listeners.forEach(function(l){ try{off(l.ref,'value',l.fn);}catch(e){} });
  mp.listeners=[];
  if(mp.roomRef&&mp.playerId){
    var pRef=ref(rtdb,'rooms/'+mp.roomCode+'/players/'+mp.playerId);
    remove(pRef).then(function(){ if(mp.isHost)remove(mp.roomRef); }).catch(function(){});
  }
  mp.roomCode=mp.playerId=mp.roomRef=null; mp.isHost=false;
  mpCurrentRound=-1; mpAnswered=false; mpRoundActive=false;
  window._mpMode=false;
  if(typeof showMenu==='function') showMenu();
}

function mpCleanup() {
  clearInterval(mp.timerInterval); clearTimeout(_cdTimer);
  mpRemoveLivePanel(); mpClearOtherMarkers();
  mp.listeners.forEach(function(l){ try{off(l.ref);}catch(e){} });
  mp.listeners=[]; mpRoundActive=false; window._mpMode=false;
  if(typeof showMenu==='function') showMenu();
}

// ??? Exports ?????????????????????????????????????????????????????????????????
window.mpCreateRoom       = mpCreateRoom;
window.mpJoinRoom         = mpJoinRoom;
window.mpLaunchGame       = mpLaunchGame;
window.mpLeaveRoom        = mpLeaveRoom;
window.mpSubmitAnswer     = mpSubmitAnswer;
window.mpCheckAllAnswered = mpWatchAllAnswered;