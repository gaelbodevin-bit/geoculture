var _lang=(navigator.language||navigator.userLanguage||'fr').slice(0,2).toLowerCase();
if(!['fr','en','es','de','it','pt'].includes(_lang))_lang='en';
var _t={
fr:{howToPlay:'COMMENT JOUER',gameMode:'Mode de jeu',difficulty:'Difficult\u00e9',allLevels:'Tout niveaux',hintsPerPlace:'indices par lieu',dailyChallenge:'D\u00e9fi du jour',multiplayer:'Multijoueur',leaderboard:'Classement',disconnect:'D\u00e9connexion',history:'Historique',connectGoogle:'Connexion Google',ruleNormal:'5 manches \u00b7 indices progressifs \u00b7 place le marqueur',ruleNozoom:'Carte bloqu\u00e9e au zoom \u00b7 pas de loupe \u00b7 Premium',rulePerfection:'10 manches \u00b7 \u00e9limin\u00e9 si > 50 km \u00b7 Premium',ruleChill:'Pas de stress · recherche du lieu sans timer',ruleDaily:'5 lieux identiques pour tous \u00b7 1x par jour \u00b7 classement quotidien',confirm:'Confirmer',nextHint:'Indice suivant',exploreMap:'Explorer la carte',nextRound:'Manche suivante',viewSummary:'Voir le bilan \u2192',eliminated:'\u274c \u00c9limin\u00e9 ! > 50km',finished:'Termin\u00e9 !',playAgain:'Rejouer',backMenu:'\u2190 Menu',dailyTitle:'D\u00c9FI DU JOUR',dailySubtitle:'5 lieux \u00b7 r\u00e9initialis\u00e9 \u00e0 minuit (FR)',dailyPlayed:'\u2713 Jou\u00e9',dailyPlay:'Jouer',dailyLB:'Classement du jour',back:'\u2190 Retour',alreadyPlayed:'D\u00e9j\u00e0 jou\u00e9 aujourd\u2019hui !',premiumTitle:'\u2b50 Premium',premiumSubtitle:'D\u00e9bloquez {feature}.',premiumIncludes:'Inclus dans Premium',premiumSupport:'Soutenir et d\u00e9bloquer \u2192',premiumSecure:'Paiement s\u00e9curis\u00e9 via Stripe',premiumMin:'Montant minimum : 1\u20ac',premiumChoose:'Choisissez le montant (min. 1\u20ac)',premiumRedirect:'Redirection...',loginRequired:'Connexion requise',loginMsg:'Connecte-toi pour acc\u00e9der \u00e0 {feature}.',loginBtn:'Se connecter avec Google',legalLink:'Mentions l\u00e9gales',mpTitle:'MULTIJOUEUR',mpCreate:'Cr\u00e9er',mpJoin:'Rejoindre',mpCode:'CODE',mpPseudo:'Pseudo',mpRounds5:'5 manches',mpRounds10:'10 manches',mpCodeInvalid:'Code invalide',mpModuleNotLoaded:'Module non charg\u00e9',mpSalon:'Salon\u00a0: ',mpError:'Erreur\u00a0: ',lvlAll:'Tout niveaux',lvlExpert:'Expert',lvlHard:'Difficile',lvlMedium:'Moyen',lvlEasy:'Facile',lbTitle:'CLASSEMENT',lbDailyTitle:'CLASSEMENT DU JOUR',lbLoading:'Chargement\u2026',lbNoData:'Aucune donn\u00e9e.'},
en:{howToPlay:'HOW TO PLAY',gameMode:'Game mode',difficulty:'Difficulty',allLevels:'All levels',hintsPerPlace:'hints per place',dailyChallenge:'Daily challenge',multiplayer:'Multiplayer',leaderboard:'Leaderboard',disconnect:'Sign out',history:'History',connectGoogle:'Sign in with Google',ruleNormal:'5 rounds \u00b7 progressive hints \u00b7 place the marker',ruleNozoom:'Map locked at zoom \u00b7 no loupe \u00b7 Premium',rulePerfection:'10 rounds \u00b7 eliminated if > 50 km \u00b7 Premium',ruleChill:'No stress · find the place with no timer',ruleDaily:'Same 5 places for everyone \u00b7 1x per day \u00b7 daily leaderboard',confirm:'Confirm',nextHint:'Next hint',exploreMap:'Explore map',nextRound:'Next round',viewSummary:'View results \u2192',eliminated:'\u274c Eliminated! > 50km',finished:'Finished!',playAgain:'Play again',backMenu:'\u2190 Menu',dailyTitle:'DAILY CHALLENGE',dailySubtitle:'5 places \u00b7 resets at midnight (FR)',dailyPlayed:'\u2713 Played',dailyPlay:'Play',dailyLB:'Daily leaderboard',back:'\u2190 Back',alreadyPlayed:'Already played today!',premiumTitle:'\u2b50 Premium',premiumSubtitle:'Unlock {feature}.',premiumIncludes:'Included in Premium',premiumSupport:'Support & unlock \u2192',premiumSecure:'Secure payment via Stripe',premiumMin:'Minimum: \u20ac1',premiumChoose:'Choose your amount (min. \u20ac1)',premiumRedirect:'Redirecting...',loginRequired:'Login required',loginMsg:'Sign in to access {feature}.',loginBtn:'Sign in with Google',legalLink:'Legal notice',mpTitle:'MULTIPLAYER',mpCreate:'Create',mpJoin:'Join',mpCode:'CODE',mpPseudo:'Nickname',mpRounds5:'5 rounds',mpRounds10:'10 rounds',mpCodeInvalid:'Invalid code',mpModuleNotLoaded:'Module not loaded',mpSalon:'Room: ',mpError:'Error: ',lvlAll:'All levels',lvlExpert:'Expert',lvlHard:'Hard',lvlMedium:'Medium',lvlEasy:'Easy',lbTitle:'LEADERBOARD',lbDailyTitle:'DAILY LEADERBOARD',lbLoading:'Loading\u2026',lbNoData:'No data.'},
es:{howToPlay:'C\u00d3MO JUGAR',gameMode:'Modo de juego',difficulty:'Dificultad',allLevels:'Todos los niveles',hintsPerPlace:'pistas por lugar',dailyChallenge:'Reto diario',multiplayer:'Multijugador',leaderboard:'Clasificaci\u00f3n',disconnect:'Cerrar sesi\u00f3n',history:'Historial',connectGoogle:'Iniciar sesi\u00f3n con Google',ruleNormal:'5 rondas \u00b7 pistas progresivas \u00b7 coloca el marcador',ruleNozoom:'Mapa bloqueado \u00b7 sin lupa \u00b7 Premium',rulePerfection:'10 rondas \u00b7 eliminado si > 50 km \u00b7 Premium',ruleChill:'Sin estrés · encuentra el lugar sin tiempo',ruleDaily:'Los mismos 5 lugares para todos \u00b7 1x al d\u00eda',confirm:'Confirmar',nextHint:'Siguiente pista',exploreMap:'Explorar mapa',nextRound:'Siguiente ronda',viewSummary:'Ver resultados \u2192',eliminated:'\u274c \u00a1Eliminado! > 50km',finished:'\u00a1Terminado!',playAgain:'Jugar de nuevo',backMenu:'\u2190 Men\u00fa',dailyTitle:'RETO DIARIO',dailySubtitle:'5 lugares \u00b7 se reinicia a medianoche (FR)',dailyPlayed:'\u2713 Jugado',dailyPlay:'Jugar',dailyLB:'Clasificaci\u00f3n del d\u00eda',back:'\u2190 Volver',alreadyPlayed:'\u00a1Ya jugaste hoy!',premiumTitle:'\u2b50 Premium',premiumSubtitle:'Desbloquea {feature}.',premiumIncludes:'Incluido en Premium',premiumSupport:'Apoyar y desbloquear \u2192',premiumSecure:'Pago seguro con Stripe',premiumMin:'M\u00ednimo: 1\u20ac',premiumChoose:'Elige el importe (m\u00edn. 1\u20ac)',premiumRedirect:'Redirigiendo...',loginRequired:'Inicio de sesi\u00f3n requerido',loginMsg:'Inicia sesi\u00f3n para acceder a {feature}.',loginBtn:'Iniciar sesi\u00f3n con Google',legalLink:'Aviso legal',mpTitle:'MULTIJUGADOR',mpCreate:'Crear',mpJoin:'Unirse',mpCode:'C\u00d3DIGO',mpPseudo:'Apodo',mpRounds5:'5 rondas',mpRounds10:'10 rondas',mpCodeInvalid:'C\u00f3digo inv\u00e1lido',mpModuleNotLoaded:'M\u00f3dulo no cargado',mpSalon:'Sala: ',mpError:'Error: ',lvlAll:'Todos los niveles',lvlExpert:'Experto',lvlHard:'Dif\u00edcil',lvlMedium:'Medio',lvlEasy:'F\u00e1cil',lbTitle:'CLASIFICACI\u00d3N',lbDailyTitle:'CLASIFICACI\u00d3N DEL D\u00cdA',lbLoading:'Cargando\u2026',lbNoData:'Sin datos.'},
de:{howToPlay:'SO SPIELST DU',gameMode:'Spielmodus',difficulty:'Schwierigkeit',allLevels:'Alle Level',hintsPerPlace:'Hinweise pro Ort',dailyChallenge:'Tagesaufgabe',multiplayer:'Mehrspieler',leaderboard:'Bestenliste',disconnect:'Abmelden',history:'Verlauf',connectGoogle:'Mit Google anmelden',ruleNormal:'5 Runden \u00b7 progressive Hinweise \u00b7 Marker setzen',ruleNozoom:'Karte gesperrt \u00b7 keine Lupe \u00b7 Premium',rulePerfection:'10 Runden \u00b7 eliminiert bei > 50 km \u00b7 Premium',ruleChill:'Kein Stress · Ort ohne Timer finden',ruleDaily:'Gleiche 5 Orte f\u00fcr alle \u00b7 1x t\u00e4glich',confirm:'Best\u00e4tigen',nextHint:'N\u00e4chster Hinweis',exploreMap:'Karte erkunden',nextRound:'N\u00e4chste Runde',viewSummary:'Ergebnisse \u2192',eliminated:'\u274c Ausgeschieden! > 50km',finished:'Fertig!',playAgain:'Nochmal spielen',backMenu:'\u2190 Men\u00fc',dailyTitle:'TAGESAUFGABE',dailySubtitle:'5 Orte \u00b7 Zur\u00fccksetzen um Mitternacht (FR)',dailyPlayed:'\u2713 Gespielt',dailyPlay:'Spielen',dailyLB:'Tagesrangliste',back:'\u2190 Zur\u00fcck',alreadyPlayed:'Heute schon gespielt!',premiumTitle:'\u2b50 Premium',premiumSubtitle:'{feature} freischalten.',premiumIncludes:'Im Premium enthalten',premiumSupport:'Unterst\u00fctzen \u2192',premiumSecure:'Sichere Zahlung via Stripe',premiumMin:'Mindestbetrag: 1\u20ac',premiumChoose:'Betrag w\u00e4hlen (min. 1\u20ac)',premiumRedirect:'Weiterleitung...',loginRequired:'Anmeldung erforderlich',loginMsg:'Melde dich an um {feature} zu nutzen.',loginBtn:'Mit Google anmelden',legalLink:'Impressum',mpTitle:'MEHRSPIELER',mpCreate:'Erstellen',mpJoin:'Beitreten',mpCode:'CODE',mpPseudo:'Spitzname',mpRounds5:'5 Runden',mpRounds10:'10 Runden',mpCodeInvalid:'Ung\u00fcltiger Code',mpModuleNotLoaded:'Modul nicht geladen',mpSalon:'Raum: ',mpError:'Fehler: ',lvlAll:'Alle Level',lvlExpert:'Experte',lvlHard:'Schwer',lvlMedium:'Mittel',lvlEasy:'Leicht',lbTitle:'BESTENLISTE',lbDailyTitle:'TAGESBESTENLISTE',lbLoading:'Laden\u2026',lbNoData:'Keine Daten.'},
it:{howToPlay:'COME GIOCARE',gameMode:'Modalit\u00e0 di gioco',difficulty:'Difficolt\u00e0',allLevels:'Tutti i livelli',hintsPerPlace:'suggerimenti per luogo',dailyChallenge:'Sfida del giorno',multiplayer:'Multigiocatore',leaderboard:'Classifica',disconnect:'Disconnetti',history:'Cronologia',connectGoogle:'Accedi con Google',ruleNormal:'5 round \u00b7 suggerimenti progressivi \u00b7 posiziona il marker',ruleNozoom:'Mappa bloccata \u00b7 senza lente \u00b7 Premium',rulePerfection:'10 round \u00b7 eliminato se > 50 km \u00b7 Premium',ruleChill:'Senza stress · trova il luogo senza timer',ruleDaily:'Stessi 5 luoghi per tutti \u00b7 1x al giorno',confirm:'Conferma',nextHint:'Prossimo suggerimento',exploreMap:'Esplora la mappa',nextRound:'Round successivo',viewSummary:'Vedi risultati \u2192',eliminated:'\u274c Eliminato! > 50km',finished:'Finito!',playAgain:'Gioca ancora',backMenu:'\u2190 Menu',dailyTitle:'SFIDA DEL GIORNO',dailySubtitle:'5 luoghi \u00b7 azzera a mezzanotte (FR)',dailyPlayed:'\u2713 Giocato',dailyPlay:'Gioca',dailyLB:'Classifica del giorno',back:'\u2190 Indietro',alreadyPlayed:'Hai gi\u00e0 giocato oggi!',premiumTitle:'\u2b50 Premium',premiumSubtitle:'Sblocca {feature}.',premiumIncludes:'Incluso nel Premium',premiumSupport:'Supporta e sblocca \u2192',premiumSecure:'Pagamento sicuro via Stripe',premiumMin:'Importo minimo: 1\u20ac',premiumChoose:"Scegli l&#39;importo (min. 1\u20ac)",premiumRedirect:'Reindirizzamento...',loginRequired:'Accesso richiesto',loginMsg:'Accedi per utilizzare {feature}.',loginBtn:'Accedi con Google',legalLink:'Note legali',mpTitle:'MULTIGIOCATORE',mpCreate:'Crea',mpJoin:'Unisciti',mpCode:'CODICE',mpPseudo:'Soprannome',mpRounds5:'5 round',mpRounds10:'10 round',mpCodeInvalid:'Codice non valido',mpModuleNotLoaded:'Modulo non caricato',mpSalon:'Stanza: ',mpError:'Errore: ',lvlAll:'Tutti i livelli',lvlExpert:'Esperto',lvlHard:'Difficile',lvlMedium:'Medio',lvlEasy:'Facile',lbTitle:'CLASSIFICA',lbDailyTitle:'CLASSIFICA DEL GIORNO',lbLoading:'Caricamento\u2026',lbNoData:'Nessun dato.'},
pt:{howToPlay:'COMO JOGAR',gameMode:'Modo de jogo',difficulty:'Dificuldade',allLevels:'Todos os n\u00edveis',hintsPerPlace:'dicas por lugar',dailyChallenge:'Desafio di\u00e1rio',multiplayer:'Multijogador',leaderboard:'Classifica\u00e7\u00e3o',disconnect:'Sair',history:'Hist\u00f3rico',connectGoogle:'Entrar com Google',ruleNormal:'5 rodadas \u00b7 dicas progressivas \u00b7 coloque o marcador',ruleNozoom:'Mapa bloqueado \u00b7 sem lupa \u00b7 Premium',rulePerfection:'10 rodadas \u00b7 eliminado se > 50 km \u00b7 Premium',ruleChill:'Sem pressa · encontre o lugar sem timer',ruleDaily:'Mesmos 5 lugares para todos \u00b7 1x por dia',confirm:'Confirmar',nextHint:'Pr\u00f3xima dica',exploreMap:'Explorar mapa',nextRound:'Pr\u00f3xima rodada',viewSummary:'Ver resultados \u2192',eliminated:'\u274c Eliminado! > 50km',finished:'Terminado!',playAgain:'Jogar novamente',backMenu:'\u2190 Menu',dailyTitle:'DESAFIO DI\u00c1RIO',dailySubtitle:'5 lugares \u00b7 reinicia \u00e0 meia-noite (FR)',dailyPlayed:'\u2713 Jogado',dailyPlay:'Jogar',dailyLB:'Ranking do dia',back:'\u2190 Voltar',alreadyPlayed:'J\u00e1 jogou hoje!',premiumTitle:'\u2b50 Premium',premiumSubtitle:'Desbloqueie {feature}.',premiumIncludes:'Inclu\u00eddo no Premium',premiumSupport:'Apoiar e desbloquear \u2192',premiumSecure:'Pagamento seguro via Stripe',premiumMin:'Valor m\u00ednimo: 1\u20ac',premiumChoose:'Escolha o valor (m\u00edn. 1\u20ac)',premiumRedirect:'Redirecionando...',loginRequired:'Login necess\u00e1rio',loginMsg:'Entre para acessar {feature}.',loginBtn:'Entrar com Google',legalLink:'Aviso legal',mpTitle:'MULTIJOGADOR',mpCreate:'Criar',mpJoin:'Entrar',mpCode:'C\u00d3DIGO',mpPseudo:'Apelido',mpRounds5:'5 rodadas',mpRounds10:'10 rodadas',mpCodeInvalid:'C\u00f3digo inv\u00e1lido',mpModuleNotLoaded:'M\u00f3dulo n\u00e3o carregado',mpSalon:'Sala: ',mpError:'Erro: ',lvlAll:'Todos os n\u00edveis',lvlExpert:'Especialista',lvlHard:'Dif\u00edcil',lvlMedium:'M\u00e9dio',lvlEasy:'F\u00e1cil',lbTitle:'CLASSIFICA\u00c7\u00c3O',lbDailyTitle:'RANKING DO DIA',lbLoading:'Carregando\u2026',lbNoData:'Sem dados.'}
};
function T(key,vars){var d=_t[_lang]||_t.en;var s=d[key]||_t.en[key]||key;if(vars)Object.keys(vars).forEach(function(k){s=s.replace('{'+k+'}',vars[k]);});return s;}
window._lang=_lang;window.T=T;
var perfectionMode=false;
var noZoomMode=false;
var chillMode=false;
var fixedLevel=-1;
var BASE_PTS=[0,500,1000,1500,2000,3000];
var DIST_K=Math.log(2)/200;
var CIRC=2*Math.PI*38;
var TIMER=30;

