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
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Bataille fondatrice du shogunat Tokugawa, plaine de la région du Ch?bu"},
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
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Première bombe atomique, sud du Honsh?"},
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
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Défenestration au château, colline de Hrad?any"},
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
  ]},
  {name:"Bataille de Platées — Béotie, Grèce", lat:38.223, lng:23.262, radius:4000,
   desc:"En 479 av. J.-C., la victoire terrestre grecque acheva de repousser la seconde invasion perse.",
   photo:"events/platees.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Choc terrestre de 479 av. J.-C. qui parachève l'échec d'une invasion venue de l'Est, un an après une déroute navale du même envahisseur"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de l'Antiquité dans une plaine du sud-est de l'Europe, guerres médiques"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire grecque décisive sur les Perses, région de Béotie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Platées, Grèce"}
  ]},
  {name:"Prise de Babylone par Cyrus — Babil, Irak", lat:32.542, lng:44.42, radius:3000,
   desc:"En 539 av. J.-C., Cyrus le Grand s'empara de la cité sans grand combat, fondant l'Empire perse achéménide.",
   photo:"events/babylone_539.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Chute quasi pacifique d'une cité mésopotamienne en 539 av. J.-C., dont le nouveau maître libéra un peuple exilé selon les textes"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Conquête antique dans le centre d'un pays du Proche-Orient, VIe siècle av. J.-C."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Prise de Babylone par Cyrus, Mésopotamie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise de Babylone, Irak"}
  ]},
  {name:"Bataille d'Issos — Hatay, Turquie", lat:36.86, lng:36.2, radius:4000,
   desc:"En 333 av. J.-C., Alexandre battit Darius III, ouvrant la conquête du Levant.",
   photo:"events/issos.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 333 av. J.-C. d'un jeune roi macédonien qui força un roi des rois à fuir en abandonnant sa famille"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille antique sur une côte du sud d'un pays du Proche-Orient, IVe siècle av. J.-C."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire d'Alexandre sur Darius, golfe d'Issos"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Issos, Turquie"}
  ]},
  {name:"Bataille de Pharsale — Thessalie, Grèce", lat:39.29, lng:22.38, radius:5000,
   desc:"En 48 av. J.-C., César écrasa Pompée, tournant décisif de la guerre civile romaine.",
   photo:"events/pharsale.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Affrontement de 48 av. J.-C. entre deux généraux romains rivaux, victoire de celui qui avait franchi un fleuve interdit deux ans plus tôt"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille antique dans une plaine du centre d'une péninsule du sud-est de l'Europe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de César sur Pompée, Thessalie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Pharsale, Grèce"}
  ]},
  {name:"Passage du Rubicon — Émilie-Romagne, Italie", lat:44.09, lng:12.4, radius:3000,
   desc:"En 49 av. J.-C., César franchit ce fleuve frontière en armes, déclenchant la guerre civile.",
   photo:"events/rubicon.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Franchissement d'un petit fleuve en armes en 49 av. J.-C., geste de rupture résumé par une formule sur le sort qui est jeté"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement antique sur un cours d'eau du nord d'une péninsule méditerranéenne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Passage du Rubicon par César, Émilie-Romagne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le passage du Rubicon, Italie"}
  ]},
  {name:"Assassinat de Jules César — Rome, Italie", lat:41.8955, lng:12.4768, radius:400,
   desc:"Aux ides de mars 44 av. J.-C., César fut poignardé par des sénateurs au pied de la Curie de Pompée.",
   photo:"events/cesar_44.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Meurtre d'un dictateur aux ides de mars 44 av. J.-C. par un groupe de sénateurs, l'un d'eux étant son propre protégé"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Assassinat politique antique dans une grande ville du centre d'une péninsule méditerranéenne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Assassinat de César, portique de Pompée"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'assassinat de Jules César, Rome, Italie"}
  ]},
  {name:"Bataille de Teutobourg — Basse-Saxe, Allemagne", lat:52.19, lng:8.13, radius:6000,
   desc:"En l'an 9, des tribus germaniques anéantirent trois légions romaines, arrêtant l'expansion au-delà du Rhin.",
   photo:"events/teutobourg.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Embuscade forestière de l'an 9 où trois légions disparurent, arrachant à un empereur le cri « rends-moi mes légions »"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Désastre militaire antique dans une forêt du nord-ouest d'un pays d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Anéantissement des légions de Varus, Germanie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Teutobourg, Allemagne"}
  ]},
  {name:"Siège d'Alésia — Côte-d'Or, France", lat:47.537, lng:4.5, radius:4000,
   desc:"En 52 av. J.-C., César encercla Vercingétorix et acheva la conquête de la Gaule.",
   photo:"events/alesia.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Double encerclement de 52 av. J.-C. où l'assiégeant se retrancha à son tour contre une armée de secours, scellant la soumission d'un chef gaulois"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Siège antique sur un oppidum de l'est de la Gaule, Ier siècle av. J.-C."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Reddition de Vercingétorix à César, Bourgogne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le siège d'Alésia, France"}
  ]},
  {name:"Destruction de Carthage — Tunis, Tunisie", lat:36.852, lng:10.323, radius:4000,
   desc:"En 146 av. J.-C., Rome rasa sa grande rivale, achevant les guerres puniques.",
   photo:"events/carthage_146.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Anéantissement d'une cité maritime rivale en 146 av. J.-C., dont la ruine fut réclamée par un sénateur à la fin de chaque discours"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Destruction antique d'une cité sur une côte d'Afrique du Nord, IIe siècle av. J.-C."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Fin de Carthage face à Rome, banlieue de Tunis"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La destruction de Carthage, Tunisie"}
  ]},
  {name:"Prise de Jérusalem par Titus — Israël", lat:31.778, lng:35.235, radius:3000,
   desc:"En l'an 70, les Romains prirent la ville et détruisirent le Second Temple.",
   photo:"events/jerusalem_70.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Siège de l'an 70 achevé par l'incendie d'un sanctuaire, butin sculpté sur un arc de triomphe encore debout dans la capitale des vainqueurs"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Siège antique d'une ville sainte du Proche-Orient, Ier siècle"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Prise de Jérusalem par Titus, Judée"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise de Jérusalem de 70, Israël"}
  ]},
  {name:"Bataille du pont Milvius — Rome, Italie", lat:41.935, lng:12.467, radius:2000,
   desc:"En 312, la victoire de Constantin le mena au pouvoir et favorisa l'essor du christianisme.",
   photo:"events/pont_milvius.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 312 remportée après une vision d'un signe dans le ciel, tournant pour une religion jusque-là persécutée"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de l'Antiquité tardive près d'une grande ville du centre d'une péninsule méditerranéenne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de Constantin, pont sur le Tibre"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille du pont Milvius, Rome, Italie"}
  ]},
  {name:"Éruption minoenne de Théra — Cyclades, Grèce", lat:36.4, lng:25.4, radius:5000,
   desc:"Vers 1600 av. J.-C., l'explosion volcanique de Théra bouleversa la civilisation minoenne.",
   photo:"events/thera.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cataclysme volcanique de l'âge du bronze qui souffla le centre d'une île en caldeira, peut-être à l'origine d'un mythe d'engloutissement"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Catastrophe antique sur une île volcanique du sud-est de l'Europe, âge du bronze"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Éruption de Théra (Santorin), Cyclades"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'éruption minoenne de Santorin, Grèce"}
  ]},
  {name:"Bataille de Yarmouk — Jordanie", lat:32.73, lng:35.95, radius:7000,
   desc:"En 636, les armées arabes écrasèrent les Byzantins, ouvrant la conquête du Levant.",
   photo:"events/yarmouk.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 636 le long d'un affluent encaissé, tempête de sable au visage des vaincus, qui livra une riche province orientale à de nouveaux conquérants"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du VIIe siècle près d'une frontière du Proche-Orient, débuts de l'expansion arabe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Défaite byzantine face aux Arabes, vallée du Yarmouk"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille du Yarmouk, Jordanie"}
  ]},
  {name:"Bataille de Qadisiyya — Irak", lat:31.83, lng:44.55, radius:6000,
   desc:"Vers 636, la victoire arabe brisa l'Empire sassanide.",
   photo:"events/qadisiyya.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 636 sur les éléphants d'un empire perse millénaire, ouvrant sa capitale aux conquérants venus du désert"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du VIIe siècle dans le centre d'un pays du Proche-Orient"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Défaite sassanide face aux Arabes, région de l'Euphrate"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Qadisiyya, Irak"}
  ]},
  {name:"Hégire de Mahomet — Médine, Arabie saoudite", lat:24.47, lng:39.61, radius:4000,
   desc:"En 622, l'exil de Mahomet vers Yathrib marque le point de départ du calendrier musulman.",
   photo:"events/hegire.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Migration de 622 d'un prédicant persécuté vers une oasis du nord, an zéro d'un nouveau calendrier"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement fondateur du VIIe siècle dans l'ouest d'une péninsule d'Arabie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'Hégire vers Médine, Hedjaz"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Hégire, Médine, Arabie saoudite"}
  ]},
  {name:"Bataille de Talas — Kazakhstan", lat:42.52, lng:72.24, radius:7000,
   desc:"En 751, la victoire abbasside sur les Tang stoppa l'expansion chinoise vers l'ouest et diffusa le papier.",
   photo:"events/talas.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Choc de 751 entre deux empires aux confins des steppes, dont les prisonniers auraient transmis le secret d'une invention chinoise à l'Occident"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du VIIIe siècle en Asie centrale, le long d'une rivière"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Arrêt de l'expansion Tang face aux Abbassides, sud du Kazakhstan"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Talas, Kazakhstan"}
  ]},
  {name:"Bataille de Manzikert — Mu?, Turquie", lat:39.14, lng:42.53, radius:5000,
   desc:"En 1071, la défaite byzantine face aux Seldjoukides ouvrit l'Anatolie aux Turcs.",
   photo:"events/manzikert.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Défaite de 1071 où un empereur fut fait prisonnier, brèche par laquelle des cavaliers turcs déferlèrent sur une péninsule"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XIe siècle dans l'est d'un pays à cheval sur deux continents"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Défaite byzantine face aux Seldjoukides, Anatolie orientale"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Manzikert, Turquie"}
  ]},
  {name:"Prise de Jérusalem par les croisés — Israël", lat:31.777, lng:35.234, radius:3000,
   desc:"En 1099, la première croisade s'empara de la ville au terme d'un siège sanglant.",
   photo:"events/jerusalem_1099.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Siège de 1099 conclu par un massacre, aboutissement d'une expédition prêchée quatre ans plus tôt par un pape"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du XIe siècle dans une ville sainte du Proche-Orient, première croisade"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Prise de Jérusalem par les croisés, Judée"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise de Jérusalem de 1099, Israël"}
  ]},
  {name:"Bataille de Hattin — Galilée, Israël", lat:32.8, lng:35.45, radius:3000,
   desc:"En 1187, Saladin anéantit l'armée croisée, rouvrant la voie de Jérusalem.",
   photo:"events/hattin.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Piège de 1187 tendu près de deux collines jumelles à une armée assoiffée, victoire qui rendit une ville sainte à son vainqueur kurde"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XIIe siècle sur un plateau du Proche-Orient, croisades"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de Saladin sur les croisés, cornes de Hattin"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Hattin, Israël"}
  ]},
  {name:"Sac de Constantinople (1204) — Istanbul, Turquie", lat:41.008, lng:28.98, radius:3000,
   desc:"En 1204, la quatrième croisade détourna son but et pilla la capitale byzantine chrétienne.",
   photo:"events/sac_1204.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Détournement d'une croisade en 1204 qui saccagea une capitale chrétienne au lieu d'un objectif lointain, quatre chevaux de bronze emportés vers une lagune"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Pillage médiéval d'une grande ville à cheval sur deux continents"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Sac de Constantinople par les croisés, Bosphore"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le sac de Constantinople de 1204, Turquie"}
  ]},
  {name:"Prise de Bagdad par les Mongols — Irak", lat:33.34, lng:44.4, radius:4000,
   desc:"En 1258, Houlagou détruisit la capitale abbasside, fin de l'âge d'or islamique.",
   photo:"events/bagdad_1258.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Sac de 1258 d'une capitale du savoir, ses bibliothèques jetées dans un fleuve dit-on noirci d'encre, par des cavaliers venus des steppes"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Destruction médiévale d'une grande ville du Proche-Orient, invasions mongoles"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Prise de Bagdad par Houlagou, Mésopotamie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise de Bagdad de 1258, Irak"}
  ]},
  {name:"Bataille d'Aïn Djalout — Israël", lat:32.55, lng:35.35, radius:4000,
   desc:"En 1260, les Mamelouks stoppèrent l'avancée mongole, un tournant historique.",
   photo:"events/ain_djalout.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Coup d'arrêt de 1260 porté à une vague de conquête réputée invincible, par une armée d'anciens esclaves-soldats"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XIIIe siècle dans une plaine du Proche-Orient"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Arrêt des Mongols par les Mamelouks, vallée de Jezréel"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Aïn Djalout, Israël"}
  ]},
  {name:"Batailles de Hakata (invasions mongoles) — Fukuoka, Japon", lat:33.6, lng:130.4, radius:8000,
   desc:"En 1274 et 1281, deux typhons providentiels détruisirent les flottes d'invasion mongoles.",
   photo:"events/hakata.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Deux tentatives d'invasion des années 1270-1280 brisées par des typhons providentiels baptisés « vent divin »"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement médiéval sur une baie du sud-ouest d'un archipel d'Asie de l'Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Invasions mongoles repoussées, baie de Hakata"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les invasions mongoles du Japon, Fukuoka"}
  ]},
  {name:"Bataille de Courtrai (Éperons d'or) — Flandre, Belgique", lat:50.83, lng:3.26, radius:2000,
   desc:"En 1302, les milices flamandes écrasèrent la chevalerie française.",
   photo:"events/courtrai.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Débâcle de 1302 d'une chevalerie piégée dans les fossés, dont on ramassa des centaines d'éperons dorés en trophée"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XIVe siècle dans le nord d'un pays d'Europe de l'Ouest"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire des milices flamandes, ville de Courtrai"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille des Éperons d'or, Belgique"}
  ]},
  {name:"Bataille de Crécy — Somme, France", lat:50.253, lng:1.897, radius:3000,
   desc:"En 1346, les archers anglais brisèrent l'armée française, aube de la guerre de Cent Ans.",
   photo:"events/crecy.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 1346 où l'arc long et de premières bouches à feu fauchèrent une chevalerie nombreuse"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XIVe siècle dans le nord de la France, guerre de Cent Ans"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire anglaise d'Édouard III, région de la Somme"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Crécy, France"}
  ]},
  {name:"Bataille de Kulikovo — Toula, Russie", lat:53.67, lng:38.67, radius:6000,
   desc:"En 1380, la victoire russe sur la Horde d'or amorça l'émancipation moscovite.",
   photo:"events/kulikovo.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 1380 d'un prince sur des cavaliers tributaires, premier grand craquement d'un joug venu des steppes"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XIVe siècle dans une plaine de l'ouest de la Russie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire russe sur la Horde d'or, champ de Koulikovo"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Koulikovo, Russie"}
  ]},
  {name:"Bataille de Kosovo Polje — Kosovo", lat:42.66, lng:21.1, radius:4000,
   desc:"En 1389, l'affrontement serbo-ottoman devint un mythe national des Balkans.",
   photo:"events/kosovo_1389.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Choc de 1389 où périrent les deux souverains, gravé depuis dans la mémoire nationale d'un peuple des Balkans"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la fin du XIVe siècle dans une plaine du sud-est de l'Europe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Serbes contre Ottomans, « champ des Merles »"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Kosovo, Kosovo"}
  ]},
  {name:"Bataille de Grunwald — Varmie-Mazurie, Pologne", lat:53.49, lng:20.09, radius:5000,
   desc:"En 1410, l'union polono-lituanienne écrasa l'ordre Teutonique.",
   photo:"events/grunwald.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Écrasement en 1410 d'un ordre de chevaliers religieux par une coalition slavo-balte, l'une des plus grandes batailles du Moyen Âge"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du début du XVe siècle dans le nord-est d'un pays d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Défaite des chevaliers Teutoniques, Mazurie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Grunwald, Pologne"}
  ]},
  {name:"Bataille de Castillon — Gironde, France", lat:44.85, lng:-0.03, radius:3000,
   desc:"En 1453, l'artillerie française mit fin à la guerre de Cent Ans.",
   photo:"events/castillon.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Dernière grande bataille de 1453 d'un conflit de plus d'un siècle, où le canon eut raison d'une charge anglaise"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du milieu du XVe siècle dans le sud-ouest de la France"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Fin de la guerre de Cent Ans, vallée de la Dordogne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Castillon, France"}
  ]},
  {name:"Bataille de Marignan — Lombardie, Italie", lat:45.31, lng:9.35, radius:3000,
   desc:"En 1515, la victoire de François Ier sur les Suisses ouvrit les guerres d'Italie.",
   photo:"events/marignan.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire d'un jeune roi français en 1515, « bataille de géants » de deux jours qui brisa la réputation d'une redoutable infanterie de montagne"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du début du XVIe siècle dans le nord d'une péninsule méditerranéenne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de François Ier sur les Suisses, Lombardie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Marignan, Italie"}
  ]},
  {name:"Bataille de Pavie — Lombardie, Italie", lat:45.19, lng:9.16, radius:3000,
   desc:"En 1525, la capture de François Ier consacra la puissance de Charles Quint.",
   photo:"events/pavie.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Désastre de 1525 où un roi fut fait prisonnier, écrivant que tout était perdu fors l'honneur"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XVIe siècle dans le nord d'une péninsule méditerranéenne, guerres d'Italie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Capture de François Ier par Charles Quint, Lombardie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Pavie, Italie"}
  ]},
  {name:"Massacre de la Saint-Barthélemy — Paris, France", lat:48.856, lng:2.34, radius:3000,
   desc:"En 1572, des milliers de protestants furent tués à Paris et en province.",
   photo:"events/saint_barthelemy.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Tuerie religieuse d'un matin d'août 1572, déclenchée au son d'un tocsin, qui ensanglanta une capitale et gagna les provinces"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Massacre du XVIe siècle dans une grande capitale d'Europe de l'Ouest, guerres de Religion"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Massacre des protestants, cœur de la capitale"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le massacre de la Saint-Barthélemy, Paris, France"}
  ]},
  {name:"Bataille de la Montagne Blanche — Prague, Tchéquie", lat:50.08, lng:14.32, radius:2500,
   desc:"En 1620, la défaite tchèque ouvrit trois siècles de domination des Habsbourg.",
   photo:"events/montagne_blanche.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Défaite de 1620 sur une colline aux abords d'une capitale, début d'une longue nuit pour une noblesse protestante décapitée peu après"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du début du XVIIe siècle près d'une capitale d'Europe centrale, guerre de Trente Ans"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Défaite tchèque face aux Habsbourg, colline à l'ouest de Prague"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de la Montagne Blanche, Tchéquie"}
  ]},
  {name:"Traités de Westphalie — Münster, Allemagne", lat:51.963, lng:7.626, radius:1500,
   desc:"En 1648, ces traités mirent fin à la guerre de Trente Ans et fondèrent l'ordre des États modernes.",
   photo:"events/westphalie.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Paix de 1648 signée dans deux villes après trente ans de guerre, acte fondateur d'un ordre de souverainetés en Europe"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Traité du milieu du XVIIe siècle dans l'ouest d'un pays d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Fin de la guerre de Trente Ans, Westphalie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les traités de Westphalie, Allemagne"}
  ]},
  {name:"Bataille de Rocroi — Ardennes, France", lat:49.92, lng:4.52, radius:2500,
   desc:"En 1643, la victoire française brisa la réputation des tercios espagnols.",
   photo:"events/rocroi.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 1643 d'un très jeune général qui abattit l'invincible infanterie carrée d'une grande puissance déclinante"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XVIIe siècle dans le nord-est de la France"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire française sur les tercios espagnols, Ardennes"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Rocroi, France"}
  ]},
  {name:"Bataille de Poltava — Ukraine", lat:49.6, lng:34.55, radius:5000,
   desc:"En 1709, Pierre le Grand écrasa Charles XII, faisant de la Russie une grande puissance.",
   photo:"events/poltava.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Défaite en 1709 d'un roi guerrier du Nord au terme d'une marche épuisante vers l'est, avènement d'un nouvel empire"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du début du XVIIIe siècle dans le centre-est d'un pays d'Europe orientale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de Pierre le Grand sur la Suède, Poltava"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Poltava, Ukraine"}
  ]},
  {name:"Bataille des plaines d'Abraham — Québec, Canada", lat:46.802, lng:-71.22, radius:2000,
   desc:"En 1759, la victoire britannique décida du sort de la Nouvelle-France.",
   photo:"events/plaines_abraham.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Bataille de 1759 sur un plateau au-dessus d'un fleuve, où les deux généraux périrent et une colonie changea d'empire"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Affrontement du XVIIIe siècle près d'une ville forte de l'est du Canada"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Prise de Québec par les Britanniques, plateau au-dessus du Saint-Laurent"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille des plaines d'Abraham, Canada"}
  ]},
  {name:"Boston Tea Party — Massachusetts, USA", lat:42.352, lng:-71.051, radius:500,
   desc:"En 1773, des colons jetèrent à la mer la cargaison de thé, prélude à la révolution américaine.",
   photo:"events/boston_tea.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Coup d'éclat de 1773 où des colons déguisés noyèrent une cargaison taxée dans un port, étincelle d'une révolte fiscale"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du XVIIIe siècle dans un port du nord-est américain"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Révolte du thé, port de Boston"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Boston Tea Party, USA"}
  ]},
  {name:"Bataille de Saratoga — New York, USA", lat:43.01, lng:-73.64, radius:4000,
   desc:"En 1777, la victoire américaine décida la France à entrer en guerre.",
   photo:"events/saratoga.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire insurgée de 1777 qui convainquit une monarchie européenne de s'allier à de jeunes rebelles"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la fin du XVIIIe siècle dans le nord-est des États-Unis"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tournant de la guerre d'Indépendance, État de New York"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Saratoga, USA"}
  ]},
  {name:"Bataille de Fort Alamo — Texas, USA", lat:29.426, lng:-98.486, radius:500,
   desc:"En 1836, la résistance héroïque au siège devint un symbole de l'indépendance texane.",
   photo:"events/alamo.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Siège de 1836 d'une mission fortifiée dont tous les défenseurs périrent, devenant un cri de ralliement"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du XIXe siècle dans le sud des États-Unis, indépendance d'une jeune république"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Siège de l'Alamo, ville de San Antonio"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de l'Alamo, Texas, USA"}
  ]},
  {name:"Serment / Cri de Dolores — Guanajuato, Mexique", lat:21.156, lng:-100.934, radius:800,
   desc:"En 1810, l'appel du curé Hidalgo lança la guerre d'indépendance mexicaine.",
   photo:"events/dolores.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Appel lancé à l'aube de 1810 depuis le clocher d'une paroisse par un prêtre, coup d'envoi d'une insurrection coloniale"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du début du XIXe siècle dans le centre d'un pays d'Amérique du Nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cri d'indépendance d'Hidalgo, village de Dolores"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Cri de Dolores, Mexique"}
  ]},
  {name:"Bataille de Boyacá — Boyacá, Colombie", lat:5.45, lng:-73.42, radius:2000,
   desc:"En 1819, la victoire de Bolívar scella l'indépendance de la Nouvelle-Grenade.",
   photo:"events/boyaca.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire éclair de 1819 remportée sur un pont après une traversée héroïque des hauts sommets par un libérateur"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du début du XIXe siècle sur un haut plateau d'Amérique du Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de Bolívar, pont sur une rivière andine"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Boyacá, Colombie"}
  ]},
  {name:"Bataille d'Ayacucho — Ayacucho, Pérou", lat:-13.28, lng:-74.0, radius:3000,
   desc:"En 1824, cette victoire scella l'indépendance de l'Amérique du Sud espagnole.",
   photo:"events/ayacucho.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 1824 sur un haut plateau qui mit fin à trois siècles de domination sur tout un continent"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XIXe siècle dans les hauteurs andines d'un pays d'Amérique du Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Dernière grande bataille de l'indépendance, hauteurs d'Ayacucho"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Ayacucho, Pérou"}
  ]},
  {name:"Bataille de Cajamarca — Cajamarca, Pérou", lat:-7.16, lng:-78.51, radius:2000,
   desc:"En 1532, la capture de l'Inca Atahualpa livra l'empire inca à Pizarro.",
   photo:"events/cajamarca.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Guet-apens de 1532 sur une place où une poignée d'aventuriers capturèrent un empereur porté en litière, rançon d'une salle remplie d'or"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du XVIe siècle sur un plateau andin d'Amérique du Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Capture d'Atahualpa par Pizarro, place de Cajamarca"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Cajamarca, Pérou"}
  ]},
  {name:"Débarquement de Christophe Colomb — Bahamas", lat:24.05, lng:-74.5, radius:6000,
   desc:"En 1492, Colomb toucha une île des Caraïbes, premier contact durable Europe-Amériques.",
   photo:"events/colomb_1492.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Atterrissage d'octobre 1492 sur une petite île après une traversée océanique, contact qui allait bouleverser deux mondes"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de la fin du XVe siècle sur une île d'un archipel des Caraïbes"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Premier débarquement de Colomb, Guanahani"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le débarquement de Colomb, Bahamas"}
  ]},
  {name:"Débarquement de Cook à Botany Bay — Sydney, Australie", lat:-34.0, lng:151.22, radius:3000,
   desc:"En 1770, James Cook aborda la côte est, prélude à la colonisation britannique.",
   photo:"events/botany_bay.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Abordage de 1770 dans une baie foisonnante de plantes nouvelles par un navigateur cartographe, prélude à une colonisation lointaine"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du XVIIIe siècle sur une côte est d'un continent de l'hémisphère sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Débarquement de Cook, baie au sud de Sydney"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le débarquement à Botany Bay, Australie"}
  ]},
  {name:"Traité de Waitangi — Northland, Nouvelle-Zélande", lat:-35.267, lng:174.08, radius:600,
   desc:"En 1840, ce traité entre la Couronne et des chefs maoris fonda la colonie.",
   photo:"events/waitangi.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Accord de 1840 signé sous une tente entre une couronne lointaine et des chefs autochtones, texte fondateur toujours débattu"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Traité du XIXe siècle dans le nord d'un pays insulaire du Pacifique Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Traité entre la Couronne et les Maoris, Northland"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le traité de Waitangi, Nouvelle-Zélande"}
  ]},
  {name:"Bataille d'Austerlitz — Moravie, Tchéquie", lat:49.128, lng:16.762, radius:5000,
   desc:"En 1805, la victoire de Napoléon sur les Austro-Russes est son chef-d'œuvre tactique.",
   photo:"events/austerlitz.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Chef-d'œuvre tactique de 1805 dit « des trois empereurs », soleil perçant la brume au-dessus d'un plateau et d'étangs gelés"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du début du XIXe siècle dans l'est d'un pays d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire napoléonienne des Trois Empereurs, Moravie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Austerlitz, Tchéquie"}
  ]},
  {name:"Bataille de la Moskova (Borodino) — Russie", lat:55.52, lng:35.82, radius:6000,
   desc:"En 1812, la bataille la plus sanglante de la campagne de Russie ouvrit la route de Moscou.",
   photo:"events/borodino.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Boucherie de 1812 devant une redoute, victoire à la Pyrrhus ouvrant une capitale bientôt trouvée en flammes"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du début du XIXe siècle à l'ouest d'une grande ville de Russie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Bataille sanglante de la campagne de Russie, région de Moscou"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Borodino, Russie"}
  ]},
  {name:"Bataille de Leipzig — Saxe, Allemagne", lat:51.32, lng:12.4, radius:6000,
   desc:"En 1813, la « bataille des Nations » précipita la chute de l'Empire napoléonien.",
   photo:"events/leipzig_1813.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Immense choc de 1813 dit « des Nations », où une coalition de tout un continent submergea un empereur isolé"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du début du XIXe siècle dans l'est d'un pays d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La bataille des Nations, ville de Saxe"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Leipzig, Allemagne"}
  ]},
  {name:"Sacre de Napoléon — Paris, France", lat:48.853, lng:2.349, radius:400,
   desc:"En 1804, Napoléon se couronna empereur dans la cathédrale Notre-Dame.",
   photo:"events/sacre_napoleon.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Couronnement de 1804 où le nouveau maître prit la couronne des mains du pape pour se la poser lui-même, sous les voûtes gothiques d'une île fluviale"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Cérémonie du début du XIXe siècle dans une capitale d'Europe de l'Ouest"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Sacre impérial de Napoléon, cathédrale de la Cité"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le sacre de Napoléon, Paris, France"}
  ]},
  {name:"Bataille de Valmy — Marne, France", lat:49.08, lng:4.77, radius:2500,
   desc:"En 1792, cette canonnade sauva la jeune République face aux Prussiens.",
   photo:"events/valmy.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Canonnade de 1792 plus que bataille, qui suffit à faire reculer une armée d'invasion et à sauver une révolution naissante"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement militaire de la fin du XVIIIe siècle dans le nord-est de la France"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire révolutionnaire, moulin de la Marne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Valmy, France"}
  ]},
  {name:"Exécution de Louis XVI — Paris, France", lat:48.8656, lng:2.3212, radius:400,
   desc:"En 1793, le roi fut guillotiné sur l'actuelle place de la Concorde.",
   photo:"events/louis_xvi.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Décapitation publique d'un roi en janvier 1793 sur une grande place, roulement de tambours couvrant ses derniers mots"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de la fin du XVIIIe siècle dans une capitale d'Europe de l'Ouest, Révolution"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Exécution de Louis XVI, place de la Révolution"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'exécution de Louis XVI, Paris, France"}
  ]},
  {name:"Bataille des Pyramides — Le Caire, Égypte", lat:30.02, lng:31.13, radius:4000,
   desc:"En 1798, Bonaparte battit les Mamelouks lors de la campagne d'Égypte.",
   photo:"events/pyramides_1798.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 1798 remportée en vue de monuments millénaires, un général haranguant ses troupes sur les siècles qui les contemplaient"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la fin du XVIIIe siècle près d'une grande ville d'Afrique du Nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de Bonaparte sur les Mamelouks, ouest du Caire"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille des Pyramides, Égypte"}
  ]},
  {name:"Bataille d'Aboukir (navale) — Égypte", lat:31.31, lng:30.1, radius:8000,
   desc:"En 1798, Nelson détruisit la flotte française, isolant l'armée d'Égypte.",
   photo:"events/aboukir.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Anéantissement nocturne d'une flotte à l'ancre en 1798, un vaisseau amiral explosant dans la nuit, piégeant une armée sur un rivage lointain"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille navale de la fin du XVIIIe siècle sur une côte d'Afrique du Nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de Nelson sur la flotte française, baie d'Aboukir"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Aboukir, Égypte"}
  ]},
  {name:"Attaque de Pearl Harbor — Hawaï, USA", lat:21.364, lng:-157.95, radius:3000,
   desc:"Le 7 décembre 1941, l'attaque japonaise fit entrer les États-Unis dans la guerre.",
   photo:"events/pearl_harbor.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Raid aérien surprise d'un dimanche matin de 1941 sur une base navale, « jour d'infamie » qui précipita un géant dans la guerre"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Attaque du milieu du XXe siècle sur une île du Pacifique central"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Attaque japonaise sur la flotte américaine, Oahu"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'attaque de Pearl Harbor, Hawaï, USA"}
  ]},
  {name:"Débarquement d'Inchon — Corée du Sud", lat:37.47, lng:126.62, radius:3000,
   desc:"En 1950, le débarquement audacieux de MacArthur renversa le cours de la guerre de Corée.",
   photo:"events/inchon.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Débarquement amphibie de 1950 dans un port aux marées extrêmes, pari audacieux qui prit à revers une armée d'invasion"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Opération du milieu du XXe siècle sur une côte d'un pays d'Asie de l'Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Débarquement de MacArthur, port près de Séoul"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le débarquement d'Inchon, Corée du Sud"}
  ]},
  {name:"Bataille de Gallipoli — Çanakkale, Turquie", lat:40.23, lng:26.28, radius:6000,
   desc:"En 1915-1916, l'échec allié dans les Dardanelles coûta des centaines de milliers de vies.",
   photo:"events/gallipoli.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Débâcle alliée de 1915 sur une presqu'île commandant un détroit, baptême du feu meurtrier de troupes venues des antipodes"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Campagne de la Première Guerre mondiale sur une péninsule à cheval sur deux continents"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Échec allié dans les Dardanelles, presqu'île de Gallipoli"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Gallipoli, Turquie"}
  ]},
  {name:"Bataille de la Somme — Somme, France", lat:50.01, lng:2.68, radius:8000,
   desc:"En 1916, l'offensive fit plus d'un million de victimes, symbole de l'hécatombe industrielle.",
   photo:"events/somme_1916.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Offensive de 1916 dont le premier jour reste le plus sanglant d'une armée, premiers chars engagés dans la boue"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la Première Guerre mondiale dans le nord de la France"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Offensive meurtrière de 1916, vallée de la Somme"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de la Somme, France"}
  ]},
  {name:"Bataille de la Marne (1914) — Marne, France", lat:48.96, lng:3.39, radius:9000,
   desc:"En 1914, le « miracle de la Marne » stoppa l'avancée allemande sur Paris.",
   photo:"events/marne_1914.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Sursaut de 1914 qui sauva une capitale, des renforts acheminés au front en taxis réquisitionnés"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du début de la Première Guerre mondiale dans le nord-est de la France"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Le « miracle » qui sauva Paris, vallée de la Marne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de la Marne, France"}
  ]},
  {name:"Révolution d'Octobre — Saint-Pétersbourg, Russie", lat:59.941, lng:30.375, radius:2000,
   desc:"En 1917, la prise du pouvoir bolchevique bouleversa le XXe siècle.",
   photo:"events/octobre_1917.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Coup de force d'octobre 1917 (novembre au calendrier occidental) autour d'un palais, salve d'un croiseur pour signal, naissance d'un régime nouveau"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de la Première Guerre mondiale dans une grande ville du nord-ouest de la Russie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Révolution bolchevique, palais d'Hiver"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La révolution d'Octobre, Russie"}
  ]},
  {name:"Armistice de Rethondes — Oise, France", lat:49.427, lng:2.906, radius:500,
   desc:"Le 11 novembre 1918, l'armistice signé dans un wagon mit fin à la Grande Guerre.",
   photo:"events/rethondes.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cessez-le-feu de novembre 1918 signé dans un wagon de chemin de fer au cœur d'une forêt, à la onzième heure du onzième jour"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Fin d'un conflit mondial dans le nord de la France, 1918"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Signature de l'armistice, clairière de Rethondes"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'armistice de 1918, Rethondes, France"}
  ]},
  {name:"Évacuation de Dunkerque — Nord, France", lat:51.035, lng:2.376, radius:4000,
   desc:"En 1940, l'opération Dynamo sauva 340 000 soldats alliés encerclés.",
   photo:"events/dunkerque.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Sauvetage de 1940 de centaines de milliers de soldats encerclés, embarqués depuis une plage par une flottille de bateaux civils"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de la Seconde Guerre mondiale sur une côte du nord de la France"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Évacuation alliée, port et plages du Nord"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'évacuation de Dunkerque, France"}
  ]},
  {name:"Bataille d'El Alamein — Égypte", lat:30.83, lng:28.95, radius:7000,
   desc:"En 1942, la victoire britannique renversa la guerre du désert en Afrique du Nord.",
   photo:"events/el_alamein.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 1942 dans un désert côtier, verrou qui stoppa une avancée vers un canal stratégique et marqua un tournant"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la Seconde Guerre mondiale sur une côte d'Afrique du Nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tournant de la guerre du désert, côte égyptienne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'El Alamein, Égypte"}
  ]},
  {name:"Libération de Paris — France", lat:48.856, lng:2.351, radius:4000,
   desc:"En août 1944, l'insurrection et l'arrivée des Alliés libérèrent la capitale.",
   photo:"events/liberation_paris.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Insurrection d'août 1944 relayée par une division blindée, cloches de toutes les églises sonnant la fin d'une occupation"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de la Seconde Guerre mondiale dans une capitale d'Europe de l'Ouest"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Libération de la capitale en 1944"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La libération de Paris, France"}
  ]},
  {name:"Bataille des Ardennes — Belgique", lat:50.1, lng:5.72, radius:9000,
   desc:"Fin 1944, la dernière offensive allemande à l'ouest échoua dans la neige.",
   photo:"events/ardennes_1944.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ultime offensive surprise de l'hiver 1944 dans une forêt enneigée, un général assiégé répondant « des nuts ! » à une sommation"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la Seconde Guerre mondiale dans un massif du sud-est de la Belgique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Dernière offensive allemande à l'ouest, Ardennes"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille des Ardennes, Belgique"}
  ]},
  {name:"Prise du Reichstag — Berlin, Allemagne", lat:52.5186, lng:13.3762, radius:500,
   desc:"En 1945, le drapeau soviétique hissé sur le Reichstag symbolisa la chute du Reich.",
   photo:"events/reichstag_1945.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Drapeau hissé au printemps 1945 sur le dôme d'un parlement en ruine, image emblématique de la fin d'un régime"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de la fin de la Seconde Guerre mondiale dans une capitale d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Chute de Berlin, bâtiment du parlement"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise du Reichstag, Allemagne"}
  ]},
  {name:"Bombardement de Nagasaki — Japon", lat:32.773, lng:129.86, radius:2500,
   desc:"Le 9 août 1945, la seconde bombe atomique précipita la capitulation japonaise.",
   photo:"events/nagasaki_1945.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Seconde arme nucléaire de l'histoire, larguée le 9 août 1945 sur une ville portuaire après un premier objectif écarté par les nuages"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de 1945 dans une ville de l'ouest d'un archipel d'Asie de l'Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Deuxième bombe atomique, port du Ky?sh?"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le bombardement de Nagasaki, Japon"}
  ]},
  {name:"Conférence de Yalta — Crimée", lat:44.47, lng:34.14, radius:600,
   desc:"En février 1945, les trois Grands y dessinèrent l'après-guerre.",
   photo:"events/yalta.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Sommet de février 1945 dans un palais au bord de la mer Noire, trois dirigeants alliés y partageant l'Europe d'après-guerre"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Conférence de la fin de la Seconde Guerre mondiale sur une péninsule de la mer Noire"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Rencontre des trois Grands, Crimée"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La conférence de Yalta, Crimée"}
  ]},
  {name:"Procès de Nuremberg — Bavière, Allemagne", lat:49.453, lng:11.081, radius:600,
   desc:"En 1945-1946, les dignitaires nazis furent jugés, fondant le droit pénal international.",
   photo:"events/nuremberg.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Procès de 1945-1946 d'anciens dignitaires d'un régime déchu, acte de naissance d'une justice pénale internationale"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de l'après-guerre dans le sud d'un pays d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Procès des dignitaires nazis, ville de Bavière"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le procès de Nuremberg, Allemagne"}
  ]},
  {name:"Pont aérien de Berlin — Allemagne", lat:52.482, lng:13.4, radius:2000,
   desc:"En 1948-1949, un pont aérien ravitailla Berlin-Ouest bloqué par les Soviétiques.",
   photo:"events/pont_aerien_berlin.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ravitaillement par les airs de 1948-1949 d'une ville assiégée par un blocus terrestre, un avion toutes les quelques minutes"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du début de la guerre froide dans une capitale d'Europe centrale divisée"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Blocus brisé par les airs, aéroport de Tempelhof"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le pont aérien de Berlin, Allemagne"}
  ]},
  {name:"Construction du mur de Berlin — Allemagne", lat:52.5163, lng:13.3777, radius:2000,
   desc:"En 1961, l'édification du mur figea la division de la ville pour 28 ans.",
   photo:"events/construction_mur.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Barrière dressée en une nuit d'août 1961 en travers d'une ville, fracturant familles et quartiers pour près de trois décennies"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du début des années 1960 dans une capitale d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Édification du Mur, secteur de la porte de Brandebourg"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La construction du mur de Berlin, Allemagne"}
  ]},
  {name:"Discours « I Have a Dream » — Washington, USA", lat:38.8893, lng:-77.0502, radius:500,
   desc:"En 1963, Martin Luther King galvanisa le mouvement des droits civiques.",
   photo:"events/i_have_a_dream.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Discours de 1963 prononcé au pied d'un mémorial de marbre devant une immense foule pour les droits civiques"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du milieu du XXe siècle dans une capitale de la côte est américaine"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Discours de Martin Luther King, esplanade du Mall"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le discours « I Have a Dream », Washington, USA"}
  ]},
  {name:"Assassinat de JFK — Dallas, Texas, USA", lat:32.779, lng:-96.808, radius:400,
   desc:"En 1963, le président américain fut abattu dans un cortège, événement mondial.",
   photo:"events/jfk.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Coups de feu de novembre 1963 sur un cortège présidentiel traversant une place, drame filmé qui hante encore les théories"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Assassinat politique du milieu du XXe siècle dans le sud des États-Unis"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Assassinat du président américain, Dealey Plaza"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'assassinat de JFK, Dallas, USA"}
  ]},
  {name:"Massacre de Tian'anmen — Pékin, Chine", lat:39.906, lng:116.391, radius:1000,
   desc:"En 1989, la répression du mouvement démocratique marqua durablement la Chine.",
   photo:"events/tiananmen.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Répression du printemps 1989 d'un mouvement étudiant sur une vaste place, image d'un homme seul face à une colonne de blindés"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de la fin des années 1980 dans une capitale d'Asie de l'Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Répression du mouvement démocratique, grande place de Pékin"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Tian'anmen, Chine"}
  ]},
  {name:"Chute du mur / Réunification — Berlin, Allemagne", lat:52.514, lng:13.35, radius:1500,
   desc:"En 1990, la réunification allemande scella la fin de la guerre froide en Europe.",
   photo:"events/reunification_all.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Réunification proclamée en 1990 d'un pays coupé en deux depuis la fin d'un conflit mondial, feu d'artifice devant une porte monumentale"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du début des années 1990 dans une capitale d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Réunification allemande, cœur de Berlin"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La réunification allemande, Allemagne"}
  ]},
  {name:"Libération de Nelson Mandela — Le Cap, Afrique du Sud", lat:-33.925, lng:18.424, radius:1500,
   desc:"En 1990, la libération de Mandela ouvrit la fin de l'apartheid.",
   photo:"events/mandela_1990.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Libération de 1990 d'un prisonnier de 27 ans devenu figure mondiale, poing levé au balcon d'un hôtel de ville avant un discours à la foule"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du début des années 1990 dans une grande ville d'Afrique australe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Libération de Mandela, centre du Cap"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La libération de Nelson Mandela, Afrique du Sud"}
  ]},
  {name:"Premier vol des frères Wright — Caroline du Nord, USA", lat:36.0186, lng:-75.667, radius:600,
   desc:"En 1903, le premier vol motorisé contrôlé ouvrit l'ère de l'aviation.",
   photo:"events/wright.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Premier vol motorisé contrôlé de décembre 1903, une douzaine de secondes au-dessus des dunes d'une côte venteuse"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du début du XXe siècle sur une côte de l'est des États-Unis"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Premier vol des frères Wright, dunes de Kitty Hawk"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le premier vol des frères Wright, USA"}
  ]},
  {name:"Naufrage du Titanic — Atlantique Nord", lat:41.726, lng:-49.948, radius:15000,
   desc:"En 1912, le paquebot réputé insubmersible sombra après avoir heurté un iceberg.",
   photo:"events/titanic.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Naufrage d'avril 1912 d'un paquebot réputé insubmersible, heurtant un iceberg dans une nuit glacée de l'océan Nord"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Catastrophe maritime du début du XXe siècle dans l'Atlantique Nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Naufrage du Titanic, au large de Terre-Neuve"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le naufrage du Titanic, Atlantique"}
  ]},
  {name:"Ruée vers l'or de Sutter's Mill — Californie, USA", lat:38.801, lng:-120.893, radius:2000,
   desc:"En 1848, la découverte d'or déclencha une ruée qui transforma l'Ouest américain.",
   photo:"events/ruee_or.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Pépites trouvées en 1848 dans le bief d'une scierie, déclenchant une ruée de dizaines de milliers de chercheurs vers l'Ouest"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du milieu du XIXe siècle dans l'ouest des États-Unis"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Découverte d'or de Sutter's Mill, contreforts de la Sierra"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La ruée vers l'or de 1849, Californie, USA"}
  ]},
  {name:"Achèvement du transcontinental — Utah, USA", lat:41.62, lng:-112.55, radius:1000,
   desc:"En 1869, la jonction des rails relia les deux côtes des États-Unis.",
   photo:"events/transcontinental.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Jonction de 1869 scellée par un crampon d'or, deux réseaux ferrés se rejoignant enfin au milieu d'un désert d'altitude"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du XIXe siècle dans l'ouest des États-Unis"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Jonction du chemin de fer transcontinental, Promontory"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le transcontinental américain, Utah, USA"}
  ]},
  {name:"Inauguration du canal de Suez — Égypte", lat:30.6, lng:32.27, radius:3000,
   desc:"En 1869, l'ouverture du canal relia Méditerranée et mer Rouge.",
   photo:"events/suez_1869.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ouverture de 1869 d'un canal reliant deux mers, cortège de navires pavoisés inaugurant un raccourci maritime entre deux continents"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du XIXe siècle sur un isthme d'Afrique du Nord-Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Inauguration du canal de Suez, isthme égyptien"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'inauguration du canal de Suez, Égypte"}
  ]},
  {name:"Bataille de Solférino — Lombardie, Italie", lat:45.37, lng:10.57, radius:4000,
   desc:"En 1859, cette bataille sanglante inspira la fondation de la Croix-Rouge.",
   photo:"events/solferino.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Carnage de 1859 dont l'horreur inspira à un témoin suisse la création d'une organisation humanitaire universelle"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du milieu du XIXe siècle dans le nord d'une péninsule méditerranéenne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Bataille à l'origine de la Croix-Rouge, Lombardie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Solférino, Italie"}
  ]},
  {name:"Bataille de Sedan (1870) — Ardennes, France", lat:49.7, lng:4.94, radius:4000,
   desc:"En 1870, la capture de Napoléon III précipita la chute du Second Empire.",
   photo:"events/sedan_1870.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Encerclement de 1870 où un empereur se rendit avec son armée, effondrant un régime et allumant une révolution"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la fin du XIXe siècle dans le nord-est de la France"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Capitulation de Napoléon III, Ardennes"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Sedan, France"}
  ]},
  {name:"Commune de Paris — France", lat:48.862, lng:2.34, radius:3500,
   desc:"En 1871, l'insurrection parisienne et sa répression sanglante marquèrent l'histoire ouvrière.",
   photo:"events/commune_paris.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Insurrection du printemps 1871 d'une capitale autogérée durant deux mois, écrasée lors d'une « semaine sanglante » contre les murs d'un cimetière"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de la fin du XIXe siècle dans une capitale d'Europe de l'Ouest"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"La Commune insurrectionnelle, capitale française"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Commune de Paris, France"}
  ]},
  {name:"Bataille d'Isandhlwana — KwaZulu-Natal, Afrique du Sud", lat:-28.35, lng:30.65, radius:3000,
   desc:"En 1879, les Zoulous infligèrent une lourde défaite à l'armée britannique.",
   photo:"events/isandlwana.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Désastre colonial de 1879 où des guerriers à sagaies submergèrent une colonne équipée de fusils, au pied d'une colline en forme de sphinx"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la fin du XIXe siècle dans l'est d'un pays d'Afrique australe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Défaite britannique face aux Zoulous, KwaZulu-Natal"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Isandhlwana, Afrique du Sud"}
  ]},
  {name:"Bataille d'Adoua — Tigré, Éthiopie", lat:14.16, lng:38.9, radius:5000,
   desc:"En 1896, la victoire éthiopienne stoppa la colonisation italienne, cas unique en Afrique.",
   photo:"events/adoua.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 1896 d'un empire africain sur une puissance coloniale européenne, préservant une rare indépendance sur tout un continent"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la fin du XIXe siècle sur les hauts plateaux d'Afrique de l'Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire éthiopienne sur l'Italie, région du Tigré"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Adoua, Éthiopie"}
  ]},
  {name:"Bataille d'Omdurman — Khartoum, Soudan", lat:15.65, lng:32.48, radius:5000,
   desc:"En 1898, les mitrailleuses britanniques anéantirent l'armée mahdiste.",
   photo:"events/omdurman.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Massacre technologique de 1898 où des mitrailleuses fauchèrent une armée de derviches chargeant à découvert, apogée d'une conquête fluviale"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la fin du XIXe siècle au bord d'un grand fleuve d'Afrique du Nord-Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire britannique sur les Mahdistes, près de Khartoum"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Omdurman, Soudan"}
  ]},
  {name:"Révolte des Cipayes — Delhi, Inde", lat:28.656, lng:77.241, radius:4000,
   desc:"En 1857, la grande révolte indienne ébranla la domination britannique.",
   photo:"events/cipayes.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Soulèvement de 1857 déclenché par des cartouches suspectes, insurrection qui rétablit brièvement un vieil empereur sur un trône fantoche"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Révolte du milieu du XIXe siècle dans le nord d'un pays d'Asie du Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grande révolte indienne, vieille Delhi"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La révolte des Cipayes, Inde"}
  ]},
  {name:"Bataille de Panipat (1526) — Haryana, Inde", lat:29.39, lng:76.97, radius:4000,
   desc:"En 1526, Babur fonda l'Empire moghol par sa victoire décisive.",
   photo:"events/panipat_1526.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 1526 où l'artillerie et une tactique de chariots enchaînés brisèrent une armée bien plus nombreuse, fondant un empire de plusieurs siècles"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du début du XVIe siècle dans une plaine du nord d'un pays d'Asie du Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Fondation de l'Empire moghol par Babur, Haryana"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Panipat, Inde"}
  ]},
  {name:"Bataille de l'Hydaspe — Pendjab, Pakistan", lat:32.85, lng:73.75, radius:5000,
   desc:"En 326 av. J.-C., Alexandre vainquit le roi Pôros mais atteignit la limite de sa conquête.",
   photo:"events/hydaspe.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 326 av. J.-C. remportée sous la mousson contre des éléphants de guerre, dernière grande bataille avant que les troupes refusent d'avancer"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille antique le long d'un fleuve du nord d'un pays d'Asie du Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire d'Alexandre sur Pôros, Pendjab"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de l'Hydaspe, Pakistan"}
  ]},
  {name:"Bataille de Tsushima — Détroit de Corée", lat:34.6, lng:129.5, radius:15000,
   desc:"En 1905, la flotte japonaise anéantit l'escadre russe, séisme géopolitique.",
   photo:"events/tsushima.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Anéantissement en 1905 d'une flotte venue de l'autre bout du monde par une marine asiatique montante, séisme dans l'ordre colonial"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille navale du début du XXe siècle dans un détroit d'Asie de l'Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire japonaise sur la flotte russe, détroit de Tsushima"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Tsushima, Japon"}
  ]},
  {name:"Restauration Meiji — Kyoto, Japon", lat:35.021, lng:135.756, radius:2000,
   desc:"En 1868, la restauration impériale lança la modernisation fulgurante du Japon.",
   photo:"events/meiji.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Restauration de 1868 rendant le pouvoir à un jeune empereur, fin d'un régime de guerriers et bond d'un archipel vers l'ère industrielle"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du milieu du XIXe siècle dans une ancienne capitale d'un archipel d'Asie de l'Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Restauration impériale Meiji, ancienne capitale"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La restauration Meiji, Japon"}
  ]},
  {name:"Bataille de Dan-no-ura — Yamaguchi, Japon", lat:33.96, lng:130.96, radius:4000,
   desc:"En 1185, cette bataille navale acheva la guerre de Genpei et fonda le shogunat.",
   photo:"events/dan_no_ura.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Bataille navale de 1185 dans un détroit à forts courants, un empereur-enfant englouti avec son clan vaincu, aube d'un pouvoir guerrier"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille médiévale dans un détroit du sud-ouest d'un archipel d'Asie de l'Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Fin de la guerre de Genpei, détroit de Shimonoseki"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Dan-no-ura, Japon"}
  ]},
  {name:"Proclamation de la République populaire — Pékin, Chine", lat:39.907, lng:116.391, radius:600,
   desc:"En 1949, Mao proclama la RPC depuis la porte de la Paix céleste.",
   photo:"events/rpc_1949.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Proclamation d'octobre 1949 depuis le balcon d'une porte monumentale au terme d'une longue guerre civile, naissance d'une république populaire"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du milieu du XXe siècle dans une capitale d'Asie de l'Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Fondation de la Chine populaire, place de Pékin"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La proclamation de la RPC, Chine"}
  ]},
  {name:"Révolte des Boxers — Pékin, Chine", lat:39.904, lng:116.391, radius:3000,
   desc:"En 1900, le soulèvement anti-étranger fut réprimé par une coalition internationale.",
   photo:"events/boxers.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Soulèvement de 1900 de sociétés secrètes pratiquant les arts martiaux contre les étrangers, légations assiégées puis délivrées par huit puissances"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Révolte du tournant du XXe siècle dans une capitale d'Asie de l'Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Révolte des Boxers, quartier des légations de Pékin"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La révolte des Boxers, Chine"}
  ]},
  {name:"Départ de la Longue Marche — Jiangxi, Chine", lat:25.885, lng:116.035, radius:4000,
   desc:"En 1934, la retraite épique des communistes chinois sur 12 000 km forgea leur mythe.",
   photo:"events/longue_marche.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Départ en 1934 d'une retraite de plus de 10 000 km à travers monts et rivières, épreuve fondatrice d'un futur pouvoir et de son chef"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement des années 1930 dans le sud-est d'un pays d'Asie de l'Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Début de la Longue Marche, base du Jiangxi"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Longue Marche, Chine"}
  ]},
  {name:"Offensive du Têt — Hô Chi Minh-Ville, Vietnam", lat:10.777, lng:106.7, radius:4000,
   desc:"En 1968, l'offensive surprise retourna l'opinion américaine sur la guerre.",
   photo:"events/tet.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Offensive surprise du nouvel an lunaire 1968, un commando jusque dans l'enceinte d'une ambassade, choc psychologique retournant une opinion lointaine"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de la fin des années 1960 dans le sud d'un pays d'Asie du Sud-Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'offensive du Têt, ancienne Saïgon"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'offensive du Têt, Vietnam"}
  ]},
  {name:"Révolution iranienne — Téhéran, Iran", lat:35.7, lng:51.42, radius:4000,
   desc:"En 1979, la chute du chah instaura une république islamique.",
   photo:"events/revolution_iran.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Révolution de 1979 qui renversa une monarchie et fit revenir d'exil un dignitaire religieux acclamé par des foules immenses"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de la fin des années 1970 dans une capitale du Proche-Orient"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Révolution islamique, capitale iranienne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La révolution iranienne, Iran"}
  ]},
  {name:"Boston / Bataille de Bunker Hill — Massachusetts, USA", lat:42.376, lng:-71.061, radius:800,
   desc:"En 1775, cette bataille coûteuse montra que les insurgés pouvaient tenir tête aux Britanniques.",
   photo:"events/bunker_hill.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Bataille de 1775 sur une colline dominant un port, victoire si coûteuse pour les habits rouges qu'elle en eut le goût d'une défaite"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XVIIIe siècle dans le nord-est des États-Unis, guerre d'Indépendance"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Bataille de Bunker Hill, hauteurs de Boston"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Bunker Hill, USA"}
  ]},
  {name:"Bataille de Trenton — New Jersey, USA", lat:40.22, lng:-74.76, radius:2000,
   desc:"En 1776, Washington traversa le fleuve gelé pour une victoire surprise qui ranima la révolution.",
   photo:"events/trenton.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Coup d'audace de la nuit de Noël 1776, une traversée de fleuve charriant des glaces pour surprendre une garnison endormie"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la fin du XVIIIe siècle dans le nord-est des États-Unis"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire surprise de Washington, rives de la Delaware"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Trenton, USA"}
  ]},
  {name:"Bataille de Puebla (Cinco de Mayo) — Puebla, Mexique", lat:19.05, lng:-98.19, radius:2500,
   desc:"En 1862, la victoire mexicaine sur les Français est commémorée chaque 5 mai.",
   photo:"events/puebla.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire inattendue du 5 mai 1862 d'une armée en infériorité sur un corps expéditaire européen réputé invincible"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du milieu du XIXe siècle dans le centre d'un pays d'Amérique du Nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire mexicaine du Cinco de Mayo, ville de Puebla"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Puebla, Mexique"}
  ]},
  {name:"Bataille de Camerone — Veracruz, Mexique", lat:18.94, lng:-96.3, radius:600,
   desc:"En 1863, la résistance héroïque de la Légion étrangère devint sa légende fondatrice.",
   photo:"events/camerone.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Résistance à un contre soixante en 1863 d'une poignée de légionnaires retranchés dans une ferme, main de bois d'un capitaine devenue relique"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Fait d'armes du milieu du XIXe siècle dans l'est d'un pays d'Amérique du Nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Combat de Camerone de la Légion étrangère, Veracruz"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le combat de Camerone, Mexique"}
  ]},
  {name:"Krach de Wall Street — New York, USA", lat:40.7069, lng:-74.0113, radius:500,
   desc:"En 1929, l'effondrement boursier déclencha la Grande Dépression mondiale.",
   photo:"events/krach_1929.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Effondrement boursier d'octobre 1929 dans une rue étroite de la finance, « jeudi noir » ouvrant une décennie de misère mondiale"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de la fin des années 1920 dans une grande ville de la côte est américaine"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Krach boursier, quartier de la Bourse"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le krach de Wall Street, New York, USA"}
  ]},
  {name:"Marche sur Rome — Italie", lat:41.902, lng:12.49, radius:3000,
   desc:"En 1922, la marche fasciste porta Mussolini au pouvoir.",
   photo:"events/marche_rome.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Défilé d'intimidation de 1922 de chemises colorées vers une capitale, ouvrant les portes du pouvoir à leur chef sans véritable combat"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du début des années 1920 dans une capitale d'Europe du Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Marche fasciste sur la capitale italienne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La marche sur Rome, Italie"}
  ]},
  {name:"Attentats du 11 septembre — New York, USA", lat:40.7115, lng:-74.0134, radius:1500,
   desc:"En 2001, les attaques contre les tours jumelles bouleversèrent la géopolitique mondiale.",
   photo:"events/onze_septembre.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Attaques coordonnées d'un matin de septembre 2001 contre deux tours jumelles d'un quartier d'affaires, bascule géopolitique du nouveau siècle"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du début des années 2000 dans une grande ville de la côte est américaine"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Attentats contre le World Trade Center, sud de Manhattan"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les attentats du 11 septembre, New York, USA"}
  ]},
  {name:"Bataille de Chéronée — Béotie, Grèce", lat:38.49, lng:22.85, radius:3000,
   desc:"En 338 av. J.-C., Philippe II de Macédoine soumit les cités grecques.",
   photo:"events/cheronee.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 338 av. J.-C. d'un roi du Nord sur des cités jalouses, un bataillon d'amants réputé invincible anéanti sous un lion de pierre"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille antique dans une plaine du sud-est de l'Europe, IVe siècle av. J.-C."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de Philippe II sur les cités grecques, Béotie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Chéronée, Grèce"}
  ]},
  {name:"Bataille de Leuctres — Béotie, Grèce", lat:38.28, lng:23.14, radius:3000,
   desc:"En 371 av. J.-C., Thèbes brisa l'hégémonie spartiate.",
   photo:"events/leuctres.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 371 av. J.-C. qui, par un ordre oblique novateur, abattit la suprématie d'une cité guerrière réputée imbattable"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille antique dans une plaine du sud-est de l'Europe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire thébaine sur Sparte, Béotie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Leuctres, Grèce"}
  ]},
  {name:"Fondation d'Alexandrie — Égypte", lat:31.2, lng:29.9, radius:3000,
   desc:"En 331 av. J.-C., Alexandre fonda la cité qui deviendra un phare du savoir antique.",
   photo:"events/alexandrie.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cité fondée en 331 av. J.-C. par un conquérant sur une côte, futur foyer d'un phare géant et d'une bibliothèque universelle"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Fondation antique d'une ville sur une côte d'Afrique du Nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Fondation d'Alexandrie par Alexandre, delta du Nil"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La fondation d'Alexandrie, Égypte"}
  ]},
  {name:"Révolte de Boudicca — Londres, Angleterre", lat:51.51, lng:-0.09, radius:3000,
   desc:"Vers 60-61, la reine Boudicca souleva les Bretons et brûla Londinium.",
   photo:"events/boudicca.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Soulèvement de l'an 60 mené par une reine celte outragée, trois villes romaines incendiées avant l'écrasement final"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Révolte antique dans le sud d'une île d'Europe du Nord-Ouest"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Révolte de Boudicca, Londinium"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La révolte de Boudicca, Angleterre"}
  ]},
  {name:"Bataille de Las Navas de Tolosa — Jaén, Espagne", lat:38.28, lng:-3.58, radius:5000,
   desc:"En 1212, la coalition chrétienne remporta une victoire décisive de la Reconquista.",
   photo:"events/las_navas.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 1212 d'une coalition de royaumes chrétiens sur un califat, tournant d'une longue reconquête péninsulaire"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XIIIe siècle dans le sud d'une péninsule ibérique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire chrétienne décisive, Sierra Morena"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Las Navas de Tolosa, Espagne"}
  ]},
  {name:"Chute d'Acre (1291) — Israël", lat:32.92, lng:35.07, radius:2000,
   desc:"En 1291, la prise de la dernière place forte croisée acheva les États latins d'Orient.",
   photo:"events/acre_1291.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Chute en 1291 du dernier bastion côtier d'une présence latine en Orient, fin de deux siècles de croisades"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de la fin du XIIIe siècle sur une côte du Proche-Orient"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Prise d'Acre par les Mamelouks, littoral de Galilée"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La chute d'Acre, Israël"}
  ]},
  {name:"Bataille de Morat — Fribourg, Suisse", lat:46.93, lng:7.11, radius:2500,
   desc:"En 1476, les Confédérés écrasèrent Charles le Téméraire.",
   photo:"events/morat.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Écrasement en 1476 d'un duc ambitieux par des piquiers montagnards, deuxième d'une série de défaites qui lui coûtera bientôt la vie"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la fin du XVe siècle dans l'ouest d'un pays alpin d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire suisse sur Charles le Téméraire, lac de Morat"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Morat, Suisse"}
  ]},
  {name:"Arrivée de la peste noire — Messine, Sicile, Italie", lat:38.193, lng:15.554, radius:3000,
   desc:"En 1347, des navires génois introduisirent la peste en Europe par ce port.",
   photo:"events/peste_1347.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Navires accostant en 1347 avec des équipages mourants, portant d'Orient un fléau qui allait emporter un tiers d'un continent"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du milieu du XIVe siècle dans un port du sud d'une péninsule méditerranéenne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Arrivée de la peste noire en Europe, port sicilien"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'arrivée de la peste noire, Messine, Italie"}
  ]},
  {name:"Bataille de Lechfeld — Bavière, Allemagne", lat:48.27, lng:10.86, radius:4000,
   desc:"En 955, Otton Ier arrêta les Hongrois, sécurisant l'Europe centrale.",
   photo:"events/lechfeld.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 955 qui mit fin aux raids dévastateurs de cavaliers venus de l'est, sacrant un roi bientôt empereur"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du Xe siècle dans le sud d'un pays d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire d'Otton Ier sur les Hongrois, près d'Augsbourg"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille du Lechfeld, Allemagne"}
  ]},
  {name:"Bataille de Stamford Bridge — Yorkshire, Angleterre", lat:53.99, lng:-0.91, radius:2000,
   desc:"En 1066, Harold repoussa les Norvégiens juste avant Hastings.",
   photo:"events/stamford_bridge.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de septembre 1066 d'un roi saxon sur des envahisseurs venus du Nord, triomphe éphémère à trois semaines d'un désastre au sud"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du XIe siècle dans le nord d'une île d'Europe du Nord-Ouest"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de Harold sur les Norvégiens, Yorkshire"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Stamford Bridge, Angleterre"}
  ]},
  {name:"Bataille de Nicopolis — Bulgarie", lat:43.71, lng:24.9, radius:4000,
   desc:"En 1396, la dernière grande croisade échoua face aux Ottomans.",
   photo:"events/nicopolis.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Déroute de 1396 d'une chevalerie occidentale trop confiante face aux Ottomans, sur les rives d'un grand fleuve, dernière grande croisade"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la fin du XIVe siècle sur le Danube, sud-est de l'Europe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Défaite croisée face aux Ottomans, forteresse danubienne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Nicopolis, Bulgarie"}
  ]},
  {name:"Bataille de Varna — Bulgarie", lat:43.21, lng:27.91, radius:4000,
   desc:"En 1444, la mort du roi Ladislas scella l'échec de la croisade anti-ottomane.",
   photo:"events/varna.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Défaite de 1444 où un jeune roi tomba en chargeant témérairement, brisant les derniers espoirs d'endiguer une avancée ottomane vers l'Europe"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du milieu du XVe siècle sur une côte de la mer Noire, sud-est de l'Europe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Défaite croisée, port bulgare de la mer Noire"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Varna, Bulgarie"}
  ]},
  {name:"Bataille de Blenheim (Höchstädt) — Bavière, Allemagne", lat:48.633, lng:10.627, radius:4000,
   desc:"En 1704, Marlborough et le Prince Eugène brisèrent l'armée franco-bavaroise.",
   photo:"events/blenheim.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 1704 d'un tandem de généraux alliés sur les rives d'un grand fleuve, coup d'arrêt aux ambitions d'un Roi-Soleil"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du début du XVIIIe siècle dans le sud d'un pays d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de Marlborough, bord du Danube en Bavière"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Blenheim, Allemagne"}
  ]},
  {name:"Bataille de Fontenoy — Hainaut, Belgique", lat:50.55, lng:3.47, radius:2500,
   desc:"En 1745, la victoire française illustra la courtoisie guerrière du XVIIIe siècle.",
   photo:"events/fontenoy.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 1745 précédée, dit la légende, d'une invitation courtoise à l'adversaire de tirer le premier"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du milieu du XVIIIe siècle dans le sud d'un pays d'Europe de l'Ouest"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire française du maréchal de Saxe, Hainaut"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Fontenoy, Belgique"}
  ]},
  {name:"Bataille de Friedland — Kaliningrad, Russie", lat:54.44, lng:21.02, radius:4000,
   desc:"En 1807, la victoire de Napoléon força la Russie à négocier la paix de Tilsit.",
   photo:"events/friedland.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 1807 acculant une armée à un fleuve, qui poussa deux empereurs à sceller une paix sur un radeau quelques jours plus tard"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du début du XIXe siècle dans une enclave de l'ouest de la Russie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire napoléonienne avant Tilsit, ancienne Prusse-Orientale"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Friedland, Russie"}
  ]},
  {name:"Bataille de Wagram — Basse-Autriche, Autriche", lat:48.3, lng:16.58, radius:5000,
   desc:"En 1809, Napoléon vainquit l'Autriche au terme d'une bataille massive.",
   photo:"events/wagram.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 1809 arrachée par une concentration d'artillerie inédite après un premier échec sanglant sur une île fluviale"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du début du XIXe siècle dans l'est d'un pays d'Europe centrale, plaine danubienne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire de Napoléon sur l'Autriche, nord de Vienne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Wagram, Autriche"}
  ]},
  {name:"Bataille de Navarin — Messénie, Grèce", lat:36.92, lng:21.68, radius:7000,
   desc:"En 1827, la flotte ottomane fut détruite, favorisant l'indépendance grecque.",
   photo:"events/navarin.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Anéantissement en 1827 d'une flotte ottomane dans une rade fermée par trois marines européennes venues soutenir une insurrection"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille navale du XIXe siècle dans une baie du sud-ouest d'une péninsule du sud de l'Europe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Destruction de la flotte ottomane, baie de Navarin"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Navarin, Grèce"}
  ]},
  {name:"Prise d'Alger — Algérie", lat:36.78, lng:3.06, radius:3000,
   desc:"En 1830, le débarquement français ouvrit 132 ans de colonisation.",
   photo:"events/alger_1830.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Débarquement de 1830 sur une plage à l'ouest d'une baie, prétexte d'un coup d'éventail lançant plus d'un siècle de colonisation"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du XIXe siècle sur une côte d'Afrique du Nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Prise d'Alger par la France, baie algéroise"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La prise d'Alger, Algérie"}
  ]},
  {name:"Bataille de Sadowa (Königgrätz) — Tchéquie", lat:50.29, lng:15.75, radius:5000,
   desc:"En 1866, la victoire prussienne assura l'unité allemande sous Berlin.",
   photo:"events/sadowa.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoire de 1866 d'une armée aux fusils se chargeant par la culasse, réglant en une journée la rivalité pour l'unité d'un futur empire"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille du milieu du XIXe siècle dans le nord d'un pays d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Victoire prussienne sur l'Autriche, Bohême"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Sadowa, Tchéquie"}
  ]},
  {name:"Bataille de Koursk — Russie", lat:51.0, lng:36.2, radius:9000,
   desc:"En 1943, la plus grande bataille de chars de l'histoire brisa l'offensive allemande à l'Est.",
   photo:"events/koursk.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus grand affrontement blindé de l'histoire, à l'été 1943, un saillant pris en tenaille où des milliers de chars s'entrechoquèrent"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la Seconde Guerre mondiale dans l'ouest de la Russie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande bataille de chars, saillant de Koursk"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille de Koursk, Russie"}
  ]},
  {name:"Bataille d'Iwo Jima — Îles Ogasawara, Japon", lat:24.78, lng:141.32, radius:3000,
   desc:"En 1945, la prise de l'île volcanique donna lieu à une photo mondialement célèbre.",
   photo:"events/iwo_jima.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Assaut de 1945 sur une île volcanique de cendre noire, un drapeau planté au sommet immortalisé par une photographie devenue icône"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bataille de la Seconde Guerre mondiale sur une île du Pacifique Nord-Ouest"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Prise de l'île au mont Suribachi, archipel japonais"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La bataille d'Iwo Jima, Japon"}
  ]},
  {name:"Bombardement de Dresde — Saxe, Allemagne", lat:51.05, lng:13.74, radius:3000,
   desc:"En 1945, les raids alliés détruisirent la ville dans une tempête de feu.",
   photo:"events/dresde.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Raids de février 1945 déclenchant une tempête de feu qui ravagea une cité baroque surnommée « Florence de l'Elbe »"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de la fin de la Seconde Guerre mondiale dans l'est d'un pays d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Bombardement d'une ville baroque, bord de l'Elbe"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le bombardement de Dresde, Allemagne"}
  ]},
  {name:"Incendie du Reichstag — Berlin, Allemagne", lat:52.5186, lng:13.3762, radius:500,
   desc:"En 1933, l'incendie du parlement servit de prétexte à la mainmise nazie.",
   photo:"events/reichstag_1933.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Incendie criminel de 1933 d'un parlement, prétexte immédiat à la suspension des libertés et à la prise de pouvoir totale d'un régime"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du début des années 1930 dans une capitale d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Incendie du parlement allemand, quartier gouvernemental"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'incendie du Reichstag, Allemagne"}
  ]},
  {name:"Conférence de Potsdam — Brandebourg, Allemagne", lat:52.41, lng:13.07, radius:600,
   desc:"En 1945, les vainqueurs y organisèrent l'Allemagne occupée et l'ordre d'après-guerre.",
   photo:"events/potsdam.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Sommet de l'été 1945 dans un palais, où trois vainqueurs — dont un remplacé en cours de route — scellèrent le sort d'un pays vaincu"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Conférence de la fin de la Seconde Guerre mondiale près d'une capitale d'Europe centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Conférence des vainqueurs, palais de Potsdam"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La conférence de Potsdam, Allemagne"}
  ]},
  {name:"Crise des missiles de Cuba — Cuba", lat:22.72, lng:-83.05, radius:6000,
   desc:"En 1962, la découverte de missiles soviétiques amena le monde au bord de la guerre nucléaire.",
   photo:"events/missiles_cuba.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Treize jours d'octobre 1962 où des rampes de missiles repérées par avion-espion sur une île tropicale amenèrent deux blocs au bord de l'abîme"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du début des années 1960 sur une île des Caraïbes"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Crise des missiles, ouest de Cuba"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La crise des missiles de Cuba, Cuba"}
  ]},
  {name:"Festival de Woodstock — New York, USA", lat:41.701, lng:-74.88, radius:2000,
   desc:"En 1969, le festival réunit près de 500 000 personnes, symbole de la contre-culture.",
   photo:"events/woodstock.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Rassemblement musical de l'été 1969 dans un champ boueux, un demi-million de spectateurs faisant d'un festival le symbole d'une génération"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement de la fin des années 1960 dans le nord-est des États-Unis"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Festival mythique dans une ferme de l'État de New York"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le festival de Woodstock, USA"}
  ]},
  {name:"Guerre du Golfe — Libération du Koweït", lat:29.37, lng:47.978, radius:5000,
   desc:"En 1991, une coalition internationale chassa l'armée irakienne du Koweït.",
   photo:"events/golfe_1991.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Offensive éclair de 1991 d'une coalition libérant un petit émirat pétrolier envahi, puits enflammés noircissant le ciel du désert"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Conflit du début des années 1990 dans un petit pays du golfe Persique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Libération du Koweït, capitale de l'émirat"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La guerre du Golfe, Koweït"}
  ]},
  {name:"Chute de Cuzco — Pérou", lat:-13.52, lng:-71.978, radius:3000,
   desc:"En 1533, la prise de la capitale inca acheva la conquête espagnole du Pérou.",
   photo:"events/cuzco_1533.jpg",
   hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Prise en 1533 d'une capitale d'altitude aux murs de pierres parfaitement ajustées, cœur d'un empire du soleil livré aux conquérants"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Événement du XVIe siècle dans les hautes Andes d'Amérique du Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Chute de la capitale inca, vallée sacrée"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La chute de Cuzco, Pérou"}
  ]}
];

if (typeof window !== "undefined") window.EVENTS = EVENTS;