const ROUNDS=[
  {name:"Tour Eiffel — Paris, France",lat:48.8584,lng:2.2945,desc:"Symbole universel de la France, la Tour Eiffel fut d'abord critiquée comme une «verrue de fer» avant de devenir le monument payant le plus visité au monde avec 7 millions de visiteurs par an.",photo:"photos/tour_de_pise.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Champ-de-Mars, Exposition Universelle de 1889, construite par Gustave Eiffel"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"7ème arrondissement de rive gauche de la Seine, face au Trocadéro"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Monument en fer forgé le plus visité au monde, symbole de Paris"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Tour Eiffel à Paris, France"}
  ]},
  {name:"Notre-Dame de Paris — France",lat:48.853,lng:2.3499,desc:"Joyau du gothique français, Notre-Dame a failli disparaître lors de l'incendie d'avril 2019. Sa reconstruction mobilisa des artisans du monde entier et elle a rouvert ses portes en décembre 2024.",photo:"https://upload.wikimedia.org/wikipedia/commons/a/af/Notre-Dame_de_Paris_2013-07-24.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Île de la Cité, cathédrale gothique dont la construction débuta en 1163 sous l'évêque Maurice de Sully"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre géographique de point zéro des routes nationales"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cathédrale incendiée en 2019 et rouverte en décembre 2024"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La cathédrale Notre-Dame à Paris, France"}
  ]},
  {name:"Moulin Rouge — Montmartre, Paris",lat:48.8842,lng:2.3322,desc:"Fondé en 1889, le Moulin Rouge inventa le french cancan et accueillit Toulouse-Lautrec, Mistinguett et Edith Piaf. Ses 1 200 plumes d'autruche par spectacle en font un symbole du Paris de la fête.",photo:"https://upload.wikimedia.org/wikipedia/commons/4/44/Paris%2C_Moulin_Rouge_--_2014_--_1220.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Boulevard de Clichy, Pigalle — cabaret fondé en 1889 par Charles Zidler et Joseph Oller"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier de Montmartre, au pied de la Butte, quartier historique de la capitale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cabaret parisien mondialement célèbre pour le french cancan"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le cabaret du Moulin Rouge à Paris, France"}
  ]},
  {name:"Colisée — Rome, Italie",lat:41.8902,lng:12.4922,desc:"L'amphithéâtre le plus grand de l'Antiquité pouvait se remplir d'eau pour simuler des batailles navales. Ses 80 sorties permettaient d'évacuer 80 000 spectateurs en moins de 10 minutes.",photo:"https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Amphithéâtre flavien bâti sous Vespasien en 70 ap. J.-C., Via Sacra, entre le Forum et le Palatin"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre historique, entre le Forum Romain et le mont Palatin"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand amphithéâtre antique du monde, pouvant accueillir 80 000 spectateurs"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Colisée à Rome, Italie"}
  ]},
  {name:"Chapelle Sixtine — Vatican",lat:41.9029,lng:12.4545,desc:"Michel-Ange peignit les 512 m² de la voûte en seulement 4 ans, allongé sur un échafaudage. La scène de la création d'Adam, où les doigts de Dieu et de l'homme se frôlent, reste l'une des images les plus reproduites de l'Histoire.",photo:"https://upload.wikimedia.org/wikipedia/commons/1/1c/Cappella_Sistina_-_2005.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Chapelle palatiale d'une cité-État souveraine, plafond peint par Michel-Ange entre 1508 et 1512 sur commande du pape Jules II"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Musées, cité-État enclavée dans bord du Tibre"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus petit État souverain du monde, siège de la papauté catholique"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Chapelle Sixtine au Vatican (enclave de Rome)"}
  ]},
  {name:"Sagrada Família — Barcelone, Espagne",lat:41.4036,lng:2.1744,desc:"Gaudí consacra les 43 dernières années de sa vie à cette cathédrale. Renversé par un tramway en 1926, il fut enterré dans sa propre église. La construction, financée uniquement par les entrées des visiteurs, devrait s'achever en 2026.",photo:"https://upload.wikimedia.org/wikipedia/commons/7/78/SF_maig_2026.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Basilique d'Antoni Gaudí, chantier ouvert depuis 1882 dans un quartier moderniste — toujours en construction"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier moderniste de la deuxième ville, à deux kilomètres de la mer"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cathédrale inachevée la plus visitée d'Europe, en Catalogne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Sagrada Família à Barcelone, Espagne"}
  ]},
  {name:"Alhambra — Grenade, Espagne",lat:37.1761,lng:-3.5881,desc:"Ce palais nasride renferme l'une des plus belles décorations islamiques du monde. Ses jardins de l'Generalife, alimentés par un système hydraulique vieux de 700 ans, restent en fleur toute l'année.",photo:"https://upload.wikimedia.org/wikipedia/commons/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Palais et forteresse nasride du XIVe siècle sur une colline aux pieds d'une sierra enneigée"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Colline surplombant le quartier Albaicín, face à la Sierra Nevada, Andalousie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Chef-d'œuvre de l'architecture mauresque, le plus visité d'Espagne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Alhambra de Grenade, en Andalousie (Espagne)"}
  ]},
  {name:"Big Ben — Londres, Royaume-Uni",lat:51.5007,lng:-0.1246,desc:"Big Ben ne désigne pas la tour mais la cloche de 13,7 tonnes qu'elle abrite. Silenciée pour restauration de 2017 à 2022, elle a retenti à nouveau pour le couronnement de Charles III en mai 2023.",photo:"https://upload.wikimedia.org/wikipedia/commons/4/43/Elizabeth_Tower%2C_June_2022.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Tour Elizabeth au Palais de Westminster, inaugurée en 1859, bord de la Tamise"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier de Westminster, à 500m du 10 Downing Street, cœur politique de la capitale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Horloge emblématique du Parlement britannique, symbole de Londres"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Big Ben à Londres, Royaume-Uni"}
  ]},
  {name:"Stonehenge — Wiltshire, Royaume-Uni",lat:51.1789,lng:-1.8262,desc:"Stonehenge fut édifié en trois phases entre -3000 et -1500 av. J.-C. Les plus grandes pierres pesant 25 tonnes furent transportées depuis le Pays de Galles sur 250 km, probablement à l'aide de traîneaux, de rondins et de rivières.",photo:"https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cercle de mégalithes érigé entre -3000 et -1500 av. J.-C. sur la plaine de Salisbury"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Comté du Wiltshire, plaine du sud du pays, à 13 km de la cathédrale de Salisbury"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Monument préhistorique le plus célèbre d'Europe, classé UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Stonehenge dans le comté du Wiltshire, Angleterre (Royaume-Uni)"}
  ]},
  {name:"Acropole — Athènes, Grèce",lat:37.9715,lng:23.7267,desc:"Le Parthénon n'a jamais été achevé dans sa forme originale : ses colonnes légèrement inclinées vers l'intérieur et bombées créaient une illusion d'optique le faisant paraître parfaitement droit.",photo:"photos/acropole_de_lindos.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Rocher calcaire de 156m surplombant la ville, site du Parthénon dédié à Athéna Parthénos"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier Plaka, rive du golfe Saronique, région de l'Attique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Temple grec antique le plus célèbre du monde, berceau de la civilisation occidentale"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Acropole à Athènes, Grèce"}
  ]},
  {name:"Palais de l'Élysée — Paris, France",lat:48.8699,lng:2.3167,desc:"Construit en 1722, le palais de l'Élysée fut la résidence de Madame de Pompadour, favorite de Louis XV. Devenu résidence présidentielle en 1848, il possède un standard téléphonique actif 24h/24 relié directement à la force de frappe nucléaire française.",photo:"photos/palais_de_buckingham.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Rue du Faubourg Saint-Honoré, 8ème arrondissement, résidence officielle du président de la République française depuis 1848"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier des Champs-Élysées, entre le Grand Palais et la Madeleine"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Résidence et bureau du président de la République française"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais de l'Élysée à Paris, France"}
  ]},
  {name:"Château de Versailles — France",lat:48.8049,lng:2.1204,desc:"Versailles consomma 6% du budget total du royaume sous Louis XIV. Ses jardins de 800 hectares nécessitaient 1 200 personnes pour leur entretien. Le roi se levait à 8h30 dans une cérémonie appelée le «Lever» : 200 courtisans s'y bousculaient pour tenir sa chemise ou lui présenter sa perruque.",photo:"photos/chateau_de_blarney.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Château royal de Louis XIV, transformé à partir de 1661 par Jules Hardouin-Mansart, galerie des Glaces"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune des Yvelines, à 17 km au sud-ouest de la capitale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand château du monde par surface, ancienne résidence royale française"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Versailles, près de Paris (France)"}
  ]},
  {name:"Rijksmuseum — Amsterdam, Pays-Bas",lat:52.36,lng:4.8852,desc:"La «Ronde de nuit» de Rembrandt mesure 3,6 m × 4,3 m. Pour la déplacer lors d'une restauration en 1975, les autorités néerlandaises percèrent une porte spéciale dans le mur du musée.",photo:"https://upload.wikimedia.org/wikipedia/commons/4/47/Rijksmuseum_from_Museumplein_2523.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Musée national d'un pays du nord de l'Europe inauguré en 1885 sur une grande place, abritant La Ronde de Nuit de Rembrandt"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier des musées au sud du centre historique, entre le Vondelpark et les canaux"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Principal musée d'art et d'histoire des Pays-Bas, à Amsterdam"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Rijksmuseum à Amsterdam, Pays-Bas"}
  ]},
  {name:"Maison d'Anne Frank — Amsterdam",lat:52.3752,lng:4.8839,desc:"Anne Frank rédigea son journal entre 1942 et 1944, dans une annexe secrète cachée derrière une bibliothèque pivotante. Traduit en 70 langues, son témoignage est l'un des livres les plus lus au monde.",photo:"https://upload.wikimedia.org/wikipedia/commons/f/f4/AnneFrankHuisAmsterdam.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Prinsengracht 263, maison où Anne Frank se cacha avec sa famille de 1942 à 1944"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier du Jordaan, rive ouest du canal Prinsengracht, Amsterdam"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Musée dédié à Anne Frank, auteure du célèbre journal de guerre"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Maison d'Anne Frank à Amsterdam, Pays-Bas"}
  ]},
  {name:"Mur de Berlin — Allemagne",lat:52.5351,lng:13.3905,desc:"Le mur fut construit en une seule nuit du 12 au 13 août 1961, séparant 40 000 Berlinois de leurs familles. Il tomba non par décision officielle mais suite à une annonce télévisée mal préparée le 9 novembre 1989.",photo:"https://upload.wikimedia.org/wikipedia/commons/5/5d/Berlinermauer.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"East Side Gallery, Mühlenstraße, vestiges du mur érigé en 1961 sur ordre d'Erich Honecker"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bord de la Spree, quartier de Friedrichshain, secteur oriental de la capitale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand fragment subsistant du mur qui divisait Berlin de 1961 à 1989"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les vestiges du Mur de Berlin, Allemagne"}
  ]},
  {name:"Neuschwanstein — Bavière, Allemagne",lat:47.5576,lng:10.7498,desc:"Louis II de Bavière ne dormit que 11 nuits dans son château de conte de fées avant d'être déclaré fou et mort mystérieusement. Walt Disney s'en inspira directement pour le château de La Belle au Bois Dormant.",photo:"https://upload.wikimedia.org/wikipedia/commons/f/f8/Schloss_Neuschwanstein_2013.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Château néo-roman commandé par Louis II de Bavière en 1869, commune de Schwangau, Allgäu"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Alpes bavaroises, près de Füssen, à la frontière autrichienne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château de conte de fées ayant inspiré Walt Disney, Bavière"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le château de Neuschwanstein en Bavière, Allemagne"}
  ]},
  {name:"Tour de Pise — Italie",lat:43.723,lng:10.3966,desc:"La Tour de Pise penche depuis sa deuxième phase de construction au XIIe siècle, à cause d'un sol trop mou d'un côté. Des travaux de 1990 à 2001 ont réduit l'inclinaison de 44 cm pour la stabiliser pour les 200 prochaines années.",photo:"photos/tour_de_pise.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Campanile du Duomo di Pisa, construction entamée en 1173, inclinaison de 3,97 degrés due à un sol meuble"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Piazza dei Miracoli (Place des Miracles), Pise, Toscane"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tour penchée mondialement connue, emblème de la Toscane italienne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Tour de Pise en Toscane, Italie"}
  ]},
  {name:"Palais des Doges — Venise, Italie",lat:45.4337,lng:12.3401,desc:"Le Palais des Doges abritait le Pont des Soupirs, par lequel les condamnés traversaient de la salle des interrogatoires vers la prison, poussant leur dernier soupir en apercevant Venise.",photo:"photos/palais_des_doges.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Palazzo Ducale sur la Piazzetta de l'ancienne République maritime, siège du gouvernement de la Sérénissime du IXe au XVIIIe siècle"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Sestiere de San Marco, bord de la lagune, face à l'île de San Giorgio Maggiore"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Symbole du pouvoir vénitien, ville construite sur 118 îlots, Italie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais des Doges à Venise, Italie"}
  ]},
  {name:"Cathédrale Saint-Basile — Moscou, Russie",lat:55.7525,lng:37.6231,desc:"Selon la légende, Ivan le Terrible fit aveugler ses architectes après l'achèvement de la cathédrale pour qu'ils ne puissent jamais construire quelque chose d'aussi beau ailleurs. Cette histoire est probablement apocryphe.",photo:"photos/cathedrale_saint_basile.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cathédrale de l'Intercession de la Mère de Dieu sur les Douves, Place Rouge, construite de 1555 à 1561 sous Ivan le Terrible"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Grande place centrale, entre la forteresse du Kremlin et le grand magasin d'État"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cathédrale aux bulbes colorés, emblème de la Russie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Cathédrale Saint-Basile sur la Place Rouge à Moscou, Russie"}
  ]},
  {name:"Palais du Parlement — Bucarest, Roumanie",lat:44.4275,lng:26.0875,desc:"Le Parlement de Bucarest est le deuxième plus grand bâtiment administratif au monde après le Pentagone. Ceau?escu fit raser un cinquième de la vieille ville de Bucarest pour le construire — dont 19 églises orthodoxes et 7 synagogues.",photo:"photos/palais_du_parlement.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Palatul Parlamentului, commandé par Nicolae Ceau?escu en 1984, 2ème plus grand bâtiment administratif du monde"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Colline Spirii, centre de la capitale, pays d'Europe de l'Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand bâtiment du monde par volume intérieur, capitale de la Roumanie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais du Parlement à Bucarest, Roumanie"}
  ]},
  {name:"Grande Muraille de Chine — Mutianyu",lat:40.4319,lng:116.5704,desc:"Contrairement à la légende, la Grande Muraille n'est pas visible à l'œil nu depuis l'espace. Mais elle reste l'une des constructions humaines les plus longues avec ses 21 196 km, soit la moitié du périmètre de la Terre.",photo:"photos/grande_muraille_de_chine.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Section de Mutianyu, construite sous la dynastie Ming (1368-1644), préfecture de Beijing"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Montagnes au nord-est de la capitale, à 73 km du centre-ville"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus longue structure construite par l'Homme, 21 196 km de long au total"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Grande Muraille de Chine (Section de Mutianyu, près de Pékin)"}
  ]},
  {name:"Cité Interdite — Pékin, Chine",lat:39.9163,lng:116.3972,desc:"Avec ses 9 999 pièces (une de moins que le palais céleste des dieux selon la tradition), la Cité Interdite hébergea 24 empereurs chinois. Aucun simple citoyen n'y pénétra pendant 500 ans.",photo:"photos/cite_interdit.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Gugong, palais impérial construit entre 1406 et 1420 sous l'empereur Yongle, 980 bâtiments"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre de la capitale, au nord de la grande place célèbre, entouré de douves"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand palais du monde, résidence des empereurs Ming et Qing pendant 500 ans"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Cité Interdite à Pékin, Chine"}
  ]},
  {name:"Temple d'or (Harmandir Sahib) — Amritsar, Inde",lat:31.62,lng:74.8765,desc:"Le Temple d'Or recouvre 750 kg de feuilles d'or pur. Les Sikhs cuisinent et servent gratuitement 100 000 repas par jour à tous les visiteurs sans distinction de religion, de caste ou de nationalité.",photo:"photos/temple_d_or_harmandir_sahib.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Harmandir Sahib, lieu saint sikh construit en 1604 par Guru Arjan Dev Ji, entouré du lac Amrit Sarovar"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Cœur de la vieille ville d'Amritsar, Pendjab indien, à 30 km de la frontière pakistanaise"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Temple le plus sacré du sikhisme, recouvert de feuilles d'or"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Temple d'Or d'Amritsar, Inde"}
  ]},
  {name:"Taj Mahal — Agra, Inde",lat:27.1751,lng:78.0421,desc:"Le Taj Mahal change de couleur selon la lumière : rosé à l'aube, blanc éblouissant à midi, doré au coucher du soleil, argenté au clair de lune. Shah Jahan, vieilli et emprisonné par son fils, pouvait apercevoir le mausolée de sa fenêtre jusqu'à sa mort.",photo:"photos/taj_mahal.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Mausolée en marbre blanc commandé par Shah Jahan pour son épouse Mumtaz Mahal, construit de 1632 à 1653"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rive droite de la Yamuna, Agra, État de l'Uttar Pradesh"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Merveille du monde, mausolée moghol classé UNESCO, Inde"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Taj Mahal à Agra, Inde"}
  ]},
  {name:"Mont Fuji — Japon",lat:35.3606,lng:138.7274,desc:"Le Fuji est considéré comme sacré depuis des siècles — les femmes n'avaient pas le droit de l'escalader jusqu'en 1868. Chaque été, près de 200 000 personnes font l'ascension dont beaucoup de nuit pour voir le lever du soleil.",photo:"photos/taj_mahal.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Stratovolcan de 3 776 m, préfectures de Shizuoka et Yamanashi, dernier réveil en 1707"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Région de Ch?bu, à 100 km au sud-ouest de la mégalopole, visible par temps clair depuis la capitale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus haute montagne du Japon, symbole national classé UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Mont Fuji, Japon"}
  ]},
  {name:"Angkor Wat — Siem Reap, Cambodge",lat:13.4125,lng:103.867,desc:"Angkor Wat est le plus grand bâtiment religieux du monde. La cité d'Angkor, qui l'entourait, était au XIIe siècle la plus grande ville pré-industrielle du monde, avec peut-être un million d'habitants.",photo:"photos/angkor_wat.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Temple-montagne khmer construit par Suryavarman II au XIIe siècle, dédié à Vishnu, plus grand édifice religieux du monde"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Temple dans la Province du Siem Reap nord-ouest du pays, bord d'un grand lac intérieur"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand temple du monde, joyau de l'architecture khmère, Cambodge"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le complexe d'Angkor Wat à Siem Reap, Cambodge"}
  ]},
  {name:"Marina Bay Sands — Singapour",lat:1.2834,lng:103.8607,desc:"La piscine à débordement du Marina Bay Sands, à 200 m de hauteur, est la plus grande piscine en hauteur du monde avec ses 150 m de long. Elle ne relie les tours que visuellement — elle est portée par une structure distincte de 10 000 tonnes.",photo:"photos/angkor_wat.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Complexe hôtelier de Moshe Safdie ouvert en 2010, trois tours reliées par une plateforme panoramique de 340m"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Baie centrale de la cité-État, bord d'un détroit maritime, cœœur financier"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Hôtel iconique à la piscine suspendue, skyline de Singapour"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Marina Bay Sands à Singapour"}
  ]},
  {name:"Burj Khalifa — Dubaï, Émirats Arabes Unis",lat:25.1972,lng:55.2744,desc:"Le Burj Khalifa est si haut que les résidents des derniers étages peuvent voir deux couchers de soleil le même jour : l'un depuis le sol, puis un second après être montés en ascenseur en quelques minutes.",photo:"https://upload.wikimedia.org/wikipedia/fr/b/b0/Burj_Khalifa.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Gratte-ciel de 829,8 m conçu par Adrian Smith (Skidmore, Owings & Merrill), inauguré le 4 janvier 2010"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier Downtown de la métropole, à côté d'un immense centre commercial et de fontaines célèbres"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand bâtiment du monde, 163 étages, Émirats Arabes Unis"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Burj Khalifa à Dubaï, Émirats Arabes Unis"}
  ]},
  {name:"Petra — Jordanie",lat:30.3285,lng:35.4444,desc:"Le canyon du Siq, gorge menant à Petra, mesure par endroits moins d'un mètre de large pour 80 mètres de haut. Les touristes qui marchent dans cette fissure rouge au lever du soleil émergent sur le Trésor — un moment considéré comme l'un des plus beaux au monde.",photo:"https://upload.wikimedia.org/wikipedia/commons/e/e8/Al_Deir_Petra.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Al-Khazneh (Le Trésor), tombe nabatéenne du Ier siècle av. J.-C. taillée dans le grès rose, Wadi Musa"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Gouvernorat du sud du pays, dans les monts Shara"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité rose taillée dans le roc, merveille du monde, Jordanie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La cité antique de Pétra, Jordanie"}
  ]},
  {name:"Mur des Lamentations — Jérusalem",lat:31.7767,lng:35.2345,desc:"Le Mur des Lamentations est le seul vestige du mur de soutènement du Second Temple, détruit en 70 ap. J.-C. par les Romains. Les pèlerins y glissent des petits papiers portant des prières — environ un million par an.",photo:"photos/mur_des_lamentations.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Kotel, vestige du mur ouest de l'esplanade du Second Temple d'Hérode le Grand, vieille ville sainte des trois religions"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier juif de la Vieille Ville de Jérusalem, face au mont du Temple"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Lieu saint du judaïsme, vestige du Temple de Salomon"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Mur des Lamentations à Jérusalem"}
  ]},
  {name:"Pyramides de Gizeh — Égypte",lat:29.9792,lng:31.1342,desc:"La Grande Pyramide de Khéops était le plus grand bâtiment du monde pendant 3 800 ans. Ses 2,3 millions de blocs de calcaire sont posés avec une précision millimétrique, sans ciment ni mortier.",photo:"photos/pyramides_de_gizeh.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Nécropole royale de la IVe dynastie — Khéops (2551 av. J.-C.), Khéphren et Mykérinos, plateau de Gizeh"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Plateau de Gizeh, bord du désert libyen, en face du Caire sur la rive ouest du Nil"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Unique merveille du monde antique encore debout, Égypte"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Pyramides de Gizeh, Égypte"}
  ]},
  {name:"Sphinx de Gizeh — Égypte",lat:29.9753,lng:31.1376,desc:"Le nez du Sphinx fut probablement brisé intentionnellement au XVe siècle. Des photographies du XIXe siècle montrent que le Sphinx était recouvert jusqu'aux épaules par les sables du désert pendant des siècles.",photo:"photos/sphinx_de_gizeh.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Monolithe calcaire de 73m de long sculpté sous Khéphren vers 2500 av. J.-C., plateau de Gizeh"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"À l'est des pyramides de Gizeh, gardant la nécropole royale, plateau de Gizeh"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand sphinx du monde, gardien des pyramides d'Égypte"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Sphinx de Gizeh en Égypte"}
  ]},
  {name:"Kilimandjaro — Tanzanie",lat:-3.0674,lng:37.3556,desc:"Le Kilimandjaro perd 80% de sa calotte glaciaire depuis 1912 en raison du réchauffement climatique. Ses glaciers sommitaux pourraient disparaître complètement d'ici 2060, menaçant l'approvisionnement en eau de millions d'Africains.",photo:"photos/kilimandjaro.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Uhuru Peak, point culminant du stratovolcan Kibo à 5 895 m, plus haute montagne du continent africain"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Région du nord-est du pays, proche d'une grande capitale voisine"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus haute montagne d'Afrique, volcan enneigé en zone équatoriale"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Kilimandjaro en Tanzanie"}
  ]},
  {name:"Victoria Falls — Zimbabwe/Zambie",lat:-17.9243,lng:25.8572,desc:"L'arc-en-ciel permanent créé par les embruns des chutes Victoria donne naissance à un «arc-en-ciel lunaire» lors des nuits de pleine lune — l'un des phénomènes naturels les plus rares et les plus difficiles à photographier au monde.",photo:"photos/victoria_falls.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Mosi-oa-Tunya, chutes de 108m de haut et 1,7 km de large sur le fleuve Zambèze, décrites par Livingstone en 1855"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Frontière entre deux pays d'Afrique australe, fleuve majestueux"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande cascade du monde en volume d'eau, Afrique australe"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Victoria Falls au Zimbabwe/Zambie"}
  ]},
  {name:"Kigali Genocide Memorial — Rwanda",lat:-1.9441,lng:30.0619,desc:"Le mémorial de Kigali honore les 250 000 victimes du génocide rwandais de 1994. En 100 jours, environ 800 000 Tutsis et Hutus modérés furent tués. Le Rwanda, qui a depuis accompli une transformation économique remarquable, commémore chaque 7 avril la Journée internationale de la réflexion.",photo:"photos/kigali_genocide_memorial.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Gisozi, mémorial inauguré en 2004 commémorant le génocide de 1994, colline de Kigali"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier d'une capitale d'Afrique centrale, sur une colline des mille collines"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Principal mémorial du génocide rwandais, capitale du Rwanda"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Kigali Genocide Memorial au Rwanda"}
  ]},
  {name:"Statue de l'Unité — Inde (Sardar Patel)",lat:21.8381,lng:73.7198,desc:"La Statue de l'Unité représente Sardar Vallabhbhai Patel, l'homme qui réunit les 562 principautés indiennes en un seul État après l'indépendance. À 182 mètres, elle est deux fois plus haute que la Statue de la Liberté. Des visiteurs viennent du monde entier pour monter jusqu'à son torse-observatoire.",photo:"photos/statue_de_l_unite.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ekta ki Pratima, statue de 182 m inaugurée en 2018 au bord d'un grand barrage, plus haute statue du monde"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île Sadhu Bet sur la rivière Narmada, district de Narmada, Gujarat"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande statue du monde (182 m), Gujarat, Inde"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Statue de l'Unité en Inde (Sardar Patel)"}
  ]},
  {name:"Christ Rédempteur — Rio, Brésil",lat:-22.9519,lng:-43.2105,desc:"Le Christ Rédempteur est frappé par la foudre environ trois fois par an. Sa restauration en 2010 inclut un paratonnerre intégré dans la couronne d'épines. Il mesure 38 mètres en comptant son piédestal.",photo:"photos/christ_redempteur.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Statue du Christ de 38 m inaugurée en 1931, sommet du Corcovado (710 m), forêt tropicale urbaine"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Montagne du Corcovado, parc national de Tijuca, quartier de Santa Teresa, Rio"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Statue emblématique surplombant Rio de Janeiro, merveille du monde"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Christ Rédempteur à Rio, Brésil"}
  ]},
  {name:"Machu Picchu — Pérou",lat:-13.1631,lng:-72.545,desc:"Machu Picchu fut construit sans roue, sans fer et sans écriture. Ses murs en pierre sèche résistent aux séismes car chaque bloc est légèrement arrondi, permettant aux pierres de «danser» lors des tremblements de terre.",photo:"photos/christ_redempteur.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cité inca construite vers 1450 par Pachacuti sur un col à 2 430 m, redécouverte par Hiram Bingham en 1911"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Vallée de l'Urubamba (Rivière Sacrée), haute Andes, ancienne capitale inca à proximité"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité inca perdue dans les nuages, merveille du monde, Pérou"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Machu Picchu au Pérou"}
  ]},
  {name:"Statue de la Liberté — New York, USA",lat:40.6892,lng:-74.0445,desc:"La So?a (Isonzo en italien) est une rivière aux eaux d\'un bleu-vert émeraude unique, prenant sa source dans les Alpes juliennes slovènes. Sa vallée fut le théâtre des batailles de l\'Isonzo (1915-1917) et est aujourd\'hui un paradis naturel réputé pour ses gorges spectaculaires et sports d\'eau vive.",photo:"photos/statue_de_la_liberte.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Liberty Island, inauguré en 1886, conçu par Bartholdi et Eiffel, 93 m avec le socle"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Liberty Island, grande baie de la côte est, entre deux États américains"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Symbole de la liberté offert par la France, port de New York"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Statue de la Liberté à New York, USA"}
  ]},
  {name:"Grand Canyon — Arizona, USA",lat:36.0544,lng:-112.2401,desc:"Le Grand Canyon contient des fossiles de créatures marines à 2 000 mètres d'altitude — preuve que cette région était autrefois au fond d'une mer chaude. En descendant vers le fond, on voyage littéralement dans le temps géologique.",photo:"photos/grand_canyon.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Mather Point, South Rim, canyon creusé par le Colorado sur 446 km de long, 1 857 m de profondeur maximale"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Plateau du Colorado, nord de l'Arizona, parc national créé par Theodore Roosevelt en 1908"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Canyon creusé par le Colorado sur 446 km, 1 857 m de profondeur maximale, merveille naturelle de l'Arizona"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Grand Canyon à Arizona, USA"}
  ]},
  {name:"Chichen Itza — Yucatan, Mexique",lat:20.6843,lng:-88.5678,desc:"La grande cénote sacrée de Chichen Itza livra lors de fouilles au XXe siècle des dizaines de squelettes, bijoux de jade et objets en or — confirmant les sacrifices mayas. On estime que des milliers d'offrandes reposent encore au fond inaccessible du puits.",photo:"photos/chichen_itza.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"El Castillo, pyramide à degrés de Kukulcán de 30 m, cité maya fondée au VIe siècle, phénomène du serpent de lumière aux équinoxes"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Municipalité de Tinum, État du Yucatán, péninsule mexicaine, à 120 km de Mérida"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Pyramide maya, merveille du monde, péninsule du Yucatán, Mexique"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Chichen Itza à Yucatan, Mexique"}
  ]},
  {name:"Chutes du Niagara — Canada/USA",lat:43.0896,lng:-79.0849,desc:"Les Chutes du Niagara ont été stoppées une seule fois dans l'histoire, du 29 mars au 10 juin 1848, quand un embâcle de glace sur le lac Érié interrompit le débit. Les habitants traversèrent alors à pied le lit de la rivière à sec.",photo:"photos/chutes_du_niagara.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Horseshoe Falls, chutes de 57 m de hauteur sur la rivière Niagara, frontière entre deux pays"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Frontière entre deux villes homonymes de part et d'autre d'une frontière internationale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Célèbres chutes d'eau à la frontière canado-américaine"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Chutes du Niagara (frontière Canada / États-Unis)"}
  ]},
  {name:"Opéra de Sydney — Australie",lat:-33.8568,lng:151.2153,desc:"La construction de l'Opéra de Sydney prit 16 ans et coûta 14 fois son budget initial. Pour financer le dépassement, le gouvernement australien créa une loterie nationale spéciale. Les billets de loterie «Sydney Opera House» sont aujourd'hui des pièces de collection.",photo:"photos/chutes_du_niagara.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Bennelong Point, conçu par Jørn Utzon, construction de 1959 à 1973, inauguré par la reine Elizabeth II"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Péninsule d'une grande baie naturelle, port principal d'un continent insulaire"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Salle de spectacle aux toits en coquilles, emblème de l'Australie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Opéra de Sydney en Australie"}
  ]},
  {name:"Uluru — Territoire du Nord, Australie",lat:-25.3444,lng:131.0369,desc:"Uluru est beaucoup plus grand qu'il n'y paraît : les deux tiers de ce monolithe sont enfouis sous terre. Les Anangu ont finalement interdit l'escalade du rocher sacré en 2019, après des décennies de négociations.",photo:"https://upload.wikimedia.org/wikipedia/commons/c/c2/Uluru%2C_helicopter_view%2C_cropped.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Monolithe de grès rouge de 348 m de hauteur, lieu sacré des Anangu, parc national Uluru-Kata Tjuta"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Cœœur du continent, région aride, à 450 km d'une ville isolée du désert"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grand rocher rouge sacré au cœur du désert australien, classé UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Uluru à Territoire du Nord, Australie"}
  ]},
  {name:"Trou Bleu de Belize — Belize",lat:17.3158,lng:-87.5348,desc:"Le Grand Trou Bleu de Belize fut rendu célèbre par Jacques-Yves Cousteau qui le classa parmi les 10 plus beaux sites de plongée au monde en 1971. Ses parois verticales descendent à 125 mètres et abritent des requins nourrices et des requins des récifs dormant au fond.",photo:"photos/trou_bleu_de_belize.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Great Blue Hole, gouffre sous-marin de 300 m de diamètre et 125 m de profondeur, récif méso-américain"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre de l'atoll de Lighthouse Reef, mer des Caraïbes, Belize"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande structure de ce type au monde, emblème du Belize, Caraïbes"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Grand Trou Bleu au large du Belize"}
  ]},
  {name:"Palais du Parlement — Budapest, Hongrie",lat:47.5072,lng:19.0461,desc:"Le Parlement de Budapest est illuminé chaque nuit et se reflète dans le Danube — l'une des plus belles vues nocturnes d'Europe. Sa construction dura 17 ans (1885-1902) et employa 100 000 ouvriers et 40 millions de briques.",photo:"photos/palais_du_parlement.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Országház, construit de 1885 à 1904 par Imre Steindl, 96m de hauteur, rive gauche du Danube"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier de Lipótváros, rive du Danube, Budapest"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Parlement néogothique le plus grand d'Europe, Hongrie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais du Parlement à Budapest, Hongrie"}
  ]},
  {name:"Château de Prague — République Tchèque",lat:50.0902,lng:14.4,desc:"Le complexe du château de Prague est l'un des plus grands du monde avec ses 70 000 m². Il abrite une cathédrale, un palais royal, un couvent, des jardins et une ruelle d'or où vivaient jadis les alchimistes de Rodolphe II qui cherchaient à transmuer le plomb en or.",photo:"photos/chateau_de_blarney.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Hrad?any, plus grand château du monde en superficie (70 000 m²), érigé au IXe siècle sur le Hradschin"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Colline de Hrad?any dominant la Vltava, quartier Malá Strana, Prague"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand château du monde, résidence présidentielle tchèque"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Prague, République Tchèque"}
  ]},
    {name:"Canal Grande — Venise, Italie",lat:45.4408,lng:12.3155,desc:"Le Grand Canal de Venise compte 150 palais construits entre le XIIIe et le XVIIIe siècle sur ses 3,8 km. Ces bâtiments s'enfoncent progressivement — Venise s'est affaissée de 23 cm au XXe siècle — ce qui poussa à lancer le projet MOSE, un système de digues mobiles anti-inondations.",photo:"https://upload.wikimedia.org/wikipedia/commons/5/51/View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Canale Grande, artère principale de la cité lacustre en forme de S inversé, 3,8 km, 150 palais sur ses rives"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre d'une cité lacustre, entre la gare principale et le grand bassin maritime"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Principal canal de Venise, la ville des gondoles, Italie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Canal Grande à Venise, Italie"}
  ]},
  {name:"Thermes de Caracalla — Rome, Italie",lat:41.8788,lng:12.4922,desc:"Les thermes de Caracalla furent fermés définitivement en 537 quand les Ostrogoths coupèrent les aqueducs de Rome. Depuis les années 1930, l'Opéra de Rome y organise des spectacles en plein air — des représentations de Verdi ou Puccini dans ce décor antique imposant.",photo:"https://upload.wikimedia.org/wikipedia/commons/5/53/Baths_of_Caracalla%2C_facing_Caldarium.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Thermae Antoninianae, inaugurées en 216 ap. J.-C. sous Caracalla, accueillaient 1600 baigneurs simultanément"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Via delle Terme di Caracalla, quartier Aventino, au sud du Colisée"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grands thermes romains conservés, au sud du Colisée"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Thermes de Caracalla à Rome, Italie"}
  ]},
  {name:"Musée du Prado — Madrid, Espagne",lat:40.4138,lng:-3.6922,desc:"Le Prado possède la plus grande collection au monde de tableaux de Velázquez, Goya et Titien. «Les Menines» de Velázquez, qui représentent la famille royale avec l'artiste se peignant lui-même, est considéré comme le premier tableau «postmoderne» de l'histoire.",photo:"https://upload.wikimedia.org/wikipedia/commons/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Museo Nacional del Prado, Paseo del Prado, ouvert en 1819, abritant Las Meninas de Velázquez"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Paseo del Prado, quartier de los Jerónimos, près du parc du Retiro"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand musée d'art classique espagnol, Madrid"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Musée du Prado à Madrid, Espagne"}
  ]},
  {name:"Tour de Belém — Lisbonne, Portugal",lat:38.6916,lng:-9.216,desc:"La tour de Belém fut construite en 1516 au bord du Tage pour saluer les explorateurs partant vers les Indes. Ce joyau manuélin est orné de motifs marins, de nœuds de corde en pierre et de la sphère armillaire, emblème du Portugal des grandes découvertes.",photo:"photos/tour_de_belfort.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Torre de São Vicente de Belém, style manuélin, construite de 1516 à 1521 par Francisco de Arruda"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rive du Tage, quartier de Belém, Lisbonne, à l'embouchure de l'estuaire"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tour fortifiée manuéline, symbole des Grandes Découvertes, Lisbonne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Tour de Belém à Lisbonne, Portugal"}
  ]},
  {name:"Atomium — Bruxelles, Belgique",lat:50.8947,lng:4.3411,desc:"L'Atomium de Bruxelles représente une maille de cristal de fer agrandie 165 milliards de fois. Conçu comme une attraction temporaire pour l'Expo 58, il fut maintenu après l'exposition suite à son succès populaire. Ses sphères intérieures accueillent des expositions et même un appartement loué.",photo:"photos/atomium.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Construit pour l'Expo 58 par André Waterkeyn, représente une maille de cristal de fer agrandie 165 milliards de fois"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Laeken, commune de Bruxelles, parc d'Osseghempark, quartier nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Monument en forme d'atome géant, emblème de Bruxelles"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Atomium à Bruxelles, Belgique"}
  ]},
  {name:"Manneken Pis — Bruxelles, Belgique",lat:50.8451,lng:4.35,desc:"La statue du Manneken Pis ne mesure que 61 cm mais possède une garde-robe de plus de 1 000 costumes offerts par des nations du monde entier. Il est régulièrement habillé en tenue officielle lors des fêtes nationales — une tradition depuis le XVIIIe siècle.",photo:"photos/manneken_pis.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Kleine Juliaan, statue de bronze de 61 cm par Jérôme Duquesnoy l'Ancien (1619), rue de l'Étuve"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Intersection rue de l'Étuve et rue du Chêne, Îlot Sacré, centre historique de Bruxelles"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Célèbre petite fontaine d'un enfant, symbole populaire de Bruxelles"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Manneken Pis à Bruxelles, Belgique"}
  ]},
  {name:"Château de Édimbourg — Écosse, Royaume-Uni",lat:55.9486,lng:-3.2008,desc:"Le château d'Édimbourg est bâti sur un rocher volcanique vieux de 340 millions d'années. Il abrite les Honneurs d'Écosse — la plus ancienne couronne royale d'Europe en service, datant de 1540. Son canon «One O'Clock Gun» tire chaque jour à 13h précises depuis 1861, une tradition débutée pour les marins du port de Leith.",photo:"photos/chateau_de_edimbourg.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Edinburgh Castle sur le Castle Rock, volcan éteint, abritant la pierre du Destin et les Honneurs d'Écosse"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Haut de la Royal Mile, Old Town, Édimbourg, surplombant Princes Street Gardens"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Forteresse médiévale dominant la capitale écossaise"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Édimbourg à Écosse, Royaume-Uni"}
  ]},
  {name:"Pont du Gard — France",lat:43.9473,lng:4.5355,desc:"Le Pont du Gard transportait 20 000 m³ d'eau par jour vers la ville de Nîmes sur une distance de 50 km. Sa pente, calculée avec une précision de 2,5 cm par kilomètre, était si fine que l'eau coulait presque sans mouvement apparent — un prodige d'ingénierie romaine.",photo:"photos/chateau_de_edimbourg.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Aqueduc romain du Ier siècle ap. J.-C., 49 m de hauteur, enjambant le Gardon, construit sans mortier"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Gorges du Gardon, commune de Vers-Pont-du-Gard, Gard, Occitanie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus haut pont-aqueduc romain du monde, UNESCO, sud de la France"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Pont du Gard en France"}
  ]},
  {name:"Mont Saint-Michel — Normandie, France",lat:48.6361,lng:-1.5115,desc:"La baie du Mont-Saint-Michel possède le coefficient de marée le plus fort d'Europe continentale. En 1879, la construction d'une digue pour relier le Mont au continent accéléra l'envasement de la baie. La digue fut démantelée et remplacée par un pont en 2014 pour laisser circuler les eaux.",photo:"photos/mont_saint_michel.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Îlot granitique couronné par l'abbaye bénédictine dédiée à l'archange Michel, fondée en 966"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Baie du Mont-Saint-Michel, Manche, Normandie, à 80 km de Caen"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Abbaye insulaire en Normandie, l'un des sites les plus visités de France"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Mont Saint-Michel à Normandie, France"}
  ]},
  {name:"Château de Chambord — Loire, France",lat:47.6161,lng:1.5171,desc:"Chambord possède un escalier à double hélice attribué à Léonard de Vinci : deux visiteurs peuvent monter et descendre simultanément sans jamais se croiser. François Ier ne dormit à Chambord que 72 nuits en 32 ans — un château avant tout conçu pour les fastes de la cour.",photo:"photos/chateau_de_blarney.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Construit à partir de 1519 pour François Ier, attribué à Léonard de Vinci pour l'escalier à double hélice, 426 pièces"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune de Chambord, Loir-et-Cher, val de Loire, à 15 km de Blois"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand château de la Loire, Renaissance française"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Chambord à Loire, France"}
  ]},
  {name:"Basilique du Sacré-Cœur — Paris, France",lat:48.8867,lng:2.3431,desc:"La basilique du Sacré-Cœur fut construite grâce à des souscriptions privées après la défaite de 1871 contre la Prusse — un vœu national de repentir. Ses 83 mètres de hauteur sur la Butte Montmartre en font le point culminant de Paris, visible de presque partout dans la ville.",photo:"photos/basilique_du_sacre_coeur.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Basilique romano-byzantine consacrée en 1919, construite en travertin auto-blanchissant de Château-Landon, sommet de la Butte Mont"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Sommet de la Butte Montmartre, 18ème arrondissement de 130 m d'altitude"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Basilique blanche dominant Paris depuis la Butte Montmartre"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Basilique du Sacré-Cœur à Paris, France"}
  ]},
  {name:"Palais de Justice — Bruxelles, Belgique",lat:50.8359,lng:4.3531,desc:"Palais de Justice est un lieu historique remarquable situé en Europe.",photo:"photos/palais_de_justice.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Palais conçu par Joseph Poelaert, 1883, plus grand bâtiment construit au XIXe siècle (26 000 m²), sommet du Sablon"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Place Poelaert, quartier des Marolles, Brussels, surplombant la ville basse"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand bâtiment construit au XIXe siècle, imposante coupole dominant la ville belge"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais de Justice à Bruxelles, Belgique"}
  ]},
  {name:"Fjord de Geiranger — Norvège",lat:62.1006,lng:7.2051,desc:"Les 7 cascades des «Sept Sœurs» dans le fjord de Geiranger sont alimentées uniquement par la fonte des neiges et la pluie — il n'y a aucune source ni aucun lac en amont. En face se trouve la cascade du Prétendant qui semble «arroser» les sept sœurs.",photo:"photos/fjord_de_geiranger.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Geirangerfjord, 15 km de long, classé UNESCO, célèbre pour les cascades des Sept Sœurs et du Voile de la Mariée"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Municipalité du nord-ouest du pays, fjord parmi les plus profonds d'Europe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"L'un des fjords les plus spectaculaires de Norvège, UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Fjord de Geiranger en Norvège"}
  ]},
  {name:"Hallgrímskirkja — Reykjavik, Islande",lat:64.1418,lng:-21.9264,desc:"La statue devant la cathédrale d'Hallgrímskirkja représente Leifur Eiríksson, qui atteignit l'Amérique 500 ans avant Christophe Colomb. Elle fut offerte par les États-Unis à l'Islande pour le millénaire du parlement islandais en 1930.",photo:"photos/hallgrimskirkja.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Église luthérienne de 73 m conçue par Guðjón Samúelsson en 1937, inspirée des orgues basaltiques, construite pendant 41 ans"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Sommet d'une colline au cœur de la capitale la plus septentrionale du monde"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Église emblématique en forme de colonnes basaltiques, Reykjavik"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Hallgrímskirkja à Reykjavik, Islande"}
  ]},
  {name:"Acropole de Lindos — Rhodes, Grèce",lat:36.0912,lng:28.0861,desc:"L'acropole de Lindos à Rhodes est un sanctuaire consacré à Athéna datant du IVe siècle av. J.-C. Perchée sur une falaise de 116 mètres au-dessus de la mer Égée, elle offre une des vues les plus spectaculaires de Grèce. Alexandre le Grand y sacrifia avant de partir à la conquête de la Perse.",photo:"photos/acropole_de_lindos.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Temple dorique d'Athéna Lindia du IVe siècle av. J.-C., sur un rocher de 116 m, île de Rhodes"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Ville de Lindos, côte est de Rhodes, Dodécanèse, mer Égée"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Temple dorique sur un promontoire de 116 m, dominant une baie de la mer Égée"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Acropole de Lindos à Rhodes, Grèce"}
  ]},
  {name:"Château de Hohenzollern — Allemagne",lat:48.3219,lng:8.943,desc:"Le château de Hohenzollern fut reconstruit trois fois au même endroit. La version actuelle, néogothique, date de 1867. Il abrite la couronne de Prusse et l'uniforme dans lequel Frédéric le Grand mourut — des reliques du royaume prussien qui unifia l'Allemagne.",photo:"photos/chateau_de_blarney.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Stammburg des Hohenzollern, troisième reconstruction achevée en 1867, Schwäbische Alb, Bade-Wurtemberg"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Sommet du mont Hohenzollern (855 m), commune de Bisingen, Bade-Wurtemberg"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château ancestral de la dynastie prussienne des Hohenzollern, Allemagne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Hohenzollern en Allemagne"}
  ]},
  {name:"Bibliothèque du Congrès — Washington D.C., USA",lat:38.8887,lng:-77.0047,desc:"La Bibliothèque du Congrès de Washington possède l'un des deux exemplaires connus de la Bible de Gutenberg imprimée en 1455, ainsi qu'un des rares exemplaires de la Déclaration d'indépendance de 1776 écrits à la main. Elle reçoit 17 000 nouvelles publications chaque jour.",photo:"photos/bibliotheque_de_l_universite_d_helsinki.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Thomas Jefferson Building, inauguré en 1897, plus grande bibliothèque du monde (170 millions de documents), Capitol Hill"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Capitol Hill, face au Capitole, Washington D.C."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande bibliothèque du monde, Washington D.C."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Bibliothèque du Congrès à Washington D.C., USA"}
  ]},
  {name:"Opéra Garnier — Paris, France",lat:48.8719,lng:2.3316,desc:"L'Opéra Garnier abrite un véritable lac souterrain, créé involontairement lors de la construction pour drainer les eaux de la nappe phréatique. Ce lac, utilisé pour entraîner les pompiers à la nage, inspira directement Gaston Leroux pour son roman «Le Fantôme de l'Opéra» en 1910.",photo:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Paris_Palais_Garnier_2010-04-06_16.55.07.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Palais Garnier, conçu par Charles Garnier, inauguré en 1875 par Mac-Mahon, écrin du plafond de Chagall"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Place de l'Opéra, 9ème arrondissement, au bout du boulevard des Capucines"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Opéra emblématique de Paris, cadre du Fantôme de l'Opéra"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Opéra Garnier à Paris, France"}
  ]},
  {name:"Temple Sens?-ji — Tokyo, Japon",lat:35.7148,lng:139.7967,desc:"Le temple Senso-ji d'Asakusa est le plus ancien et le plus visité de Tokyo avec 30 millions de visiteurs par an. La Nakamise-dori, la rue commerçante menant au temple, vend des souvenirs depuis l'époque Edo. Les marchands actuels sont souvent les descendants directs des premiers commerçants du XVIIe siècle.",photo:"photos/temple_sens_ji.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Senso-ji, plus ancien temple de la mégalopole, fondé en 628, dédié à Kannon, quartier d'Asakusa, Tait?"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Nakamise-d?ri, quartier d'Asakusa, arrondissement de Tait?"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus ancien et plus visité temple bouddhiste de Tokyo"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Temple Sens?-ji à Tokyo, Japon"}
  ]},
  {name:"Temple d'Or — Kyoto, Japon",lat:35.0394,lng:135.7292,desc:"Le Temple d'Or recouvre 750 kg de feuilles d'or pur. Les Sikhs cuisinent et servent gratuitement 100 000 repas par jour à tous les visiteurs sans distinction de religion, de caste ou de nationalité.",photo:"photos/temple_d_or_harmandir_sahib.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Kinkaku-ji (Rokuon-ji), pavillon recouvert de feuilles d'or, construit en 1397 pour le shogun Ashikaga Yoshimitsu"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier Kita-ku, nord de Kyoto, surplombant l'étang Ky?ko-chi"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Pavillon doré du temple Kinkaku-ji, emblème de Kyoto, Japon"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Temple d'Or à Kyoto, Japon"}
  ]},
  {name:"Palais de Potala — Lhassa, Tibet",lat:29.6578,lng:91.1175,desc:"Le Palais du Potala de Lhassa fut construit à 3 700 mètres d'altitude et compte 13 étages, 1 000 pièces et 10 000 autels. Il abritait les trônes et tombeaux des Dalaï-Lamas, dont les corps embaumés sont conservés dans des stupas plaqués d'or.",photo:"photos/palais_de_buckingham.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Résidence hivernale du Dalaï-Lama, 13 étages, 1000 pièces, érigé sur la Colline Rouge à 3 700 m d'altitude"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Colline de Marpo Ri, centre de la capitale spirituelle d'un plateau himalayen"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Palais du Dalaï-Lama dominant Lhassa, Tibet"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais de Potala à Lhassa, Tibet"}
  ]},
  {name:"Temple de Borobudur — Java, Indonésie",lat:-7.6079,lng:110.2038,desc:"Le temple de Borobudur fut enseveli sous les cendres volcaniques et la végétation pendant 800 ans. Il fut redécouvert par Sir Thomas Raffles en 1814 et restauré dans les années 1970 dans le cadre du plus grand projet de restauration jamais entrepris par l'UNESCO.",photo:"photos/temple_de_borodurur.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Mandala bouddhiste mahayana du IXe siècle, 2 672 panneaux de bas-reliefs, 504 statues de Bouddha, dynasties Sailendra"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Région de Java central, à 40 km d'une ancienne capitale royale, plateau volcanique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand temple bouddhiste du monde, Java, Indonésie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Temple de Borobudur à Java, Indonésie"}
  ]},
  {name:"Hagia Sophia — Istanbul, Turquie",lat:41.0086,lng:28.9802,desc:"Sainte-Sophie fut la plus grande cathédrale du monde pendant près de 1 000 ans. Son dôme de 55 mètres de diamètre, construit sans calculs modernes, est soutenu par 40 fenêtres qui créent l'illusion qu'il flotte dans les airs.",photo:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Hagia_Sophia_%28228968325%29.jpeg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Construite de 532 à 537 par Justinien, Anthémios de Tralles et Isidore de Milet, dôme de 55,6m, reconvertie en mosquée en 2020"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Sultanahmet, péninsule historique d'Istanbul, face à la Mer de Marmara"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ancienne cathédrale byzantine devenue mosquée, symbole d'Istanbul"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Hagia Sophia à Istanbul, Turquie"}
  ]},
  {name:"Temple de Preah Vihear — Cambodge",lat:14.3924,lng:104.6804,desc:"Le temple de Preah Vihear fit l'objet d'un différend territorial entre le Cambodge et la Thaïlande pendant des décennies. En 2013, la Cour internationale de justice confirma la souveraineté cambodgienne — une victoire symbolique pour un pays qui souhaitait aussi faire classer le site à l'UNESCO.",photo:"photos/temple_de_preah_vihear.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Temple hindou khmer dédié à Shiva, construit entre le IXe et XIIe siècle, sommet du plateau de Dângrêk à 625m"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province du nord du pays, sur un plateau calcaire, à la frontière avec un pays voisin"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Temple khmer spectaculaire au sommet d'une falaise, Cambodge"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Temple de Preah Vihear au Cambodge"}
  ]},
  {name:"Palais de Mysore — Inde",lat:12.3052,lng:76.6552,desc:"Le palais de Mysore est illuminé par 97 000 ampoules chaque dimanche soir et lors des fêtes religieuses. Ce spectacle attire des millions de visiteurs et du palais brille depuis la ville comme une étoile. La famille royale des Wadiyar vit encore dans une partie du complexe.",photo:"photos/palais_de_mysore.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Amba Vilas, reconstruit en 1912 par Henry Irwin pour le maharaja Krishna Raja Wadiyar IV, style indo-sarrasin"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre de Mysore, Karnataka, à 150 km de Bangalore"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Palais royal indo-sarrasin illuminé par 100 000 ampoules, Mysore, Inde"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais de Mysore en Inde"}
  ]},
  {name:"Palais de Shakhrisabz — Ouzbékistan",lat:39.0533,lng:66.8306,desc:"Le palais d'Ak-Saray de Shakhrisabz fut la résidence d'été de Tamerlan, construite au XIVe siècle. Ses deux pylônes d'entrée atteignaient 65 mètres — les plus hauts d'Asie centrale. Shakhrisabz, qui signifie «ville verte», est la ville natale de Tamerlan.",photo:"photos/palais_de_shakhrisabz.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ak-Saray, palais d'été de Tamerlan, commencé en 1380, portail d'entrée de 65m, Shakhrisabz"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre historique d'une ville de la Route de la Soie, province d'Asie centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ruines du palais de Tamerlan, ville natale du conquérant, Ouzbékistan"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais de Shakhrisabz en Ouzbékistan"}
  ]},
  {name:"Mosquée Sultan Ahmed — Istanbul, Turquie",lat:41.0054,lng:28.9768,desc:"La Mosquée Bleue, construite de 1609 à 1616, est la seule mosquée d'Istanbul à posséder six minarets — une audace qui scandalisa la Mecque, qui n'en avait alors que quatre. L'intérieur est revêtu de 20 000 carreaux d'Iznik bleus, dont chacun fut peint à la main.",photo:"photos/mosquee_sultan_ahmed.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Mosquée Bleue, construite de 1609 à 1616 par Sedefkâr Mehmed A?a sous Ahmed Ier, seule mosquée à 6 minarets — scandale de l'époque"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Sultanahmet, face à Sainte-Sophie, péninsule historique d'Istanbul"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Mosquée Bleue aux 6 minarets, face à Sainte-Sophie, Istanbul"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Mosquée Sultan Ahmed à Istanbul, Turquie"}
  ]},
  {name:"Palais d'été — Pékin, Chine",lat:39.9999,lng:116.2755,desc:"Le Palais d'Été de Pékin fut pillé et incendié par les troupes franco-britanniques en 1860. L'impératrice Cixi le fit entièrement reconstruire en 1888 en détournant les fonds destinés à la modernisation de la marine militaire chinoise — une décision qui contribua à la défaite lors de la guerre sino-japonaise.",photo:"photos/mosquee_sultan_ahmed.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Yiheyuan, construit sous l'impératrice Cixi en 1886, lac Kunming creusé à la main, colline de la Longévité"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Banlieue nord-ouest de la capitale, à 15 km du centre-ville"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Résidence impériale d'été, vaste lac artificiel et jardins de la cour des Qing, banlieue de Pékin"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais d'été à Pékin, Chine"}
  ]},
  {name:"Pont d'Umeda — Osaka, Japon",lat:34.7024,lng:135.4959,desc:"Le Sky Building d'Umeda à Osaka est formé de deux tours reliées à leur sommet par un jardin suspendu circulaire à 170 mètres de hauteur. Ses escaliers mécaniques traversent le vide entre les deux tours en diagonale — une traversée spectaculaire de 50 mètres dans le ciel.",photo:"photos/pont_d_umeda.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Umeda Sky Building, tours jumelles de 173 m reliées par le Floating Garden Observatory, conçu par Hiroshi Hara en 1993"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Kita-ku, quartier d'Umeda, nord d'Osaka, près de la gare de Shin-Osaka"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tours jumelles reliées par un observatoire suspendu, Osaka, Japon"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Pont d'Umeda à Osaka, Japon"}
  ]},
  {name:"Temple de Confucius — Qufu, Chine",lat:35.5967,lng:116.9839,desc:"Le temple de Confucius à Qufu est le plus grand complexe confucéen du monde avec 466 bâtiments. Construit en -478, un an après la mort du philosophe, il fut agrandi par chaque dynasties chinoise pendant 2 500 ans. Les descendants directs de Confucius y vivent encore aujourd'hui.",photo:"photos/temple_de_borodurur.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Kong Miao, temple dédié à Confucius dans sa ville natale, 466 salles, érigé en 478 av. J.-C. un an après sa mort"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre de Qufu, province du Shandong, est du pays"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grand temple dédié à Confucius dans sa ville natale, Shandong, Chine"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Temple de Confucius à Qufu, Chine"}
  ]},
  {name:"Rocher de Sigiriya — Sri Lanka",lat:7.957,lng:80.7603,desc:"Le Rocher de Sigiriya abrite 500 fresques de femmes célestes (apsaras) dont seulement 22 ont survécu aux intempéries. Ce sont parmi les seules peintures laïques à grande échelle du 5e siècle encore visibles dans le monde.",photo:"photos/rocher_de_sigiriya.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Lion Rock, forteresse-palais du roi Kashyapa I, érigée au Ve siècle ap. J.-C. sur un rocher de 200m"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province centrale d'une île de l'océan Indien, rocher forteresse à 200m de la plaine"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Rocher-forteresse géant et jardins royaux du Ve siècle, Sri Lanka"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Rocher de Sigiriya au Sri Lanka"}
  ]},
  {name:"Tour CN — Toronto, Canada",lat:43.6426,lng:-79.3871,desc:"La tour CN de Toronto fut construite en 1976 par les chemins de fer canadiens pour démontrer la solidité de leur béton. À 553 mètres, elle fut la plus haute structure autoportante du monde pendant 30 ans. Son restaurant tourne sur 360° en 72 minutes, et par temps clair, on aperçoit les chutes du Niagara à 100 km.",photo:"photos/tour_cn.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Communication tower de 553 m inaugurée en 1976, détient le record mondial jusqu'en 2007, restaurant tournant à 351 m"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Front Street West, quartier Harbourfront, bord d'un grand lac intérieur"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tour emblématique de Toronto, symbole du Canada"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Tour CN à Toronto, Canada"}
  ]},
  {name:"Mausolée de Khomeini — Téhéran, Iran",lat:35.5593,lng:51.416,desc:"Le mausolée de l'imam Khomeini à Téhéran est l'un des plus grands complexes religieux du monde islamique. Son dôme doré de 72 mètres est visible de toute la ville. Il attire des millions de pèlerins chiites par an et est en expansion permanente — sa construction n'est pas encore officiellement terminée.",photo:"photos/mausolee_de_khomeini.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Harameyn, mausolée doré en construction depuis 1989, 4 minarets de 91m, accueille 20 millions de pèlerins/an"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Autoroute Téhéran-Qom, quartier de Rey, banlieue sud de Téhéran"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grand mausolée de l'ayatollah Khomeini, banlieue de Téhéran, Iran"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Mausolée de Khomeini à Téhéran, Iran"}
  ]},
  {name:"Mosquée de Djenné — Mali",lat:13.9056,lng:-4.5556,desc:"La Grande Mosquée de Djenné est entièrement reconstruite à la main chaque année lors d'une fête collective. Des milliers de villageois replâtrent les murs avec de la boue fraîche — une tradition vieille de plusieurs siècles.",photo:"photos/mosquee_de_djenne.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Grande Mosquée de Djenné, reconstruite en 1907 dans le style soudano-sahélien, plus grande construction en adobe du monde"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Place du marché d'une ville du delta intérieur d'un grand fleuve africain"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande mosquée en terre crue du monde, Djenné, Mali"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Mosquée de Djenné au Mali"}
  ]},
  {name:"Cités de Lalibela — Éthiopie",lat:12.0317,lng:39.0448,desc:"Les 11 églises de Lalibela furent taillées à même le roc en seulement 24 ans au XIIe siècle. Selon la légende, les anges travaillaient la nuit pendant que les hommes se reposaient, permettant un avancement miraculeux du chantier.",photo:"photos/cites_de_lalibela.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"11 églises monolithiques taillées dans le tuf volcanique rouge, commandées par le roi Gebre Mesqel Lalibela au XIIe siècle"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Zone de North Wollo, région Amhara, highlands éthiopiens, à 2 500 m d'altitude"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Églises souterraines taillées dans la roche, Jérusalem d'Afrique, Éthiopie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Cités de Lalibela en Éthiopie"}
  ]},
  {name:"Île de Gorée — Sénégal",lat:14.6678,lng:-17.3986,desc:"Gorée était si prospère grâce au commerce des esclaves que les marchands européens se disputaient sa possession pendant deux siècles. L'île changea de mains 7 fois entre Portugais, Hollandais, Anglais et Français.",photo:"photos/ile_de_goree.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Île de 0,36 km², centre majeur de la traite négrière aux XVIIe-XIXe siècles, Maison des Esclaves construite en 1776"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Baie d'une grande capitale ouest-africaine, à 3 km de la côte continentale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Île symbole de la traite négrière, face à Dakar, Sénégal"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Île de Gorée au Sénégal"}
  ]},
  {name:"Chutes d'Iguazu — Argentine/Brésil",lat:-25.6953,lng:-54.4367,desc:"Les chutes d'Iguazu sont si larges que Eleanor Roosevelt s'écria «Poor Niagara!» en les voyant pour la première fois. Elles forment la frontière naturelle entre l'Argentine et le Brésil, et les deux pays se disputèrent leur souveraineté pendant des décennies.",photo:"photos/chutes_d_iguazu.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"275 chutes sur 2,7 km de large, débit moyen 1 746 m³/s, dont la Garganta del Diablo de 82m, frontière entre deux pays d'Amérique du Sud"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Frontière entre deux pays d'Amérique du Sud, delta fluvial subtropical"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus larges chutes du monde, frontière Argentine-Brésil"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Chutes d'Iguazu en Argentine/Brésil"}
  ]},
  {name:"Désert du Namib — Namibie",lat:-24.7333,lng:15.5167,desc:"Le désert du Namib est le plus ancien désert du monde — aride depuis au moins 55 millions d'années. Son «Deadlei» (marais mort) abrite des squelettes d'arbres camelthorn de 900 ans, conservés par la sécheresse extrême. Ses dunes de Sossusvlei, parmi les plus hautes du monde (325 m), doivent leur couleur rouge à l'oxydation du fer.",photo:"photos/desert_du_namib.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Sossusvlei, dunes de sable rouge atteignant 325 m dont la Dune 45, désert côtier le plus ancien du monde (80 millions d'ans)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Parc national d'un désert côtier atlantique, dunes parmi les plus hautes du monde"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Dunes de sable rouge atteignant 325 m, désert côtier le plus ancien du monde, Namibie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Désert du Namib en Namibie"}
  ]},
  {name:"Parc national Kruger — Afrique du Sud",lat:-23.9884,lng:31.5547,desc:"Le parc Kruger est le plus grand parc national d'Afrique du Sud avec 20 000 km². Il abrite les «Big Five» (lion, éléphant, buffle, léopard, rhinocéros) en densités parmi les plus élevées d'Afrique. Sa clôture électrifiée de 800 km fut construite dans les années 1970 — le plus long périmètre de clôture d'une réserve naturelle au monde.",photo:"photos/parc_national_kruger.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Fondé en 1898 par Paul Kruger, 19 485 km², abritant les Big Five, Province du Limpopo et Mpumalanga"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Nord-est d'un pays d'Afrique australe, frontières de deux pays voisins, Big Five"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande réserve d'Afrique du Sud, célèbre pour les Big Five"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Parc national Kruger en Afrique du Sud"}
  ]},
  {name:"Karnak — Louxor, Égypte",lat:25.7188,lng:32.6573,desc:"La salle hypostyle de Karnak, avec ses 134 colonnes de 23 mètres de haut, est si grande qu'on pourrait y faire tenir la cathédrale Notre-Dame de Paris tout entière. L'élever prit 200 ans — soit le travail de 30 générations d'artisans.",photo:"photos/karnak.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Temple d'Amon, complexe de 100 hectares construit sur 2000 ans, 134 colonnes de la salle hypostyle, Nouvelle-Thèbes"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rive est du Nil, Louxor, Haute-Égypte, à 500 km au sud du Caire"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand temple de l'Égypte antique, Louxor, Haute-Égypte"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Karnak à Louxor, Égypte"}
  ]},
  {name:"Cap de Bonne-Espérance — Afrique du Sud",lat:-34.3568,lng:18.4702,desc:"Le cap de Bonne-Espérance ne marque pas le point le plus méridional d'Afrique — c'est le cap Agulhas, à 150 km à l'est. Mais c'est là que les vents d'ouest et les courants marins se rejoignent, créant des conditions de navigation particulièrement dangereuses. Bartolomeu Dias le doubla en 1488, ouvrant la route des Indes.",photo:"photos/cap_de_bonne_esperance.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Promontoire rocheux découvert par Bartolomeu Dias en 1488, Parc national de Table Mountain, péninsule du Cap"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Extrémité sud-ouest de la péninsule du Cap, province du Cap-Occidental, Afrique du Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cap rocheux légendaire à la pointe de l'Afrique australe"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Cap de Bonne-Espérance en Afrique du Sud"}
  ]},
  {name:"Table Mountain — Le Cap, Afrique du Sud",lat:-33.9628,lng:18.4098,desc:"La Table Mountain est l'une des plus anciennes montagnes du monde — estimée à 260 millions d'années. Son plateau sommital, qui accueille le célèbre «tablecloth» de nuages, abrite plus d'espèces végétales que toute la Grande-Bretagne.",photo:"photos/table_mountain.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Montagne à sommet plat de 1 086 m, formée il y a 600 millions d'années, visible à 200 km en mer, téléphérique depuis 1929"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Dominant la ville du Cap, province du Cap-Occidental, Afrique du Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Montagne à plateau emblématique dominant Le Cap, Afrique du Sud"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Table Mountain à Le Cap, Afrique du Sud"}
  ]},
  {name:"Mosquée Hassan II — Casablanca, Maroc",lat:33.6086,lng:-7.6327,desc:"La mosquée Hassan II de Casablanca est construite en partie sur la mer, avec un plancher en verre permettant de voir l'océan Atlantique en dessous. Son minaret de 210 m projette un rayon laser vers La Mecque chaque nuit.",photo:"photos/mosquee_hassan_ii.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Inaugurée en 1993, minaret de 210 m (plus haut du monde), construite en partie sur la mer, Michel Pinseau architecte"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bord de l'Atlantique, quartier de l'Ain Diab, Casablanca"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande mosquée d'Afrique, minaret le plus haut du monde, Casablanca"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Mosquée Hassan II à Casablanca, Maroc"}
  ]},
  {name:"Chute Angel — Venezuela",lat:5.97,lng:-62.535,desc:"La chute Angel est si haute que son eau se vaporise en grande partie avant d'atteindre le sol en saison sèche. Après une chute de 979 mètres, l'eau arrive sous forme de bruine ou de ruisseau, selon les conditions météo.",photo:"photos/chute_angel.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Salto Ýngel, 979 m de chute libre ininterrompue sur le plateau du Tepui Auyan, découverte par Jimmy Angel en 1933"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Gran Sabana, tepuis et cascades, parc national d'Amérique du Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus haute cascade du monde (979m), dans la jungle vénézuélienne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Chute Angel au Venezuela"}
  ]},
  {name:"Canal de Panama",lat:9.0798,lng:-79.6816,desc:"Le canal de Panama raccourcit de 15 000 km le trajet entre les océans Atlantique et Pacifique. Sa construction coûta la vie à 25 000 ouvriers entre 1881 et 1914, principalement à cause de la malaria et de la fièvre jaune.",photo:"photos/canal_de_panama.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Voie navigable de 80 km inaugurée le 15 août 1914, écluses de Gatún, Pedro Miguel et Miraflores, 14 000 navires/an"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Isthme de Panama, reliant l'océan Atlantique au Pacifique, province de Colón à Panama City"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Canal reliant l'Atlantique au Pacifique, grande œuvre du XXe siècle"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Canal de Panama"}
  ]},
  {name:"Île de Pâques — Chili",lat:-27.1127,lng:-109.3497,desc:"Juste sous la surface de la mer entourant l'île de Pâques se trouvent des milliers de moaï submergés — les archéologues n'ont fouillé qu'une infime partie des fonds marins. Les têtes visibles sont en réalité des statues entières dont le corps est enfoui.",photo:"photos/ile_de_paques.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Rano Raraku, carrière volcanique d'où sont extraits les 887 moai, île volcanique isolée à 3 700 km de la côte continentale"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île volcanique polynésienne isolée dans le Pacifique Sud, territoire d'outre-mer"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Île des statues géantes moai, Pacifique Sud, territoire chilien"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Île de Pâques au Chili"}
  ]},
  {name:"Cathédrale de Brasilia — Brésil",lat:-15.7988,lng:-47.8758,desc:"La cathédrale de Brasilia, conçue par Oscar Niemeyer et inaugurée en 1970, est une sculpture hyperboloïde de 16 colonnes d'acier incurvées pesant 90 tonnes chacune. Son entrée se fait par un tunnel souterrain sombre pour que les fidèles jaillissent dans la lumière blanche de la nef vitrée — une métaphore de la résurrection.",photo:"photos/cathedrale_de_brasilia.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Catedral Metropolitana Nossa Senhora Aparecida, conçue par Oscar Niemeyer, inaugurée en 1970, 16 colonnes hyperboloïdes"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Esplanade des Ministères d'une capitale construite ex nihilo, district fédéral"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cathédrale futuriste de Niemeyer, capitale du Brésil"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Cathédrale de Brasilia au Brésil"}
  ]},
  {name:"Parc Yellowstone — Wyoming, USA",lat:44.428,lng:-110.5885,desc:"Yellowstone est posé sur une supervolcan dont la dernière éruption massive remonte à 640 000 ans. Si elle se reproduisait, elle couvrirait les États-Unis d'une couche de cendres de 1 à 3 mètres. Le Grand Prismatic Spring, source chaude de 90 mètres de diamètre, doit ses couleurs aux bactéries thermophiles.",photo:"photos/parc_yellowstone.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Premier parc national du monde (1872), supervolcan actif, Old Faithful geyser éruptant toutes les 90 min, 89 000 km²"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Plateau volcanique du Wyoming, chevauchant Idaho et Montana, Rocheuses américaines"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Parc national emblématique, geysers et bisons, Wyoming, USA"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Parc Yellowstone à Wyoming, USA"}
  ]},
  {name:"Galápagos — Équateur",lat:-0.9538,lng:-90.9656,desc:"L'archipel des Galápagos est le laboratoire de l'évolution de Charles Darwin, qui y séjourna en 1835. L'isolement de ses îles créa des espèces uniques au monde : iguanes marins, pinsons de Darwin aux becs adaptés à chaque île, tortues géantes de 200 kg. 97% de l'archipel est parc national intangible.",photo:"photos/parc_yellowstone.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Archipel de 19 îles volcaniques, Darwin y développe sa théorie de l'évolution en 1835, tortues géantes et iguanes marins"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Archipel volcanique isolé en plein Pacifique, à 1 000 km du continent"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Îles de Darwin, faune endémique unique, Équateur, Pacifique"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Galápagos en Équateur"}
  ]},
  {name:"Times Square — New York, USA",lat:40.758,lng:-73.9855,desc:"Times Square doit son nom au New York Times qui y installa son siège en 1904 et y fit tomber pour la première fois la «ball drop» du Nouvel An. Avec 50 millions de visiteurs par an, c'est le lieu le plus cher pour la publicité au monde — un panneau peut coûter 50 000 dollars par jour.",photo:"photos/times_square.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Intersection de Broadway et 7th Avenue, carrefour commercial dont le nom vient d'un grand quotidien, boule du Nouvel An"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier central de la plus grande métropole du continent, entre deux avenues numérotées"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Carrefour des néons, cœur de Manhattan, New York"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Times Square à New York, USA"}
  ]},
  {name:"Cap Canaveral — Floride, USA",lat:28.3922,lng:-80.6077,desc:"Cap Canaveral est le berceau de l'ère spatiale américaine depuis 1950. Son pas de tir 39A vit partir Apollo 11 vers la Lune en 1969. Racheté par SpaceX en 2014, ce même site historique accueille aujourd'hui les fusées Falcon 9 et Starship — une continuité symbolique entre deux époques de l'exploration spatiale.",photo:"photos/cap_canaveral.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Kennedy Space Center, Pad 39A d'où sont partis Apollo 11 (1969) et la navette spatiale, côte est du continent américain"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Merritt Island, comté de Brevard, côte est de la Floride, face à l'Atlantique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Centre spatial Kennedy, lieu de lancement d'Apollo 11, Floride"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Cap Canaveral à Floride, USA"}
  ]},
  {name:"Patagonie — Argentine",lat:-50.9423,lng:-73.4068,desc:"La Patagonie couvre 900 000 km² — soit une surface plus grande que la France et l'Espagne réunies. Avec seulement 2 habitants au km², c'est l'une des régions les moins peuplées de la planète, habitée surtout par des guanacos et des condors.",photo:"photos/cap_canaveral.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cerro Torre (3 128 m), aiguille granitique dans le Parc national Los Glaciares, province de Santa Cruz"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Parc national de Patagonie, à la frontière entre deux pays sud-américains"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Aiguille granitique dans un parc national de l'extrême sud argentin"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Patagonie en Argentine"}
  ]},
  {name:"Teotihuacan — Mexique",lat:19.6925,lng:-98.8438,desc:"Teotihuacan était l'une des plus grandes villes du monde en l'an 500 ap. J.-C., avec 200 000 habitants. Personne ne sait quelle civilisation la construisit — les Aztèques, qui la découvrirent des siècles plus tard, la nommèrent «le lieu où les hommes deviennent des dieux».",photo:"photos/teotihuacan.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Pyramide du Soleil (65m), Pyramide de la Lune, Avenue des Morts, cité précolombienne fondée vers -200, dépeuplée en 650"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Municipalité de San Juan Teotihuacan, État de Mexico, à 40 km de Mexico City"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité aztèque aux grandes pyramides, à 40 km de Mexico"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le site archéologique de Teotihuacan, Mexique"}
  ]},
  {name:"Great Barrier Reef — Queensland, Australie",lat:-18.2861,lng:147.6992,desc:"Le Grand Récif corallien est le plus grand organisme vivant de la planète — visible depuis l'espace. Sa surface est inférieure de moitié à celle de 1960 à cause du réchauffement climatique et de l'acidification des océans. Des chercheurs travaillent à congeler des fragments de corail pour permettre une future restauration.",photo:"photos/teotihuacan.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus grand système récifal du monde, 2 300 km, 2 900 récifs individuels, visible depuis l'espace, Queensland"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Mer de Corail, côte nord-est du Queensland, entre Bundaberg et Torres Strait"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand récif corallien du monde, Queensland, Australie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Great Barrier Reef à Queensland, Australie"}
  ]},
  {name:"Sky Tower — Auckland, Nouvelle-Zélande",lat:-36.8681,lng:174.7622,desc:"La Sky Tower d'Auckland, inaugurée en 1997, est la structure la plus haute de l'hémisphère sud avec ses 328 mètres. Elle repose sur une seule colonne de béton ancrée dans le roc volcanique d'Auckland, conçue pour résister à un tremblement de terre de magnitude 8. Des parachutistes y sautent depuis le sommet lors d'événements spéciaux.",photo:"photos/sky_tower.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Pylône de télécommunications de 328 m inauguré en 1997, Gordon Moller architecte, saut en chute libre depuis la plateforme"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Victoria Street West, centre CBD d'Auckland, île du Nord, Nouvelle-Zélande"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tour emblématique d'Auckland, plus haute tour de l'hémisphère sud"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Sky Tower à Auckland, Nouvelle-Zélande"}
  ]},
  {name:"Fiordland — Milford Sound, Nouvelle-Zélande",lat:-44.6413,lng:167.9263,desc:"Le parc national de Fiordland reçoit jusqu'à 9 mètres de pluie par an — l'un des endroits les plus pluvieux du monde. Cette eau crée des centaines de cascades éphémères qui cascadent des parois à pic pendant et après chaque pluie.",photo:"photos/fiordland.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Piopiotahi, fjord de 16 km de long taillé par les glaciers, pic de Mitre 1 692 m, classé UNESCO, île du Sud"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Parc national de Fiordland, district de Southland, île du Sud, Nouvelle-Zélande"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Fjord de Milford Sound, paysage de montagne et cascades, Nouvelle-Zélande"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Fiordland à Milford Sound, Nouvelle-Zélande"}
  ]},
  {name:"Bora Bora — Polynésie française",lat:-16.5004,lng:-151.7415,desc:"Le lagon de Bora Bora est un ancien cratère volcanique envahi par la mer. La barrière de corail qui l'entoure est si peu profonde qu'on peut la traverser à pied à marée basse dans certains endroits, créant une expérience unique de marche sur l'eau.",photo:"photos/bora_bora.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Île volcanique de 38 km², entourée d'un lagon turquoise et d'un récif barrière, archipel de la Société, Polynésie"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Archipel de la Société, Polynésie française, à 260 km à l'ouest de Tahiti"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Île paradisiaque à lagon turquoise, Polynésie française"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Bora Bora en Polynésie française"}
  ]},
  {name:"Palau — Micronésie",lat:7.3419,lng:134.4791,desc:"Le lac des méduses de Palau est le seul endroit au monde où l'on peut nager en sécurité entouré de millions de méduses. Ces méduses ont perdu leur venin au fil de l'évolution car elles n'avaient plus de prédateurs dans ce lac fermé. Chaque jour, elles «nagent» littéralement en suivant la lumière du soleil.",photo:"photos/palau.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Jellyfish Lake (Ongeim'l Tketau), lac marin de 460 m de long peuplé de 5 millions de méduses dorées sans venin, île de Eil Malk"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Archipel des Rock Islands, État de Koror, République des Palaos, Micronésie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Lac marin peuplé de millions de méduses sans venin, archipel de Micronésie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palau en Micronésie"}
  ]},
  {name:"Mosquée Al-Aqsa — Jérusalem",lat:31.7761,lng:35.2358,desc:"La mosquée Al-Aqsa est le troisième lieu saint de l'Islam, sur l'esplanade des Mosquées de Jérusalem. Selon la tradition islamique, c'est le site du voyage nocturne du Prophète Mahomet (isra et mi'raj) depuis La Mecque. Elle fut construite en 705 ap. J.-C. par le calife omeyyade al-Walid Ier sur un site sacré depuis l'Antiquité.",photo:"photos/mosquee_al_aqsa.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Masjid al-Aqsa, 3e lieu saint de l'Islam, construite en 705 par Abd al-Malik, esplanade du mont du Temple"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Mont du Temple, Vieille Ville de Jérusalem, quartier musulman"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"3e lieu saint de l'Islam, sur l'esplanade des Mosquées, Jérusalem"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Mosquée Al-Aqsa à Jérusalem"}
  ]},
  {name:"Palmyre — Syrie",lat:34.5503,lng:38.2688,desc:"La reine de Palmyre, Zénobie, défia Rome en 270 ap. J.-C. en conquérant l'Égypte et l'Anatolie avec son armée. Capturée par l'empereur Aurélien, elle fut exhibée à Rome enchaînée d'or massif — un hommage paradoxal à sa grandeur.",photo:"photos/palmyre.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Tadmor, oasis caravanière nabatéenne, temple de Bêl (32 ap. J.-C.), partiellement détruit par Daech en 2015"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Gouvernorat de Homs, désert syrien, à 210 km de Damas"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité antique de la Reine Zénobie, désert de Syrie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palmyre en Syrie"}
  ]},
  {name:"Persépolis — Iran",lat:29.9348,lng:52.8913,desc:"Persépolis était le symbole de la richesse et du pouvoir achéménide. Ses bas-reliefs représentent 23 nations soumises portant des tributes — une carte vivante de l'empire le plus vaste de l'Antiquité, qui s'étendait de la Grèce à l'Inde.",photo:"photos/persepolis.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Capitale cérémonielle de l'Empire achéménide, fondée par Darius Ier vers -515, Apadana et porte de toutes les nations"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Plaine de Marvdasht, Province de Fars, à 60 km d'une grande ville historique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ruines de la capitale perse de Darius, Iran"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Persépolis en Iran"}
  ]},
  {name:"Coupole du Rocher — Jérusalem",lat:31.7781,lng:35.2354,desc:"Le Dôme du Rocher, sanctuaire islamique construit en 691, recouvre le rocher d'où le prophète Mahomet serait monté au ciel lors de son voyage nocturne. Ses mosaïques et carreaux de faïence furent entièrement restaurés par la Jordanie en 1959 et 2016. Son dôme doré est recouvert de 5 000 plaques d'or.",photo:"photos/coupole_du_rocher.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Qubbat al-Sakhra, sanctuaire islamique érigé en 691 par Abd al-Malik ibn Marwan, recouvrant le rocher de l'Ascension"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Mont du Temple, Esplanade des Mosquées, Vieille Ville de Jérusalem"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Sanctuaire doré de l'esplanade des Mosquées, Jérusalem"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Coupole du Rocher à Jérusalem"}
  ]},
  {name:"Cappadoce — Turquie",lat:38.6431,lng:34.8289,desc:"Les cheminées de fées de Cappadoce furent habitées pendant des millénaires. Les premières communautés chrétiennes y creusèrent des villes souterraines entières pour échapper aux persécutions romaines — certaines pouvaient abriter 20 000 personnes sur 8 niveaux.",photo:"photos/cappadoce.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Göreme, cheminées de fées en tuf volcanique créées par l'érosion de la caldeira du Erciyes, habitations rupestres du IVe siècle"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province de Nev?ehir, Anatolie centrale, à 280 km d'Ankara"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Paysage lunaire aux cheminées de fées en tuf volcanique, Anatolie centrale, Turquie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Cappadoce en Turquie"}
  ]},
  {name:"Château de Kronborg — Elseneur, Danemark",lat:56.039,lng:12.6213,desc:"Le château de Kronborg inspira Shakespeare pour son Hamlet, bien que le dramaturge n'ait probablement jamais visité le Danemark. La légende dit que le héros Viking Holger Danske dort dans ses caves et se réveillera si le Danemark est en danger.",photo:"photos/chateau_de_kronborg.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Slot Kronborg, forteresse Renaissance de 1574, cadre d'Hamlet de Shakespeare, détroit de l'Øresund"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Ville côtière du nord d'une péninsule européenne, bord d'étroit face à un pays voisin"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château d'Hamlet, classé UNESCO, Danemark"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Kronborg à Elseneur, Danemark"}
  ]},
  {name:"Opéra de Copenhague — Danemark",lat:55.6786,lng:12.5997,desc:"L'Opéra de Copenhague, inauguré en 2005, fut entièrement financé par le magnat de la marine Mærsk Mc-Kinney Møller pour 500 millions d'euros. Ses 14 mètres de porte-à-faux et son toit doré de 32 mètres surplombant le port en font l'un des opéras les plus modernes et chers jamais construits.",photo:"photos/opera_de_copenhague.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Operaen, conçu par Henning Larsen, inauguré en 2005, offert par Mærsk McKinney Møller, île de Holmen"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île de Holmen, port de Copenhague, face au palais d'Amalienborg"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Opéra moderne sur le port de Copenhague, Danemark"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Opéra de Copenhague, Danemark"}
  ]},
  {name:"Vieux-Port de Stockholm — Suède",lat:59.3245,lng:18.0726,desc:"Gamla Stan est construite sur une île artificielle créée au XIIIe siècle. Ses ruelles les plus étroites ne mesurent que 90 cm de large — soit exactement la largeur des traîneaux à chevaux de l'époque médiévale.",photo:"photos/vieux_port_de_stockholm.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Gamla Stan, île Stadsholmen, vieille ville médiévale fondée en 1252, Stortorget et ruelles pavées"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île de Stadsholmen, centre historique de Stockholm, entre le lac Mälaren et la Baltique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Gamla Stan, vieille ville médiévale de Stockholm, Suède"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Vieux-Port de Stockholm en Suède"}
  ]},
  {name:"Palais Royal de Stockholm — Suède",lat:59.3268,lng:18.0717,desc:"Le palais royal de Stockholm, achevé en 1754, est l'une des plus grandes résidences royales encore en service avec ses 1 430 pièces. Contrairement à Buckingham, il est ouvert au public l'été entier. La garde royale défile chaque jour à midi dans une cérémonie très populaire.",photo:"photos/palais_royal_de_bangkok.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Kungliga Slottet, 1 430 pièces, construit de 1697 à 1760 par Nicodemus Tessin le Jeune sur l'île Stadsholmen"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Gamla Stan, île historique, résidence officielle du monarque, bord de la mer Baltique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand palais royal du monde en usage, Stockholm"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais Royal de Stockholm en Suède"}
  ]},
  {name:"Bibliothèque de l'Université d'Helsinki — Finlande",lat:60.1699,lng:24.9384,desc:"La bibliothèque nationale de Finlande, bâtie en 1840 par Carl Ludwig Engel, est le chef-d'œuvre néoclassique d'Helsinki. Son architecture sobre et majestueuse fut conçue pour rivaliser avec les grandes bibliothèques européennes. Elle abrite un exemplaire de chaque livre publié en Finlande depuis 1707 — un dépôt légal exceptionnel.",photo:"photos/bibliotheque_de_l_universite_d_helsinki.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cathédrale luthérienne néoclassique conçue par Carl Ludwig Engel, consacrée en 1852, sur la place du Sénat"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Senate Square (Senaatintori), cœœur de la capitale la plus nordique d'Europe continentale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cathédrale blanche néoclassique dominant le centre d'Helsinki"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Bibliothèque de l'Université d'Helsinki en Finlande"}
  ]},
  {name:"Vieux-Tallinn — Estonie",lat:59.437,lng:24.7453,desc:"Tallinn possède l'une des vieilles villes médiévales les mieux préservées d'Europe du Nord. Sa pharmacie, fondée en 1422, est l'une des plus anciennes pharmacies encore en activité au monde.",photo:"photos/vieux_tallinn.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Centre médiéval de Tallinn, Toompea (colline de la Cathédrale) et Ville basse hanseatique, classé UNESCO en 1997"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Presqu'île baignant dans un golfe de la mer Baltique, vieille ville médiévale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Vieille ville médiévale la mieux préservée de la Baltique, Estonie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Vieux-Tallinn en Estonie"}
  ]},
  {name:"Château de Trakai — Lituanie",lat:54.6479,lng:24.9347,desc:"Le château de Trakai, bâti sur une île du lac Galv? au XIVe siècle, est le château insulaire le plus oriental d'Europe. Il fut la résidence du Grand-Duc Vytautas qui étendit la Lituanie jusqu'à la mer Noire, créant le plus grand État d'Europe médiévale.",photo:"photos/chateau_de_blarney.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Pilis, château insulaire gothique du XIVe siècle sur le lac Galv?, résidence du Grand-Duc Vytautas"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île d'un lac glaciaire, ancienne capitale médiévale, à 28 km de la capitale actuelle"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château insulaire médiéval sur un lac, Lituanie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Trakai sur son lac, Lituanie"}
  ]},
  {name:"Vieille ville de Dubrovnik — Croatie",lat:42.6507,lng:18.0944,desc:"Les remparts de Dubrovnik furent construits à partir du XIIIe siècle et n'ont jamais été percés par un ennemi. La cité-état de Raguse fut l'une des premières républiques marchandes à abolir l'esclavage, en 1418, trois siècles avant les nations modernes.",photo:"https://upload.wikimedia.org/wikipedia/commons/3/3d/Dubrovnik_crop.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Raguse, cité-état indépendante jusqu'en 1808, remparts de 1 940 m, Fort Lovrijenac et Stradun, côte dalmate"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Extrémité sud de la côte dalmate croate, mer Adriatique, comté de Dubrovnik-Neretva"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Perle de l'Adriatique, vieille ville fortifiée de Croatie, UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La vieille ville fortifiée de Dubrovnik, Croatie"}
  ]},
  {name:"Pont de Mostar — Bosnie-Herzégovine",lat:43.337,lng:17.8156,desc:"Le Stari Most de Mostar, pont ottoman construit en 1566, fut délibérément détruit par des obus croates en novembre 1993. Sa reconstruction, achevée en 2004, utilisa les mêmes techniques du XVIe siècle et la même pierre locale — le tenelija. La reconstruction de ce pont devint un symbole de réconciliation.",photo:"https://upload.wikimedia.org/wikipedia/commons/1/1d/Mostar-StariMost.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Stari Most, pont ottoman en pierre calcaire construit en 1566 par Mimar Hayruddin, détruit en 1993 et reconstruit en 2004"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre historique d'une ville des Balkans, vallée de la Neretva, pont ottoman du XVIe s."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Vieux pont ottoman de Mostar, symbole de réconciliation, Bosnie-Herzégovine"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Pont de Mostar en Bosnie-Herzégovine"}
  ]},
  {name:"Monastère de Meteora — Grèce",lat:39.7217,lng:21.6306,desc:"Les monastères de Météora sont construits au sommet de pitons rocheux de grès atteignant 600 mètres. Fondés au XIVe siècle par des moines fuyant les invasions ottomanes, ils étaient accessibles uniquement par des échelles amovibles ou des paniers hissés par des treuils — pour décourager les intrus.",photo:"photos/monastere_de_meteora.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Complexe de 6 monastères orthodoxes actifs perchés sur des pitons de grès (400-600m), fondés aux XIVe-XVIe siècles"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Plaine de Thessalie, commune de Kalambaka, région de Thessalie centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Monastères suspendus sur des rochers géants, merveille de Grèce, UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Monastère de Meteora en Grèce"}
  ]},
  {name:"Place Wenceslas — Prague, Rép. Tchèque",lat:50.0813,lng:14.4281,desc:"La place Venceslas de Prague n'est pas une place mais un boulevard de 750 mètres. C'est le centre politique de la Bohême depuis le Moyen Âge. Jan Palach s'y immola par le feu en 1969 pour protester contre l'invasion soviétique. En 1989, des centaines de milliers de personnes y manifestèrent lors de la Révolution de velours.",photo:"photos/place_wenceslas.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Václavské nám?stí, boulevard de 750m, cœur politique des révolutions de 1848, 1968 et 1989 (Révolution de velours)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Nové M?sto (Nouvelle Ville), centre de Prague, entre la gare centrale et le musée national"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grande place-boulevard au cœur de Prague, témoin de la Révolution de Velours"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Place Wenceslas à Prague, Rép. Tchèque"}
  ]},
  {name:"Château de Wawel — Cracovie, Pologne",lat:50.054,lng:19.9354,desc:"Le château de Wawel abrite la crypte royale où sont enterrés les rois, héros et poètes nationaux polonais. Il conserve aussi la «dent de dragon» — en réalité une dent de mammouth ou de rhinocéros laineux — suspendue à une chaîne à l'entrée depuis le Moyen Âge.",photo:"photos/chateau_de_wawel.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Wawel Royal Castle, résidence des rois jusqu'en 1596, colline de Wawel dominant la Vistule, cathédrale gothique"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Colline du Wawel, rive gauche de la Vistule, vieille ville de Cracovie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château royal et cathédrale sur la colline du Wawel, Cracovie, Pologne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Wawel à Cracovie, Pologne"}
  ]},
  {name:"Auschwitz-Birkenau — Pologne",lat:50.0341,lng:19.1783,desc:"Auschwitz-Birkenau fut libéré le 27 janvier 1945 par l'armée soviétique. Ce jour est devenu la Journée internationale de la mémoire des victimes de l'Holocauste. Le site, classé UNESCO, reçoit plus de 2 millions de visiteurs par an.",photo:"photos/chateau_de_wawel.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Konzentrationslager Auschwitz-Birkenau, plus grand camp d'extermination nazi, 1,1 million de victimes, 1940-1945"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune d'Europe centrale, à 60 km d'une grande cité royale, camp d'extermination"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Mémorial du camp d'extermination nazi, classé UNESCO, Pologne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Auschwitz-Birkenau en Pologne"}
  ]},
  {name:"Château de Bran — Roumanie",lat:45.5152,lng:25.367,desc:"Le château de Bran fut associé à Dracula par des touristes et éditeurs anglais qui cherchaient un décor réel pour le roman de Bram Stoker (1897). Stoker ne visita jamais la Roumanie et s'inspira uniquement de livres. Vlad l'Empaleur, le vrai prince valaque cruel, n'y séjourna probablement que très brièvement.",photo:"photos/chateau_de_bran.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Castelul Bran, forteresse teutonique de 1382 sur un rocher, associée à la légende de Dracula de Bram Stoker"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune d'un col des Carpates entre deux régions historiques d'Europe de l'Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château de Dracula dans les Carpates, Transylvanie, Roumanie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Bran en Roumanie"}
  ]},
  {name:"Lavra de Kiev — Ukraine",lat:50.4347,lng:30.5578,desc:"La Laure de Kiev-Petchersk, fondée en 1051, est le plus ancien monastère de la Russie kiévienne. Ses catacombes abritent les corps momifiés naturellement de moines médiévaux — une attraction macabre vieille de neuf siècles. Elle fut inscrite au patrimoine mondial de l'UNESCO en 1990.",photo:"photos/lavra_de_kiev.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Kyevo-Pechersk? Lavra, monastère orthodoxe fondé en 1051, catacombes avec momies de saints, colline du Dniepr"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rive droite d'un grand fleuve d'Europe orientale, quartier des grottes monastiques"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Monastère des Grottes, haut lieu de l'orthodoxie slave, Kiev"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Lavra de Kiev en Ukraine"}
  ]},
  {name:"Cliffs of Moher — Irlande",lat:52.9715,lng:-9.4309,desc:"Les falaises de Moher servirent de décor dans Harry Potter et les Reliques de la Mort. Elles sont habitées par 30 000 oiseaux de mer de 20 espèces différentes, dont des macareux qui creusent leurs terriers dans le sommet herbeux des falaises.",photo:"photos/cliffs_of_moher.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Falaises de 214 m de hauteur sur 8 km de long, âge de 320 millions d'années, comté de Clare, côte atlantique"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Côte ouest d'une île de l'Atlantique nord, falaises vertigineuses de 200m"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Falaises spectaculaires de l'Atlantique, emblème de l'Irlande"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Cliffs of Moher en Irlande"}
  ]},
  {name:"Château de Blarney — Irlande",lat:51.9293,lng:-8.5718,desc:"La Pierre d'Éloquence du château de Blarney, encastrée sous le parapet à 25 mètres de hauteur, s'embrasse en se penchant en arrière. Selon la légende, qui l'embrasse reçoit le don de flattery — l'art de parler avec charme et conviction. Winston Churchill et Mick Jagger l'auraient embrassée.",photo:"photos/chateau_de_blarney.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Blarney Castle, tour médiévale de 1446, Pierre d'Éloquence (Blarney Stone) au sommet, comté de Cork"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Village à 8 km d'une grande ville portuaire, château médiéval et sa pierre légendaire"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château de la Pierre d'Éloquence, près de Cork, Irlande"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Blarney en Irlande"}
  ]},
  {name:"Cathédrale de Cologne — Allemagne",lat:50.9413,lng:6.9583,desc:"La cathédrale de Cologne fut construite sur 632 ans (1248-1880) — la plus longue construction cathédrale gothique de l'Histoire. Ses flèches jumelles de 157 mètres furent le bâtiment le plus haut du monde de 1880 à 1884. Elle abrite les reliques supposées des Rois Mages, apportées de Milan en 1164 — ce qui en fit le plus grand pèlerinage médiéval du nord de l'Europe.",photo:"photos/cathedrale_de_cologne.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Kölner Dom, construction entamée en 1248, achevée en 1880, 157m de hauteur, abritant les reliques des Rois Mages"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bord du Rhin, face au pont Hohenzollern, centre de Cologne, Rhénanie-du-Nord-Westphalie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cathédrale gothique de Cologne, 2e monument le plus visité d'Allemagne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Cathédrale de Cologne en Allemagne"}
  ]},
  {name:"Forêt-Noire — Bade-Wurtemberg, Allemagne",lat:47.999,lng:8.227,desc:"La Forêt-Noire est le berceau de la coucou-horloge et du gâteau Forêt-Noire. Ses forêts d'épicéas inspirèrent les frères Grimm pour Blanche-Neige, Hansel et Gretel. La Schwarzwaldbahn, ligne de chemin de fer inaugurée en 1873, traverse 37 tunnels et 163 viaducs dans un paysage de conte de fées.",photo:"photos/cathedrale_de_cologne.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Schwarzwald, massif hercynien de 160km de long, source du Danube à Donaueschingen, horlogerie coucou, Triberg"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bade-Wurtemberg, entre le Rhin et le plateau souabe, massif forestier célèbre"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Massif forestier emblématique, gâteaux et coucous, sud-ouest de l'Allemagne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Forêt-Noire à Bade-Wurtemberg, Allemagne"}
  ]},
  {name:"Château de Chillon — Suisse",lat:46.4142,lng:6.9274,desc:"Lord Byron grava son nom sur une colonne de la prison du château de Chillon lors de sa visite en 1816. Il y écrivit ensuite «Le Prisonnier de Chillon», poème inspiré de François Bonivard, emprisonné 4 ans dans les caves pour s'être opposé au duc de Savoie.",photo:"photos/chateau_de_chillon.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Château insulaire du XIIe siècle sur un rocher du lac Léman, prison de François Bonivard, immortalisé par Byron"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bord du lac Léman, commune de Veytaux, canton de Vaud, entre Montreux et Villeneuve"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château médiéval sur le lac Léman, Montreux, Suisse"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Chillon au bord du lac Léman, Suisse"}
  ]},
  {name:"Jet d'eau — Genève, Suisse",lat:46.2044,lng:6.1557,desc:"Le jet d'eau de Genève jaillit à 500 litres par seconde et monte à 140 mètres de hauteur. Il fut créé en 1891 pour réguler la pression hydraulique du réseau d'eau de la ville. Par vent fort, il peut doucher des passants à plusieurs centaines de mètres — les Genevois l'appellent affectueusement «la grande douche».",photo:"photos/jet_d_eau.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Jet d'eau de Genève, 140 m de hauteur, débit de 500 litres/seconde, vitesse de 200 km/h, inauguré en 1891"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rade de Genève, lac Léman, Quai Gustave Ador, Genève"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Fontaine géante sur le lac Léman, symbole de Genève, Suisse"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Jet d'eau à Genève, Suisse"}
  ]},
  {name:"Lac Baïkal — Sibérie, Russie",lat:53.5587,lng:108.165,desc:"Le lac Baïkal est si profond qu'on pourrait y empiler 6 tours Eiffel sans les voir dépasser. Sa rive orientale abrite des phoques d'eau douce — les seuls au monde — dont l'ancêtre aurait migré depuis l'Arctique il y a 20 millions d'années.",photo:"photos/lac_baikal.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus ancien (25 Ma) et profond (1 642 m) lac du monde, 20% des réserves d'eau douce liquide de la planète"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Sibérie méridionale, oblast d'Irkoutsk et Bouriatie, à 66 km d'Irkoutsk"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Lac le plus profond du monde, Sibérie, Russie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Lac Baïkal à Sibérie, Russie"}
  ]},
  {name:"Registan — Samarcande, Ouzbékistan",lat:39.6558,lng:66.9758,desc:"La place du Registan de Samarcande est ornée de carreaux de céramique vieux de 600 ans dont les couleurs sont aussi vives qu'au premier jour. Le secret des artisans timourides pour produire ce bleu lapis-lazuli immuable n'a jamais été totalement élucidé.",photo:"photos/registan.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Place centrale de Samarcande, trois médersas timourides (Ulugh Beg 1420, Shir-Dor 1636, Tilya-Kori 1660)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre d'une ville mythique de la Route de la Soie, mosquées de majolique bleue"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus belle place d'Asie centrale, trois médersas dorées, Samarcande"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Registan à Samarcande, Ouzbékistan"}
  ]},
  {name:"Palais de Topkapi — Istanbul, Turquie",lat:41.0115,lng:28.9833,desc:"Le palais de Topkapi fut le centre de l'Empire ottoman pendant 400 ans. Son Harem abritait jusqu'à 600 femmes et eunuques. Le palais conserve les reliques les plus sacrées de l'Islam : le manteau et l'épée du prophète Mahomet, ainsi qu'une dent et un cheveu lui appartenant selon la tradition.",photo:"photos/palais_de_topkapi.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Topkap? Saray?, résidence des sultans ottomans de 1465 à 1856, abritant le manteau du prophète et 86 carats du Diamant du Spoonmak"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Pointe du Sérail, péninsule historique, entre la Corne d'Or et le Bosphore"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Palais des sultans ottomans, trésor impérial, Istanbul"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais de Topkapi à Istanbul, Turquie"}
  ]},
  {name:"Pamukkale — Turquie",lat:37.92,lng:29.12,desc:"Pamukkale — «château de coton» en turc — est un site naturel unique : des sources thermales à 35°C chargées de carbonate de calcium ont créé des terrasses et cascades de travertin blanc sur 2 700 mètres. La cité antique d'Hiérapolis construite au-dessus comptait 100 000 habitants à son apogée romaine.",photo:"photos/pamukkale.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Château de coton, terrasses calcaires blanches formées par des sources thermales à 35°C riches en carbonate de calcium, Hiérapolis"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province de Denizli, vallée du Büyük Menderes, Anatolie occidentale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Terrasses de travertin blanc et bassins thermaux, merveille naturelle de Turquie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Pamukkale en Turquie"}
  ]},
  {name:"Bagan — Myanmar",lat:21.1717,lng:94.8585,desc:"Les temples de Bagan sont peints de fresques représentant la vie du Bouddha. Après le tremblement de terre de 1975, des restaurations controversées utilisant du béton et des briques modernes furent critiquées par les archéologues — Bagan ne peut pas obtenir le statut UNESCO à cause de ces restaurations.",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plaine de plus de 2 000 temples bouddhistes et stûpas, ancienne capitale du Royaume de Pagan (849-1297 ap. J.-C.)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bord de l'Irrawaddy, zone sèche centrale d'un pays d'Asie du Sud-Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plaine aux milliers de temples bouddhistes, Myanmar (Birmanie)"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Bagan au Myanmar"}
  ]},
  {name:"Ha Long Bay — Vietnam",lat:20.9101,lng:107.1839,desc:"La baie d'Ha Long compte 1 969 îlots calcaires formés il y a 500 millions d'années. Selon la légende vietnamienne, un dragon descendit du ciel en battant de la queue, ses coups créant les vallées et les baies. La baie abriterait aussi des grottes marines habitées par des villages flottants de pêcheurs.",photo:"photos/ha_long_bay.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"2 000 îlots et pitons calcaires karstiques sur 1 553 km², grotte de Hang ??u G?, province de Qu?ng Ninh"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Golfe d'une mer intérieure d'Asie du Sud-Est, baie aux 1 600 îlots calcaires"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Baie aux dragons, pitons calcaires dans la mer de Chine, Vietnam"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Ha Long Bay au Vietnam"}
  ]},
  {name:"Rizières en terrasses de Banaue — Philippines",lat:16.9176,lng:121.0583,desc:"Les rizières en terrasses de Banaue dans le Cordillera furent construites il y a 2 000 ans par le peuple Ifugao sans outils en métal ni plans écrits. Sculptées à flanc de montagne sur 1 500 mètres d'altitude, elles forment un total de 10 000 km² — suffisant pour ceinturer la planète 2,5 fois si mises bout à bout.",photo:"photos/rizieres_en_terrasses_de_banaue.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ifugao Rice Terraces, creusées il y a 2 000 ans par le peuple Ifugao, 10 360 km² de terrasses, montagne Cordillère"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province montagneuse d'une grande île tropicale, terrasses de riz vieilles de 2 000 ans"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Terrasses de riz millénaires dans les montagnes de Luçon, Philippines"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Rizières en terrasses de Banaue, Philippines"}
  ]},
  {name:"Lac Tonlé Sap — Cambodge",lat:12.8679,lng:104.043,desc:"Le Tonlé Sap est le seul lac au monde dont le fleuve change de sens deux fois par an. En saison des pluies, le Mékong refoule ses eaux dans le lac qui quintuple de taille. En saison sèche, le flux s'inverse et le lac se vide progressivement.",photo:"photos/lac_tonle_sapJPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus grand lac d'eau douce d'Asie du Sud-Est, superficie variant de 2 500 km² (saison sèche) à 16 000 km² (mousson)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre du pays, grand lac alimenté par le plus long fleuve d'Asie du Sud-Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand lac d'Asie du Sud-Est, villages flottants, Cambodge"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Lac Tonlé Sap au Cambodge"}
  ]},
  {name:"Gunung Bromo — Java, Indonésie",lat:-7.9425,lng:112.953,desc:"Le mont Bromo est un volcan actif dans une caldeira géante où vivent encore 30 000 personnes du peuple Tengger. Chaque année lors du festival Yadnya Kasada, ils jettent des offrandes — fleurs, riz, poules, chèvres — dans le cratère fumant pour remercier les dieux.",photo:"photos/gunung_bromo.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Volcan actif de 2 329 m dans la caldeira de Tengger, cratère de 800 m de diamètre, brume sulfureuse permanente"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Parc national de l'est d'une grande île tropicale, caldeira volcanique et mer de sable"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Volcan fumant dans une mer de sable, Java, Indonésie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Gunung Bromo à Java, Indonésie"}
  ]},
  {name:"Mrauk U — Myanmar",lat:20.5947,lng:93.2019,desc:"Mrauk U fut la capitale du royaume d'Arakan du XVe au XVIIIe siècle, une des villes les plus riches d'Asie du Sud-Est. Ses 700 temples en brique, enfouis dans la jungle, sont comparés à Bagan mais trois fois moins connus. Le site reste accessible uniquement par bateau sur la rivière Kaladan — son isolement le préserve du tourisme de masse.",photo:"photos/mrauk_u.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ancienne capitale du royaume d'Arakan (1430-1784), temples bouddhistes sur collines, accès uniquement par bateau"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"État côtier du nord-ouest d'un pays d'Asie du Sud-Est, ancienne capitale royale sur une rivière"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité archéologique oubliée, temples sur collines, État Rakhine, Myanmar"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Mrauk U au Myanmar"}
  ]},
  {name:"Mosquée de Dôme des Umayyades — Damas, Syrie",lat:33.5114,lng:36.3069,desc:"La Grande Mosquée des Omeyyades de Damas est l'une des plus anciennes mosquées du monde (715 ap. J.-C.). Elle fut construite sur une église byzantine, elle-même bâtie sur un temple romain à Jupiter. Selon la tradition, la tête de Jean-Baptiste y est conservée dans un sanctuaire.",photo:"photos/mosquee_de_dome_des_umayyades.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Grande Mosquée des Omeyyades, construite par Al-Walid Ier de 706 à 715, abritant le tombeau de Saladin et la tête de Jean-Baptiste"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Vieille ville de la capitale historique du Proche-Orient, l'une des plus anciennes cités au monde"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Mosquée des Omeyyades, joyau de l'architecture islamique, Damas"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Mosquée de Dôme des Umayyades à Damas, Syrie"}
  ]},
  {name:"Massif de l'Altaï — Mongolie",lat:48.9,lng:89.5,desc:"Le massif de l'Altaï mongol est la région natale de Gengis Khan et le berceau de la civilisation nomade des steppes. Ses montagnes abritent les aigles dorées dressées par les Kazakhs mongols pour la chasse — une tradition de 4 000 ans perpétuée par les derniers «berkutchi». Chaque automne, un festival des aigles y rassemble ces chasseurs.",photo:"photos/massif_de_l_altai.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Khüiten Peak (4 374 m), point culminant du pays, massif glaciaire aux pétroglyphes vieux de 12 000 ans"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province de Bayan-Ölgii, extrême ouest du pays, tripoint entre trois nations"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Massif glaciaire de l'extrême ouest mongol, nomades kazakhs aigliers, steppes"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Massif de l'Altaï en Mongolie"}
  ]},
  {name:"Tombouctu — Mali",lat:16.7735,lng:3.0074,desc:"Tombouctou, surnommée «la ville aux 333 saints», fut au XVe siècle la capitale intellectuelle et spirituelle de l'Afrique avec 25 000 étudiants et une université réputée dans tout le monde islamique. Ses 700 000 manuscrits médiévaux préservés dans des bibliothèques privées représentent une archive unique de la pensée africaine précoloniale.",photo:"photos/tombouctu.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cité mythique du Sahel, carrefour caravanier de l'or et du sel aux XIVe-XVIe siècles, mosquées de Djingareyber et Sankoré"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rive nord d'un grand fleuve africain, bordure sud du Sahara, cité caravanère légendaire"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité mythique du désert, capitale des manuscrits islamiques, Mali"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Tombouctu au Mali"}
  ]},
  {name:"Désert du Sahara — Algérie (Tassili)",lat:25.4167,lng:8.4167,desc:"Le Tassili n'Ajjer en Algérie est un vaste plateau rocheux abritant 15 000 peintures et gravures rupestres réalisées entre -10 000 et -2 000 av. J.-C. Ces œuvres représentent des éléphants, hippopotames et crocodiles — preuve que le Sahara était autrefois une savane verdoyante. L'UNESCO le classe double patrimoine naturel et culturel.",photo:"photos/desert_du_sahara.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Tassili n'Ajjer, plateau gréseux à 1 800 m, 15 000 pétroglyphes et peintures rupestres, UNESCO, Sahara central"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Profond Sahara, massif rocheux du Hoggar à proximité, extrême sud du pays"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plateau rupestre du Tassili n'Ajjer, art rupestre préhistorique, Algérie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Désert du Sahara en Algérie (Tassili)"}
  ]},
  {name:"Médina de Fès — Maroc",lat:34.0633,lng:-5.0039,desc:"La médina de Fès el-Bali, fondée en 808, est la plus grande zone urbaine piétonne au monde — aucune voiture n'y passe. Ses 9 400 ruelles labyrinthiques peuvent faire tourner en rond même les habitants. Les tanneries Chouara, actives depuis le XIe siècle, produisent du cuir selon des méthodes inchangées — cuves de pigments naturels creusées dans la roche.",photo:"photos/medina_de_fes.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Fès el-Bali, fondée en 789 par Idriss Ier, plus grande médina du monde sans véhicule, Université Al Quaraouiyine (859)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre-nord, entre le Moyen Atlas et les collines du Zerhoun"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus ancienne université du monde, médina médiévale de Fès, Maroc"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Médina de Fès au Maroc"}
  ]},
  {name:"Château de Gorée — Sénégal (Fort d'Estrées)",lat:14.6685,lng:-17.3991,desc:"Le Fort d'Estrées sur l'île de Gorée fut construit par les Hollandais en 1659 puis capturé par la France. L'île de Gorée fut pendant trois siècles la principale plaque tournante de la traite négrière vers les Amériques. La Maison des Esclaves, avec sa «porte du voyage sans retour» ouverte sur l'Atlantique, est devenue un mémorial mondial.",photo:"photos/chateau_de_goree.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Fort d'Estrées construit par les Hollandais en 1650, actuellement musée de la Mer, île de Gorée"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île d'une grande baie ouest-africaine, à 3 km du continent"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Fort colonial devenu musée, île de Gorée, Sénégal"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Gorée au Sénégal (Fort d'Estrées)"}
  ]},
  {name:"Serengeti — Tanzanie",lat:-2.3333,lng:34.8333,desc:"La Grande Migration du Serengeti est guidée uniquement par l'instinct collectif et la détection de l'herbe fraîche par les gnous. Aucun animal ne «dirige» le mouvement — c'est un phénomène d'intelligence collective qui déplace 1,5 million d'animaux sur 1 800 km.",photo:"photos/chateau_de_goree.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Siringet (plaine sans fin en Maasaï), 14 763 km², Grande Migration de 2 millions de gnous, zèbres et gazelles"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Nord-ouest du pays, à la frontière du grand parc voisin, Rift Valley"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grande migration annuelle de 2 millions de gnous et zèbres, vaste parc de Tanzanie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Serengeti en Tanzanie"}
  ]},
  {name:"Masai Mara — Kenya",lat:-1.5,lng:35.15,desc:"La traversée de la rivière Mara par les gnous est l'un des spectacles naturels les plus dramatiques du monde. Des centaines d'animaux plongent dans des eaux infestées de crocodiles du Nil — certains crocodiles de la Mara pèsent plus de 700 kg et attendent les migrations depuis des décennies.",photo:"https://upload.wikimedia.org/wikipedia/commons/1/17/Masai_Mara_at_Sunset.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Réserve nationale de 1 510 km², traversée par la Mara River, Grande Migration juillet-octobre, Triangle de Mara"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Comté du sud-ouest du pays, grande migration animale, continuation d'un parc voisin"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Réserve kényane célèbre pour le Big Five et la grande migration, continuation du Serengeti"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Masai Mara au Kenya"}
  ]},
  {name:"Chutes de Kalandula — Angola",lat:-9.0667,lng:15.95,desc:"Les chutes de Kalandula en Angola sont les deuxièmes plus grandes d'Afrique par leur débit. Tombant de 105 mètres sur une largeur de 400 mètres, elles créent une brume permanente qui maintient une végétation tropicale luxuriante dans un rayon d'un kilomètre.",photo:"photos/chutes_de_kalandula.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Duque de Bragança, 105 m de hauteur sur 400 m de large, rivière Lucala, 2e plus grandes chutes d'Afrique"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Plateau de l'intérieur d'un pays d'Afrique centrale-ouest, chutes dans la savane"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Deuxièmes plus grandes chutes d'Afrique, province de Malanje, Angola"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Chutes de Kalandula en Angola"}
  ]},
  {name:"Grand Zimbabwe — Zimbabwe",lat:-20.2667,lng:30.9333,desc:"Le Grand Zimbabwe, dont le nom signifie «maison de pierre» en shona, est le plus grand complexe de ruines d'Afrique subsaharienne hors Égypte. Ses murs de 11 mètres de haut furent construits sans mortier avec une précision stupéfiante. Il donna son nom au pays lors de l'indépendance en 1980.",photo:"photos/grand_zimbabwe.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Capitale d'un empire médiéval d'Afrique australe (XIe-XVe siècles), enceinte elliptique de 244m sans mortier"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province du centre d'un pays d'Afrique australe, ruines d'une cité royale médiévale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ruines de la capitale médiévale du Zimbabwe, plus grand site en pierre d'Afrique subsaharienne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Grand Zimbabwe au Zimbabwe"}
  ]},
  {name:"Vallée des Rois — Louxor, Égypte",lat:25.7402,lng:32.6014,desc:"Toutânkhamon est le seul pharaon de la Vallée des Rois à avoir eu sa tombe retrouvée quasi intacte. Howard Carter l'ouvrit en 1922 après 10 ans de fouilles. La malédiction qui aurait frappé les fouilleurs est aujourd'hui attribuée à des moisissures ou des spores pathogènes conservées dans l'air confiné.",photo:"photos/vallee_des_rois.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Wadi el-Muluk, nécropole royale de la Nouvelle Égypte (1550-1070 av. J.-C.), 63 tombes dont celle de Toutânkhamon (KV62)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rive ouest du Nil, face à Louxor (Thèbes), haute Égypte, collines de Deir el-Bahari"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Nécropole des pharaons, tombes de Toutânkhamon et Ramsès II, Louxor"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Vallée des Rois à Louxor, Égypte"}
  ]},
  {name:"Yellowknife — Territoires du Nord-Ouest, Canada",lat:62.454,lng:-114.3718,desc:"Yellowknife est la meilleure ville au monde pour observer les aurores boréales, avec 240 nuits d'aurores par an. Sa latitude (62°N) la place exactement sous «l'ovale auroral» — la zone maximale d'activité magnétique. Les aurores y sont visibles à l'œil nu dès la tombée de la nuit en automne et hiver.",photo:"photos/yellowknife.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Capitale des Territoires du Nord-Ouest, meilleur endroit au monde pour observer l'aurore boréale, bord du Grand Lac des Esclaves"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bord d'un grand lac arctique, 62° de latitude Nord, région subarctique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Capitale des Territoires du Nord-Ouest, aurores boréales, Grand Nord canadien"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Yellowknife à Territoires du Nord-Ouest, Canada"}
  ]},
  {name:"Quebéc — Canada",lat:46.8139,lng:-71.208,desc:"La ville de Québec est la seule ville fortifiée au nord du Mexique en Amérique du Nord. Ses remparts du XVIIe siècle, longs de 4,6 km, sont encore parfaitement conservés. Le château Frontenac, hôtel le plus photographié au monde selon Guinness, domine le cap Diamant depuis 1893.",photo:"photos/quebec.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Château Frontenac, hôtel inauguré en 1893 par la Compagnie du Chemin de fer du Pacifique Canadien, Haute-Ville de Québec"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Haute-Ville de Québec, cap Diamant, bord du fleuve Saint-Laurent, Province de Québec"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château Frontenac dominant la seule ville fortifiée d'Amérique du Nord, Québec"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La ville de Québec, Canada"}
  ]},
  {name:"Parc Banff — Alberta, Canada",lat:51.4968,lng:-115.9281,desc:"Le parc national de Banff est le plus ancien du Canada, fondé en 1885 après la découverte de sources thermales. Son lac Louise, alimenté par la fonte du glacier Victoria, est d'un turquoise si intense qu'il paraît artificiel. Le Château Lake Louise, construit par les Chemins de fer canadiens en 1890, en fit l'endroit le plus romantique du Canada.",photo:"photos/parc_banff.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Premier parc national de la région (1885), Lac Louise aux eaux turquoise, Champ de glace Columbia, Rocheuses"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rocheuses canadiennes, Alberta, à 130 km à l'ouest de Calgary"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Lac Louise et Rocheuses canadiennes, parc national de Banff, Alberta"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Parc Banff à Alberta, Canada"}
  ]},
  {name:"Monument Valley — Arizona/Utah, USA",lat:36.9991,lng:-110.0985,desc:"Monument Valley est la propriété privée de la Nation Navajo qui en contrôle strictement le tourisme. Les formations rocheuses rouges, appelées «buttes», sont si emblématiques de l'Ouest américain qu'elles ont servi de décor à des dizaines de westerns de John Ford.",photo:"photos/parc_banff.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Navajo Tribal Park, mesas et buttes de grès rouge de la Formation Cutler, The Mittens, John Ford Point"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Frontière Arizona-Utah, Nation Navajo, Colorado Plateau"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Paysage de l'Ouest américain aux mesas rouges, westerns de John Ford"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Monument Valley à Arizona/Utah, USA"}
  ]},
  {name:"Antelope Canyon — Arizona, USA",lat:36.8619,lng:-111.3743,desc:"Antelope Canyon est un «slot canyon» créé par des millénaires d'érosion par les crues soudaines. Des rais de lumière pénètrent par l'ouverture en été et créent des «colonnes de lumière» dans la poussière — parmi les photographies les plus reproduites au monde.",photo:"https://upload.wikimedia.org/wikipedia/commons/b/b5/USA_Antelope-Canyon.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Slot canyon en grès navajo creusé par l'érosion éolienne et les crues éclairs, réservation Navajo, Page, Arizona"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Réservation Navajo, ville de Page, nord de l'Arizona, bord du Lake Powell"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Canyon aux vagues de grès orange, canyon-fente le plus photographié du monde, Arizona"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Antelope Canyon à Arizona, USA"}
  ]},
    {name:"Ligne Nazc? — Pérou",lat:-14.739,lng:-75.13,desc:"Les lignes de Nazca furent créées en ôtant les pierres sombres du désert pour révéler le sable clair en dessous. Elles couvrent 450 km² et représentent 70 animaux et plantes, 300 figures géométriques. Maria Reiche consacra 50 ans de sa vie à les étudier, vivant seule dans le désert pour les protéger.",photo:"photos/ligne_nazc.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Géoglyphes tracés par la culture Nazca entre 500 av. J.-C. et 500 ap. J.-C., colibri (96m), singe (55m), visible uniquement d'avio"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Pampas de Jumana, plaine aride d'un désert côtier andin, géoglyphes de 200-800 m"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Géoglyphes mystérieux tracés dans le désert, UNESCO, Pérou"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Ligne Nazc? au Pérou"}
  ]},
  {name:"Galeries d'art de Buenos Aires — Argentine",lat:-34.6037,lng:-58.3816,desc:"Buenos Aires est la capitale culturelle d'Amérique du Sud, avec plus de librairies par habitant que toute autre ville du monde. Son quartier de San Telmo, avec ses marchés aux puces et ses galeries d'art, est le centre de la scène artistique d'Argentine. La ville abrite aussi le plus grand opéra d'Amérique latine.",photo:"photos/galeries_d_art_de_buenos_aires.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"La Boca, Caminito, ruelles colorées peintes en tôle ondulée, berceau du tango et quartier des immigrés italiens"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier coloré d'une grande capitale sud-américaine, bord d'un canal portuaire"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Caminito, ruelle aux maisons colorées, berceau du tango, Buenos Aires"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Galeries d'art de Buenos Aires en Argentine"}
  ]},
  {name:"Carnaval de Rio — Sambodrome, Brésil",lat:-22.9122,lng:-43.1971,desc:"Le Carnaval de Rio est le plus grand du monde avec 2 millions de personnes par jour dans les rues. Le Sambódromo, conçu par Oscar Niemeyer en 1984, peut accueillir 90 000 spectateurs. Les écoles de samba travaillent toute l'année sur leurs chars et costumes — un budget annuel de plusieurs millions de dollars chacune.",photo:"photos/carnaval_de_barranquilla.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Sambódromo Marquês de Sapucaí, conçu par Oscar Niemeyer (1984), 700m de piste, 90 000 spectateurs, Marquês de Sapucaí"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier central de la Cidade Maravilhosa, avenue célèbre du carnaval"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Sambodrome au défilé des écoles de samba, plus grand carnaval du monde, Rio de Janeiro"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Carnaval de Rio à Sambodrome, Brésil"}
  ]},
  {name:"Lac Titicaca — Bolivie/Pérou",lat:-15.8402,lng:-69.3329,desc:"Le lac Titicaca abrite les îles flottantes des Uros, construites entièrement en roseaux totora sur l'eau. Les habitants renouvellent constamment leur île en ajoutant des couches fraîches par-dessus les couches en décomposition.",photo:"photos/lac_titicaca.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus haut lac navigable du monde (3 812 m), 8 372 km², Île du Soleil (origine inca), îles flottantes des Uros en totora"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Altiplano andin, lac navigable le plus haut du monde, frontière entre deux pays"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus haut lac navigable du monde, Altiplano, frontière Pérou-Bolivie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Lac Titicaca en Bolivie/Pérou"}
  ]},
  {name:"Salar d'Uyuni — Bolivie",lat:-20.1338,lng:-67.4891,desc:"Le salar d'Uyuni contient 70% des réserves mondiales de lithium, la matière première des batteries des voitures électriques. Le Belize entier se couvre d'un miroir parfait de quelques centimètres d'eau après les pluies.",photo:"photos/salar_d_uyuni.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus grand désert de sel du monde (10 582 km²), vestige du lac Minchin desséché, 70% des réserves mondiales de lithium"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Département de Potosí, Altiplano bolivien, à 3 656 m d'altitude"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand désert de sel du monde, reflets célestes, Bolivie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Salar d'Uyuni en Bolivie"}
  ]},
  {name:"Orinoco — Venezuela (Delta)",lat:8.6,lng:-61,desc:"Le delta de l'Orénoque, le troisième plus long fleuve d'Amérique du Sud, est habité par les Warao — «peuple des canoës» — depuis des millénaires. Ses 44 000 km² de forêts inondées abritent dauphins de rivière, loutres géantes et anacondas. De grandes gisements de pétrole ont été découverts sous son lit.",photo:"photos/salar_d_uyuni.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Delta de l'Orénoque, 36 000 km², 40 caños navigables, peuple Warao sur pilotis, État Delta Amacuro"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Delta d'un grand fleuve tropical, golfe des Caraïbes, labyrinthes fluviaux"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Delta de l'Orénoque, jungle et villages sur pilotis, Venezuela"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Orinoco au Venezuela (Delta)"}
  ]},
  {name:"Daintree Rainforest — Queensland, Australie",lat:-16.17,lng:145.418,desc:"La forêt de Daintree est plus ancienne de 10 fois que la forêt amazonienne. Ses espèces végétales primitives — fougères arborescentes, platanes primitifs, Idiospermum — n'ont pas changé depuis l'ère des dinosaures. C'est un musée vivant de l'évolution.",photo:"photos/daintree_rainforest.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus ancienne forêt tropicale du monde (135 Ma), Wet Tropics UNESCO, cassowary et platypus, Cap Tribulation"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Région tropicale au nord d'une grande ville côtière, forêt pluviale primaire"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus ancienne forêt tropicale du monde, Far North Queensland, Australie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Daintree Rainforest à Queensland, Australie"}
  ]},
  {name:"Rotorua — Nouvelle-Zélande",lat:-38.1368,lng:176.2497,desc:"Rotorua sent constamment le soufre — les habitants plaisantent en disant que «ça pue, mais ça enrichit». Les sources géothermiques chauffent naturellement les maisons et alimentent une centrale électrique. La boue bouillonnante atteint parfois 200°C.",photo:"photos/rotorua.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Zone géothermique de Whakarewarewa, geysers Pohutu (30m), piscines de boue bouillonnante, village maori Te Puia"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Région de Bay of Plenty, île du Nord, lac Rotorua, Nouvelle-Zélande"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Geysers et boues bouillonnantes, capitale maorie, Nouvelle-Zélande"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Rotorua en Nouvelle-Zélande"}
  ]},
  {name:"Îles Marquises — Polynésie française",lat:-9,lng:-139.5,desc:"Les îles Marquises sont les îles habitées les plus isolées du monde — à 1 400 km de Tahiti et 4 000 km de la côte américaine la plus proche. Paul Gauguin y mourut en 1903 après y avoir peint ses tableaux les plus célèbres. Jacques Brel y repose également, dans le même cimetière que Gauguin à Hiva Oa.",photo:"photos/iles_marquises.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Archipel volcanique de 12 îles, Nuku Hiva (chantée par Brel), tikis et marae, peuplement originel de la Polynésie"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Polynésie française, Pacifique Sud, à 1 400 km au nord-est de Tahiti"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Archipel volcanique isolé aux tikis de pierre, Polynésie française, îles les plus reculées du monde habité"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Îles Marquises en Polynésie française"}
  ]},
  {name:"Parc national de Fiordland — Nouvelle-Zélande",lat:-45.4142,lng:167.7192,desc:"Le parc national de Fiordland reçoit jusqu'à 9 mètres de pluie par an — l'un des endroits les plus pluvieux du monde. Cette eau crée des centaines de cascades éphémères qui cascadent des parois à pic pendant et après chaque pluie.",photo:"photos/parc_national_de_fiordland.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Te Wahipounamu, 1,26 million d'hectares, Doubtful Sound (340 m de profondeur), sandflies et dauphins"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"District de Southland, extrême sud-ouest de l'île du Sud, Nouvelle-Zélande"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand parc national de Nouvelle-Zélande, fjords et wilderness"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Parc national de Fiordland en Nouvelle-Zélande"}
  ]},
  {name:"Nauru — Micronésie",lat:-0.5228,lng:166.9315,desc:"Nauru fut, dans les années 1980, le pays à revenu par habitant le plus élevé du monde grâce à ses gisements de phosphate. Après l'épuisement des ressources, l'île est aujourd'hui l'un des pays les plus endettés et souffre d'une obésité endémique liée à un régime alimentaire ultra-transformé importé.",photo:"photos/parc_national_de_fiordland.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"3e plus petit État du monde (21 km²), ancienne économie basée sur le phosphate, Buada Lagoon, île corallienne"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île corallienne isolée du Pacifique central, à 4 000 km du continent voisin"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"3e plus petit pays du monde, île phosphatée du Pacifique"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Nauru en Micronésie"}
  ]},
  {name:"Vatnajökull — Islande",lat:64.4173,lng:-16.8007,desc:"Le glacier Vatnajökull cache sous sa glace plusieurs volcans actifs. Lors des éruptions, la chaleur fait fondre d'immenses quantités de glace en quelques heures, créant des jökulhlaups — inondations glaciaires cataclysmiques qui ont façonné le paysage islandais.",photo:"photos/vatnajokull.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus grand glacier d'Europe (7 900 km²), recouvrant le volcan Bárðarbunga, grottes de glace et lac Jökulsárlón"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Sud-est d'une île volcanique subarctique, plus grand glacier d'Europe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand glacier d'Europe, lac aux icebergs, Islande"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Vatnajökull en Islande"}
  ]},
  {name:"Colonne de Trajan — Rome, Italie",lat:41.8957,lng:12.4842,desc:"La colonne de Trajan, inaugurée en 113 ap. J.-C., est ornée d'une frise en spirale de 190 mètres de long représentant les deux guerres daciques en 2 500 figures. C'est l'un des premiers «bandes dessinées» de l'Histoire. Elle fut coiffée d'une statue de Trajan, remplacée par celle de Saint-Pierre par le pape Sixte V en 1588.",photo:"photos/colonne_de_trajan.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Columna Traiani, fût de marbre de 38m inauguré en 113 ap. J.-C. relatant les guerres daciques, forum de Trajan"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Forum de Trajan (Foro Traiano), entre le Capitole et le Quirinal"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Colonne triomphale romaine, 2 662 figures sculptées en spirale, Rome"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Colonne de Trajan à Rome, Italie"}
  ]},
  {name:"Fontaine de Trevi — Rome, Italie",lat:41.9009,lng:12.4833,desc:"La fontaine de Trevi, achevée en 1762 par Salvi, collecte chaque année plus de 1,5 million d'euros de pièces lancées par les touristes. Cet argent est reversé à Caritas Roma pour aider les pauvres. La tradition de lancer une pièce dans le dos pour revenir à Rome fut popularisée par le film «Vacances romaines» (1953) avec Audrey Hepburn.",photo:"photos/fontaine_de_trevi.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Fontana di Trevi, terminée en 1762 par Nicola Salvi, 26m de hauteur, point d'arrivée de l'Aqua Virgo antique"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Piazza di Trevi, quartier Trevi, rione II, au carrefour de trois rues"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande fontaine baroque de Rome, tradition de la pièce jetée"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Fontaine de Trevi à Rome, Italie"}
  ]},
  {name:"Panthéon — Rome, Italie",lat:41.8986,lng:12.4769,desc:"Le Panthéon de Rome, construit en 125 ap. J.-C. par Hadrien, possède un dôme de 43,3 mètres de diamètre — resté le plus grand dôme non armé du monde pendant 1 300 ans. Son oculus de 9 mètres au sommet est la seule source de lumière. Par jour de pluie, l'eau tombe directement sur le sol en marbre, évacuée par un drainage souterrain romain.",photo:"photos/pantheon.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Temple de tous les dieux, reconstruit par Hadrien entre 118 et 125, oculus de 8,7m, dôme en béton le mieux conservé de l'Antiquité"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Piazza della Rotonda, rione Pigna, centre historique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Temple romain le mieux conservé, dôme à oculus, Rome"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Panthéon à Rome, Italie"}
  ]},
  {name:"Piazza San Marco — Venise, Italie",lat:45.4341,lng:12.3388,desc:"La place Saint-Marc de Venise est la seule place de la ville que Napoléon appela «le plus beau salon de l'Europe». Ses 200 millions de visiteurs par an l'inondent régulièrement — la place est submergée lors des marées hautes (acqua alta). Son campanile, effondré en 1902, fut reconstruit identique et réouvert le 25 avril 1912, jour anniversaire de sa chute.",photo:"photos/piazza_san_marco.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Unique place d'une cité insulaire nommée campo, basilique dorée du XIe siècle, campanile de 99m, acqua alta"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Sestiere de San Marco, bord de la lagune vénitienne, extrémité est du Grand Canal"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Place Saint-Marc, cœur de Venise, basilique byzantine et campanile"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Piazza San Marco à Venise, Italie"}
  ]},
  {name:"Pompéi — Campanie, Italie",lat:40.7502,lng:14.4869,desc:"Pompéi a été préservée à l'état de coquille par les cendres du Vésuve — certains habitants furent surpris en plein repas, leurs squelettes retrouvés avec encore de la nourriture devant eux. Moins d'un tiers du site a été fouillé à ce jour.",photo:"photos/pompei.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ville romaine ensevelie sous 6m de cendres le 24 août 79 ap. J.-C. lors de l'éruption du Vésuve, 66 hectares excavés"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune de Pompéi, golfe de Naples, province de Naples, Campanie, au pied du Vésuve"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité romaine figée par le Vésuve en 79 ap. J.-C., Campanie, Italie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Pompéi à Campanie, Italie"}
  ]},
  {name:"Dôme de Florence — Italie",lat:43.7731,lng:11.256,desc:"Pascal fit monter du mercure au sommet du Puy de Dôme en 1648 pour prouver que la pression atmosphérique diminuait avec l'altitude — une expérience fondatrice de la physique moderne. Il ne fit pas l'ascension lui-même, mais demanda à son beau-frère.",photo:"photos/dome_de_florence.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cattedrale di Santa Maria del Fiore, coupole de Brunelleschi (1436), 114,5m de hauteur, première grande coupole de la Renaissance"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Piazza del Duomo, centre de Florence, Toscane, bord de l'Arno"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Dôme de Brunelleschi, symbole de la Renaissance florentine, Toscane"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Dôme de Florence en Italie"}
  ]},
  {name:"Galerie des Offices — Florence, Italie",lat:43.7677,lng:11.2553,desc:"La Galerie des Offices de Florence abrite la plus grande collection de peintures de la Renaissance italienne : La Naissance de Vénus et Le Printemps de Botticelli, L'Annonciation de Léonard de Vinci. Vasari la conçut en 1560 pour les Médicis. La Vasari Corridor, galerie secrète suspendue au-dessus de l'Arno, relie les Offices au Palazzo Pitti.",photo:"photos/dome_de_florence.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Galleria degli Uffizi, palais conçu par Vasari en 1560, abritant La Naissance de Vénus et Le Printemps de Botticelli"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Piazzale degli Uffizi, bord de l'Arno, Oltrarno, Florence, Toscane"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand musée d'art de la Renaissance italienne, Florence"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Galerie des Offices à Florence, Italie"}
  ]},
  {name:"Parc national des Cinque Terre — Italie",lat:44.1461,lng:9.6439,desc:"Les terrasses viticoles des Cinque Terre furent construites à la main sans machines sur des falaises verticales. Des siècles de travail ont créé plus de 100 km de murs de pierres sèches — plus que la Grande Muraille de Chine à l'échelle du territoire.",photo:"photos/parc_national_des_cinque_terre.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cinq villages (Monterosso, Vernazza, Corniglia, Manarola, Riomaggiore) accrochés aux falaises de Ligurie, classés UNESCO"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Côte de Ligurie, province de La Spezia, mer de Ligurie, côte nord-ouest"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cinq villages colorés sur des falaises ligures, Cinque Terre, Italie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Parc national des Cinque Terre en Italie"}
  ]},
    {name:"Parc de Blenheim — Oxfordshire, Royaume-Uni",lat:51.8414,lng:-1.3617,desc:"Le palais de Blenheim est le seul palais non royal d'Angleterre — offert par la nation au duc de Marlborough après sa victoire à Blenheim en 1704. Winston Churchill y naquit en 1874. Son parc, dessiné par Capability Brown, est considéré comme le chef-d'œuvre du paysagisme anglais naturel.",photo:"photos/parc_de_blenheim.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Blenheim Palace, construit de 1705 à 1722 pour John Churchill, 1er duc de Marlborough, lieu de naissance de Winston Churchill"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Village de Woodstock, Oxfordshire, à 13 km au nord d'Oxford"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Palais baroque de Blenheim, lieu de naissance de Churchill, Oxfordshire"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Parc de Blenheim à Oxfordshire, Royaume-Uni"}
  ]},
  {name:"Tower Bridge — Londres, Royaume-Uni",lat:51.5055,lng:-0.0754,desc:"Le Tower Bridge peut s'ouvrir en 5 minutes pour laisser passer les grands navires — ce qui se produit encore environ 800 fois par an. Ses deux tours de style médiéval cachent une structure en acier de 11 000 tonnes. Inauguré en 1894, il fut initialement peint en chocolat et crème — sa couleur bleu-gris actuelle date de 1977.",photo:"photos/parc_de_blenheim.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Pont basculant de 244m de long inauguré en 1894, deux tours néo-gothiques de 65m, câbles de 38,7m de portée"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Tamise, entre la Tour médiévale (rive nord) et Bermondsey (rive sud)"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Pont symbole de Londres, double tour basculant sur la Tamise"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Tower Bridge à Londres, Royaume-Uni"}
  ]},
  {name:"Cathédrale de Canterbury — Royaume-Uni",lat:51.2798,lng:1.0829,desc:"La cathédrale de Canterbury est le siège de l'archevêque de Canterbury, chef spirituel de l'Église anglicane mondiale. Thomas Becket y fut assassiné en 1170 sur ordre d'Henri II. Son martyrologe en fit l'un des pèlerinages les plus importants d'Europe médiévale — immortalisé par les Contes de Canterbury de Chaucer.",photo:"photos/cathedrale_de_brasilia.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Siège de l'archevêque primat, meurtre de Thomas Becket en 1170, pèlerinage des Canterbury Tales, pèlerinage de Chaucer"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre de Canterbury, comté du Kent, sud-est du pays, à 90 km de la capitale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Siège de l'Église anglicane mondiale, lieu du martyre de Thomas Becket, Kent, Angleterre"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Cathédrale de Canterbury, Angleterre (Royaume-Uni)"}
  ]},
    {name:"Parc Güell — Barcelone, Espagne",lat:41.4145,lng:2.1527,desc:"Le parc Güell fut conçu par Gaudí entre 1900 et 1914 comme cité-jardin privée pour 60 familles — seules 2 maisons furent construites, dont celle de Gaudí. Financé par Eusebi Güell qui voulait une cité idéale, le projet commercial fut un échec total mais donna naissance à l'un des parcs les plus visités du monde.",photo:"https://upload.wikimedia.org/wikipedia/commons/b/b8/Barcelone_-_Parc_G%C3%BCell_-_Entr%C3%A9e.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Parc conçu par Antoni Gaudí de 1900 à 1914, mosaïques de trencadís, viaduc de la Bugade, résidence Gaudí"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Colline du Carmel, quartier de Gràcia, nord de la ville, vue panoramique sur la mer"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Parc de mosaïques colorées de Gaudí, terrasse avec banc sinueux, Barcelone"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Parc Güell à Barcelone, Espagne"}
  ]},
  {name:"Santiago de Compostela — Espagne",lat:42.8805,lng:-8.5456,desc:"La cathédrale de Santiago de Compostela est le point d'arrivée du Chemin de Compostelle. Son encensoir géant, le «Botafumeiro», pèse 80 kg et oscille à 68 km/h au bout d'une corde de 65 mètres lors des grandes messes. Son rôle original était d'assainir l'air saturé par les milliers de pèlerins malodorants.",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Flag_of_Santiago_de_Compostela.svg/langfr-330px-Flag_of_Santiago_de_Compostela.svg.png",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cathédrale de Saint-Jacques, tombeau supposé de l'apôtre Jacques, terminus du Camino, portico de la Gloria, botafumeiro (encensoir"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Praza do Obradoiro, vieille ville de Saint-Jacques-de-Compostelle, Galice, nord-ouest de la péninsule ibérique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cathédrale terminus du pèlerinage de Saint-Jacques, Galice, Espagne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Santiago de Compostela en Espagne"}
  ]},
  {name:"Parc national de Doñana — Espagne",lat:36.996,lng:-6.342,desc:"Doñana est la plus grande réserve naturelle d'Europe occidentale et le principal refuge du lynx ibérique — l'un des félins les plus menacés du monde avec 400 individus. Les flamants roses, aigrettes et pygargues y nichent par milliers. Ses dunes mobiles avancent de 5 à 6 mètres par an, englobant progressivement la forêt de pins.",photo:"photos/parc_national_de_fiordland.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"543 km² de zones humides, dunes, marais et maquis, refuge du lynx ibérique et de l'aigle impérial, embouchure du Guadalquivir"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province de Huelva et Séville, Andalousie, embouchure du Guadalquivir, golfe de Cadix"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande réserve naturelle d'Europe occidentale, lynx ibérique, Espagne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Parc national de Doñana en Espagne"}
  ]},
  {name:"Acueducto de Segovia — Espagne",lat:40.9483,lng:-4.1179,desc:"L'aqueduc de Ségovie, construit sans ciment entre 50 et 100 ap. J.-C., repose sur 166 arches doubles de 9 mètres de large — 30 000 blocs de granite posés par friction et gravité. Il alimenta la ville en eau depuis la Sierra de Guadarrama jusqu'en 1973. Ses pierres portent les marques des légions romaines qui le construisirent.",photo:"https://upload.wikimedia.org/wikipedia/commons/f/f4/Aqueduct_of_Segovia_08.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Aqueduc romain du Ier siècle, 728m de long, 166 arches de granit assemblées sans mortier, 28m de hauteur maximale"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Plaza del Azoguejo, entrée de la vieille ville de Ségovie, Castille-et-León"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Aqueduc romain parfaitement conservé, emblème de Ségovie, Castille"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Acueducto de Segovia en Espagne"}
  ]},
  {name:"Évora — Portugal",lat:38.5744,lng:-7.908,desc:"Évora, vieille ville romaine d'Alentejo, abrite un temple de Diane du Ier siècle parfaitement conservé et une Capela dos Ossos (chapelle des crânes) tapissée des ossements de 5 000 moines — son inscription dit : «Nós ossos que aqui estamos pelos vossos esperamos» (Nous, les os ici, attendons les vôtres).",photo:"https://upload.wikimedia.org/wikipedia/commons/0/00/Pt-evr1.png",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Temple romain de Diana (Ier siècle), Capela dos Ossos (5 000 crânes), classée 'musée à ciel ouvert' de l'Alentejo"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Chef-lieu du district d'Évora, Alentejo, centre-sud, à 135 km de Lisbonne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ville-musée de l'Alentejo, temple romain et chapelle des ossements, Portugal"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Évora au Portugal"}
  ]},
  {name:"Palais de Sintra — Portugal",lat:38.7876,lng:-9.3906,desc:"Le palais national de Sintra est le seul palais médiéval du Portugal conservé en état. Ses deux cheminées coniques jumelles de 33 mètres sont visibles depuis la mer. Lord Byron visita Sintra en 1809 et la décrivit comme «l'Éden» dans son poème Childe Harold.",photo:"photos/palais_de_sintra.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Palácio da Pena, construit de 1842 à 1854 par Ferdinand II en style romantique, cheminées de faïence, forêt de nuages"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Sommet de la Serra de Sintra (529m), commune de Sintra, région de Lisbonne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Palais coloré de Pena sur les hauteurs de Sintra, romantisme portugais"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais de Sintra au Portugal"}
  ]},
  {name:"Grand-Place — Bruxelles, Belgique",lat:50.8467,lng:4.3525,desc:"La Grand-Place de Bruxelles fut décrite par Victor Hugo comme «le théâtre le plus beau du monde». Sa Maison du Roi et ses guildes de corporations dorées datent du XVe siècle. Chaque été impair, elle est recouverte d'un tapis de 700 000 fleurs fraîches disposées en motifs géométriques par des fleuristes belges et hollandais.",photo:"photos/palais_de_sintra.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Grote Markt, classée UNESCO en 1998, maisons de guildes dorées des XVIIe-XVIIIe siècles, Hôtel de Ville gothique de 1402"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Pentagone (centre historique), 1ère commune de Bruxelles"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus belle place du monde selon Victor Hugo, Bruxelles"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Grand-Place à Bruxelles, Belgique"}
  ]},
  {name:"Cathédrale Notre-Dame d'Anvers — Belgique",lat:51.221,lng:4.4002,desc:"La cathédrale Notre-Dame d'Anvers est la plus grande cathédrale gothique de Belgique avec sa flèche de 123 mètres. Elle abrite quatre tableaux de Rubens dont La Descente de Croix — considérés comme ses chefs-d'œuvre absolus. Rubens vécut et mourut à Anvers, sa maison-musée est à quelques centaines de mètres.",photo:"photos/cathedrale_notre_dame_d_anvers.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Onze-Lieve-Vrouwekathedraal, flèche de 123m, construction de 1352 à 1521, abritant 4 triptyques de Rubens"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Groenplaats, centre historique d'Anvers, province d'Anvers"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cathédrale gothique aux triptyques de Rubens, Anvers, Belgique"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Cathédrale Notre-Dame d'Anvers, Belgique"}
  ]},
  {name:"Château de Vianden — Luxembourg",lat:49.9358,lng:6.2017,desc:"Le château de Vianden est l'un des plus grands châteaux romans-gothiques d'Europe occidentale. Victor Hugo y séjourna plusieurs fois en exil et y écrivit certaines pages des Misérables. Sa silhouette au-dessus de la vallée de l'Our est le symbole touristique du Luxembourg.",photo:"photos/chateau_de_vianden.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Château médiéval des Xe-XIVe siècles, résidence des comtes de Vianden puis des Nassau, dominant l'Our"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Ville du nord d'un petit pays européen enclavé, château médiéval au-dessus de l'Our"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus beau château du Luxembourg, dominant la vallée de l'Our"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Vianden au Luxembourg"}
  ]},
  {name:"Moulin de Kinderdijk — Pays-Bas",lat:51.8833,lng:4.6333,desc:"Kinderdijk abrite le plus grand ensemble de moulins à vent anciens des Pays-Bas avec 19 moulins du XVIIIe siècle. Ils pompaient l'eau de la région d'Alblasserwaard, en dessous du niveau de la mer, vers les rivières et la mer. Ce système hydraulique ingénieux évita l'inondation de terres cultivées pendant des siècles.",photo:"photos/moulin_de_kinderdijk.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"19 moulins à vent construits vers 1740 dans le Alblasserwaard pour pomper l'eau, classés UNESCO en 1997"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Polder d'Alblasserwaard, commune de Molenlanden, Hollande-Méridionale, à 15 km de Rotterdam"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"19 moulins à vent sur un polder, symbole des Pays-Bas, UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Moulins de Kinderdijk aux Pays-Bas"}
  ]},
  {name:"Keukenhof — Lisse, Pays-Bas",lat:52.2697,lng:4.5469,desc:"Keukenhof, le plus grand jardin de fleurs du monde avec 7 millions de bulbes plantés chaque automne sur 32 hectares, n'ouvre que 8 semaines par an au printemps. Chaque année, son thème change et ses 900 variétés de tulipes créent un tapis multicolore visible depuis les airs. Il reçoit 1,5 million de visiteurs en deux mois.",photo:"photos/keukenhof.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"32 hectares de bulbes à fleurs, 7 millions de tulipes, jacinthes et narcisses, ouvert 8 semaines/an au printemps"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune de Lisse, province de Hollande-Méridionale, entre deux grandes villes"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand parc floral du monde, 7 millions de bulbes par saison, Hollande-Méridionale"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Keukenhof à Lisse, Pays-Bas"}
  ]},
  {name:"Château de Hohensalzburg — Autriche",lat:47.7954,lng:13.0472,desc:"La forteresse de Hohensalzburg, dominant Salzbourg depuis 1077, est l'un des châteaux médiévaux les mieux conservés d'Europe. Elle ne fut jamais prise par un ennemi en 900 ans. Un funiculaire la relie à la ville depuis 1892 — l'un des plus anciens d'Autriche encore en service.",photo:"photos/chateau_de_hohensalzburg.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Festung Hohensalzburg, forteresse médiévale la mieux conservée d'Europe centrale, construite en 1077 par l'archevêque Gebhard"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Festungsberg, dominant le Vieux-Salzach et la vieille ville de Salzbourg"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Forteresse médiévale dominant Salzbourg, ville de Mozart, Autriche"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Hohensalzburg en Autriche"}
  ]},
  {name:"Palais de Schönbrunn — Vienne, Autriche",lat:48.1845,lng:16.3122,desc:"Le palais de Schönbrunn comptait 1 441 pièces dont seulement 40 sont ouvertes au public. Mozart joua ici à l'âge de 6 ans devant l'impératrice Marie-Thérèse qui, dit-on, le prit sur ses genoux après sa performance.",photo:"photos/palais_de_schonbrunn.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"1 441 pièces, résidence d'été des Habsbourg, Grand Parterre et Gloriette de 1775, Mozart y joua à 6 ans en 1762"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Hietzing (13e arrondissement), banlieue ouest de Vienne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Palais baroque des Habsbourg, Versailles autrichien, Vienne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais de Schönbrunn à Vienne, Autriche"}
  ]},
  {name:"Hofburg — Vienne, Autriche",lat:48.2066,lng:16.3656,desc:"Le Hofburg, résidence des Habsbourg pendant 600 ans, est un labyrinthe de 2 600 pièces construit du XIIIe au XXe siècle. Il abrite les joyaux de la couronne des Habsbourg, les Lipizzans de l'École espagnole d'équitation et les appartements de Sissi. Aujourd'hui siège de la présidence autrichienne, il reste ouvert aux visites.",photo:"photos/hofburg.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Palais impérial des Habsbourg depuis 1279, 18 ailes, 19 cours, 2 600 pièces, Spanische Hofreitschule, Sisi Museum"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"1er arrondissement (Innere Stadt), centre de Vienne, bord du Ring"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Palais impérial habsbourgeois au cœur de Vienne, Autriche"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Hofburg à Vienne, Autriche"}
  ]},
  {name:"Lac de Hallstatt — Autriche",lat:47.5622,lng:13.6493,desc:"Le cimetière de Hallstatt est si petit que les os exhumés après 10-12 ans sont décorés de motifs et placés dans une chapelle à crânes — la Beinhaus. Cette tradition unique perpétue la mémoire des défunts dans une ville où les morts dépassent les vivants.",photo:"photos/lac_de_hallstatt.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Village de 780 habitants sur une falaise au bord du Hallstättersee, mine de sel la plus ancienne du monde (-5000 av. J.-C.)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Lac de Salzkammergut, entre deux grandes villes alpines, village aux maisons sur l'eau"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Village alpin sur le lac, mine de sel millénaire, Salzkammergut, Autriche"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Lac de Hallstatt en Autriche"}
  ]},
    {name:"Mines de sel de Wieliczka — Pologne",lat:49.9833,lng:20.0553,desc:"Les ouvriers des mines de sel de Wieliczka utilisaient les 300 km de galeries pour se repérer en sculptant des chapelles, des statues et même une reconstitution de la Cène dans le sel. La chapelle Sainte-Kinga, entièrement taillée dans le sel, mesure 54 m de long pour 12 m de hauteur.",photo:"photos/mines_de_sel_de_wieliczka.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Wieliczka Salt Mine, exploitée depuis le XIIIe siècle, 287km de galeries, chapelle Sainte-Kinga taillée dans le sel à 101m de prof"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Ville à 14 km d'une cité royale, mines de sel millénaires, cathédrale souterraine"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Mine de sel millénaire avec chapelle sculptée, Wieliczka, Pologne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Mines de sel de Wieliczka, Pologne"}
  ]},
  {name:"Château de Malbork — Pologne",lat:54.0395,lng:19.0289,desc:"Le château de Malbork, construit en briques rouges sur une île de la rivière Nogat, est la plus grande forteresse médiévale du monde. Les Chevaliers Teutoniques l'érigèrent avec 4 millions de briques fabriquées dans des fours locaux.",photo:"photos/chateau_de_malbork.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ordensburg Marienburg, plus grande forteresse médiévale du monde en brique (210 000 m²), siège de l'Ordre Teutonique 1309-1457"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bord de la Nogat, Poméranie, nord d'un pays d'Europe centrale, plus grand château de briques du monde"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande forteresse de brique du monde, Malbork, nord de la Pologne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Malbork en Pologne"}
  ]},
  {name:"Chantier naval de Gda?sk — Pologne",lat:54.3609,lng:18.6509,desc:"Le chantier naval Lénine de Gda?sk fut le berceau de Solidarno?? (Solidarité), le syndicat fondé par Lech Wa??sa en 1980. Cette révolution ouvrière non-violente contribua à la chute du communisme en Europe de l'Est. Les 21 revendications des ouvriers, affichées sur une porte du chantier, sont classées au registre de la Mémoire du Monde de l'UNESCO.",photo:"photos/chantier_naval_de_gda_sk.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Stocznia Gda?ska, berceau de Solidarno?? (Solidarité), grèves de 1980, Lech Wa??sa, centre européen de la solidarité"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier de Wrzeszcz, bord de la Mot?awa, Gda?sk, Poméranie, mer Baltique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Chantier naval berceau de Solidarno??, Gda?sk, Pologne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Chantier naval de Gda?sk en Pologne"}
  ]},
  {name:"Forteresse de Narva — Estonie",lat:59.3773,lng:28.1728,desc:"La forteresse de Narva fait face au château d'Ivangorod russe à seulement 150 mètres — deux forteresses médiévales de pays différents se regardant à travers la rivière Narva, frontière entre l'Union européenne et la Russie. La ville de Narva fut détruite à 98% pendant la Seconde Guerre mondiale et entièrement reconstruite.",photo:"photos/forteresse_de_narva.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Hermanni linnus, forteresse médiévale face à une forteresse rivale, séparées par une rivière frontière"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bord de la Narva, est d'un pays balte, deux forteresses face à face de part et d'autre de la frontière"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Forteresse médiévale à la frontière Estonie-Russie, face à Ivangorod"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Forteresse de Narva en Estonie"}
  ]},
  {name:"Colline de Gediminas — Vilnius, Lituanie",lat:54.6868,lng:25.2922,desc:"La colline de Gediminas, à 48 mètres au-dessus de la vieille ville, abrite la tour gothique du Grand-Duc Gediminas (XIVe siècle), symbole de la Lituanie. C'est de cette colline que Gediminas rêva d'un loup d'acier hurlant — un oracle lui ordonnant de fonder une ville à cet endroit, qui deviendrait Vilnius.",photo:"photos/colline_de_gediminas.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Tour Gediminien du XIVe siècle, résidu du château supérieur de Vilnius, fondé par Gediminas vers 1322, confluence Neris-Vilnia"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Colline de Gediminas, dominant la vieille ville baroque, capitale d'un pays balte"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tour médiévale emblème de Vilnius, capitale de la Lituanie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Colline de Gediminas à Vilnius, Lituanie"}
  ]},
  {name:"Château de Sigulda — Lettonie",lat:57.1539,lng:24.8555,desc:"Le château de Sigulda fut fondé par les Frères Porte-Glaive en 1207. La région de Sigulda, surnommée «la Suisse de la Lettonie», abrite la seule piste de bobsleigh naturelle des pays baltes, construite pour les Jeux olympiques de 1994 jamais organisés en Lettonie.",photo:"photos/chateau_de_sigulda.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Château de l'Ordre de Livonie (1207), vallée de la Gauja, forêt automnale rousse, piste de bobsleigh olympique"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Vallée de la Gauja, Vidzeme, à 50 km de la capitale d'un pays balte, paysages de collines boisées"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château médiéval dans la Suisse livonienne, Sigulda, Lettonie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Sigulda en Lettonie"}
  ]},
  {name:"Maison de la Blackhead — Tallinn, Estonie",lat:59.437,lng:24.746,desc:"La Maison des Têtes-Noires de Tallinn était le siège de la confrérie des marchands célibataires hanseatiques. Son portail Renaissance de 1597 est l'un des plus beaux de la Baltique. La confrérie dut dissoudre en 1940 lors de l'occupation soviétique, mais renaquit en 1995 et occupe de nouveau la maison.",photo:"photos/maison_de_la_blackhead.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Maison de la Confrérie des Têtes-Noires (marchands célibataires), façade Renaissance de 1597, Raekoja plats, Tallinn"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Vieille ville médiévale d'une capitale baltique, Pikk tänav (Grande rue)"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Édifice Renaissance de la vieille ville de Tallinn, Estonie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Maison de la Blackhead à Tallinn, Estonie"}
  ]},
  {name:"Château de Predjama — Slovénie",lat:45.8167,lng:14.1228,desc:"Le château de Predjama est le plus grand château rupestre du monde, encastré dans une falaise de 123 mètres. Au XVe siècle, le chevalier Erazem Lueger y résista pendant un an à un siège. Il fut finalement trahi par un serviteur qui signala à l'ennemi le moment où Erazem utilisait les latrines.",photo:"photos/chateau_de_predjama.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Forteresse Renaissance intégrée dans la paroi d'une falaise de 123m, résidence d'Erasmus de Lueg au XVe siècle"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Village de Carniole intérieure d'un pays alpin, château suspendu dans une falaise"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château dans la falaise le plus grand au monde, Slovénie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Predjama, Slovénie"}
  ]},
  {name:"Lac de Bled — Slovénie",lat:46.3683,lng:14.0933,desc:"Le lac de Bled est la seule île naturelle de Slovénie. La tradition veut que les mariés rament jusqu'à l'île, que l'époux porte sa femme sur les 99 marches menant à l'église et sonne la cloche aux vœux pour un mariage heureux.",photo:"photos/lac_de_bled.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Lac glaciaire aux eaux émeraude, île au cœur du lac avec l'église Marie-Mère de Dieu (1465), château du XIe siècle"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Au pied des Alpes juliennes, nord-ouest d'un pays alpin, île et château dans un lac glaciaire"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Lac émeraude avec île et château, joyau des Alpes slovènes"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Lac de Bled en Slovénie"}
  ]},
  {name:"Plitvice — Croatie",lat:44.8654,lng:15.582,desc:"Les 16 lacs de Plitvice sont reliés par 92 cascades et changent perpétuellement de taille et de position. De nouveaux barrages naturels en travertin se forment sous l'action des algues, mouvant les cascades de quelques centimètres chaque année — le paysage est en transformation constante.",photo:"photos/plitvice.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"16 lacs en cascade reliés par 92 chutes d'eau, couleur bleue-verte due aux minéraux, barrages de travertin naturel"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Comté d'un pays adriatique, à 130 km de la capitale, cascades turquoise en étagères"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Seize lacs en cascade reliés par 92 chutes d'eau turquoise, parc national de Croatie centrale"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Plitvice en Croatie"}
  ]},
  {name:"Cathédrale de Sagrada Família nuit — Barcelone",lat:41.4037,lng:2.1741,desc:"Gaudí consacra les 43 dernières années de sa vie à cette cathédrale. Renversé par un tramway en 1926, il fut enterré dans sa propre église. La construction, financée uniquement par les entrées des visiteurs, devrait s'achever en 2026.",photo:"photos/cathedrale_de_sagrada_familia_nuit.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Illumination nocturne des façades de la Nativité et de la Passion, 18 clochers prévus, vitraux colorant la nef le matin"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Carrer de Provença, Eixample esquerre"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Sagrada Família de nuit, Barcelone, Espagne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Sagrada Família de nuit, à Barcelone, Espagne"}
  ]},
  {name:"Tour de Belfort — France",lat:47.6405,lng:6.8626,desc:"La tour de Belfort servit de prison d'État sous l'Ancien Régime. C'est à son pied que se dresse le Lion de Belfort sculpté par Bartholdi — le même artiste qui créa la Statue de la Liberté. Ce lion de grès rose de 11 mètres symbolise la résistance de la ville lors du siège de 1870.",photo:"photos/tour_de_belfort.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Citadelle de Vauban dominant la Trouée de Belfort, lion de Bartholdi (1880, 11m), résistance de Denfert-Rochereau en 1870-71"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Colline du château, centre de Belfort, Territoire de Belfort, entre Alsace et Franche-Comté"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Citadelle de Vauban et lion de Bartholdi, Belfort, est de la France"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Tour de Belfort en France"}
  ]},
    {name:"Cirque de Gavarnie — Hautes-Pyrénées, France",lat:42.7274,lng:-0.0167,desc:"La grande cascade de Gavarnie, avec ses 422 mètres, est la plus haute de France. Le cirque fut décrit par Victor Hugo comme «le plus grand édifice que le Dieu ait fait» lors de son passage en 1843.",photo:"photos/cirque_de_gavarnie.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Amphithéâtre naturel de 14 km de circonférence, Grande Cascade (423m), brèche de Roland (100m), Hautes-Pyrénées"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune de Gavarnie, canton d'Argelès-Gazost, Hautes-Pyrénées, frontière espagnole"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cirque glaciaire aux parois de 1 500m, Pyrénées, UNESCO, France"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Cirque de Gavarnie à Hautes-Pyrénées, France"}
  ]},
  {name:"Aiguille du Midi — Chamonix, France",lat:45.879,lng:6.8873,desc:"L'Aiguille du Midi est accessible depuis Chamonix par le téléphérique le plus haut d'Europe, s'élevant de 1 035 m à 3 842 m en 20 minutes. Son «Pas dans le vide», une cabine de verre suspendue à 3 842 mètres, permet de marcher littéralement dans le ciel au-dessus du vide.",photo:"photos/aiguille_du_midi.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Sommet de 3 842m, téléphérique depuis Chamonix en deux étapes (1955), vue sur Mont Blanc (4 808m), passerelle dans le vide"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Massif du Mont-Blanc, commune de Chamonix, Haute-Savoie, plus haut sommet d'Europe occidentale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Sommet alpin de 3 842 m accessible en téléphérique, vue sur le plus haut sommet d'Europe, Haute-Savoie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Aiguille du Midi à Chamonix, France"}
  ]},
  {name:"Gorges du Verdon — France",lat:43.721,lng:6.344,desc:"Le Verdon doit ses eaux d'un turquoise irréel aux particules de calcaire en suspension qui réfractent la lumière bleue. La gorge, jusqu'à 700 mètres de profondeur, ne fut explorée pour la première fois qu'en 1905 par le géographe Édouard-Alfred Martel.",photo:"photos/aiguille_du_midi.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Canyon de 25 km de long et jusqu'à 700m de profondeur creusé par le Verdon, lac de Sainte-Croix (9,5 km²)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Var et Alpes-de-Haute-Provence, Provence, entre Moustiers et Castellane"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grand Canyon français, 700 m de profondeur, lac turquoise, Provence"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Gorges du Verdon en France"}
  ]},
    {name:"Château de Carcassonne — France",lat:43.2076,lng:2.3644,desc:"La double enceinte de Carcassonne inspira le jeu de société éponyme, vendu à 70 millions d'exemplaires dans le monde. Dans ce jeu, les joueurs construisent villes et routes en posant des tuiles — une mécanique née de la contemplation des remparts médiévaux.",photo:"photos/chateau_de_carcassonne.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cité médiévale fortifiée, 3 km de remparts, 52 tours, restaurée par Viollet-le-Duc entre 1853 et 1879, bord de l'Aude"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune de Carcassonne, Aude, Occitanie, bord de l'Aude et du Canal du Midi"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité médiévale fortifiée de Carcassonne, Occitanie, France"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Carcassonne en France"}
  ]},
  {name:"Palais des Papes — Avignon, France",lat:43.9493,lng:4.8059,desc:"Le Palais des Papes d'Avignon est la plus grande construction gothique médiévale du monde avec ses 15 000 m² habitables. La papauté s'y installa de 1309 à 1377, fuyant les troubles de Rome. À son apogée, la cour d'Avignon était plus riche et plus influente que celle de Paris.",photo:"photos/palais_des_papes.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Palais pontifical construit de 1335 à 1364, siège de 7 papes d'Avignon (1309-1377), plus grand palais gothique médiéval"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Place du Palais, Avignon, Vaucluse, Provence, bord du Rhône"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand palais gothique médiéval au monde, siège de la papauté au XIVe siècle, Provence"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais des Papes à Avignon, France"}
  ]},
  {name:"Château de Fontainebleau — France",lat:48.4023,lng:2.7014,desc:"Château de Fontainebleau est un lieu historique remarquable situé en Europe.",photo:"photos/chateau_de_blarney.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Résidence de chasse des rois depuis le XIIe siècle, Galerie François Ier, 1 900 pièces, forêt de 17 000 ha"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Forêt royale de Seine-et-Marne, à 55 km au sud-est de la capitale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château royal Renaissance de Fontainebleau, forêt giboyeuse, France"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Fontainebleau en France"}
  ]},
  {name:"Falaises d'Étretat — Normandie, France",lat:49.7071,lng:0.2047,desc:"Les falaises d'Étretat, sculptées dans la craie blanche par la mer, furent immortalisées par Monet (qui y peignit 20 tableaux), par Maupassant (né à 10 km) et par Arsène Lupin dans les romans de Maurice Leblanc. La «Chambre des Demoiselles», grotte marine accessible à marée basse, inspira le roman Aiguille Creuse.",photo:"photos/falaises_d_etretat.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Falaises d'albâtre percées de trois arches naturelles (Aval, Amont, Manneporte), peintes par Monet, Guy de Maupassant"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune d'Étretat, Seine-Maritime, Pays de Caux, Normandie, Manche"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Falaises d'albâtre d'Étretat aux arches naturelles, Normandie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Falaises d'Étretat à Normandie, France"}
  ]},
  {name:"Calanques de Marseille — France",lat:43.2151,lng:5.4317,desc:"Les calanques de Marseille sont creusées dans du calcaire vieux de 45 millions d'années. Leurs eaux turquoise doivent leur couleur à leur pureté exceptionnelle et à leur faible profondeur qui réfléchit le fond rocheux blanc. La baignade y est restreinte en été pour protéger l'écosystème.",photo:"photos/calanques_de_marseille.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Parc national des Calanques, 20km de côtes calcaires entre Marseille et Cassis, Calanque d'En-Vau et de Port-Miou"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Massif de Marseilleveyre, entre Marseille et Cassis, Bouches-du-Rhône, Méditerranée"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Calanques aux eaux turquoise, parc national entre Marseille et Cassis"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Calanques de Marseille en France"}
  ]},
  {name:"Giverny — Normandie, France",lat:49.0766,lng:1.534,desc:"Le jardin de Giverny fut créé de toutes pièces par Claude Monet qui y vécut de 1883 à 1926. Son bassin de nymphéas aux ponts japonais inspira sa série «Les Nymphéas» en 250 tableaux — son œuvre majeure. Monet fit creuser l'étang, dériver une rivière et planter les espèces exactes qu'il souhaitait peindre.",photo:"photos/giverny.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Maison et jardin de Claude Monet (1883-1926), pont japonais sur l'étang aux nymphéas, source des Nymphéas à l'Orangerie"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune de Giverny, Eure, Normandie, confluence Seine-Epte"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Jardin de Claude Monet avec son célèbre étang aux nymphéas, Eure, Normandie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Giverny à Normandie, France"}
  ]},
  {name:"Palais Royal de Bangkok — Thaïlande",lat:13.75,lng:100.4913,desc:"Le Grand Palais de Bangkok fut construit en 1782 à la fondation de la nouvelle capitale. Ses toits en tuiles vernissées multicolores et ses nombreuses flèches dorées en font l'un des ensembles architecturaux les plus spectaculaires d'Asie du Sud-Est.",photo:"photos/palais_royal_de_bangkok.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Grand Palais, Wat Phra Kaew (Temple du Bouddha d'Émeraude), résidence royale depuis 1782, Rattanakosin Island"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île de Rattanakosin, bord du Chao Phraya, district Phra Nakhon, Bangkok"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grand Palais et Temple du Bouddha d'Émeraude, Bangkok, Thaïlande"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais Royal de Bangkok en Thaïlande"}
  ]},
  {name:"Temple de Wat Pho — Bangkok, Thaïlande",lat:13.7466,lng:100.493,desc:"La dent du Bouddha de Kandy fut cachée dans les cheveux d'une princesse pour être sortie clandestinement d'Inde. La relique est si sacrée que seuls les plus hauts dignitaires religieux et politiques peuvent l'approcher — elle est enveloppée dans 7 coffrets imbriqués.",photo:"photos/temple_de_wat_pho.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Wat Phra Chetuphon, fondé au XVIe siècle, Bouddha couché de 46m recouvert de feuilles d'or, école de massage thaï"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île royale d'une grande capitale d'Asie du Sud-Est, adjacent au Grand Palais"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Temple du Bouddha couché, plus grand de Bangkok, Thaïlande"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Temple de Wat Pho à Bangkok, Thaïlande"}
  ]},
  {name:"Temple de Doi Suthep — Chiang Mai, Thaïlande",lat:18.8048,lng:98.9219,desc:"La dent du Bouddha de Kandy fut cachée dans les cheveux d'une princesse pour être sortie clandestinement d'Inde. La relique est si sacrée que seuls les plus hauts dignitaires religieux et politiques peuvent l'approcher — elle est enveloppée dans 7 coffrets imbriqués.",photo:"photos/temple_de_doi_suthep.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Wat Phra That Doi Suthep, fondé en 1383, stupa doré à 1 073m d'altitude, 309 marches, relique du Bouddha"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Mont dominant une grande ville du nord, parc national d'un pays d'Asie du Sud-Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Temple doré perché à 1 073m, vue sur Chiang Mai, Thaïlande du Nord"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Temple de Doi Suthep à Chiang Mai, Thaïlande"}
  ]},
  {name:"Parc national de Khao Yai — Thaïlande",lat:14.4418,lng:101.3794,desc:"Khao Yai est le premier parc national de Thaïlande, fondé en 1962. Ses forêts tropicales couvrent 2 168 km² et abritent éléphants sauvages, gaurs, gibbons à mains noires et hornbills. On y trouve aussi les orchidées sauvages les plus riches d'Asie du Sud-Est. Il est classé au patrimoine mondial UNESCO depuis 2005.",photo:"photos/parc_national_de_khao_yai.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Premier parc national du pays (1962), 2 168 km², éléphants, gaurs, gibbons à favoris blancs, chutes de Haew Narok"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Carrefour de quatre provinces du centre du pays, premier parc national de la région"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Parc national aux éléphants et gibbons, Thaïlande, UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Parc national de Khao Yai en Thaïlande"}
  ]},
  {name:"Harrods — Londres, Royaume-Uni",lat:51.4994,lng:-0.1632,desc:"Harrods, fondé en 1849 par Charles Henry Harrod, est le grand magasin le plus célèbre du monde avec ses 330 rayons sur 7 étages. Son célèbre Hall alimentaire décoré de carrelages victoriens vend les produits les plus luxueux du monde. La boutique de jouets présente chaque Noël un éléphant vivant — une tradition du XIXe siècle.",photo:"photos/harrods.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Grand magasin fondé par Charles Henry Harrod en 1849, 7 étages et 330 rayons, motto 'Omnia Omnibus Ubique', Knightsbridge"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"87-135 Brompton Road, Knightsbridge, Royal Borough of Kensington and Chelsea"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Célèbre grand magasin de luxe à 7 étages, Knightsbridge, Londres"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Harrods à Londres, Royaume-Uni"}
  ]},
  {name:"Musée national du Palais — Taipei, Taïwan",lat:25.1024,lng:121.5486,desc:"Le Musée national du Palais de Taipei abrite la plus grande collection d'art chinois classique au monde — 700 000 pièces, dont la plupart furent emportées de Pékin par le gouvernement nationaliste en 1949 lors de leur retrait à Taïwan. Il faudrait 30 ans pour tout voir si on passait 3 minutes devant chaque pièce.",photo:"photos/musee_national_du_palais.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"696 000 artefacts impériaux chinois dont le Jadeite Cabbage (1 cm²) et le Meat-shaped Stone, exfiltrés de la Cité Interdite en 194"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"District nord d'une grande capitale insulaire, musée abritant les trésors impériaux"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande collection d'art chinois impérial au monde, Taipei, Taïwan"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Musée national du Palais à Taipei, Taïwan"}
  ]},
  {name:"Taipei 101 — Taïwan",lat:25.0338,lng:121.5645,desc:"Taipei 101 possède le plus grand amortisseur de masse au monde — une sphère d'acier de 660 tonnes suspendue au 92e étage. Visible depuis un pont d'observation, elle se balance de 1,5 mètre pour absorber les vibrations des typhons et des séismes.",photo:"photos/musee_national_du_palais.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"508m de hauteur, inauguré en 2004, amortisseur à pendule de 660 tonnes (TMD), plus haute structure du monde 2004-2010"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"District financier d'une grande capitale insulaire, gratte-ciel le plus haut d'Asie de l'Est pendant 6 ans"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tour de 508m, symbole de Taipei, plus haute d'Asie à sa construction"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Taipei 101 à Taipei, Taïwan"}
  ]},
  {name:"Gyeongbokgung — Séoul, Corée du Sud",lat:37.5796,lng:126.977,desc:"La relève de la garde au palais Gyeongbokgung se déroule dans des costumes Joseon du XIVe siècle. Les soldats — recrutés par concours parmi les touristes volontaires — passent une journée entière en tenue d'époque. Ce rituel, reconstitué après l'indépendance, est l'un des plus photographiés de Séoul.",photo:"photos/gyeongbokgung.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Palais de la Prospérité Brillante, construit en 1395 par la dynastie Joseon, 7 700 salles, Gwanghwamun Gate"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Jongno-gu, cœur historique d'une grande capitale asiatique, au pied d'une montagne boisée"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Principal palais royal de Séoul, changement de garde, Corée du Sud"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Gyeongbokgung à Séoul, Corée du Sud"}
  ]},
  {name:"Tour N Seoul — Corée du Sud",lat:37.5512,lng:126.9882,desc:"La tour N Seoul, à 480 mètres d'altitude sur le mont Namsan, offre une vue à 360° sur la capitale coréenne. Elle est couverte de millions de cadenas posés par des amoureux — une tradition si massive que les garde-fous ont dû être renforcés pour supporter le poids.",photo:"photos/tour_n_seoul.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Namsan Seoul Tower, 236m sur le mont Namsan (262m), point le plus visible de Séoul, cadenas d'amour sur la rambarde"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Mont Namsan, district central d'une grande métropole asiatique, tour de télécommunications panoramique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tour emblématique de Séoul, cadenas d'amour, mont Namsan"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Tour N Seoul, Corée du Sud"}
  ]},
  {name:"DMZ — Panmunjom, Corée",lat:37.9533,lng:126.6786,desc:"La Zone démilitarisée coréenne est paradoxalement l'une des zones naturelles les plus préservées d'Asie, car aucune activité humaine n'y est permise depuis 1953. Grues du Japon en voie d'extinction, tigres de Sibérie et ours noirs d'Asie y vivent sans perturbation humaine depuis 70 ans.",photo:"photos/dmz.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Zone Démilitarisée, ligne d'armistice de 1953, Maison de la Paix (Panmun-gak), négociations entre deux États divisés"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Joint Security Area (JSA), à 60 km au nord de Séoul, frontière des deux Corées, 38e parallèle"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Zone démilitarisée entre les deux Corées, Panmunjom"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le DMZ à Panmunjom, Corée"}
  ]},
  {name:"Château de Matsumoto — Japon",lat:36.2383,lng:137.972,desc:"Le château de Matsumoto est l'un des rares châteaux japonais originaux du XVIe siècle encore debout — la plupart furent reconstruits en béton après la guerre. Ses murs noirs lui valent le surnom de «château corbeau». Ses escaliers intérieurs sont si raides qu'ils atteignent 61° d'inclinaison.",photo:"photos/chateau_de_matsumoto.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Matsumoto-jo, château aux murs noirs (Karasu-jo, le Château-Corbeau), construit entre 1592 et 1614, donjon d'origine intacte"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre de Matsumoto, préfecture de Nagano, région de Chubu, Honsh?"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château noir Matsumoto, un des plus beaux donjons originaux du Japon"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Matsumoto au Japon"}
  ]},
  {name:"Sanctuaire Fushimi Inari — Kyoto, Japon",lat:34.9671,lng:135.7727,desc:"Le sanctuaire Fushimi Inari possède 10 000 torii vermillon offerts par des entreprises et des particuliers pour s'attirer les faveurs d'Inari, dieu du renard et de la prospérité. Ces portiques forment des tunnels de 4 km à flanc de montagne. Les renards en pierre qui gardent le sanctuaire portent dans la gueule une clé, une gerbe ou un joyau.",photo:"photos/sanctuaire_fushimi_inari.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"10 000 torii vermillons sur 4 km formant des tunnels jusqu'au mont Inari (233m), dédié à Inari, divinité du riz et des affaires"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Fushimi-ku, sud de Kyoto, bord du mont Inari"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tunnels de 10 000 torii vermillon sur 4 km, sanctuaire shinto dédié à la déesse du riz, Kyoto"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Sanctuaire Fushimi Inari à Kyoto, Japon"}
  ]},
  {name:"Château d'Osaka — Japon",lat:34.6873,lng:135.5262,desc:"Le château d'Osaka fut construit par Toyotomi Hideyoshi en 1583 sur les vestiges d'un temple bouddhiste. Après deux incendies et reconstructions, la tour actuelle date de 1931. Ses cerisiers du Nishinomaru Garden attirent des centaines de milliers de visiteurs chaque printemps pour les hanami.",photo:"photos/chateau_d_osaka.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Osaka-jo, construit par Toyotomi Hideyoshi en 1583, reconstruit en 1931, donjon de 5 étages entouré de douves, fleurs de cerisier"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Parc Osaka-jo, quartier Chuo, Osaka, Kinki, Honsh?"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château emblématique d'Osaka, donjon doré, Japon"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château d'Osaka au Japon"}
  ]},
  {name:"Himeji-jo — Japon",lat:34.8394,lng:134.6939,desc:"Le château de Himeji, surnommé «le Héron Blanc» pour sa couleur immaculée, est le mieux conservé des châteaux médiévaux japonais. Sa structure labyrinthique, conçue pour dérouter les envahisseurs, comprend des couloirs cul-de-sac, des embrasures et des pierres disjointes intentionnelles pour perturber l'ennemi.",photo:"photos/himeji_jo.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Heron Castle (Shirasagi-jo), château blanc à 6 étages construit entre 1601 et 1609, 83 bâtiments, préfecture de Hyogo"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre d'Himeji, préfecture de Hyogo, région du Kansai, Honsh?"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château Héron blanc, mieux conservé du Japon, Himeji, Kansai"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Himeji-jo au Japon"}
  ]},
  {name:"Lac de Kawaguchi — Japon",lat:35.5112,lng:138.7556,desc:"Le lac Kawaguchi est l'un des cinq lacs de Fuji, formés par les éruptions volcaniques. Par temps clair, la réflexion parfaite du mont Fuji dans ses eaux crée l'une des images les plus emblématiques du Japon. La cerisaie sur ses rives attire chaque printemps des millions de photographes du monde entier.",photo:"photos/lac_de_kawaguchi.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Kawaguchiko, un des Cinq Lacs de Fuji, meilleur reflet du Fuji, vue depuis la pagode Chureito avec fleurs de cerisier"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Prefecture de Yamanashi, district de Minamitsuru, aux pieds du mont Fuji"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Lac Kawaguchi, reflet du Mont Fuji, pagode Chureito, Yamanashi"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Lac de Kawaguchi au Japon"}
  ]},
  {name:"Shanghai — Chine (Bund)",lat:31.2397,lng:121.4898,desc:"Le Bund de Shanghai est un boulevard de 1,5 km bordé de 52 bâtiments Art Déco et néoclassiques construits dans les années 1930 par les concessions étrangères. Face à lui, de l'autre côté de la rivière Huangpu, se dressent les gratte-ciels ultramodernes de Pudong — un dialogue saisissant entre deux Shanghais.",photo:"photos/shanghai.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Le Bund (??), 1,5 km de bâtiments néoclassiques et Art Déco des années 1920-30, face au Pudong et la Tour de Perle d'Orient"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bord du Huangpu, arrondissement de Huangpu, Shanghai orientale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Promenade coloniale des années 1920-30 face aux gratte-ciels ultramodernes, plus grande ville de Chine"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Bund de Shanghai, Chine"}
  ]},
  {name:"Tour de Perle d'Orient — Shanghai, Chine",lat:31.2397,lng:121.4998,desc:"La Tour de la Perle d'Orient fut le gratte-ciel emblématique de Shanghai de 1994 à 2007. Ses deux sphères roses suspendues à 90 et 350 mètres symbolisent des perles émergeant du fleuve Huangpu. Sa plateforme d'observation à 350 mètres offre une vue sur l'une des lignes d'horizon les plus denses du monde.",photo:"photos/tour_de_perle_d_orient.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Oriental Pearl Tower, 468m inaugurée en 1994, deux sphères roses de 50m et 45m, Lujiazui, Pudong, Shanghai"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Lujiazui Finance and Trade Zone, Pudong, bord du Huangpu, Shanghai"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tour de télévision emblématique de Shanghai, symbole du Pudong"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Tour de Perle d'Orient à Shanghai, Chine"}
  ]},
  {name:"Guilin — Guangxi, Chine",lat:24.876,lng:110.32,desc:"Les pitons karstiques de Guilin furent formés par la dissolution du calcaire sur 300 millions d'années. Ils inspirèrent des générations de peintres chinois et figurent sur le billet de 20 yuans. Les pêcheurs cormorans sur la rivière Li, qui enseignent à leurs oiseaux à attraper les poissons sans les avaler, perpétuent une tradition de 1 000 ans.",photo:"photos/guilin.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Karst de la rivière Li, pitons calcaires de 20 Ma, Xingping et Yangshuo, pêcheurs au cormoran, imprimé sur billet de 20 yuan"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Guangxi Zhuang, rivière Li entre Guilin et Yangshuo"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Paysage de pitons karstiques sur une rivière, imprimé sur le billet de 20 yuans, Guangxi, Chine"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Guilin à Guangxi, Chine"}
  ]},
  {name:"Mausole de l'Armée de Terre Cuite — Xi'an, Chine",lat:34.3847,lng:109.2737,desc:"L'Armée de terre cuite de Xi'an compte 8 000 soldats, 130 chars et 670 chevaux enterrés pour protéger l'empereur Qin Shi Huang dans l'au-delà. Chaque soldat a un visage unique. Le tombeau central de l'empereur n'a pas encore été ouvert — la Chine attend d'avoir les technologies pour le préserver sans l'endommager.",photo:"photos/mausole_de_l_armee_de_terre_cuite.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"8 000 soldats et chevaux en terre cuite grandeur nature, mausolée de Qin Shi Huang (-210), découverts en 1974 par des paysans"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Lintong, à 35 km à l'est de Xi'an, Shaanxi centrale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Armée de terre cuite de Qin Shi Huang, Xi'an, Chine"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Mausole de l'Armée de Terre Cuite à Xi'an, Chine"}
  ]},
  {name:"Kowloon — Hong Kong",lat:22.3193,lng:114.1694,desc:"L'ancienne Cité fortifiée de Kowloon, démolie en 1994, était la zone la plus densément peuplée de l'histoire humaine avec 35 000 habitants sur 0,03 km². Ses 300 immeubles imbriqués formaient un labyrinthe quasi-anarchique de 14 étages sans lumière naturelle. Un parc fut construit à son emplacement.",photo:"photos/mausole_de_l_armee_de_terre_cuite.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Victoria Harbour depuis Tsim Sha Tsui, promenade Avenue of Stars, skyline de 8 000 gratte-ciels, show laser Symphony of Lights"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Péninsule urbaine d'une ancienne colonie britannique, skyline de gratte-ciel face à une île"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Vue sur le Victoria Harbour, skyline spectaculaire de Hong Kong"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Kowloon à Hong Kong"}
  ]},
  {name:"Colline de Batu — Kuala Lumpur, Malaisie",lat:3.2379,lng:101.684,desc:"Les grottes de Batu sont un sanctuaire hindou creusé dans un massif calcaire vieux de 400 millions d'années. Un escalier de 272 marches mène à la grotte principale ornée d'une statue de Murugan dorée de 42,7 mètres. Chaque année, pendant le festival de Thaipusam, des centaines de milliers de pèlerins gravissent les marches avec des kavadis transpercés dans la peau.",photo:"photos/colline_de_batu.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Grottes de calcaire de Batu Caves, statue de Murugan de 42,7m (dorée 2006), 272 marches arc-en-ciel, sanctuaire tamoul"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Banlieue nord d'une grande capitale de la péninsule malaise, temple dans une grotte calcaire"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grottes sacrées et statue géante de Murugan, Kuala Lumpur, Malaisie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Colline de Batu à Kuala Lumpur, Malaisie"}
  ]},
  {name:"Tours Petronas — Kuala Lumpur, Malaisie",lat:3.1579,lng:101.7119,desc:"Les tours Petronas furent les plus hautes du monde de 1998 à 2004. Conçues par César Pelli, leur plan au sol dessine deux étoiles à 8 branches entrelacées — un symbole islamique. Le skybridge du 41e étage ne repose pas sur les tours elles-mêmes mais sur ses propres fondations, pouvant glisser de 30 cm lors des balancements.",photo:"photos/colline_de_batu.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Petronas Twin Towers, 452m (88 étages), conçues par César Pelli, inaugurées en 1998, Skybridge au 41e étage, motif islamique"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"KLCC, quartier central des affaires d'une métropole tropicale, jumelles en acier et verre"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tours jumelles Petronas, plus hautes du monde 1998-2004, Kuala Lumpur"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Tours Petronas à Kuala Lumpur, Malaisie"}
  ]},
  {name:"Mékong — Laos (Luang Prabang)",lat:19.8929,lng:102.1348,desc:"Luang Prabang, ville de 700 moines, est classée UNESCO pour sa préservation exceptionnelle. Chaque aube, des centaines de moines saffran descendent les rues en silence pour recevoir les offrandes des fidèles — le «tak bat». Cette tradition millénaire se déroule à 5h30 chaque matin, quelle que soit la saison.",photo:"https://upload.wikimedia.org/wikipedia/commons/9/9f/Mekong-River-Near-Luang-Prabang.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Luang Prabang, confluence Nam Khan et Mékong, 33 temples bouddhistes, aumône matinale (tak bat), classé UNESCO"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province du nord d'un pays enclavé d'Asie du Sud-Est, bord du Mékong, ville-temple"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ancienne capitale royale bouddhiste au confluent de deux fleuves, nord du Laos, UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Mékong au Laos (Luang Prabang)"}
  ]},
  {name:"Katmandou — Népal (Bodnath)",lat:27.7215,lng:85.362,desc:"Le stupa de Boudhanath est le plus grand d'Asie du Sud et le cœur spirituel de la communauté tibétaine en exil au Népal. Ses 13 anneaux dorés symbolisent les étapes vers l'éveil bouddhiste. Entouré de 50 monastères tibétains, il reste l'un des sites de pèlerinage les plus actifs du bouddhisme vajrayana.",photo:"photos/katmandou.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Boudhanath Stupa, stupa bouddhiste tibétain de 36m, 5e siècle, yeux du Bouddha, plus grand d'Asie du Sud, pèlerinage tibétain"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Boudha, à 11 km du centre d'une capitale himalayenne, plus grande stupa du sous-continent"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand stupa d'Asie du Sud, centre de la communauté tibétaine en exil, capitale himalayenne du Népal"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Katmandou au Népal (Bodnath)"}
  ]},
  {name:"Everest Base Camp — Népal",lat:28.0025,lng:86.8528,desc:"Des milliers de tonnes de déchets ont été abandonnées sur les flancs de l'Everest par les expéditions depuis 1953. Le Népal oblige désormais chaque alpiniste à redescendre au moins 8 kg de déchets — en plus de leur équipement.",photo:"photos/everest_base_camp.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Camp de base sud à 5 364m, glacier de Khumbu, trekking de 12 jours depuis Lukla, 8 849m pour le sommet (Chomolungma)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Région de Khumbu, haute Himalaya, camp de base au pied du plus haut sommet du monde"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Camp de base de l'Everest, plus haute montagne du monde, Himalaya népalais"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Everest Base Camp au Népal"}
  ]},
    {name:"Jaipur — Inde (Hawa Mahal)",lat:26.9239,lng:75.8267,desc:"Le Hawa Mahal, «palais des vents», fut construit en 1799 avec 953 petites fenêtres ornées de moucharabiés permettant aux femmes de la cour d'observer la vie de la rue sans être vues. Sa façade de 5 étages en grès rose ressemble à une ruche — une architecture unique au monde sans cour intérieure.",photo:"photos/jaipur.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Palais des Vents (Hawa Mahal), 953 petites fenêtres en nid d'abeille, 5 étages, construit en 1799 par Sawai Pratap Singh"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Badi Chaupar, vieille ville de Jaipur (Ville Rose), Rajasthan du Nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Palais aux 953 fenêtres en nid d'abeille, Ville Rose du Rajasthan"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Jaipur en Inde (Hawa Mahal)"}
  ]},
  {name:"Kerala — Backwaters, Inde",lat:9.1673,lng:76.46,desc:"Les backwaters du Kerala forment un réseau de 900 km de lagunes, lacs et canaux parallèles à la côte de la mer d'Arabie. Ces voies navigables, bordées de cocotiers et de rizières, sont sillonnées par des houseboats (kettuvallam) — d'anciens bateaux de riz convertis en hôtels flottants.",photo:"photos/kerala.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"900 km de lagunes, canaux et lacs entre une mer et les terres intérieures, houseboats kettuvallam, Alleppey (Alappuzha)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"District d'Alappuzha (Alleppey), Kerala, côte de Malabar, sud-ouest"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Réseau de lagunes et canaux longés par des houseboats, côte de Malabar, sud-ouest de l'Inde"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Backwaters du Kerala, Inde"}
  ]},
  {name:"Hampi — Karnataka, Inde",lat:15.335,lng:76.46,desc:"Le marché central de Hampi, une rue à colonnes de 800 mètres de long, était jadis bordé de boutiques vendant des soieries, des épices et des pierres précieuses. Les femmes de haut rang portaient des joyaux si lourds qu'elles devaient être soutenues par des servantes pour marcher.",photo:"photos/kerala.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Vijayanagara, capitale de l'Empire Vijayanagara (1336-1646), 500 monuments sur 26 km², temple Virupaksha du VIIe siècle"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"District de Ballari, Karnataka, bord de la rivière Tungabhadra du Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ancienne capitale de l'Empire Vijayanagara, 500 monuments dans un paysage de rochers, Karnataka"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Hampi à Karnataka, Inde"}
  ]},
  {name:"Ayutthaya — Thaïlande",lat:14.3692,lng:100.5567,desc:"Ayutthaya fut détruite par les Birmans en 1767 après un siège de 14 mois. La ville, qui comptait un million d'habitants, fut réduite en cendres en une semaine. Les têtes de Bouddha enchâssées dans les racines d'un figuier de banian sont le symbole le plus photographié de la Thaïlande.",photo:"https://upload.wikimedia.org/wikipedia/commons/a/a2/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%A3%E0%B8%A3%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%8D%E0%B9%8C348.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ancienne capitale du Royaume de Siam (1350-1767), tête de Bouddha enchâssée dans les racines de Bodhi, détruite par les Birmans"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île fluviale au confluent de trois rivières, ancienne capitale d'un royaume asiatique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ruines bouddhistes d'une ancienne capitale siamoise détruite par les Birmans en 1767, Thaïlande centrale"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Ayutthaya en Thaïlande"}
  ]},
  {name:"Carthage — Tunisie",lat:36.8525,lng:10.3233,desc:"Carthage fut la rivale de Rome pendant deux siècles. Après sa destruction finale en 146 av. J.-C., Rome aurait semé du sel sur ses ruines pour les rendre stériles — cette histoire est probablement un mythe du XIXe siècle, mais le symbole perdure.",photo:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Vue_Carthage_Byrsa.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Qart Hadasht, fondée par les Phéniciens vers -814, rivale, détruite en 146 av. J.-C., thermes d'Antonin au bord de mer"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Banlieue nord de la capitale, golfe méditerranéen, site archéologique antique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ruines de la cité punique rivale de Rome, bord du golfe de Tunis, Tunisie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Carthage en Tunisie"}
  ]},
  {name:"Amphithéâtre d'El Djem — Tunisie",lat:35.2958,lng:10.7053,desc:"L'amphithéâtre d'El Djem est le troisième plus grand amphithéâtre romain du monde, après le Colisée et celui de Capoue. Construit au IIIe siècle ap. J.-C. en Afrique romaine, il pouvait accueillir 35 000 spectateurs. Il servit de forteresse au VIIe siècle lors de la résistance berbère à la conquête arabe.",photo:"https://upload.wikimedia.org/wikipedia/commons/3/36/Anfiteatro%2C_El_Jem%2C_T%C3%BAnez%2C_2016-09-04%2C_DD_55-66_HDR_PAN.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Thysdrus, colisée romain de 30 000 places construit vers 238 ap. J.-C., 3e plus grand du monde antique, mieux conservé d'Afrique"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Gouvernorat central du pays, à 195 km au sud de la capitale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Amphithéâtre romain d'El Djem, plus impressionnant d'Afrique, Tunisie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Amphithéâtre d'El Djem en Tunisie"}
  ]},
  {name:"Djemaa el-Fna — Marrakech, Maroc",lat:31.626,lng:-7.989,desc:"La place Djemaa el-Fna de Marrakech est classée par l'UNESCO comme patrimoine immatériel de l'humanité — une première pour un espace public. Elle se transforme chaque soir en gigantesque restaurant en plein air avec des dizaines de stands de cuisine.",photo:"https://upload.wikimedia.org/wikipedia/commons/7/79/Djemaa_el_Fna.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Place de l'Assemblée des morts, mosaïque orale reconnue par l'UNESCO (2001), charmeurs de serpents, conteurs, henné"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Médina de Marrakech, place centrale, entre la Koutoubia et les souks"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grande place animée de Marrakech, marchands et conteurs, Maroc"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Djemaa el-Fna à Marrakech, Maroc"}
  ]},
  {name:"Kasbah d'Aït Benhaddou — Maroc",lat:31.0472,lng:-7.1267,desc:"Aït Benhaddou servit de décor à plus de 20 films et séries, dont Gladiator, Game of Thrones et Lawrence d'Arabie. Seules cinq familles habitent encore dans l'enceinte du ksar, le reste de la population ayant migré vers le village moderne.",photo:"https://upload.wikimedia.org/wikipedia/commons/d/d2/Alger_algiers_casbah_1900.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ksar (village fortifié) en pisé rouge, étape caravanière sur la route des épices, décor de Gladiator et Game of Thrones"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province de Ouarzazate, vallée de l'Ounila, versant sud du Haut Atlas"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Kasbah en pisé décor de films, Aït Benhaddou, vallée du Draa, Maroc"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Kasbah d'Aït Benhaddou au Maroc"}
  ]},
  {name:"Rivière Okavango — Botswana",lat:-19.2833,lng:22.9167,desc:"Le delta de l'Okavango est une anomalie géographique unique : c'est l'une des seules rivières au monde qui ne se jette pas dans la mer mais meurt dans le désert du Kalahari. Chaque année, ses crues créent une oasis éphémère de 15 000 km² qui attire une faune extraordinaire avant de s'évaporer progressivement.",photo:"photos/riviere_okavango.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Delta intérieur de l'Okavango, 15 000 km², fleuve se perdant dans le Kalahari, elephants et hippos, Moremi Game Reserve"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Nord-ouest d'un pays enclavé d'Afrique australe, delta intérieur sans débouché sur la mer"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Delta de l'Okavango, oasis faunique dans le désert du Kalahari, Botswana"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Rivière Okavango au Botswana"}
  ]},
  {name:"Chutes de Tisisat — Éthiopie",lat:11.5097,lng:37.587,desc:"Les chutes de Tisisat sur le Nil Bleu signifient «fumée qui fait feu» en amharique. Elles se trouvent à la sortie du lac Tana, source du Nil Bleu qui apporte 85% des eaux du Nil. En saison des pluies, leur débit peut atteindre 400 mètres de largeur — un spectacle comparable aux Victoria Falls.",photo:"photos/chutes_de_tisisat.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Blue Nile Falls (Tis Abay), chutes du Nil Bleu à sa sortie du lac Tana, 400m de large et 45m de chute, réduites par barrage"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rivière du Nil Bleu, à 30 km d'une ville lacustre, région d'Amhara, Afrique de l'Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Chutes du Nil Bleu, puissantes cascades d'Éthiopie, Bahir Dar"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Chutes de Tisisat en Éthiopie"}
  ]},
  {name:"Zanzibar — Tanzanie",lat:-6.1622,lng:39.1875,desc:"Zanzibar est le lieu de naissance de Freddie Mercury, le chanteur de Queen. Sa maison natale dans Stone Town est devenue un lieu de pèlerinage pour les fans du monde entier. Il quitta l'île à 7 ans pour ne plus jamais y revenir.",photo:"photos/zanzibar.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Stone Town (Mji Mkongwe), vieille ville swahili à l'architecture arabe, lieu de naissance de Freddie Mercury, commerce d'esclaves"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Stone Town, grande île de l'archipel, océan Indien occidental"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Vieille cité swahili classée UNESCO, île aux épices de l'océan Indien, Tanzanie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Zanzibar en Tanzanie"}
  ]},
  {name:"Chutes de Murchison — Ouganda",lat:2.2783,lng:31.6819,desc:"Les chutes de Murchison sont les plus puissantes au monde en termes de débit par unité de surface. Le fleuve Victoria Nil y est forcé de passer à travers une fissure de seulement 7 mètres de large — générant une pression hydraulique extraordinaire qui projette l'eau à des dizaines de mètres.",photo:"photos/chutes_de_murchison.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus puissantes chutes du monde, Nil Victoria forcé dans une gorge de 7m de large, Parc national de Murchison Falls"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Parc national du nord du pays, chutes du plus long fleuve d'Afrique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Chutes du Nil les plus puissantes au monde, Ouganda"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Chutes de Murchison en Ouganda"}
  ]},
    {name:"Chutes de Ruacana — Namibie/Angola",lat:-17.4004,lng:14.2159,desc:"Les chutes de Ruacana sur la rivière Kunene, à la frontière Angola-Namibie, sont parmi les plus larges d'Afrique avec 700 mètres de largeur. En saison des pluies, leur débit est si puissant que les habitants des villages voisins peuvent l'entendre à plusieurs kilomètres. Une centrale hydroélectrique y fut construite dans les années 1970.",photo:"photos/chutes_de_ruacana.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Chutes d'un fleuve frontière entre deux pays d'Afrique australe, 120m de hauteur et 700m de large"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"District aride du nord-ouest, Kaokoland, frontière fluviale entre deux pays"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Chutes du Kunene à la frontière Namibie-Angola, Kaokoland"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Chutes de Ruacana en Namibie/Angola"}
  ]},
  {name:"Washington D.C. — USA (Capitole)",lat:38.8899,lng:-77.009,desc:"Le Capitole des États-Unis, achevé en 1800, est surmonté d'une coupole en fonte qui pèse 3 800 tonnes. Sa construction continua pendant la Guerre de Sécession — Abraham Lincoln y insista, affirmant que l'achèvement du dôme symboliserait la survie de l'Union. La Rotonde abrite 8 peintures de la taille d'une maison.",photo:"photos/washington_d_c.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"United States Capitol, siège du Congrès, coupole de 88m inaugurée en 1800, architecte William Thornton puis Latrobe"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Capitol Hill, à l'est du National Mall, Washington D.C."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Siège du Congrès américain, coupole de 88 m, colline dominant la capitale américaine"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Washington D.C. en USA (Capitole)"}
  ]},
    {name:"Golden Gate — San Francisco, USA",lat:37.8199,lng:-122.4783,desc:"Les ingénieurs du Golden Gate conçurent les premiers équipements de sécurité modernes pour travailler en hauteur : casques, lunettes de sécurité, crèmes solaires. Un filet de sécurité sous le pont sauva 19 vies — les survivants formèrent le «Halfway to Hell Club».",photo:"photos/golden_gate.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Pont suspendu de 1 280m de travée centrale inauguré en 1937, pylônes de 227m, brouillard de la baie de San Francisco"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Détroit du Golden Gate, entre San Francisco et Marin County, baie de San Francisco, Californie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Pont suspendu rouge emblème de San Francisco, Californie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Golden Gate à San Francisco, USA"}
  ]},
  {name:"Alcatraz — San Francisco, USA",lat:37.8267,lng:-122.4233,desc:"Al Capone, l'un des prisonniers les plus célèbres d'Alcatraz, y jouait dans un groupe de jazz appelé «The Rock Islanders». L'île fut choisie car ses courants et ses eaux froides rendaient toute tentative d'évasion à la nage quasi suicidaire.",photo:"photos/alcatraz.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Île-prison fédérale de 1934 à 1963, prisonniers célèbres Al Capone et Machine Gun Kelly, baie de San Francisco"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île d'Alcatraz, baie de San Francisco, comté de San Francisco, Californie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Île-prison fédérale dans une baie californienne, fermée en 1963, accueillait Al Capone"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Alcatraz à San Francisco, USA"}
  ]},
  {name:"Monument aux pères fondateurs — Dakota du Sud, USA",lat:43.8791,lng:-103.4591,desc:"Mount Rushmore fut sculpté par Gutzon Borglum et 400 ouvriers de 1927 à 1941 à la dynamite et au burin. Derrière la tête de Lincoln, une salle secrète fut creusée pour abriter les archives les plus importantes de l'histoire américaine — elle attend encore sa porte étanche finale. Le projet original prévoyait les présidents jusqu'à la taille.",photo:"photos/monument_aux_peres_fondateurs.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Mount Rushmore, 4 visages de 18m taillés dans le granite (Washington, Jefferson, T. Roosevelt, Lincoln) par Gutzon Borglum 1927-19"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Keystone, comté de Pennington, Dakota du Sud, Black Hills"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Mont Rushmore, 4 présidents américains sculptés dans la roche, Dakota du Sud"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Monument aux pères fondateurs à Dakota du Sud, USA"}
  ]},
  {name:"Parc national de Zion — Utah, USA",lat:37.2982,lng:-113.0263,desc:"Le parc de Zion est le résultat de 240 millions d'années d'érosion de grès Navajo par la rivière Virgin. Sa «Narrows», gorge de 800 mètres de large et 60 mètres de profondeur, se parcourt en marchant dans l'eau. La randonnée Angels Landing, avec ses chaînes d'acier dans la falaise, nécessite un permis tiré au sort depuis 2022.",photo:"photos/parc_national_de_fiordland.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Angels Landing (1 763m), Narrows du Virgin River, grès Navajo rouge de 610m, 4,3 millions de visiteurs/an"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Comté de Washington, Utah, Plateau du Colorado, à 160 km au nord-est de Las Vegas"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Canyons de grès rouge, Angels Landing, Zion National Park, Utah"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Parc national de Zion à Utah, USA"}
  ]},
  {name:"Las Vegas Strip — Nevada, USA",lat:36.1147,lng:-115.1728,desc:"Le Strip de Las Vegas est l'endroit qui consomme le plus d'électricité par kilomètre carré aux États-Unis. L'hôtel Bellagio possède la plus grande fontaine du monde avec ses 1 200 jets atteignant 46 mètres. Las Vegas recycle l'eau de ses hôtels-casinos à 99% — malgré ses milliers de piscines, c'est une des villes les plus économes en eau d'Amérique.",photo:"photos/las_vegas_strip.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Las Vegas Boulevard South, 6,7 km de casinos géants, inauguré par El Rancho Vegas en 1941, 150 000 km² de publicités lumineuses"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Paradise, comté de Clark, Nevada, désert de Mojave"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Avenue des casinos géants et hôtels thématiques, désert de Mojave, Nevada"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Las Vegas Strip à Nevada, USA"}
  ]},
  {name:"Everglades — Floride, USA",lat:25.2866,lng:-80.8987,desc:"Les Everglades ne sont pas un marais mais une immense rivière plate qui coule au ralenti — à peine 0,3 km/h — du lac Okeechobee vers le golfe du Mexique. Ce «River of Grass» long de 160 km est le seul endroit au monde où alligators et crocodiles coexistent naturellement.",photo:"photos/las_vegas_strip.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus grand parc subtropical du continent, 6 105 km², seul habitat au monde où alligators et crocodiles coexistent, lac Okeechobee"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Extrémité sud de la Floride, comté de Miami-Dade et Monroe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Unique parc subtropical des USA, seul endroit au monde où alligators et crocodiles coexistent, sud de la Floride"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Everglades à Floride, USA"}
  ]},
  {name:"Tenochtitlan — Mexico, Mexique",lat:19.4342,lng:-99.1333,desc:"Tenochtitlan, capitale aztèque fondée en 1325 sur une île au milieu du lac Texcoco, était la plus grande ville d'Amérique précolombienne. Elle fut détruite par Cortés en 1521 et le lac fut asséché. Mexico fut construite directement au-dessus — le Zócalo actuel se trouve exactement sur l'ancienne place centrale aztèque.",photo:"photos/tenochtitlan.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Templo Mayor aztèque, fouilles depuis 1978, grand temple à deux sanctuaires (Huitzilopochtli et Tlaloc), au cœur de la capitale pr"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centro Histórico d'une mégalopole, grande place centrale, cœœur de l'ancienne Tenochtitlan"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Templo Mayor aztèque, cœur de l'ancienne capitale aztèque, Mexico"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Tenochtitlan à Mexico, Mexique"}
  ]},
  {name:"Oaxaca — Mexique",lat:17.0619,lng:-96.7218,desc:"Oaxaca est la capitale de la gastronomie mexicaine, avec 7 variétés de mole (dont le mythique mole negro), le mezcal artisanal et le chocolat de tablette. La Guelaguetza, festival de danses régionales tenu en juillet, réunit les 16 peuples indigènes de l'État dans une célébration unique de diversité culturelle.",photo:"photos/oaxaca.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Monte Albán, capitale zapotèque du Ve siècle av. J.-C. au XVe siècle ap. J.-C., Monte Albán Plataforma sur, 400m d'altitude"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"À 9 km d'une grande ville coloniale, site zapotèque sur un plateau montagneux"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité zapotèque sur un plateau dominant une vallée, État méridional du Mexique"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Oaxaca au Mexique"}
  ]},
  {name:"Copper Canyon — Chihuahua, Mexique",lat:27.52,lng:-107.68,desc:"Le Copper Canyon est parcouru par le train Chepe, considéré comme l'un des plus beaux trajets ferroviaires du monde. Il traverse 86 tunnels et 37 ponts en serpentant dans un canyon plus profond que le Grand Canyon — un voyage de 16 heures entre la montagne et la mer.",photo:"photos/copper_canyon.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Barrancas del Cobre, 6 canyons plus grands et profonds que le Grand Canyon (1 870m), peuple Tarahumara, Chepe (train)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Sierra Madre Occidentale, canyon plus profond que le Grand Canyon, réseau ferroviaire célèbre"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Système de canyons plus profond que le Grand Canyon, Sierra Madre Occidentale, nord du Mexique"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Copper Canyon à Chihuahua, Mexique"}
  ]},
  {name:"Cartagena — Colombie",lat:10.3932,lng:-75.4795,desc:"Les murs de Cartagena de Indias furent construits après que le pirate Francis Drake pilla la ville en 1586. Ironiquement, ces fortifications espagnoles figurent aujourd'hui parmi les mieux conservées des Amériques et sont classées UNESCO.",photo:"photos/cartagena.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cité coloniale fondée en 1533, remparts de 11 km, Castillo San Felipe de Barajas (1657), port de la traite négrière"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Département côtier d'Amérique du Sud, vieille ville fortifiée coloniale sur la mer des Caraïbes"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité coloniale fortifiée de Carthagène des Indes, Colombie, Caraïbes"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Cartagena en Colombie"}
  ]},
  {name:"Los Roques — Venezuela",lat:11.86,lng:-66.67,desc:"Los Roques est un archipel de 350 îles coralliennes dans la mer des Caraïbes, intégralement parc national depuis 1972. Ses lagons peu profonds d'un bleu irréel sont parmi les plus transparents des Caraïbes. Les plages de sable blanc sont inaccessibles en voiture — tout l'archipel se visite à pied ou en bateau.",photo:"photos/los_roques.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Archipel de 350 îlots coraliens, parc national depuis 1972, eaux turquoise à 30°C, kitesurf et pêche sportive"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Archipel de la mer des Caraïbes, à 168 km des côtes continentales, eaux turquoise"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Archipel de 350 îlots coraliens, eaux turquoise, Caraïbes au nord de Caracas"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Los Roques au Venezuela"}
  ]},
  {name:"Choquequirao — Pérou",lat:-13.5393,lng:-72.8498,desc:"Choquequirao est parfois surnommée «Machu Picchu de luxe» car elle n'est accessible qu'à pied après 2 jours de marche. Sa taille égale celle de Machu Picchu mais elle accueille seulement 30 visiteurs par jour contre 5 000. Un projet de téléphérique menace d'en faire la prochaine destination de masse du Pérou.",photo:"photos/choquequirao.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cité inca à 3 085m, terrasses décorées de lamas en pierre, berceau du soleil, accessible uniquement à pied (2 jours)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province de La Convención, Cusco, canyon de l'Apurímac, Andes péruviennes"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité inca dans les nuages accessible uniquement à pied, sœur oubliée d'une célèbre cité andine, Pérou"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Choquequirao au Pérou"}
  ]},
  {name:"Sucre — Bolivie",lat:-19.0196,lng:-65.2619,desc:"Sucre, capitale constitutionnelle de Bolivie, est surnommée «la ville blanche» pour ses façades coloniales immaculées. Elle abrite l'une des pièces les plus importantes de l'histoire sudaméricaine : l'original de la Déclaration d'indépendance de la Bolivie de 1825, signée par Simón Bolívar.",photo:"photos/sucre.png",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ciudad Blanca, capitale constitutionnelle d'un pays andin, Casa de la Libertad (1825), altitude 2 810m"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Vallée des Cordillères, capitale constitutionnelle d'un pays andin, centro blanc colonial"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ville blanche, capitale constitutionnelle de la Bolivie, Casa de la Libertad (1825), UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Sucre en Bolivie"}
  ]},
  {name:"Trinidad — Cuba",lat:21.8024,lng:-79.9836,desc:"Trinidad de Cuba est une ville coloniale figée dans le temps, interdite aux voitures dans son centre depuis des décennies. Ses rues pavées de galets, ses maisons ocre et ses musiciens de son cubano en font l'un des endroits les plus authentiques des Caraïbes. Elle fut classée UNESCO en 1988 avec sa vallée sucrière adjacente.",photo:"photos/trinidad.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ville coloniale fondée en 1514, Plaza Mayor, maisons colorées, ex-capitale de l'industrie sucrière, Valle de los Ingenios"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province centrale d'une île des Caraïbes, ville coloniale classée, à 80 km d'une côte"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Joyau colonial cubain figé dans le temps, ancienne capitale de l'industrie sucrière, UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La ville coloniale de Trinidad, Cuba"}
  ]},
  {name:"La Havane — Cuba",lat:23.1136,lng:-82.3666,desc:"La Havane abrite le plus grand ensemble d'architecture coloniale baroque des Amériques. Ses vieilles voitures américaines des années 1950, embargo oblige, sont toujours en circulation — entretenues par des mécaniciens cubains qui fabriquent eux-mêmes les pièces manquantes. Le Malecón, promenade bordant l'océan, est le salon à ciel ouvert de la ville.",photo:"photos/trinidad.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Habana Vieja, Malecón de 8 km, Capitolio Nacional (1929), Floridita bar d'Hemingway, voitures américaines des années 50"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Grande baie de la capitale d'une île caraïbe, face au détroit qui la sépare du continent"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Capitale de Cuba, vieille ville coloniale baroque et promenade en bord de mer"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Havane, capitale de Cuba"}
  ]},
    {name:"Twelve Apostles — Victoria, Australie",lat:-38.6643,lng:143.1051,desc:"Les Douze Apôtres sur la Great Ocean Road en Australie ne sont plus que huit — quatre se sont effondrés dans la mer en raison de l'érosion marine. Ironiquement, ils n'étaient que neuf lors de leur baptême en 1922 et furent initialement appelés «Les Douze Porcins» avant que les autorités touristiques ne rebaptisent le site.",photo:"photos/twelve_apostles.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Huit (il en reste 8) piliers calcaires de 45m érodés par les vagues de l'océan Austral, Great Ocean Road, Port Campbell"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Parc national de la Great Ocean Road, côte des Naufrages, falaises calcaires"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Douze Apôtres, piliers calcaires sur l'océan Austral, Victoria, Australie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Twelve Apostles à Victoria, Australie"}
  ]},
  {name:"Parc de Kakadu — Territoire du Nord, Australie",lat:-12.6751,lng:132.52,desc:"Le parc national de Kakadu abrite des peintures rupestres aborigènes vieilles de 20 000 ans qui constituent un almanach vivant. Les artistes actuels continuent d'ajouter des peintures aux parois, maintenant une tradition ininterrompue depuis la préhistoire.",photo:"photos/parc_de_kakadu.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"50 000 km², peintures rupestres des Bininj/Mungguy vieilles de 40 000 ans, estuaires, crocodiles marins, chutes Jim Jim"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Région aride de l'intérieur du continent, à 250 km à l'est d'une ville côtière"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Kakadu, parc aux peintures rupestres et crocodiles, Territoire du Nord"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Parc de Kakadu à Territoire du Nord, Australie"}
  ]},
  {name:"Lake Hillier — Australie-Occidentale",lat:-34.0935,lng:123.2017,desc:"Le lac Hillier en Australie-Occidentale est naturellement rose bubblegum — une couleur qui ne disparaît pas même si on prend l'eau dans un verre. Sa teinte est due à la combinaison de bactéries halophiles, d'algues Dunaliella salina et de sel. Le lac est entouré d'eucalyptus et de sable blanc.",photo:"photos/lake_hillier.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Lac rose dû à l'algue Dunaliella salina et aux bactéries Salinibacter ruber, île Middle de l'archipel des Recherches"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Archipel côtier au large d'une côte méridionale, eaux turquoise méridionales"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Lac rose emblématique, Hillier Lake, Australie-Occidentale"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Lake Hillier en Australie-Occidentale"}
  ]},
  {name:"Aoraki Mount Cook — Nouvelle-Zélande",lat:-43.595,lng:170.1418,desc:"Aoraki Mount Cook, à 3 724 mètres, est le plus haut sommet de Nouvelle-Zélande. Sir Edmund Hillary, premier homme à gravir l'Everest en 1953, s'y entraîna. Son parc national est classé au sein du «Dark Sky Reserve» — l'une des 20 plus belles zones d'observation astronomique au monde.",photo:"photos/aoraki_mount_cook.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus haute montagne de Nouvelle-Zélande (3 724m), glacier de Tasman (27 km), Hillary s'y entraîna avant l'Everest"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Parc national d'Aoraki/Mount Cook, district de Mackenzie, île du Sud, Nouvelle-Zélande"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus haute montagne de Nouvelle-Zélande, glacier de 27 km, Alpes du Sud, île du Sud"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Aoraki Mount Cook en Nouvelle-Zélande"}
  ]},
  {name:"Hobbiton — Waikato, Nouvelle-Zélande",lat:-37.8722,lng:175.6821,desc:"Hobbiton dans la région de Waikato fut construite pour le tournage du Seigneur des Anneaux (2001) sur une ferme familiale. Peter Jackson la fit reconstruire en dur pour Le Hobbit (2012) pour en faire une attraction permanente. Les 44 portes rondes des Hobbits sont habitées par des plantes soigneusement choisies pour paraître à taille hobbit.",photo:"photos/hobbiton.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Décor du Shire des films LOTR de Peter Jackson, ferme Alexander Farm, 44 maisons de hobbits permanentes depuis 2011"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Matamata, Waikato, île du Nord, Nouvelle-Zélande, à 170 km d'Auckland"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Décor du Shire du Seigneur des Anneaux reconstruit en dur, ferme de Matamata, île du Nord"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Hobbiton à Waikato, Nouvelle-Zélande"}
  ]},
  {name:"Vallée de Franz Josef — Nouvelle-Zélande",lat:-43.454,lng:170.1831,desc:"Le glacier Franz Josef est l'un des glaciers les plus rapides du monde : il avance de 70 cm par jour. Sa langue de glace descend jusqu'à 300 mètres d'altitude dans une forêt tropicale humide — une coexistence unique sur Terre. Des héliportées permettent de poser sur sa surface criblée de crevasses.",photo:"photos/vallee_de_franz_josef.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Glaciers de Franz Josef (12 km) et Fox (13 km), uniques glaciers tempérés du monde descendant jusqu'à la forêt tropicale"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"District de Westland, côte ouest de l'île du Sud, parc national de Westland Tai Poutini, Nouvelle-Zélande"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Glaciers de Franz Josef et Fox, côte ouest de l'île du Sud, Nouvelle-Zélande"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Vallée de Franz Josef en Nouvelle-Zélande"}
  ]},
  {name:"Tonga — Pacifique Sud",lat:-20.0137,lng:-175.2014,desc:"Les îles Tonga sont le dernier royaume polynésien encore en existence. C'est l'unique nation du Pacifique à n'avoir jamais été colonisée. Ses lagons abritent les baleines à bosse pendant leur migration annuelle d'août à novembre — les seuls endroits au monde où l'on peut nager légalement avec ces cétacés.",photo:"photos/tonga.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Royaume de Tonga, seule monarchie polynésienne ininterrompue, 170 îles dont Tongatapu, plongée avec les baleines à bosse"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île principale d'un archipel polynésien, Pacifique Sud, à 2 000 km d'un grand continent"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Dernier royaume polynésien, seule nation du Pacifique jamais colonisée, nage avec les baleines"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Royaume de Tonga, Pacifique Sud"}
  ]},
  {name:"Île de Moorea — Polynésie française",lat:-17.5327,lng:-149.8322,desc:"L'île de Moorea, visible depuis Tahiti à 17 km, est un ancien volcan dont le cratère effondré forma deux baies en forme de cœur. Le biologiste James Cook l'appela «l'Île de la paix». Jacques Brel y vécut ses dernières années dans les années 1970, naviguant entre ses îles adorées dans son voilier.",photo:"photos/ile_de_moorea.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Île de basalte sœur de Tahiti, piques volcaniques du Mont Rotui (899m), baies d'Opunohu et de Cook, requins dormeurs"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"À 17 km à l'ouest de Tahiti, archipel de la Société, Polynésie française, Pacifique Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Moorea, île sœur de Tahiti aux piques volcaniques, Polynésie française"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Île de Moorea en Polynésie française"}
  ]},
  {name:"Atoll de Bikini — Îles Marshall",lat:11.6041,lng:165.3854,desc:"L'atoll de Bikini fut le théâtre de 23 essais nucléaires américains entre 1946 et 1958, dont la bombe H «Castle Bravo» 1 000 fois plus puissante qu'Hiroshima. Ses habitants furent déplacés et ne purent jamais revenir. L'atoll reste contaminé, les naufragés de ses tests sont devenus les épaves les plus radioactives plongées au monde.",photo:"photos/atoll_de_bikini.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Site de 23 essais nucléaires américains entre 1946 et 1958 (dont Castle Bravo), épaves de navires coulés dans le lagon, classé UNE"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Îles Marshall, archipel des Ralik, Micronésie, Pacifique Nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Site de 23 essais nucléaires américains (1946-1958), épaves radioactives, UNESCO, Micronésie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Atoll de Bikini, Îles Marshall (Pacifique)"}
  ]},
  {name:"Îles Fidji — Pacifique Sud",lat:-17.7134,lng:178.065,desc:"Les Fidji comptent 330 îles dont 110 habitées. Leur culture du kava — boisson à base de racine de poivrier polynésien — est centrale à leur vie sociale. Chaque visiteur est accueilli par une cérémonie du kava. L'eau des Fidji fut classée source d'eau minérale la plus pure au monde pendant des années.",photo:"photos/atoll_de_bikini.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"333 îles dont Viti Levu (capitale Suva) et Vanua Levu, plongée à Beqa Lagoon, meke (danse), kava (boisson rituelle)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Mélanésie occidentale, Pacifique Sud, archipel tropical à 2 000 km au nord-est d'une grande métropole"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Archipel de 333 îles mélanésiennes, cérémonies du kava, plongées aux requins, Pacifique Sud"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Îles Fidji, Pacifique Sud"}
  ]},
  {name:"Cathédrale Notre-Dame de Chartres — France",lat:48.4469,lng:1.4886,desc:"La cathédrale de Chartres est l'une des rares à avoir conservé ses vitraux médiévaux d'origine. Pendant la Seconde Guerre mondiale, les Chartranais déposèrent les 176 vitraux et les enfouirent dans des caisses dans des caves pour les protéger des bombardements.",photo:"photos/cathedrale_de_brasilia.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Chef-d'œuvre gothique consacré en 1220, 176 vitraux médiévaux dont la célèbre rose nord, Eure-et-Loir"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre de Chartres, Eure-et-Loir, plaine de Beauce"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cathédrale gothique aux vitraux célèbres, Chartres, France"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Cathédrale Notre-Dame de Chartres en France"}
  ]},
  {name:"Abbaye du Mont Cassin — Italie",lat:41.4895,lng:13.8138,desc:"L'acoustique de l'abbaye du Thoronet est si parfaite que les moines cisterciens pouvaient chanter a cappella dans la nef sans aucun équipement d'amplification. Le musicien américain Jonathan Harvey y composa une œuvre inspirée par sa réverbération de 1,8 secondes.",photo:"photos/abbaye_du_mont_cassin.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Fondée par Saint-Benoît en 529, détruite et reconstruite quatre fois, site de la bataille de Monte Cassino (1944)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Sommet du mont Cassino (520 m), province de Frosinone, Latium"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Abbaye bénédictine-mère, lieu de la féroce bataille de 1944, Latium"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Abbaye du Mont Cassin en Italie"}
  ]},
  {name:"Arène de Vérone — Italie",lat:45.4385,lng:10.9942,desc:"L'arène de Vérone, amphithéâtre romain du Ier siècle, est l'un des trois mieux conservés du monde avec ses galeries extérieures quasi intactes. Depuis 1913, elle accueille chaque été le festival d'opéra le plus populaire au monde — 22 000 spectateurs munis de bougies assistent à des représentations de Verdi en plein air.",photo:"photos/abbaye_du_mont_cassin.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Amphithéâtre romain du Ier siècle, 30 000 places, l'un des mieux conservés du monde, opéra en plein air depuis 1913"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Piazza Bra, centre de Vérone, province de Vérone, Vénétie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Amphithéâtre romain accueillant l'opéra en plein air, Vérone, Italie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Arène de Vérone en Italie"}
  ]},
  {name:"Piazza del Campo — Sienne, Italie",lat:43.3183,lng:11.3313,desc:"La place del Campo de Sienne est en forme de coquille inclinée à 0,5° pour évacuer les eaux de pluie. Le Palio de Sienne, course de chevaux en 90 secondes autour de cette place, se déroule deux fois par an depuis le XIIIe siècle. Les chevaux participent au nom des 17 contrade (quartiers) — une rivalité si intense qu'elle a généré des siècles de stratégies, de trahisons et d'alliances.",photo:"photos/piazza_del_campo.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Place en forme de coquille, Palazzo Pubblico du XIVe siècle, Torre del Mangia (102m), Palio di Siena deux fois par an"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre historique de Sienne, province de Sienne, Toscane"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus belle place médiévale d'Italie, Sienne, Toscane"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Piazza del Campo à Sienne, Italie"}
  ]},
  {name:"Cathédrale de Séville — Espagne",lat:37.3861,lng:-5.9934,desc:"La cathédrale de Séville est la plus grande église gothique du monde. Elle fut construite sur la Grande Mosquée almohade, dont elle conserva le minaret transformé en clocher — la Giralda. Christophe Colomb y est enterré, ses cendres portées symboliquement par les statues des quatre rois d'Espagne.",photo:"photos/cathedrale_de_seville.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus grande cathédrale gothique du monde, construite sur la grande mosquée almohade, Giralda (97m), tombeau de Christophe Colomb"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Vieille ville de Séville, Andalousie, bord du Guadalquivir"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande cathédrale gothique du monde, avec la Giralda, Séville"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Cathédrale de Séville en Espagne"}
  ]},
  {name:"Palais Royal de Madrid — Espagne",lat:40.4178,lng:-3.7143,desc:"Le palais royal de Madrid, achevé en 1764, est le plus grand palais royal d'Europe occidentale avec ses 3 418 pièces. Il abrite la seule Stradivarius quartet encore accordé et utilisable au monde — cinq violons, deux altos et deux violoncelles du luthier légendaire.",photo:"photos/palais_royal_de_madrid.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Palacio Real, 3 418 pièces, construit de 1738 à 1764 par Juan Bautista Sachetti pour Philippe V, résidence officielle non habitée"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Grande place centrale de la capitale, face à l'opéra royal et aux jardins"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand palais royal d'Europe occidentale, Madrid"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais Royal de Madrid en Espagne"}
  ]},
  {name:"Tour des Belem — Porto, Portugal",lat:41.1407,lng:-8.6753,desc:"La Livraria Lello de Porto, fondée en 1906, est l'une des plus belles librairies du monde. Son escalier en colimaçon en bois rouge et sa verrière colorée auraient inspiré J.K. Rowling lors de son séjour à Porto dans les années 1990. Elle vend aujourd'hui plus de billets d'entrée que de livres.",photo:"photos/tour_des_belem.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Livraria Lello, librairie néo-gothique de 1906, escalier en colimaçon rouge ayant inspiré Harry Potter, Rua das Carmelitas"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rue das Carmelitas, quartier des Clercs, centre historique de Porto"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Librairie Lello, parmi les plus belles du monde, Porto, Portugal"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Tour des Belem à Porto, Portugal"}
  ]},
  {name:"Couvent du Christ — Tomar, Portugal",lat:39.604,lng:-8.411,desc:"Le Couvent du Christ de Tomar fut fondé par les Templiers au XIIe siècle. Lors de la dissolution de l'Ordre du Temple en 1312, le Portugal créa l'Ordre du Christ pour récupérer ses biens. Sa fameuse fenêtre manuéline, couverte de symboles marins, de cordes et de sphères armillaires, est l'emblème de l'art manuélin.",photo:"photos/couvent_du_christ.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Convento de Cristo, forteresse templière du XIIe siècle, fenêtre manuéline emblématique, siège des Chevaliers du Christ"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Colline de Tomar, district de Santarém, Ribatejo"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Forteresse templière et couvent manuélin, Tomar, Portugal"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Couvent du Christ à Tomar, Portugal"}
  ]},
  {name:"Grottes d'Altamira — Espagne",lat:43.3797,lng:-4.1033,desc:"Les peintures d'Altamira, réalisées il y a 14 500 ans, sont si réalistes que l'archéologue Marcelino Sanz de Sautuola fut accusé de fraude lors de leur découverte en 1879. On ne le crut qu'en 1902, deux ans après sa mort. Picasso, après les avoir vues, aurait dit : «Après Altamira, tout n'est que décadence.»",photo:"photos/grottes_d_altamira.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cueva de Altamira, 35 peintures pariétales de bisons du Paléolithique supérieur (14 500 av. J.-C.), découvertes en 1879"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune de Santillana del Mar, Cantabrie, côte verte du nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grottes aux peintures rupestres préhistoriques, Cantabrie, nord de l'Espagne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Grottes d'Altamira en Espagne"}
  ]},
  {name:"Alcazar de Séville — Espagne",lat:37.3839,lng:-5.9929,desc:"L'Alcazar de Séville est le plus ancien palais royal encore en usage dans le monde occidental. Pierre Ier le fit construire en style mudéjar en 1364 avec des artisans de Grenade et de Tolède. Il fut utilisé comme décor pour Dorne dans la série Game of Thrones. La famille royale espagnole y séjourne encore.",photo:"photos/alcazar_de_seville.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Real Alcázar, palais fortifié construit en 913, agrandi par Pierre Ier en style mudéjar en 1364, plus ancien palais royal en usage"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Barrio de Santa Cruz, centre historique de Séville, Andalousie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Palais mudéjar de Séville, plus ancien palais royal en usage d'Europe"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Alcazar de Séville en Espagne"}
  ]},
  {name:"Grottes de Lascaux — France",lat:45.0453,lng:1.1682,desc:"Les peintures de Lascaux furent découvertes par quatre adolescents en 1940 en cherchant leur chien. Après avoir été ouvertes au public, les grottes furent fermées en 1963 car la respiration des visiteurs faisait apparaître des algues et des champignons sur les fresques.",photo:"photos/grottes_de_lascaux.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Grotte ornée du Paléolithique supérieur (-17 000 ans), 1 900 figures animales, Salle des Taureaux, Dordogne"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune de Montignac-Lascaux, Dordogne, Périgord, Nouvelle-Aquitaine"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grottes préhistoriques aux peintures rupestres, Dordogne, France"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Grottes de Lascaux en France"}
  ]},
    {name:"Carcassonne — France",lat:43.2119,lng:2.3641,desc:"La double enceinte de Carcassonne inspira le jeu de société éponyme, vendu à 70 millions d'exemplaires dans le monde. Dans ce jeu, les joueurs construisent villes et routes en posant des tuiles — une mécanique née de la contemplation des remparts médiévaux.",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cité médiévale fortifiée, 3 km de remparts, 52 tours, restaurée par Viollet-le-Duc en 1853, siège cathare du XIIIe siècle"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Colline dominant l'Aude, commune de Carcassonne, Occitanie, à 90 km de Toulouse"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité médiévale fortifiée, classée UNESCO, Occitanie, France"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Carcassonne en France"}
  ]},
  {name:"Musée d'Orsay — Paris, France",lat:48.86,lng:2.3266,desc:"La transformation de la gare d'Orsay en musée préserva un bâtiment condamné à la démolition. En 1970, un promoteur immobilier avait déjà acheté la gare pour la remplacer par un hôtel. Des artistes et intellectuels menèrent une campagne de sauvegarde qui aboutit en 1986.",photo:"photos/grottes_de_lascaux.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ancienne gare d'Orsay (1900), reconvertie en musée en 1986, abritant la plus grande collection impressionniste mondiale"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rive gauche d'un grand fleuve, dans une ancienne gare reconvertie en musée"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Musée de l'impressionnisme dans une gare rénovée, Paris"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Musée d'Orsay à Paris, France"}
  ]},
  {name:"Centre Pompidou — Paris, France",lat:48.8607,lng:2.3523,desc:"Le Centre Pompidou «retourna» son bâtiment : toutes les structures (escaliers, ascenseurs, conduits) sont à l'extérieur, codées par couleur (bleu = air, vert = eau, jaune = électricité, rouge = circulation). Le résultat, critiqué lors de l'inauguration, est aujourd'hui une icône architecturale.",photo:"photos/centre_pompidou.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Beaubourg, conçu par Piano et Rogers (1977), tuyaux et structures apparents colorés, 20 000 visiteurs/jour"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Place Georges-Pompidou, quartier du Marais, 4ème arrondissement"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Musée d'art moderne aux tuyaux colorés en façade, Paris"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Centre Pompidou à Paris, France"}
  ]},
  {name:"Musée du Louvre — Paris, France",lat:48.8606,lng:2.3376,desc:"Avec 73 000 m² d'expositions, il faudrait 9 semaines entières à raison de 8 heures par jour pour voir chaque œuvre du Louvre 30 secondes. La Joconde, qui déçoit souvent les visiteurs par sa petite taille (77 cm × 53 cm), attire néanmoins 6 millions de personnes par an.",photo:"photos/musee_du_louvre.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus grand musée du monde (73 000 m²), pyramide de verre de Pei (1989), 9 millions de visiteurs/an, Joconde et Vénus de Milo"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rue de Rivoli, 1er arrondissement, bord de la Seine, ancienne forteresse royale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand musée du monde, pyramide de verre, Paris"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Musée du Louvre à Paris, France"}
  ]},
  {name:"Arc de Triomphe — Paris, France",lat:48.8738,lng:2.295,desc:"L'Arc de Triomphe fut commandé par Napoléon après la victoire d'Austerlitz en 1805 mais il ne le vit jamais terminé. C'est sous les voûtes de l'Arc que brûle depuis 1921 la Flamme du Soldat Inconnu — ravivée chaque soir à 18h30 sans interruption depuis un siècle.",photo:"photos/arc_de_triomphe.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Commandé par Napoléon en 1806, achevé en 1836, 50 m de hauteur, tombe du Soldat Inconnu, Place de l'Étoile"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Place Charles-de-Gaulle (Étoile), 8ème arrondissement, au bout des Champs-Élysées"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Monument de 50 m à l'étoile des Champs-Élysées, tombe du Soldat Inconnu, Paris"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Arc de Triomphe à Paris, France"}
  ]},
    {name:"British Museum — Londres, Royaume-Uni",lat:51.5194,lng:-0.127,desc:"Le British Museum fut fondé en 1753 avec la collection de Sir Hans Sloane — 71 000 objets légués à la nation contre 20 000 livres sterling. Son Great Court, coiffé d'un toit de verre de 3 312 panneaux uniques conçu par Norman Foster, est la plus grande place couverte d'Europe.",photo:"photos/british_museum.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Fondé en 1753, 8 millions d'objets dont la Pierre de Rosette et les marbres du Parthénon, Great Court de Foster (2000)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Great Russell Street, Bloomsbury, à 500m de Covent Garden"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Premier musée national au monde, Pierre de Rosette, Londres"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le British Museum à Londres, Royaume-Uni"}
  ]},
  {name:"Palais de Buckingham — Londres, Royaume-Uni",lat:51.5014,lng:-0.1419,desc:"Buckingham Palace compte 775 pièces dont 188 chambres de personnels. La Reine possédait officiellement tous les dauphins et cygnes dans les eaux territoriales britanniques. La relève de la garde, supprimée en 1939, fut rétablie en 1959 et attire chaque jour des milliers de visiteurs.",photo:"photos/palais_de_buckingham.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Résidence officielle du souverain depuis Victoria (1837), 775 pièces, relève de la garde à 11h30, balcon des apparitions royales"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"The Mall, City of Westminster, face au Mémorial de Victoria"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Résidence officielle du roi d'Angleterre, relève de la garde, Londres"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais de Buckingham à Londres, Royaume-Uni"}
  ]},
  {name:"Tour de Londres — Royaume-Uni",lat:51.5081,lng:-0.0759,desc:"La Tour de Londres fut fondée par Guillaume le Conquérant en 1066 et servit successivement de forteresse, de palais royal, de prison et de trésor. Ses Ravens — six corbeaux résidents — sont gardés par un Ravenmaster : selon la légende, si les corbeaux partent, la Tour et la Couronne s'effondreront.",photo:"photos/tour_de_londres.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Her Majesty's Royal Palace and Fortress, fondée par Guillaume le Conquérant en 1066, gardes Beefeaters, joyaux de la Couronne"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Tower Hill, London Borough of Tower Hamlets, bord de la Tamise"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Forteresse médiévale, joyaux de la Couronne britannique, Londres"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Tour de Londres, Royaume-Uni"}
  ]},
  {name:"Palais de Hampton Court — Royaume-Uni",lat:51.4034,lng:-0.3376,desc:"Le labyrinthe de Hampton Court, planté en 1690, est le plus vieux labyrinthe d'haies taillées encore en usage au monde. Ses 800 mètres de haies d'ifs forment un parcours qui peut prendre jusqu'à une heure à résoudre — une distraction royale pour les courtisans d'Henri VIII.",photo:"photos/palais_de_hampton_court.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Palais Tudor d'Henri VIII (1515), jardins baroques de William III, labyrinthe de 1690, bord de la Tamise à Richmond"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"East Molesey, Surrey, bord de la Tamise"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Palais Tudor d'Henri VIII avec labyrinthe et jardins baroques, Angleterre"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palais de Hampton Court, Angleterre (Royaume-Uni)"}
  ]},
  {name:"Cathédrale de Durham — Royaume-Uni",lat:54.7733,lng:-1.5762,desc:"La cathédrale de Durham, avec ses colonnes à zigzag normandes, fut choisie par le magazine Time comme le bâtiment le plus grandiose jamais construit. Sa position sur un promontoire au-dessus de la Wear et sa masse austère en font l'un des paysages les plus dramatiques d'Angleterre.",photo:"photos/cathedrale_de_durham.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Chef-d'œuvre roman normand commencé en 1093, abritant les reliques de Saint-Cuthbert et Bède le Vénérable, promontoire sur la Wear"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Presqu'île de la rivière Wear, Durham, nord-est de l'Angleterre"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cathédrale romane normande, UNESCO, Durham, nord de l'Angleterre"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Cathédrale de Durham, Angleterre (Royaume-Uni)"}
  ]},
  {name:"Kelvingrove — Glasgow, Écosse",lat:55.8683,lng:-4.288,desc:"Le musée Kelvingrove de Glasgow contient un avion Spitfire suspendu dans ses galeries — l'un des symboles de la Seconde Guerre mondiale. Le bâtiment fut construit «à l'envers» selon une légende locale : l'entrée principale se trouverait du mauvais côté. En réalité, le plan fut simplement mal interprété par les architectes.",photo:"photos/kelvingrove.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Kelvingrove Art Gallery, palais baroque inauguré en 1901, Dalí Christ of St John, avion Spitfire suspendu au plafond"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Argyle Street, West End de Glasgow, bord de la Kelvin, Écosse"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Musée d'art et curiosités emblématique de Glasgow, Écosse"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Kelvingrove à Glasgow, Écosse"}
  ]},
  {name:"Péninsule de Dingle — Irlande",lat:52.1401,lng:-10.2677,desc:"La péninsule de Dingle compte plus de 2 000 monuments archéologiques en 150 km² — l'une des plus fortes densités au monde. Certains oratoires en pierre et dolmens datent de 6 000 ans, permettant de marcher littéralement dans un paysage préhistorique toujours intact.",photo:"photos/peninsule_de_dingle.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Slea Head Drive, oratoires en pierre de Gallarus du VIIe siècle, forts préhistoriques, promontoire sur l'Atlantique, Kerry"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Péninsule de l'extrême ouest d'une île atlantique, montagnes et oratorios chrétiens céltiques"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Péninsule atlantique sauvage du Kerry, monuments celtiques, Irlande"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Péninsule de Dingle en Irlande"}
  ]},
    {name:"Speicherstadt — Hambourg, Allemagne",lat:53.5431,lng:9.994,desc:"Les entrepôts de la Speicherstadt de Hambourg furent construits sur des pieux de chêne plantés dans l'eau de l'Elbe. Ce quartier de briques rouges abrita pendant un siècle les épices, tapis et cacao de l'empire commercial allemand. Aujourd'hui, il accueille des musées et des agences de création.",photo:"photos/speicherstadt.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus grand complexe d'entrepôts sur pilotis du monde, construit de 1883 à 1927, briques rouges, canaux de l'Elbe, UNESCO 2015"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier HafenCity, bord de l'Elbe, grande ville portuaire du nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Quartier d'entrepôts victoriens sur canaux, UNESCO, Hambourg"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Speicherstadt à Hambourg, Allemagne"}
  ]},
  {name:"Château d'Heidelberg — Allemagne",lat:49.4104,lng:8.7147,desc:"Le château de Heidelberg renferme le plus grand tonneau de vin du monde avec ses 221 726 litres. Construit en 1751 pour le prince-électeur Karl Theodor, ce tonneau ne fut jamais rempli à plus de la moitié — sa contenance était davantage symbolique que pratique.",photo:"photos/chateau_d_heidelberg.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Schloss Heidelberg, ruines Renaissance-gothiques sur le Königstuhl, détruit par Louis XIV en 1689, plus grand tonneau de vin (221 "},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Colline du Königstuhl dominant Heidelberg, Bade-Wurtemberg, vallée du Neckar"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ruines du château Renaissance, dominant Heidelberg et le Neckar"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château d'Heidelberg en Allemagne"}
  ]},
  {name:"Porte de Brandebourg — Berlin, Allemagne",lat:52.5163,lng:13.3777,desc:"La Porte de Brandebourg fut le symbole de la division de Berlin pendant 28 ans : elle se trouvait exactement sur le tracé du mur, inaccessible des deux côtés. La nuit du 9 novembre 1989, des milliers de Berlinois se réunirent spontanément devant elle pour fêter sa réouverture.",photo:"photos/chateau_d_heidelberg.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Brandenburger Tor, porte néoclassique de 1791 par Carl Gotthard Langhans, Quadrige de la Victoire, symbole de réunification"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Pariser Platz, Mitte, à l'extrémité est de la Straße des 17. Juni"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Porte néoclassique de 1791, symbole de la réunification, au bout de la Straße des 17. Juni, Berlin"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Porte de Brandebourg à Berlin, Allemagne"}
  ]},
  {name:"Philharmonie de Berlin — Allemagne",lat:52.5098,lng:13.3694,desc:"La Philharmonie de Berlin, inaugurée en 1963, fut le premier concert hall à placer l'orchestre au centre entouré du public — une révolution architecturale. Son acoustique, considérée comme la meilleure du monde, résulte d'un calcul complexe intégrant la forme de chaque siège en bois.",photo:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Berlin_Philharmonie_asv2018-05_img2.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Grande salle de concert avant-gardiste conçue par Hans Scharoun (1963), salle en tente avec 2 440 places en amphithéâtre autour de"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Herbert-von-Karajan-Straße, Kulturforum, quartier du Tiergarten"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Salle de concert avant-gardiste de 1963, orchestre central entouré du public, Kulturforum Berlin"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Philharmonie de Berlin en Allemagne"}
  ]},
  {name:"Berne — Suisse (Zytglogge)",lat:46.9481,lng:7.4474,desc:"La Zytglogge de Berne, tour de l'horloge du XIIIe siècle, déclencha une révolution de la physique : c'est en la regardant depuis son tram en 1905 qu'Albert Einstein imagina sa théorie de la relativité restreinte. Il se demanda ce qu'il verrait si le tram roulait à la vitesse de la lumière.",photo:"https://upload.wikimedia.org/wikipedia/commons/1/18/Bern_Panorama_07.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Zytglogge, tour de l'horloge médiévale de 1218, automates astronomiques, Kramgasse où Einstein habitait au n°49"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Kramgasse, vieille ville de Berne (Altstadt), boucle de l'Aar"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Zytglogge, tour de l'horloge médiévale de la capitale suisse"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Zytglogge à Berne, capitale de la Suisse"}
  ]},
  {name:"Musée olympique — Lausanne, Suisse",lat:46.5083,lng:6.6374,desc:"Lausanne est la capitale olympique mondiale depuis 1915 et abrite le Musée olympique inauguré en 1993. Le CIO y décide de l'attribution des Jeux et y conserve les archives de tous les Jeux depuis Athènes 1896. Lausanne accueille aussi le Tribunal Arbitral du Sport, qui tranche tous les litiges sportifs mondiaux.",photo:"https://upload.wikimedia.org/wikipedia/commons/0/08/Losanna%2C_museo_olimpico%2C_int%2C_torce_olimpiche.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Siège du CIO depuis 1915, musée olympique sur les rives du Léman, parc du Château d'Ouchy, inauguré en 1993"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quai d'Ouchy, bord du lac Léman, Lausanne, canton de Vaud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Siège mondial du Comité Olympique International, bord du lac Léman, Lausanne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Musée olympique à Lausanne, Suisse"}
  ]},
  {name:"Abbaye de Westminster — Londres",lat:51.4994,lng:-0.1273,desc:"L'abbaye de Westminster est le lieu de couronnement de tous les souverains britanniques depuis Guillaume le Conquérant en 1066. Dix-sept monarques y sont enterrés. La Pierre du Destin, sur laquelle les rois d'Écosse étaient couronnés depuis -840, y fut intégrée lors du couronnement de Charles III en 2023.",photo:"photos/abbaye_de_fontevraud.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Collegiate Church of St Peter, fondée en 960, lieu de couronnement depuis Guillaume en 1066, sépulture de Newton et Darwin"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Dean's Yard, City of Westminster, à côté du Parlement"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Abbaye des couronnements royaux et panthéon britannique, Londres"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Abbaye de Westminster à Londres, Royaume-Uni"}
  ]},
  {name:"Château de Windsor — Royaume-Uni",lat:51.4839,lng:-0.6044,desc:"Le château de Windsor possède la plus longue allée plantée d'arbres au monde : the Long Walk, une avenue de 4,8 km bordée de platanes et de marronniers. Elle fut plantée en 1685 et constitue l'axe central du Grand Parc de Windsor.",photo:"photos/chateau_de_blarney.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus vieux château royal habité au monde, fondé par Guillaume en 1070, résidence royale depuis 900 ans, Round Tower"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Windsor, Berkshire, résidence royale au bord de la Tamise"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus vieux château royal habité du monde, Windsor, Angleterre"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Windsor, Angleterre (Royaume-Uni)"}
  ]},
  {name:"Château de Bled — Slovénie",lat:46.3683,lng:14.1033,desc:"Le château de Bled est mentionné pour la première fois en 1011 dans un document de l'empereur Henri II, qui l'offrit à l'évêché de Brixen. Perché à 130 mètres au-dessus du lac, il domine l'une des vues les plus photographiées d'Europe : le lac, l'île et ses montagnes.",photo:"photos/chateau_de_blarney.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Blejski Grad, château médiéval du XIe siècle sur falaise de 130m dominant le lac de Bled avec l'île à l'église baroque"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bord d'un lac glaciaire alpin, île baroque et château médiéval en Haute-Carniole"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château sur falaise dominant le lac de Bled à l'île romantique, Slovénie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Bled en Slovénie"}
  ]},
  {name:"Kotor — Montenegro",lat:42.4247,lng:18.7712,desc:"Les remparts de Kotor grimpent 260 mètres à flanc de falaise jusqu'au fort Saint-Jean — les monter à pied prend une heure. La cité fortifiée vénitienne, au fond d'une baie ressemblant à un fjord, est si préservée que les habitants vivent encore dans les mêmes maisons du XVe siècle.",photo:"https://upload.wikimedia.org/wikipedia/commons/c/c8/Flag_of_Kotor%2C_Montenegro.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Vieille ville vénitienne fortifiée, 4,5 km de remparts grimpant 260m sur le mont Saint-Jean, baie de Kotor, UNESCO"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Fond d'une baie de la mer Adriatique, vieille ville fortifiée médiévale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Vieille ville fortifiée au fond d'un fjord méditerranéen, Monténégro"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La vieille ville de Kotor au Monténégro"}
  ]},
  {name:"Plovdiv — Bulgarie (vieille ville)",lat:42.1429,lng:24.7498,desc:"Plovdiv est la plus ancienne ville habitée en permanence d'Europe, avec 8 000 ans d'histoire. Ses collines abritent des vestiges thraces, romains et byzantins. Son amphithéâtre romain du IIe siècle, redécouvert en 1972 après un glissement de terrain, accueille aujourd'hui des concerts et opéras en plein air avec une acoustique exceptionnelle.",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Plovdiv_flag.svg/langfr-330px-Plovdiv_flag.svg.png",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus ancienne ville d'Europe habitée en continu, Philippopolis fondée par Philippe II de Macédoine en -342, amphithéâtre romain"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Collines de Nebet Tepe, vieille ville d'une cité théatrale des Balkans, bord de la Maritza"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus ancienne ville habitée d'Europe en continu, amphithéâtre romain du IIe siècle, Bulgarie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La vieille ville de Plovdiv, Bulgarie"}
  ]},
  {name:"Rila Monastery — Bulgarie",lat:42.1333,lng:23.3403,desc:"Le monastère de Rila fut fondé au Xe siècle par Saint Jean de Rila qui vécut dans une grotte proche. Ses fresques colorées couvrent 1 200 m² et furent réalisées par des maîtres artisans bulgares en seulement deux ans au XIXe siècle — une cadence phénoménale.",photo:"https://upload.wikimedia.org/wikipedia/commons/4/46/Rila_Monastery%2C_August_2013.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Monastère de Rila, fondé au Xe siècle par Jean de Rila, frescoes de 1847, forteresse Hrelyu, UNESCO"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Gorge de la Rilska Reka, massif de Rila, Sofia Province, à 120 km de Sofia"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand monastère de Bulgarie dans les montagnes Rila, UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Monastère de Rila en Bulgarie"}
  ]},
  {name:"Wieliczka — Pologne (mines de sel)",lat:49.9841,lng:20.0553,desc:"Les ouvriers des mines de sel de Wieliczka utilisaient les 300 km de galeries pour se repérer en sculptant des chapelles, des statues et même une reconstitution de la Cène dans le sel. La chapelle Sainte-Kinga, entièrement taillée dans le sel, mesure 54 m de long pour 12 m de hauteur.",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/POL_Wieliczka_flag.svg/langfr-330px-POL_Wieliczka_flag.svg.png",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Mine de sel en exploitation depuis le XIIIe siècle, chapelle Sainte-Kinga (54m de long) entièrement taillée dans le sel, UNESCO"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune à 14 km d'une cité royale historique, mines de sel millénaires, cathédrale souterraine"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Mines de sel exploitées depuis le XIIIe siècle, chapelle taillée dans le sel à 101 m de profondeur, Pologne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Wieliczka en Pologne (mines de sel)"}
  ]},
  {name:"Bia?owie?a — Pologne/Biélorussie",lat:52.7083,lng:23.861,desc:"La forêt de Bia?owie?a est la dernière forêt primaire de plaine d'Europe — jamais exploitée industriellement. On y trouve des arbres vieux de 500 ans, des champignons géants et des insectes disparus partout ailleurs. Le bison européen (Bison bonasus), réintroduit en 1952 après avoir été exterminé en 1927, y prospère avec 600 individus.",photo:"photos/bia_owie_a.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Dernière forêt primaire de plaine d'Europe, habitat du bison européen (Bison bonasus), frontière entre deux pays"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Podlachie oriental, frontière entre deux pays d'Europe centrale, dernière forêt vierge de plaine"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Dernière forêt primaire d'Europe, bisons sauvages, Pologne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Bia?owie?a en Pologne/Biélorussie"}
  ]},
  {name:"Red Fort — Delhi, Inde",lat:28.6562,lng:77.241,desc:"Le Fort Rouge de Delhi fut construit en marbre blanc et calcaire rouge pendant 10 ans. La déclaration d'indépendance de l'Inde fut proclamée depuis ses remparts le 15 août 1947 par Jawaharlal Nehru — une tradition que chaque Premier ministre perpétue chaque année.",photo:"photos/red_fort.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Lal Qila, forteresse moghole en grès rouge construite par Shah Jahan de 1638 à 1648, symbole de l'indépendance indienne"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Old Delhi (Shahjahanabad), rive de la Yamuna, New Delhi"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Fort Rouge de Delhi, forteresse moghole symbole de l'indépendance"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Red Fort à Delhi, Inde"}
  ]},
  {name:"Qutb Minar — Delhi, Inde",lat:28.5245,lng:77.1855,desc:"La colonne de fer du Qutb Minar résiste à la rouille depuis 1 600 ans grâce à sa composition unique : elle contient 0,15% de phosphore qui forme une couche protectrice d'hydrogène phosphate de fer. Cet acier damas naturel reste un mystère pour les métallurgistes modernes.",photo:"photos/red_fort.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Minaret de 72,5m en grès rouge, construit par Qutb ud-Din Aibak en 1193, le plus haut minaret de brique du monde"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Mehrauli, sud de New Delhi, complexe archéologique du sultanat de Delhi"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus haut minaret de brique du monde, Delhi, Inde"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Qutb Minar à Delhi, Inde"}
  ]},
  {name:"Ranakpur — Rajasthan, Inde",lat:25.1167,lng:73.4667,desc:"Le temple jaïn de Ranakpur, construit en 1437, possède 1 444 colonnes de marbre blanc, toutes sculptées différemment. Sa coupole centrale est soutenue par 20 colonnes disposées en cercle parfait. La structure est si complexe que l'architecte original, Dharna Shah, y consacra toute sa fortune.",photo:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Jain_Temple_Ranakpur.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Temple jaïn de Chaturmukha Dharana Vihara (1437), 1 444 colonnes de marbre toutes différentes, dédié à Adinatha"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Forêt d'Aravalli, district de Pali, Rajasthan, à 90 km de Jodhpur"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Temple jaïn aux 1444 colonnes de marbre, Rajasthan, Inde"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Ranakpur à Rajasthan, Inde"}
  ]},
  {name:"Jaisalmer — Rajasthan, Inde",lat:26.9157,lng:70.9083,desc:"La forteresse de Jaisalmer est habitée en continu depuis 900 ans. Environ 3 000 personnes y vivent encore aujourd'hui — hôteliers, commerçants, familles. C'est l'une des seules forteresses du monde médiéval encore peuplée.",photo:"photos/jaisalmer.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Fort d'or de grès jaune (1156), l'une des rares forteresses vivantes, Sonar Quila, 99 bastions, désert du Thar"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Désert du Thar, district de Jaisalmer, Rajasthan occidental, à 300 km de Jodhpur"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ville d'or dans le désert du Thar, fort médiéval, Rajasthan"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Jaisalmer à Rajasthan, Inde"}
  ]},
  {name:"Varanasi — Uttar Pradesh, Inde",lat:25.3176,lng:83.0061,desc:"Le Gange à Varanasi est si sacré que les Hindous croient qu'y mourir assure la libération du cycle des renaissances. Des milliers de personnes viennent mourir à Varanasi chaque année, confiés aux «Dom» — les intouchables qui veillent sur les crémations du ghat Manikarnika, actives 24h/24 depuis des siècles.",photo:"photos/varanasi.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Kashi, plus ancienne ville habitée du monde (-3000 av. J.-C.), 87 ghats sur le Gange, crémations à Manikarnika Ghat"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rive ouest du Gange, Varanasi, est de l'Uttar Pradesh"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ville sainte hindoue sur le Gange, crémations et ghats, Inde"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Varanasi à Uttar Pradesh, Inde"}
  ]},
  {name:"Meenakshi Temple — Madurai, Inde",lat:9.9195,lng:78.1193,desc:"Le temple de Meenakshi à Madurai compte 33 000 sculptures sur ses 14 tours (gopurams), chacune peinte de couleurs vives. Les tours sont renduites et repeintes tous les 12 ans lors d'une cérémonie appelée Kumbhabhishekam qui dure plusieurs jours.",photo:"photos/meenakshi_temple.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Meenakshi Amman Temple, 12 gopurams couverts de 33 000 sculptures colorées, consacré à Meenakshi et Sundareshvara"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre de Madurai, Tamil Nadu, à 450 km de Chennai"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Temple dravidien aux tours sculptées multicolores, Madurai, Tamil Nadu"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Meenakshi Temple à Madurai, Inde"}
  ]},
  {name:"Ellora Caves — Maharashtra, Inde",lat:20.0268,lng:75.1795,desc:"Les grottes d'Ellora abritent le temple Kailash, taillé à partir d'un seul bloc de roche de haut en bas — une prouesse sans équivalent. Pour extraire le temple, il fallut retirer 200 000 tonnes de roche sur 100 ans, sans aucun plan préalable ne semble-t-il.",photo:"photos/ellora_caves.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"34 monastères et temples taillés dans la roche basaltique du IVe au XIe siècle, Kailash Temple monolithique de 8 000 tonnes excavé"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"District d'Aurangabad, Maharashtra, à 30 km d'Aurangabad, Deccan"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grottes rupestres bouddhistes, hindoues et jaïnes, Maharashtra, Inde"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Ellora Caves à Maharashtra, Inde"}
  ]},
  {name:"Shibuya Crossing — Tokyo, Japon",lat:35.6595,lng:139.7006,desc:"Le carrefour de Shibuya traite 500 000 piétons par jour. Contrairement à ce que beaucoup pensent, le «scramble crossing» n'est pas une invention japonaise — il fut importé de Los Angeles dans les années 1970. Tokyo l'a simplement porté à son paroxysme.",photo:"photos/shibuya_crossing.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Carrefour piéton de Shibuya, 3 000 personnes par feu vert, Scramble Square, Love-Hachi le chien fidèle"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier de Shibuya, arondissement Shibuya, au pied de la gare"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Carrefour piéton le plus fréquenté du monde, Shibuya, Tokyo"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Shibuya Crossing à Tokyo, Japon"}
  ]},
    {name:"Nara — Japon (Grand Bouddha)",lat:34.6884,lng:135.8395,desc:"Le T?dai-ji de Nara abrite le plus grand Bouddha en bronze du monde — 15 mètres et 500 tonnes. Une narine de l'une de ses colonnes de bois a exactement la taille du nez du Bouddha : quiconque passe à travers est assuré d'atteindre l'illumination. Des centaines de touristes tentent chaque jour de se glisser dans ce trou.",photo:"photos/nara.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"T?dai-ji, temple bouddhiste de 745, plus grand bâtiment en bois du monde, Daibutsu-den abritant le Bouddha de bronze de 15m"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Nara Park, préfecture de Nara, île de Honsh?, à 45 km d'Osaka, daims en liberté"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Immense Bouddha en bronze de 15 m dans le plus grand bâtiment en bois du monde, première capitale du Japon"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Nara au Japon (Grand Bouddha)"}
  ]},
  {name:"Itsukushima — Hiroshima, Japon",lat:34.2959,lng:132.3197,desc:"La bombe atomique d'Hiroshima n'a pas détruit le Dôme de Genbaku uniquement parce qu'elle explosa presque exactement au-dessus de lui. La déflagration verticale épargna le bâtiment qu'une onde horizontale aurait rasé. Il est maintenant symbole universel de paix.",photo:"photos/itsukushima.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Torii flottant de Miyajima, grand portail shinto orange dans la mer, île sacrée où naissances et morts étaient interdites"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île de Miyajima, mer intérieure de Seto, préfecture d'Hiroshima"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Torii flottant sacré dans la mer, île de Miyajima, Hiroshima"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Itsukushima à Hiroshima, Japon"}
  ]},
  {name:"Hiroshima Peace Memorial — Japon",lat:34.3955,lng:132.4536,desc:"La bombe atomique d'Hiroshima n'a pas détruit le Dôme de Genbaku uniquement parce qu'elle explosa presque exactement au-dessus de lui. La déflagration verticale épargna le bâtiment qu'une onde horizontale aurait rasé. Il est maintenant symbole universel de paix.",photo:"photos/hiroshima_peace_memorial.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Genbaku Dome, Dôme de la bombe A, seul bâtiment debout à l'épicentre du 6 août 1945, 600m de l'hypocentre"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île de Nakajimacho, bord de l'?ta, Hiroshima"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Dôme de la bombe atomique d'Hiroshima, mémorial UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Hiroshima Peace Memorial au Japon"}
  ]},
  {name:"Demilitarized Zone — Corée",lat:37.9526,lng:126.6708,desc:"La zone démilitarisée coréenne est paradoxalement l'une des zones les plus préservées d'Asie — 70 ans sans activité humaine. Des grues de Mandchourie en voie d'extinction y nichent, des tigres de Sibérie y ont été aperçus. Les deux tours de Panmunjom, entourées de champs de mines, restent le seul endroit où soldats nord et sud-coréens se font face à 50 centimètres.",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Zone démilitarisée coréenne, bande de 4 km de large sur 248 km, Panmunjeom (village de la paix/tente bleue), depuis 1953"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Frontière militarisée entre deux États divisés, 38e parallèle nord, zone tampon"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Zone démilitarisée entre les deux Corées, Panmunjeom"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Zone Démilitarisée (DMZ) entre les deux Corées"}
  ]},
  {name:"Jeju Island — Corée du Sud",lat:33.4996,lng:126.5312,desc:"L'île de Jeju est gouvernée par les haenyeo — les femmes plongeuses qui récoltent ormeaux, oursins et pieuvres en apnée depuis 1 500 ans. Ces femmes, qui plongent jusqu'à 20 mètres sans équipement, peuvent travailler jusqu'à 70 ans.",photo:"photos/jeju_island.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Île volcanique du Hallasan (1 950 m), Manjanggul (7,4 km de tube de lave), haenyeo plongeuses, UNESCO triple couronne"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province insulaire volcanique, mer Jaune, à 80 km au sud-ouest du continent"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Île volcanique aux tubes de lave et plongeuses haenyeo, Corée du Sud"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Île de Jeju, Corée du Sud"}
  ]},
  {name:"Taroko Gorge — Taïwan",lat:24.1569,lng:121.6219,desc:"La gorge de Taroko est creusée dans le marbre par la rivière Liwu depuis 2 millions d'années. À certains endroits, les parois de marbre veiné ne laissent passer que 2 à 3 mètres de lumière. La route qui la traverse fut construite de 1956 à 1960 par 10 000 soldats — 212 y perdirent la vie.",photo:"photos/taroko_gorge.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Gorge de marbre de 19 km taillée par une rivière dans une chaîne montagneuse, Tunnel des neuf tournants"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Parc national d'une île montagneuse d'Asie de l'Est, gorge de marbre et tunnels"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Gorge de marbre spectaculaire dans les Alpes centrales, Taïwan"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Gorges de Taroko à Taïwan"}
  ]},
  {name:"Halong Bay — Vietnam (Cat Ba)",lat:20.7833,lng:107.05,desc:"L'île de Cat Ba est la plus grande île de la baie d'Ha Long. Sa forêt primaire abrite le langur de Cat Ba, l'un des primates les plus menacés au monde avec seulement 60 à 70 individus survivants. Ses grottes préhistoriques furent habitées dès -7000 av. J.-C.",photo:"photos/halong_bay.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Île de Cat Ba, plus grande île de la baie de Ha Long, grottes de Phong Nha, mangroves et village flottant de Cai Beo"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Archipel du golfe du Tonkin, province côtière nord d'un pays d'Asie du Sud-Est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Île principale de la baie de Ha Long, grottes et mangroves, Vietnam"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Halong Bay au Vietnam (Cat Ba)"}
  ]},
  {name:"Hoi An — Vietnam",lat:15.8794,lng:108.335,desc:"La ville d'Hoi An était le port le plus important d'Asie du Sud-Est aux XVIe et XVIIe siècles, avant que son fleuve ne s'ensable. Son centre historique est si bien conservé qu'il semble suspendu dans le temps, à l'exception des lampions colorés qui s'allument chaque soir.",photo:"photos/hoi_an.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ancien port marchand du XVIe siècle, pont japonais couvert de 1593, maisons chinoises et entrepôts néerlandais, Qu?ng Nam"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province centrale d'un long pays d'Asie du Sud-Est, port marchand du XVe au XVIIe siècle"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ancien port marchand du XVIe siècle aux lanternes colorées, classé UNESCO, province de Qu?ng Nam"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Hoi An au Vietnam"}
  ]},
  {name:"Wat Phra Kaew — Bangkok, Thaïlande",lat:13.7516,lng:100.4919,desc:"Le Bouddha d'Émeraude du temple Phra Kaew ne mesure que 66 cm — une taille modeste pour la statue la plus sacrée de Thaïlande. Taillé dans une seule pièce de jade (et non d'émeraude), il est revêtu de trois costumes différents que le roi change personnellement à chaque saison.",photo:"photos/wat_phra_kaew.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Temple du Bouddha d'Émeraude, dans l'enceinte du Grand Palais, statue de jade de 66cm, vêtements changés 3x par an par le roi"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Ko Rattanakosin, île du Grand Palais, bord du Chao Phraya, Bangkok"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Temple du Bouddha d'Émeraude dans le Grand Palais, Bangkok"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Wat Phra Kaew à Bangkok, Thaïlande"}
  ]},
  {name:"Kuala Lumpur — Tours Petronas, Malaisie",lat:3.1578,lng:101.7119,desc:"Les Tours Petronas de Kuala Lumpur furent conçues par César Pelli en s'inspirant de l'architecture islamique — leurs plans au sol forment deux étoiles à 8 branches entrelacées. La tour 1 (côté gauche en regardant depuis la rue) fut construite par une entreprise japonaise, la tour 2 par une entreprise coréenne.",photo:"photos/kuala_lumpur.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Menara Berkembar Petronas, 451,9 m, conçues par César Pelli, sky bridge au 41e étage reliant les deux tours, 1998-2004"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Golden Triangle d'une grande capitale tropicale, jumelles géantes parmi les plus hautes du monde"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tours jumelles de 452 m reliées par un skybridge au 41e étage, capitale de la Malaisie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Kuala Lumpur à Tours Petronas, Malaisie"}
  ]},
  {name:"Prambanan — Java, Indonésie",lat:-7.752,lng:110.4915,desc:"La légende du temple de Prambanan conte l'histoire d'un prétendant qui dut construire 1 000 temples en une nuit pour gagner la main d'une princesse. À l'aube, n'en ayant érigé que 999, la princesse alluma des feux pour simuler le lever du soleil et le stoppa.",photo:"photos/prambanan.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Complexe de temples hindous trimurti (IXe siècle), 47m de hauteur, dédiés à Brahma, Vishnu et Shiva, dynastie Sanjaya"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Frontière de deux régions d'une grande île tropicale, temple bouddhiste du IXe siècle"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Temples hindous du IXe siècle, Java, Indonésie, UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Prambanan à Java, Indonésie"}
  ]},
  {name:"Kairouan — Tunisie",lat:35.6781,lng:10.0963,desc:"Kairouan est la 4e ville sainte de l'Islam et la plus sainte d'Afrique du Nord. Sa Grande Mosquée, fondée en 670, contient le plus ancien mihrab et le plus ancien minbar encore en place dans le monde islamique.",photo:"photos/kairouan.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Grande Mosquée de Kairouan (Sidi Oqba), fondée en 670 par Uqba ibn Nafi, 4e ville sainte de l'Islam, minaret le plus ancien"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Gouvernorat central du pays, à 160 km au sud de la capitale, 4e ville sainte de l'Islam"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"4e ville sainte de l'Islam, grande mosquée du VIIe siècle, Tunisie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Kairouan en Tunisie"}
  ]},
  {name:"Pyramide de Méroé — Soudan",lat:16.9393,lng:33.7475,desc:"Les pyramides soudanaises de Méroé sont plus nombreuses que celles d'Égypte — on en compte plus de 200 — mais elles sont bien plus étroites et moins connues. Un aventurier italien en fit exploser le sommet de plusieurs au XIXe siècle, croyant y trouver des trésors.",photo:"photos/pyramide_de_meroe.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Nécropole royale de Méroé, 200+ pyramides kushites plus étroites que les égyptiennes (70°), reino de Kush IVe s. av. J.-C."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Désert de Nubie, État de Nahr an-Nil, à 200 km au nord de Khartoum, Soudan"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Pyramides nubienne du royaume de Kush, Soudan, Afrique du Nord-Est"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Pyramides de Méroé au Soudan"}
  ]},
  {name:"Tsingy de Bemaraha — Madagascar",lat:-18.45,lng:44.75,desc:"Les forêts de Tsingy de Madagascar sont des forêts de lames calcaires si acérées qu'elles tranchent les semelles de chaussures. Leur nom malgache signifie «où on ne peut pas marcher pieds nus».",photo:"photos/tsingy_de_bemaraha.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Forêt de pitons calcaires acérés (tsingy en malgache), karst spectaculaire, lémuriens endémiques, UNESCO 1990"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Région Melaky, ouest de Madagascar, province de Mahajanga"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Forêt de pierres calcaires acérées, parc national, Madagascar"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Tsingy de Bemaraha à Madagascar"}
  ]},
  {name:"Chutes Kaieteur — Guyana",lat:5.174,lng:-59.482,desc:"Les chutes Kaieteur du Guyana sont entourées d'une forêt si vierge et inaccessible qu'elles ne furent vues par un Européen qu'en 1870. La seule façon d'y accéder reste un petit avion qui atterrit sur une piste herbeuse en pleine jungle — il n'y a pas de route.",photo:"photos/chutes_kaieteur.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Chute de 226m de hauteur sur la rivière Potaro, 5 fois plus haute que les Niagara, débit de 663 m³/s, tepui du Pakaraima"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Région centrale d'un petit pays d'Amérique du Sud, une des plus puissantes chutes du monde"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Chute de 226 m sur la rivière Potaro, parmi les plus puissantes au monde, jungle guyanaise"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Chutes Kaieteur au Guyana"}
  ]},
  {name:"Lac Rose — Sénégal",lat:14.84,lng:-17.23,desc:"Le lac Retba du Sénégal doit sa couleur rose à une bactérie halophile (Dunaliella salina) qui produit un pigment rouge pour se protéger du sel. Avec une salinité 10 fois supérieure à celle de l'océan, les récolteurs de sel flottent sans effort comme dans la mer Morte.",photo:"photos/lac_rose.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Lac de couleur rose dû à la bactérie Dunaliella salina, salinité de 380g/L (10x l'océan), ancien terminus d'un célèbre rallye auto"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Presqu'île à 35 km au nord-est d'une grande capitale ouest-africaine, lac saumâtre rose"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Lac d'un rose naturel intense dû à une bactérie halophile, salinité 10× l'océan, Sénégal"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Lac Rose au Sénégal"}
  ]},
  {name:"Parc des Volcans — Rwanda",lat:-1.4833,lng:29.5667,desc:"Le parc des Volcans du Rwanda abrite environ 480 gorilles des montagnes — soit près de la moitié de la population mondiale. Les tourists paient 1 500 dollars par personne pour une heure de trekking. Dian Fossey, qui y étudia les gorilles pendant 18 ans, fut retrouvée assassinée dans son camp en 1985.",photo:"photos/parc_des_volcans.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Parc Virunga rwandais, habitat des gorilles des montagnes, Dian Fossey y étudia les gorilles de 1967 à 1985"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Chaîne des Virunga, tripoint de trois pays d'Afrique centrale, gorilles de montagne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Gorilles des montagnes de Dian Fossey, Virunga, Rwanda"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Parc des Volcans au Rwanda"}
  ]},
  {name:"Erg Chebbi — Maroc",lat:31.15,lng:-3.95,desc:"L'Erg Chebbi, avec ses dunes atteignant 150 mètres près de Merzouga, est l'une des deux seules vraies mers de sable du Maroc. La dune la plus haute change de couleur selon la lumière : orangée le matin, rouge vif à midi, dorée au coucher du soleil. Des bivouacs nomades permettent de dormir sous les étoiles du Sahara.",photo:"photos/erg_chebbi.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Dunes de sable de 150m de haut à Merzouga, seules vraies dunes de sable, bivouacs de nuit sous les étoiles"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province d'Errachidia, bordure du Sahara, à 50 km de Rissani, plus grande erg du pays"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Dunes de sable de 150 m de haut près de Merzouga, seules vraies dunes du Maroc"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Erg Chebbi au Maroc"}
  ]},
  {name:"Djémila — Algérie",lat:36.3167,lng:5.7333,desc:"Djémila (anciennement Cuicul) est considérée comme le meilleur exemple de cité romaine montagnarde d'Afrique du Nord. Ses temples, forums et théâtres du IIe siècle sont restés intacts pendant 1 500 ans sous les décombres. L'écrivain Albert Camus y trouva l'inspiration pour son essai «Le Vent à Djémila».",photo:"photos/djemila.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cuicul, cité romaine fondée sous Nerva (96 ap. J.-C.), forum, temples, arc de Caracalla, amphithéâtre, UNESCO 1982"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Massif du Bibans, 900m d'altitude, hauts plateaux du nord-est du pays"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité romaine du IIe siècle parmi les mieux conservées d'Afrique du Nord, classée UNESCO, Algérie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Djémila en Algérie"}
  ]},
  {name:"Leptis Magna — Libye",lat:32.6386,lng:14.295,desc:"Leptis Magna est l'une des cités romaines les mieux conservées du monde — protégée pendant des siècles par les sables du Sahara. Lieu de naissance de l'empereur Septime Sévère, elle fut embellie de monuments colossaux à sa gloire. Son arc de triomphe à quatre faces est unique dans l'Empire romain.",photo:"photos/leptis_magna.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cité romaine natale de Septime Sévère, arc de triomphe, amphithéâtre, basilique, forum aux 52 colonnes, UNESCO 1982"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Khoms, bord de la Méditerranée, Libye, à 130 km à l'est de Tripoli"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité romaine natale de Septime Sévère, les mieux préservées au monde, côte méditerranéenne de Libye"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Leptis Magna en Libye"}
  ]},
  {name:"Aksum — Éthiopie",lat:14.1305,lng:38.7167,desc:"Les obélisques d'Aksoum sont des stèles funéraires monolithiques pouvant atteindre 33 mètres. L'une d'elles, emportée par Mussolini en 1937, fut finalement restituée à l'Éthiopie en 2008 après 70 ans de négociations.",photo:"photos/aksum.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Obelisques d'Axoum (stèles), capitale de l'Empire aksumite (Ier-VIIe siècles), église Notre-Dame de Sion abritant (selon tradition"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Région nord d'un pays d'Afrique de l'Est, obélisques et stèles antiques"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ancienne capitale d'un grand empire africain, obélisques funéraires et reliques chrétiennes, Tigré, Éthiopie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Aksum en Éthiopie"}
  ]},
  {name:"Rift Valley — Kenya (Lac Nakuru)",lat:-0.3667,lng:36.0833,desc:"Le lac Nakuru, lac sodique alcalin du Rift africain, accueillait jusqu'à 2 millions de flamants roses — la plus grande concentration de flamants au monde. La montée des eaux depuis 2010 a modifié la salinité et chassé les flamants, mais le lac reste un sanctuaire pour les rhinocéros noirs et blancs du Kenya.",photo:"photos/rift_valley.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Lake Nakuru, célèbre pour ses nuées de flamants roses (jusqu'à 2 millions), rhinocéros blancs et noirs, rift est-africain"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Grande Vallée du Rift, province de la même vallée, à 160 km de la capitale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Lac sodique aux nuées de flamants roses, sanctuaire aux rhinocéros noirs et blancs, Kenya"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Rift Valley au Kenya (Lac Nakuru)"}
  ]},
  {name:"Stone Town — Zanzibar, Tanzanie",lat:-6.1633,lng:39.19,desc:"Zanzibar est le lieu de naissance de Freddie Mercury, le chanteur de Queen. Sa maison natale dans Stone Town est devenue un lieu de pèlerinage pour les fans du monde entier. Il quitta l'île à 7 ans pour ne plus jamais y revenir.",photo:"photos/stone_town.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ville des Pierres, centre historique de Zanzibar City, marché aux esclaves, maison natale de Freddie Mercury, architecture swahili"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île principale d'un archipel de l'océan Indien, canal du Mozambique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Vieille cité swahili classée UNESCO, marché aux esclaves, maison natale de Freddie Mercury, Tanzanie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Stone Town à Zanzibar, Tanzanie"}
  ]},
  {name:"Sossusvlei — Namibie",lat:-24.7333,lng:15.35,desc:"Les dunes de Sossusvlei sont parmi les plus hautes du monde avec 325 mètres. Leur couleur rouge-orangé intense vient de l'oxydation du fer contenu dans le sable. La plaine de Deadvlei, anciennement un lac, arbore des arbres camelthorn morts il y a 900 ans — conservés par la sécheresse extrême.",photo:"photos/sossusvlei.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Dunes étoilées de sable rouge ocre dont Dune 45 et Big Daddy (325 m), Deadvlei (arbres morts de 900 ans), désert du Namib"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Parc national d'un désert côtier, à 60 km de Sesriem, dunes orange aux contours parfaits"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Dunes de sable rouge et arbres morts de Deadvlei, Namibie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Sossusvlei en Namibie"}
  ]},
  {name:"Chobe — Botswana",lat:-17.8,lng:24.5,desc:"Le parc de Chobe accueille la plus grande concentration d'éléphants d'Afrique avec 120 000 individus. En saison sèche, les éléphants viennent par centaines boire à la rivière Chobe — créant des embouteillages d'éléphants sur les rives qui font le bonheur des photographes.",photo:"photos/chobe.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Parc national au nord d'un pays enclavé, plus grande concentration d'éléphants d'Afrique (120 000), rivière Chobe"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Nord d'un pays enclavé d'Afrique australe, quadripoint de quatre pays, plus grand troupeau d'éléphants"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande concentration d'éléphants d'Afrique, 120 000 individus, nord du Botswana"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Chobe au Botswana"}
  ]},
  {name:"Empire State Building — New York, USA",lat:40.7484,lng:-73.9857,desc:"L'Empire State Building fut construit à une cadence record de 4,5 étages par semaine. En 1945, un bombardier B-25 percuta le 79e étage dans le brouillard, tuant 14 personnes — le bâtiment resta ouvert au public le jour même.",photo:"photos/chobe.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"102 étages, 443m (sans antenne), construit en 410 jours (1930-31), plus haut bâtiment du monde jusqu'en 1971"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"350 Fifth Avenue, Midtown d'une grande métropole, angle d'une avenue numérotée"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Gratte-ciel Art Déco emblématique de New York, Midtown Manhattan"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Empire State Building à New York, USA"}
  ]},
  {name:"Monument aux soldats inconnus — Washington D.C.",lat:38.8893,lng:-77.0502,desc:"Le Lincoln Memorial à Washington D.C. fut le cadre du discours «I Have a Dream» de Martin Luther King Jr. le 28 août 1963, devant 250 000 manifestants. La statue de Lincoln par Daniel Chester French mesure 5,8 mètres — si Lincoln se levait, il mesurerait 9 mètres. Son regard fixe le Washington Monument.",photo:"photos/monument_aux_soldats_inconnus.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Lincoln Memorial, temple grec de 1922, statue de Lincoln de 5,8m par Daniel Chester French, discours 'I Have A Dream' de MLK en 19"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Extrémité ouest du National Mall, bord du Reflecting Pool, Washington D.C."},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Lincoln Memorial, temple dédié à Lincoln, National Mall, Washington D.C."},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Lincoln Memorial à Washington D.C., États-Unis"}
  ]},
  {name:"Kennedy Space Center — Floride, USA",lat:28.5731,lng:-80.649,desc:"Le Kennedy Space Center fut le berceau du programme Apollo. Sa Vehicle Assembly Building (VAB), haute de 160 mètres, est si grande que des nuages se forment parfois à l'intérieur par temps humide. Depuis 2014, SpaceX loue le pas de tir 39A d'où décollèrent les missions Apollo.",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Vehicle Assembly Building (160m), Launch Complex 39 d'où partirent Apollo 11 et les navettes, inauguré en 1962"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Merritt Island, comté de Brevard, côte est de la Floride, à 80 km d'Orlando"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Centre spatial de la NASA, lanceurs Apollo et navettes, Floride"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Kennedy Space Center à Floride, USA"}
  ]},
  {name:"Mount Rushmore — Dakota du Sud, USA",lat:43.8791,lng:-103.4591,desc:"Le Mount Rushmore fut sculpté entre 1927 et 1941 par Gutzon Borglum et 400 ouvriers à la dynamite et au burin. Derrière la tête de Lincoln, une salle secrète fut creusée pour abriter des archives de l'histoire américaine — elle attend toujours sa porte étanche. Le projet original prévoyait de sculpter les présidents jusqu'à la taille.",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Sculptures de 18m des présidents Washington, Jefferson, Roosevelt et Lincoln taillées par Gutzon Borglum de 1927 à 1941"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Black Hills, comté de Pennington, Dakota du Sud, à 25 km de Rapid City"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Monument aux 4 présidents sculpté dans la roche, Dakota du Sud"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Mount Rushmore à Dakota du Sud, USA"}
  ]},
  {name:"New Orleans French Quarter — USA",lat:29.9584,lng:-90.0644,desc:"La Nouvelle-Orléans est construite sur un delta marécageux, en partie sous le niveau de la mer. Après l'ouragan Katrina en 2005, 80% de la ville fut inondée. Le fait que ses habitants aient rebâti et que la musique soit revenue plus forte encore est devenu un symbole de résilience américaine.",photo:"photos/new_orleans_french_quarter.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Vieux Carré, quartier colonial français fondé en 1718, balcons en fer forgé de Bourbon Street, jazz de Preservation Hall"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bord du Mississippi, centre historique de La Nouvelle-Orléans, Louisiane"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"French Quarter de La Nouvelle-Orléans, berceau du jazz, Louisiane"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le New Orleans French Quarter en USA"}
  ]},
  {name:"Mesa Verde — Colorado, USA",lat:37.1853,lng:-108.4618,desc:"Les habitations rupestres de Mesa Verde furent abandonnées subitement vers 1300 — les archéologues ne savent toujours pas pourquoi. Sécheresse prolongée, conflits ou migration spirituelle ? La civilisation ancestrale pueblo disparut sans laisser d'explication écrite.",photo:"photos/mesa_verde.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cliff Palace, plus grande habitation rupestre d'Amérique du Nord, 150 pièces et 23 kivas, culture ancestrale pueblo XIIIe s."},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Comté de Montezuma, sud-ouest du Colorado, Rocheuses américaines"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Habitations rupestres ancestrales pueblo du XIIIe siècle, plus grandes d'Amérique du Nord, Colorado"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Mesa Verde à Colorado, USA"}
  ]},
  {name:"Graceland — Memphis, Tennessee, USA",lat:35.0472,lng:-90.0232,desc:"Graceland fut achetée par Elvis Presley en 1957 pour 102 500 dollars à l'âge de 22 ans. Il y vécut jusqu'à sa mort en 1977. La maison est restée quasi intacte depuis lors — son style «jungle room» avec fontaine d'intérieur et fourrure synthétique est une capsule temporelle des années 70. 650 000 personnes la visitent chaque année.",photo:"photos/graceland.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Résidence d'Elvis Presley achetée en 1957 pour 102 500$, Jungle Room, salle de billard, tombeau dans le Jardin de Méditation"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Elvis Presley Boulevard, Whitehaven, Memphis, Tennessee"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Manoir d'Elvis Presley, pèlerinage du rock'n'roll, Memphis, Tennessee"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Graceland à Memphis, Tennessee, USA"}
  ]},
  {name:"Banff — Alberta (Lac Moraine), Canada",lat:51.3217,lng:-116.186,desc:"Le lac Moraine doit sa couleur turquoise intense à la «farine de roche» produite par les glaciers environnants qui broient la roche en particules infimes. Ces particules en suspension diffractent la lumière bleue. Le lac fut l'image du billet de 20 dollars canadien de 1969 à 1979.",photo:"photos/graceland.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Lac Moraine, billet de 20$ canadien, eau turquoise due à la farine de roche glaciaire, Vallée des Dix Pics, Rocheuses"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Parc national de Banff, Improvement District No.9, Alberta, à 56 km de Banff Village"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Lac aux eaux turquoise dû à la farine de roche glaciaire, Vallée des Dix Pics, Rocheuses canadiennes"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Banff à Alberta (Lac Moraine), Canada"}
  ]},
  {name:"Whistler — Colombie-Britannique, Canada",lat:50.1163,lng:-122.9574,desc:"Whistler Blackcomb est le plus grand domaine skiable d'Amérique du Nord avec 8 171 hectares de terrain skiable. Sa Peak 2 Peak gondola, reliant les deux sommets à 436 mètres au-dessus d'une vallée, est la télécabine la plus longue et la plus haute du monde avec son tronçon de 3,03 km sans pylône.",photo:"photos/whistler.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Station de ski Whistler Blackcomb, plus grand domaine skiable d'Amérique du Nord, Peak 2 Peak gondola record, JO 2010"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Sea-to-Sky Corridor, montagnes de la côte Pacifique, à 125 km d'une grande ville côtière"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand domaine skiable d'Amérique du Nord, télécabine record entre deux sommets, Colombie-Britannique"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Whistler à Colombie-Britannique, Canada"}
  ]},
  {name:"Parc Torres del Paine — Chili",lat:-51,lng:-73,desc:"Le nom «Paine» (prononcé Paï-né) vient du peuple Tehuelche qui signifie «bleu» en référence à la couleur des glaciers. Ces «Cornes de Paine» émergent de champs de glace vieux de 12 000 ans et alimentent des rivières qui coulent jusqu'à l'Atlantique.",photo:"photos/parc_torres_del_paine.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Torri granitiques de 2 500m (Cuernos del Paine), glacier Grey, guanacos, pumas, plésiosaure fossilisé, Patagonie chilienne"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province d'Última Esperanza, Región de Magallanes, Patagonie chilienne, à 400 km de Punta Arenas"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Tours de granit et glacier, Torres del Paine, Patagonie chilienne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Parc Torres del Paine au Chili"}
  ]},
  {name:"Atacama — Chili",lat:-22.9087,lng:-68.2003,desc:"Le désert d'Atacama est si sec que certaines de ses zones n'ont jamais reçu de pluie mesurable depuis que les instruments météo existent. Pourtant, une «explosion florale» survient certaines années après des pluies exceptionnelles, couvrant le désert de fleurs en 24 heures.",photo:"photos/atacama.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Désert le plus aride du monde, Valle de la Luna, geysers del Tatio à 4 300m, ALMA observatory, salar d'Atacama au lithium"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Entre la cordillère des Andes et la côte Pacifique, désert le plus aride du monde"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Désert le plus aride du monde, geysers à 4 300 m, salar au lithium, nord du Chili"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Atacama au Chili"}
  ]},
  {name:"Galería Kaufmann — Buenos Aires, Argentine",lat:-34.613,lng:-58.3772,desc:"Le Teatro Colón de Buenos Aires, inauguré en 1908, est considéré comme l'un des cinq meilleurs opéras au monde. Sa salle de 2 500 places jouit d'une acoustique légendaire. Enrico Caruso, Maria Callas et Rudolf Noureev s'y sont produits. Sa coupole de 20 mètres fut peinte par des artistes argentins en 2010.",photo:"photos/galeria_kaufmann.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Teatro Colón, inauguré en 1908, 2 500 places, acoustique dans le top 5 mondial, Toscanini et Caruso y ont chanté"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Quartier Centro d'une grande capitale sud-américaine, face à une grande place"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Teatro Colón, opéra mythique de Buenos Aires, Argentine"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Galería Kaufmann à Buenos Aires, Argentine"}
  ]},
  {name:"Îles Galápagos — Équateur (Fernandina)",lat:-0.3742,lng:-91.55,desc:"L'île Fernandina des Galápagos est la plus jeune et la plus préservée de l'archipel — aucune espèce envahissante n'y a jamais établi de population permanente. Son volcan La Cumbre est l'un des plus actifs au monde, en éruption quasi permanente. En 2019, une tortue géante de Fernandina fut retrouvée vivante — son espèce était crue éteinte.",photo:"photos/galeria_kaufmann.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Isla Fernandina, île la plus jeune et pristine, volcan La Cumbre actif, iguanes marins uniques, otaries, Darwin finch"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Archipel volcanique isolé dans le Pacifique, à 1 000 km du continent, biodiversité unique"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Galápagos, îles de Darwin, faune endémique unique, Équateur"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Îles Galápagos en Équateur (Fernandina)"}
  ]},
  {name:"Tikal — Guatemala",lat:17.222,lng:-89.6237,desc:"Les temples mayas de Tikal servirent de décor à la planète Yavin 4 dans Star Wars en 1977. George Lucas fit filmer les séquences de la Rébellion dans la forêt guatémaltèque, attirant depuis des millions de fans.",photo:"https://upload.wikimedia.org/wikipedia/commons/0/06/Tikal_Temple1_2006_08_11.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cité maya classique (Ier s. - Xe s.), Tempio I (Gran Jaguar, 47m), 6 pyramides dépassant la canopée, forêt tropicale du plateau gu"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Département tropical d'Amérique centrale, jungle de la Selva Maya, cité maya"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité maya classique aux temples dépassant la canopée, nord du Guatemala, célèbre pour Star Wars"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le site maya de Tikal au Guatemala"}
  ]},
  {name:"Monteverde — Costa Rica",lat:10.3,lng:-84.8167,desc:"La forêt de Monteverde au Costa Rica fut fondée par des Quakers américains qui refusèrent le service militaire et émigrèrent en 1951. En achetant et protégeant les terres, ces pacifistes créèrent inadvertamment l'une des réserves naturelles les plus visitées d'Amérique centrale.",photo:"photos/monteverde.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Réserve biologique du Nuage de Monteverde, 90 espèces d'orchidées, quetzal resplendissant, ponts suspendus dans la canopée"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Cordillère de Tilarán, province de Puntarenas, Costa Rica, à 167 km de San José"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Réserve de forêt nuageuse aux 90 espèces d'orchidées et quetzals, fondée par des Quakers, Costa Rica"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Réserve de Monteverde au Costa Rica"}
  ]},
  {name:"Canal de Corinthe — Grèce",lat:37.9378,lng:22.987,desc:"Le canal de Corinthe, long de 6,3 km et large de seulement 21 mètres, fut creusé de 1882 à 1893 dans le calcaire de l'isthme. L'idée remontait à l'Antiquité — Néron en creusa lui-même les premiers coups de pioche en 67 ap. J.-C. avant d'abandonner. Ses parois de 90 mètres donnent aux bateaux l'impression de naviguer dans un gouffre.",photo:"photos/monteverde.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Canal de 6,3 km creusé de 1882 à 1893, 8m de large et 8m de profondeur, parois rocheuses de 90m, rêve de Néron"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Isthme séparant la péninsule du Péloponnèse du continent, canal de 6 km creusé en 1893"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Canal traversant l'isthme de Corinthe, Grèce"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Canal de Corinthe en Grèce"}
  ]},
  {name:"Santorin — Grèce",lat:36.4618,lng:25.376,desc:"Santorin est le vestige d'un volcan géant dont l'éruption vers -1600 fut l'une des plus puissantes de l'Histoire humaine. Elle provoqua un tsunami dévastateur pour la civilisation minoenne de Crète. Certains historiens pensent que cette catastrophe donna naissance au mythe de l'Atlantide chez Platon.",photo:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Santorini_Montage_L.png",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Thira, caldeira volcanique de 12x7km, maisons blanches à dômes bleus d'Oia, coucher de soleil, éruption minoenne -1600"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Archipel de Santorin (Cyclades), mer Égée, à 250 km d'Athènes"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Caldeira volcanique aux maisons blanches et dômes bleus, coucher de soleil légendaire, Cyclades, Grèce"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Santorin en Grèce"}
  ]},
  {name:"Mykonos — Grèce",lat:37.4415,lng:25.344,desc:"Mykonos, île des Cyclades, fut pendant des siècles un repaire de pirates avant de devenir, dans les années 1960, une destination de la jet-set internationale. Ses célèbres moulins à vent, construits par les Vénitiens au XVIe siècle, broyaient le blé des îles voisines pour alimenter les flottes marchandes.",photo:"photos/mykonos.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Île des Cyclades, Chora aux ruelles labyrinthiques, Kato Mili (5 moulins à vent), port mondain des Grecs"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Cyclades centrales, mer Égée, à 150 km d'Athènes"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Île blanche des Cyclades aux moulins à vent vénitiens, ruelles labyrinthiques, mer Égée"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Mykonos en Grèce"}
  ]},
  {name:"Delphes — Grèce",lat:38.4824,lng:22.501,desc:"L'oracle de Delphes était si influent que les Grecs et les rois étrangers venaient le consulter avant toute décision majeure. La Pythie rendait ses oracles dans une transe causée par des vapeurs géologiques — des chercheurs ont confirmé en 2001 l'existence de failles émettant de l'éthylène sous le temple d'Apollon.",photo:"photos/mykonos.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Oracle de Delphes (Temple d'Apollon), nombril du monde (omphalos), Pythie rendant ses oracles, flanc du Parnasse, UNESCO"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Flanc sud du mont Parnasse, Phocide centrale, à 180 km d'Athènes"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Site de l'Oracle le plus consulté de l'Antiquité, nombril du monde, flanc du Parnasse, Grèce"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Delphes en Grèce"}
  ]},
  {name:"Épidaure — Grèce",lat:37.5979,lng:23.0765,desc:"Le théâtre d'Épidaure est célèbre pour son acoustique prodigieuse : depuis le dernier rang, à 60 mètres de la scène, on entend parfaitement une pièce de monnaie tomber au centre de l'orchestra. Cette perfection acoustique résulte d'un angle de 26° des gradins calculé pour absorber les bruits de fond.",photo:"photos/epidaure.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Théâtre d'Épidaure de 14 000 places du IVe s. av. J.-C. par Polyclète le Jeune, acoustique parfaite, utilisé encore aujourd'hui"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Sanctuaire d'Asclépios, Argolide, Péloponnèse, à 150 km d'Athènes"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Théâtre grec du IVe siècle à l'acoustique prodigieuse, 14 000 places encore utilisées, Péloponnèse"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Épidaure en Grèce"}
  ]},
  {name:"Olympie — Grèce",lat:37.6386,lng:21.63,desc:"Les Jeux olympiques antiques se tinrent à Olympie tous les quatre ans pendant 1 169 ans, de -776 à 394 ap. J.-C. La flamme olympique est allumée ici à chaque édition moderne par le soleil concentré dans une coupe parabolique. Le site abrite les ruines du temple de Zeus et de sa statue chryséléphantine.",photo:"photos/olympie.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Sanctuaire de Zeus, berceau des Jeux Olympiques (-776 av. J.-C.), statue chryséléphantine de Zeus (merveille du monde), palestre"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Confluence de l'Alphée et du Cladée, Élide, Péloponnèse occidental"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Berceau des Jeux Olympiques, sanctuaire de Zeus, Péloponnèse"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Olympie en Grèce"}
  ]},
  {name:"Mont Etna — Sicile, Italie",lat:37.751,lng:14.9934,desc:"L'Etna est le volcan le plus actif d'Europe avec une éruption presque chaque année. Ses coulées de lave fertilisent le sol sicilien, ce qui explique pourquoi les habitants ne l'abandonnent pas malgré le risque — les tomates de ses flancs sont parmi les meilleures du monde.",photo:"photos/mont_etna.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Stratovolcan de 3 357 m, plus haut et actif volcan d'Europe, 250 éruptions historiques, forgeron Héphaïstos selon la mythologie"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province de Catane, nord-est de la Sicile, visible depuis la mer Ionienne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Volcan Etna, plus haut et actif d'Europe, Sicile, Italie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Mont Etna à Sicile, Italie"}
  ]},
  {name:"Tropea — Calabre, Italie",lat:38.6764,lng:15.8954,desc:"Tropea est perché sur une falaise de tuf volcanique surplombant une plage de sable blanc et une mer turquoise d'une clarté exceptionnelle. Classée parmi les plus belles villes d'Italie, elle est célèbre pour sa cipolla rossa IGP — un oignon rouge doux si réputé qu'on en fait des confitures, des bières et des glaces.",photo:"photos/tropea.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Borgo médiéval sur falaise de tuf, Santa Maria dell'Isola sur rocher, oignon rouge IGP, mer Tyrrhénienne, Calabre"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province de Vibo Valentia, Calabre, mer Tyrrhénienne, extrême sud de la botte"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Village médiéval sur falaise de tuf dominant une plage blanche, mer Tyrrhénienne, Calabre"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Tropea à Calabre, Italie"}
  ]},
  {name:"Valle d'Itria — Puglia, Italie",lat:40.7322,lng:17.2376,desc:"La Valle d'Itria abrite Alberobello et ses trulli, mais aussi Locorotondo, Ostuni et Cisternino — des villages blancs perchés sur des collines couvertes d'oliviers et de vignes. La région produit la Primitivo et le Negroamaro, deux des vins rouges les plus puissants d'Italie, longtemps utilisés pour «booster» les vins du Nord.",photo:"photos/valle_d_itria.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Alberobello, village aux trulli (constructions en pierre sèche conique sans mortier), patrimoine UNESCO depuis 1996, Rione Monti"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Vallée d'Itria, province de Bari, Puglia, village aux toits coniques sans mortier"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Alberobello, maisons coniques trulli, Puglia, Italie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Valle d'Itria à Puglia, Italie"}
  ]},
  {name:"Civita di Bagnoregio — Latium, Italie",lat:42.6276,lng:12.1136,desc:"Civita di Bagnoregio est surnommée «la ville mourante» — son piton de tuf s'érode de 2 mètres par an, et ses 12 habitants permanents ne sont reliés au monde que par un pont piéton unique. Fondée par les Étrusques il y a 2 500 ans, la ville rétrécit inexorablement. Dans quelques décennies, il ne restera peut-être qu'un rocher nu.",photo:"photos/civita_di_bagnoregio.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cité mourant sur piton de tuf, 12 habitants permanents, reliée par un pont piéton unique depuis 1965, fondée par les Étrusques"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province de Viterbe, Latium septentrional, à 120 km, vallée des gorges du Calanchi"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité étrusque mourante sur piton de tuf, reliée au monde par un seul pont piéton, Latium"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Civita di Bagnoregio à Latium, Italie"}
  ]},
  {name:"Cinque Terre — Ligurie, Italie",lat:44.1461,lng:9.6439,desc:"Les terrasses viticoles des Cinque Terre furent construites à la main sans machines sur des falaises verticales. Des siècles de travail ont créé plus de 100 km de murs de pierres sèches — plus que la Grande Muraille de Chine à l'échelle du territoire.",photo:"photos/cinque_terre.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"5 villages (Monterosso, Vernazza, Corniglia, Manarola, Riomaggiore) accrochés aux falaises, vignobles en terrasses, UNESCO"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Côte ligure, province de La Spezia, Ligurie, entre Gênes et La Spezia"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cinq villages colorés accrochés à des falaises, vignobles en terrasses, Ligurie, UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Cinque Terre à Ligurie, Italie"}
  ]},
  {name:"Portofino — Ligurie, Italie",lat:44.3031,lng:9.2097,desc:"Portofino, village de 500 habitants, est l'une des destinations les plus chères d'Europe. Ses maisons en trompe-l'œil — la façade peinte de fenêtres, balcons et décors imaginaires — sont une tradition ligure vieille de plusieurs siècles. Un week-end de location dans l'une de ces maisons peut coûter autant qu'une voiture.",photo:"photos/cinque_terre.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Village de pêcheurs aux maisons peintes en trompe-l'œil, Castello Brown (1870), Piazzetta centro mondain, golfe du Tigullio"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Promontoire de Portofino, province de Gênes, Ligurie, mer Ligure"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Petit village de pêcheurs aux maisons en trompe-l'œil, golfe du Tigullio, Riviera ligure"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Portofino à Ligurie, Italie"}
  ]},
  {name:"Abou Simbel — Égypte",lat:22.336,lng:31.6257,desc:"En 1968, une opération unique dans l'histoire déplaça les temples d'Abou Simbel de 65 mètres en hauteur et en arrière, bloc par bloc, pour les sauver de la montée des eaux du lac Nasser. 50 nations participèrent à ce sauvetage financé par l'UNESCO.",photo:"https://upload.wikimedia.org/wikipedia/commons/d/d2/AbuSimbelEgypt_2007jan9-34_byDanielCsorfoly.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Deux temples rupestres de Ramsès II (-1264 av. J.-C.), déplacés de 65m en 1968 pour le barrage d'Assouan, 4 colosses de 20m"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Lac Nasser, Assouan Governorate, Nubie, extrême sud de l'Égypte, proche frontière soudanaise"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Temples de Ramsès II déplacés pour le barrage d'Assouan, Égypte"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Abou Simbel en Égypte"}
  ]},
  {name:"Wadi Rum — Jordanie",lat:29.5756,lng:35.422,desc:"Les Bédouins de Wadi Rum ont habité ce désert de grès rouge pendant des milliers d'années. Les inscriptions nabatéennes gravées sur les parois retracent les routes commerciales de l'encens et des épices. Lawrence d'Arabie y campa lors de sa campagne arabe de 1917-1918.",photo:"https://upload.wikimedia.org/wikipedia/commons/d/da/21_Lawrence_of_Arabia_Spring_-_Magnificent_Views_at_the_Top_of_the_Trail_-_panoramio.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Vallée de la Lune, grès et granit rouge, pont de Um Fruth (15m), campements bédouins, décors cinématographiques célèbres"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Gouvernorat du sud du pays, désert de grès rouges, proche d'une ville portuaire"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Désert de grès rouge aux pitons de granit, paysage lunaire de Jordanie, campements bédouins"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Wadi Rum en Jordanie"}
  ]},
  {name:"Masada — Israël",lat:31.3157,lng:35.3535,desc:"La chute de Masada en 73 ap. J.-C. fit entrer l'expression «Masada ne tombera plus» dans la culture israélienne moderne. Cette phrase symbolise la détermination à ne jamais capituler — chaque soldat de Tsahal prête serment sur ce site.",photo:"photos/masada.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Forteresse hérodienne sur mesa de 400m, siège romain de 73 ap. J.-C., 960 zélotes préférant le suicide à la capitulation"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"District sud, bord occidental de la mer Morte, désert du Néguev"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Forteresse hérodienne sur une mesa de 400 m, symbole de résistance nationale israélienne, bord de la mer Morte"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Masada en Israël"}
  ]},
  {name:"Mer Morte — Israël/Jordanie",lat:31.559,lng:35.4732,desc:"La mer Morte, à 430 mètres sous le niveau de la mer, est le point le plus bas de la surface terrestre. Sa salinité de 34% (contre 3,5% pour les océans) rend la nage impossible — les baigneurs flottent naturellement sans effort. Elle rétrécit de 1 mètre par an à cause des détournements des eaux du Jourdain.",photo:"photos/masada.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Lac hypersalin à -430m (point le plus bas des terres émergées), 34,2% de sel (10x l'océan), minéraux thérapeutiques"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Vallée du Jourdain, point le plus bas de la surface terrestre, frontière entre deux pays"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Lac hypersalin à 430 m sous le niveau de la mer, point le plus bas des terres émergées, frontière Israël-Jordanie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Mer Morte en Israël/Jordanie"}
  ]},
  {name:"Cappadoce Göreme — Turquie",lat:38.6431,lng:34.8289,desc:"Les cheminées de fées de Cappadoce furent habitées pendant des millénaires. Les premières communautés chrétiennes y creusèrent des villes souterraines entières pour échapper aux persécutions romaines — certaines pouvaient abriter 20 000 personnes sur 8 niveaux.",photo:"photos/cappadoce_goreme.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Vallée de Göreme, cheminées de fées (péribacalar?), 365 pigeonniers taillés dans le tuf, vols en montgolfière à l'aube"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province de Nev?ehir, Anatolie centrale, à 280 km d'Ankara"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cheminées de fées et montgolfières, Cappadoce, Turquie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Cappadoce Göreme en Turquie"}
  ]},
  {name:"Pont Charles — Prague, République Tchèque",lat:50.0865,lng:14.4114,desc:"Le pont Charles de Prague fut construit selon la numérologie médiévale : la première pierre fut posée le 9 juillet 1357 à 5h31 du matin, formant la séquence palindromique 1357 9 7 5 31. Cette date «magique» devait assurer la solidité éternelle du pont.",photo:"photos/pont_charles.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Karl?v most, pont de pierre de 516m construit de 1357 à 1402 par Charles IV, 30 statues baroques, tour de la vieille ville"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Enjambe la Vltava entre la Vieille Ville et Malá Strana, Prague, République Tchèque"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Pont médiéval de 516 m aux 30 statues baroques enjambant la Vltava, Prague"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Pont Charles à Prague, République Tchèque"}
  ]},
  {name:"Horloge astronomique — Prague, République Tchèque",lat:50.0872,lng:14.4205,desc:"L'Orloj de Prague est l'une des horloges astronomiques les plus anciennes encore en fonctionnement (1410). Selon la légende, le conseil municipal fit aveugler son créateur Maître Hanuš pour qu'il ne puisse jamais construire une horloge aussi parfaite ailleurs.",photo:"https://upload.wikimedia.org/wikipedia/commons/2/2d/Czech-2013-Prague-Astronomical_clock_face.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Orloj, horloge astronomique médiévale de 1410 sur la tour de l'hôtel de ville, défilé des 12 apôtres toutes les heures"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Place de la Vieille Ville (Starom?stské nám?stí), Prague, République Tchèque"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Mécanisme médiéval de 1410 sur la tour de l'hôtel de ville, défilé des 12 apôtres toutes les heures, Prague"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Horloge astronomique à Prague, République Tchèque"}
  ]},
  {name:"Château de Bojnice — Slovaquie",lat:48.7796,lng:18.5793,desc:"Le château de Bojnice est le château le plus visité de Slovaquie. Il fut profondément remanié en style néo-gothique romantique au XIXe siècle par le comte János Pálffy qui voulait créer un décor de conte de fées. Ses sous-sols abritent une grotte préhistorique naturelle intégrée au complexe.",photo:"photos/chateau_de_blarney.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Bojnický zámok, romantique château néogothique remanié par Jean-Palffy en 1889, fossé, tour ronde, catacombes, Haute-Nitra"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune d'un pays d'Europe centrale, château de conte de fées, à 20 km d'une ville minière"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus visité des châteaux slovaques, remaniement néogothique romantique au XIXe siècle, Haute-Nitra"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Bojnice en Slovaquie"}
  ]},
  {name:"Château de Hrad Spišský — Slovaquie",lat:49.0004,lng:20.768,desc:"Le château de Spiš est la plus grande forteresse médiévale d'Europe centrale avec ses 41 000 m². Construit au XIIe siècle sur une colline calcaire, il abrita des rois de Hongrie, des comtes palatins et résista à l'invasion mongole de 1241. Un incendie le détruisit partiellement en 1780.",photo:"photos/chateau_de_hrad_spissky.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Spi?ský hrad, plus grand château d'Europe centrale (41 500 m²), fondé au XIIe siècle, Haute Tatra, UNESCO"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Est d'un pays d'Europe centrale, Haute Tatra, plus grande ruine de château médiéval d'Europe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Château de Spi?, plus grande forteresse d'Europe centrale, Slovaquie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château de Spi? (Spi?ský hrad) en Slovaquie"}
  ]},
  {name:"Hallstatt — Autriche",lat:47.5622,lng:13.6493,desc:"Le cimetière de Hallstatt est si petit que les os exhumés après 10-12 ans sont décorés de motifs et placés dans une chapelle à crânes — la Beinhaus. Cette tradition unique perpétue la mémoire des défunts dans une ville où les morts dépassent les vivants.",photo:"photos/chateau_de_hrad_spissky.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Village lacustre du Salzkammergut, 7 000 ans d'exploitation du sel, maisons sur pilotis au bord du Hallstättersee, UNESCO"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Salzkammergut, région lacustre alpine, bord d'un lac, village aux maisons sur l'eau"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Village lacustre de 780 habitants, mine de sel la plus ancienne du monde, Salzkammergut, Autriche"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Hallstatt en Autriche"}
  ]},
  {name:"Opéra de Vienne — Autriche",lat:48.2031,lng:16.3694,desc:"L'Opéra de Vienne présente 300 représentations par an avec quasi zéro répétitions : les chanteurs sont engagés pour un soir seulement. Son célèbre Bal de l'Opéra en février est l'événement mondain le plus couru d'Autriche, diffusé en direct à la télévision nationale.",photo:"photos/opera_de_vienne.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Wiener Staatsoper, inauguré en 1869, Ring style néo-Renaissance, 285 représentations par an, bal de l'Opéra en février"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Opernring 2, 1er arrondissement, sur le Ring, Vienne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Temple de l'opéra de style néo-Renaissance, 285 représentations par an, bal annuel célèbre, Vienne"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Opéra de Vienne en Autriche"}
  ]},
  {name:"Grossglockner — Autriche",lat:47.074,lng:12.693,desc:"Le Grossglockner (3 798 m) est le plus haut sommet d'Autriche et le point culminant de l'arc alpin oriental. Sa route panoramique à péage, l'une des plus belles d'Europe, grimpe à 2 504 mètres avec 36 virages en épingle. Le glacier Pasterze visible depuis la route a reculé de 3,5 km depuis 1850 — le plus rapide recul glaciaire d'Autriche.",photo:"photos/grossglockner.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"3 798 m, plus haut sommet du pays, glaciers Pasterze (7 km), route alpine à péage Grossglockner Hochalpenstraße (1935)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Frontière Carinthie-Salzbourg, Alpes centrales autrichiennes, parc national du Hohe Tauern"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus haut sommet d'Autriche à 3 798 m, glacier de 7 km en recul rapide, route alpine panoramique"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Grossglockner en Autriche"}
  ]},
  {name:"Lac Bled — Slovénie (île)",lat:46.3631,lng:14.0944,desc:"L'île de Bled est la seule île naturelle de Slovénie. Sa cloche, fondue en 1534, est une des cloches «magiques» d'Europe : selon la tradition, les mariés qui gravissent ses 99 marches en portant leur épouse et sonnent la cloche trois fois voient leur vœu exaucé.",photo:"photos/lac_bled.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Otok, île de 2 270 m² avec l'église baroque de l'Assomption, tradition de la cloche aux vœux, seule île naturelle du pays"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Lac glaciaire de Haute-Carniole, Alpes juliennes, île avec église baroque"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Île et église baroque du lac de Bled, Slovénie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Lac Bled en Slovénie (île)"}
  ]},
  {name:"Grottes de Postojna — Slovénie",lat:45.7783,lng:14.2044,desc:"Les grottes de Postojna abritent le «protée» (Proteus anguinus), un amphibien aveugle qui peut vivre jusqu'à 100 ans et rester sans manger 12 ans. Cet animal translucide et dépourvu de pigmentation est surnommé «le dragon de caverne».",photo:"photos/grottes_de_postojna.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Postojnska jama, 24 km de galeries, train électrique souterrain depuis 1872, protée (Proteus anguinus), 2e grotte la plus visitée "},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune de Carniole intérieure, à 50 km de la capitale, plus grande grotte touristique d'Europe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"24 km de galeries karstiques visitables en train électrique, habitat du protée aveugle, Slovénie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Grottes de Postojna en Slovénie"}
  ]},
  {name:"Vallée de la So?a — Slovénie",lat:46.34,lng:13.65,desc:"La So?a (Isonzo en italien) est une rivière aux eaux d\'un bleu-vert émeraude unique, prenant sa source dans les Alpes juliennes slovènes. Sa vallée fut le théâtre des batailles de l\'Isonzo (1915-1917) et est aujourd\'hui un paradis naturel réputé pour ses gorges spectaculaires et sports d\'eau vive.",photo:"photos/vallee_de_franz_josef.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Isonzo, rivière aux eaux émeraude, théâtre des 12 batailles de l'Isonzo (1915-1917), source dans les Alpes juliennes"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Alpes juliennes, Gori?ka, frontière entre deux pays, gorges et eaux émeraude"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Rivière So?a aux eaux émeraude, Alpes juliennes, Slovénie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Vallée de la So?a en Slovénie"}
  ]},
  {name:"Marché central — Budapest, Hongrie",lat:47.487,lng:19.06,desc:"La Grande Halle de Budapest fut inaugurée en 1897 et couvre 10 000 m². Ses galeries du premier étage proposent de la broderie hongroise et du paprika depuis un siècle. Son toit en tuiles vernissées Zsolnay est orné de motifs inspirés de l'art populaire magyar — une caractéristique de l'architecture Art Nouveau budapestois.",photo:"photos/marche_central.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Nagy Vásárcsarnok, plus grande halle couverte du pays (1897), toits en tuiles Zsolnay, paprika, tokay et foie gras"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rive du Danube, grande halle couverte d'une capitale au croisement de l'Europe"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande halle couverte de Hongrie (1897), toits en tuiles Zsolnay colorées, Budapest"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Marché central à Budapest, Hongrie"}
  ]},
  {name:"Thermes Széchenyi — Budapest, Hongrie",lat:47.5189,lng:19.0823,desc:"Les thermes Széchenyi, inaugurés en 1913, sont alimentés par deux sources thermales naturelles jaillissant à 74°C et 77°C. Avec leurs 18 bassins, ils sont les plus grands bains thermaux d'Europe. Les Budapestois y jouent aux échecs dans les piscines extérieures — une tradition photographiée dans le monde entier.",photo:"photos/thermes_szechenyi.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Széchenyi gyógyfürd?, plus grands bains thermaux d'Europe (1913), eau à 74-76°C, 3 piscines extérieures, Városliget"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Városliget, parc urbain d'une capitale danubienne, complexe thermal néo-baroque"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grands bains thermaux d'Europe, sources à 74°C, joueurs d'échecs dans les bassins extérieurs, Budapest"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Thermes Széchenyi à Budapest, Hongrie"}
  ]},
  {name:"Château d'If — Marseille, France",lat:43.2796,lng:5.325,desc:"Le château d'If, forteresse construite en 1524 sur une île du large de Marseille, abrita les prisonniers d'État les plus dangereux, dont le «masque de fer». Alexandre Dumas en fit la prison fictive du Comte de Monte-Cristo — le roman lui valut un tel succès que des touristes vinrent chercher «la cellule de Dantès».",photo:"photos/chateau_d_heidelberg.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Forteresse de 1524 sur l'île d'If, prison d'État où le Masque de Fer fut prétendument détenu, cadre du Comte de Monte-Cristo"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Archipel du Frioul, large du Vieux-Port de Marseille, Bouches-du-Rhône"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Forteresse insulaire de 1524, prison d'État et cadre du Comte de Monte-Cristo, large de Marseille"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château d'If à Marseille, France"}
  ]},
  {name:"Étangs de Camargue — France",lat:43.525,lng:4.56,desc:"La Camargue abrite la plus grande colonie de flamants roses d'Europe avec 10 000 couples nicheurs. Ce delta du Rhône héberge aussi les seuls chevaux et taureaux sauvages de France. Les gardians — cowboys camarguais — perpétuent une tradition d'élevage vieille de plusieurs siècles.",photo:"photos/etangs_de_camargue.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Delta du Rhône, 930 km², flamants roses de l'étang de Vaccarès, chevaux blancs de Camargue, taureaux, gardians"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Delta du Rhône, Bouches-du-Rhône et Gard, entre Arles et la Méditerranée"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Camargue, delta du Rhône, flamants roses et chevaux blancs, Provence"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Étangs de Camargue en France"}
  ]},
  {name:"Château des Baux-de-Provence — France",lat:43.7441,lng:4.7972,desc:"Les Baux-de-Provence furent l'un des plus puissants seigneuries de Provence au Moyen Âge. Le village est creusé dans la roche calcaire des Alpilles et domine une plaine d'oliviers et de vignes. Ses Carrières de Lumières projettent des spectacles numériques monumentaux sur des parois de 14 mètres de haut.",photo:"photos/chateau_de_blarney.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cité médiévale perchée sur une crête de bauxite, seigneurs des Baux (XIe-XIVe s.), spectacles de chevalerie, Alpilles"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Alpilles, commune des Baux-de-Provence, Bouches-du-Rhône, à 20 km d'Arles"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Les Baux-de-Provence, village perché dans les Alpilles"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Château des Baux-de-Provence en France"}
  ]},
  {name:"Gorges de l'Ardèche — France",lat:44.331,lng:4.42,desc:"Le Pont d'Arc, arche naturelle de 60 mètres de haut et 59 de large dans les gorges de l'Ardèche, est le plus grand arc naturel d'Europe. La grotte Chauvet, découverte à 2 km, abrite les peintures rupestres les plus anciennes du monde (-36 000 ans), classées UNESCO en 2014.",photo:"photos/gorges_de_l_ardeche.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Aven d'Orgnac, pont d'Arc (60m de haut, 59m de large), 30 km de gorges en canoë, Grotte Chauvet (-36 000 ans) proche"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Ardèche méridionale, entre Vallon-Pont-d'Arc et Saint-Martin-d'Ardèche, Auvergne-Rhône-Alpes"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand arc naturel d'Europe (60 m), 30 km de gorges calcaires en canoë, Ardèche"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Gorges de l'Ardèche en France"}
  ]},
  {name:"Île de Ré — France",lat:46.2,lng:-1.42,desc:"La citadelle de Saint-Martin-de-Ré, sur l'île de Ré, fut utilisée comme prison d'où partaient les condamnés au bagne de Guyane jusqu'en 1938. Albert Camus s'y inspira pour écrire «L'Étranger» lors d'un séjour sur l'île.",photo:"photos/gorges_de_l_ardeche.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Île de Charente-Maritime, 85 km², citadelle de Saint-Martin classée UNESCO, marais salants et vignes de pineau"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Charente-Maritime, golfe de Gascogne, reliée à La Rochelle par un pont de 2,9 km depuis 1988"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Île blanche reliée au continent par pont, citadelle UNESCO, marais salants, large de La Rochelle"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Île de Ré en France"}
  ]},
  {name:"Phare de Cordouan — France",lat:45.5825,lng:-1.1748,desc:"Le phare de Cordouan, surnommé «le Roi des phares», est le plus ancien phare habité de France encore en activité. Construit à partir de 1584 par Louis de Foix, il possède une chapelle royale, un appartement pour le roi et des appartements pour les gardiens. Classé UNESCO en 2021.",photo:"photos/phare_de_cordouan.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Phare royal de Louis de Foix (1611), 68m sur île à marée, classé UNESCO 2021, Roi des phares, estuaire de la Gironde"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Estuaire de la Gironde, entre Pointe de Grave et Royan, Gironde, Nouvelle-Aquitaine"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus ancien phare habité de France encore en activité, chapelle royale intégrée, estuaire de la Gironde"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Phare de Cordouan en France"}
  ]},
  {name:"Puy de Dôme — Auvergne, France",lat:45.7723,lng:2.9651,desc:"Pascal fit monter du mercure au sommet du Puy de Dôme en 1648 pour prouver que la pression atmosphérique diminuait avec l'altitude — une expérience fondatrice de la physique moderne. Il ne fit pas l'ascension lui-même, mais demanda à son beau-frère.",photo:"photos/puy_de_dome.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Stratovolcan de 1 465 m, chaîne des Puys, Pascal y démontra la pression atmosphérique en 1648, crémaillère à crémaillère"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Chaîne des Puys, Puy-de-Dôme, Auvergne, à 15 km de Clermont-Ferrand"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus haut volcan de la chaîne volcanique auvergnate, Pascal y démontra la pression atmosphérique"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Puy de Dôme à Auvergne, France"}
  ]},
  {name:"Gouffre de Padirac — France",lat:44.8724,lng:1.7474,desc:"Le gouffre de Padirac, découvert en 1889 par Édouard Martel, cache sous terre une rivière souterraine que l'on remonte en barque. La légende médiévale dit que le gouffre fut ouvert par le diable lui-même, frappant le sol du pied quand Saint-Martin refusa de lui vendre son âme.",photo:"photos/puy_de_dome.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Puits naturel de 33m de diamètre et 103m de profondeur, rivière souterraine, salle du Grand Dôme (94m), Lot, découvert en 1889"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Causse de Gramat, commune de Padirac, Lot, Occitanie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Puits naturel de 103 m de profondeur avec rivière souterraine visitée en barque, Lot, Occitanie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Gouffre de Padirac en France"}
  ]},
  {name:"Abbaye de Fontevraud — France",lat:47.1784,lng:0.053,desc:"L'abbaye de Fontevraud est la plus grande abbaye médiévale de France. Elle renferme les gisants de Richard Cœur de Lion, Aliénor d'Aquitaine et Henri II Plantagenêt. Transformée en prison napoléonienne de 1804 à 1963, elle garde encore les cellules dans sa nef — un mélange saisissant du sacré et du carcéral.",photo:"photos/abbaye_de_fontevraud.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Fondée en 1101 par Robert d'Arbrissel, nécropole des Plantagenêts dont Richard Cœur de Lion, plus grand ensemble monastique"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune de Fontevraud-l'Abbaye, Maine-et-Loire, à 15 km de Saumur, val de Loire"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande abbaye médiévale de France, nécropole des Plantagenêts dont Richard Cœur de Lion, Maine-et-Loire"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Abbaye de Fontevraud en France"}
  ]},
  {name:"Cap Blanc-Nez — France",lat:50.9217,lng:1.712,desc:"Le Cap Blanc-Nez, falaise de craie de 134 mètres face à l'Angleterre visible à seulement 34 km, fut l'un des points de départ des premiers traversées de la Manche à la nage. Il abrite le monument de Dover Patrol, commémorant les milliers de marins franco-britanniques morts en mer durant la Première Guerre mondiale.",photo:"photos/cap_blanc_nez.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Falaise de craie blanche de 134m, point le plus proche des côtes anglaises (34 km), Côte d'Opale, Monument de la Patrouille"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune d'Escalles, Pas-de-Calais, Côte d'Opale, à 34 km de la côte anglaise"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Falaises de craie blanche à 34 km de l'Angleterre, Côte d'Opale, Pas-de-Calais"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Cap Blanc-Nez en France"}
  ]},
  {name:"Dunes du Pilat — Arcachon, France",lat:44.5876,lng:-1.2128,desc:"La dune du Pilat est la plus haute d'Europe et continue de progresser de 1 à 5 mètres par an vers la forêt de pins. Elle a déjà englouti une route, un camping et une maison depuis le début du XXe siècle.",photo:"photos/dunes_du_pilat.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus grande dune d'Europe (107m, 3km de long, 500m de large), avance de 1 à 5m/an vers la forêt, Bassin d'Arcachon"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"La Teste-de-Buch, Bassin d'Arcachon, Gironde, Nouvelle-Aquitaine"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Dune du Pilat, plus grande dune d'Europe, Arcachon, France"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Dunes du Pilat à Arcachon, France"}
  ]},
  {name:"Abbaye du Thoronet — Provence, France",lat:43.4699,lng:6.3193,desc:"L'acoustique de l'abbaye du Thoronet est si parfaite que les moines cisterciens pouvaient chanter a cappella dans la nef sans aucun équipement d'amplification. Le musicien américain Jonathan Harvey y composa une œuvre inspirée par sa réverbération de 1,8 secondes.",photo:"photos/abbaye_du_thoronet.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Abbaye cistercienne fondée en 1160, architecture romane austère, acoustique parfaite (1,8s de réverbération), Val-de-Thoronet, Var"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune du Thoronet, Var, Provence, à 30 km de Draguignan"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Abbaye cistercienne du XIIe siècle à l'acoustique parfaite (1,8 s), austère roman provençal, Var"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Abbaye du Thoronet à Provence, France"}
  ]},
  {name:"Alberobello — Puglia, Italie",lat:40.7882,lng:17.2394,desc:"Les trulli d'Alberobello sont des constructions coniques en calcaire sans mortier héritées d'une technique préhistorique. Au XVIIe siècle, leurs toits amovibles permettaient aux habitants de démolir rapidement leurs maisons pour éviter les taxes royales — une maison sans toit n'étant pas considérée comme habitée.",photo:"photos/alberobello.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Trulli d'Alberobello, constructions coniques en calcite sans mortier, Rione Monti (1 030 trulli), Rione Aia Piccola, UNESCO 1996"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Ville métropolitaine de Bari, Valle d'Itria, Puglia, région du talon de la botte"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Village aux constructions coniques en calcaire sans mortier, dont les toits étaient démontables pour éviter les taxes, Puglia"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Alberobello à Puglia, Italie"}
  ]},
  {name:"Parc des Abruzzes — Italie",lat:41.85,lng:13.79,desc:"Le parc national des Abruzzes fut créé en 1923 pour sauver l'ours brun marsican d'une extinction imminente. Il ne restait que 30 individus à l'époque — il y en a aujourd'hui 100. Le parc abrite aussi les derniers loups des Apennins et des chamois abruzzais, sous-espèce endémique unique à cette région.",photo:"photos/parc_des_abruzzes.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Parco Nazionale d'Abruzzo, Lazio e Molise (1923), ours brun marsican, loup des Apennins, lynx boréal, chamois abruzzais"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Apennins centraux, province de L'Aquila, Abruzzes, Latium et Molise"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Parc national des Abruzzes, ours et loups des Apennins, Italie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Parc des Abruzzes en Italie"}
  ]},
  {name:"Syracuse — Sicile, Italie",lat:37.0655,lng:15.2866,desc:"Syracuse fut l'une des plus grandes villes du monde antique au Ve siècle av. J.-C., rivalisant avec Athènes et Carthage. Son théâtre grec taillé dans le roc accueille toujours des représentations de tragédies grecques chaque printemps. Archimède y naquit vers -287 et défendit la ville contre les Romains avec ses machines de guerre.",photo:"photos/parc_des_abruzzes.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Siracusa, colonie grecque fondée en -734, île d'Ortygie, théâtre grec de 15 000 places, oreille de Denys (latomie)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Côte ionienne, province de Syracuse, Sicile orientale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité grecque antique fondée en -734, théâtre de 15 000 places encore en usage, île d'Ortygie, Sicile"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Syracuse à Sicile, Italie"}
  ]},
  {name:"Palerme — Sicile (Cappella Palatina)",lat:38.1111,lng:13.3554,desc:"La Cappella Palatina de Palerme (1143) est un chef-d'œuvre de l'art normanno-arabe-byzantin : ses mosaïques dorées byzantines recouvrent des plafonds en bois de style islamique avec des inscriptions en arabe — un syncrétisme culturel unique du règne de Roger II de Sicile.",photo:"photos/palerme.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cappella Palatina, chapelle palatine normande-arabe-byzantine (1143), mosaïques d'or de 6 340 m², Palazzo dei Normanni"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Palazzo dei Normanni, Piazza del Parlamento, Palerme, Sicile"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Chapelle normando-arabo-byzantine aux mosaïques d'or de 6 340 m², Sicile"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palerme en Sicile (Cappella Palatina)"}
  ]},
  {name:"Scala dei Turchi — Sicile, Italie",lat:37.2903,lng:13.49,desc:"La Scala dei Turchi doit son nom aux pirates sarrasins qui auraient utilisé ses gradins de marne blanche comme abri lors de leurs raids. La marne, calcaire tendre, se découpe naturellement en gradins parfaits sous l'action des vagues et du vent.",photo:"photos/scala_dei_turchi.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Falaises de marne blanche en gradins naturels sur la mer, erosion éolienne et marine, commune de Realmonte, Agrigente"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune de Realmonte, province d'Agrigente, côte sud de la Sicile"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Falaises de marne blanche naturellement sculptées en gradins par la mer, province d'Agrigente, Sicile"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Scala dei Turchi à Sicile, Italie"}
  ]},
  {name:"Vallée des Temples — Agrigente, Italie",lat:37.2908,lng:13.5881,desc:"Les temples grecs d'Agrigente, vieux de 2 500 ans, sont mieux conservés que la plupart des temples de Grèce elle-même. Le Temple de la Concordia doit sa survie au fait qu'il fut transformé en église chrétienne au VIe siècle, ce qui évita son démantèlement.",photo:"photos/vallee_des_temples.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Valle dei Templi, 7 temples doriques grecs du Ve siècle av. J.-C., Temple de la Concordia (6m de haut), UNESCO"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Commune d'Agrigente, côte sud de la Sicile, province d'Agrigente"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Sept temples doriques du Ve siècle av. J.-C., mieux conservés que beaucoup de temples grecs en Grèce, Agrigente"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Vallée des Temples à Agrigente, Italie"}
  ]},
  {name:"Marrakech — Maroc (Djemaa el-Fna)",lat:31.6258,lng:-7.9892,desc:"La place Djemaa el-Fna de Marrakech est classée par l'UNESCO comme patrimoine immatériel de l'humanité — une première pour un espace public. Elle se transforme chaque soir en gigantesque restaurant en plein air avec des dizaines de stands de cuisine.",photo:"photos/vallee_des_temples.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Place Djemaa el-Fna, conteurs (hlaykia), charmeurs de serpents, acrobates et vendeurs de jus d'orange, UNESCO patrimoine oral 2001"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Médina de Marrakech, province de Marrakech, au pied de l'Atlas"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grande place animée de la médina, patrimoine immatériel UNESCO, conteurs et charmeurs de serpents, Maroc"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Marrakech au Maroc (Djemaa el-Fna)"}
  ]},
  {name:"Palmeraie de Skoura — Maroc",lat:31.06,lng:-6.56,desc:"La palmeraie de Skoura abrite des ksour — châteaux de pisé — dont certains sont habités depuis le XVIIe siècle. Ces forteresses en terre crue, construites sans architecte, résistent mieux aux séismes que nombre de constructions modernes.",photo:"photos/palmeraie_de_skoura.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Oasis de 45 000 palmiers-dattiers, ksour fortifiés dont Amridil (XVIIe), route des Kasbahs, vallée du Draa"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province d'Ouarzazate, route nationale n°10, vallée du Dadès, pré-Sahara"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Oasis de 45 000 palmiers-dattiers et ksour fortifiés du XVIIe siècle, route des Kasbahs, pré-Sahara marocain"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Palmeraie de Skoura au Maroc"}
  ]},
  {name:"Oasis de Dakhla — Maroc",lat:23.7136,lng:-15.9355,desc:"Dakhla est une péninsule de 40 km formant le lagon le plus parfait de l'Atlantique pour les sports de glisse. Ses vents constants de force 4-5 Beaufort et ses eaux peu profondes turquoise en font la capitale mondiale du kitesurf. Jacques-Yves Cousteau l'explorait dans les années 1970, fasciné par la richesse de ses fonds marins.",photo:"photos/oasis_de_dakhla.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Lagon de 40 km, spot mondial de kitesurf et windsurf, province de Oued ed-Dahab, Sahara occidental sous administration marocaine"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province de Dakhla-Oued Ed-Dahab, sud du Sahara occidental, côte atlantique africaine"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Dakhla, lagon et kitesurf, Sahara occidental, Maroc"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Oasis de Dakhla au Maroc"}
  ]},
  {name:"Gondar — Éthiopie (Fasiladas)",lat:12.603,lng:37.464,desc:"Gondar, surnommée «Camelot africain», abrite le Fasil Ghebbi — enceinte royale du XVIIe siècle comprenant 5 châteaux. L'influence des architectes indiens, arabes et portugais crée un style architectural unique. La piscine de Fasiladas se remplit une fois par an pour le festival Timkat (Épiphanie) — des milliers de fidèles s'y plongent.",photo:"photos/oasis_de_dakhla.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Fasil Ghebbi, enceinte royale de 900 x 900m, palais de Fasiladas (1632), Timkat (épiphanie), piscine de bénédiction"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Région d'Amhara, ancienne capitale impériale d'Afrique de l'Est, à 730 km de la capitale actuelle"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Enceinte royale du XVIIe siècle aux cinq châteaux, piscine de bénédiction du festival Timkat, nord-ouest de l'Éthiopie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Gondar en Éthiopie (Fasiladas)"}
  ]},
  {name:"Parc de l'Etosha — Namibie",lat:-18.856,lng:16.329,desc:"La dépression salée d'Etosha était autrefois un lac intérieur immense. Asséché il y a des millénaires, son lit de sel blanc est maintenant visible depuis l'espace. En saison sèche, les éléphants, lions, rhinocéros et zèbres convergent vers les seuls points d'eau — offrant des scènes de safari uniques.",photo:"photos/parc_de_l_etosha.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Parc national d'Etosha, grande dépression salée de 4 800 km², points d'eau éclairés la nuit, rhinos noirs, éléphants, lions"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Région du nord d'un pays d'Afrique australe, à 500 km de la capitale, savane semi-aride"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Parc d'Etosha, grande plaine de sel, safari nocturne, Namibie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Parc de l'Etosha en Namibie"}
  ]},
  {name:"Lamu — Kenya",lat:-2.2694,lng:40.9022,desc:"La vieille ville de Lamu est la seule ville swahilie médiévale encore habitée et quasiment intacte. Elle ne compte aucune voiture ni moto — les ânes et les bateaux sont les seuls moyens de transport, comme depuis des siècles.",photo:"photos/lamu.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Vieille ville de Lamu, plus ancienne ville swahilie habitée d'Afrique de l'Est, pas de voitures, ânes et boutres, UNESCO 2001"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île de la côte orientale d'Afrique, océan Indien, plus ancienne ville swahilie habitée"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus ancienne ville swahilie encore habitée du Kenya, pas de voitures, ânes et boutres, UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Lamu au Kenya"}
  ]},
  {name:"Chutes de Tugela — Afrique du Sud",lat:-28.7536,lng:29.2047,desc:"Les chutes de Tugela plongent en 5 sauts successifs depuis le sommet du Drakensberg. En hiver, l'eau gèle partiellement, créant des cascades de glace spectaculaires visibles uniquement depuis les hauteurs.",photo:"photos/chutes_de_tugela.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Tugela Falls, 948m en 5 sauts, 2e plus haute cascade du monde après Angel, Mont-aux-Sources, Drakensberg"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Mont-aux-Sources, Drakensberg (uKhahlamba), KwaZulu-Natal, Afrique du Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"2e plus haute cascade du monde (948 m), plonge du Drakensberg en 5 sauts, KwaZulu-Natal"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Chutes de Tugela en Afrique du Sud"}
  ]},
  {name:"Lac Malawi — Malawi",lat:-12,lng:34.5,desc:"Le lac Malawi abrite plus d'espèces de poissons d'eau douce que tout autre lac — près de 1 000 espèces de cichlidés endémiques. Son eau si transparente permet de voir jusqu'à 20 mètres de profondeur. Le lac occupe 20% de la surface du Malawi et représente la principale ressource en protéines animales du pays.",photo:"photos/lac_malawi.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Niassa, 3e plus grand lac d'Afrique (29 600 km²), 1 000 espèces de cichlidés endémiques, Livingstone l'appela Lac Nyasa"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Grand Rift africain, tripoint de trois pays d'Afrique orientale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"3e plus grand lac d'Afrique, abritant 1 000 espèces de cichlidés endémiques, eaux cristallines, Afrique centrale"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Lac Malawi (Afrique centrale)"}
  ]},
  {name:"Boulders Beach — Afrique du Sud",lat:-34.1979,lng:18.4511,desc:"La colonie de manchots de Boulders Beach fut fondée par seulement deux couples en 1982. Elle compte aujourd'hui plus de 3 000 individus. Ces manchots africains (Spheniscus demersus) sont classés «en danger» — leur population mondiale a diminué de 70% depuis 1970.",photo:"photos/boulders_beach.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plage de Boulders, Simon's Town, colonie de manchots africains (Spheniscus demersus), seule colonie en Afrique du Sud"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Simon's Town, péninsule du Cap, province du Cap-Occidental, Afrique du Sud"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plage aux manchots africains de Boulders, Cape Peninsula, Afrique du Sud"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Boulders Beach en Afrique du Sud"}
  ]},
  {name:"Ephèse — Turquie (bibliothèque)",lat:37.9395,lng:27.3417,desc:"La bibliothèque de Celse d'Éphèse, construite en 135 ap. J.-C., abritait 12 000 rouleaux de parchemin. Sa façade crée une illusion d'optique : des colonnes centrales plus grandes la font paraître plus haute qu'elle n'est. La tombe du consul Gaïus Julius Celsus se trouve directement sous le bâtiment qu'il finança.",photo:"photos/ephese.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Bibliothèque de Celse (135 ap. J.-C.), façade à 2 étages avec niches de statues (Sagesse, Connaissance, Intelligence, Vertu)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Cité romaine d'Éphèse, Selçuk, province d'?zmir, côte égéenne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Bibliothèque de Celse, joyau d'Éphèse, côte égéenne turque"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Ephèse en Turquie (bibliothèque)"}
  ]},
  {name:"Aspendos — Turquie",lat:36.9384,lng:31.1715,desc:"Le théâtre d'Aspendos, construit au IIe siècle ap. J.-C., peut accueillir 15 000 spectateurs et est si bien conservé qu'il accueille encore aujourd'hui le festival international d'opéra d'Aspendos chaque été. Sa scène de 21 mètres de haut est la seule de cette époque encore intacte dans le monde méditerranéen.",photo:"photos/aspendos.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Théâtre romain du IIe siècle de 15 000 places, un des mieux conservés du monde, Marcus Aurelius, province d'Antalya"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"District de Serik, province d'Antalya, côte méditerranéenne, théâtre de 15 000 places"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Théâtre romain du IIe siècle à 15 000 places, unique scène de 21 m encore intacte, province d'Antalya"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Aspendos en Turquie"}
  ]},
  {name:"Yosemite — Californie, USA",lat:37.7456,lng:-119.5936,desc:"El Capitan, la paroi granitique verticale de 914 mètres de Yosemite, fut gravi pour la première fois sans équipement d'aide en 2017 par Alex Honnold. Cette ascension en solo intégral fut qualifiée de «plus grande prouesse athlétique de tous les temps».",photo:"photos/yosemite.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Yosemite Valley, El Capitan (914m de granit vertical), Half Dome, Bridalveil Fall, John Muir et Roosevelt y campèrent en 1903"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Sierra Nevada, Mariposa County, Tuolumne County, centre de la Californie"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Parc aux parois granitiques verticales de 900 m, grimpé en solo en 2017, cascades et séquoias géants"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Yosemite à Californie, USA"}
  ]},
  {name:"Zion Canyon — Utah, USA",lat:37.2982,lng:-113.0263,desc:"Angels Landing dans Zion Canyon est l'une des randonnées les plus dangereuses d'Amérique. 6 personnes sont mortes en chutant depuis 2004, mais l'affluence record de 4 millions de visiteurs par an a conduit à l'instauration d'un permis de tirage au sort en 2022.",photo:"photos/zion_canyon.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Angels Landing (487m, 1 500 chaînes en acier), Narrows (gorge de 800m large), grès rouge Navajo, Virgin River"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Comté de Washington, Utah, à 280 km au nord-est de Las Vegas"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Parc national de Zion, canyon de grès rouge, Utah"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Zion Canyon à Utah, USA"}
  ]},
  {name:"Bryce Canyon — Utah, USA",lat:37.593,lng:-112.1871,desc:"Les «hoodoos» de Bryce Canyon se forment en 3 millions d'années grâce à l'alternance gel-dégel qui brise la roche. Le parc perd environ 30 cm de ses formations par tranche de 50 à 65 ans — un déclin imperceptible à l'échelle humaine mais constant.",photo:"photos/bryce_canyon.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Hoodoos de grès rose et orange, amphithéâtre de Thor's Hammer, Silent City, altitude de 2 700m, plateau de Paunsaugunt"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Comté de Garfield, Utah, à 2 700m d'altitude, 90 km de Zion"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Forêt de 2 000 cheminées de fées en grès rose et orange à 2 700 m d'altitude, plateau du Colorado, Utah"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Bryce Canyon à Utah, USA"}
  ]},
  {name:"Death Valley — Californie, USA",lat:36.5232,lng:-116.9325,desc:"La Vallée de la Mort détient le record mondial de température enregistrée (56,7°C en 1913). Paradoxalement, elle accueille des fleurs sauvages spectaculaires lors des «superblooms» rares, quand les graines dormantes germent après une pluie exceptionnelle.",photo:"photos/death_valley.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Badwater Basin (-85m), température record de 56,7°C (1913), Racetrack Playa aux pierres glissantes, Zabriskie Point"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Comtés d'Inyo et Nye, frontière Californie-Nevada, Mojave Desert"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Vallée de la Mort, point le plus bas et le plus chaud des USA"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Death Valley à Californie, USA"}
  ]},
  {name:"Arches National Park — Utah, USA",lat:38.7331,lng:-109.5925,desc:"Le parc des Arches contient plus de 2 000 arches naturelles en grès rouge sur une superficie de 300 km². La Delicate Arch, haute de 16 mètres, est l'emblème de l'Utah imprimé sur les plaques d'immatriculation de l'État. En 2008, Wall Arch, l'une des plus grandes, s'effondra brusquement dans la nuit.",photo:"photos/arches_national_park.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Delicate Arch (16m de haut), 2 000 arches naturelles en grès Entrada, Landscape Arch (88m d'envergure), Moab Utah"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Comté de Grand, Utah, à 8 km de Moab, plateau Colorado"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Parc des Arches, Delicate Arch, 2000 arches naturelles, Utah"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Arches National Park à Utah, USA"}
  ]},
  {name:"Seattle Space Needle — USA",lat:47.6205,lng:-122.3493,desc:"La Space Needle de Seattle fut construite en 398 jours pour l'Exposition universelle de 1962. Son restaurant tournant SkyCity effectue une rotation complète en 47 minutes. Elle fut conçue pour résister à des vents de 300 km/h et à un séisme de magnitude 9,1 — plus puissant que le grand séisme de Seattle de 1965.",photo:"photos/seattle_space_needle.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Tour de 184m construite pour l'Exposition universelle de 1962, restaurant tournant SkyCity, sommet en forme d'OVNI, Seattle Center"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Seattle Center, Uptown, Seattle, État de Washington, nord-ouest"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Space Needle, tour en OVNI de l'Expo 62, Seattle, Washington"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Seattle Space Needle en USA"}
  ]},
  {name:"Chicago Cloud Gate — USA",lat:41.8827,lng:-87.6233,desc:"Cloud Gate d'Anish Kapoor, surnommée «The Bean», est faite de 168 plaques d'acier inoxydable soudées sans aucun joint visible. Elle réfléchit le skyline de Chicago en le déformant. Ses 110 tonnes reposent sur seulement 6 pieds d'ancrage — son poids est compensé par une structure enterrée dans le sol du parc.",photo:"photos/chicago_cloud_gate.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cloud Gate de Anish Kapoor (2006), sculpture en acier de 110 tonnes surnommée 'The Bean', AT&T Plaza, Millennium Park"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"AT&T Plaza, Millennium Park, Michigan Avenue, Loop, Chicago, Illinois"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cloud Gate, sculpture haricot géante de Chicago, Millennium Park"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Chicago Cloud Gate en USA"}
  ]},
  {name:"Niagara on the Lake — Canada",lat:43.2554,lng:-79.0713,desc:"Niagara-on-the-Lake fut la première capitale du Haut-Canada en 1792. Brûlée par les Américains en 1813, elle fut reconstruite dans un style géorgien homogène. Son architecture victorienne si parfaitement préservée lui vaut le titre de «ville la plus jolie du Canada».",photo:"photos/niagara_on_the_lake.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ville victorienne au bord d'un grand lac, Fort George (1796), Shaw Festival, vignobles sur l'escarpement calcaire"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Péninsule entre deux grands lacs, à l'embouchure d'une rivière célèbre"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Niagara-on-the-Lake, ville victorienne et vignobles, Ontario, Canada"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Niagara-on-the-Lake, Ontario, Canada"}
  ]},
  {name:"Capilano Suspension Bridge — Vancouver, Canada",lat:49.3429,lng:-123.1149,desc:"Le pont suspendu de Capilano se balance sous vos pieds à 70 mètres au-dessus d'une rivière glaciale. En 1956, il fut renforcé avec du câble en acier — son prédécesseur en chanvre et câble de cèdre continuait à balancer dangereusement sous les rafales de vent.",photo:"photos/capilano_suspension_bridge.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Pont suspendu de 136m de long à 70m au-dessus du canyon de la Capilano, construit en 1889 par George Grant Mackay"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rive nord d'une grande ville côtière, forêt pluviale tempérée, à 15 km du centre"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Pont suspendu de Capilano, forêt de séquoias, Vancouver, Canada"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Capilano Suspension Bridge à Vancouver, Canada"}
  ]},
  {name:"Gaspésie — Québec, Canada",lat:49,lng:-65,desc:"Le Rocher Percé de Gaspésie compte parmi les plus grandes roches percées au monde — son arche mesure 20 mètres de haut. L'île Bonaventure voisine héberge l'une des plus grandes colonies de fous de Bassan accessibles au monde, avec 100 000 couples nicheurs.",photo:"photos/gaspesie.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Rocher Percé (88m), bonaventure avec 100 000 fous de Bassan, parc de la Gaspésie, mont Jacques-Cartier (1 268m)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Péninsule gaspésienne, golfe d'un grand fleuve, région francophone d'Amérique du Nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Rocher percé parmi les plus grands au monde, 100 000 fous de Bassan sur l'île voisine, golfe du Saint-Laurent"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Gaspésie à Québec, Canada"}
  ]},
  {name:"Churchill — Manitoba, Canada (ours polaires)",lat:58.7684,lng:-94.165,desc:"Les ours polaires de Churchill se rassemblent en attendant que la baie d'Hudson gèle pour aller chasser le phoque. La ville est la seule au monde où vous pouvez observer des ours polaires sauvages depuis des véhicules spéciaux à l'automne, avant qu'ils ne migrent sur la glace.",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Capitale mondiale des ours polaires, 900+ ours attendant la glace de la baie d'Hudson en octobre-novembre, aurores boréales"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Bord de la baie d'Hudson, grand nord, accessible uniquement en train ou avion"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Seule ville au monde pour observer des ours polaires sauvages, 240 nuits d'aurores par an, baie d'Hudson"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Churchill à Manitoba, Canada (ours polaires)"}
  ]},
  {name:"Baie de Fundy — Nouveau-Brunswick, Canada",lat:45.2,lng:-65,desc:"Les marées de la Baie de Fundy, les plus grandes du monde, déplacent 160 milliards de tonnes d'eau à chaque cycle. Les rochers de Hopewell, qui ressemblent à des pots de fleurs géants à marée haute, sont entièrement submergés et inaccessibles 6 heures après.",photo:"photos/baie_de_fundy.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus grande marée du monde (16,2m à Hopewell Rocks), 100 milliards de tonnes d'eau échangées deux fois par jour"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Entre deux provinces maritimes, golfe d'un grand fleuve, marées parmi les plus fortes au monde"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grandes marées du monde (16 m), rochers en forme de pots de fleurs géants, est du Canada"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Baie de Fundy à Nouveau-Brunswick, Canada"}
  ]},
    {name:"Colca Canyon — Pérou",lat:-15.5279,lng:-71.8861,desc:"Le Colca Canyon de Pérou est le canyon le plus profond de l'hémisphère occidental. Le condor des Andes, le plus grand oiseau volant au monde avec ses 3,2 m d'envergure, y plane en cercles depuis le belvédère de la Cruz del Cóndor — un spectacle quotidien à l'aube.",photo:"photos/colca_canyon.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cañon del Colca, 3 270m de profondeur, 2e plus profond du monde, condors des Andes depuis Cruz del Condor, pré-inca Collagua"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province de Caylloma, région d'Arequipa, Andes péruviennes, à 150 km d'Arequipa"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Canyon du Colca, vol des condors, 2e plus profond du monde, Pérou"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Colca Canyon au Pérou"}
  ]},
  {name:"Chan Chan — Trujillo, Pérou",lat:-8.1089,lng:-79.0741,desc:"Chan Chan, capitale du royaume Chimú, fut conquise par les Incas en 1470 — 50 ans avant l'arrivée des Espagnols. Les Incas y admirèrent tant la sophistication de la métallurgie chimú qu'ils déportèrent des centaines d'orfèvres à Cusco pour travailler à leur cour.",photo:"photos/chan_chan.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus grande cité précolombienne d'Amérique du Sud, capitale du royaume Chimu (850-1470), 20 km², adobe, UNESCO en péril"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Désert côtier andin, plus grande cité d'adobe précolombienne au monde"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande cité précolombienne d'Amérique du Sud en adobe, 20 km², capitale du royaume Chimú, Pérou"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Chan Chan à Trujillo, Pérou"}
  ]},
  {name:"Carnaval de Barranquilla — Colombie",lat:10.9878,lng:-74.7889,desc:"Le carnaval de Barranquilla est le deuxième plus grand carnaval du monde après Rio. Classé patrimoine immatériel de l'UNESCO en 2003, il fusionne les traditions africaines, indigènes et espagnoles. Sa Batalla de Flores (bataille de fleurs), la Grand Parade et le Garabato (danse de la mort et de la vie) durent 4 jours avant le Mardi Gras.",photo:"photos/carnaval_de_barranquilla.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"2e carnaval du monde après Rio, 4 jours avant Mardi Gras, Cumbia, Mapalé, Batalla de Flores, UNESCO patrimoine oral 2003"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Barranquilla, département de l'Atlántico, côte caraïbe colombienne"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"2e plus grand carnaval au monde après Rio, patrimoine immatériel UNESCO, cumbia et mapalé, Colombie caraïbe"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Carnaval de Barranquilla en Colombie"}
  ]},
  {name:"Roraima — Venezuela (tepui)",lat:5.143,lng:-60.762,desc:"Le mont Roraima (2 810 m) est un tepui — une montagne-table de grès précambrien vieille de 1,8 milliard d'années. Son sommet de 31 km², toujours dans les nuages, abrite des espèces végétales uniques dont 35% sont endémiques. Arthur Conan Doyle s'en inspira pour «Le Monde Perdu» (1912) — un plateau où dinosaures et créatures primitives survivraient.",photo:"photos/roraima.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Mount Roraima (2 810m), tepui de 31 km² à sommet plat, tripoint de trois pays d'Amérique du Sud, inspiration pour Le Monde Perdu de Conan "},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Parc national d'Amazonie, tepuis à sommet plat, tripoint de trois pays"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Montagne-table de grès vieille de 1,8 milliard d'années, sommet dans les nuages, tripoint Venezuela-Brésil-Guyana"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Roraima au Venezuela (tepui)"}
  ]},
  {name:"Lençóis Maranhenses — Brésil",lat:-2.4943,lng:-43.1291,desc:"Les dunes des Lençóis Maranhenses se forment et se déplacent chaque année. Malgré leur apparence désertique, les lacs qui s'y forment entre juin et septembre accueillent des piranhas, des raies et des tortues aquatiques — ramenés par les poissons lors des crues.",photo:"photos/lencois_maranhenses.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"155 000 ha de dunes blanches de quartz avec lacs temporaires bleu turquoise de juin à septembre"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Côte atlantique tropicale, nord-est du sous-continent, dunes blanches et lagon"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Dunes de sable blanc aux lacs turquoise temporaires peuplés de piranhas, nord-est du sous-continent"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Lençóis Maranhenses au Brésil"}
  ]},
  {name:"Ouro Preto — Minas Gerais, Brésil",lat:-20.3867,lng:-43.5036,desc:"Ouro Preto (or brut) fut l'épicentre de la ruée vers l'or du XVIIIe siècle qui fit du Brésil le premier producteur mondial. La ville draina tellement de richesses que le Portugal put financer la reconstruction de Lisbonne après le tremblement de terre de 1755.",photo:"photos/ouro_preto.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ville baroque de l'or (1700), 13 églises dont Igreja de São Francisco de Assis de l'Aleijadinho, UNESCO 1980"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Serra do Espinhaço, à 95 km d'une grande ville minière, patrimoine baroque"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ville baroque de l'or du XVIIIe siècle, 13 églises dont le chef-d'œuvre de l'Aleijadinho, UNESCO, Minas Gerais"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Ouro Preto à Minas Gerais, Brésil"}
  ]},
  {name:"Salvador de Bahia — Brésil",lat:-13.0102,lng:-38.5018,desc:"Salvador de Bahia fut le premier port négrier de l'histoire et reçut 4 millions d'esclaves africains — plus que n'importe quelle autre ville du monde. Aujourd'hui, sa culture — musique, cuisine, religion — reste profondément marquée par l'héritage africain.",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Pelourinho, quartier historique colonial, Église São Francisco aux 800 kg d'or, capoeira et candomblé, ancienne capitale coloniale"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Nordeste du sous-continent, baie de Todos os Santos, pelourinho colonial"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Premier port négrier du monde, quartier colonial Pelourinho, capoeira et candomblé, Bahia"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Salvador de Bahia au Brésil"}
  ]},
    {name:"Mendoza — Argentine (vignobles)",lat:-32.8908,lng:-68.8272,desc:"Le vignoble de Mendoza est irrigué depuis des siècles par un réseau de canaux incas ancestraux, toujours en usage. L'altitude de 800 à 1 500 mètres protège les vignes des maladies cryptogamiques et permet de produire des vins parmi les plus purs au monde.",photo:"photos/mendoza.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Región vitivinícola de Luján de Cuyo, Malbec de haute altitude, plus grands domaines Zuccardi et Achaval Ferrer, ombres des Andes"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Province de Mendoza, piémont des Andes, à 1 000m, Argentina vinicole"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Vignobles de Malbec à haute altitude irriguée par des canaux incas, au pied des Andes argentines"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Mendoza en Argentine (vignobles)"}
  ]},
  {name:"Rapa Nui — Île de Pâques (Ahu Tongariki)",lat:-27.1245,lng:-109.2778,desc:"Juste sous la surface de la mer entourant l'île de Pâques se trouvent des milliers de moaï submergés — les archéologues n'ont fouillé qu'une infime partie des fonds marins. Les têtes visibles sont en réalité des statues entières dont le corps est enfoui.",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ahu Tongariki, plus grande plate-forme cérémonielle de l'île, 15 moaï restaurés après le tsunami de 1960 par Claudio Cristino"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Côte est d'une île volcanique isolée, plateforme d'Ahu Tongariki aux 15 moai réérigés"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ahu Tongariki, 15 moaï face au lever du soleil, Île de Pâques"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Île de Pâques (Rapa Nui), Chili"}
  ]},
  {name:"Waitomo — Nouvelle-Zélande (grottes)",lat:-38.2637,lng:175.1035,desc:"Les vers luisants de Waitomo ne sont pas des vers mais des larves de moucheron Arachnocampa luminosa. Ils produisent leur lumière bleue pour attirer d'autres insectes dans leurs fils de soie collants. Un individu peut produire jusqu'à 70 fils suspendus pour piéger ses proies.",photo:"photos/mendoza.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Grottes de Waitomo, Arachnocampa luminosa (vers luisants), plafond de stalactites illuminé par 10 000 organismes bioluminescents"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"District de Waitomo, Waikato, île du Nord, Nouvelle-Zélande, à 200 km d'Auckland"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grottes karstiques aux plafonds illuminés par 10 000 larves bioluminescentes, île du Nord, Nouvelle-Zélande"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Waitomo en Nouvelle-Zélande (grottes)"}
  ]},
  {name:"Abel Tasman — Nouvelle-Zélande",lat:-40.85,lng:173,desc:"Le parc national Abel Tasman est le plus petit mais le plus visité de Nouvelle-Zélande. Son Abel Tasman Coast Track, l'un des 9 «Great Walks» néo-zélandais, longe des plages de granit doré et des laguons de marbre sur 51 km. Des otaries et des manchots à yeux jaunes y vivent sur les rochers face au détroit de Cook.",photo:"https://upload.wikimedia.org/wikipedia/commons/f/f8/AbelTasman.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Parc national Abel Tasman, côte de granit dorée, phoques, plages d'eau turquoise, Abel Tasman Coast Track (51km)"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"District de Tasman, côte nord de l'île du Sud, Nouvelle-Zélande"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus petit mais plus visité des parcs nationaux néo-zélandais, plages de granit doré, loutres et manchots"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Abel Tasman en Nouvelle-Zélande"}
  ]},
  {name:"îles Cook — Rarotonga",lat:-21.2358,lng:-159.7777,desc:"Les Îles Cook furent les premières au monde à instituer «Te Maeva Nui» — une fête nationale de danse et de chant polynésien. Jacques Brel, qui vécut ses dernières années en Polynésie française voisine, fut profondément touché par ces traditions musicales du Pacifique.",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Cook_Islands_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg/langfr-330px-Cook_Islands_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg.png",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Île principale des Cook, Avarua, lagon intérieur et récif barrière, Te Manga (652m), Cook Islands Discovery Trail"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Archipel des Îles Cook, Polynésie méridionale, Pacifique Sud, en libre association avec la Nouvelle-Zélande"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Île principale d'un archipel polynésien en libre association avec la Nouvelle-Zélande, Pacifique Sud"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Îles Cook (Rarotonga), Pacifique Sud"}
  ]},
  {name:"Vanuatu — Yasur Volcano",lat:-19.5218,lng:169.4425,desc:"Le mont Yasur au Vanuatu est l'un des rares volcans où les visiteurs peuvent approcher à quelques mètres du bord du cratère lors des éruptions mineures. Les Kastom (autochtones) considèrent le volcan comme l'ancêtre de leur peuple et organisent des cérémonies traditionnelles à ses pieds.",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Vanuatu_on_the_globe_%28Polynesia_centered%29.svg/langfr-330px-Vanuatu_on_the_globe_%28Polynesia_centered%29.svg.png",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Mont Yasur (361m), volcan le plus accessible du monde, éruptions toutes les quelques minutes, île de Tanna, Vanuatu"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île de Tanna, province de Tafea, Mélanésie, Pacifique Sud, archipel d'îles volcaniques entre la Nouvelle-Calédonie et les Salomon"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Volcan actif le plus accessible au monde, éruptions toutes les minutes, île de Tanna, Mélanésie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Volcan Yasur sur l'île de Tanna, Vanuatu"}
  ]},
  {name:"Kakadu — Territoire du Nord, Australie",lat:-12.6784,lng:132.8371,desc:"Le parc national de Kakadu abrite des peintures rupestres aborigènes vieilles de 20 000 ans qui constituent un almanach vivant. Les artistes actuels continuent d'ajouter des peintures aux parois, maintenant une tradition ininterrompue depuis la préhistoire.",photo:"https://upload.wikimedia.org/wikipedia/commons/9/93/Kakadu_2431.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Plus grand parc national du continent (19 804 km²), art rupestre aborigène de 20 000 ans, Nourlangie Rock, crocodiles d'eau salée"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Région intérieure du continent, à 150 km d'une ville côtière tropicale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grand parc national d'Australie, peintures rupestres aborigènes de 20 000 ans, crocodiles marins"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Kakadu à Territoire du Nord, Australie"}
  ]},
  {name:"Blue Mountains — Nouvelle-Galles du Sud, Australie",lat:-33.719,lng:150.3113,desc:"Les Blue Mountains doivent leur teinte bleutée à la brume d'huile essentielle d'eucalyptus qui flotte en permanence dans l'air. Les 5 millions d'eucalyptus libèrent une huile volatile qui disperse la lumière bleue — un phénomène optique unique à cette région.",photo:"photos/blue_mountains.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Three Sisters (922m), brume bleue d'huile d'eucalyptus, Jenolan Caves (350 Ma), Scenic Railway le plus raide du monde"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Tablelands des Blue Mountains, à 90 km à l'ouest d'une grande métropole côtière"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plateau aux falaises de grès avec brume bleue d'eucalyptus, formations des Trois Sœurs, Nouvelle-Galles du Sud"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Blue Mountains à Nouvelle-Galles du Sud, Australie"}
  ]},
  {name:"Nambung — Australie-Occidentale (Pinnacles)",lat:-30.602,lng:115.157,desc:"Les Pinnacles d'Australie occidentale sont des formations calcaires créées depuis des coquillages marins fossilisés. Il y a 6 000 ans, cet endroit était au fond de l'océan. Des milliers de piliers émergent aujourd'hui du sable, certains de la taille d'un homme.",photo:"photos/nambung.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Parc national de Nambung, Pinnacles Desert, milliers de colonnes de calcaire jusqu'à 3,5m, porosité de coquillages fossilisés"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Shire côtier semi-aride, à 250 km au nord d'une grande métropole occidentale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Pinnacles Desert, forêt de colonnes de calcaire, Australie-Occidentale"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Nambung en Australie-Occidentale (Pinnacles)"}
  ]},
  {name:"Similan Islands — Thaïlande",lat:8.65,lng:97.65,desc:"Les eaux des Similan, classées parmi les 10 meilleures plongées du monde par Cousteau, sont si claires que la visibilité peut atteindre 40 mètres. Les requins baleines, qui y sont régulièrement observés, sont les plus grands poissons du monde et se nourrissent uniquement de plancton.",photo:"photos/similan_islands.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"11 îles granitiques, rochers Boulder Beach, visibilité 30m, coraux jusqu'à 30m, requins baleines (Rhincodon typus) et tortues vert"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Archipel granitique, mer d'Andaman, à 85 km au large d'une côte ouest, parc marin national fondé en 1982, eaux tropicales à 28°C"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Parc marin national en Thaïlande, mer d'Andaman, site de plongée de classe mondiale, fermé chaque saison de mousson"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Similan Islands en Thaïlande"}
  ]},
  {name:"Phong Nha — Vietnam",lat:17.5472,lng:106.1286,desc:"La grotte de Son Doong est si grande qu'elle possède sa propre météo : nuages, brouillard matinal et précipitations internes. Des espèces animales endémiques y vivent, adaptées à l'obscurité perpétuelle. Seul un guide certifié peut accompagner les visiteurs — les places sont limitées à 1 000 par an.",photo:"photos/phong_nha.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Calcaires du Cambrien-Ordovicien (400-450 Ma), spéléothèmes géants, rivières souterraines fossiles, galeries de 150-200m de haut, "},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Massif karstique tropical, vallée encaissée entre cordillère et plaine côtière, à ~15 km à l'ouest d'un fleuve côtier, latitude ~1"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Plus grande grotte du monde découverte en 1991, karst tropical classé UNESCO, Vietnam central, accessible en barque sur rivière so"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Phong Nha au Vietnam"}
  ]},
  {name:"Bali — Indonésie (Tanah Lot)",lat:-8.6215,lng:115.0867,desc:"Bali est l'une des rares îles hindoues dans la mer d'îles islamiques qu'est l'Indonésie. Sa religion balinaise unique mêle hindouisme, bouddhisme et croyances animistes ancestrales. Chaque village possède au moins 3 temples — un pour les dieux, un pour les âmes et un pour les mauvais esprits.",photo:"photos/phong_nha.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Pura du XVIe s. attribué à Dang Hyang Nirartha, basalte volcanique, mers de Java, sanctuaire Dewi Danu, serpents sacrés gardiens"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Rocher isolé en mer, côte ouest d'une île tropicale volcanique, océan Indien, temple accessible à marée basse uniquement"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Temple hindou perché sur un rocher marin érodé, crépuscule iconique, île indonésienne aux rizières en terrasses"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Bali en Indonésie (Tanah Lot)"}
  ]},
  {name:"Ubud — Bali, Indonésie",lat:-8.5069,lng:115.2625,desc:"Bali est l'une des rares îles hindoues dans la mer d'îles islamiques qu'est l'Indonésie. Sa religion balinaise unique mêle hindouisme, bouddhisme et croyances animistes ancestrales. Chaque village possède au moins 3 temples — un pour les dieux, un pour les âmes et un pour les mauvais esprits.",photo:"photos/ubud.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Rizières en terrasses de Tegallalang (irrigation subak UNESCO), temples hindous balinais, altitude ~200-300m, forêt de singes sacr"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Centre d'une île volcanique indonésienne, plateau verdoyant entre volcans et océan, à ~25 km au nord d'une capitale provinciale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Capitale culturelle de Bali, Indonésie, connue pour ses rizières en terrasses, temples et arts traditionnels"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Ubud à Bali, Indonésie"}
  ]},
  {name:"Phuket — Thaïlande",lat:7.9519,lng:98.3381,desc:"Phuket fut dévastée par le tsunami de 2004 qui tua 8 000 personnes sur l'île. Sa reconstruction rapide et la modernisation de ses équipements touristiques transformèrent la catastrophe en opportunité économique — Phuket compte aujourd'hui plus de 10 millions de visiteurs par an.",photo:"photos/ubud.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Statue de 45m en marbre blanc, érigée en 2004 sur colline Nakkerd, style Maravija, île granitique au détroit de Malacca"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Grande île granitique en mer tropicale entre deux saisons de mousson, détroit reliant deux mers, relief collinaire boisé au nord"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Île tropicale bouddhiste au détroit de Malacca, célèbre Big Buddha et architecture sino-portugaise en Thaïlande"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Phuket en Thaïlande"}
  ]},
  {name:"Kazbegi — Géorgie",lat:42.6522,lng:44.6345,desc:"L'église de la Trinité de Gergeti, à 2 170 m d'altitude au-dessus de Kazbegi, fut utilisée comme cachette pour les trésors de l'église géorgienne lors des invasions mongoles. On y montait à cheval jusqu'aux années 1990 — aujourd'hui on peut y aller en 4x4.",photo:"photos/kazbegi.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Église de la Trinité de Gergeti, XIVe s., calcaire local, 2 170m, éperon surplombant gorge du Terek, Mtskheta-Mtianeti"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Éperon rocheux à 2 170m, gorge d'un fleuve traversant le Caucase vers la plaine nord, sommet enneigé à 5 047m au nord-est"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Église médiévale orthodoxe géorgienne perchée face à un volcan de 5 047m dans les montagnes du Caucase"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'église de Gergeti à Kazbegi, Géorgie"}
  ]},
  {name:"Uplistsikhe — Géorgie",lat:41.9447,lng:44.2078,desc:"Uplistsikhe, «forteresse du Seigneur» en géorgien, est une ville rupestre vieille de 3 000 ans creusée dans le grès brun au-dessus de la rivière Kura. C'est l'une des plus anciennes villes de la Caucasie, habitée jusqu'au Xe siècle. On y trouve la plus ancienne salle d'audience à colonnes de la région.",photo:"photos/uplistsikhe.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cité rupestre creusée dans le grès rose, 3000 ans, ~700 salles, basilique à nef centrale, bord d'un grand fleuve transcaucasien or"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Plateau de grès dominant un fleuve, altitude ~600m, versant sud d'une chaîne montagneuse, Caucase central, à quelques km d'une vil"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ancienne capitale préchristienne du royaume de Kartli, l'une des plus vieilles villes rupestres du Caucase, Géorgie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le site rupestre d'Uplistsikhe, Géorgie"}
  ]},
  {name:"Gobustan — Azerbaïdjan",lat:40.1083,lng:49.3642,desc:"Le parc national de Gobustan abrite 6 000 pétroglyphes rupestres couvrant 40 000 ans d'histoire humaine. Le Norvégien Thor Heyerdahl y trouva en 1994 des représentations de bateaux vikings — ce qui renforça sa théorie controversée de l'origine nordique des Azerbaïdjanais. Ses volcans de boue, les plus nombreux au monde, éructent en continu.",photo:"photos/gobustan.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Pétroglyphes rupestres datés de -40 000 à 5 000 av. J.-C., inscrits UNESCO 2007, volcans de boue actifs, plateau calcaire semi-ari"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Plateau côtier semi-aride bordant une mer fermée, à 65 km au sud-ouest d'une capitale pétrolière sur péninsule"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Site UNESCO abritant des gravures rupestres préhistoriques et des volcans de boue, en Azerbaïdjan"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Gobustan en Azerbaïdjan"}
  ]},
  {name:"Bakou — Azerbaïdjan (vieille ville)",lat:40.366,lng:49.8341,desc:"La vieille ville de Bakou, Icheri Sheher, fut fondée au Ve siècle. Sa Tour de la Vierge (XIIe siècle), visible de la mer Caspienne, n'a jamais servi de forteresse défensive — son rôle exact reste mystérieux. Bakou signifie «ville battue par le vent» en persan — des vents violents traversent la ville en permanence.",photo:"photos/bakou.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Enceinte médiévale du XIIe s., tour cylindrique de 29 m en calcaire coquillier, palais dynastique XVe s., classement UNESCO 2000"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Presqu'île rocheuse sur la côte ouest d'une grande mer fermée, relief plat, climat semi-aride, latitude ~40°N"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Vieille ville fortifiée en Azerbaïdjan, tour cylindrique emblématique du XIIe s. et palais médiéval inscrits à l'UNESCO"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Bakou en Azerbaïdjan (vieille ville)"}
  ]},
  {name:"Tbilissi — Géorgie (Mtskheta)",lat:41.8404,lng:44.721,desc:"Tbilissi signifie «ville des eaux chaudes» en géorgien. La ville fut fondée au Ve siècle par un roi qui, selon la légende, vit un faisan blessé guérir instantanément en entrant dans une source thermale chaude. Ces sources coulent encore aujourd'hui dans les bains soufrés du vieux Tbilissi.",photo:"photos/tbilissi.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cathédrale Sveti Tskhoveli, XIe s., tuf calcaire, architecte Arsukisdze, 54m, croix géorgienne sur piliers, UNESCO 1994"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Confluence de deux rivières majeures du Caucase, plateau à ~470m alt., vignobles en terrasses, monastère fortifié sur colline proc"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ancienne capitale et berceau du christianisme en Géorgie, cathédrale inscrite à l'UNESCO, vignobles centenaires"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La cathédrale Sveti Tskhoveli à Mtskheta, Géorgie"}
  ]},
  {name:"Vardzia — Géorgie",lat:41.389,lng:43.278,desc:"Le monastère rupestre de Vardzia, creusé dans la falaise volcanique au XIIe siècle par la reine Tamar, comprend 600 pièces sur 13 niveaux. Un tremblement de terre en 1283 effondra la façade de la montagne, révélant les cellules à l'air libre. Les fresques représentant la reine Tamar sont parmi les plus précieuses de l'art géorgien.",photo:"photos/vardzia.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Monastère rupestre XIIe s., ~600 salles sur 13 niveaux dans falaise de tuf volcanique, rive gauche de la Mtkvari, fondé sous Tamar"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Complexe troglodytique sur falaise basaltique surplombant un fleuve encaissé, haute vallée orientée N-S, altitude ~1300 m, sud du "},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Immense cité monastique creusée dans la roche au XIIe s., emblème du royaume médiéval géorgien sous la reine Tamar, Géorgie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le monastère rupestre de Vardzia, Géorgie"}
  ]},
  {name:"Khor Virap — Arménie",lat:39.8316,lng:44.5673,desc:"Le mont Ararat, visible depuis Khor Virap, est considéré comme le berceau de la civilisation arménienne et le symbole national du pays — mais il se trouve en Turquie depuis 1921. Les Arméniens peuvent le voir depuis leur frontière sans pouvoir y accéder.",photo:"photos/khor_virap.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Monastère arménien (IVe-XVIIe s.) sur fosse d'emprisonnement de Grégoire l'Illuminateur (287-301) ; façade basalte, vue sur strato"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Monastère sur une butte dans une vaste plaine alluviale, à proximité d'une frontière internationale, face à un stratovolcan enneig"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Monastère arménien emblématique au pied d'un grand volcan enneigé, symbole national, dans la plaine la plus fertile d'Arménie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Khor Virap en Arménie"}
  ]},
  {name:"Garni — Arménie",lat:40.1119,lng:44.729,desc:"Le temple de Garni est le seul édifice gréco-romain de tout le Caucase. Construit au Ier siècle ap. J.-C. par un roi arménien, il survécut à la christianisation du pays en 301 en étant transformé en bain royal puis en entrepôt.",photo:"photos/khor_virap.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Temple périptère à 24 colonnes ioniques (Ier s. ap. J.-C.), basalte local, podium à degrés, dédié à Mihr, gorge volcanique aux org"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Temple sur plateau volcanique, gorge aux colonnes basaltiques, rivière Azat, versant sud du massif du Guegham, Caucase méridional"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Seul temple gréco-romain subsistant dans le Caucase, restauré au XXe s., dominant une gorge aux orgues basaltiques"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Garni en Arménie"}
  ]},
  {name:"Chefchaouen — Maroc",lat:35.1688,lng:-5.2636,desc:"La ville bleue du Maroc doit sa couleur à la communauté juive sépharade expulsée d'Espagne en 1492. Ils peignirent les murs en bleu, couleur symbolisant le ciel et la divinité dans la tradition juive. La pratique fut adoptée par toute la ville.",photo:"https://upload.wikimedia.org/wikipedia/commons/2/25/Chefchaouen_%2852189357475%29.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Médina fondée en 1471, maisons chaulées bleu-indigo (tradition séfarade), ruelle principale menant à la place Uta el-Hammam, mosqu"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Massif du Rif, versant sud-ouest, altitude ~600m, confluent de deux oueds, pentes boisées de cèdres et de pins"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ville bleue aux ruelles teintes d'indigo et blanc, nichée dans les montagnes du Rif, nord du Maroc"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Chefchaouen au Maroc"}
  ]},
  {name:"Aït Benhaddou — Maroc",lat:31.0472,lng:-7.1322,desc:"Aït Benhaddou servit de décor à plus de 20 films et séries, dont Gladiator, Game of Thrones et Lawrence d'Arabie. Seules cinq familles habitent encore dans l'enceinte du ksar, le reste de la population ayant migré vers le village moderne.",photo:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Ksar_A%C3%AFt_Benhaddou%2C_Marocco_%28%D8%A3%D9%8A%D8%AA_%D8%A8%D9%86_%D8%AD%D8%AF%D9%88%D8%8C_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%2C_%E2%B4%B0%E2%B5%A2%E2%B5%9C_%E2%B5%83%E2%B4%B0%E2%B4%B7%E2%B4%B7%E2%B5%93%29.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Ksar de pisé du XIe s., tours défensives tronconiques, inscrit UNESCO 1987, décor de Lawrence d'Arabie et Gladiator"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Ksar fortifié en pisé sur oued pérenne, versant nord du Haut Atlas occidental, altitude ~1000 m, zone semi-aride prégnante"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ksar de pisé classé UNESCO, célèbre décor de péplums hollywoodiens, Maroc présaharien"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Aït Benhaddou au Maroc"}
  ]},
  {name:"Vallée du Dadès — Maroc",lat:31.4,lng:-5.975,desc:"Les gorges du Dadès, taillées par la rivière Dadès dans le Haut Atlas, sont surnommées «la Vallée des roses» car les villages voisins produisent 60% de la production mondiale d'eau de rose. Chaque mai, des fêtes de la rose célèbrent la floraison. La route sinueuse à travers les gorges est considérée comme l'une des plus spectaculaires du Maroc.",photo:"photos/vallee_du_dades.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Gorges taillées dans le Jurassique rouge, formations rocheuses en «doigts de singe», kasbahs en pisé du Haut Atlas, alt. ~1500 m"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Vallée encaissée orientée N-S, oued affluent du Drâa, altitude ~1500 m, flancs de grès rouge, versant sud du Haut Atlas"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Gorges aux parois de grès rouge, route des Kasbahs, pré-Sahara marocain, oasis entre falaises jurassiques"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La Vallée du Dadès au Maroc"}
  ]},
  {name:"Île de Djerba — Tunisie",lat:33.8076,lng:10.8451,desc:"Djerba est traditionnellement identifiée à l'île des Lotophages d'Homère, où Ulysse et ses compagnons mangèrent la fleur de lotus qui fit tout oublier. Elle abrite la synagogue El Ghriba, lieu de pèlerinage juif parmi les plus importants du monde, fondée au VIe siècle av. J.-C. selon la tradition.",photo:"photos/ile_de_djerba.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Synagogue à dômes blancs (VIe s. av. J.-C.), poterie traditionnelle au tour manuel, lagune peu profonde, architecture troglodytique"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Île reliée au continent par une chaussée, golfe peu profond, latitude ~34°N, mer intérieure semi-fermée, côte sablonneuse basse"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Île méditerranéenne à majorité berbère, abritant l'une des plus anciennes synagogues du monde et une importante communauté juive h"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Île de Djerba en Tunisie"}
  ]},
  {name:"Tataouine — Tunisie (Ksour)",lat:32.9211,lng:10.4518,desc:"Les ksour (greniers collectifs fortifiés) du gouvernorat de Tataouine servirent de décors pour la planète Tatooine dans Star Wars. George Lucas tomba amoureux des ghorfas — les cellules voûtées empilées en tours — lors d'un repérage en 1975. La ville de Tataouine figura si directement dans le film que Lucas en adopta le nom.",photo:"photos/ile_de_djerba.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Greniers collectifs fortifiés en pierre et gypse, ghorfas voûtées sur 2-3 étages, XIVe-XVIIIe s., architecture troglodytique berbè"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Plateau aride du Dahar, entre hamada rocheuse et ergs, à ~500 m d'altitude, versant oriental du Grand Erg Oriental"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Architecture berbère des ksour, greniers collectifs fortifiés en pierre, décors emblématiques du tournage de Star Wars, Tunisie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Tataouine en Tunisie (Ksour)"}
  ]},
  {name:"Douz — Tunisie (Festival du Sahara)",lat:33.4558,lng:9.0244,desc:"Douz, «porte du Sahara», accueille chaque décembre le Festival international du Sahara — le plus grand rassemblement de culture nomade du monde. Courses de méhara, fantasias équestres, combats de lévriers sloughi et musique gnawa font de cet événement un plongeon dans la culture nomade du Maghreb.",photo:"https://upload.wikimedia.org/wikipedia/commons/9/97/Douz_downtown_01.JPG",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Festival fondé en 1967, dunes atteignant 100m, méharée sur dromadaires Maghrebi, fauconnerie et fantasia, palmeraie de 400 000 pal"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Oasis en bordure du Grand Erg Oriental, à 400m d'altitude, entre chotts salés et mer de sable, gouvernorat semi-aride"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ville-oasis surnommée porte du Sahara, festival annuel en décembre célébrant culture bédouine, Tunisie"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Douz en Tunisie (Festival du Sahara)"}
  ]},
  {name:"Tipaza — Algérie",lat:36.589,lng:2.448,desc:"Tipaza, site archéologique sur la côte méditerranéenne algérienne, fut une cité punique puis romaine capitale. Albert Camus, Algérien de naissance, lui consacra ses premiers essais : «À Tipasa, j'apprenais que je portais en moi les ruines de cette cité». Il y revenait chaque fois qu'il doutait du sens de la vie.",photo:"photos/tipaza.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cité punique romanisée Ier s. av. J.-C., basilique à trois nefs IVe s., amphithéâtre 70x45m, opus africanum, classée UNESCO 1982"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Côte méditerranéenne nord-africaine, promontoire rocheux entre deux oueds, à ~70 km à l'ouest d'une grande capitale côtière"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Site antique punique et romain classé UNESCO, en Algérie, sur un promontoire méditerranéen parmi vignes et oliviers"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Tipaza en Algérie"}
  ]},
  {name:"Volubilis — Maroc",lat:34.0736,lng:-5.5554,desc:"Les mosaïques de Volubilis, vieilles de 1 800 ans, sont encore en place dans les ruines à ciel ouvert — une rareté mondiale. La cité romaine fut abandonnée après le retrait de l'Empire au IIIe siècle et tomba dans l'oubli jusqu'au XIXe siècle.",photo:"photos/tipaza.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Cité romaine, arc triomphal dédié à Caracalla (217 ap. J.-C.), mosaïques in situ des thermes de Gordien, inscrite UNESCO 1997"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Plaine agricole entre Rif et Atlas moyen, versant nord-ouest, à ~30 km d'une ville impériale mérinide, altitude ~400 m"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Ruines romaines aux mosaïques préservées in situ, entourées d'oliveraies, au Maroc"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Le Volubilis au Maroc"}
  ]},
  {name:"Essaouira — Maroc",lat:31.5085,lng:-9.7595,desc:"Jimi Hendrix séjourna à Essaouira en 1969 et aurait voulu y construire un studio. La légende dit qu'il s'inspira de la ville et de sa musique gnaoua pour plusieurs compositions, dont «Castles Made of Sand».",photo:"photos/essaouira.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Remparts en grès oolithique XVIIIe s., bastions Vauban, médina intra-muros ~300m×500m, port naturel à skala nord-sud, fondation ph"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Côte atlantique ventée, alizés constants, cité fortifiée à bastions bastionnés, lagon côtier, plaine littorale semi-aride, orienta"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité des vents au Maroc, remparts bastionnés XVIIIe s. sur l'Atlantique, médina classée UNESCO 2001, festival de musique Gnaoua an"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Essaouira au Maroc"}
  ]},
  {name:"Harar — Éthiopie",lat:9.3125,lng:42.1269,desc:"Harar est la 4e ville sainte de l'Islam et la capitale du café — l'Éthiopie est le berceau du café arabica. Ses 82 mosquées dans une vieille ville de moins d'1 km² en font l'une des villes islamiques les plus denses. Chaque soir, des nourrisseurs de hyènes attirent les hyènes sauvages à la nuit tombante — une tradition centenaire.",photo:"photos/essaouira.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"4e ville sainte de l'Islam, 82 mosquées intra-muros, 368 ruelles, enceinte Jugol du XVIe s. percée de 5 portes, tradition du nourr"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Plateau oriental à ~1850 m, flanc occidental d'un massif tourné vers une plaine semi-aride, à ~525 km est de la capitale fédérale"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Cité islamique médiévale d'Éthiopie orientale, classée UNESCO, célèbre pour ses hyènes apprivoisées et ses maisons décorées"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"L'Harar en Éthiopie"}
  ]},
  {name:"Gorilles de Bwindi — Ouganda",lat:-1.05,lng:29.6667,desc:"Un permis pour tracker les gorilles de Bwindi coûte 700 dollars par personne. Cette somme, reversée directement aux communautés locales, a transformé la protection de la faune en ressource économique majeure et réduit considérablement le braconnage.",photo:"photos/gorilles_de_bwindi.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Forêt afromontagnarde, alt. 1160-2607m, 331km², ~half de la pop. mondiale de gorilles des montagnes, classée UNESCO 1994"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Massif volcanique du Rift albertin, versant oriental, forêt dense à 2000m d'altitude, frontière d'un grand lac équatorial"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Sanctuaire de gorilles des montagnes en Ouganda, l'un des deux seuls habitats naturels de l'espèce au monde"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"Les Gorilles de Bwindi en Ouganda"}
  ]},
  {name:"Zanzibar — Tanzanie (plage Nungwi)",lat:-5.7294,lng:39.2976,desc:"Zanzibar est le lieu de naissance de Freddie Mercury, le chanteur de Queen. Sa maison natale dans Stone Town est devenue un lieu de pèlerinage pour les fans du monde entier. Il quitta l'île à 7 ans pour ne plus jamais y revenir.",photo:"photos/zanzibar.jpg",hints:[
    {bc:"#3b0f0f",tc:"#fca5a5",l:"EXPERT",t:"Pointe nord d'Unguja, sable corallien blanc, dhows de pêche, centre de réhabilitation de tortues vertes, récifs de grès fossilisé"},
    {bc:"#3d1a05",tc:"#fdba74",l:"DIFFICILE",t:"Extrémité nord d'une île de l'océan Indien, lagon peu profond côté ouest, bateaux à voile traditionnels, plage de sable blanc imma"},
    {bc:"#3a2008",tc:"#fde68a",l:"MOYEN",t:"Grande île swahilie de l'océan Indien occidental, plage au nord, connue pour ses tortues marines et ses boutres traditionnels"},
    {bc:"#052e16",tc:"#86efac",l:"FACILE",t:"La plage de Nungwi, Zanzibar, Tanzanie"}
  ]}
];