var map,playerMarker,targetMarker,lineLayer;
var roundList=[],curR=0,curL=0,total=0,timeLeft=TIMER,tiv=null;
var playerPos=null,gameActive=false,confirming=false,roundScores=[];

function fmtDist(meters){
  if(meters===null||meters===undefined)return '\u2014';
  if(meters<1000)return meters.toLocaleString('fr-FR')+' m';
  return (meters/1000).toLocaleString('fr-FR',{maximumFractionDigits:1})+' km';
}

function haversine(la1,lo1,la2,lo2){
  const R=6371,r=Math.PI/180;
  const a=Math.sin((la2-la1)*r/2)**2+Math.cos(la1*r)*Math.cos(la2*r)*Math.sin((lo2-lo1)*r/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}

function initMap(){
  if(map){map.remove();map=null;}
  if(typeof L==='undefined'){console.error('Leaflet not loaded');return;}
  var mapDiv=document.getElementById('map');
  var divW=mapDiv?mapDiv.offsetWidth:(window.innerWidth-210);
  var divH=mapDiv?mapDiv.offsetHeight:window.innerHeight;
  var minZ=Math.max(Math.ceil(Math.log2(divW/256)),Math.ceil(Math.log2(divH/170)));
  if(minZ<1) minZ=1;
  map=L.map('map',{center:[20,0],zoom:minZ,zoomControl:!noZoomMode,attributionControl:true,minZoom:minZ,maxZoom:noZoomMode?minZ:18,scrollWheelZoom:!noZoomMode,doubleClickZoom:!noZoomMode,touchZoom:!noZoomMode,boxZoom:!noZoomMode,keyboard:true,dragging:true});
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'(c) Esri'}).addTo(map);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,opacity:1}).addTo(map);
  map.on('click',onMapClick);
  setTimeout(function(){if(!map)return;var wb=L.latLngBounds([[-75,-179],[75,179]]);var z=map.getBoundsZoom(wb);map.setMinZoom(z);if(noZoomMode)map.setMaxZoom(z);map.fitBounds(wb,{animate:false,padding:[0,0]});map.setMaxBounds(L.latLngBounds([[-85,-360],[85,360]]));},200);
}

