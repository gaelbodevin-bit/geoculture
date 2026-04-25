var lastNoZoomMode=false;
var BASE_PTS=[0,500,1000,1500,2000,3000];
var MAX_DIST=2000;
var CIRC=2*Math.PI*42;
var T=30;
var map,playerMarker,targetMarker,lineLayer;
var roundList=[],curR=0,curL=0,total=0,timeLeft=T,tiv=null;
var playerPos=null,gameActive=false,confirming=false,roundScores=[];
var FLASH_COLORS=['#ef4444','#f97316','#eab308','#22c55e','#3b82f6'];
var FLASH_LABELS=['Expert','Difficile','Moyen','Facile','Tres facile'];
var toastT;
var inExploreMode=false;
var noZoomMode=false;

function fmtDist(meters){
  if(meters===null||meters===undefined)return '-';
  if(meters<1000)return meters.toLocaleString('fr-FR')+' m';
  return (meters/1000).toLocaleString('fr-FR',{maximumFractionDigits:1})+' km';
}
function haversine(la1,lo1,la2,lo2){
  var R=6371,r=Math.PI/180;
  var a=Math.sin((la2-la1)*r/2)*Math.sin((la2-la1)*r/2)+Math.cos(la1*r)*Math.cos(la2*r)*Math.sin((lo2-lo1)*r/2)*Math.sin((lo2-lo1)*r/2);
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}
function initMap(){
  if(map){map.remove();map=null;}
  if(typeof L==='undefined'){console.error('Leaflet not loaded');return;}
  var opts={
    center:[20,10],
    zoom:2,
    minZoom:1,
    maxZoom:18,
    zoomControl:!noZoomMode,
    attributionControl:true,
    worldCopyJump:false
  };
  if(noZoomMode){
    opts.scrollWheelZoom=false;
    opts.doubleClickZoom=false;
    opts.touchZoom=false;
    opts.boxZoom=false;
    opts.keyboard=false;
    opts.dragging=false;
  }
  map=L.map('map',opts);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
    maxZoom:19,attribution:'Esri'
  }).addTo(map);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',{
    maxZoom:19,opacity:1
  }).addTo(map);
  map.on('click',onMapClick);
  // Calculer le zoom minimum pour éviter les doublons
  // A un zoom z, la largeur d'une tuile monde = 256 * 2^z pixels
  // Il faut que 256 * 2^z >= largeur du div
  var mapDiv = document.getElementById('map');
  var divW = mapDiv ? mapDiv.offsetWidth : window.innerWidth;
  var minZ = Math.ceil(Math.log2(divW / 256));
  minZ = Math.max(2, minZ);
  map.setMinZoom(minZ);
  map.setZoom(minZ);
  map.setMaxBounds([[-85,-180],[85,180]]);
  map.options.maxBoundsViscosity=1.0;
}
function makePin(color){
  return L.divIcon({className:'',html:'<div style="width:18px;height:18px;background:'+color+';border:2.5px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 10px rgba(0,0,0,.5)"></div>',iconSize:[18,18],iconAnchor:[9,18]});
}
function onMapClick(e){
  if(!gameActive||confirming)return;
  playerPos={lat:e.latlng.lat,lng:e.latlng.lng};
  if(playerMarker)playerMarker.remove();
  playerMarker=L.marker([playerPos.lat,playerPos.lng],{icon:makePin('#f97316')}).addTo(map);
  document.getElementById('confb').disabled=false;
  document.getElementById('placed-info').textContent='\u1f4cd '+playerPos.lat.toFixed(3)+', '+playerPos.lng.toFixed(3);
}
function shuffle(a){
  var b=a.slice();
  for(var i=b.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=b[i];b[i]=b[j];b[j]=tmp;}
  return b;
}
function startGame(){
  total=0;roundScores=[];
  roundList=shuffle(ROUNDS).slice(0,5);
  curR=0;
  document.getElementById('hsc').textContent='0';
  document.getElementById('overlay').classList.add('h');
  // Afficher/masquer le badge no-zoom
  var nzBadge=document.getElementById('nz-badge');
  if(nzBadge) nzBadge.style.display=noZoomMode?'inline-block':'none';
  if(!map){try{initMap();}catch(e){console.warn(e);}}
  else if(noZoomMode!==lastNoZoomMode){lastNoZoomMode=noZoomMode;map.remove();map=null;try{initMap();}catch(e){}}
  else if(noZoomMode){
    // R\u00e9initialiser la carte avec les options no-zoom
    map.remove(); map=null; initMap();
  }
  startRound(0);
}

