// events.js — Mode Événements historiques (Premium)
// Même structure que data.js + champ radius (mètres) : zone consideree correcte a 100%.
// Gradient : EXPERT (contexte+date, aucun nom/lieu) -> DIFFICILE (region+epoque) -> MOYEN (evenement+zone) -> FACILE (nomme+localite)
const EVENTS = [
  {name:"Bataille de Sekigahara — Gifu, Japon", lat:35.3719, lng:136.46, radius:2500,
   desc:"Le 21 octobre 1600, la victoire de Tokugawa Ieyasu sur la coalition de l'Ouest dans cette plaine brumeuse mit fin à un siècle de guerre civile et fonda un shogunat qui régna 265 ans.",
   photo:"events/sekigahara.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Affrontement décisif de 1600 entre deux coalitions féodales, scellé par la trahison de Kobayakawa au profit du vainqueur qui fondera une dynastie de 265 ans"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de l'an 1600 dans une plaine du centre de l'archipel, période Azuchi-Momoyama"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Bataille fondatrice du shogunat Tokugawa, plaine de la région du Chūbu"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Sekigahara, préfecture de Gifu, Japon"}
  ]},
  {name:"Bataille de Waterloo — Brabant wallon, Belgique", lat:50.68, lng:4.412, radius:3000,
   desc:"Le 18 juin 1815, la défaite de Napoléon face à Wellington et Blücher mit fin aux Cent-Jours et à l'Empire, redessinant l'Europe pour un siècle.",
   photo:"events/waterloo.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Défaite finale d'un empereur revenu de l'île d'Elbe, face à une coalition anglo-prussienne, un dimanche pluvieux de juin 1815"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de 1815 au sud d'une capitale d'Europe de l'Ouest, plateau agricole"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Dernière bataille de Napoléon, Brabant wallon"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Waterloo, Belgique"}
  ]},
  {name:"Bataille de Gettysburg — Pennsylvanie, USA", lat:39.811, lng:-77.23, radius:4000,
   desc:"Du 1er au 3 juillet 1863, la plus meurtrière bataille de la guerre de Sécession (51 000 pertes) brisa l'invasion nordiste de Lee et marqua le tournant du conflit.",
   photo:"events/gettysburg.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Choc de trois jours en 1863 qui stoppa l'invasion sudiste ; le président y prononça quatre mois plus tard un discours de deux minutes resté célèbre"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille des années 1860 dans le nord-est des États-Unis, guerre civile"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tournant de la guerre de Sécession, Pennsylvanie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Gettysburg, USA"}
  ]},
  {name:"Bataille de Cannes — Pouilles, Italie", lat:41.306, lng:16.132, radius:4000,
   desc:"En 216 av. J.-C., Hannibal encercla et anéantit une armée romaine deux fois supérieure par une manœuvre d'enveloppement restée un modèle d'art militaire.",
   photo:"events/cannae.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Manœuvre d'encerclement de 216 av. J.-C. où un général carthaginois anéantit une armée deux fois supérieure, cas d'école militaire depuis 2 000 ans"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Désastre militaire de l'Antiquité dans le sud d'une péninsule méditerranéenne, IIIe siècle av. J.-C."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire d'Hannibal sur Rome, région des Pouilles"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Cannes, Italie"}
  ]},
  {name:"Bataille de Hastings — Sussex de l'Est, Angleterre", lat:50.911, lng:0.487, radius:2000,
   desc:"Le 14 octobre 1066, la victoire de Guillaume le Conquérant sur Harold II ouvrit la conquête normande de l'Angleterre et transforma sa langue et sa noblesse.",
   photo:"events/hastings.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire d'un duc normand en 1066, mort du roi adverse d'une flèche selon la légende, immortalisée sur une broderie de 70 mètres"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XIe siècle dans le sud d'une île d'Europe du Nord-Ouest"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Conquête normande de l'Angleterre, Sussex"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Hastings, Angleterre"}
  ]},
  {name:"Chute du mur de Berlin — Berlin, Allemagne", lat:52.5163, lng:13.3777, radius:1500,
   desc:"Le 9 novembre 1989, l'ouverture soudaine des points de passage précipita la fin de la division de la ville et, deux ans plus tard, celle de la guerre froide.",
   photo:"events/mur_berlin.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Effondrement d'une frontière urbaine un soir de novembre 1989, après l'annonce confuse d'un porte-parole ; la foule fit le reste à coups de marteau"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de 1989 dans une capitale d'Europe centrale coupée en deux depuis 1961"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Chute du Mur, quartier de la porte de Brandebourg"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La chute du mur de Berlin, Allemagne"}
  ]},
  {name:"Débarquement d'Omaha Beach — Calvados, France", lat:49.37, lng:-0.87, radius:3000,
   desc:"Le 6 juin 1944, le secteur le plus meurtrier du Débarquement allié coûta près de 3 000 pertes américaines en quelques heures sous le feu des falaises.",
   photo:"events/omaha_beach.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Assaut amphibie du 6 juin 1944 sur la plus sanglante des cinq plages, sous le feu croisé de bunkers perchés sur des falaises"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Opération militaire de 1944 sur une côte normande, Seconde Guerre mondiale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Débarquement allié, plages du Calvados"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Omaha Beach, Normandie, France"}
  ]},
  {name:"Assassinat de Sarajevo — Bosnie-Herzégovine", lat:43.858, lng:18.429, radius:400,
   desc:"Le 28 juin 1914, l'archiduc François-Ferdinand fut abattu par Gavrilo Princip près du pont Latin, déclenchant l'enchaînement qui mena à la Première Guerre mondiale.",
   photo:"events/sarajevo_1914.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Deux coups de feu tirés par un étudiant nationaliste en 1914, sur un couple princier héritier d'un empire, étincelle d'un embrasement mondial"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Attentat politique de 1914 dans une ville des Balkans, veille d'un conflit mondial"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Assassinat de l'archiduc François-Ferdinand, près du pont Latin"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'attentat de Sarajevo, Bosnie-Herzégovine"}
  ]},
  {name:"Bataille de Stalingrad — Volgograd, Russie", lat:48.708, lng:44.513, radius:5000,
   desc:"De 1942 à 1943, la bataille la plus meurtrière de l'histoire (près de 2 millions de victimes) marqua le tournant du front de l'Est.",
   photo:"events/stalingrad.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Siège urbain de 1942-1943 le long d'un grand fleuve, encerclement d'une VIe armée entière, tournant d'une guerre à l'Est"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille des années 1940 dans une ville industrielle du sud de la Russie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tournant du front de l'Est, sur la Volga"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Stalingrad (Volgograd), Russie"}
  ]},
  {name:"Signature de la Grande Charte — Surrey, Angleterre", lat:51.444, lng:-0.567, radius:1500,
   desc:"En 1215, à Runnymede, le roi Jean sans Terre scella la Magna Carta imposée par ses barons, jalon fondateur des limites au pouvoir royal.",
   photo:"events/magna_carta.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Document de 1215 arraché à un roi impopulaire par ses barons révoltés dans une prairie au bord d'un fleuve, ancêtre lointain des libertés civiles"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Acte politique du XIIIe siècle dans une prairie du sud de l'Angleterre"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Signature de la Magna Carta à Runnymede, comté de Surrey"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Grande Charte de Runnymede, Angleterre"}
  ]},
  {name:"Prise de la Bastille — Paris, France", lat:48.8531, lng:2.369, radius:500,
   desc:"Le 14 juillet 1789, la prise de la forteresse-prison, symbole de l'arbitraire royal, marqua le basculement de la Révolution française.",
   photo:"events/bastille.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Assaut populaire d'une forteresse-prison un 14 juillet, libérant sept détenus seulement mais renversant un symbole d'arbitraire"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Émeute fondatrice de 1789 dans l'est d'une capitale d'Europe de l'Ouest"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Prise de la Bastille, est de la capitale"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise de la Bastille, Paris, France"}
  ]},
  {name:"Bataille de Marathon — Attique, Grèce", lat:38.116, lng:23.978, radius:2500,
   desc:"En 490 av. J.-C., la victoire athénienne sur les Perses de Darius inspira la légende du messager courant annoncer le triomphe, à l'origine de la course moderne.",
   photo:"events/marathon.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de citoyens-soldats sur un empire venu de l'Est en 490 av. J.-C. ; la légende d'un coureur porteur de la nouvelle donna son nom à une épreuve sportive"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de l'Antiquité sur une plaine côtière d'une péninsule du sud-est de l'Europe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire grecque contre les Perses, plaine de l'Attique"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Marathon, Grèce"}
  ]},
  {name:"Reddition d'Appomattox — Virginie, USA", lat:37.377, lng:-78.796, radius:1500,
   desc:"Le 9 avril 1865, la reddition de Lee à Grant dans un salon de village mit fin de fait à la guerre de Sécession.",
   photo:"events/appomattox.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Capitulation d'un général sudiste dans le salon d'une maison de village, avril 1865, terme effectif d'une guerre civile"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Fin d'un conflit fratricide des années 1860 dans un village de l'est des États-Unis"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Reddition confédérée, comté d'Appomattox"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La reddition d'Appomattox, Virginie, USA"}
  ]},
  {name:"Bataille de Trafalgar — Cadix, Espagne", lat:36.267, lng:-6.26, radius:6000,
   desc:"Le 21 octobre 1805, Nelson y détruisit les flottes franco-espagnoles au prix de sa vie, assurant la suprématie navale britannique pour un siècle.",
   photo:"events/trafalgar.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Combat naval de 1805 au large d'un cap atlantique, victoire d'un amiral borgne et manchot tué au moment du triomphe"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille navale du début du XIXe siècle au large du sud-ouest d'une péninsule ibérique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire navale de Nelson, au large de Cadix"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Trafalgar, Espagne"}
  ]},
  {name:"Chute de Constantinople — Istanbul, Turquie", lat:41.006, lng:28.976, radius:3000,
   desc:"En 1453, la prise de la capitale byzantine par Mehmed II mit fin à l'Empire romain d'Orient et fit basculer l'Europe dans une nouvelle ère.",
   photo:"events/constantinople_1453.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Siège de 1453 où des canons géants percèrent des murailles millénaires, effaçant le dernier héritier d'un empire antique"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Chute d'une capitale impériale au XVe siècle, à cheval sur deux continents"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Prise ottomane de Constantinople, rives du Bosphore"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La chute de Constantinople, Turquie"}
  ]},
  {name:"Débarquement de Normandie — Utah Beach — Manche, France", lat:49.415, lng:-1.176, radius:3000,
   desc:"Le 6 juin 1944, la plage la plus à l'ouest du Débarquement fut prise avec des pertes limitées, ouvrant la route de Cherbourg.",
   photo:"events/utah_beach.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"La plus occidentale des cinq plages d'un assaut de juin 1944, courant qui fit dériver les péniches vers un secteur moins défendu, sauvant des vies"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Opération alliée de 1944 sur une côte du nord-ouest de la France"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Débarquement allié, côte de la Manche"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Utah Beach, Normandie, France"}
  ]},
  {name:"Bombardement d'Hiroshima — Japon", lat:34.3955, lng:132.4536, radius:2000,
   desc:"Le 6 août 1945, la première bombe atomique employée en guerre rasa la ville et précipita la capitulation japonaise.",
   photo:"events/hiroshima_1945.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Première arme nucléaire employée en guerre, matin du 6 août 1945, un dôme éventré conservé depuis en mémorial"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de 1945 dans une ville portuaire de l'ouest d'un archipel asiatique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Première bombe atomique, sud du Honshū"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le bombardement d'Hiroshima, Japon"}
  ]},
  {name:"Bataille des Thermopyles — Phthiotide, Grèce", lat:38.796, lng:22.536, radius:2000,
   desc:"En 480 av. J.-C., 300 Spartiates et leurs alliés retardèrent l'armée perse de Xerxès dans un défilé côtier, sacrifice devenu légende.",
   photo:"events/thermopyles.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Défense d'un défilé côtier en 480 av. J.-C. par une poignée de guerriers face à une armée immense, trahis par un sentier de montagne"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de l'Antiquité dans un passage étroit du centre-est d'une péninsule du sud de l'Europe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Résistance des 300 Spartiates, région de Phthiotide"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Thermopyles, Grèce"}
  ]},
  {name:"Signature de la Déclaration d'indépendance — Philadelphie, USA", lat:39.9489, lng:-75.15, radius:500,
   desc:"Le 4 juillet 1776, treize colonies proclamèrent leur indépendance dans l'Independence Hall, acte fondateur des États-Unis.",
   photo:"events/independance_us.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Proclamation de rupture de treize colonies avec leur couronne, un 4 juillet, dans une salle à l'horloge d'une ville de la côte est"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Acte fondateur de 1776 dans une grande ville du nord-est américain"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Signature de la Déclaration d'indépendance, Independence Hall"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Déclaration d'indépendance, Philadelphie, USA"}
  ]},
  {name:"Bataille d'Azincourt — Pas-de-Calais, France", lat:50.464, lng:2.14, radius:2000,
   desc:"En 1415, les archers anglais d'Henri V écrasèrent une chevalerie française embourbée, tournant de la guerre de Cent Ans.",
   photo:"events/azincourt.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Débâcle d'une chevalerie lourde piégée dans la boue en 1415, fauchée par des archers à l'arc long adverses"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XVe siècle dans le nord de la France, guerre de Cent Ans"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire anglaise d'Henri V, Pas-de-Calais"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Azincourt, France"}
  ]},
  {name:"Éruption de Pompéi — Campanie, Italie", lat:40.75, lng:14.486, radius:3000,
   desc:"En 79 apr. J.-C., l'éruption du Vésuve ensevelit Pompéi sous les cendres, figeant la vie romaine pour l'éternité.",
   photo:"events/pompei_79.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Catastrophe volcanique de l'an 79 qui pétrifia une cité entière sous les cendres, redécouverte intacte 17 siècles plus tard"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Désastre antique au pied d'un volcan du sud d'une péninsule méditerranéenne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ensevelissement de Pompéi par le Vésuve, Campanie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'éruption de Pompéi, Italie"}
  ]},
  {name:"Bataille de Bannockburn — Stirling, Écosse", lat:56.091, lng:-3.927, radius:2000,
   desc:"En 1314, Robert Bruce y vainquit l'armée anglaise d'Édouard II, assurant l'indépendance de l'Écosse.",
   photo:"events/bannockburn.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire d'un roi écossais en 1314 sur une armée méridionale trois fois supérieure, jalon d'une indépendance retrouvée"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XIVe siècle au centre d'une nation du nord d'une île britannique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de Robert Bruce, près de Stirling"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Bannockburn, Écosse"}
  ]},
  {name:"Congrès de Vienne — Autriche", lat:48.209, lng:16.366, radius:1500,
   desc:"De 1814 à 1815, les puissances européennes y redessinèrent le continent après la chute de Napoléon, inaugurant un siècle d'équilibre.",
   photo:"events/congres_vienne.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Grande conférence diplomatique de 1814-1815 où l'on redécoupa un continent au son des valses, après la chute d'un empereur"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Négociation du début du XIXe siècle dans une capitale d'Europe centrale danubienne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Congrès de la Restauration européenne, centre de Vienne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le congrès de Vienne, Autriche"}
  ]},
  {name:"Bataille de Little Bighorn — Montana, USA", lat:45.57, lng:-107.43, radius:3000,
   desc:"En 1876, les guerriers sioux et cheyennes anéantirent le régiment de Custer, ultime grande victoire amérindienne.",
   photo:"events/little_bighorn.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Anéantissement d'un régiment de cavalerie en 1876 par une coalition de nations autochtones, ultime éclat avant la soumission"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Affrontement de la fin du XIXe siècle dans les plaines du nord-ouest américain"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Défaite de Custer face aux Sioux, Montana"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Little Bighorn, Montana, USA"}
  ]},
  {name:"Bataille de Poitiers (732) — Vienne, France", lat:46.666, lng:0.426, radius:5000,
   desc:"En 732, Charles Martel y stoppa l'avancée arabo-berbère, événement longtemps vu comme un coup d'arrêt à l'expansion musulmane en Europe.",
   photo:"events/poitiers_732.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Coup d'arrêt de 732 porté par un chef franc à une colonne venue du sud, épisode érigé plus tard en symbole par les historiens"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du VIIIe siècle dans l'ouest d'un royaume d'Europe occidentale, haut Moyen Âge"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de Charles Martel, région de la Vienne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Poitiers de 732, France"}
  ]},
  {name:"Fondation de Rome (légendaire) — Latium, Italie", lat:41.889, lng:12.485, radius:1500,
   desc:"Selon la tradition, Romulus fonda Rome sur le Palatin en 753 av. J.-C. après avoir tué son frère Remus.",
   photo:"events/fondation_rome.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Naissance légendaire d'une cité en 753 av. J.-C. sur une colline, par un jumeau nourri par une louve devenu meurtrier de son frère"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Mythe fondateur antique sur une colline du centre d'une péninsule méditerranéenne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Fondation légendaire de Rome sur le Palatin, Latium"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La fondation de Rome, Italie"}
  ]},
  {name:"Bataille de Yorktown — Virginie, USA", lat:37.239, lng:-76.509, radius:2500,
   desc:"En 1781, la reddition de Cornwallis à Washington et Rochambeau scella l'indépendance américaine.",
   photo:"events/yorktown.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Siège décisif de 1781 où une armée britannique capitula, prise en étau entre insurgés et alliés venus de la mer, verrou d'une indépendance"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la fin du XVIIIe siècle sur une côte de l'est des États-Unis"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Reddition de Cornwallis, Virginie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Yorktown, USA"}
  ]},
  {name:"Diète de Worms — Rhénanie-Palatinat, Allemagne", lat:49.63, lng:8.366, radius:1200,
   desc:"En 1521, Luther y refusa de se rétracter devant Charles Quint, acte fondateur de la Réforme.",
   photo:"events/worms_1521.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Comparution d'un moine réformateur en 1521 devant un empereur, refus de se dédire qui fractura la chrétienté d'Occident"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Assemblée du XVIe siècle dans l'ouest d'un pays d'Europe centrale, débuts de la Réforme"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Diète où Luther défie Charles Quint, Rhénanie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La diète de Worms, Allemagne"}
  ]},
  {name:"Bataille de Lépante — Golfe de Patras, Grèce", lat:38.2, lng:21.33, radius:7000,
   desc:"En 1571, la Sainte-Ligue chrétienne détruisit la flotte ottomane, dernier grand affrontement de galères de l'histoire.",
   photo:"events/lepante.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Dernier grand choc de galères à rames, en 1571, victoire d'une ligue chrétienne où combattit un futur auteur de roman manchot"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille navale du XVIe siècle dans un golfe de l'ouest d'une péninsule du sud de l'Europe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de la Sainte-Ligue sur les Ottomans, golfe de Patras"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Lépante, Grèce"}
  ]},
  {name:"Sacre de Charlemagne — Rome, Italie", lat:41.9022, lng:12.4539, radius:600,
   desc:"Le jour de Noël 800, le pape couronna Charlemagne empereur dans l'ancienne basilique Saint-Pierre, restaurant l'idée impériale en Occident.",
   photo:"events/sacre_charlemagne.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Couronnement impérial le jour de Noël de l'an 800 par un pape, restaurant en Occident un titre éteint depuis trois siècles"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du haut Moyen Âge dans une grande ville du centre d'une péninsule méditerranéenne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Sacre de Charlemagne empereur, colline du Vatican"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le sacre de Charlemagne, Rome, Italie"}
  ]},
  {name:"Bataille de Verdun — Meuse, France", lat:49.208, lng:5.421, radius:6000,
   desc:"En 1916, la plus longue bataille de la Première Guerre mondiale (300 jours, 700 000 victimes) devint le symbole de l'enfer des tranchées.",
   photo:"events/verdun.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Enfer de tranchées de 1916 long de 300 jours autour de forts pilonnés, résumé d'un mot d'ordre : « on ne passe pas »"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille des années 1910 dans le nord-est de la France, Première Guerre mondiale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Bataille symbole de 1916, département de la Meuse"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Verdun, France"}
  ]},
  {name:"Ralliement de Jeanne d'Arc — Orléans, France", lat:47.897, lng:1.904, radius:1500,
   desc:"En 1429, Jeanne d'Arc leva le siège d'Orléans, tournant de la guerre de Cent Ans en faveur du roi de France.",
   photo:"events/orleans_1429.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Levée d'un siège en 1429 sous l'impulsion d'une jeune paysanne se disant guidée par des voix, renversant le cours d'une longue guerre"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement militaire du XVe siècle dans le centre d'un royaume d'Europe de l'Ouest, sur un grand fleuve"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Jeanne d'Arc lève le siège, ville de la Loire moyenne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le siège d'Orléans, France"}
  ]},
  {name:"Bataille de Tours des Boers — Ladysmith — KwaZulu-Natal, Afrique du Sud", lat:-28.559, lng:29.78, radius:5000,
   desc:"Lors de la guerre des Boers, le siège de Ladysmith (1899-1900) vit 118 jours d'encerclement britannique par les commandos boers.",
   photo:"events/ladysmith.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Siège de 118 jours en 1899-1900 d'une garnison impériale par des fermiers-combattants, dans une guerre coloniale d'Afrique australe"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Blocus militaire du tournant du XXe siècle dans l'est d'un pays d'Afrique australe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Siège de Ladysmith, région du KwaZulu-Natal"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le siège de Ladysmith, Afrique du Sud"}
  ]},
  {name:"Bataille de Zama — Siliana, Tunisie", lat:36.3, lng:9.4, radius:6000,
   desc:"En 202 av. J.-C., Scipion l'Africain vainquit Hannibal, mettant fin à la deuxième guerre punique.",
   photo:"events/zama.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Défaite finale d'un stratège carthaginois en 202 av. J.-C., ses éléphants retournés contre lui par un général romain rival"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille antique dans le nord d'un pays d'Afrique du Nord, IIIe siècle av. J.-C."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Défaite d'Hannibal contre Scipion, arrière-pays tunisien"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Zama, Tunisie"}
  ]},
  {name:"Traité de Tordesillas — Valladolid, Espagne", lat:41.499, lng:-4.715, radius:1000,
   desc:"En 1494, Espagne et Portugal se partagèrent le Nouveau Monde le long d'un méridien, sous l'égide du pape.",
   photo:"events/tordesillas.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Partage d'un monde à peine découvert entre deux couronnes ibériques en 1494, une ligne tracée sur l'océan par la seule volonté d'un pape"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Traité de la fin du XVe siècle dans le centre-nord d'une péninsule ibérique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Partage du Nouveau Monde, province de Valladolid"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le traité de Tordesillas, Espagne"}
  ]},
  {name:"Bataille de Midway — Atoll de Midway, Pacifique", lat:28.207, lng:-177.376, radius:9000,
   desc:"En juin 1942, la victoire aéronavale américaine détruisit quatre porte-avions japonais, tournant de la guerre du Pacifique.",
   photo:"events/midway.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Bataille aéronavale de juin 1942 gagnée par le décryptage ennemi, quatre porte-avions coulés en une journée, bascule d'un océan"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Affrontement naval des années 1940 autour d'un atoll isolé du Pacifique Nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tournant de la guerre du Pacifique, atoll de Midway"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Midway, Pacifique"}
  ]},
  {name:"Prise de Grenade — Andalousie, Espagne", lat:37.176, lng:-3.588, radius:2000,
   desc:"En 1492, la reddition de l'émirat de Grenade acheva la Reconquista et l'unité de l'Espagne chrétienne.",
   photo:"events/grenade_1492.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Chute du dernier royaume musulman de la péninsule en 1492, remise des clés d'une cité aux palais rouges à deux souverains catholiques"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de la fin du XVe siècle dans le sud d'une péninsule ibérique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Fin de la Reconquista, Andalousie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise de Grenade, Espagne"}
  ]},
  {name:"Bataille d'Actium — Golfe d'Ambracie, Grèce", lat:38.934, lng:20.737, radius:7000,
   desc:"En 31 av. J.-C., Octave vainquit Antoine et Cléopâtre, ouvrant la voie à l'Empire romain.",
   photo:"events/actium.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire navale de 31 av. J.-C. qui offrit un empire à son vainqueur et poussa un couple d'amants vaincus au suicide"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille navale antique dans un golfe de l'ouest d'une péninsule du sud-est de l'Europe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Défaite d'Antoine et Cléopâtre, golfe d'Ambracie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Actium, Grèce"}
  ]},
  {name:"Serment du Jeu de paume — Versailles, France", lat:48.8049, lng:2.1204, radius:300,
   desc:"Le 20 juin 1789, les députés du Tiers état jurèrent de ne pas se séparer avant d'avoir donné une constitution à la France.",
   photo:"events/jeu_de_paume.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Serment prêté dans une salle de sport royale en juin 1789 par des députés verrouillés dehors, promesse de refonder un royaume"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Acte fondateur de 1789 dans une ville à l'ouest d'une grande capitale, palais royal"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Serment du Jeu de paume, ville de Versailles"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le serment du Jeu de paume, Versailles, France"}
  ]},
  {name:"Bataille de Iéna — Thuringe, Allemagne", lat:50.927, lng:11.586, radius:4000,
   desc:"En 1806, Napoléon écrasa l'armée prussienne, précipitant l'effondrement du royaume de Prusse.",
   photo:"events/iena.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Double victoire écrasante de 1806 d'un empereur français sur une armée réputée invincible, effondrée en une journée"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du début du XIXe siècle dans le centre-est d'un pays d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire napoléonienne sur la Prusse, Thuringe"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Iéna, Allemagne"}
  ]},
  {name:"Révolte de Spartacus — Vallée du Sele — Campanie, Italie", lat:40.48, lng:15.15, radius:8000,
   desc:"De 73 à 71 av. J.-C., l'esclave gladiateur Spartacus mena la plus grande révolte servile de Rome avant d'être écrasé par Crassus.",
   photo:"events/spartacus.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Soulèvement de 73-71 av. J.-C. mené par un gladiateur évadé, armée d'esclaves finalement crucifiée le long d'une grande voie"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rébellion antique dans le sud d'une péninsule méditerranéenne, dernier siècle av. J.-C."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Révolte de Spartacus, arrière-pays de Campanie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La révolte de Spartacus, Italie"}
  ]},
  {name:"Chute de Tenochtitlan — Mexico, Mexique", lat:19.435, lng:-99.14, radius:3000,
   desc:"En 1521, Cortés et ses alliés indigènes prirent la capitale aztèque après un siège dévastateur, effondrant l'empire.",
   photo:"events/tenochtitlan_1521.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Siège de 1521 d'une cité lacustre par une poignée d'aventuriers venus de la mer et leurs alliés locaux, fin d'un empire du soleil"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Chute d'une capitale indigène au XVIe siècle sur un plateau d'Amérique centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Prise de Tenochtitlan par Cortés, vallée de Mexico"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La chute de Tenochtitlan, Mexique"}
  ]},
  {name:"Bataille de Culloden — Highlands, Écosse", lat:57.478, lng:-4.094, radius:2000,
   desc:"En 1746, l'écrasement des Jacobites mit fin aux espoirs des Stuart et bouleversa la société des clans écossais.",
   photo:"events/culloden.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Massacre de 1746 d'une armée de clans montagnards sur une lande balayée par la pluie, crépuscule d'une cause dynastique"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XVIIIe siècle dans le nord d'une nation d'une île britannique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Défaite jacobite, Highlands près d'Inverness"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Culloden, Écosse"}
  ]},
  {name:"Incendie de Rome — Rome, Italie", lat:41.892, lng:12.487, radius:4000,
   desc:"En 64 apr. J.-C., un immense incendie ravagea Rome pendant six jours ; Néron en fit porter la responsabilité aux chrétiens.",
   photo:"events/incendie_rome.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Brasier de six jours en l'an 64 qui dévora une capitale antique ; son empereur, accusé d'avoir chanté sur les ruines, désigna des boucs émissaires"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Catastrophe urbaine antique dans une grande ville du centre d'une péninsule méditerranéenne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grand incendie sous Néron, centre de Rome"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'incendie de Rome, Italie"}
  ]},
  {name:"Bataille de Nagashino — Aichi, Japon", lat:34.914, lng:137.558, radius:2000,
   desc:"En 1575, Oda Nobunaga y employa des salves d'arquebuses massées pour briser la cavalerie Takeda, révolution tactique.",
   photo:"events/nagashino.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Bataille de 1575 où des salves d'arquebusiers retranchés brisèrent une charge de cavalerie réputée, révolution du feu en Extrême-Orient"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Affrontement féodal du XVIe siècle dans le centre d'un archipel d'Asie de l'Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire d'Oda Nobunaga, région d'Aichi"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Nagashino, Japon"}
  ]},
  {name:"Débarquement de Provence — Var, France", lat:43.27, lng:6.64, radius:6000,
   desc:"En août 1944, l'opération Dragoon ouvrit un second front en France par la Méditerranée, libérant rapidement le Sud.",
   photo:"events/provence_1944.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Second assaut amphibie sur la France en août 1944, par une côte méridionale ensoleillée, moins connu que celui du Nord deux mois plus tôt"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Opération militaire de 1944 sur une côte méditerranéenne du sud-est de la France"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Débarquement de Provence, littoral varois"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le débarquement de Provence, France"}
  ]},
  {name:"Bataille de Bouvines — Nord, France", lat:50.583, lng:3.19, radius:2000,
   desc:"En 1214, la victoire de Philippe Auguste sur une coalition consolida le royaume de France et son autorité royale.",
   photo:"events/bouvines.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire royale d'un dimanche de 1214 sur une coalition d'empereur et de comtes, ciment d'une jeune monarchie"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille médiévale du XIIIe siècle dans le nord de la France"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de Philippe Auguste, région du Nord"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Bouvines, France"}
  ]},
  {name:"Grand Incendie de Londres — Angleterre", lat:51.51, lng:-0.092, radius:2000,
   desc:"En 1666, un feu parti d'une boulangerie de Pudding Lane détruisit le cœur médiéval de Londres en quatre jours.",
   photo:"events/incendie_londres.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Brasier de 1666 né dans une boulangerie, quatre jours qui rasèrent une vieille ville de bois mais éteignirent une épidémie de peste"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Catastrophe urbaine du XVIIe siècle dans une capitale d'Europe du Nord-Ouest, sur un grand fleuve"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grand Incendie, cœur historique de Londres"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Grand Incendie de Londres, Angleterre"}
  ]},
  {name:"Bataille de Salamine — Golfe Saronique, Grèce", lat:37.95, lng:23.56, radius:4000,
   desc:"En 480 av. J.-C., la flotte grecque piégea et détruisit l'armada perse dans un détroit, sauvant la Grèce.",
   photo:"events/salamine.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Piège naval de 480 av. J.-C. dans un détroit resserré, où des trières agiles anéantirent une armada trop nombreuse pour manœuvrer"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille navale antique dans un golfe du sud-est de l'Europe, près d'une grande cité"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire grecque sur la flotte perse, détroit de Salamine"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Salamine, Grèce"}
  ]},
  {name:"Défenestration de Prague — Tchéquie", lat:50.091, lng:14.401, radius:400,
   desc:"En 1618, des gouverneurs impériaux furent jetés par les fenêtres du château de Prague, déclenchant la guerre de Trente Ans.",
   photo:"events/defenestration_prague.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Jet par les fenêtres d'un château, en 1618, de représentants impériaux qui survécurent — étincelle d'une guerre de trente ans"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du début du XVIIe siècle dans une capitale d'Europe centrale, Bohême"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Défenestration au château, colline de Hradčany"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La défenestration de Prague, Tchéquie"}
  ]},
  {name:"Bataille de Gaugamèles — Ninive, Irak", lat:36.36, lng:43.25, radius:8000,
   desc:"En 331 av. J.-C., Alexandre le Grand écrasa Darius III, ouvrant la conquête de l'Empire perse.",
   photo:"events/gaugameles.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire décisive de 331 av. J.-C. d'un jeune conquérant macédonien sur un roi des rois en fuite, clé d'un empire d'Orient"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille antique dans le nord d'un pays du Proche-Orient, IVe siècle av. J.-C."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire d'Alexandre sur Darius III, plaine du nord irakien"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Gaugamèles, Irak"}
  ]},
  {name:"Bataille de Kadesh — Homs, Syrie", lat:34.57, lng:36.51, radius:7000,
   desc:"Vers 1274 av. J.-C., Égyptiens de Ramsès II et Hittites s'affrontèrent lors de l'une des premières grandes batailles documentées, suivie du plus ancien traité de paix connu.",
   photo:"events/kadesh.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Choc de chars vers 1274 av. J.-C. entre deux empires du Bronze, suivi du plus ancien traité de paix écrit connu de l'humanité"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de l'âge du bronze dans l'ouest d'un pays du Proche-Orient"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Affrontement de Ramsès II contre les Hittites, région de Homs"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Kadesh, Syrie"}
  ]},
  {name:"Chute de Saïgon — Hô Chi Minh-Ville, Vietnam", lat:10.777, lng:106.695, radius:3000,
   desc:"Le 30 avril 1975, la prise de Saïgon par les forces du Nord acheva la guerre du Vietnam et réunifia le pays.",
   photo:"events/saigon_1975.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Prise d'une capitale du Sud le 30 avril 1975, chars enfonçant les grilles d'un palais et hélicoptères évacuant depuis les toits"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Fin d'une guerre des années 1970 dans le sud d'un pays d'Asie du Sud-Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Chute de Saïgon, delta du Mékong"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La chute de Saïgon, Vietnam"}
  ]},
  {name:"Bataille de Vienne (1683) — Autriche", lat:48.232, lng:16.29, radius:5000,
   desc:"En 1683, la levée du siège ottoman de Vienne par les troupes polonaises de Sobieski marqua le reflux de l'Empire ottoman en Europe.",
   photo:"events/vienne_1683.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Levée d'un siège en 1683 par une charge de cavalerie ailée venue de l'Est, coup d'arrêt à une poussée ottomane vers le cœur de l'Europe"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XVIIe siècle autour d'une capitale danubienne d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Siège ottoman levé par Sobieski, collines du Kahlenberg"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Vienne de 1683, Autriche"}
  ]},
  {name:"Marche du sel de Gandhi — Gujarat, Inde", lat:20.9, lng:72.66, radius:2000,
   desc:"En 1930, Gandhi acheva sa marche de 385 km à Dandi pour récolter du sel en défi à la taxe coloniale, acte majeur de désobéissance civile.",
   photo:"events/marche_sel.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Aboutissement en 1930 d'une marche de 385 km au bord de la mer, où un leader en pagne ramassa une poignée de sel pour défier un empire"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Acte de désobéissance civile des années 1930 sur une côte de l'ouest d'un pays d'Asie du Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Marche du sel de Gandhi à Dandi, côte du Gujarat"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La marche du sel, Dandi, Inde"}
  ]},
  {name:"Bataille des Champs Catalauniques — Marne, France", lat:48.95, lng:4.36, radius:9000,
   desc:"En 451, une coalition romano-wisigothique arrêta Attila et ses Huns, l'une des dernières grandes victoires de Rome.",
   photo:"events/champs_catalauniques.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Coalition improbable de 451 qui stoppa un conquérant venu des steppes surnommé « fléau de Dieu », baroud d'honneur d'un empire finissant"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de l'Antiquité tardive dans le nord-est de la Gaule, Ve siècle"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Attila arrêté près de Châlons, région de la Marne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Champs Catalauniques, France"}
  ]},
  {name:"Prise de la Smala d'Abd el-Kader — Algérie", lat:35.0, lng:1.5, radius:10000,
   desc:"En 1843, la prise de la smala d'Abd el-Kader marqua un tournant de la conquête française de l'Algérie.",
   photo:"events/smala_1843.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Capture en 1843 du campement mobile de 20 000 personnes d'un chef de la résistance, par une colonne de cavalerie audacieuse"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Épisode colonial du milieu du XIXe siècle sur les hauts plateaux d'un pays d'Afrique du Nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Prise de la smala d'Abd el-Kader, hauts plateaux algériens"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise de la Smala, Algérie"}
  ]},
  {name:"Bataille de Plassey — Bengale-Occidental, Inde", lat:23.8, lng:88.25, radius:4000,
   desc:"En 1757, la victoire de Clive assura la domination de la Compagnie anglaise des Indes sur le Bengale, prélude à l'empire britannique en Inde.",
   photo:"events/plassey.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 1757 acquise plus par la corruption d'un général adverse que par les armes, porte d'entrée d'une compagnie marchande vers un sous-continent"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du milieu du XVIIIe siècle dans l'est d'un pays d'Asie du Sud, delta fluvial"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de la Compagnie des Indes, Bengale"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Plassey, Inde"}
  ]},
  {name:"Bataille de Dien Bien Phu — Vietnam", lat:21.387, lng:103.023, radius:5000,
   desc:"En 1954, la défaite française dans cette cuvette scella la fin de l'Indochine française.",
   photo:"events/dien_bien_phu.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Défaite de 1954 d'un corps expéditaire piégé dans une cuvette, artillerie adverse hissée à dos d'homme sur les crêtes, fin d'une colonie asiatique"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille des années 1950 dans une vallée du nord-ouest d'un pays d'Asie du Sud-Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Défaite française décisive, cuvette du Nord-Ouest"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Diên Biên Phu, Vietnam"}
  ]}
];

if (typeof window !== "undefined") window.EVENTS = EVENTS;