function adjustMapZoom(){
  if(!map) return;
  var container=map.getContainer();
  var w=container.offsetWidth;
  var h=container.offsetHeight;
  if(w===0||h===0) return;
  // Zoom pour que 256*2^z >= largeur (\u00e9vite r\u00e9p\u00e9tition horizontale)
  var minZ=Math.ceil(Math.log2(w/256));
  if(minZ<1) minZ=1;
  map.setMinZoom(minZ);
  if(noZoomMode){
    map.setMaxZoom(minZ);
  }
  if(map.getZoom()<minZ){
    map.setZoom(minZ,{animate:false});
  }
}
function makePin(color){
  return L.divIcon({className:'',
    html:`<div style="width:18px;height:18px;background:${color};border:2.5px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 10px rgba(0,0,0,.5)"></div>`,
    iconSize:[18,18],iconAnchor:[9,18]});
}

function onMapClick(e){
  if(!gameActive||confirming)return;
  playerPos={lat:e.latlng.lat,lng:e.latlng.lng};
  if(playerMarker)playerMarker.remove();
  playerMarker=L.marker([playerPos.lat,playerPos.lng],{icon:makePin('#f97316')}).addTo(map);
  document.getElementById('confb').disabled=false;
  document.getElementById('placed-info').textContent=`${playerPos.lat.toFixed(3)}, ${playerPos.lng.toFixed(3)}`;
}

function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=0|Math.random()*(i+1);[b[i],b[j]]=[b[j],b[i]]}return b}

function startGame(){
  document.body.classList.remove('menu-mode');
  var nbRounds=perfectionMode?10:5;
  total=0;roundScores=[];
  roundList=shuffle(ROUNDS).slice(0,nbRounds);
  curR=0;
  document.getElementById('hsc').textContent='0';
  document.getElementById('overlay').classList.add('h');
  // S'assurer que la carte est initialis\u00e9e
  if(!map){ try{ initMap(); }catch(e){ console.warn('Map init failed:',e); } }
  startRound(0);
}

function startRound(idx){
  curR=idx;curL=0;playerPos=null;confirming=false;gameActive=true;
  if(playerMarker){playerMarker.remove();playerMarker=null;}
  if(targetMarker){targetMarker.remove();targetMarker=null;}
  if(lineLayer){lineLayer.remove();lineLayer=null;}
  map.setView([20,10],map.getMinZoom(),{animate:false});
  document.getElementById('confb').disabled=true;
  document.getElementById('explore-tip').style.display='none';
  document.getElementById('back-btn').style.display='none';
  document.getElementById('placed-info').textContent='Cliquez sur la carte pour placer votre r\u00e9ponse';
  document.getElementById('hrnd').textContent=(idx+1)+'/'+roundList.length;
  updateDots();showHint();startTimer();
  // Masquer le bouton indice suivant en niveau fixe
  var skipb=document.getElementById('skipb');
  if(skipb) skipb.style.display=fixedLevel>=0?'none':'block';
}

function showHint(){
  var hintIdx=fixedLevel>=0?fixedLevel:curL;
  const h=roundList[curR].hints[hintIdx];
  const level=5-(fixedLevel>=0?fixedLevel:curL);
  const b=document.getElementById('badge');
  b.textContent=h.l;b.style.background=h.bc;b.style.color=h.tc;
  document.getElementById('qtxt').textContent=h.t;
  // level calcul\u00e9 dans showHint
  const mx=BASE_PTS[level];
  document.getElementById('lvl-max').textContent=mx.toLocaleString('fr-FR')+' pts';
  document.getElementById('lvl-mult').textContent='Score max : pr\u00e9cision \u00e0 100\u00a0m + r\u00e9ponse rapide';
  let remaining=total;
  for(let i=curR;i<roundList.length;i++){
    remaining+=i===curR?mx:BASE_PTS[5];
  }
  document.getElementById('hmax').textContent=remaining.toLocaleString('fr-FR');
}

function updateDots(){
  for(var i=0;i<5;i++){
    var d=document.getElementById('d'+i);
    if(fixedLevel>=0) d.className='dot'+(i===fixedLevel?' on':'');
    else d.className='dot'+(i===curL?' on':i<curL?' done':'');
  }
}