function prefetchTiles(lat, lng){
  // Pr\u00e9charge les tuiles ESRI satellite autour du lieu cible
  // aux niveaux de zoom utiles (4 \u00e0 14)
  var ESRI_SAT = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
  var ESRI_LBL = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';
  
  function deg2tile(lat, lng, zoom){
    var x = Math.floor((lng + 180) / 360 * Math.pow(2, zoom));
    var y = Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
    return {x:x, y:y};
  }
  
  function loadTile(url){
    var img = new Image();
    img.src = url;
  }
  
  // Zooms \u00e0 pr\u00e9charger : vue continent (4-5), vue pays (6-8), vue ville (10-13)
  var zooms = [4, 5, 6, 7, 8, 10, 12, 13];
  
  setTimeout(function(){
    zooms.forEach(function(z){
      var t = deg2tile(lat, lng, z);
      // Pr\u00e9charger la tuile centrale + tuiles adjacentes (3x3)
      for(var dy = -1; dy <= 1; dy++){
        for(var dx = -1; dx <= 1; dx++){
          var tx = t.x + dx;
          var ty = t.y + dy;
          var sat = ESRI_SAT.replace('{z}',z).replace('{y}',ty).replace('{x}',tx);
          var lbl = ESRI_LBL.replace('{z}',z).replace('{y}',ty).replace('{x}',tx);
          loadTile(sat);
          loadTile(lbl);
        }
      }
    });
  }, 500); // d\u00e9lai 500ms pour ne pas bloquer le rendu initial
}
function startRound(idx){
  curR=idx;curL=0;playerPos=null;confirming=false;gameActive=true;
  if(playerMarker){playerMarker.remove();playerMarker=null;}
  if(targetMarker){targetMarker.remove();targetMarker=null;}
  if(lineLayer){lineLayer.remove();lineLayer=null;}
  if(!noZoomMode){if(map) map.setView([20,10],map.getMinZoom()||2);}
  document.getElementById('confb').disabled=true;
  document.getElementById('explore-tip').style.display='none';
  document.getElementById('back-btn').style.display='none';
  document.getElementById('placed-info').textContent='Cliquez sur la carte pour placer votre r\u00e9ponse';
  document.getElementById('hrnd').textContent=(idx+1)+'/5';
  updateDots();showHint();startTimer();
  // Pr\u00e9charger les tuiles du lieu cible en arri\u00e8re-plan
  var r=roundList[curR];
  prefetchTiles(r.lat, r.lng);
}
function showHint(){
  var h=roundList[curR].hints[curL];
  var b=document.getElementById('badge');
  b.textContent=h.l;b.style.background=h.bc;b.style.color=h.tc;
  document.getElementById('qtxt').textContent=h.t;
  var level=5-curL;
  var mx=Math.round(BASE_PTS[level]*1.5);
  var timeToMax=Math.round(T*0.67);
  document.getElementById('lvl-max').textContent=mx.toLocaleString('fr-FR')+' pts';
  document.getElementById('lvl-mult').textContent='Score max si reponse < '+timeToMax+'s et < 1 km';
  var remaining=total;
  for(var i=curR;i<roundList.length;i++){remaining+=i===curR?mx:Math.round(BASE_PTS[5]*1.5);}
  document.getElementById('hmax').textContent=remaining.toLocaleString('fr-FR');
}
function updateDots(){
  for(var i=0;i<5;i++){
    var d=document.getElementById('d'+i);
    d.className='dot'+(i===curL?' on':i<curL?' done':'');
  }
}
function startTimer(){
  clearInterval(tiv);timeLeft=T;renderTimer();
  tiv=setInterval(function(){
    timeLeft=Math.max(0,timeLeft-.1);renderTimer();
    if(timeLeft<=0){clearInterval(tiv);nextLevel();}
  },100);
}
function renderTimer(){
  var pct=timeLeft/T;
  var offset=CIRC*(1-pct);
  var arc=document.getElementById('arc');
  arc.style.strokeDashoffset=offset;
  var col=pct>.6?'#22c55e':pct>.3?'#fbbf24':'#ef4444';
  arc.style.stroke=col;
  var n=document.getElementById('tnum');
  n.textContent=Math.ceil(timeLeft);
  n.style.color=col;
}
function triggerFlash(level){
  var el=document.getElementById('level-flash');
  var badge=document.getElementById('flash-badge');
  var sub=document.getElementById('flash-sub');
  var col=FLASH_COLORS[level]||'#ef4444';
  el.style.background=col+'22';
  badge.textContent=FLASH_LABELS[level]||'';
  badge.style.color=col;
  sub.textContent='Indice suivant !';
  el.classList.remove('fire');void el.offsetWidth;el.classList.add('fire');
  var sb=document.getElementById('sidebar');
  sb.style.setProperty('--flash-col',col);
  sb.classList.remove('flash-border');void sb.offsetWidth;sb.classList.add('flash-border');
}
function nextLevel(){
  if(!gameActive)return;
  if(curL<4){curL++;triggerFlash(curL);updateDots();showHint();startTimer();}
  else{clearInterval(tiv);gameActive=false;confirming=true;resolveRound();}
}
function confirmGuess(){
  if(!gameActive||confirming)return;
  clearInterval(tiv);gameActive=false;confirming=true;resolveRound();
}
function resolveRound(){
  var r=roundList[curR];
  var level=5-curL;
  var pts=0,dist=null;
  if(playerPos){
    dist=haversine(playerPos.lat,playerPos.lng,r.lat,r.lng);
    var precScore=BASE_PTS[level]*Math.max(0,1-dist/MAX_DIST);
    var timeBonus=precScore*(timeLeft/T)*0.5;
    pts=Math.round(precScore+timeBonus);
  }
  total+=pts;
  roundScores.push({name:r.name,pts:pts,distM:dist!=null?Math.round(dist*1000):null,maxPts:Math.round(BASE_PTS[level]*1.5),level:level});
  document.getElementById('hsc').textContent=total.toLocaleString('fr-FR');
  var ps='font-family:system-ui,sans-serif;font-size:13px;line-height:1.5;min-width:140px';
  targetMarker=L.marker([r.lat,r.lng],{icon:makePin('#22c55e')})
    .bindPopup('<div style="'+ps+'"><b style="color:#15803d">\u2713 '+r.name+'</b>'+(dist?'<br><span style="color:#666">Distance : '+fmtDist(Math.round(dist*1000))+'</span>':'<br><span style="color:#666">Pas de tentative</span>')+'</div>',{maxWidth:220}).addTo(map);
  if(playerPos){
    if(playerMarker)playerMarker.bindPopup('<div style="'+ps+'"><b style="color:#ea580c">\u1f4cd Votre r\u00e9ponse</b><br><span style="color:#666">Distance : '+fmtDist(Math.round(dist*1000))+'</span><br><span style="color:#f97316;font-weight:700">+'+pts+' pts</span></div>',{maxWidth:200});
    lineLayer=L.polyline([[playerPos.lat,playerPos.lng],[r.lat,r.lng]],{color:'#f97316',weight:2.5,dashArray:'8 5',opacity:.8}).addTo(map);
    if(!noZoomMode) map.fitBounds(L.latLngBounds([[playerPos.lat,playerPos.lng],[r.lat,r.lng]]),{padding:[60,60]});
  }else{if(!noZoomMode) map.setView([r.lat,r.lng],12);targetMarker.openPopup();}
  document.getElementById('placed-info').textContent=dist!=null?'\u1f3af '+fmtDist(Math.round(dist*1000))+' \u2014 +'+pts.toLocaleString('fr-FR')+' pts':'\u274c Rat\u00e9 \u2014 '+r.name;
  showToast(dist!=null?r.name+' \u00b7 '+fmtDist(Math.round(dist*1000))+' \u00b7 +'+pts+' pts':"Rat\u00e9 ! C'\u00e9tait : "+r.name);
  setTimeout(function(){showInter(pts,dist,r.name);},3000);
}
function showInter(pts,dist,name){
  var lastScore=roundScores[roundScores.length-1];
  var mx=lastScore?lastScore.maxPts:4500;
  var pctRound=mx>0?Math.round(pts/mx*100):0;
  var barColor=pctRound>=80?'#22c55e':pctRound>=50?'#fbbf24':'#f97316';
  var ov=document.getElementById('overlay');
  var placeDesc=roundList[curR].desc||'';
  var imgId='wimg'+Date.now();
  var isLast=(curR+1>=roundList.length);
  var h=[];
  h.push('<div id="'+imgId+'" style="width:100%;max-width:380px;height:150px;background:#111827;border-radius:10px;margin-bottom:-4px;overflow:hidden;display:flex;align-items:center;justify-content:center"><span style="color:#374151;font-size:11px">...</span></div>');
  h.push('<div class="otitle" style="font-size:38px">+'+pts.toLocaleString('fr-FR')+'</div>');
  h.push('<div class="osub" style="color:#94a3b8;font-size:12px;line-height:1.55;margin-top:-4px;max-width:360px;text-align:center">'+placeDesc+'</div>');
  h.push('<div style="display:flex;align-items:center;gap:10px;width:100%;max-width:320px"><div style="flex:1;height:8px;background:#1e2d45;border-radius:4px;overflow:hidden"><div style="width:'+pctRound+'%;height:100%;background:'+barColor+';border-radius:4px;transition:width .6s ease"></div></div><span style="font-size:13px;font-weight:600;color:'+barColor+';white-space:nowrap">'+pts.toLocaleString('fr-FR')+' / '+mx.toLocaleString('fr-FR')+' pts</span></div>');
  h.push('<div class="osub" style="color:#f1f5f9;font-size:15px;font-weight:600;margin-top:-4px">'+name+'</div>');
  h.push('<div class="osub" style="margin-top:-6px">'+(dist!=null?fmtDist(Math.round(dist*1000))+' de la cible':'Aucun point plac\u00e9')+'</div>');
  h.push('<div style="color:#6b7280;font-size:13px">Total : <b style="color:#f97316">'+total.toLocaleString('fr-FR')+' pts</b></div>');
  h.push('<div style="display:flex;gap:10px;margin-top:6px;flex-wrap:wrap;justify-content:center">');
  h.push('<button class="btn bg" onclick="showMenu()" style="width:auto;padding:12px 22px;font-size:14px">&#8962; Menu</button>');
  h.push('<button onclick="enterExploreMode()" style="font-size:13px;font-weight:600;padding:10px 20px;border-radius:9px;border:1px solid #2d3f5e;cursor:pointer;background:rgba(30,45,69,.9);color:#e2e8f0">\u1f50d Explorer</button>');
  h.push('<button class="btn ba" onclick="'+(isLast?'showEnd()':'nextRound()')+'" style="width:auto;padding:12px 32px;font-size:14px">'+(isLast?'Voir le bilan &#8594;':'Manche suivante &#8594;')+'</button>');
  h.push('</div>');
  ov.innerHTML=h.join('');
  ov.classList.remove('h');
  (function(id,q){
    function tryWiki(lang){
      fetch('https://'+lang+'.wikipedia.org/api/rest_v1/page/summary/'+encodeURIComponent(q))
        .then(function(r){return r.json();})
        .then(function(d){
          var el=document.getElementById(id);
          if(!el)return;
          if(d.thumbnail&&d.thumbnail.source){el.innerHTML='<img src="'+d.thumbnail.source+'" style="width:100%;height:100%;object-fit:cover;border-radius:10px" alt="">';}
          else if(lang==='fr'){tryWiki('en');}
          else{el.style.display='none';}
        }).catch(function(){var el=document.getElementById(id);if(el)el.style.display='none';});
    }
    tryWiki('fr');
  })(imgId,roundList[curR].name.replace(/\s*\u2014.*/,'').trim());
}
function showEnd(){
  var totalMax=roundScores.reduce(function(a,s){return a+(s.maxPts||0);},0);
  var pct=totalMax>0?Math.round(total/totalMax*100):0;
  var rows=roundScores.map(function(s){
    var distTxt=s.distM!=null?fmtDist(s.distM):'rat\u00e9';
    return '<div class="orow"><span style="font-size:11px;max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1">'+s.name+'</span><span style="color:#6b7280;font-size:11px;margin:0 6px;flex-shrink:0">'+distTxt+'</span><span style="font-size:11px;color:#4b5563;flex-shrink:0">'+s.pts.toLocaleString('fr-FR')+'/'+s.maxPts.toLocaleString('fr-FR')+'</span></div>';
  }).join('');
  var rank=pct>=90?'G\u00e9ographe l\u00e9gendaire':pct>=70?'Expert international':pct>=50?'Bon explorateur':pct>=30?'En progression':'D\u00e9butant courageux';
  var ov=document.getElementById('overlay');
  var h=[];
  h.push('<div class="otitle" style="font-size:38px">Termin\u00e9 !</div>');
  h.push('<div class="osub" style="color:#f97316;font-weight:700;font-size:15px">'+rank+' \u2014 '+pct+'%</div>');
  h.push('<div class="ocard"><div style="display:flex;justify-content:space-between;font-size:10px;color:#4b5563;text-transform:uppercase;letter-spacing:.5px;padding-bottom:6px;border-bottom:1px solid #1e2d45;margin-bottom:4px"><span>Lieu</span><span>Distance</span><span>Score / Max</span></div>'+rows+'<div class="otot"><span>Total</span><span style="font-size:12px;color:#6b7280;margin-right:auto;padding-left:12px">'+total.toLocaleString('fr-FR')+' / '+totalMax.toLocaleString('fr-FR')+' pts</span><span class="p">'+pct+'%</span></div></div>');
  h.push('<div style="display:flex;gap:10px;margin-top:6px;flex-wrap:wrap;justify-content:center">');
  h.push('<button class="btn bg" onclick="showMenu()" style="width:auto;padding:12px 22px;font-size:14px">&#8962; Menu</button>');
  h.push('<button onclick="enterExploreMode()" style="font-size:13px;font-weight:600;padding:10px 20px;border-radius:9px;border:1px solid #2d3f5e;cursor:pointer;background:rgba(30,45,69,.9);color:#e2e8f0">\u1f50d Explorer</button>');
  h.push('<button class="btn ba" onclick="startGame()" style="width:auto;padding:12px 32px;font-size:14px">&#8634; Rejouer</button>');
  h.push('</div>');
  ov.innerHTML=h.join('');
  ov.classList.remove('h');
  // Sauvegarder la partie si connect\u00e9
  if(typeof saveGame === 'function'){
    saveGame(roundScores, total, pct, noZoomMode ? 'nozoom' : 'normal');
  }
}
function showMenu(){
  clearInterval(tiv);gameActive=false;
  if(!map){try{initMap();}catch(e){console.error(e);}}
  var ov=document.getElementById('overlay');
  var user=typeof getCurrentUser==='function'?getCurrentUser():null;
  var authHtml='';
  if(user){
    authHtml='<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;justify-content:center">'
      +'<img src="'+(user.photoURL||'')+'" style="width:28px;height:28px;border-radius:50%;object-fit:cover;border:2px solid #f97316">'
      +'<span style="color:#e2e8f0;font-size:13px;font-weight:600">'+(user.displayName||user.email)+'</span>'
      +'<button onclick="fbSignOut()" style="font-size:10px;padding:3px 8px;border-radius:5px;border:1px solid #2d3f5e;background:transparent;color:#94a3b8;cursor:pointer">D\u00e9connexion</button>'
      +'</div>';
  } else {
    authHtml='<button onclick="fbSignIn()" style="font-size:13px;font-weight:600;padding:8px 20px;border-radius:8px;border:1px solid #4285f4;background:transparent;color:#4285f4;cursor:pointer;margin-bottom:4px">Se connecter avec Google</button>';
  }
  var h=[];
  h.push('<div class="otitle" style="font-size:40px">GEO<br>CULTURE</div>');
  h.push(authHtml);
  h.push('<div class="rgrid"><div class="ri"><b>30s par indice</b>Le niveau glisse automatiquement</div><div class="ri"><b>Pr\u00e9cision</b>Plus tu es proche, plus tu gagnes</div><div class="ri"><b>Rapidit\u00e9 x1.5</b>Bonus si tu r\u00e9ponds vite</div><div class="ri"><b>Expert x3</b>Multiplicateur maximum</div></div>');
  h.push('<div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap;justify-content:center">');
  h.push('<button class="btn ba" onclick="noZoomMode=false;startGame()" style="width:auto;font-size:15px;padding:13px 28px">Mode Normal</button>');
  h.push('<button class="btn bg" onclick="noZoomMode=true;startGame()" style="width:auto;font-size:15px;padding:13px 28px;border-color:#f97316;color:#f97316">Mode No-Zoom</button>');
  h.push('</div>');
  if(user){
    h.push('<button onclick="showHistory()" style="font-size:12px;color:#6b7280;background:transparent;border:none;cursor:pointer;margin-top:4px;text-decoration:underline">Voir mon historique</button>');
  }
  ov.innerHTML=h.join('');
  ov.classList.remove('h');
}
function nextRound(){document.getElementById('overlay').classList.add('h');startRound(curR+1);}
function showToast(msg){
  var t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('s');
  clearTimeout(toastT);toastT=setTimeout(function(){t.classList.remove('s');},3500);
}
function enterExploreMode(){
  inExploreMode=true;
  document.getElementById('explore-tip').style.display='block';
  document.getElementById('back-btn').style.display='block';
  document.getElementById('overlay').classList.add('h');
  if(targetMarker)targetMarker.openPopup();
  var r=roundList[curR];
  if(!noZoomMode){
    if(playerPos&&playerMarker){map.fitBounds(L.latLngBounds([[playerPos.lat,playerPos.lng],[r.lat,r.lng]]),{padding:[80,80]});}
    else{map.setView([r.lat,r.lng],12);}
  }
}
function exitExploreMode(){
  inExploreMode=false;
  document.getElementById('explore-tip').style.display='none';
  document.getElementById('back-btn').style.display='none';
  var s=roundScores[roundScores.length-1];
  showInter(s.pts,s.distM!=null?s.distM/1000:null,roundList[curR].name);
}
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('confb').onclick=confirmGuess;
  document.getElementById('skipb').onclick=function(){if(!gameActive)return;clearInterval(tiv);nextLevel();};
  document.getElementById('startb').onclick=function(){try{initMap();}catch(e){console.error(e);}showMenu();};
  var nozb=document.getElementById('nozb');
  if(nozb) nozb.onclick=function(){try{initMap();}catch(e){console.error(e);}noZoomMode=true;startGame();};
});