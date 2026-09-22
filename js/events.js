// events.js — Mode Événements historiques (Premium)
// Même structure que data.js + champ radius (mètres) : zone consideree correcte a 100%.
// Gradient : EXPERT (contexte+date, aucun nom/lieu) -> DIFFICILE (region+epoque) -> MOYEN (evenement+zone) -> FACILE (nomme+localite)
const EVENTS = [
  {name:"Bataille de Sekigahara — Gifu, Japon", lat:35.3719, lng:136.46, radius:2500,
   desc:"Le 21 octobre 1600, la victoire de Tokugawa Ieyasu sur la coalition de l'Ouest dans cette plaine brumeuse mit fin à un siècle de guerre civile et fonda un shogunat qui régna 265 ans.",
   photo:"events/sekigahara.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un matin brumeux de l'an 1600, dans une plaine détrempée, des milliers de bannières se font face ; à la tombée du jour, un seul homme règne, et s'ouvre une ère de paix sans fin."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1600, deux coalitions de seigneurs féodaux s'affrontent dans une plaine ; une trahison décide de l'issue et ouvre 265 ans de dynastie."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La bataille fondatrice du shogunat Tokugawa, au Japon."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Sekigahara, à Gifu, au Japon."}
  ]},
  {name:"Bataille de Waterloo — Brabant wallon, Belgique", lat:50.68, lng:4.412, radius:3000,
   desc:"Le 18 juin 1815, la défaite de Napoléon face à Wellington et Blücher mit fin aux Cent-Jours et à l'Empire, redessinant l'Europe pour un siècle.",
   photo:"events/waterloo.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un dimanche pluvieux de juin 1815, un empire s'effondre sur un plateau boueux face à une coalition."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En juin 1815, un empereur revenu d'exil est écrasé par une coalition anglo-prussienne sur un plateau agricole, au sud d'une grande capitale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La dernière bataille de Napoléon, en Belgique."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Waterloo, à Waterloo, en Belgique."}
  ]},
  {name:"Bataille de Gettysburg — Pennsylvanie, USA", lat:39.811, lng:-77.23, radius:4000,
   desc:"Du 1er au 3 juillet 1863, la plus meurtrière bataille de la guerre de Sécession (51 000 pertes) brisa l'invasion nordiste de Lee et marqua le tournant du conflit.",
   photo:"events/gettysburg.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Par une chaleur d'été de 1863, trois jours durant, champs et vergers se couvrent de morts ; sur ces collines, une nation déchirée joue son avenir."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1863, une bataille de trois jours stoppe une invasion sudiste pendant une guerre civile ; le président y prononcera un célèbre discours."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le tournant de la guerre de Sécession, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Gettysburg, en Pennsylvanie, aux États-Unis."}
  ]},
  {name:"Bataille de Cannes — Pouilles, Italie", lat:41.306, lng:16.132, radius:4000,
   desc:"En 216 av. J.-C., Hannibal encercla et anéantit une armée romaine deux fois supérieure par une manœuvre d'enveloppement restée un modèle d'art militaire.",
   photo:"events/cannae.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 216 av. J.-C., sous un soleil écrasant, une armée immense et sûre d'elle se laisse enfermer dans un anneau de fer, et s'évanouit en un jour."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 216 av. J.-C., un général carthaginois encercle et anéantit une armée deux fois supérieure — un cas d'école de la tactique antique."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire d'Hannibal sur Rome, en Italie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Cannes, dans les Pouilles, en Italie."}
  ]},
  {name:"Bataille de Hastings — Sussex de l'Est, Angleterre", lat:50.911, lng:0.487, radius:2000,
   desc:"Le 14 octobre 1066, la victoire de Guillaume le Conquérant sur Harold II ouvrit la conquête normande de l'Angleterre et transforma sa langue et sa noblesse.",
   photo:"events/hastings.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1066, au terme d'une longue journée d'automne, une couronne roule dans la poussière d'une colline ; une île entière bascule vers un autre destin."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1066, un duc venu du continent conquiert une île ; le roi adverse meurt d'une flèche, la scène brodée sur une célèbre tapisserie."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La conquête normande de l'Angleterre."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Hastings, dans le Sussex, en Angleterre."}
  ]},
  {name:"Chute du mur de Berlin — Berlin, Allemagne", lat:52.5163, lng:13.3777, radius:1500,
   desc:"Le 9 novembre 1989, l'ouverture soudaine des points de passage précipita la fin de la division de la ville et, deux ans plus tard, celle de la guerre froide.",
   photo:"events/mur_berlin.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un soir de novembre 1989, l'incroyable devient réel : on danse et l'on pleure au sommet d'un mur honni, marteau à la main, sous les projecteurs du monde entier."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En novembre 1989, une frontière urbaine dressée depuis 1961 s'effondre en une soirée, la foule franchissant les postes de passage."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La chute du Mur, en Allemagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La chute du mur de Berlin, à Berlin, en Allemagne."}
  ]},
  {name:"Débarquement d'Omaha Beach — Calvados, France", lat:49.37, lng:-0.87, radius:3000,
   desc:"Le 6 juin 1944, le secteur le plus meurtrier du Débarquement allié coûta près de 3 000 pertes américaines en quelques heures sous le feu des falaises.",
   photo:"events/omaha_beach.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"À l'aube du 6 juin 1944, sous une grêle d'acier, des milliers d'hommes surgis d'une mer grise se ruent vers un sable où la mort les fauche par vagues."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Le 6 juin 1944, l'assaut amphibie le plus meurtrier des cinq plages, sous le feu de bunkers perchés sur des falaises."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le débarquement allié le plus sanglant, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Omaha Beach, dans le Calvados (Normandie), France."}
  ]},
  {name:"Assassinat de Sarajevo — Bosnie-Herzégovine", lat:43.858, lng:18.429, radius:400,
   desc:"Le 28 juin 1914, l'archiduc François-Ferdinand fut abattu par Gavrilo Princip près du pont Latin, déclenchant l'enchaînement qui mena à la Première Guerre mondiale.",
   photo:"events/sarajevo_1914.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un jour d'été 1914, dans une rue d'une ville des Balkans, deux détonations font vaciller un vieil ordre ; en quelques semaines, un continent s'embrase."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1914, un étudiant nationaliste abat un couple princier héritier d'un empire — l'étincelle d'un conflit mondial."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'assassinat de l'archiduc François-Ferdinand, en Bosnie-Herzégovine."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'attentat de Sarajevo, en Bosnie-Herzégovine."}
  ]},
  {name:"Bataille de Stalingrad — Volgograd, Russie", lat:48.708, lng:44.513, radius:5000,
   desc:"De 1942 à 1943, la bataille la plus meurtrière de l'histoire (près de 2 millions de victimes) marqua le tournant du front de l'Est.",
   photo:"events/stalingrad.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Durant l'hiver 1942, on se bat pour chaque cave et chaque escalier d'une ville réduite en gravats ; le gel, la faim et la mitraille y engloutissent des armées."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1942-1943, un siège urbain acharné le long d'un grand fleuve s'achève par l'encerclement d'une armée entière — tournant de la guerre à l'Est."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le tournant du front de l'Est, en Russie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Stalingrad (Volgograd), en Russie."}
  ]},
  {name:"Signature de la Grande Charte — Surrey, Angleterre", lat:51.444, lng:-0.567, radius:1500,
   desc:"En 1215, à Runnymede, le roi Jean sans Terre scella la Magna Carta imposée par ses barons, jalon fondateur des limites au pouvoir royal.",
   photo:"events/magna_carta.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1215, sous un ciel d'orage, un roi acculé, cerné par ses grands vassaux, appose à contrecœur son sceau au bas d'un texte qui, un jour, bridera tous les trônes."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1215, des barons révoltés arrachent à un roi impopulaire un document fondateur, dans une prairie au bord d'un fleuve."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La signature de la Magna Carta, en Angleterre."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Grande Charte, à Runnymede (Surrey), en Angleterre."}
  ]},
  {name:"Prise de la Bastille — Paris, France", lat:48.8531, lng:2.369, radius:500,
   desc:"Le 14 juillet 1789, la prise de la forteresse-prison, symbole de l'arbitraire royal, marqua le basculement de la Révolution française.",
   photo:"events/bastille.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Le 14 juillet 1789, une foule en fièvre déferle sur de vieilles tours ; à peine y trouve-t-on quelques captifs, mais un monde entier vacille."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Le 14 juillet 1789, une foule prend d'assaut une forteresse-prison, symbole d'arbitraire, dans l'est d'une grande capitale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La prise de la Bastille, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise de la Bastille, à Paris, en France."}
  ]},
  {name:"Bataille de Marathon — Attique, Grèce", lat:38.116, lng:23.978, radius:2500,
   desc:"En 490 av. J.-C., la victoire athénienne sur les Perses de Darius inspira la légende du messager courant annoncer le triomphe, à l'origine de la course moderne.",
   photo:"events/marathon.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 490 av. J.-C., sur une plaine ouverte face à la mer, une poignée d'hommes libres met en fuite, contre toute attente, une puissance immense venue d'ailleurs."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 490 av. J.-C., des citoyens-soldats repoussent un empire venu de l'Est sur une plaine côtière ; un coureur porte la nouvelle."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire des cités grecques contre les Perses, en Grèce."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Marathon, en Attique, en Grèce."}
  ]},
  {name:"Reddition d'Appomattox — Virginie, USA", lat:37.377, lng:-78.796, radius:1500,
   desc:"Le 9 avril 1865, la reddition de Lee à Grant dans un salon de village mit fin de fait à la guerre de Sécession.",
   photo:"events/appomattox.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un après-midi d'avril 1865, dans une pièce feutrée d'une maison isolée, deux hommes las se serrent la main ; quatre années de sang entre frères s'éteignent enfin."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En avril 1865, un général sudiste capitule dans le salon d'une maison de village, mettant fin à une guerre civile."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La reddition confédérée, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La reddition d'Appomattox, en Virginie, aux États-Unis."}
  ]},
  {name:"Bataille de Trafalgar — Cadix, Espagne", lat:36.267, lng:-6.26, radius:6000,
   desc:"Le 21 octobre 1805, Nelson y détruisit les flottes franco-espagnoles au prix de sa vie, assurant la suprématie navale britannique pour un siècle.",
   photo:"events/trafalgar.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1805, dans la fumée et le fracas d'un combat naval, la victoire est totale ; mais sur le pont de son vaisseau, le vainqueur s'éteint à l'instant même de sa gloire."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1805, une flotte est écrasée au large d'un cap atlantique ; l'amiral vainqueur, borgne et manchot, meurt au moment du triomphe."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire navale de Nelson, au large de l'Espagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Trafalgar, au large de Cadix, en Espagne."}
  ]},
  {name:"Chute de Constantinople — Istanbul, Turquie", lat:41.006, lng:28.976, radius:3000,
   desc:"En 1453, la prise de la capitale byzantine par Mehmed II mit fin à l'Empire romain d'Orient et fit basculer l'Europe dans une nouvelle ère.",
   photo:"events/constantinople_1453.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1453, après des semaines de siège, des remparts que l'on croyait éternels cèdent enfin ; le dernier héritier d'un très vieux monde disparaît dans la mêlée."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1453, des canons géants percent des murailles millénaires et effacent un empire antique, sur un détroit entre deux continents."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La prise ottomane de Constantinople, en Turquie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La chute de Constantinople (Istanbul), en Turquie."}
  ]},
  {name:"Débarquement de Normandie — Utah Beach — Manche, France", lat:49.415, lng:-1.176, radius:3000,
   desc:"Le 6 juin 1944, la plage la plus à l'ouest du Débarquement fut prise avec des pertes limitées, ouvrant la route de Cherbourg.",
   photo:"events/utah_beach.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Au petit jour du 6 juin 1944, une plage un peu plus clémente que les autres accueille les premières vagues d'assaut ; le sort, pour une fois, épargne les hommes."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Le 6 juin 1944, la plus occidentale des cinq plages d'un grand débarquement ; un courant fit dériver les péniches vers un secteur moins défendu."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Un débarquement allié de 1944, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Utah Beach, dans la Manche (Normandie), France."}
  ]},
  {name:"Bombardement d'Hiroshima — Japon", lat:34.3955, lng:132.4536, radius:2000,
   desc:"Le 6 août 1945, la première bombe atomique employée en guerre rasa la ville et précipita la capitulation japonaise.",
   photo:"events/hiroshima_1945.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un matin d'août 1945, un unique éclair plus vif que le soleil efface une ville en une seconde ; l'humanité vient d'entrer dans une ère de terreur."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Le 6 août 1945, la première arme nucléaire employée en guerre frappe une ville portuaire ; un dôme éventré en garde la mémoire."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La première bombe atomique, au Japon."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le bombardement d'Hiroshima, au Japon."}
  ]},
  {name:"Bataille des Thermopyles — Phthiotide, Grèce", lat:38.796, lng:22.536, radius:2000,
   desc:"En 480 av. J.-C., 300 Spartiates et leurs alliés retardèrent l'armée perse de Xerxès dans un défilé côtier, sacrifice devenu légende.",
   photo:"events/thermopyles.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Vers 480 av. J.-C., dans l'ombre d'un étroit passage entre les monts et la mer, une poignée d'hommes tient tête à une marée humaine — jusqu'à ce que la traîtrise en vienne à bout."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Vers 480 av. J.-C., une poignée de guerriers défend un défilé côtier contre une armée immense, avant d'être trahis par un sentier détourné."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La résistance des 300 Spartiates, en Grèce."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Thermopyles, en Phthiotide, en Grèce."}
  ]},
  {name:"Signature de la Déclaration d'indépendance — Philadelphie, USA", lat:39.9489, lng:-75.15, radius:500,
   desc:"Le 4 juillet 1776, treize colonies proclamèrent leur indépendance dans l'Independence Hall, acte fondateur des États-Unis.",
   photo:"events/independance_us.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un été de 1776, dans la moiteur d'une salle close, des hommes graves apposent leur nom au bas d'un texte qui fait naître une nation et défie un empire."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1776, treize colonies proclament leur rupture avec leur couronne, un 4 juillet, dans une salle à l'horloge d'une grande ville portuaire."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La signature de la Déclaration d'indépendance, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Déclaration d'indépendance, à Philadelphie, aux États-Unis."}
  ]},
  {name:"Bataille d'Azincourt — Pas-de-Calais, France", lat:50.464, lng:2.14, radius:2000,
   desc:"En 1415, les archers anglais d'Henri V écrasèrent une chevalerie française embourbée, tournant de la guerre de Cent Ans.",
   photo:"events/azincourt.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1415, sous une pluie battante, l'orgueil d'une noblesse en armure s'enlise dans la fange et s'effondre sous un ciel noirci de traits."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1415, une lourde chevalerie s'embourbe et se fait faucher par des archers à l'arc long, durant une longue guerre dynastique."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire anglaise d'Henri V, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Azincourt, dans le Pas-de-Calais, en France."}
  ]},
  {name:"Éruption de Pompéi — Campanie, Italie", lat:40.75, lng:14.486, radius:3000,
   desc:"En 79 apr. J.-C., l'éruption du Vésuve ensevelit Pompéi sous les cendres, figeant la vie romaine pour l'éternité.",
   photo:"events/pompei_79.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En l'an 79, un jour d'été, une montagne s'ouvre et vomit le feu ; une cité entière disparaît sous une pluie de cendres, figée à jamais dans l'instant de sa mort."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En l'an 79, une éruption volcanique pétrifie une cité entière sous les cendres, redécouverte intacte 17 siècles plus tard."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'ensevelissement de Pompéi par le Vésuve, en Italie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'éruption de Pompéi, en Campanie, en Italie."}
  ]},
  {name:"Bataille de Bannockburn — Stirling, Écosse", lat:56.091, lng:-3.927, radius:2000,
   desc:"En 1314, Robert Bruce y vainquit l'armée anglaise d'Édouard II, assurant l'indépendance de l'Écosse.",
   photo:"events/bannockburn.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1314, dans la boue d'un champ marécageux, l'orgueil d'une grande armée s'enlise face à un petit peuple déterminé ; une liberté longtemps rêvée devient réelle."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1314, un roi triomphe d'une armée trois fois supérieure venue du sud, jalon d'une indépendance retrouvée."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de Robert Bruce, en Écosse."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Bannockburn, près de Stirling, en Écosse."}
  ]},
  {name:"Congrès de Vienne — Autriche", lat:48.209, lng:16.366, radius:1500,
   desc:"De 1814 à 1815, les puissances européennes y redessinèrent le continent après la chute de Napoléon, inaugurant un siècle d'équilibre.",
   photo:"events/congres_vienne.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1814, dans les salons et les bals d'une capitale, les puissants du moment refont le monde à leur main, une carte étalée entre deux danses."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1814-1815, une grande conférence diplomatique redécoupe un continent au son des valses, après la chute d'un empereur."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le congrès de la Restauration européenne, en Autriche."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le congrès de Vienne, à Vienne, en Autriche."}
  ]},
  {name:"Bataille de Little Bighorn — Montana, USA", lat:45.57, lng:-107.43, radius:3000,
   desc:"En 1876, les guerriers sioux et cheyennes anéantirent le régiment de Custer, ultime grande victoire amérindienne.",
   photo:"events/little_bighorn.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1876, sur les hauteurs herbeuses dominant une rivière, des cavaliers venus imposer leur loi sont noyés sous le nombre ; leurs adversaires savourent une victoire sans lendemain."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1876, un régiment de cavalerie est anéanti par une coalition de nations autochtones, ultime éclat avant la soumission."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La défaite de Custer face aux Sioux, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Little Bighorn, dans le Montana, aux États-Unis."}
  ]},
  {name:"Bataille de Poitiers (732) — Vienne, France", lat:46.666, lng:0.426, radius:5000,
   desc:"En 732, Charles Martel y stoppa l'avancée arabo-berbère, événement longtemps vu comme un coup d'arrêt à l'expansion musulmane en Europe.",
   photo:"events/poitiers_732.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 732, une armée montée, lancée depuis les terres du Sud, vient se briser sur les lances serrées d'un chef aguerri ; l'histoire en fera un tournant."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 732, un chef franc arrête une colonne venue du sud, épisode érigé plus tard en symbole."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de Charles Martel, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Poitiers de 732, dans la Vienne, en France."}
  ]},
  {name:"Fondation de Rome (légendaire) — Latium, Italie", lat:41.889, lng:12.485, radius:1500,
   desc:"Selon la tradition, Romulus fonda Rome sur le Palatin en 753 av. J.-C. après avoir tué son frère Remus.",
   photo:"events/fondation_rome.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Vers 753 av. J.-C., sur une colline au bord d'un fleuve, un homme trace un sillon sacré et abat son frère qui l'a franchi ; d'un fratricide naît une cité promise à l'éternité."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Vers 753 av. J.-C., naissance légendaire d'une cité sur une colline, par un jumeau nourri par une louve devenu meurtrier de son frère."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La fondation légendaire de Rome, en Italie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La fondation de Rome, dans le Latium, en Italie."}
  ]},
  {name:"Bataille de Yorktown — Virginie, USA", lat:37.239, lng:-76.509, radius:2500,
   desc:"En 1781, la reddition de Cornwallis à Washington et Rochambeau scella l'indépendance américaine.",
   photo:"events/yorktown.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1781, cernée par la terre et par la mer, une armée à bout de forces met bas les armes ; une jeune nation vient d'arracher sa liberté."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1781, une armée britannique capitule, prise en étau entre insurgés et alliés venus de la mer — verrou d'une indépendance."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La reddition de Cornwallis, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Yorktown, en Virginie, aux États-Unis."}
  ]},
  {name:"Diète de Worms — Rhénanie-Palatinat, Allemagne", lat:49.63, lng:8.366, radius:1200,
   desc:"En 1521, Luther y refusa de se rétracter devant Charles Quint, acte fondateur de la Réforme.",
   photo:"events/worms_1521.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1521, seul face à une assemblée de puissants, un homme d'Église pâle mais inflexible refuse de renier ses écrits ; sa voix va déchirer la foi de tout un continent."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1521, un moine réformateur comparaît devant un empereur et refuse de se dédire, fracturant la chrétienté d'Occident."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La diète où Luther défie Charles Quint, en Allemagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La diète de Worms, à Worms, en Allemagne."}
  ]},
  {name:"Bataille de Lépante — Golfe de Patras, Grèce", lat:38.2, lng:21.33, radius:7000,
   desc:"En 1571, la Sainte-Ligue chrétienne détruisit la flotte ottomane, dernier grand affrontement de galères de l'histoire.",
   photo:"events/lepante.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1571, sur une mer d'automne, des centaines de navires s'éperonnent et s'abordent dans un fracas de bois brisé — l'ultime grand duel livré à la seule force des bras."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1571, dernier grand choc de galères à rames ; une ligue chrétienne l'emporte, où combattit un futur romancier manchot."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de la Sainte-Ligue sur les Ottomans, en Grèce."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Lépante, dans le golfe de Patras, en Grèce."}
  ]},
  {name:"Sacre de Charlemagne — Rome, Italie", lat:41.9022, lng:12.4539, radius:600,
   desc:"Le jour de Noël 800, le pape couronna Charlemagne empereur dans l'ancienne basilique Saint-Pierre, restaurant l'idée impériale en Occident.",
   photo:"events/sacre_charlemagne.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un jour de Noël de l'an 800, sous les voûtes d'une basilique baignée de cierges, une couronne se pose sur la tête d'un roi ; l'Occident se rêve de nouveau un empire."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Le jour de Noël de l'an 800, un pape couronne un empereur, restaurant en Occident un titre éteint depuis trois siècles."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le sacre de Charlemagne empereur, en Italie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le sacre de Charlemagne, à Rome, en Italie."}
  ]},
  {name:"Bataille de Verdun — Meuse, France", lat:49.208, lng:5.421, radius:6000,
   desc:"En 1916, la plus longue bataille de la Première Guerre mondiale (300 jours, 700 000 victimes) devint le symbole de l'enfer des tranchées.",
   photo:"events/verdun.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1916, dix mois durant, deux armées s'enlisent dans un même carré de terre labouré d'obus, où l'on meurt par centaines de milliers pour quelques arpents de boue."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1916, un enfer de tranchées de 300 jours autour de forts pilonnés, résumé d'un mot d'ordre : « on ne passe pas »."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La bataille-symbole de 1916, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Verdun, dans la Meuse, en France."}
  ]},
  {name:"Ralliement de Jeanne d'Arc — Orléans, France", lat:47.897, lng:1.904, radius:1500,
   desc:"En 1429, Jeanne d'Arc leva le siège d'Orléans, tournant de la guerre de Cent Ans en faveur du roi de France.",
   photo:"events/orleans_1429.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1429, devant une ville affamée par un long siège, une frêle silhouette en armure blanche galvanise des soldats découragés et renverse le cours d'une guerre sans fin."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1429, une jeune paysanne guidée par des voix fait lever un siège et renverse le cours d'une longue guerre."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Jeanne d'Arc lève le siège, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le ralliement de Jeanne d'Arc, au siège d'Orléans (France)."}
  ]},
  {name:"Siège de Ladysmith — KwaZulu-Natal, Afrique du Sud", lat:-28.559, lng:29.78, radius:5000,
   desc:"Lors de la guerre des Boers, le siège de Ladysmith (1899-1900) vit 118 jours d'encerclement britannique par les commandos boers.",
   photo:"events/ladysmith.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1899, sous le soleil d'un lointain veld, des paysans en armes tiennent en échec des mois durant une fière garnison d'empire ; l'orgueil colonial y prend l'eau."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1899-1900, des fermiers-combattants assiègent 118 jours une garnison impériale, dans une guerre coloniale d'Afrique australe."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le siège de Ladysmith, en Afrique du Sud."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le siège de Ladysmith, au KwaZulu-Natal, en Afrique du Sud."}
  ]},
  {name:"Bataille de Zama — Siliana, Tunisie", lat:36.3, lng:9.4, radius:6000,
   desc:"En 202 av. J.-C., Scipion l'Africain vainquit Hannibal, mettant fin à la deuxième guerre punique.",
   photo:"events/zama.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 202 av. J.-C., dans la poussière d'une plaine d'Afrique, le plus redouté des conquérants tombe enfin ; son étoile s'éteint là où, jeune, il avait juré une haine éternelle."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 202 av. J.-C., un stratège carthaginois est vaincu, ses propres éléphants retournés contre lui par un général rival."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La défaite d'Hannibal contre Scipion, en Tunisie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Zama, dans la région de Siliana, en Tunisie."}
  ]},
  {name:"Traité de Tordesillas — Valladolid, Espagne", lat:41.499, lng:-4.715, radius:1000,
   desc:"En 1494, Espagne et Portugal se partagèrent le Nouveau Monde le long d'un méridien, sous l'égide du pape.",
   photo:"events/tordesillas.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1494, penchées sur une carte du monde encore presque vierge, deux couronnes tracent un trait sur l'océan et se partagent des terres qu'aucune n'a jamais vues."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1494, deux couronnes ibériques se partagent un monde à peine découvert, une ligne tracée sur l'océan par la volonté d'un pape."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le partage du Nouveau Monde, en Espagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le traité de Tordesillas, province de Valladolid, en Espagne."}
  ]},
  {name:"Bataille de Midway — Atoll de Midway, Pacifique", lat:28.207, lng:-177.376, radius:9000,
   desc:"En juin 1942, la victoire aéronavale américaine détruisit quatre porte-avions japonais, tournant de la guerre du Pacifique.",
   photo:"events/midway.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En juin 1942, en une seule journée, quatre géants d'acier sombrent au milieu d'un océan ; le renseignement, plus que les canons, y renverse le cours d'une guerre."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En juin 1942, une bataille aéronavale gagnée grâce au décryptage ennemi ; quatre porte-avions coulés en un jour font basculer un océan."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le tournant de la guerre du Pacifique, dans le Pacifique."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Midway, à l'atoll de Midway, dans le Pacifique."}
  ]},
  {name:"Prise de Grenade — Andalousie, Espagne", lat:37.176, lng:-3.588, radius:2000,
   desc:"En 1492, la reddition de l'émirat de Grenade acheva la Reconquista et l'unité de l'Espagne chrétienne.",
   photo:"events/grenade_1492.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1492, au terme d'un long siège, les portes d'une cité aux palais de pourpre s'ouvrent à deux souverains ; sept siècles de reconquête s'achèvent."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1492, le dernier royaume musulman de la péninsule tombe ; les clés d'une cité aux palais rouges passent à deux souverains catholiques."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La fin de la Reconquista, en Espagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise de Grenade, en Andalousie, en Espagne."}
  ]},
  {name:"Bataille d'Actium — Golfe d'Ambracie, Grèce", lat:38.934, lng:20.737, radius:7000,
   desc:"En 31 av. J.-C., Octave vainquit Antoine et Cléopâtre, ouvrant la voie à l'Empire romain.",
   photo:"events/actium.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 31 av. J.-C., sur des flots baignés de soleil, une bataille décide du maître du monde ; les amants vaincus, plutôt que les chaînes, choisiront bientôt la mort."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 31 av. J.-C., une victoire navale offre un empire à son vainqueur et pousse un couple d'amants vaincus au suicide."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La défaite d'Antoine et Cléopâtre, en Grèce."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Actium, dans le golfe d'Ambracie, en Grèce."}
  ]},
  {name:"Serment du Jeu de paume — Versailles, France", lat:48.8049, lng:2.1204, radius:300,
   desc:"Le 20 juin 1789, les députés du Tiers état jurèrent de ne pas se séparer avant d'avoir donné une constitution à la France.",
   photo:"events/jeu_de_paume.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En juin 1789, trouvant les portes closes, des hommes se pressent dans une vaste salle nue et jurent, la main levée, de ne pas se séparer avant d'avoir tout changé."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En juin 1789, des députés verrouillés dehors prêtent serment dans une salle de sport royale, promettant de refonder un royaume."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le serment du Jeu de paume, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le serment du Jeu de paume, à Versailles, en France."}
  ]},
  {name:"Bataille de Iéna — Thuringe, Allemagne", lat:50.927, lng:11.586, radius:4000,
   desc:"En 1806, Napoléon écrasa l'armée prussienne, précipitant l'effondrement du royaume de Prusse.",
   photo:"events/iena.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1806, l'orgueilleuse armée d'un vieux royaume, qui se croyait invincible, est balayée en quelques heures ; le mythe d'une grande puissance militaire s'effondre d'un coup."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1806, un empereur venu de l'Ouest écrase en une journée une armée réputée invincible, double victoire foudroyante."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire napoléonienne sur la Prusse, en Allemagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Iéna, en Thuringe, en Allemagne."}
  ]},
  {name:"Troisième guerre servile — Vallée du Sele — Campanie, Italie", lat:40.48, lng:15.15, radius:8000,
   desc:"Troisième guerre servile (73-71 av. J.-C.) : l'esclave gladiateur Spartacus mena la plus grande révolte servile de Rome avant d'être écrasé par Crassus.",
   photo:"events/troisieme_guerre_servile.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Vers 73 av. J.-C., un homme échappé de l'arène soulève une multitude d'opprimés et fait trembler les maîtres ; vaincue, sa troupe finira clouée le long d'une grande route."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 73-71 av. J.-C., un gladiateur évadé mène une armée d'esclaves, finalement crucifiée le long d'une grande voie."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La troisième guerre servile (révolte de Spartacus), en Italie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La troisième guerre servile de Spartacus (73-71 av. J.-C.), en Campanie, Italie."}
  ]},
  {name:"Chute de Tenochtitlan — Mexico, Mexique", lat:19.435, lng:-99.14, radius:3000,
   desc:"En 1521, Cortés et ses alliés indigènes prirent la capitale aztèque après un siège dévastateur, effondrant l'empire.",
   photo:"events/chute_de_tenochtitlan.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1521, la plus éclatante des cités, posée sur un miroir d'eau, sombre après des mois de siège ; avec elle s'éteint la splendeur d'un peuple qui se croyait éternel."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1521, une poignée d'aventuriers venus de la mer et leurs alliés locaux assiègent une cité lacustre — fin d'un empire du soleil."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La prise de Tenochtitlan par Cortés, au Mexique."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La chute de Tenochtitlan, à Mexico, au Mexique."}
  ]},
  {name:"Bataille de Culloden — Highlands, Écosse", lat:57.478, lng:-4.094, radius:2000,
   desc:"En 1746, l'écrasement des Jacobites mit fin aux espoirs des Stuart et bouleversa la société des clans écossais.",
   photo:"events/bataille_de_culloden.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1746, sur une lande grise fouettée par la pluie, les clans des montagnes sont fauchés en une heure ; avec eux meurt le rêve d'une vieille dynastie."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1746, une armée de clans montagnards est massacrée sur une lande balayée par la pluie, crépuscule d'une cause dynastique."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La défaite jacobite, en Écosse."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Culloden, dans les Highlands, en Écosse."}
  ]},
  {name:"Incendie de Rome — Rome, Italie", lat:41.892, lng:12.487, radius:4000,
   desc:"En 64 apr. J.-C., un immense incendie ravagea Rome pendant six jours ; Néron en fit porter la responsabilité aux chrétiens.",
   photo:"events/grand_incendie_de_rome.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En l'an 64, six jours et six nuits, les flammes dévorent une capitale antique ; on murmure que le maître chantait devant le brasier, et il faut des coupables à châtier."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En l'an 64, un brasier de six jours dévore une capitale antique ; l'empereur, accusé d'avoir chanté sur les ruines, désigne des boucs émissaires."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le grand incendie sous Néron, en Italie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'incendie de Rome, à Rome, en Italie."}
  ]},
  {name:"Bataille de Nagashino — Aichi, Japon", lat:34.914, lng:137.558, radius:2000,
   desc:"En 1575, Oda Nobunaga y employa des salves d'arquebuses massées pour briser la cavalerie Takeda, révolution tactique.",
   photo:"events/bataille_de_nagashino.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1575, tapis derrière des palissades, des tireurs déchargent salve après salve ; une glorieuse charge de cavaliers s'effondre — le feu a changé la guerre."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1575, des salves d'arquebusiers retranchés brisent une charge de cavalerie réputée, révolution du feu en Extrême-Orient."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire d'Oda Nobunaga, au Japon."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Nagashino, dans la région d'Aichi, au Japon."}
  ]},
  {name:"Débarquement de Provence — Var, France", lat:43.27, lng:6.64, radius:6000,
   desc:"En août 1944, l'opération Dragoon ouvrit un second front en France par la Méditerranée, libérant rapidement le Sud.",
   photo:"events/debarquement_de_provence.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En août 1944, un second débarquement aborde une côte du Sud gorgée de soleil ; oublié dans l'ombre de celui du Nord, il ouvre pourtant une autre porte."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En août 1944, un second assaut amphibie sur une côte méridionale ensoleillée, moins connu que celui du Nord deux mois plus tôt."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le débarquement de Provence, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le débarquement de Provence, dans le Var, en France."}
  ]},
  {name:"Bataille de Bouvines — Nord, France", lat:50.583, lng:3.19, radius:2000,
   desc:"En 1214, la victoire de Philippe Auguste sur une coalition consolida le royaume de France et son autorité royale.",
   photo:"events/bataille_de_bouvines.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un dimanche de 1214, sous un soleil d'été, un roi tient tête à toute une ligue de princes venus l'abattre ; de sa victoire, une jeune monarchie sort soudée."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Un dimanche de 1214, un roi triomphe d'une coalition d'empereur et de comtes, ciment d'une jeune monarchie."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de Philippe Auguste, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Bouvines, dans le Nord, en France."}
  ]},
  {name:"Grand Incendie de Londres — Angleterre", lat:51.51, lng:-0.092, radius:2000,
   desc:"En 1666, un feu parti d'une boulangerie de Pudding Lane détruisit le cœur médiéval de Londres en quatre jours.",
   photo:"events/grand_incendie_de_londres.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1666, une étincelle de four embrase une ville de bois ; quatre jours durant les flammes la dévorent — mais purgent, dit-on, le fléau qui la rongeait."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1666, un brasier né dans une boulangerie rase en quatre jours une vieille ville de bois, mais éteint une épidémie de peste."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le Grand Incendie, en Angleterre."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Grand Incendie de Londres, à Londres, en Angleterre."}
  ]},
  {name:"Bataille de Salamine — Golfe Saronique, Grèce", lat:37.95, lng:23.56, radius:4000,
   desc:"En 480 av. J.-C., la flotte grecque piégea et détruisit l'armada perse dans un détroit, sauvant la Grèce.",
   photo:"events/bataille_de_salamine.JPG",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 480 av. J.-C., dans un chenal trop étroit pour son nombre, une immense armada s'empêtre et coule sous les éperons de navires plus vifs qu'elle."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 480 av. J.-C., dans un détroit resserré, des trières agiles anéantissent une armada trop nombreuse pour manœuvrer."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire des cités grecques sur la flotte perse, en Grèce."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Salamine, dans le golfe Saronique, en Grèce."}
  ]},
  {name:"Défenestration de Prague — Tchéquie", lat:50.091, lng:14.401, radius:400,
   desc:"En 1618, des gouverneurs impériaux furent jetés par les fenêtres du château de Prague, déclenchant la guerre de Trente Ans.",
   photo:"events/defenestration_de_prague.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1618, précipités par une fenêtre de château, des envoyés survivent par miracle à leur chute ; ce vol grotesque donne le signal de trente ans de guerre."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1618, des représentants impériaux jetés par les fenêtres d'un château survivent — étincelle d'une guerre de trente ans."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La défenestration au château, en Tchéquie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La défenestration de Prague, à Prague, en Tchéquie."}
  ]},
  {name:"Bataille de Gaugamèles — Ninive, Irak", lat:36.36, lng:43.25, radius:8000,
   desc:"En 331 av. J.-C., Alexandre le Grand écrasa Darius III, ouvrant la conquête de l'Empire perse.",
   photo:"events/bataille_de_gaugameles.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 331 av. J.-C., sous la poussière d'une plaine sans horizon, un jeune homme au génie foudroyant met en fuite le plus grand roi de la terre et son océan de soldats ; l'Orient tout entier s'ouvre devant lui."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 331 av. J.-C., un jeune conquérant macédonien met en déroute un « roi des rois » et son immense armée, dans une plaine de Mésopotamie."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire d'Alexandre sur Darius III, en Irak."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Gaugamèles, près de Ninive, en Irak."}
  ]},
  {name:"Bataille de Kadesh — Homs, Syrie", lat:34.57, lng:36.51, radius:7000,
   desc:"Vers 1274 av. J.-C., Égyptiens de Ramsès II et Hittites s'affrontèrent lors de l'une des premières grandes batailles documentées, suivie du plus ancien traité de paix connu.",
   photo:"events/bataille_de_kadesh.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Vers 1274 av. J.-C., dans un fracas de roues et de chevaux, deux grands empires du monde ancien s'étripent sans vainqueur ; de leur lassitude naîtra la première paix jamais gravée."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Vers 1274 av. J.-C., un choc de chars entre deux empires de l'âge du bronze, suivi du plus ancien traité de paix connu, au Proche-Orient."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'affrontement de Ramsès II contre les Hittites, en Syrie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Kadesh, près de Homs, en Syrie."}
  ]},
  {name:"Chute de Saïgon — Hô Chi Minh-Ville, Vietnam", lat:10.777, lng:106.695, radius:3000,
   desc:"Le 30 avril 1975, la prise de Saïgon par les forces du Nord acheva la guerre du Vietnam et réunifia le pays.",
   photo:"events/chute_de_saigon.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Le 30 avril 1975, sous une chaleur moite, une ville bascule dans le chaos : files désespérées, papiers brûlés et espoirs en fuite, tandis qu'une longue guerre rend son dernier souffle."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Le 30 avril 1975, des chars enfoncent les grilles d'un palais et un hélicoptère évacue les derniers étrangers : une capitale du Sud tombe, en Asie du Sud-Est."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La chute de Saïgon, au Vietnam."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La chute de Saïgon (Hô Chi Minh-Ville), au Vietnam."}
  ]},
  {name:"Bataille de Vienne (1683) — Autriche", lat:48.232, lng:16.29, radius:5000,
   desc:"En 1683, la levée du siège ottoman de Vienne par les troupes polonaises de Sobieski marqua le reflux de l'Empire ottoman en Europe.",
   photo:"events/bataille_de_vienne_(1683).jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1683, alors qu'une capitale exsangue est sur le point de céder, une nuée de cavaliers dévale des collines au crépuscule et repousse une marée qui menaçait tout un continent."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1683, une charge de cavalerie ailée venue de l'Est lève le siège d'une capitale et stoppe une poussée ottomane, en Europe centrale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le siège ottoman levé par Sobieski, en Autriche."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Vienne de 1683, à Vienne, en Autriche."}
  ]},
  {name:"Marche du sel de Gandhi — Gujarat, Inde", lat:20.9, lng:72.66, radius:2000,
   desc:"En 1930, Gandhi acheva sa marche de 385 km à Dandi pour récolter du sel en défi à la taxe coloniale, acte majeur de désobéissance civile.",
   photo:"events/marche_du_sel_de_gandhi.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1930, au bout de longues semaines de marche pieds nus, un vieil homme frêle se penche sur le rivage et ramasse un peu de sel ; ce geste minuscule ébranle un empire."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1930, au terme d'une marche de 385 km vers la mer, un leader en pagne ramasse une poignée de sel en défi à un empire, sur une côte du sous-continent indien."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La marche du sel de Gandhi, en Inde."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La marche du sel, à Dandi (Gujarat), en Inde."}
  ]},
  {name:"Bataille des Champs Catalauniques — Marne, France", lat:48.95, lng:4.36, radius:9000,
   desc:"En 451, une coalition romano-wisigothique arrêta Attila et ses Huns, l'une des dernières grandes victoires de Rome.",
   photo:"events/bataille_des_champs_catalauniques.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 451, des ennemis d'hier scellent une alliance de la dernière heure pour barrer la route à un envahisseur venu des steppes, que la seule évocation de son nom faisait trembler."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 451, une coalition improbable stoppe un conquérant venu des steppes surnommé « fléau de Dieu », dans le nord-est d'un royaume d'Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Attila arrêté, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Champs Catalauniques, en Champagne, en France."}
  ]},
  {name:"Prise de la Smala d'Abd el-Kader — Algérie", lat:35.0, lng:1.5, radius:10000,
   desc:"En 1843, la prise de la smala d'Abd el-Kader marqua un tournant de la conquête française de l'Algérie.",
   photo:"events/prise_de_la_smala_d_abd_el_Kader.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1843, au galop et par surprise, une poignée de cavaliers fond sur une immense cité nomade en marche et capture le cœur mouvant d'une longue résistance."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1843, une colonne surprend le campement mobile de 20 000 personnes d'un chef de la résistance, sur des hauts plateaux d'Afrique du Nord."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La prise de la smala d'Abd el-Kader, en Algérie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise de la Smala, en Algérie."}
  ]},
  {name:"Bataille de Plassey — Bengale-Occidental, Inde", lat:23.8, lng:88.25, radius:4000,
   desc:"En 1757, la victoire de Clive assura la domination de la Compagnie anglaise des Indes sur le Bengale, prélude à l'empire britannique en Inde.",
   photo:"events/bataille_de_plassey.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1757, sous une pluie de mousson, une bataille jouée d'avance par l'or et la trahison plus que par les armes livre un immense royaume aux appétits de marchands lointains."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1757, une victoire acquise plus par la corruption d'un général adverse que par les armes ouvre un vaste territoire à une compagnie marchande, dans le nord-est du sous-continent indien."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de la Compagnie des Indes, en Inde."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Plassey, au Bengale, en Inde."}
  ]},
  {name:"Bataille de Dien Bien Phu — Vietnam", lat:21.387, lng:103.023, radius:5000,
   desc:"En 1954, la défaite française dans cette cuvette scella la fin de l'Indochine française.",
   photo:"events/bataille_de_dien_bien_phu.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1954, au creux d'une vallée cernée de hauteurs, une armée se croit à l'abri ; mais du sommet des pentes, un déluge d'obus venu de nulle part la broie jusqu'à la reddition."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1954, un corps expéditionnaire est piégé dans une cuvette dont les crêtes sont couronnées d'une artillerie hissée à dos d'homme, en Asie du Sud-Est."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La défaite d'un corps expéditionnaire français, au Vietnam."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Diên Biên Phu, au Vietnam."}
  ]},
  {name:"Bataille de Platées — Béotie, Grèce", lat:38.223, lng:23.262, radius:4000,
   desc:"En 479 av. J.-C., la victoire terrestre grecque acheva de repousser la seconde invasion perse.",
   photo:"events/bataille_de_platees.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 479 av. J.-C., sur une plaine, une dernière grande bataille terrestre achève de briser une invasion venue de l'Est ; un monde de cités préserve sa liberté."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 479 av. J.-C., un choc terrestre parachève l'échec d'une invasion venue de l'Est, un an après une bataille navale décisive, dans le sud-est de l'Europe."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire décisive des cités grecques sur les Perses, en Grèce."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Platées, en Béotie, en Grèce."}
  ]},
  {name:"Prise de Babylone par Cyrus — Babil, Irak", lat:32.542, lng:44.42, radius:3000,
   desc:"En 539 av. J.-C., Cyrus le Grand s'empara de la cité sans grand combat, fondant l'Empire perse achéménide.",
   photo:"events/prise_de_babylone_par_cyrus.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 539 av. J.-C., une immense cité aux murailles réputées imprenables ouvre ses portes presque sans un cri ; son vainqueur, dit-on, rend à des exilés le chemin de leur patrie."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 539 av. J.-C., une cité mésopotamienne tombe presque sans combat ; son nouveau maître libère des captifs, au Proche-Orient."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La prise de Babylone par Cyrus, en Irak."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise de Babylone, dans la région de Babil, en Irak."}
  ]},
  {name:"Bataille d'Issos — Hatay, Turquie", lat:36.86, lng:36.2, radius:4000,
   desc:"En 333 av. J.-C., Alexandre battit Darius III, ouvrant la conquête du Levant.",
   photo:"events/bataille_d_issos.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 333 av. J.-C., coincé entre la montagne et la mer, le plus grand souverain d'Orient panique et s'enfuit, abandonnant jusqu'aux siens à un jeune roi venu de l'ouest."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 333 av. J.-C., un jeune roi macédonien force un « roi des rois » à fuir en abandonnant sa famille, sur une plaine côtière au carrefour de deux continents."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire d'Alexandre sur Darius, en Turquie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Issos, dans le Hatay, en Turquie."}
  ]},
  {name:"Bataille de Pharsale — Thessalie, Grèce", lat:39.29, lng:22.38, radius:5000,
   desc:"En 48 av. J.-C., César écrasa Pompée, tournant décisif de la guerre civile romaine.",
   photo:"events/bataille_de_pharsale.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 48 av. J.-C., sur une plaine, deux géants d'une même république jouent l'empire du monde ; l'un l'emporte, ouvrant la voie au pouvoir d'un seul."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 48 av. J.-C., deux généraux romains rivaux s'affrontent ; le vainqueur avait franchi un petit fleuve un an plus tôt, dans le sud-est de l'Europe."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de César sur Pompée, en Grèce."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Pharsale, en Thessalie, en Grèce."}
  ]},
  {name:"Passage du Rubicon — Émilie-Romagne, Italie", lat:44.09, lng:12.4, radius:3000,
   desc:"En 49 av. J.-C., César franchit ce fleuve frontière en armes, déclenchant la guerre civile.",
   photo:"events/passage_du_rubicon.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 49 av. J.-C., à la tête de ses légions, un général marque un temps au bord d'un modeste ruisseau, puis le franchit ; d'un seul pas, il jette la république dans la guerre civile."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 49 av. J.-C., un général franchit en armes un petit fleuve, geste de rupture résumé par une formule célèbre, dans le nord d'une péninsule méditerranéenne."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le passage du Rubicon par César, en Italie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le passage du Rubicon, en Émilie-Romagne, en Italie."}
  ]},
  {name:"Assassinat de Jules César — Rome, Italie", lat:41.8955, lng:12.4768, radius:400,
   desc:"Aux ides de mars 44 av. J.-C., César fut poignardé par des sénateurs au pied de la Curie de Pompée.",
   photo:"events/assassinat_de_jules_cesar.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un matin de mars 44 av. J.-C., au pied d'une statue, un maître tout-puissant s'écroule sous une grêle de poignards ; parmi les mains levées, il reconnaît celle d'un fils de cœur."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Aux ides de mars 44 av. J.-C., un dictateur est poignardé par des sénateurs, dont l'un lui était cher, au cœur d'une grande cité antique."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'assassinat de César, en Italie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'assassinat de Jules César, à Rome, en Italie."}
  ]},
  {name:"Bataille de Teutobourg — Basse-Saxe, Allemagne", lat:52.19, lng:8.13, radius:6000,
   desc:"En l'an 9, des tribus germaniques anéantirent trois légions romaines, arrêtant l'expansion au-delà du Rhin.",
   photo:"events/bataille_de_teutobourg.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En l'an 9, dans les marécages sombres d'une forêt, trois armées entières s'évanouissent sans retour ; au loin, un vieil empereur en perdra le sommeil."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En l'an 9, trois légions disparaissent dans une embuscade forestière, arrachant à un empereur un cri de désespoir, en Europe centrale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'anéantissement des légions de Varus, en Allemagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Teutobourg, en Basse-Saxe, en Allemagne."}
  ]},
  {name:"Siège d'Alésia — Côte-d'Or, France", lat:47.537, lng:4.5, radius:4000,
   desc:"En 52 av. J.-C., César encercla Vercingétorix et acheva la conquête de la Gaule.",
   photo:"events/siege_d_alesia.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 52 av. J.-C., un assiégeant devient assiégé, pris entre une place forte et une armée de secours ; au bout de l'épreuve, un chef vaincu vient jeter ses armes aux pieds du vainqueur."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 52 av. J.-C., un assiégeant se retranche à son tour contre une armée de secours et obtient la reddition d'un chef gaulois, dans le centre-est d'un royaume d'Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La reddition de Vercingétorix à César, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le siège d'Alésia, en Bourgogne, en France."}
  ]},
  {name:"Destruction de Carthage — Tunis, Tunisie", lat:36.852, lng:10.323, radius:4000,
   desc:"En 146 av. J.-C., Rome rasa sa grande rivale, achevant les guerres puniques.",
   photo:"events/destruction_de_carthage.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 146 av. J.-C., une grande cité de la mer, rivale honnie, est effacée de la terre pierre après pierre — comme un vieux sénateur le réclamait sans relâche."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 146 av. J.-C., une cité maritime rivale est rasée, sa ruine réclamée par un sénateur obstiné, sur une côte d'Afrique du Nord."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La fin de Carthage face à Rome, en Tunisie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La destruction de Carthage, près de Tunis, en Tunisie."}
  ]},
  {name:"Prise de Jérusalem par Titus — Israël", lat:31.778, lng:35.235, radius:3000,
   desc:"En l'an 70, les Romains prirent la ville et détruisirent le Second Temple.",
   photo:"events/prise_de_jerusalem_par_titus.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En l'an 70, une ville sainte succombe après des mois de famine et d'assauts ; dans les flammes disparaît un grand temple que le monde n'a jamais revu."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En l'an 70, un long siège s'achève par l'incendie d'un sanctuaire dont le butin sera sculpté sur un arc de triomphe, au Proche-Orient."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La prise de Jérusalem par Titus, en Israël."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise de Jérusalem de 70, en Israël."}
  ]},
  {name:"Bataille du pont Milvius — Rome, Italie", lat:41.935, lng:12.467, radius:2000,
   desc:"En 312, la victoire de Constantin le mena au pouvoir et favorisa l'essor du christianisme.",
   photo:"events/bataille_du_pont_milvius.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 312, à la veille d'un affrontement au bord d'un fleuve, un chef croit voir un signe flamboyer dans le ciel ; sa victoire fera d'un culte persécuté la foi d'un empire."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 312, une victoire remportée après une vision dans le ciel change le destin d'une religion, sur un fleuve d'une grande cité antique."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de Constantin, en Italie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille du pont Milvius, à Rome, en Italie."}
  ]},
  {name:"Éruption minoenne de Théra — Cyclades, Grèce", lat:36.4, lng:25.4, radius:5000,
   desc:"Vers 1600 av. J.-C., l'explosion volcanique de Théra bouleversa la civilisation minoenne.",
   photo:"events/eruption_minoenne_de_thera.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"À l'âge du bronze, une île paisible se déchire dans une explosion titanesque et s'effondre dans la mer ; peut-être le lointain souvenir d'un monde englouti."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"À l'âge du bronze, un cataclysme volcanique souffle le centre d'une île en caldeira, peut-être à l'origine d'un mythe d'engloutissement, en mer Égée."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'éruption de Théra (Santorin), en Grèce."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'éruption minoenne de Santorin, dans les Cyclades, en Grèce."}
  ]},
  {name:"Bataille de Yarmouk — Jordanie", lat:32.73, lng:35.95, radius:7000,
   desc:"En 636, les armées arabes écrasèrent les Byzantins, ouvrant la conquête du Levant.",
   photo:"events/bataille_de_yarmouk.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 636, aveuglés par une tempête de sable au bord d'un ravin, les soldats d'un vieil empire se débandent ; en un jour, tout un Orient change de mains."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 636, le long d'un affluent encaissé et sous une tempête de sable, une armée byzantine s'effondre et livre tout un Levant, au Proche-Orient."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La défaite byzantine face aux Arabes, en Jordanie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille du Yarmouk, en Jordanie."}
  ]},
  {name:"Bataille de Qadisiyya — Irak", lat:31.83, lng:44.55, radius:6000,
   desc:"Vers 636, la victoire arabe brisa l'Empire sassanide.",
   photo:"events/bataille_de_qadisiyya.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 636, des cavaliers du désert font front aux éléphants d'un empire vieux de mille ans ; la muraille de bêtes cède, et la route d'une capitale s'ouvre."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 636, la charge d'éléphants d'un empire perse millénaire est brisée, ouvrant sa capitale aux conquérants, en Mésopotamie."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La défaite sassanide face aux Arabes, en Irak."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Qadisiyya, en Irak."}
  ]},
  {name:"Hégire de Mahomet — Médine, Arabie saoudite", lat:24.47, lng:39.61, radius:4000,
   desc:"En 622, l'exil de Mahomet vers Yathrib marque le point de départ du calendrier musulman.",
   photo:"events/hegire.png",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 622, chassé de sa ville, un homme qui prêche un dieu unique prend la route d'une oasis lointaine ; ce simple départ deviendra le point de départ d'un nouveau temps."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 622, un prédicant persécuté migre vers une oasis du nord, an zéro d'un nouveau calendrier, dans une péninsule désertique."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'Hégire vers Médine, en Arabie saoudite."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Hégire, à Médine, en Arabie saoudite."}
  ]},
  {name:"Bataille de Talas — Kazakhstan", lat:42.52, lng:72.24, radius:7000,
   desc:"En 751, la victoire abbasside sur les Tang stoppa l'expansion chinoise vers l'ouest et diffusa le papier.",
   photo:"events/bataille_de_talas.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 751, aux confins des steppes, deux mondes que tout oppose se heurtent ; de leurs captifs serait passé, dit-on, un secret d'Orient qui allait transformer l'écrit."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 751, deux empires s'affrontent aux confins des steppes ; des prisonniers y auraient transmis le secret du papier, en Asie centrale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'arrêt de l'expansion Tang face aux Abbassides, au Kazakhstan."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Talas, dans le sud du Kazakhstan."}
  ]},
  {name:"Bataille de Manzikert — Muş, Turquie", lat:39.14, lng:42.53, radius:5000,
   desc:"En 1071, la défaite byzantine face aux Seldjoukides ouvrit l'Anatolie aux Turcs.",
   photo:"events/bataille_de_manzikert.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1071, l'impensable : un empereur tombe vivant aux mains de l'ennemi ; par la faille ainsi ouverte, des cavaliers venus de l'est vont submerger toute une contrée."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1071, un empereur est fait prisonnier, ouvrant une brèche par laquelle déferlent des cavaliers turcs, en Anatolie orientale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La défaite byzantine face aux Seldjoukides, en Turquie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Manzikert, dans la région de Muş, en Turquie."}
  ]},
  {name:"Prise de Jérusalem par les croisés — Israël", lat:31.777, lng:35.234, radius:3000,
   desc:"En 1099, la première croisade s'empara de la ville au terme d'un siège sanglant.",
   photo:"events/prise_de_jerusalem_par_les_croises.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1099, des guerriers venus de très loin s'emparent d'une cité trois fois sainte au terme d'un siège féroce ; les rues s'emplissent de sang au nom de la foi."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1099, un siège s'achève par un massacre, aboutissement d'une expédition prêchée quatre ans plus tôt, au Proche-Orient."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La prise de Jérusalem par les croisés, en Israël."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise de Jérusalem de 1099, en Israël."}
  ]},
  {name:"Bataille de Hattin — Galilée, Israël", lat:32.8, lng:35.45, radius:3000,
   desc:"En 1187, Saladin anéantit l'armée croisée, rouvrant la voie de Jérusalem.",
   photo:"events/bataille_de_hattin.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1187, sous un soleil implacable et sans une goutte d'eau, une armée épuisée se laisse encercler sur des hauteurs arides ; sa perte ouvre les portes de la ville sainte."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1187, une armée assoiffée est piégée près de deux collines jumelles ; la défaite rend une ville sainte, en Galilée."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de Saladin sur les croisés, en Israël."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Hattin, en Galilée, en Israël."}
  ]},
  {name:"Sac de Constantinople (1204) — Istanbul, Turquie", lat:41.008, lng:28.98, radius:3000,
   desc:"En 1204, la quatrième croisade détourna son but et pilla la capitale byzantine chrétienne.",
   photo:"events/sac_de_constantinople_(1204).jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1204, des croisés dévoyés de leur route pillent et brûlent une capitale chrétienne au lieu de leur but ; on emporte jusqu'à ses chevaux de bronze."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1204, une croisade détournée saccage une capitale chrétienne au lieu de son objectif, sur un détroit entre deux continents."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le sac de Constantinople par les croisés, en Turquie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le sac de Constantinople de 1204, à Istanbul, en Turquie."}
  ]},
  {name:"Prise de Bagdad par les Mongols — Irak", lat:33.34, lng:44.4, radius:4000,
   desc:"En 1258, Houlagou détruisit la capitale abbasside, fin de l'âge d'or islamique.",
   photo:"events/prise_de_bagdad_par_les_mongols.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1258, une vague venue des lointaines steppes engloutit la plus brillante des cités et brûle des siècles de savoir ; un âge d'or s'achève dans les flammes."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1258, une capitale du savoir est saccagée, ses bibliothèques jetées dans un fleuve dit-on noirci d'encre, en Mésopotamie."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La prise de Bagdad par Houlagou, en Irak."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise de Bagdad de 1258, en Irak."}
  ]},
  {name:"Bataille d'Aïn Djalout — Israël", lat:32.55, lng:35.35, radius:4000,
   desc:"En 1260, les Mamelouks stoppèrent l'avancée mongole, un tournant historique.",
   photo:"events/bataille_d_ain_djalout.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1260, dans une vallée d'Orient, des soldats nés dans les chaînes brisent net une déferlante que nul n'avait su arrêter ; le mythe de l'invincible s'effondre."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1260, une armée d'anciens esclaves-soldats stoppe une vague de conquête réputée invincible, dans une vallée du Levant."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'arrêt des Mongols par les Mamelouks, en Israël."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Aïn Djalout, en Galilée, en Israël."}
  ]},
  {name:"Batailles de Hakata (invasions mongoles) — Fukuoka, Japon", lat:33.6, lng:130.4, radius:8000,
   desc:"En 1274 et 1281, deux typhons providentiels détruisirent les flottes d'invasion mongoles.",
   photo:"events/batailles_de_la_baie_de_hakata.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Par deux fois, dans les années 1270-1280, une flotte d'invasion colossale est engloutie par la tempête aux abords d'un archipel ; on y verra le souffle des dieux."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Dans les années 1270-1280, deux tentatives d'invasion sont brisées par des typhons providentiels, sur une baie d'un archipel d'Asie de l'Est."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Les invasions mongoles repoussées, au Japon."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les invasions mongoles du Japon, à la baie de Hakata (Fukuoka), au Japon."}
  ]},
  {name:"Bataille de Courtrai (Éperons d'or) — Flandre, Belgique", lat:50.83, lng:3.26, radius:2000,
   desc:"En 1302, les milices flamandes écrasèrent la chevalerie française.",
   photo:"events/courtrai.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1302, prise au piège des fossés et des marais, une fière chevalerie est taillée en pièces par de simples gens de métier ; on ramasse ses éperons par centaines."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1302, une chevalerie piégée dans les fossés est massacrée par des milices urbaines, qui ramassent des centaines d'éperons, dans le nord d'un pays d'Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire des milices flamandes, en Belgique."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille des Éperons d'or, à Courtrai, en Belgique."}
  ]},
  {name:"Bataille de Crécy — Somme, France", lat:50.253, lng:1.897, radius:3000,
   desc:"En 1346, les archers anglais brisèrent l'armée française, aube de la guerre de Cent Ans.",
   photo:"events/bataille_de_crecy.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1346, sous une nuée de flèches et les premiers grondements d'un feu nouveau, une chevalerie nombreuse et sûre d'elle tombe par vagues entières."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1346, l'arc long et de premières bouches à feu fauchent une nombreuse chevalerie au début d'une longue guerre dynastique, dans le nord d'un royaume d'Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire anglaise d'Édouard III, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Crécy, dans la Somme, en France."}
  ]},
  {name:"Bataille de Kulikovo — Toula, Russie", lat:53.67, lng:38.67, radius:6000,
   desc:"En 1380, la victoire russe sur la Horde d'or amorça l'émancipation moscovite.",
   photo:"events/bataille_de_kulikovo.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1380, dans la brume d'une plaine, un prince relève enfin la tête et défait les maîtres venus d'Asie qui l'écrasaient depuis des générations ; leur emprise commence à céder."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1380, un prince défait des cavaliers tributaires, premier craquement d'un long joug venu d'Asie, dans les plaines de l'est de l'Europe."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire sur la Horde d'or, en Russie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Koulikovo, dans la région de Toula, en Russie."}
  ]},
  {name:"Bataille de Kosovo Polje — Kosovo", lat:42.66, lng:21.1, radius:4000,
   desc:"En 1389, l'affrontement serbo-ottoman devint un mythe national des Balkans.",
   photo:"events/bataille_de_kosovo_polje.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1389, sur un champ balayé par les corbeaux, deux souverains tombent le même jour ; de cette défaite, un peuple fera pour des siècles sa plaie sacrée."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1389, un choc où périssent les deux souverains marque à jamais la mémoire d'un peuple, dans les Balkans."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Serbes contre Ottomans, au Kosovo."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Kosovo (« champ des Merles »), au Kosovo."}
  ]},
  {name:"Bataille de Grunwald — Varmie-Mazurie, Pologne", lat:53.49, lng:20.09, radius:5000,
   desc:"En 1410, l'union polono-lituanienne écrasa l'ordre Teutonique.",
   photo:"events/bataille_de_grunwald.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1410, sur un immense champ, des peuples unis fondent sur un ordre de moines-soldats redouté de tous et l'anéantissent ; rarement le Moyen Âge vit pareille mêlée."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1410, une coalition slavo-balte écrase un ordre de chevaliers religieux, l'une des plus grandes batailles médiévales, dans le nord-est de l'Europe centrale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La défaite des chevaliers Teutoniques, en Pologne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Grunwald, en Mazurie, en Pologne."}
  ]},
  {name:"Bataille de Castillon — Gironde, France", lat:44.85, lng:-0.03, radius:3000,
   desc:"En 1453, l'artillerie française mit fin à la guerre de Cent Ans.",
   photo:"events/bataille_de_castillon.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1453, le grondement des bouches à feu a raison d'une ultime charge ; sur ce champ s'achève une guerre qui aura duré plus de cent ans."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1453, le canon a raison d'une armée lors de la dernière grande bataille d'un conflit de plus d'un siècle, dans le sud-ouest d'un royaume d'Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La fin de la guerre de Cent Ans, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Castillon, en Gironde, en France."}
  ]},
  {name:"Bataille de Marignan — Lombardie, Italie", lat:45.31, lng:9.35, radius:3000,
   desc:"En 1515, la victoire de François Ier sur les Suisses ouvrit les guerres d'Italie.",
   photo:"events/bataille_de_marignan.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1515, deux jours durant, un choc d'une violence inouïe brise l'aura d'invincibilité de farouches piquiers venus des montagnes, au profit d'un tout jeune roi."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1515, une « bataille de géants » de deux jours brise la réputation d'une redoutable infanterie de montagne, dans le nord d'une péninsule méditerranéenne."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de François Ier sur les Suisses, en Italie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Marignan, en Lombardie, en Italie."}
  ]},
  {name:"Bataille de Pavie — Lombardie, Italie", lat:45.19, lng:9.16, radius:3000,
   desc:"En 1525, la capture de François Ier consacra la puissance de Charles Quint.",
   photo:"events/bataille_de_pavie.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1525, sur un champ de désastre, un roi orgueilleux tombe aux mains de l'ennemi ; du fond de sa geôle, il n'aura plus que son honneur à sauver."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1525, un roi est fait prisonnier et écrit que tout est perdu « fors l'honneur », dans le nord d'une péninsule méditerranéenne."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La capture de François Ier par Charles Quint, en Italie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Pavie, en Lombardie, en Italie."}
  ]},
  {name:"Massacre de la Saint-Barthélemy — Paris, France", lat:48.856, lng:2.34, radius:3000,
   desc:"En 1572, des milliers de protestants furent tués à Paris et en province.",
   photo:"events/massacre_de_la_saint-barthelemy.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un matin d'août 1572, dès les premières cloches, une capitale sombre dans la folie ; on égorge par milliers, de porte en porte, au nom de la foi."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Un matin d'août 1572, au son d'un tocsin, une tuerie religieuse ensanglante une capitale, en Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le massacre des protestants, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le massacre de la Saint-Barthélemy, à Paris, en France."}
  ]},
  {name:"Bataille de la Montagne Blanche — Prague, Tchéquie", lat:50.08, lng:14.32, radius:2500,
   desc:"En 1620, la défaite tchèque ouvrit trois siècles de domination des Habsbourg.",
   photo:"events/bataille_de_la_montagne_blanche.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1620, en à peine une heure, une armée s'effondre sous les murs d'une capitale ; pour tout un peuple commence alors une longue servitude."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1620, une défaite sur une colline aux abords d'une capitale ouvre une longue nuit pour une noblesse, en Europe centrale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La défaite des insurgés protestants face aux Habsbourg, en Tchéquie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de la Montagne Blanche, près de Prague, en Tchéquie."}
  ]},
  {name:"Traités de Westphalie — Münster, Allemagne", lat:51.963, lng:7.626, radius:1500,
   desc:"En 1648, ces traités mirent fin à la guerre de Trente Ans et fondèrent l'ordre des États modernes.",
   photo:"events/traites_de_westphalie.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1648, après trente années de fer et de feu, quelques signatures font enfin taire les armes de tout un continent et dessinent un monde d'États égaux."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1648, une paix signée dans deux villes met fin à trente ans de guerre et fonde un ordre d'États souverains, en Europe centrale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La fin de la guerre de Trente Ans, en Allemagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les traités de Westphalie, à Münster, en Allemagne."}
  ]},
  {name:"Bataille de Rocroi — Ardennes, France", lat:49.92, lng:4.52, radius:2500,
   desc:"En 1643, la victoire française brisa la réputation des tercios espagnols.",
   photo:"events/bataille_de_rocroi.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1643, un général à peine sorti de l'enfance fait ployer puis tomber une infanterie en carrés qu'on croyait imbattable ; la gloire d'une vieille puissance vacille."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1643, un très jeune général abat une invincible infanterie carrée, sur une frontière du nord d'un royaume d'Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire sur les tercios espagnols, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Rocroi, dans les Ardennes, en France."}
  ]},
  {name:"Bataille de Poltava — Ukraine", lat:49.6, lng:34.55, radius:5000,
   desc:"En 1709, Pierre le Grand écrasa Charles XII, faisant de la Russie une grande puissance.",
   photo:"events/bataille_de_poltava.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1709, un foudre de guerre venu du Nord, invaincu jusque-là, s'égare et se brise loin de ses bases ; une puissance nouvelle prend sa place au soleil."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1709, un roi guerrier du Nord est défait au terme d'une marche épuisante vers l'est, avènement d'une nouvelle grande puissance, dans les plaines de l'Est."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de Pierre le Grand sur la Suède, en Ukraine."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Poltava, en Ukraine."}
  ]},
  {name:"Bataille des plaines d'Abraham — Québec, Canada", lat:46.802, lng:-71.22, radius:2000,
   desc:"En 1759, la victoire britannique décida du sort de la Nouvelle-France.",
   photo:"events/bataille_de_plaines_d_abraham.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1759, à l'aube, sur une hauteur dominant un grand fleuve, une bataille brève emporte les deux chefs adverses et fait basculer tout un empire d'outre-mer."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1759, sur un plateau dominant un grand fleuve, les deux généraux périssent et une colonie change de mains, en Amérique du Nord."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La prise de Québec par les Britanniques, au Canada."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille des plaines d'Abraham, à Québec, au Canada."}
  ]},
  {name:"Boston Tea Party — Massachusetts, USA", lat:42.352, lng:-71.051, radius:500,
   desc:"En 1773, des colons jetèrent à la mer la cargaison de thé, prélude à la révolution américaine.",
   photo:"events/boston_tea_party.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Par une nuit de 1773, des hommes au visage grimé jettent à la mer, caisse après caisse, une marchandise honnie ; ce défi à l'impôt met le feu aux poudres."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1773, des colons déguisés noient une cargaison taxée dans un port, étincelle d'une révolte, sur la côte est d'un continent."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La révolte du thé, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Boston Tea Party, à Boston, aux États-Unis."}
  ]},
  {name:"Bataille de Saratoga — New York, USA", lat:43.01, lng:-73.64, radius:4000,
   desc:"En 1777, la victoire américaine décida la France à entrer en guerre.",
   photo:"events/bataille_de_saratoga.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1777, la victoire inespérée d'une poignée de rebelles décide une vieille monarchie à entrer dans leur guerre ; leur cause, soudain, n'est plus perdue."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1777, une victoire insurgée convainc une monarchie européenne de s'allier à de jeunes rebelles, dans l'est d'un continent."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le tournant de la guerre d'Indépendance, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Saratoga, dans l'État de New York, aux États-Unis."}
  ]},
  {name:"Bataille de Fort Alamo — Texas, USA", lat:29.426, lng:-98.486, radius:500,
   desc:"En 1836, la résistance héroïque au siège devint un symbole de l'indépendance texane.",
   photo:"events/bataille_de_fort_alamo.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1836, une poignée d'hommes défend jusqu'au dernier les murs d'une vieille mission ; leur mort deviendra un cri qui embrasera tout un peuple."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1836, une mission fortifiée tombe après un siège où tous les défenseurs périssent, devenant un cri de ralliement, dans le sud d'un continent."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le siège de l'Alamo, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de l'Alamo, à San Antonio (Texas), aux États-Unis."}
  ]},
  {name:"Serment / Cri de Dolores — Guanajuato, Mexique", lat:21.156, lng:-100.934, radius:800,
   desc:"En 1810, l'appel du curé Hidalgo lança la guerre d'indépendance mexicaine.",
   photo:"events/grito_de_dolores.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"À l'aube de 1810, du haut d'un clocher de village, la voix d'un curé lance un appel qui, de bouche en bouche, soulève tout un pays contre ses maîtres."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"À l'aube de 1810, un prêtre lance depuis un clocher un appel qui donne le coup d'envoi d'une guerre d'indépendance, en Amérique centrale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le cri d'indépendance d'Hidalgo, au Mexique."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Cri de Dolores, au village de Dolores (Guanajuato), au Mexique."}
  ]},
  {name:"Bataille de Boyacá — Boyacá, Colombie", lat:5.45, lng:-73.42, radius:2000,
   desc:"En 1819, la victoire de Bolívar scella l'indépendance de la Nouvelle-Grenade.",
   photo:"events/bataille_de_boyaca.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1819, au sortir d'une marche insensée par-dessus des cimes glacées, une armée exténuée fond sur l'ennemi et, en une heure, arrache la liberté d'une nation."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1819, après une traversée héroïque de hauts sommets, une victoire éclair sur un pont libère un territoire, dans le nord des Andes."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de Bolívar, en Colombie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Boyacá, dans le Boyacá, en Colombie."}
  ]},
  {name:"Bataille d'Ayacucho — Ayacucho, Pérou", lat:-13.28, lng:-74.0, radius:3000,
   desc:"En 1824, cette victoire scella l'indépendance de l'Amérique du Sud espagnole.",
   photo:"events/bataille_d_ayacucho.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1824, sur un toit du monde battu par les vents, une dernière grande bataille referme trois siècles d'un joug venu d'outre-mer ; tout un continent respire."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1824, sur un haut plateau andin, une bataille met fin à trois siècles de domination sur tout un continent."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La dernière grande bataille de l'indépendance sud-américaine, au Pérou."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Ayacucho, dans la région d'Ayacucho, au Pérou."}
  ]},
  {name:"Bataille de Cajamarca — Cajamarca, Pérou", lat:-7.16, lng:-78.51, radius:2000,
   desc:"En 1532, la capture de l'Inca Atahualpa livra l'empire inca à Pizarro.",
   photo:"events/bataille_de_cajamarca.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1532, sur une place de haute montagne, quelques centaines d'étrangers saisissent par traîtrise un souverain porté sur un trône ; sa rançon emplira une pièce d'or."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1532, sur une place, une poignée d'aventuriers capturent par ruse un empereur porté en litière, sur un haut plateau andin."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La capture d'Atahualpa par Pizarro, au Pérou."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Cajamarca, à Cajamarca, au Pérou."}
  ]},
  {name:"Débarquement de Christophe Colomb — Bahamas", lat:24.05, lng:-74.5, radius:6000,
   desc:"En 1492, Colomb toucha une île des Caraïbes, premier contact durable Europe-Amériques.",
   photo:"events/debarquement_de_christophe_colomb.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En octobre 1492, au terme de longues semaines à guetter la terre, des voiles touchent une petite île inconnue ; sans le savoir, deux mondes viennent de se rencontrer."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En octobre 1492, après une longue traversée océanique, un navigateur aborde une petite île — un contact qui bouleversera deux mondes, dans un archipel des Caraïbes."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le premier débarquement de Colomb, aux Bahamas."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le débarquement de Colomb, à Guanahani, aux Bahamas."}
  ]},
  {name:"Débarquement de Cook à Botany Bay — Sydney, Australie", lat:-34.0, lng:151.22, radius:3000,
   desc:"En 1770, James Cook aborda la côte est, prélude à la colonisation britannique.",
   photo:"events/botany_bay.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1770, au bout du monde, un navigateur aborde une baie où fleurissent mille plantes inconnues ; il ouvre, sans le voir, la voie à une colonisation lointaine."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1770, un navigateur cartographe aborde une baie foisonnante de plantes nouvelles, sur la côte est d'un continent austral."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le débarquement de Cook, en Australie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le débarquement à Botany Bay, près de Sydney, en Australie."}
  ]},
  {name:"Traité de Waitangi — Northland, Nouvelle-Zélande", lat:-35.267, lng:174.08, radius:600,
   desc:"En 1840, ce traité entre la Couronne et des chefs maoris fonda la colonie.",
   photo:"events/traite_de_waitangi.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1840, sous une tente fouettée par le vent du grand large, une couronne d'ailleurs et les chefs d'un peuple ancien apposent leur marque sur un pacte que l'on débat encore."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1840, sous une tente, une couronne lointaine et des chefs autochtones signent un traité fondateur, sur une île du Pacifique Sud."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le traité entre la Couronne et les Maoris, en Nouvelle-Zélande."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le traité de Waitangi, dans le Northland, en Nouvelle-Zélande."}
  ]},
  {name:"Bataille d'Austerlitz — Moravie, Tchéquie", lat:49.128, lng:16.762, radius:5000,
   desc:"En 1805, la victoire de Napoléon sur les Austro-Russes est son chef-d'œuvre tactique.",
   photo:"events/bataille_d_austerlitz.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un matin glacé de décembre 1805, un soleil crève la brume au-dessus de plateaux gelés ; en quelques heures, un chef génial piège des armées supérieures et entre dans la légende."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1805, un chef-d'œuvre tactique « des trois empereurs », un soleil perçant la brume, dans une région d'Europe centrale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire napoléonienne des Trois Empereurs, en Tchéquie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Austerlitz, en Moravie, en Tchéquie."}
  ]},
  {name:"Bataille de la Moskova (Borodino) — Russie", lat:55.52, lng:35.82, radius:6000,
   desc:"En 1812, la bataille la plus sanglante de la campagne de Russie ouvrit la route de Moscou.",
   photo:"events/bataille_de_la_moskova.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1812, devant un mamelon changé en charnier, une armée l'emporte au prix de son propre sang ; devant elle s'ouvre une capitale bientôt livrée aux flammes."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1812, une boucherie devant une redoute, victoire à la Pyrrhus ouvrant une capitale bientôt en flammes, dans les plaines de l'Est."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La bataille sanglante de la campagne de 1812, en Russie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Borodino (la Moskova), en Russie."}
  ]},
  {name:"Bataille de Leipzig — Saxe, Allemagne", lat:51.32, lng:12.4, radius:6000,
   desc:"En 1813, la « bataille des Nations » précipita la chute de l'Empire napoléonien.",
   photo:"events/bataille_de_leipzig.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1813, tout un continent ligué déferle sur un conquérant isolé ; sous le nombre, la plus grande bataille de l'ère l'engloutit."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1813, un immense choc « des Nations » où une coalition de tout un continent submerge un empereur, en Europe centrale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La bataille des Nations, en Allemagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Leipzig, en Saxe, en Allemagne."}
  ]},
  {name:"Sacre de Napoléon — Paris, France", lat:48.853, lng:2.349, radius:400,
   desc:"En 1804, Napoléon se couronna empereur dans la cathédrale Notre-Dame.",
   photo:"events/sacre_de_napoleon.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1804, sous les ors d'une cathédrale illuminée, un homme parti de rien saisit lui-même la couronne et se la pose sur le front ; nul ne la lui aura donnée."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1804, un nouveau maître prend la couronne des mains du pape pour se la poser lui-même, dans une cathédrale d'une grande capitale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le sacre impérial de Napoléon, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le sacre de Napoléon, à Paris, en France."}
  ]},
  {name:"Bataille de Valmy — Marne, France", lat:49.08, lng:4.77, radius:2500,
   desc:"En 1792, cette canonnade sauva la jeune République face aux Prussiens.",
   photo:"events/bataille_de_valmy.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1792, sous la pluie et la boue, quelques salves de canon et un cri jailli des rangs suffisent à faire refluer une armée d'invasion ; une révolution est sauvée."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1792, une simple canonnade suffit à faire reculer une armée d'invasion et à sauver une jeune république, dans le nord-est d'un pays d'Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire révolutionnaire, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Valmy, dans la Marne, en France."}
  ]},
  {name:"Exécution de Louis XVI — Paris, France", lat:48.8656, lng:2.3212, radius:400,
   desc:"En 1793, le roi fut guillotiné sur l'actuelle place de la Concorde.",
   photo:"events/execution_de_louis_XVI.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un matin glacé de janvier 1793, sur une place noire de monde, un roi gravit les marches d'une machine de mort ; un roulement de tambours couvre ses derniers mots."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En janvier 1793, un roi est décapité en public sur une grande place, au roulement des tambours, dans une capitale d'Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'exécution de Louis XVI, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'exécution de Louis XVI, à Paris, en France."}
  ]},
  {name:"Bataille des Pyramides — Le Caire, Égypte", lat:30.02, lng:31.13, radius:4000,
   desc:"En 1798, Bonaparte battit les Mamelouks lors de la campagne d'Égypte.",
   photo:"events/bataille_des_pyramides.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1798, sous le regard de géants de pierre dressés depuis des millénaires, un général lance ses hommes en leur rappelant que du haut de ces monuments, les siècles les contemplent."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1798, une victoire en vue de monuments millénaires, un général haranguant ses troupes, dans le nord-est de l'Afrique."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de Bonaparte sur les Mamelouks, en Égypte."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille des Pyramides, près du Caire, en Égypte."}
  ]},
  {name:"Bataille d'Aboukir (navale) — Égypte", lat:31.31, lng:30.1, radius:8000,
   desc:"En 1798, Nelson détruisit la flotte française, isolant l'armée d'Égypte.",
   photo:"events/bataille_d_aboukir_(navale).jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Une nuit de 1798, une flotte assoupie au mouillage est anéantie dans les ténèbres ; l'explosion d'un colosse illumine la mer et scelle le sort d'une armée abandonnée sur un rivage lointain."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1798, l'anéantissement nocturne d'une flotte à l'ancre, un vaisseau amiral explosant, sur une côte du nord-est de l'Afrique."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de Nelson sur la flotte française, en Égypte."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Aboukir, dans la baie d'Aboukir, en Égypte."}
  ]},
  {name:"Attaque de Pearl Harbor — Hawaï, USA", lat:21.364, lng:-157.95, radius:3000,
   desc:"Le 7 décembre 1941, l'attaque japonaise fit entrer les États-Unis dans la guerre.",
   photo:"events/attaque_de_pearl_harbor.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un dimanche matin de 1941, le calme d'un port ensoleillé est déchiré par un ciel soudain noir d'avions ; en quelques minutes, la paix d'un géant s'effondre dans les flammes."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Un dimanche matin de 1941, un raid aérien surprise sur une base navale — « jour d'infamie » — sur une île du Pacifique."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'attaque surprise sur une flotte au mouillage, aux États-Unis (Hawaï)."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'attaque de Pearl Harbor, à Hawaï, aux États-Unis."}
  ]},
  {name:"Débarquement d'Inchon — Corée du Sud", lat:37.47, lng:126.62, radius:3000,
   desc:"En 1950, le débarquement audacieux de MacArthur renversa le cours de la guerre de Corée.",
   photo:"events/debarquement_d_inchon.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1950, profitant de marées démesurées que tous jugeaient un obstacle, un débarquement surgit là où nul ne l'attendait et prend l'ennemi dans le dos ; une guerre se renverse."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1950, un débarquement amphibie dans un port aux marées extrêmes, pari audacieux prenant l'ennemi à revers, en Asie de l'Est."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le débarquement de MacArthur, en Corée du Sud."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le débarquement d'Inchon, près de Séoul, en Corée du Sud."}
  ]},
  {name:"Bataille de Gallipoli — Çanakkale, Turquie", lat:40.23, lng:26.28, radius:6000,
   desc:"En 1915-1916, l'échec allié dans les Dardanelles coûta des centaines de milliers de vies.",
   photo:"events/bataille_de_gallipoli.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1915, sur des falaises battues par la mer, un assaut venu du large s'enlise dans le sang ; loin de chez eux, des soldats des antipodes y forgent une légende amère."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1915, une débâcle alliée sur une presqu'île commandant un détroit, baptême du feu meurtrier de jeunes nations, au carrefour de deux continents."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'échec allié des Dardanelles, en Turquie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Gallipoli, à Çanakkale, en Turquie."}
  ]},
  {name:"Bataille de la Somme — Somme, France", lat:50.01, lng:2.68, radius:8000,
   desc:"En 1916, l'offensive fit plus d'un million de victimes, symbole de l'hécatombe industrielle.",
   photo:"events/bataille_de_la_somme.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1916, au premier matin d'une immense offensive, une armée perd en quelques heures plus d'hommes que jamais ; bientôt, d'étranges carapaces d'acier rampent dans la boue."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1916, une offensive dont le premier jour reste le plus sanglant d'une armée, avec les premiers chars, dans le nord d'un pays d'Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'offensive meurtrière de 1916, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de la Somme, dans la Somme, en France."}
  ]},
  {name:"Bataille de la Marne (1914) — Marne, France", lat:48.96, lng:3.39, radius:9000,
   desc:"En 1914, le « miracle de la Marne » stoppa l'avancée allemande sur Paris.",
   photo:"events/bataille_de_la_marne.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1914, à quelques lieues d'une capitale menacée, un ultime sursaut arrête net l'envahisseur ; on raconte que des voitures de place y portèrent les renforts."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1914, un sursaut sauve une capitale, des renforts acheminés au front en taxis réquisitionnés, dans le nord-est d'un pays d'Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le « miracle » qui sauva Paris, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de la Marne, dans la Marne, en France."}
  ]},
  {name:"Révolution d'Octobre — Saint-Pétersbourg, Russie", lat:59.941, lng:30.375, radius:2000,
   desc:"En 1917, la prise du pouvoir bolchevique bouleversa le XXe siècle.",
   photo:"events/revolution_d_octobre.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Une nuit d'octobre 1917, le canon d'un navire tonne à blanc sur un fleuve ; à ce signal, on prend d'assaut le siège du pouvoir, et un monde ancien s'écroule."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En octobre 1917, un coup de force autour d'un palais et la salve d'un croiseur, dans une capitale du Nord, sur la Baltique."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La révolution bolchevique, en Russie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La révolution d'Octobre, à Saint-Pétersbourg, en Russie."}
  ]},
  {name:"Armistice de Rethondes — Oise, France", lat:49.427, lng:2.906, radius:500,
   desc:"Le 11 novembre 1918, l'armistice signé dans un wagon mit fin à la Grande Guerre.",
   photo:"events/armistice_du_11_novembre_1918.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un matin de novembre 1918, dans la clairière silencieuse d'une forêt, quelques signatures échangées à bord d'un train font enfin taire quatre années de canons."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En novembre 1918, un cessez-le-feu signé dans un wagon au cœur d'une forêt, à la onzième heure du onzième jour, dans le nord d'un pays d'Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La signature de l'armistice de 1918, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'armistice de 1918, à Rethondes (Oise), en France."}
  ]},
  {name:"Évacuation de Dunkerque — Nord, France", lat:51.035, lng:2.376, radius:4000,
   desc:"En 1940, l'opération Dynamo sauva 340 000 soldats alliés encerclés.",
   photo:"events/evacuation_de_dunkerque.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Au printemps 1940, acculée à la mer et pilonnée sans répit, une armée entière est arrachée aux plages par une flottille hétéroclite de petits bateaux."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1940, des centaines de milliers de soldats encerclés sont évacués depuis une plage sous les bombes, sur une côte du nord d'un pays d'Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'évacuation alliée de 1940, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'évacuation de Dunkerque, dans le Nord, en France."}
  ]},
  {name:"Bataille d'El Alamein — Égypte", lat:30.83, lng:28.95, radius:7000,
   desc:"En 1942, la victoire britannique renversa la guerre du désert en Afrique du Nord.",
   photo:"events/bataille_d_el_alamein.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"À l'automne 1942, dans les sables brûlants d'un désert côtier, une ligne tient enfin et brise l'élan d'une armée qui se croyait irrésistible."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1942, dans un désert côtier, un verrou stoppe une avancée vers un canal stratégique, en Afrique du Nord-Est."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le tournant de la guerre du désert, en Égypte."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'El Alamein, sur la côte égyptienne, en Égypte."}
  ]},
  {name:"Libération de Paris — France", lat:48.856, lng:2.351, radius:4000,
   desc:"En août 1944, l'insurrection et l'arrivée des Alliés libérèrent la capitale.",
   photo:"events/liberation_de_paris.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En août 1944, une ville se soulève et des blindés amis franchissent ses portes ; à la volée, toutes les cloches saluent la fin de longues années d'occupation."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En août 1944, une insurrection relayée par une division blindée ; toutes les cloches sonnent la libération d'une capitale d'Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La libération de la capitale, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La libération de Paris, en France."}
  ]},
  {name:"Bataille des Ardennes — Belgique", lat:50.1, lng:5.72, radius:9000,
   desc:"Fin 1944, la dernière offensive allemande à l'ouest échoua dans la neige.",
   photo:"events/bataille_des_ardennes.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"À l'hiver 1944, une dernière ruée jaillit d'une forêt sous la neige ; sommé de se rendre, un général cerné répond d'un seul mot méprisant."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"À l'hiver 1944, une ultime offensive surprise dans une forêt enneigée ; un général assiégé répond par un seul mot, dans le nord d'un pays d'Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La dernière grande offensive allemande de 1944, en Belgique."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille des Ardennes, en Belgique."}
  ]},
  {name:"Prise du Reichstag — Berlin, Allemagne", lat:52.5186, lng:13.3762, radius:500,
   desc:"En 1945, le drapeau soviétique hissé sur le Reichstag symbolisa la chute du Reich.",
   photo:"events/prise_du_reichstag.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Au printemps 1945, dans une capitale en cendres et sous les dernières fusillades, des soldats se hissent au sommet d'un édifice éventré pour y dresser leurs couleurs ; une guerre touche à sa fin."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Au printemps 1945, un drapeau hissé sur le dôme d'un parlement en ruine, image de la chute d'un régime, dans une capitale d'Europe centrale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La chute de Berlin, en Allemagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise du Reichstag, à Berlin, en Allemagne."}
  ]},
  {name:"Bombardement de Nagasaki — Japon", lat:32.773, lng:129.86, radius:2500,
   desc:"Le 9 août 1945, la seconde bombe atomique précipita la capitulation japonaise.",
   photo:"events/bombardement_de_nagasaki.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Trois jours après l'inimaginable, en août 1945, un second soleil aveuglant fond sur une ville portuaire ; l'humanité mesure enfin de quoi elle est capable."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Le 9 août 1945, la seconde arme nucléaire de l'histoire frappe une ville portuaire, trois jours après une première, sur un archipel d'Asie de l'Est."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La deuxième bombe atomique, au Japon."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le bombardement de Nagasaki, au Japon."}
  ]},
  {name:"Conférence de Yalta — Crimée", lat:44.47, lng:34.14, radius:600,
   desc:"En février 1945, les trois Grands y dessinèrent l'après-guerre.",
   photo:"events/conference_de_yalta.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En février 1945, dans un palais face à la mer, trois hommes épuisés penchés sur une carte dessinent le monde d'après — et, sans le dire, ses futures fractures."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En février 1945, trois dirigeants alliés se partagent le monde d'après-guerre dans un palais au bord de la mer Noire, sur une péninsule."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La rencontre des trois Grands, en Crimée."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La conférence de Yalta, en Crimée."}
  ]},
  {name:"Procès de Nuremberg — Bavière, Allemagne", lat:49.453, lng:11.081, radius:600,
   desc:"En 1945-1946, les dignitaires nazis furent jugés, fondant le droit pénal international.",
   photo:"events/proces_de_nuremberg.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1945, dans le prétoire d'une ville en ruines, les maîtres déchus d'un régime répondent enfin de leurs crimes ; naît là une justice qui dépasse les nations."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1945-1946, d'anciens dignitaires d'un régime déchu sont jugés — acte de naissance d'une justice internationale, en Europe centrale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le procès des dignitaires nazis, en Allemagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le procès de Nuremberg, en Bavière, en Allemagne."}
  ]},
  {name:"Pont aérien de Berlin — Allemagne", lat:52.482, lng:13.4, radius:2000,
   desc:"En 1948-1949, un pont aérien ravitailla Berlin-Ouest bloqué par les Soviétiques.",
   photo:"events/pont_aerien_de_berlin.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1948, une ville encerclée et privée de tout refuse de plier à la faim ; jour et nuit, un ballet ininterrompu d'avions la fait vivre par le ciel."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1948-1949, une ville assiégée par un blocus terrestre est ravitaillée par les airs, un avion toutes les quelques minutes, en Europe centrale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le blocus brisé par les airs, en Allemagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le pont aérien de Berlin, en Allemagne."}
  ]},
  {name:"Construction du mur de Berlin — Allemagne", lat:52.5163, lng:13.3777, radius:2000,
   desc:"En 1961, l'édification du mur figea la division de la ville pour 28 ans.",
   photo:"events/construction_du_mur_de_berlin.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En une nuit d'août 1961, des fils barbelés puis du béton s'élèvent en travers d'une ville endormie ; au réveil, rues et familles se retrouvent tranchées en deux."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En une nuit d'août 1961, une barrière dressée en travers d'une ville fracture familles et quartiers, dans une capitale d'Europe centrale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'édification du Mur, en Allemagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La construction du mur de Berlin, en Allemagne."}
  ]},
  {name:"Discours « I Have a Dream » — Washington, USA", lat:38.8893, lng:-77.0502, radius:500,
   desc:"En 1963, Martin Luther King galvanisa le mouvement des droits civiques.",
   photo:"events/discours_\302\253_I_Have_a_Dream_\302\273.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un jour de 1963, au pied d'un grand mémorial de marbre, devant une foule à perte de vue, une voix pose des mots sur un rêve d'égalité — et le siècle les retient."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1963, un discours pour les droits civiques prononcé au pied d'un mémorial de marbre devant une immense foule, dans une capitale d'Amérique du Nord."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le discours de Martin Luther King, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le discours « I Have a Dream », à Washington, aux États-Unis."}
  ]},
  {name:"Assassinat de JFK — Dallas, Texas, USA", lat:32.779, lng:-96.808, radius:400,
   desc:"En 1963, le président américain fut abattu dans un cortège, événement mondial.",
   photo:"events/assassinat_de_jfk.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Un midi de novembre 1963, quelques secondes de pellicule saisissent l'impensable : un cortège officiel fauché en pleine ville ; un pays perd son jeune espoir."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En novembre 1963, des coups de feu sur un cortège présidentiel traversant une place, drame filmé par un amateur, dans le sud d'un continent."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'assassinat d'un président américain, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'assassinat de JFK, à Dallas (Texas), aux États-Unis."}
  ]},
  {name:"Massacre de Tian'anmen — Pékin, Chine", lat:39.906, lng:116.391, radius:1000,
   desc:"En 1989, la répression du mouvement démocratique marqua durablement la Chine.",
   photo:"events/massacre_de_tian_anmen.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Au printemps 1989, un vent de liberté soulève une jeunesse en marche ; en une nuit, la force l'écrase, léguant au monde l'image d'un courage nu."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Au printemps 1989, la répression d'un mouvement étudiant sur une vaste place, l'image d'un homme seul face aux chars, en Asie de l'Est."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La répression du mouvement démocratique, en Chine."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Tian'anmen, à Pékin, en Chine."}
  ]},
  {name:"Libération de Nelson Mandela — Le Cap, Afrique du Sud", lat:-33.925, lng:18.424, radius:1500,
   desc:"En 1990, la libération de Mandela ouvrit la fin de l'apartheid.",
   photo:"events/liberation_de_nelson_mandela.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1990, après vingt-sept ans derrière les barreaux, un homme devenu le symbole du monde entier retrouve le grand jour, le poing dressé devant une marée de visages en larmes."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1990, un prisonnier de 27 ans devenu figure mondiale est libéré, poing levé au balcon d'un hôtel de ville, à la pointe d'un continent."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La libération de Mandela, en Afrique du Sud."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La libération de Nelson Mandela, au Cap, en Afrique du Sud."}
  ]},
  {name:"Premier vol des frères Wright — Caroline du Nord, USA", lat:36.0186, lng:-75.667, radius:600,
   desc:"En 1903, le premier vol motorisé contrôlé ouvrit l'ère de l'aviation.",
   photo:"events/premier_vol_des_freres_wright.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En décembre 1903, dans le vent glacé de dunes désertes, une frêle machine de toile et de bois s'arrache au sol pour quelques secondes — et l'humanité, enfin, prend son envol."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En décembre 1903, le premier vol motorisé contrôlé — une douzaine de secondes au-dessus des dunes — sur une côte de l'est d'un continent."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le premier vol des frères Wright, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le premier vol des frères Wright, à Kitty Hawk (Caroline du Nord), aux États-Unis."}
  ]},
  {name:"Naufrage du Titanic — Atlantique Nord", lat:41.726, lng:-49.948, radius:15000,
   desc:"En 1912, le paquebot réputé insubmersible sombra après avoir heurté un iceberg.",
   photo:"events/naufrage_du_titanic.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Par une nuit d'avril 1912, glaciale et sans lune, le plus fier des navires, qu'on jurait invincible, effleure une montagne de glace et s'enfonce lentement dans les eaux noires."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En avril 1912, un paquebot réputé insubmersible heurte un iceberg et sombre dans une nuit glaciale, au large des bancs de Terre-Neuve."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le naufrage du Titanic, dans l'Atlantique Nord."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le naufrage du Titanic, au large de Terre-Neuve, dans l'Atlantique."}
  ]},
  {name:"Ruée vers l'or de Sutter's Mill — Californie, USA", lat:38.801, lng:-120.893, radius:2000,
   desc:"En 1848, la découverte d'or déclencha une ruée qui transforma l'Ouest américain.",
   photo:"events/la_decouverte_d_or_de_sutter_s_mill.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1848, quelques paillettes scintillant au fond d'un ruisseau suffisent à jeter sur des pistes lointaines des dizaines de milliers d'hommes ivres d'un même rêve."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1848, des pépites trouvées dans le bief d'une scierie déclenchent une ruée de dizaines de milliers de chercheurs, dans l'ouest d'un continent."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La découverte d'or de Sutter's Mill, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La ruée vers l'or de 1849, en Californie, aux États-Unis."}
  ]},
  {name:"Achèvement du transcontinental — Utah, USA", lat:41.62, lng:-112.55, radius:1000,
   desc:"En 1869, la jonction des rails relia les deux côtes des États-Unis.",
   photo:"events/achevement_du_transcontinental_americain.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1869, au milieu d'un désert sans fin, un dernier clou d'or unit deux voies ferrées venues des deux océans ; un continent est désormais cousu bord à bord."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1869, un crampon d'or scelle la jonction de deux réseaux ferrés au milieu d'un vaste continent."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La jonction du chemin de fer transcontinental, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le transcontinental américain, à Promontory (Utah), aux États-Unis."}
  ]},
  {name:"Inauguration du canal de Suez — Égypte", lat:30.6, lng:32.27, radius:3000,
   desc:"En 1869, l'ouverture du canal relia Méditerranée et mer Rouge.",
   photo:"events/inauguration_du_canal_de_suez.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1869, dans les fastes et les pavillons, un cortège de navires glisse pour la première fois d'une mer à l'autre à travers les sables ; deux mondes se rapprochent."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1869, un cortège de navires pavoisés inaugure un canal reliant deux mers, sur un isthme d'Afrique du Nord-Est."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'inauguration du canal de Suez, en Égypte."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'inauguration du canal de Suez, en Égypte."}
  ]},
  {name:"Bataille de Solférino — Lombardie, Italie", lat:45.37, lng:10.57, radius:4000,
   desc:"En 1859, cette bataille sanglante inspira la fondation de la Croix-Rouge.",
   photo:"events/bataille_de_solferino.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1859, au soir d'une bataille, la vue de milliers de blessés laissés à l'agonie bouleverse un simple voyageur ; de sa pitié naîtra une grande œuvre de secours."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1859, un carnage dont l'horreur inspire à un témoin la création d'une grande organisation humanitaire, dans le nord d'une péninsule méditerranéenne."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La bataille à l'origine de la Croix-Rouge, en Italie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Solférino, en Lombardie, en Italie."}
  ]},
  {name:"Bataille de Sedan (1870) — Ardennes, France", lat:49.7, lng:4.94, radius:4000,
   desc:"En 1870, la capture de Napoléon III précipita la chute du Second Empire.",
   photo:"events/bataille_de_sedan.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1870, cerné de toutes parts, un empereur rend son épée et son armée entière ; à la nouvelle, un régime s'effondre et la rue gronde."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1870, un empereur se rend avec toute son armée après un encerclement, effondrant un régime, dans le nord-est d'un pays d'Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La capitulation de Napoléon III, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Sedan, dans les Ardennes, en France."}
  ]},
  {name:"Commune de Paris — France", lat:48.862, lng:2.34, radius:3500,
   desc:"En 1871, l'insurrection parisienne et sa répression sanglante marquèrent l'histoire ouvrière.",
   photo:"events/commune_de_paris.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Au printemps 1871, une capitale se gouverne elle-même, ivre d'un rêve d'égalité ; deux mois plus tard, une semaine de sang l'ensevelit contre le mur d'un cimetière."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Au printemps 1871, une capitale s'autogère durant deux mois avant d'être écrasée lors d'une « semaine sanglante », en Europe de l'Ouest."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La Commune insurrectionnelle, en France."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Commune de Paris, en France."}
  ]},
  {name:"Bataille d'Isandhlwana — KwaZulu-Natal, Afrique du Sud", lat:-28.35, lng:30.65, radius:3000,
   desc:"En 1879, les Zoulous infligèrent une lourde défaite à l'armée britannique.",
   photo:"events/bataille_d_isandhlwana.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1879, au pied d'une colline en forme de sphinx, une marée de guerriers presque nus submerge une troupe pourtant armée de fusils ; l'orgueil d'un empire y est englouti."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1879, des guerriers à sagaies submergent une colonne équipée de fusils modernes — un désastre colonial, dans l'est d'un pays d'Afrique australe."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La défaite britannique face aux Zoulous, en Afrique du Sud."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Isandhlwana, au KwaZulu-Natal, en Afrique du Sud."}
  ]},
  {name:"Bataille d'Adoua — Tigré, Éthiopie", lat:14.16, lng:38.9, radius:5000,
   desc:"En 1896, la victoire éthiopienne stoppa la colonisation italienne, cas unique en Afrique.",
   photo:"events/bataille_d_adoua.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1896, sur des hauteurs d'Afrique, un vieux royaume met en déroute une armée coloniale sûre d'elle et sauve, seul de tout un continent, sa liberté."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1896, un empire africain défait une puissance coloniale européenne et préserve son indépendance, dans le nord de la corne de l'Afrique."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire éthiopienne sur une puissance coloniale, en Éthiopie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Adoua, dans le Tigré, en Éthiopie."}
  ]},
  {name:"Bataille d'Omdurman — Khartoum, Soudan", lat:15.65, lng:32.48, radius:5000,
   desc:"En 1898, les mitrailleuses britanniques anéantirent l'armée mahdiste.",
   photo:"events/bataille_d_omdurman.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1898, le long d'un grand fleuve, des armes nouvelles fauchent par milliers une armée lancée à découvert ; le courage n'y peut rien contre la machine."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1898, des mitrailleuses fauchent une armée de derviches lancée à la charge — un massacre technologique, le long d'un grand fleuve d'Afrique du Nord-Est."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire britannique sur les Mahdistes, au Soudan."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Omdurman, près de Khartoum, au Soudan."}
  ]},
  {name:"Révolte des Cipayes — Delhi, Inde", lat:28.656, lng:77.241, radius:4000,
   desc:"En 1857, la grande révolte indienne ébranla la domination britannique.",
   photo:"events/revolte_des_cipayes.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1857, la rumeur de cartouches impures embrase une armée soumise ; le temps d'un été, un vieil empereur oublié est porté sur un trône d'ombre."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1857, un soulèvement déclenché par des cartouches suspectes rétablit brièvement un vieil empereur sur un trône fantoche."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La grande révolte indienne, en Inde."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La révolte des Cipayes, à Delhi, en Inde."}
  ]},
  {name:"Bataille de Panipat (1526) — Haryana, Inde", lat:29.39, lng:76.97, radius:4000,
   desc:"En 1526, Babur fonda l'Empire moghol par sa victoire décisive.",
   photo:"events/bataille_de_panipat_(1526).jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1526, le tonnerre encore inconnu du canon disperse une multitude sûre d'elle ; sur ce champ de poussière s'élève un empire promis à des siècles."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1526, artillerie et chariots enchaînés brisent une armée bien plus nombreuse, fondant un empire de plusieurs siècles."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La fondation de l'Empire moghol par Babur, en Inde."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Panipat, dans le Haryana, en Inde."}
  ]},
  {name:"Bataille de l'Hydaspe — Pendjab, Pakistan", lat:32.85, lng:73.75, radius:5000,
   desc:"En 326 av. J.-C., Alexandre vainquit le roi Pôros mais atteignit la limite de sa conquête.",
   photo:"events/bataille_de_l_hydaspe.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Vers 326 av. J.-C., sous les trombes de la mousson, un conquérant infatigable terrasse une muraille d'éléphants ; ce sera sa dernière victoire, ses hommes refusant d'aller plus loin."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 326 av. J.-C., sous la mousson, un conquérant l'emporte contre des éléphants de guerre — dernière bataille avant que ses troupes refusent d'avancer."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire d'Alexandre sur Pôros, au Pakistan."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de l'Hydaspe, au Pendjab, au Pakistan."}
  ]},
  {name:"Bataille de Tsushima — Détroit de Corée", lat:34.6, lng:129.5, radius:15000,
   desc:"En 1905, la flotte japonaise anéantit l'escadre russe, séisme géopolitique.",
   photo:"events/tsushima.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1905, dans un détroit balayé par la houle, une jeune marine d'Orient envoie par le fond une armada épuisée d'avoir fait le tour du globe ; l'ordre du monde en chancelle."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1905, une marine asiatique montante anéantit une flotte venue de l'autre bout du monde — séisme dans l'ordre colonial."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'écrasante victoire navale japonaise, au large du Japon."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Tsushima, dans le détroit de Corée, au large du Japon."}
  ]},
  {name:"Restauration Meiji — Kyoto, Japon", lat:35.021, lng:135.756, radius:2000,
   desc:"En 1868, la restauration impériale lança la modernisation fulgurante du Japon.",
   photo:"events/meiji.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1868, un archipel tourne d'un coup une page de plusieurs siècles : le sabre des guerriers s'incline devant un tout jeune souverain, et le pays se rue vers l'ère des machines."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1868, le pouvoir revient à un jeune empereur ; fin d'un régime de guerriers et bond d'un archipel vers l'ère industrielle."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La restauration impériale Meiji, au Japon."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La restauration Meiji, à Kyoto, au Japon."}
  ]},
  {name:"Bataille de Dan-no-ura — Yamaguchi, Japon", lat:33.96, lng:130.96, radius:4000,
   desc:"En 1185, cette bataille navale acheva la guerre de Genpei et fonda le shogunat.",
   photo:"events/dan_no_ura.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1185, dans un détroit où bouillonnent les courants, un clan vaincu se jette aux flots avec son enfant-souverain ; sur ces eaux s'ouvre l'âge des guerriers."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1185, une bataille navale dans un détroit à forts courants engloutit un empereur-enfant et son clan vaincu — aube d'un pouvoir guerrier."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La fin de la guerre de Genpei, au Japon."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Dan-no-ura, détroit de Shimonoseki, au Japon."}
  ]},
  {name:"Proclamation de la République populaire — Pékin, Chine", lat:39.907, lng:116.391, radius:600,
   desc:"En 1949, Mao proclama la RPC depuis la porte de la Paix céleste.",
   photo:"events/rpc_1949.JPG",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En octobre 1949, du haut d'une porte immense, une voix grave annonce à une foule sans fin la naissance d'un monde nouveau, après des décennies de fureur fratricide."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En octobre 1949, depuis le balcon d'une porte monumentale, un chef proclame une république populaire au terme d'une longue guerre civile."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La proclamation d'une grande république populaire, en Chine."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La proclamation de la RPC, à Pékin, en Chine."}
  ]},
  {name:"Révolte des Boxers — Pékin, Chine", lat:39.904, lng:116.391, radius:3000,
   desc:"En 1900, le soulèvement anti-étranger fut réprimé par une coalition internationale.",
   photo:"events/boxers.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1900, une colère ancestrale se dresse contre l'étranger ; derrière des murs assiégés, on guette des semaines durant un secours venu de loin."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1900, des sociétés secrètes d'arts martiaux se soulèvent contre les étrangers ; des légations assiégées sont délivrées par huit puissances."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La révolte des Boxers, en Chine."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La révolte des Boxers, à Pékin, en Chine."}
  ]},
  {name:"Départ de la Longue Marche — Jiangxi, Chine", lat:25.885, lng:116.035, radius:4000,
   desc:"En 1934, la retraite épique des communistes chinois sur 12 000 km forgea leur mythe.",
   photo:"events/longue_marche.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1934, une armée traquée s'élance dans une fuite interminable par-delà les monts et les torrents ; cette épreuve titanesque forgera un pouvoir et la légende de son chef."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1934, départ d'une retraite de plus de 10 000 km à travers monts et rivières, épreuve fondatrice d'un futur pouvoir et de son chef."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le début de la Longue Marche, en Chine."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Longue Marche, depuis le Jiangxi, en Chine."}
  ]},
  {name:"Offensive du Têt — Hô Chi Minh-Ville, Vietnam", lat:10.777, lng:106.7, radius:4000,
   desc:"En 1968, l'offensive surprise retourna l'opinion américaine sur la guerre.",
   photo:"events/tet.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Au cœur des fêtes du nouvel an lunaire 1968, une offensive jaillie de nulle part frappe jusqu'au cœur des villes ; à l'autre bout de la terre, une opinion bascule."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1968, une offensive surprise du nouvel an lunaire porte un commando jusque dans une ambassade — choc retournant une opinion lointaine."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'offensive du Têt, au Vietnam."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'offensive du Têt, à Saïgon (Hô Chi Minh-Ville), au Vietnam."}
  ]},
  {name:"Révolution iranienne — Téhéran, Iran", lat:35.7, lng:51.42, radius:4000,
   desc:"En 1979, la chute du chah instaura une république islamique.",
   photo:"events/revolution_iran.JPG",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1979, une marée humaine emporte un trône ; d'un long exil revient un vieil homme en robe, salué comme un guide par des millions de voix."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1979, une révolution renverse une monarchie et fait revenir d'exil un dignitaire religieux acclamé par des foules immenses."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La révolution islamique, en Iran."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La révolution iranienne, à Téhéran, en Iran."}
  ]},
  {name:"Boston / Bataille de Bunker Hill — Massachusetts, USA", lat:42.376, lng:-71.061, radius:800,
   desc:"En 1775, cette bataille coûteuse montra que les insurgés pouvaient tenir tête aux Britanniques.",
   photo:"events/bunker_hill.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1775, sur une hauteur dominant un port, tant de sang est versé pour emporter une position que le vainqueur en pleure sa victoire."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1775, sur une colline dominant un port, une victoire si coûteuse pour les habits rouges qu'elle eut le goût d'une défaite."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La bataille de Bunker Hill, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Bunker Hill, près de Boston, aux États-Unis."}
  ]},
  {name:"Bataille de Trenton — New Jersey, USA", lat:40.22, lng:-74.76, radius:2000,
   desc:"En 1776, Washington traversa le fleuve gelé pour une victoire surprise qui ranima la révolution.",
   photo:"events/trenton.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Au cœur d'un hiver désespéré, la nuit de Noël 1776, une troupe aux abois tente un coup d'audace dans le froid et la glace, et ranime une cause chancelante."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"La nuit de Noël 1776, une traversée de fleuve charriant des glaces permet de surprendre une garnison endormie."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire surprise de Washington, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Trenton, dans le New Jersey, aux États-Unis."}
  ]},
  {name:"Bataille de Puebla (Cinco de Mayo) — Puebla, Mexique", lat:19.05, lng:-98.19, radius:2500,
   desc:"En 1862, la victoire mexicaine sur les Français est commémorée chaque 5 mai.",
   photo:"events/puebla.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Le 5 mai 1862, une troupe en sous-nombre tient tête et fait plier une armée venue d'Europe qu'on disait imbattable."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Le 5 mai 1862, une armée en infériorité l'emporte contre un corps expéditionnaire européen réputé invincible."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire du Cinco de Mayo, au Mexique."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Puebla, à Puebla, au Mexique."}
  ]},
  {name:"Bataille de Camerone — Veracruz, Mexique", lat:18.94, lng:-96.3, radius:600,
   desc:"En 1863, la résistance héroïque de la Légion étrangère devint sa légende fondatrice.",
   photo:"events/camerone.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1863, dans une ferme écrasée de soleil, une poignée d'hommes jure de ne pas se rendre et tient tête à une marée d'assaillants jusqu'au dernier."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1863, une poignée de légionnaires retranchés dans une ferme résiste à un contre soixante ; la main de bois d'un capitaine en devint une relique."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le combat de Camerone de la Légion étrangère, au Mexique."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le combat de Camerone, dans l'État de Veracruz, au Mexique."}
  ]},
  {name:"Krach de Wall Street — New York, USA", lat:40.7069, lng:-74.0113, radius:500,
   desc:"En 1929, l'effondrement boursier déclencha la Grande Dépression mondiale.",
   photo:"events/krach_1929.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"À l'automne 1929, dans une rue étroite où bat le cœur de l'argent, les chiffres s'effondrent en cascade ; commence une décennie de misère."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En octobre 1929, un effondrement boursier dans une rue étroite de la finance ouvre une décennie de misère mondiale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le krach boursier de 1929, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le krach de Wall Street, à New York, aux États-Unis."}
  ]},
  {name:"Marche sur Rome — Italie", lat:41.902, lng:12.49, radius:3000,
   desc:"En 1922, la marche fasciste porta Mussolini au pouvoir.",
   photo:"events/marche_rome.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1922, une marée de chemises sombres converge vers une capitale ; sans presque tirer un coup, elle porte un homme au sommet de l'État."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1922, un défilé d'intimidation de chemises colorées vers une capitale ouvre les portes du pouvoir à leur chef, sans véritable combat."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La marche fasciste sur la capitale, en Italie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La marche sur Rome, à Rome, en Italie."}
  ]},
  {name:"Attentats du 11 septembre — New York, USA", lat:40.7115, lng:-74.0134, radius:1500,
   desc:"En 2001, les attaques contre les tours jumelles bouleversèrent la géopolitique mondiale.",
   photo:"events/onze_septembre.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Par un ciel pur de septembre 2001, le monde bascule en direct : deux colosses de verre s'effondrent, et une ère de certitudes avec eux."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Un matin de septembre 2001, des attaques coordonnées frappent deux tours jumelles d'un quartier d'affaires — bascule géopolitique du nouveau siècle."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Les attentats contre le World Trade Center, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les attentats du 11 septembre, à New York, aux États-Unis."}
  ]},
  {name:"Bataille de Chéronée — Béotie, Grèce", lat:38.49, lng:22.85, radius:3000,
   desc:"En 338 av. J.-C., Philippe II de Macédoine soumit les cités grecques.",
   photo:"events/cheroneen.JPG",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 338 av. J.-C., la liberté de cités jalouses s'éteint sous la lance d'un roi venu du nord ; un corps d'élite y tombe jusqu'au dernier, veillé depuis par un lion de pierre."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 338 av. J.-C., un roi du Nord soumet des cités jalouses ; un bataillon d'amants réputé invincible est anéanti sous un lion de pierre."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de Philippe II sur les cités grecques, en Grèce."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Chéronée, en Béotie, en Grèce."}
  ]},
  {name:"Bataille de Leuctres — Béotie, Grèce", lat:38.28, lng:23.14, radius:3000,
   desc:"En 371 av. J.-C., Thèbes brisa l'hégémonie spartiate.",
   photo:"events/leuctres.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 371 av. J.-C., une manœuvre audacieuse renverse sur un champ de bataille la cité de guerriers qu'on croyait invincible ; une suprématie s'écroule."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 371 av. J.-C., un ordre oblique novateur abat la suprématie d'une cité guerrière réputée imbattable."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire thébaine sur Sparte, en Grèce."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Leuctres, en Béotie, en Grèce."}
  ]},
  {name:"Fondation d'Alexandrie — Égypte", lat:31.2, lng:29.9, radius:3000,
   desc:"En 331 av. J.-C., Alexandre fonda la cité qui deviendra un phare du savoir antique.",
   photo:"events/alexandrie.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Vers 331 av. J.-C., au bord des flots, un conquérant trace au sol les contours d'une cité qui portera bientôt un phare touchant le ciel et tout le savoir du monde."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 331 av. J.-C., un conquérant fonde sur une côte une cité, futur foyer d'un phare géant et d'une bibliothèque universelle."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La fondation d'Alexandrie par Alexandre, en Égypte."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La fondation d'Alexandrie, sur le delta du Nil, en Égypte."}
  ]},
  {name:"Révolte de Boudicca — Londres, Angleterre", lat:51.51, lng:-0.09, radius:3000,
   desc:"Vers 60-61, la reine Boudicca souleva les Bretons et brûla Londinium.",
   photo:"events/boudicca.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En l'an 60, l'humiliation d'une reine embrase toute une île ; trois cités partent en fumée avant que la révolte ne soit noyée dans le sang."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En l'an 60, une reine celte outragée mène un soulèvement ; trois villes romaines sont incendiées avant l'écrasement final."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La révolte de Boudicca, en Angleterre."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La révolte de Boudicca, à Londres (Londinium), en Angleterre."}
  ]},
  {name:"Bataille de Las Navas de Tolosa — Jaén, Espagne", lat:38.28, lng:-3.58, radius:5000,
   desc:"En 1212, la coalition chrétienne remporta une victoire décisive de la Reconquista.",
   photo:"events/las_navas.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1212, des royaumes longtemps divisés unissent enfin leurs bannières et brisent la puissance d'un califat — une longue reconquête bascule."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1212, une coalition de royaumes chrétiens l'emporte sur un califat — tournant d'une longue reconquête péninsulaire."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Une victoire décisive de la Reconquista, en Espagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Las Navas de Tolosa, dans la province de Jaén, en Espagne."}
  ]},
  {name:"Chute d'Acre (1291) — Israël", lat:32.92, lng:35.07, radius:2000,
   desc:"En 1291, la prise de la dernière place forte croisée acheva les États latins d'Orient.",
   photo:"events/acre_1291.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1291, sur un rivage de Méditerranée, l'ultime forteresse tenue par des combattants venus d'Europe est emportée d'assaut ; une longue épopée guerrière s'éteint dans les vagues."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1291, le dernier bastion côtier d'une présence latine en Orient tombe — fin de deux siècles de croisades."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La prise d'Acre par les Mamelouks, en Israël."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La chute d'Acre, en Galilée, en Israël."}
  ]},
  {name:"Bataille de Morat — Fribourg, Suisse", lat:46.93, lng:7.11, radius:2500,
   desc:"En 1476, les Confédérés écrasèrent Charles le Téméraire.",
   photo:"events/morat.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1476, l'orgueil d'un prince conquérant se brise une seconde fois sur la muraille d'hommes d'un petit peuple libre ; sa fin est déjà proche."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1476, des piquiers montagnards écrasent un duc ambitieux — deuxième d'une série de défaites qui lui coûtera bientôt la vie."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire des cantons confédérés sur Charles le Téméraire, en Suisse."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Morat, canton de Fribourg, en Suisse."}
  ]},
  {name:"Arrivée de la peste noire — Messine, Sicile, Italie", lat:38.193, lng:15.554, radius:3000,
   desc:"En 1347, des navires génois introduisirent la peste en Europe par ce port.",
   photo:"events/peste_1347.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1347, des navires abordent, cales pleines de morts et d'agonisants ; dans leurs flancs voyage un fléau qui va faucher un tiers d'un continent."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1347, des navires accostent avec des équipages mourants, portant d'Orient un fléau qui allait emporter un tiers d'un continent."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'arrivée de la peste noire en Europe, en Italie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'arrivée de la peste noire, à Messine (Sicile), en Italie."}
  ]},
  {name:"Bataille de Lechfeld — Bavière, Allemagne", lat:48.27, lng:10.86, radius:4000,
   desc:"En 955, Otton Ier arrêta les Hongrois, sécurisant l'Europe centrale.",
   photo:"events/lechfeld.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 955, une seule journée met fin à des décennies de raids venus de l'est ; le roi vainqueur se voit déjà ceindre une couronne d'empire."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 955, une victoire met fin aux raids dévastateurs de cavaliers venus de l'est et sacre un roi bientôt empereur."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire d'Otton Ier sur les Hongrois, en Allemagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille du Lechfeld, près d'Augsbourg (Bavière), en Allemagne."}
  ]},
  {name:"Bataille de Stamford Bridge — Yorkshire, Angleterre", lat:53.99, lng:-0.91, radius:2000,
   desc:"En 1066, Harold repoussa les Norvégiens juste avant Hastings.",
   photo:"events/stamford_bridge.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En septembre 1066, un roi triomphe des pillards du Nord ; mais sa gloire n'aura duré qu'un souffle, un autre péril montant déjà de la mer, au sud."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En septembre 1066, un roi saxon défait des envahisseurs venus du Nord — triomphe éphémère à trois semaines d'un désastre au sud."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de Harold sur les Norvégiens, en Angleterre."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Stamford Bridge, dans le Yorkshire, en Angleterre."}
  ]},
  {name:"Bataille de Nicopolis — Bulgarie", lat:43.71, lng:24.9, radius:4000,
   desc:"En 1396, la dernière grande croisade échoua face aux Ottomans.",
   photo:"events/nicopolis.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1396, la fleur d'une chevalerie trop sûre d'elle vient se briser, au bord d'un grand fleuve, contre un adversaire qu'elle méprisait."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1396, une chevalerie occidentale trop confiante est mise en déroute par les Ottomans sur les rives d'un grand fleuve — dernière grande croisade."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Une croisade brisée sur le Danube, en Bulgarie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Nicopolis, sur le Danube, en Bulgarie."}
  ]},
  {name:"Bataille de Varna — Bulgarie", lat:43.21, lng:27.91, radius:4000,
   desc:"En 1444, la mort du roi Ladislas scella l'échec de la croisade anti-ottomane.",
   photo:"events/varna.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1444, l'imprudence d'un jeune roi lui coûte la vie dans une charge folle ; avec lui s'effondre le dernier espoir d'arrêter une marée montant de l'Est."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1444, un jeune roi tombe en chargeant témérairement, brisant les espoirs d'endiguer une avancée ottomane vers l'Europe."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Une croisade brisée près de la mer Noire, en Bulgarie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Varna, sur la mer Noire, en Bulgarie."}
  ]},
  {name:"Bataille de Blenheim (Höchstädt) — Bavière, Allemagne", lat:48.633, lng:10.627, radius:4000,
   desc:"En 1704, Marlborough et le Prince Eugène brisèrent l'armée franco-bavaroise.",
   photo:"events/blenheim.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1704, au bord d'un grand fleuve, deux généraux unis brisent l'élan d'un roi qui rêvait de dominer l'Europe."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1704, un tandem de généraux alliés l'emporte sur les rives d'un grand fleuve, coup d'arrêt aux ambitions d'un Roi-Soleil."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de Marlborough, en Allemagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Blenheim, sur le Danube (Bavière), en Allemagne."}
  ]},
  {name:"Bataille de Fontenoy — Hainaut, Belgique", lat:50.55, lng:3.47, radius:2500,
   desc:"En 1745, la victoire française illustra la courtoisie guerrière du XVIIIe siècle.",
   photo:"events/fontenoy.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1745, deux armées s'affrontent des heures durant sur une plaine indécise ; c'est finalement l'arrivée d'une réserve et le sang-froid d'un vieux maréchal qui emportent la victoire."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1745, une victoire précédée, dit la légende, d'une invitation courtoise faite à l'adversaire de tirer le premier."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire du maréchal de Saxe, en Belgique."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Fontenoy, dans le Hainaut, en Belgique."}
  ]},
  {name:"Bataille de Friedland — Kaliningrad, Russie", lat:54.44, lng:21.02, radius:4000,
   desc:"En 1807, la victoire de Napoléon força la Russie à négocier la paix de Tilsit.",
   photo:"events/friedland.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1807, dos au fleuve et sans issue, une armée est brisée ; peu après, deux empereurs se donnent l'accolade sur un radeau, au milieu des eaux."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1807, une armée est acculée à un fleuve ; la défaite pousse deux empereurs à sceller une paix sur un radeau quelques jours plus tard."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Une victoire napoléonienne avant Tilsit, dans l'actuelle Russie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Friedland, région de Kaliningrad, en Russie."}
  ]},
  {name:"Bataille de Wagram — Basse-Autriche, Autriche", lat:48.3, lng:16.58, radius:5000,
   desc:"En 1809, Napoléon vainquit l'Autriche au terme d'une bataille massive.",
   photo:"events/wagram.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1809, après un premier assaut noyé dans le sang au bord d'un fleuve, un déluge de feu jamais vu emporte enfin la décision."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1809, une concentration d'artillerie inédite arrache la victoire après un premier échec sanglant sur une île fluviale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire de Napoléon sur les Autrichiens, en Autriche."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Wagram, au nord de Vienne, en Autriche."}
  ]},
  {name:"Bataille de Navarin — Messénie, Grèce", lat:36.92, lng:21.68, radius:7000,
   desc:"En 1827, la flotte ottomane fut détruite, favorisant l'indépendance grecque.",
   photo:"events/navarin.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1827, prises au piège d'une rade close, les voiles d'un empire brûlent sous le feu croisé de trois puissances venues au secours d'un peuple insurgé."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1827, trois marines européennes anéantissent une flotte ottomane dans une rade fermée, pour soutenir une insurrection."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La destruction de la flotte ottomane, en Grèce."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Navarin, en Messénie, en Grèce."}
  ]},
  {name:"Prise d'Alger — Algérie", lat:36.78, lng:3.06, radius:3000,
   desc:"En 1830, le débarquement français ouvrit 132 ans de colonisation.",
   photo:"events/alger_1830.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1830, pour laver l'affront d'un simple geste, une flotte débarque au bord d'une baie du Sud ; commence alors plus d'un siècle d'emprise."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1830, un débarquement à l'ouest d'une baie, prétexte d'un « coup d'éventail », lance plus d'un siècle de colonisation."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La prise d'Alger, en Algérie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise d'Alger, dans la baie d'Alger, en Algérie."}
  ]},
  {name:"Bataille de Sadowa (Königgrätz) — Tchéquie", lat:50.29, lng:15.75, radius:5000,
   desc:"En 1866, la victoire prussienne assura l'unité allemande sous Berlin.",
   photo:"events/sadowa.JPG",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1866, en une seule journée, des fusils d'un genre nouveau tranchent une vieille rivalité et désignent qui bâtira un empire."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1866, une armée aux fusils se chargeant par la culasse règle en une journée la rivalité pour l'unité d'un futur empire."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La victoire prussienne sur les Autrichiens, en Tchéquie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Sadowa, en Bohême, en Tchéquie."}
  ]},
  {name:"Bataille de Koursk — Russie", lat:51.0, lng:36.2, radius:9000,
   desc:"En 1943, la plus grande bataille de chars de l'histoire brisa l'offensive allemande à l'Est.",
   photo:"events/koursk.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"À l'été 1943, dans la fournaise et la poussière, des milliers de monstres d'acier s'entrechoquent — jamais la terre n'avait porté pareil choc."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"À l'été 1943, le plus grand affrontement blindé de l'histoire : un saillant pris en tenaille où des milliers de chars s'entrechoquent."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La plus grande bataille de chars, en Russie."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Koursk, en Russie."}
  ]},
  {name:"Bataille d'Iwo Jima — Îles Ogasawara, Japon", lat:24.78, lng:141.32, radius:3000,
   desc:"En 1945, la prise de l'île volcanique donna lieu à une photo mondialement célèbre.",
   photo:"events/iwo_jima.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1945, sur une île de cendre noire, un drapeau se dresse au sommet fumant ; l'instant, saisi par un objectif, deviendra éternel."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1945, un assaut sur une île volcanique de cendre noire ; un drapeau planté au sommet est immortalisé par une photo devenue icône."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La prise d'une île au mont Suribachi, dans le Pacifique."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Iwo Jima, îles Ogasawara, au Japon."}
  ]},
  {name:"Bombardement de Dresde — Saxe, Allemagne", lat:51.05, lng:13.74, radius:3000,
   desc:"En 1945, les raids alliés détruisirent la ville dans une tempête de feu.",
   photo:"events/dresde.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En février 1945, en quelques heures de feu, une ville d'art et de pierres blondes n'est plus qu'un brasier ; il n'en restera que des cendres."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En février 1945, des raids déclenchent une tempête de feu qui ravage une cité baroque surnommée « Florence de l'Elbe »."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le bombardement d'une ville baroque sur l'Elbe, en Allemagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le bombardement de Dresde, en Saxe, en Allemagne."}
  ]},
  {name:"Incendie du Reichstag — Berlin, Allemagne", lat:52.5186, lng:13.3762, radius:500,
   desc:"En 1933, l'incendie du parlement servit de prétexte à la mainmise nazie.",
   photo:"events/reichstag_1933.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1933, les flammes d'un parlement embrasent une nuit ; sur leurs cendres, un pouvoir naissant étouffe d'un coup toutes les libertés."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1933, l'incendie criminel d'un parlement sert de prétexte immédiat à la suspension des libertés et à une prise de pouvoir totale."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'incendie d'un parlement, en Allemagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'incendie du Reichstag, à Berlin, en Allemagne."}
  ]},
  {name:"Conférence de Potsdam — Brandebourg, Allemagne", lat:52.41, lng:13.07, radius:600,
   desc:"En 1945, les vainqueurs y organisèrent l'Allemagne occupée et l'ordre d'après-guerre.",
   photo:"events/potsdam.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"À l'été 1945, sous les lambris d'un palais, les maîtres d'un monde en cendres se partagent les dépouilles d'un empire abattu — déjà rongés de méfiance."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"À l'été 1945, dans un palais, trois vainqueurs — dont un remplacé en cours de route — scellent le sort d'un pays vaincu."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La conférence des vainqueurs de 1945, en Allemagne."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La conférence de Potsdam, dans le Brandebourg, en Allemagne."}
  ]},
  {name:"Crise des missiles de Cuba — Cuba", lat:22.72, lng:-83.05, radius:6000,
   desc:"En 1962, la découverte de missiles soviétiques amena le monde au bord de la guerre nucléaire.",
   photo:"events/missiles_cuba.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"À l'automne 1962, une peur inédite étreint la planète : dans les foyers, on prépare des abris et l'on guette la radio, tandis qu'au sommet des États, deux hommes retiennent la foudre."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En octobre 1962, treize jours durant, des rampes de missiles repérées sur une île tropicale amènent deux blocs au bord de l'abîme."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La crise des missiles de 1962, à Cuba."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La crise des missiles de Cuba, à Cuba."}
  ]},
  {name:"Festival de Woodstock — New York, USA", lat:41.701, lng:-74.88, radius:2000,
   desc:"En 1969, le festival réunit près de 500 000 personnes, symbole de la contre-culture.",
   photo:"events/woodstock.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"À l'été 1969, dans la boue d'un champ trempé de pluie, une marée de jeunes gens transforme trois jours de musique en manifeste d'une génération."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"À l'été 1969, un demi-million de spectateurs dans un champ boueux font d'un festival musical le symbole d'une génération."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Un festival musical mythique, aux États-Unis."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le festival de Woodstock, dans l'État de New York, aux États-Unis."}
  ]},
  {name:"Guerre du Golfe — Libération du Koweït", lat:29.37, lng:47.978, radius:5000,
   desc:"En 1991, une coalition internationale chassa l'armée irakienne du Koweït.",
   photo:"events/golfe_1991.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1991, une coalition foudroie en quelques jours un envahisseur ; derrière lui, des puits en flammes tendent sur le désert un ciel de suie."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1991, une offensive éclair d'une coalition libère un petit émirat pétrolier envahi ; des puits enflammés noircissent le ciel du désert."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La libération d'un émirat envahi, au Koweït."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La guerre du Golfe (libération du Koweït), au Koweït."}
  ]},
  {name:"Chute de Cuzco — Pérou", lat:-13.52, lng:-71.978, radius:3000,
   desc:"En 1533, la prise de la capitale inca acheva la conquête espagnole du Pérou.",
   photo:"events/cuzco_1533.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"En 1533, des étrangers en armes s'emparent d'une cité perchée dans les nuages, aux pierres si bien jointes qu'aucune lame ne s'y glisse — cœur d'un empire du soleil."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"En 1533, des conquérants prennent une capitale d'altitude aux murs de pierres parfaitement ajustées, cœur d'un empire du soleil."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La chute de la capitale inca, au Pérou."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La chute de Cuzco, dans la vallée sacrée, au Pérou."}
  ]}
];

if (typeof window !== "undefined") window.EVENTS = EVENTS;