function startTimer(){
  if(window._mpMode) return;
  if(chillMode){
    clearInterval(tiv);timeLeft=999;
    var _a=document.getElementById('arc');
    if(_a){_a.style.transition='none';_a.style.strokeDashoffset='0';_a.style.stroke='#3b82f6';}
    var _tn=document.getElementById('tnum');if(_tn){_tn.textContent='∞';_tn.style.color='#3b82f6';}
    return;
  }
  clearInterval(tiv);timeLeft=TIMER;
  var arcEl=document.getElementById('arc');
  if(arcEl){
    arcEl.style.transition='none';
    arcEl.style.strokeDashoffset='0';
    arcEl.style.stroke='#22c55e';
    void arcEl.offsetWidth;
    arcEl.style.transition='stroke-dashoffset .9s linear,stroke .3s';
  }
  var numEl=document.getElementById('tnum');
  if(numEl){numEl.textContent=TIMER;numEl.style.color='#22c55e';}
  tiv=setInterval(function(){
    timeLeft=Math.max(0,timeLeft-.1);
    renderTimer();
    if(timeLeft<=0){clearInterval(tiv);nextLevel();}
  },100);
}

function renderTimer(){
  const pct=timeLeft/TIMER;
  const offset=CIRC*(1-pct);
  const arc=document.getElementById('arc');
  if(timeLeft<=0) arc.style.transition='none';
  arc.style.strokeDashoffset=offset;
  const col=timeLeft>19?'#22c55e':timeLeft>9?'#fbbf24':'#ef4444';
  arc.style.stroke=col;
  const n=document.getElementById('tnum');
  n.textContent=Math.ceil(timeLeft);
  n.style.color=col;
}

var FLASH_COLORS=['#ef4444','#f97316','#eab308','#22c55e','#3b82f6'];
var FLASH_LABELS=['Expert','Difficile','Moyen','Facile','Tr\u00e8s facile'];

function triggerFlash(level){
  const el=document.getElementById('level-flash');
  const badge=document.getElementById('flash-badge');
  const sub=document.getElementById('flash-sub');
  const col=FLASH_COLORS[level]||'#ef4444';
  const lbl=FLASH_LABELS[level]||'';
  el.style.background=col+'22';
  badge.textContent=lbl;
  badge.style.color=col;
  sub.textContent='Indice suivant !';
  el.classList.remove('fire');
  void el.offsetWidth;
  el.classList.add('fire');
  const sb=document.getElementById('sidebar');
  sb.style.setProperty('--flash-col',col);
  sb.classList.remove('flash-border');
  void sb.offsetWidth;
  sb.classList.add('flash-border');
}

function nextLevel(){
  if(!gameActive)return;
  if(fixedLevel>=0){
    if(window._mpMode && window.mpOnConfirm){ window.mpOnConfirm(); return; }
    clearInterval(tiv);gameActive=false;confirming=true;resolveRound();
  }
  else if(curL<3){curL++;triggerFlash(curL);updateDots();showHint();startTimer();}
  else{
    if(window._mpMode && window.mpOnConfirm){ window.mpOnConfirm(); return; }
    clearInterval(tiv);gameActive=false;confirming=true;resolveRound();
  }
}

function confirmGuess(){
  if(!gameActive||confirming)return;
  if(window._mpMode && window.mpOnConfirm){ window.mpOnConfirm(); return; }
  clearInterval(tiv);gameActive=false;confirming=true;resolveRound();
}

function resolveRound(){
  const r=roundList[curR];
  const level=5-(fixedLevel>=0?fixedLevel:curL);
  let pts=0,dist=null;
  if(playerPos){
    dist=haversine(playerPos.lat,playerPos.lng,r.lat,r.lng);
    const effLevel=chillMode?5:level;
    const distCoef=chillMode?1.0:0.8;
    const distScore=BASE_PTS[effLevel]*distCoef*Math.exp(-DIST_K*dist);
    const timeScore=chillMode?0:BASE_PTS[effLevel]*0.2*(timeLeft/TIMER);
    pts=Math.round(distScore+timeScore);
  }
  total+=pts;
  roundScores.push({name:r.name,pts,distM:dist!=null?Math.round(dist*1000):null,maxPts:BASE_PTS[level],level});
  document.getElementById('hsc').textContent=total.toLocaleString('fr-FR');
  const popupStyle='font-family:system-ui,sans-serif;font-size:13px;line-height:1.5;min-width:140px';
  targetMarker=L.marker([r.lat,r.lng],{icon:makePin('#22c55e')})
    .bindPopup(`<div style="${popupStyle}"><b style="color:#15803d">\u2713 ${r.name}</b>${dist?`<br><span style="color:#666">Distance : ${fmtDist(Math.round(dist*1000))}</span>`:'<br><span style="color:#666">Pas de tentative</span>'}</div>`,{maxWidth:220}).addTo(map);
  if(playerPos){
    if(playerMarker) playerMarker.bindPopup(`<div style="${popupStyle}"><b style="color:#ea580c">\u1f4cd Votre r\u00e9ponse</b><br><span style="color:#666">Distance : ${fmtDist(Math.round(dist*1000))}</span><br><span style="color:#f97316;font-weight:700">+${pts} pts</span></div>`,{maxWidth:200});
    lineLayer=L.polyline([[playerPos.lat,playerPos.lng],[r.lat,r.lng]],{color:'#f97316',weight:2.5,dashArray:'8 5',opacity:.8}).addTo(map);
    map.fitBounds(L.latLngBounds([[playerPos.lat,playerPos.lng],[r.lat,r.lng]]),{padding:[60,60]});
  } else {
    map.setView([r.lat,r.lng],12);targetMarker.openPopup();
  }
  document.getElementById('placed-info').textContent=dist!=null?`\u1f3af ${fmtDist(Math.round(dist*1000))} \u2014 +${pts.toLocaleString('fr-FR')} pts`:`\u274c Rat\u00e9 \u2014 ${r.name}`;
  showToast(dist!=null?`${r.name} \u00b7 ${fmtDist(Math.round(dist*1000))} \u00b7 +${pts} pts`:`Rat\u00e9 ! C'\u00e9tait : ${r.name}`);
  setTimeout(function(){
    var elim=perfectionMode&&(dist===null||dist>50);
    showInter(pts,dist,r.name,elim);
  },3000);
}


function showInter(pts,dist,name,eliminated){
  const lastScore=roundScores[roundScores.length-1];
  const mx=lastScore?lastScore.maxPts:3000;
  const pctRound=mx>0?Math.round(pts/mx*100):0;
  const barColor=pctRound>=80?'#22c55e':pctRound>=50?'#fbbf24':'#f97316';
  const ov=document.getElementById('overlay');
  const placeDesc = roundList[curR].desc || '';
  const imgId = 'wimg' + Date.now();
  const wq = encodeURIComponent(roundList[curR].name.split('\u2014')[0].trim().replace(/\s*\u2014.*/,'').trim());
  var _nextBtn;
  if(eliminated){_nextBtn='<div style="color:#ef4444;font-size:15px;font-weight:700;margin:8px 0">&#10060; \u00c9limin\u00e9 ! > 50km</div><button class="btn ba" onclick="showEnd()" style="width:auto;padding:12px 32px;font-size:14px">Voir le bilan &#8594;</button>';}
  else if(curR+1<roundList.length){_nextBtn='<button class="btn ba" onclick="nextRound()" style="width:auto;padding:12px 32px;font-size:14px">Manche suivante</button>';}
  else{_nextBtn='<button class="btn ba" onclick="showEnd()" style="width:auto;padding:12px 32px;font-size:14px">Voir le bilan &#8594;</button>';}
  ov.innerHTML=`
    <div id="${imgId}" style="width:100%;max-width:500px;height:280px;background:#111827;border-radius:12px;overflow:hidden;position:relative"></div>
    <div class="otitle" style="font-size:38px">+${pts.toLocaleString('fr-FR')}</div>
    <div class="osub" style="color:#e2e8f0;font-size:13px;line-height:1.65;margin-top:-2px;max-width:420px;text-align:center;font-style:normal;background:rgba(17,24,39,0.6);border-radius:8px;padding:8px 14px">${placeDesc}</div>
    <div style="display:flex;align-items:center;gap:10px;width:100%;max-width:320px">
      <div style="flex:1;height:8px;background:#1e2d45;border-radius:4px;overflow:hidden">
        <div style="width:${pctRound}%;height:100%;background:${barColor};border-radius:4px;transition:width .6s ease"></div>
      </div>
      <span style="font-size:13px;font-weight:600;color:${barColor};white-space:nowrap">${pts.toLocaleString('fr-FR')} / ${mx.toLocaleString('fr-FR')} pts</span>
    </div>
    <div class="osub" style="color:#f1f5f9;font-size:15px;font-weight:600;margin-top:-4px">${name}</div>
    <div class="osub" style="margin-top:-6px">${dist!=null?fmtDist(Math.round(dist*1000))+' de la cible':'Aucun point plac\u00e9'}</div>
    <div style="color:#6b7280;font-size:13px">Total : <b style="color:#f97316">${total.toLocaleString('fr-FR')} pts</b></div>
    <div style="display:flex;gap:10px;margin-top:6px;flex-wrap:wrap;justify-content:center">
      <button class="btn bg" onclick="showMenu()" style="width:auto;padding:12px 22px;font-size:14px">\u2302 Menu</button>
      <button id="explore-btn" onclick="enterExploreMode()" style="font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;padding:10px 20px;border-radius:9px;border:1px solid #2d3f5e;cursor:pointer;background:rgba(30,45,69,.9);color:#e2e8f0">\ Explorer la carte</button>
      ${_nextBtn}
    </div>
    <div id="ad-inter">
      <!-- PUB RECTANGLE 300x250 (d\u00e9commenter apr\u00e8s approbation AdSense)
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="XXXXXXXXXX"
           data-ad-format="auto"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
      -->
    </div>`;
  ov.classList.remove('h');
  // Photo : utiliser la photo locale si disponible, sinon Wikipedia
  (function(id, round){
    var el = document.getElementById(id);
    if(!el) return;
    // Priorité 1 : champ photo du round (fichier local ou URL)
    if(round.photo){
      var img = new Image();
      img.onload = function(){
        el.innerHTML = '<img src="'+round.photo+'" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:12px" alt="">';
      };
      img.onerror = function(){
        tryWiki('fr');
      };
      img.src = round.photo;
      return;
    }
    // Priorité 2 : Wikipedia
    function tryWiki(lang){
      var q = encodeURIComponent(round.name.replace(/\s*\u2014.*/,'').trim());
      fetch('https://'+lang+'.wikipedia.org/api/rest_v1/page/summary/'+q)
        .then(function(r){return r.json();})
        .then(function(d){
          var el2=document.getElementById(id);
          if(!el2) return;
          if(d.thumbnail&&d.thumbnail.source){
            el2.innerHTML='<img src="'+d.thumbnail.source+'" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:12px" alt="">';
          } else if(lang==='fr'){tryWiki('en');}
          else{el2.style.display='none';}
        }).catch(function(){var el2=document.getElementById(id);if(el2)el2.style.display='none';});
    }
    tryWiki('fr');
  })(imgId, roundList[curR]);

}

function showEnd(){
  const totalMax=roundScores.reduce((a,s)=>a+(s.maxPts||0),0);
  const pct=totalMax>0?Math.round(total/totalMax*100):0;
  const rows=roundScores.map(s=>{
    const distTxt=s.distM!=null?fmtDist(s.distM):'rat\u00e9';
    const ptsColor=s.pts>=s.maxPts*0.8?'#22c55e':s.pts>=s.maxPts*0.4?'#fbbf24':'#f97316';
    return `<div class="orow">
      <span style="font-size:11px;max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1">${s.name}</span>
      <span style="color:#6b7280;font-size:11px;margin:0 6px;flex-shrink:0">${distTxt}</span>
      <span style="font-size:11px;color:#4b5563;flex-shrink:0">${s.pts.toLocaleString('fr-FR')}/${s.maxPts.toLocaleString('fr-FR')}</span>
    </div>`;
  }).join('');
  const rank=pct>=90?'G\u00e9ographe l\u00e9gendaire':pct>=70?'Expert international':pct>=50?'Bon explorateur':pct>=30?'En progression':'D\u00e9butant courageux';
  const ov=document.getElementById('overlay');
  ov.innerHTML=`<div class="otitle" style="font-size:38px">Termin\u00e9 !</div>
    <div class="osub" style="color:#f97316;font-weight:700;font-size:15px">${rank} \u2014 ${pct}%</div>
    <div class="ocard">
      <div style="display:flex;justify-content:space-between;font-size:10px;color:#4b5563;text-transform:uppercase;letter-spacing:.5px;padding-bottom:6px;border-bottom:1px solid #1e2d45;margin-bottom:4px">
        <span>Lieu</span><span>Distance</span><span>Score / Max</span>
      </div>
      ${rows}
      <div class="otot">
        <span>Total</span>
        <span style="font-size:12px;color:#6b7280;margin-right:auto;padding-left:12px">${total.toLocaleString('fr-FR')} / ${totalMax.toLocaleString('fr-FR')} pts</span>
        <span class="p">${pct}%</span>
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:6px;flex-wrap:wrap;justify-content:center">
      <button class="btn bg" onclick="showMenu()" style="width:auto;padding:12px 22px;font-size:14px">\u2302 Menu</button>
      <button id="explore-btn" onclick="enterExploreMode()" style="font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;padding:10px 20px;border-radius:9px;border:1px solid #2d3f5e;cursor:pointer;background:rgba(30,45,69,.9);color:#e2e8f0">Explorer la carte</button>
      <button class="btn ba" onclick="startGame()" style="width:auto;padding:12px 32px;font-size:14px">\u21ba Rejouer</button>
    </div>
    <div id="ad-inter">
      <!-- PUB RECTANGLE 300x250 (d\u00e9commenter apr\u00e8s approbation AdSense)
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="XXXXXXXXXX"
           data-ad-format="auto"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
      -->
    </div>`;
  ov.classList.remove('h');
  if(typeof window.saveGame==='function'){var _t=roundScores.reduce(function(a,s){return a+(s.maxPts||0);},0);var _p=_t>0?Math.round(total/_t*100):0;var _n=['tout-niveaux','expert','difficile','moyen','facile'];var _m=(noZoomMode?'nozoom-':'')+(perfectionMode?'perfection-':'')+(chillMode?'chill-':'')+(_n[fixedLevel+1]||'tout-niveaux');setTimeout(function(){try{window.saveGame(roundScores,total,_p,_m);}catch(e){console.error(e);}},500);}
  // Sauvegarder dans le classement du jour si mode daily
  if(window._dailyMode && typeof window.saveDailyScore==='function'){
    var _dt=roundScores.reduce(function(a,s){return a+(s.maxPts||0);},0);
    var _dp=_dt>0?Math.round(total/_dt*100):0;
    var _dlvl=window._dailyLevel!==undefined?window._dailyLevel:fixedLevel;
    // Marquer comme joué (localStorage) et envoyer au classement Firestore
    if(typeof markDailyPlayed==='function') markDailyPlayed(_dlvl, total);
    window.saveDailyScore(_dlvl, total, _dp);
    window._dailyMode = false; // empêcher double soumission
  }
}

function showMenu(){
  // En mode MP, quitter la partie (mpLeaveRoom gère le retour au menu)
  if(window._mpMode && typeof window.mpLeaveRoom==='function'){
    window.mpLeaveRoom(); return;
  }
  clearInterval(tiv);
  gameActive=false;
  document.body.classList.add('menu-mode');
  var ov=document.getElementById('overlay');
  var user=typeof getCurrentUser==='function'?getCurrentUser():null;
  var h=[];

  // Titre
  h.push('<div class="otitle" style="font-size:44px;letter-spacing:6px;line-height:1">GEO<br>CULTURE</div>');
  h.push('<div style="font-size:11px;color:#374151;letter-spacing:3px;margin-top:4px;margin-bottom:8px">v2.6</div>');

  // Zone auth
  if(user){
    h.push('<div style="display:flex;align-items:center;gap:10px;background:#0d1120;border:0.5px solid #1e2d45;border-radius:10px;padding:8px 16px;margin-bottom:4px">');
    h.push('<img src="'+(user.photoURL||'')+'" style="width:28px;height:28px;border-radius:50%;object-fit:cover;border:2px solid #f97316">');
    h.push('<span style="font-size:13px;color:#e2e8f0">'+(user.displayName||user.email)+'</span>');
    h.push('<button onclick="window.fbSignOut&&window.fbSignOut()" style="font-size:11px;color:#6b7280;background:transparent;border:none;cursor:pointer;text-decoration:underline;margin-left:8px">D\u00e9connexion</button>');
    h.push('<button onclick="window.showHistory&&window.showHistory()" style="font-size:11px;color:#6b7280;background:transparent;border:none;cursor:pointer;text-decoration:underline">Historique</button>');
    h.push('</div>');
  } else {
    h.push('<button onclick="window.fbSignIn&&window.fbSignIn()" style="font-size:13px;font-weight:500;padding:8px 20px;border-radius:8px;border:1px solid #4285f4;background:transparent;color:#4285f4;cursor:pointer;margin-bottom:8px">Se connecter avec Google</button>');
  }

  // Grille 2 colonnes égales
  h.push('<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;width:100%;max-width:680px">');

  // Colonne gauche: comment jouer
  h.push('<div style="background:#0d1120;border:0.5px solid #1e2d45;border-radius:12px;padding:18px 20px;display:flex;flex-direction:column;gap:12px">');
  h.push('<div style="font-size:10px;font-weight:600;color:#f97316;letter-spacing:1.5px;text-transform:uppercase">Comment jouer</div>');
  h.push('<div style="font-size:12px;color:#94a3b8;line-height:1.5;padding:2px 0 4px 0;border-bottom:1px solid #1e2d4566;margin-bottom:2px">Localise les lieux grâce aux indices en un minimum de temps.</div>');
  var rules=[
    {t:'Normal', d:T('ruleNormal')},
    {t:'No-Zoom', d:T('ruleNozoom')},
    {t:'Perfection', d:T('rulePerfection')},
    {t:'Chill', d:T('ruleChill')},
    {t:T('dailyChallenge'), d:T('ruleDaily')}
  ];
  rules.forEach(function(r,i){
    h.push('<div style="display:flex;gap:12px;align-items:flex-start">');
    h.push('<div style="width:24px;height:24px;border-radius:50%;background:#1a2238;display:flex;align-items:center;justify-content:center;font-size:11px;color:#f97316;font-weight:700;flex-shrink:0">'+(i+1)+'</div>');
    h.push('<div><span style="font-size:13px;color:#e2e8f0;font-weight:700">'+r.t+'</span><br><span style="font-size:12px;color:#94a3b8;line-height:1.5">'+r.d+'</span></div>');
    h.push('</div>');
  });
  h.push('</div>');

  // Colonne droite: modes de jeu
  h.push('<div style="background:#0d1120;border:0.5px solid #1e2d45;border-radius:12px;padding:18px 20px;display:flex;flex-direction:column;gap:12px">');
  h.push('<div style="font-size:10px;font-weight:600;color:#94a3b8;letter-spacing:1.5px;text-transform:uppercase">Mode de jeu</div>');
  var isPrem = typeof window.isPremiumUser==='function'?window.isPremiumUser():(window.isPremium===true);
  var lock = isPrem ? '' : ' 🔒';

  // Styles de base — plus grands, plus visuels
  var _bs = 'font-family:\'DM Sans\',sans-serif;font-size:13px;font-weight:700;cursor:pointer;text-align:center;border-radius:10px;padding:14px 6px;transition:all .2s;border:1.5px solid;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;line-height:1.2;';

  h.push('<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;flex:1">');

  // Normal — orange
  h.push('<button onclick="selectGameMode(\'normal\')" style="'+_bs+'background:transparent;color:#f97316;border-color:#f97316" '
    +'onmouseover="this.style.background=\'#f97316\';this.style.color=\'#fff\';this.style.transform=\'translateY(-2px)\'" '
    +'onmouseout="this.style.background=\'transparent\';this.style.color=\'#f97316\';this.style.transform=\'\'">'
    +'<span style="font-size:18px">🌍</span><span>Normal</span>'
    +'</button>');

  // No-Zoom — cyan (différent de normal)
  h.push('<button onclick="selectGameMode(\'nozoom\')" style="'+_bs+'background:transparent;color:#22d3ee;border-color:#06b6d4" '
    +'onmouseover="this.style.background=\'#06b6d4\';this.style.color=\'#fff\';this.style.transform=\'translateY(-2px)\'" '
    +'onmouseout="this.style.background=\'transparent\';this.style.color=\'#22d3ee\';this.style.transform=\'\'">'
    +'<span style="font-size:18px">🗺️</span><span>No-Zoom'+lock+'</span>'
    +'</button>');

  // Perfection — violet
  h.push('<button onclick="selectGameMode(\'perfection\')" style="'+_bs+'background:transparent;color:#a78bfa;border-color:#7c3aed" '
    +'onmouseover="this.style.background=\'#7c3aed\';this.style.color=\'#fff\';this.style.transform=\'translateY(-2px)\'" '
    +'onmouseout="this.style.background=\'transparent\';this.style.color=\'#a78bfa\';this.style.transform=\'\'">'
    +'<span style="font-size:18px">🎯</span><span>Perfection'+lock+'</span>'
    +'</button>');

  // Chill — bleu
  h.push('<button onclick="selectGameMode(\'chill\')" style="'+_bs+'background:transparent;color:#60a5fa;border-color:#3b82f6" '
    +'onmouseover="this.style.background=\'#3b82f6\';this.style.color=\'#fff\';this.style.transform=\'translateY(-2px)\'" '
    +'onmouseout="this.style.background=\'transparent\';this.style.color=\'#60a5fa\';this.style.transform=\'\'">'
    +'<span style="font-size:18px">\u2615</span><span>Chill'+lock+'</span>'
    +'</button>');

  // Défi du jour — jaune (pleine largeur)
  h.push('<button onclick="showDailyMenu()" style="'+_bs+'grid-column:span 2;background:transparent;color:#fbbf24;border-color:#fbbf24" '
    +'onmouseover="this.style.background=\'#fbbf24\';this.style.color=\'#000\';this.style.transform=\'translateY(-2px)\'" '
    +'onmouseout="this.style.background=\'transparent\';this.style.color=\'#fbbf24\';this.style.transform=\'\'">'
    +'<span style="font-size:18px">📅</span><span>'+T('dailyChallenge')+'</span>'
    +'</button>');

  // Multijoueur — vert (pleine largeur)
  h.push('<button onclick="openMultiplayer()" style="'+_bs+'grid-column:span 2;background:transparent;color:#22c55e;border-color:#22c55e" '
    +'onmouseover="this.style.background=\'#22c55e\';this.style.color=\'#fff\';this.style.transform=\'translateY(-2px)\'" '
    +'onmouseout="this.style.background=\'transparent\';this.style.color=\'#22c55e\';this.style.transform=\'\'">'
    +'<span style="font-size:18px">👥</span><span>'+T('multiplayer')+lock+'</span>'
    +'</button>');

  h.push('</div>');
  h.push('</div>');

  h.push('</div>'); // fin grille

  // Lien classement
  h.push('<div style="display:flex;align-items:center;gap:16px;margin-top:8px;justify-content:center">');
  h.push('<a onclick="window.showLeaderboard&&window.showLeaderboard()" style="font-size:13px;color:#f97316;cursor:pointer;font-weight:600;text-decoration:underline;text-underline-offset:4px">'+T('leaderboard')+'</a>');
  h.push('</div>');

  ov.innerHTML=h.join('');
  ov.classList.remove('h');
  window._menuNZ=false;
  window._menuPerf=false;
}
function nextRound(){document.getElementById('overlay').classList.add('h');startRound(curR+1);}

var toastT;
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('s');
  clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('s'),3500);
}

var inExploreMode=false;

function enterExploreMode(){
  inExploreMode=true;
  document.getElementById('explore-tip').style.display='block';
  document.getElementById('back-btn').style.display='block';
  document.getElementById('overlay').classList.add('h');
  // Add popups to all markers
  if(targetMarker) targetMarker.openPopup();
  // Fit bounds to show everything
  const r=roundList[curR];
  if(playerPos && playerMarker){
    const bounds=L.latLngBounds([[playerPos.lat,playerPos.lng],[r.lat,r.lng]]);
    map.fitBounds(bounds,{padding:[80,80]});
  } else {
    map.setView([r.lat,r.lng],12);
  }
}

function exitExploreMode(){
  inExploreMode=false;
  document.getElementById('explore-tip').style.display='none';
  document.getElementById('back-btn').style.display='none';
  // Re-show the result overlay
  if(curR+1<roundList.length){
    const s=roundScores[roundScores.length-1];
    showInter(s.pts,s.dist,roundList[curR].name);
  } else {
    showEnd();
  }
}

document.addEventListener('DOMContentLoaded',function(){
  document.body.classList.add('menu-mode');
  setTimeout(function(){try{initMap();}catch(e){}showMenu();},200);
  document.getElementById('confb').onclick=confirmGuess;
  document.getElementById('skipb').onclick=function(){if(!gameActive)return;clearInterval(tiv);nextLevel();};
  var nozb=document.getElementById('nozb');
  if(nozb) nozb.onclick=function(){noZoomMode=true;if(map){map.remove();map=null;}initMap();startGame();};
});
function getDailyDateFR(){var now=new Date();var m=now.getUTCMonth()+1;var off=m>=4&&m<=10?120:60;var t=new Date(now.getTime()+off*60000);return t.getUTCFullYear()+'-'+String(t.getUTCMonth()+1).padStart(2,'0')+'-'+String(t.getUTCDate()).padStart(2,'0');}
function getDailySeed(d){var h=0;for(var i=0;i<d.length;i++){h=((h<<5)-h)+d.charCodeAt(i);h|=0;}return Math.abs(h);}
function getDailyRounds(seed,level){var s=seed+level*9999;var res=[];var seen={};for(var i=0;i<500&&res.length<5;i++){s=(s*1664525+1013904223)&0x7fffffff;var idx=Math.abs(s)%ROUNDS.length;if(!seen[idx]){seen[idx]=true;res.push(ROUNDS[idx]);}}return res;}
function getDailyKey(l){return 'daily_'+getDailyDateFR()+'_lvl'+l;}
function hasDailyBeenPlayed(l){return localStorage.getItem(getDailyKey(l))==='done';}
function markDailyPlayed(l,score){localStorage.setItem(getDailyKey(l),'done');localStorage.setItem(getDailyKey(l)+'_score',String(score));}
function getDailyScore(l){return parseInt(localStorage.getItem(getDailyKey(l)+'_score'))||0;}
function showDailyMenu(){var ov=document.getElementById('overlay');var ds=getDailyDateFR();var lvls=[{i:0,label:'Expert',color:'#ef4444'},{i:1,label:'Difficile',color:'#f97316'},{i:2,label:'Moyen',color:'#eab308'},{i:3,label:'Facile',color:'#22c55e'}];var h=[];h.push('<div class="otitle" style="font-size:28px">D\u00c9FI DU JOUR</div>');h.push('<div style="font-size:13px;color:#cbd5e1;font-weight:500;margin-bottom:14px">'+ds+' \u00b7 5 lieux \u00b7 r\u00e9initialis\u00e9 \u00e0 minuit (FR)</div>');h.push('<div style="display:flex;flex-direction:column;gap:8px;width:100%;max-width:420px">');lvls.forEach(function(lv){var played=hasDailyBeenPlayed(lv.i);var score=played?getDailyScore(lv.i):null;h.push('<div style="display:flex;align-items:center;gap:10px;background:'+lv.color+'18;border:1.5px solid '+lv.color+';border-radius:10px;padding:12px 16px">');h.push('<span style="font-size:13px;font-weight:700;color:'+lv.color+';flex:1">'+lv.label+'</span>');if(played){h.push('<span style="font-size:12px;color:#94a3b8;font-weight:500">'+score.toLocaleString('fr-FR')+' pts</span>');h.push('<span style="font-size:12px;color:#22c55e;margin-left:8px;font-weight:700">\u2713 Jou\u00e9</span>');}else{h.push('<button onclick="startDailyChallenge('+lv.i+')" style="padding:7px 16px;border-radius:7px;border:none;background:'+lv.color+';color:#fff;font-size:12px;font-weight:700;cursor:pointer">Jouer</button>');}h.push('</div>');});h.push('</div>');h.push('<div style="display:flex;gap:10px;margin-top:14px">');h.push('<button onclick="showDailyLeaderboard()" style="padding:9px 18px;border-radius:9px;border:1px solid #fbbf24;background:transparent;color:#fbbf24;font-size:12px;font-weight:600;cursor:pointer">Classement du jour</button>');h.push('<button onclick="showMenu()" style="padding:9px 18px;border-radius:9px;border:1px solid #334155;background:transparent;color:#94a3b8;font-size:12px;font-weight:600;cursor:pointer">\u2190 Retour</button>');h.push('</div>');ov.innerHTML=h.join('');ov.classList.remove('h');}
function startDailyChallenge(level){if(hasDailyBeenPlayed(level)){if(typeof showToast==='function')showToast('D\u00e9j\u00e0 jou\u00e9 aujourd\'hui !');return;}fixedLevel=level;noZoomMode=false;perfectionMode=false;window._dailyMode=true;window._dailyLevel=level;total=0;roundScores=[];roundList=getDailyRounds(getDailySeed(getDailyDateFR()),level);curR=0;document.body.classList.remove('menu-mode');document.getElementById('overlay').classList.add('h');document.getElementById('hsc').textContent='0';if(!map){try{initMap();}catch(e){}}startRound(0);}
function showDailyLeaderboard(){if(typeof window.showDailyLB==='function'){window.showDailyLB();}else if(typeof showToast==='function'){showToast('Classement non disponible');}}
function mpShowJoinMenu(){
  var ov=document.getElementById('overlay');
  var user=typeof getCurrentUser==='function'?getCurrentUser():null;
  var h=[];

  h.push('<div class="otitle" style="font-size:36px;margin-bottom:20px">MULTIJOUEUR</div>');
  h.push('<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;width:100%;max-width:700px">');

  // ── Colonne CRÉER ──
  h.push('<div style="background:#0d1120;border:1px solid #1e2d45;border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:14px">');
  h.push('<div style="font-size:11px;font-weight:700;color:#22c55e;letter-spacing:2px;text-transform:uppercase">Créer une partie</div>');

  var _mb='width:100%;padding:10px 4px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;transition:all .15s;text-align:center;';
  h.push('<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">');
  h.push('<button id="mp-mode-normal" onclick="window.mpSetMode&&window.mpSetMode(\'normal\')" style="'+_mb+'border:1.5px solid #f97316;background:transparent;color:#f97316" onmouseover="this.style.background=\'#f97316\';this.style.color=\'#fff\'" onmouseout="this.style.background=\'transparent\';this.style.color=\'#f97316\'">Normal</button>');
  h.push('<button id="mp-mode-nozoom" onclick="window.mpSetMode&&window.mpSetMode(\'nozoom\')" style="'+_mb+'border:1.5px solid #22d3ee;background:transparent;color:#22d3ee" onmouseover="this.style.background=\'#22d3ee\';this.style.color=\'#000\'" onmouseout="this.style.background=\'transparent\';this.style.color=\'#22d3ee\'">No-Zoom</button>');
  h.push('<button id="mp-mode-perf"  onclick="window.mpSetMode&&window.mpSetMode(\'perfection\')" style="'+_mb+'border:1.5px solid #7c3aed;background:transparent;color:#a78bfa" onmouseover="this.style.background=\'#7c3aed\';this.style.color=\'#fff\'" onmouseout="this.style.background=\'transparent\';this.style.color=\'#a78bfa\'">Perfection</button>');
  h.push('<button id="mp-mode-chill" onclick="window.mpSetMode&&window.mpSetMode(\'chill\')"  style="'+_mb+'border:1.5px solid #3b82f6;background:transparent;color:#60a5fa" onmouseover="this.style.background=\'#3b82f6\';this.style.color=\'#fff\'" onmouseout="this.style.background=\'transparent\';this.style.color=\'#60a5fa\'">Chill</button>');
  h.push('</div>');

  h.push('<div><div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px">Niveau</div>');
  h.push('<select id="mp-level" style="width:100%;background:#111827;border:1px solid #2d3f5e;border-radius:8px;padding:10px 12px;color:#e2e8f0;font-size:13px;cursor:pointer"><option value="-1">Tout niveaux</option><option value="0">Expert</option><option value="1">Difficile</option><option value="2">Moyen</option><option value="3">Facile</option></select></div>');

  h.push('<div><div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px">Manches</div>');
  h.push('<select id="mp-rounds" style="width:100%;background:#111827;border:1px solid #2d3f5e;border-radius:8px;padding:10px 12px;color:#e2e8f0;font-size:13px;cursor:pointer"><option value="5">5 manches</option><option value="10">10 manches</option></select></div>');

  if(!user){
    h.push('<div><div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px">Pseudo</div>');
    h.push('<input id="mp-name-create" placeholder="Ton pseudo" style="width:100%;background:#111827;border:1px solid #2d3f5e;border-radius:8px;padding:10px 12px;color:#e2e8f0;font-size:13px"></div>');
  }
  h.push('<button onclick="window.mpDoCreate&&window.mpDoCreate()" style="width:100%;padding:13px;border-radius:10px;border:none;background:#22c55e;color:#fff;font-weight:700;font-size:14px;cursor:pointer;margin-top:4px" onmouseover="this.style.opacity=\'0.85\'" onmouseout="this.style.opacity=\'1\'">Créer la partie</button>');
  h.push('</div>');

  // ── Colonne REJOINDRE ──
  h.push('<div style="background:#0d1120;border:1px solid #1e2d45;border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:14px">');
  h.push('<div style="font-size:11px;font-weight:700;color:#f97316;letter-spacing:2px;text-transform:uppercase">Rejoindre une partie</div>');
  h.push('<div style="flex:1;display:flex;flex-direction:column;gap:6px">');
  h.push('<div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px">Code du salon</div>');
  h.push('<input id="mp-code" placeholder="XXXXXX" maxlength="6" style="width:100%;background:#111827;border:2px solid #2d3f5e;border-radius:10px;padding:18px 12px;color:#f97316;font-size:28px;font-weight:700;letter-spacing:10px;text-align:center;text-transform:uppercase" onfocus="this.style.borderColor=\'#f97316\'" onblur="this.style.borderColor=\'#2d3f5e\'">');
  h.push('</div>');
  if(!user){
    h.push('<div><div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px">Pseudo</div>');
    h.push('<input id="mp-name-join" placeholder="Ton pseudo" style="width:100%;background:#111827;border:1px solid #2d3f5e;border-radius:8px;padding:10px 12px;color:#e2e8f0;font-size:13px"></div>');
  }
  h.push('<div style="flex:1"></div>');
  h.push('<button onclick="window.mpDoJoin&&window.mpDoJoin()" style="width:100%;padding:13px;border-radius:10px;border:none;background:#f97316;color:#fff;font-weight:700;font-size:14px;cursor:pointer;margin-top:4px" onmouseover="this.style.opacity=\'0.85\'" onmouseout="this.style.opacity=\'1\'">Rejoindre</button>');
  h.push('</div>');

  h.push('</div>');
  h.push('<button onclick="showMenu()" style="margin-top:16px;padding:9px 28px;border-radius:9px;border:1px solid #334155;background:transparent;color:#64748b;font-size:12px;font-weight:600;cursor:pointer" onmouseover="this.style.color=\'#e2e8f0\'" onmouseout="this.style.color=\'#64748b\'">← Retour</button>');

  ov.innerHTML=h.join('');
  ov.classList.remove('h');
  window._mpGameMode='normal';
  if(typeof mpSetMode==='function') mpSetMode('normal');
}
function mpSetMode(m){window._mpGameMode=m;['normal','nozoom','perfection','chill'].forEach(function(k){var el=document.getElementById('mp-mode-'+(k==='perfection'?'perf':k));if(!el)return;var a=k===m;var col=k==='perfection'?'#7c3aed':k==='chill'?'#3b82f6':'#f97316';var tc=k==='perfection'?'#a78bfa':k==='chill'?'#60a5fa':'#f97316';el.style.background=a?col:'transparent';el.style.color=a?'#fff':tc;el.style.borderColor=col;});}
function mpDoCreate(){var lvl=parseInt(document.getElementById('mp-level').value);var gm=window._mpGameMode||'normal';var nz=gm==='nozoom';var perf=gm==='perfection';var chill=gm==='chill';var nb=parseInt(document.getElementById('mp-rounds').value);if(perf&&nb<10)nb=10;window._mpMode=true;var fn=window.mpCreateRoom||(typeof mpCreateRoom==='function'?mpCreateRoom:null);if(fn){fn({fixedLevel:lvl,noZoomMode:nz,perfectionMode:perf,chillMode:chill,nbRounds:nb}).then(function(code){if(typeof showToast==='function')showToast('Salon\u00a0: '+code);}).catch(function(e){if(typeof showToast==='function')showToast('Erreur\u00a0: '+e.message);window._mpMode=false;});}else{if(typeof showToast==='function')showToast('Module non charg\u00e9');}}
function mpDoJoin(){var code=(document.getElementById('mp-code').value||'').toUpperCase().trim();if(code.length<4){if(typeof showToast==='function')showToast('Code invalide');return;}window._mpMode=true;var fn=window.mpJoinRoom||(typeof mpJoinRoom==='function'?mpJoinRoom:null);if(fn){fn(code,'Joueur').catch(function(e){if(typeof showToast==='function')showToast('Erreur\u00a0: '+e.message);window._mpMode=false;});}else{if(typeof showToast==='function')showToast('Module non charg\u00e9');}}
function selectGameMode(mode) {
  var isPrem = typeof window.isPremiumUser==='function'?window.isPremiumUser():(window.isPremium===true);
  if((mode==='nozoom'||mode==='perfection'||mode==='chill') && !isPrem) {
    if(typeof window.showPremiumOverlay==='function') {
      window.showPremiumOverlay(mode==='nozoom'?'No-Zoom':mode==='chill'?'Chill':'Perfection');
    } else {
      setTimeout(function(){
        if(typeof window.showPremiumOverlay==='function') window.showPremiumOverlay(mode==='nozoom'?'No-Zoom':mode==='chill'?'Chill':'Perfection');
      }, 500);
    }
    return;
  }
  window._menuNZ = mode==='nozoom';
  window._menuPerf = mode==='perfection';
  window._menuChill = mode==='chill';
  // Afficher le sous-menu de difficult&#233;
  showDifficultyMenu(mode);
}

function showDifficultyMenu(mode) {
  var ov = document.getElementById('overlay');
  var modeLabel = mode==='nozoom'?'No-Zoom':mode==='perfection'?'Perfection':mode==='chill'?'Chill':'Normal';
  var modeColor = mode==='perfection'?'#a78bfa':mode==='chill'?'#3b82f6':'#f97316';
  var h = [];
  h.push('<div class="otitle" style="font-size:32px;color:'+modeColor+'">' + modeLabel.toUpperCase() + '</div>');
  h.push('<div style="font-size:13px;color:#cbd5e1;margin-bottom:18px;font-weight:500">Choisissez votre niveau de difficult&#233;</div>');
  h.push('<div style="display:flex;flex-direction:column;gap:8px;width:100%;max-width:420px">');

  // Tout niveaux
  h.push('<button onclick="launchGame(-1)" style="padding:12px 18px;border-radius:10px;border:1.5px solid #f97316;background:rgba(249,115,22,0.08);color:#f97316;font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:space-between">');
  h.push('<span>Tout niveaux</span><span style="font-size:12px;color:#94a3b8;font-weight:500">5 indices par lieu</span>');
  h.push('</button>');

  var lvls=[
    {l:'Expert',    c:'#ef4444', i:0, d:'1 indice'},
    {l:'Difficile', c:'#3b82f6', i:1, d:'2 indices'},
    {l:'Moyen',     c:'#eab308', i:2, d:'3 indices'},
    {l:'Facile',    c:'#22c55e', i:3, d:'4 indices'}
  ];
  lvls.forEach(function(lv){
    h.push('<button data-lvl="'+lv.i+'" onclick="launchGame(parseInt(this.dataset.lvl))" style="padding:12px 18px;border-radius:10px;border:1.5px solid '+lv.c+';background:'+lv.c+'18;color:'+lv.c+';font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:space-between">');
    h.push('<span>'+lv.l+'</span><span style="font-size:12px;color:#94a3b8;font-weight:500">'+lv.d+'</span>');
    h.push('</button>');
  });

  h.push('</div>');
  h.push('<button onclick="showMenu()" style="margin-top:14px;padding:9px 22px;border-radius:9px;border:1px solid #334155;background:transparent;color:#94a3b8;font-size:12px;font-weight:600;cursor:pointer">&#8592; Retour</button>');
  ov.innerHTML = h.join('');
  ov.classList.remove('h');
}

function launchGame(level) {
  fixedLevel = level;
  noZoomMode = window._menuNZ || false;
  perfectionMode = window._menuPerf || false;
  chillMode = window._menuChill || false;
  if(map){ map.remove(); map=null; }
  document.getElementById('overlay').classList.add('h');
  document.getElementById('hsc').textContent='0';
  if(!map){ try{ initMap(); }catch(e){} }
  startGame();
}

function openMultiplayer() {
  var isPrem = typeof window.isPremiumUser==='function'?window.isPremiumUser():(window.isPremium===true);
  if(!isPrem) {
    if(typeof window.showPremiumOverlay==='function') window.showPremiumOverlay('Multijoueur');
    else setTimeout(function(){ if(typeof window.showPremiumOverlay==='function') window.showPremiumOverlay('Multijoueur'); },500);
    return;
  }
  if(typeof mpShowJoinMenu==='function') mpShowJoinMenu();
}

// ── Exports window pour onclick inline ──
window.mpShowJoinMenu = mpShowJoinMenu;
window.mpLaunchGame = mpLaunchGame;