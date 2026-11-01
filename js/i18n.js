/* ═══════════════════════════════════════════════════════════════════════
   GéoCulture — Traductions (interface + contenu)
   -----------------------------------------------------------------------
   Chargé EN PREMIER (script classique, sans defer) : expose T(), GC_LANG,
   GC_LOCALE, applyI18n(), GC_setLang(), GC_langSwitcher(), GC_localizeData()
   et GC_APPLY_CONTENT() (appelé par js/i18n/content.<lang>.js).

   Langue = choix mémorisé (localStorage 'gc_lang') sinon langue de
   l'appareil ; langue non gérée -> anglais. Changer de langue recharge la page.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var SUPPORTED = ['fr', 'en', 'es', 'de', 'it', 'pt'];
  var NAMES = { fr: 'Français', en: 'English', es: 'Español', de: 'Deutsch', it: 'Italiano', pt: 'Português' };
  var LOCALES = { fr: 'fr-FR', en: 'en-GB', es: 'es-ES', de: 'de-DE', it: 'it-IT', pt: 'pt-BR' };

  function detect() {
    try {
      var saved = localStorage.getItem('gc_lang');
      if (saved && SUPPORTED.indexOf(saved) >= 0) return saved;
    } catch (e) {}
    var nav = (navigator.language || navigator.userLanguage || 'fr').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) >= 0 ? nav : 'en';
  }

  var LANG = detect();

  var D = {};

  /* ─────────────────────────────── FRANÇAIS ─────────────────────────────── */
  D.fr = {
    language: "Langue",
    howToPlay: "Comment jouer", gameMode: "Mode de jeu", difficulty: "Difficulté", allLevels: "Tout niveaux",
    hintsPerPlace: "indices par lieu", dailyChallenge: "Défi du jour", multiplayer: "Multijoueur", leaderboard: "Classement",
    disconnect: "Déconnexion", history: "Profil", connectGoogle: "Connexion Google",
    ruleNormal: "5 manches · indices progressifs · place le marqueur",
    ruleNozoom: "Carte bloquée · pas de zoom · Premium",
    rulePerfection: "10 manches · éliminé si > 50 km · Premium",
    ruleChill: "Pas de stress · recherche du lieu sans timer",
    ruleDaily: "5 lieux identiques pour tous · 1x par jour · classement quotidien",
    ruleEvents: "Retrouve des événements historiques · tolérance selon l'échelle · Premium",
    confirm: "Confirmer", nextHint: "Indice suivant", exploreMap: "Explorer la carte", nextRound: "Manche suivante",
    viewSummary: "Voir le bilan →", eliminated: "❌ Éliminé ! > 50km", finished: "Terminé !", playAgain: "↺ Rejouer",
    backMenu: "⌂ Menu", dailyTitle: "DÉFI DU JOUR", dailySubtitle: "5 lieux · réinitialisé à minuit (FR)",
    dailyPlayed: "✓ Joué", dailyPlay: "Jouer", dailyLB: "Classement du jour", back: "← Retour",
    alreadyPlayed: "Déjà joué aujourd'hui !", premiumTitle: "⭐ Premium", loginRequired: "Connexion requise",
    loginMsg: "Connecte-toi pour accéder à {feature}.", loginBtn: "Se connecter avec Google", legalLink: "Mentions légales",
    mpTitle: "MULTIJOUEUR", mpCreate: "Créer", mpJoin: "Rejoindre", mpCode: "CODE", mpPseudo: "Pseudo",
    mpRounds5: "5 manches", mpRounds10: "10 manches", mpCodeInvalid: "Code invalide", mpModuleNotLoaded: "Module non chargé",
    mpSalon: "Salon : ", mpError: "Erreur : ",
    lvlAll: "Tout niveaux", lvlExpert: "Expert", lvlHard: "Difficile", lvlMedium: "Moyen", lvlEasy: "Facile", lvlVeryEasy: "Très facile",
    lbTitle: "CLASSEMENT", lbDailyTitle: "CLASSEMENT DU JOUR", lbLoading: "Chargement…", lbNoData: "Aucune donnée.",

    hdrRound: "Manche", hdrTotal: "Score total", hdrMaxLeft: "Max restant", menu: "Menu",
    startPrompt: "Démarrez pour commencer", timeLeft: "Temps restant", maxThisLevel: "Score max ce niveau",
    placeHint: "Cliquez sur la carte pour placer votre réponse", confirmAnswer: "Valider ma réponse →",
    exploreTip: "Naviguez librement — cliquez sur les marqueurs pour les détails", backToResults: "← Retour aux résultats",
    loading: "Chargement...", backToGame: "↓ Retour au jeu",

    seoAria: "À propos de GéoCulture",
    seoH1: "GéoCulture — le jeu pour deviner les lieux et monuments du monde",
    seoLead: "GéoCulture est un <strong>jeu de géolocalisation culturelle gratuit</strong>, dans l'esprit d'un GeoGuessr culturel. À partir d'un indice, d'une photo ou d'une devinette historique, place le bon endroit sur la carte du monde — le plus précisément et le plus vite possible.",
    seoHowH: "Comment jouer ?",
    seoHowP: "Chaque manche te propose un lieu ou un événement à retrouver. Les indices vont du plus <strong>cryptique</strong> (mode Expert) au plus <strong>explicite</strong> (mode Facile) : plus tu devines tôt, plus tu marques de points. Clique sur la carte pour placer ta réponse, valide, et découvre à quelle distance tu étais. Un <strong>défi quotidien</strong>, un classement et un mode <strong>multijoueur</strong> complètent l'expérience.",
    seoPlacesH: "Des centaines de lieux et monuments célèbres",
    seoPlacesP: "Explore les plus grands monuments et lieux emblématiques de la planète :",
    seoGrid: "<li>Tour Eiffel</li><li>Machu Picchu</li><li>Colisée de Rome</li><li>Taj Mahal</li><li>Grande Muraille de Chine</li><li>Statue de la Liberté</li><li>Pyramides de Gizeh</li><li>Mont Fuji</li><li>Petra</li><li>Sagrada Família</li><li>Christ Rédempteur</li><li>Angkor Vat</li><li>Big Ben</li><li>Opéra de Sydney</li><li>Acropole d'Athènes</li><li>Chichén Itzá</li><li>Mont Saint-Michel</li><li>Château de Neuschwanstein</li>",
    seoModesH: "Des modes de jeu pour tous",
    seoModes: "<li><strong>Normal</strong> — l'expérience classique, avec chrono.</li><li><strong>Chill</strong> — sans limite de temps, pour explorer tranquillement.</li><li><strong>Perfection</strong> — vise le sans-faute.</li><li><strong>No-Zoom</strong> — carte figée, pour plus de challenge.</li><li><strong>Événements historiques</strong> — devine de grandes batailles et dates de l'Histoire.</li><li><strong>Multijoueur</strong> — affronte tes amis en temps réel.</li>",
    seoFaqH: "Questions fréquentes",
    faq1q: "GéoCulture est-il gratuit ?", faq1a: "Oui, GéoCulture est entièrement gratuit. Un accès Premium optionnel retire les publicités et débloque les modes avancés.",
    faq2q: "Faut-il un compte pour jouer ?", faq2a: "Non, tu peux jouer immédiatement. Un compte Google permet de sauvegarder ton score et de participer au classement.",
    faq3q: "Qu'est-ce que le mode Événements ?", faq3a: "Un mode où tu devines de grands événements historiques (batailles, traités, révolutions) à partir d'indices, puis les situes sur la carte du monde.",
    faq4q: "Peut-on jouer à plusieurs ?", faq4a: "Oui, le mode multijoueur permet de créer une partie et d'affronter d'autres joueurs en temps réel.",

    maxScoreHint: "Score max : précision à 100 m + réponse rapide", nextHintFlash: "Indice suivant !",
    noAttempt: "Pas de tentative", yourAnswer: "Votre réponse", distance: "Distance",
    missedName: "Raté — {name}", missedToast: "Raté ! C'était : {name}", fromTarget: "{d} de la cible",
    noPointPlaced: "Aucun point placé", total: "Total", shareTitle: "Partager votre score", copy: "Copier",
    copyHint: "Le bouton Copier copie votre score complet avec les emojis", scoreCopied: "Score copié !",
    shareDaily: "Défi du jour #{n}", shareBrag: "J'ai marqué {pts} pts !\nSauras-tu faire mieux ?", missed: "raté",
    rank1: "Géographe légendaire", rank2: "Expert international", rank3: "Bon explorateur", rank4: "En progression", rank5: "Débutant courageux",
    colPlace: "Lieu", colScore: "Score / Max", shareMyScore: "Partager mon score", close: "Fermer",
    menuTagline: "Localise les lieux grâce aux indices en un minimum de temps.", modeEvents: "Événements",
    learnMore: "↓ En savoir plus sur GéoCulture", lbUnavailable: "Classement non disponible",
    mpCreateGame: "Créer une partie", mpLevel: "Niveau", mpRounds: "Manches", mpPseudoPh: "Ton pseudo",
    mpCreateBtn: "Créer la partie", mpJoinGame: "Rejoindre une partie", mpRoomCode: "Code du salon", player: "Joueur",
    chooseLevel: "Choisissez votre niveau de difficulté", hints1: "1 indice", hintsN: "{n} indices",

    premiumThanks: "Merci ! Accès Premium activé. Rechargez si nécessaire.", paymentCancelled: "Paiement annulé.",
    loginError: "Erreur de connexion : ", signedOut: "Déconnecté", gameSaved: "Partie sauvegardée !",
    loginForHistory: "Connecte-toi pour voir ton historique", myGames: "Mes parties",
    noGamesYet: "Aucune partie enregistrée pour le moment.", modeNormal: "Mode Normal", modeNozoom: "Mode No-Zoom",
    roundsN: "{n} manches", dangerZone: "Zone de danger", deleteMyAccount: "Supprimer mon compte et mes données",
    deleteWarn: "Supprime définitivement votre compte, vos parties et vos scores. Irréversible.",
    noGamesMode: "Aucune partie pour ce mode.", noGamesToday: "Aucune partie aujourd'hui.",
    unlockFeature: "Débloquez {feature} et tous les modes avancés.", includedPremium: "Inclus dans Premium",
    featLifetime: "Accès Premium à vie, paiement unique", featNoAds: "Sans publicité", featNozoom: "Mode No-Zoom",
    featPerf: "Mode Perfection", featMp: "Mode Multijoueur", featEvents: "Mode Événements historiques", featSupport: "Soutien indépendant",
    freePrice: "Prix libre — choisis ton montant (min. 2€)", amountPh: "Montant (€)", unlockPremium: "Débloquer Premium →",
    securePay: "Paiement sécurisé via Stripe",
    payTerms: "Paiement unique — accès définitif. En validant, tu demandes l'accès immédiat et renonces à ton droit de rétractation de 14 jours.",
    testerCode: "Vous avez un code testeur ?", activate: "Activer", loginFirst: "Connecte-toi d'abord !",
    codeInvalidDot: "Code invalide.", codeNotFound: "Code introuvable.", codeUsed: "Code déjà utilisé.",
    verifying: "Vérification…", premiumActivated: "✓ Premium activé ! Profitez bien.", networkError: "Erreur réseau, réessaie.",
    minAmount: "Le montant minimum est de 2€", maxAmount: "Le montant maximum est de 500€", redirecting: "Redirection...",
    deleteAccountTitle: "⚠ Supprimer le compte", deleteIrrev: "Cette action est {x}.", irreversible: "irréversible",
    deleteAllData: "Toutes vos données seront supprimées :", deleteDataList: "compte, parties, scores, statut premium",
    yesDelete: "Oui, supprimer", cancel: "Annuler", deleting: "Suppression en cours…", accountDeleted: "Compte supprimé",
    dataErased: "Vos données ont été effacées. Au revoir !", error: "Erreur",

    mpRoomNotFound: "Salon introuvable", mpAlreadyStarted: "Partie déjà commencée", mpRoomFull: "Salon complet (8/8)",
    mpConnecting: "Connexion au salon...", mpShareCode: "Partage ce code avec tes amis", mpPlayersN: "Joueurs ({n}/8)",
    me: "(moi)", host: "Hôte", mpLaunch: "▶ Lancer la partie", mpWaitMin: "En attente (min. 2 joueurs)",
    mpWaitHost: "En attente que l'hôte lance...", quit: "Quitter", gameStarting: "La partie commence !",
    roundN: "Manche {n}/{t}", missedCap: "Raté", mpNextRound: "Manche suivante ▶",
    mpWaitNext: "En attente que l'hôte lance la manche suivante...", mpFinalBtn: "🏆 Voir le bilan final",
    mpWaitFinal: "En attente du bilan final…", gameOver: "🏆 Fin de partie !", finalRanking: "Classement final",
    roundDetail: "Détail par manche", awards: "Succès", awAccurate: "Le plus précis", awAccurateDesc: "~{d} en moyenne",
    awFastest: "Le plus réactif", awFastestDesc: "Temps de réponse le plus court", awLongest: "Tir le plus loin",
    awChampion: "Champion", ptsTotal: "{pts} pts au total", awBestRound: "Meilleure manche", eliminatedTag: "Éliminé", answered: "Répondu", hintN: "Indice {n}",
    waitingOthers: "En attente des autres...", gameEnded: "Partie terminée", playerLeft: "Un joueur a quitté la partie.",

    tutoAria: "Tutoriel GéoCulture", tutoAlt: "Aperçu de l'interface de GéoCulture", tutoSkip: "Passer",
    tutoPrev: "Précédent", tutoNext: "Suivant", tutoStart: "Commencer !", tutoDontShow: "Ne plus afficher au démarrage",
    tuto1t: "Bienvenue sur GéoCulture !",
    tuto1x: "Voici l'écran de jeu. On te décrit un lieu, tu dois le <b>localiser sur la carte</b>. Petit tour du propriétaire en quelques étapes.",
    tuto2t: "L'indice à déchiffrer",
    tuto2x: "À gauche : un <b>badge de difficulté</b> (ici EXPERT) et l'<b>indice</b> à résoudre. Plus le badge est difficile, plus l'indice est énigmatique… mais plus tu marques de points.",
    tuto3t: "Besoin d'aide ? Change de niveau",
    tuto3x: "« <b>Indice suivant</b> » dévoile un indice plus facile : Expert → Difficile → Moyen → Facile. Pratique si tu sèches… mais le <b>score maximum baisse</b> à chaque fois.",
    tuto4t: "Ta progression",
    tuto4x: "Ces points indiquent à quel <b>niveau d'indice</b> tu en es (4 paliers, d'Expert à Facile).",
    tuto5t: "Le chrono",
    tuto5x: "Chaque manche est <b>chronométrée</b>. Le « score max restant » diminue avec le temps : réfléchis, mais ne traîne pas trop.",
    tuto6t: "Navigue et place ton point",
    tuto6x: "<b>Zoome</b> (molette ou +/−), déplace-toi, puis <b>clique sur la carte</b> à l'endroit que tu penses juste. Tu peux corriger ton marqueur tant que tu n'as pas validé.",
    tuto7t: "Vise juste : tout est dans la précision",
    tuto7x: "Quand tu es sûr, clique <b>Valider</b>. Ton score dépend de la <b>distance</b> entre ton point et le vrai lieu : plus tu es <b>précis</b>, plus tu gagnes.",
    tuto8t: "Score et manches",
    tuto8x: "En haut : la <b>manche</b> en cours, ton <b>score total</b> et le <b>maximum encore atteignable</b> sur cette manche.",
    tuto9t: "Des modes pour tous les goûts",
    tuto9x: "Depuis le <b>Menu</b> : <b>Classique</b>, <b>No-Zoom</b> (carte figée, pour les pros), <b>Perfection</b> (où seule la précision compte, vise le sans-faute), <b>Événements</b> historiques et <b>Multijoueur</b>. À toi de jouer !",

    repBtn: "Signaler un problème", repTitle: "Signaler un problème",
    repIntro: "Un bug, un lieu mal placé, une idée ? Décris-le, on regarde ça au plus vite. Merci !",
    repType: "Type de problème", repDesc: "Description", repDescPh: "Que s'est-il passé ? Sur quel lieu / quel mode ?",
    repMail: "Ton e-mail (facultatif, pour te répondre)", repMailPh: "toi@exemple.com", repSend: "Envoyer", repSending: "Envoi…",
    repTooShort: "Merci de décrire le problème (au moins quelques mots).",
    repFailed: "Envoi impossible pour le moment, réessaie dans un instant.", repWriteUs: "Ou écris-nous à {mail}.",
    repDone: "Merci ! Ton signalement a bien été envoyé.<br>On regarde ça au plus vite.",
    repCat1: "Bug technique", repCat2: "Erreur sur un lieu ou un indice", repCat3: "Problème de paiement", repCat4: "Suggestion", repCat5: "Autre"
  };

  /* ─────────────────────────────── ENGLISH ─────────────────────────────── */
  D.en = {
    docTitle: "GéoCulture — Cultural geolocation game | Guess places around the world",
    language: "Language",
    howToPlay: "How to play", gameMode: "Game mode", difficulty: "Difficulty", allLevels: "All levels",
    hintsPerPlace: "hints per place", dailyChallenge: "Daily challenge", multiplayer: "Multiplayer", leaderboard: "Leaderboard",
    disconnect: "Sign out", history: "Profile", connectGoogle: "Sign in with Google",
    ruleNormal: "5 rounds · progressive hints · place the marker",
    ruleNozoom: "Locked map · no zoom · Premium",
    rulePerfection: "10 rounds · eliminated if > 50 km · Premium",
    ruleChill: "No stress · find the place with no timer",
    ruleDaily: "Same 5 places for everyone · once a day · daily leaderboard",
    ruleEvents: "Find historical events · tolerance based on scale · Premium",
    confirm: "Confirm", nextHint: "Next hint", exploreMap: "Explore the map", nextRound: "Next round",
    viewSummary: "See results →", eliminated: "❌ Eliminated! > 50km", finished: "Finished!", playAgain: "↺ Play again",
    backMenu: "⌂ Menu", dailyTitle: "DAILY CHALLENGE", dailySubtitle: "5 places · resets at midnight (Paris time)",
    dailyPlayed: "✓ Played", dailyPlay: "Play", dailyLB: "Today's leaderboard", back: "← Back",
    alreadyPlayed: "Already played today!", premiumTitle: "⭐ Premium", loginRequired: "Sign-in required",
    loginMsg: "Sign in to access {feature}.", loginBtn: "Sign in with Google", legalLink: "Legal notice",
    mpTitle: "MULTIPLAYER", mpCreate: "Create", mpJoin: "Join", mpCode: "CODE", mpPseudo: "Nickname",
    mpRounds5: "5 rounds", mpRounds10: "10 rounds", mpCodeInvalid: "Invalid code", mpModuleNotLoaded: "Module not loaded",
    mpSalon: "Room: ", mpError: "Error: ",
    lvlAll: "All levels", lvlExpert: "Expert", lvlHard: "Hard", lvlMedium: "Medium", lvlEasy: "Easy", lvlVeryEasy: "Very easy",
    lbTitle: "LEADERBOARD", lbDailyTitle: "TODAY'S LEADERBOARD", lbLoading: "Loading…", lbNoData: "No data.",

    hdrRound: "Round", hdrTotal: "Total score", hdrMaxLeft: "Max left", menu: "Menu",
    startPrompt: "Start to begin", timeLeft: "Time left", maxThisLevel: "Max score at this level",
    placeHint: "Click the map to place your answer", confirmAnswer: "Confirm my answer →",
    exploreTip: "Move around freely — click the markers for details", backToResults: "← Back to results",
    loading: "Loading...", backToGame: "↓ Back to the game",

    seoAria: "About GéoCulture",
    seoH1: "GéoCulture — the game where you guess the world's places and monuments",
    seoLead: "GéoCulture is a <strong>free cultural geolocation game</strong>, in the spirit of a cultural GeoGuessr. From a hint, a photo or a historical riddle, pin the right spot on the world map — as precisely and as fast as you can.",
    seoHowH: "How to play?",
    seoHowP: "Each round gives you a place or an event to find. Hints range from the most <strong>cryptic</strong> (Expert level) to the most <strong>explicit</strong> (Easy level): the earlier you guess, the more points you score. Click the map to place your answer, confirm, and see how far off you were. A <strong>daily challenge</strong>, a leaderboard and a <strong>multiplayer</strong> mode round out the experience.",
    seoPlacesH: "Hundreds of famous places and monuments",
    seoPlacesP: "Explore the planet's greatest monuments and iconic places:",
    seoGrid: "<li>Eiffel Tower</li><li>Machu Picchu</li><li>Colosseum, Rome</li><li>Taj Mahal</li><li>Great Wall of China</li><li>Statue of Liberty</li><li>Pyramids of Giza</li><li>Mount Fuji</li><li>Petra</li><li>Sagrada Família</li><li>Christ the Redeemer</li><li>Angkor Wat</li><li>Big Ben</li><li>Sydney Opera House</li><li>Acropolis of Athens</li><li>Chichén Itzá</li><li>Mont Saint-Michel</li><li>Neuschwanstein Castle</li>",
    seoModesH: "Game modes for everyone",
    seoModes: "<li><strong>Normal</strong> — the classic experience, against the clock.</li><li><strong>Chill</strong> — no time limit, explore at your own pace.</li><li><strong>Perfection</strong> — aim for a flawless run.</li><li><strong>No-Zoom</strong> — a fixed map, for an extra challenge.</li><li><strong>Historical events</strong> — guess great battles and turning points in history.</li><li><strong>Multiplayer</strong> — take on your friends in real time.</li>",
    seoFaqH: "Frequently asked questions",
    faq1q: "Is GéoCulture free?", faq1a: "Yes, GéoCulture is completely free. An optional Premium access removes ads and unlocks the advanced modes.",
    faq2q: "Do I need an account to play?", faq2a: "No, you can play right away. A Google account lets you save your score and join the leaderboard.",
    faq3q: "What is the Events mode?", faq3a: "A mode where you identify major historical events (battles, treaties, revolutions) from hints, then place them on the world map.",
    faq4q: "Can I play with others?", faq4a: "Yes, multiplayer mode lets you create a game and take on other players in real time.",

    maxScoreHint: "Max score: within 100 m + quick answer", nextHintFlash: "Next hint!",
    noAttempt: "No attempt", yourAnswer: "Your answer", distance: "Distance",
    missedName: "Missed — {name}", missedToast: "Missed! It was: {name}", fromTarget: "{d} from the target",
    noPointPlaced: "No point placed", total: "Total", shareTitle: "Share your score", copy: "Copy",
    copyHint: "The Copy button copies your full score with the emojis", scoreCopied: "Score copied!",
    shareDaily: "Daily challenge #{n}", shareBrag: "I scored {pts} pts!\nCan you beat that?", missed: "missed",
    rank1: "Legendary geographer", rank2: "International expert", rank3: "Seasoned explorer", rank4: "Getting there", rank5: "Brave beginner",
    colPlace: "Place", colScore: "Score / Max", shareMyScore: "Share my score", close: "Close",
    menuTagline: "Find places from hints in as little time as possible.", modeEvents: "Events",
    learnMore: "↓ Learn more about GéoCulture", lbUnavailable: "Leaderboard unavailable",
    mpCreateGame: "Create a game", mpLevel: "Level", mpRounds: "Rounds", mpPseudoPh: "Your nickname",
    mpCreateBtn: "Create game", mpJoinGame: "Join a game", mpRoomCode: "Room code", player: "Player",
    chooseLevel: "Choose your difficulty level", hints1: "1 hint", hintsN: "{n} hints",

    premiumThanks: "Thank you! Premium access is active. Reload if needed.", paymentCancelled: "Payment cancelled.",
    loginError: "Sign-in error: ", signedOut: "Signed out", gameSaved: "Game saved!",
    loginForHistory: "Sign in to see your history", myGames: "My games",
    noGamesYet: "No games recorded yet.", modeNormal: "Normal mode", modeNozoom: "No-Zoom mode",
    roundsN: "{n} rounds", dangerZone: "Danger zone", deleteMyAccount: "Delete my account and my data",
    deleteWarn: "Permanently deletes your account, your games and your scores. Cannot be undone.",
    noGamesMode: "No games for this mode.", noGamesToday: "No games today.",
    unlockFeature: "Unlock {feature} and all the advanced modes.", includedPremium: "Included in Premium",
    featLifetime: "Lifetime Premium access, one-time payment", featNoAds: "No ads", featNozoom: "No-Zoom mode",
    featPerf: "Perfection mode", featMp: "Multiplayer mode", featEvents: "Historical Events mode", featSupport: "Support an independent developer",
    freePrice: "Pay what you want — choose your amount (min. €2)", amountPh: "Amount (€)", unlockPremium: "Unlock Premium →",
    securePay: "Secure payment via Stripe",
    payTerms: "One-time payment — permanent access. By confirming, you request immediate access and waive your 14-day right of withdrawal.",
    testerCode: "Got a tester code?", activate: "Activate", loginFirst: "Sign in first!",
    codeInvalidDot: "Invalid code.", codeNotFound: "Code not found.", codeUsed: "Code already used.",
    verifying: "Checking…", premiumActivated: "✓ Premium activated! Enjoy.", networkError: "Network error, please try again.",
    minAmount: "The minimum amount is €2", maxAmount: "The maximum amount is €500", redirecting: "Redirecting...",
    deleteAccountTitle: "⚠ Delete account", deleteIrrev: "This action is {x}.", irreversible: "irreversible",
    deleteAllData: "All your data will be deleted:", deleteDataList: "account, games, scores, premium status",
    yesDelete: "Yes, delete", cancel: "Cancel", deleting: "Deleting…", accountDeleted: "Account deleted",
    dataErased: "Your data has been erased. Goodbye!", error: "Error",

    mpRoomNotFound: "Room not found", mpAlreadyStarted: "Game already started", mpRoomFull: "Room full (8/8)",
    mpConnecting: "Joining the room...", mpShareCode: "Share this code with your friends", mpPlayersN: "Players ({n}/8)",
    me: "(me)", host: "Host", mpLaunch: "▶ Start the game", mpWaitMin: "Waiting (min. 2 players)",
    mpWaitHost: "Waiting for the host to start...", quit: "Leave", gameStarting: "The game is starting!",
    roundN: "Round {n}/{t}", missedCap: "Missed", mpNextRound: "Next round ▶",
    mpWaitNext: "Waiting for the host to start the next round...", mpFinalBtn: "🏆 See the final results",
    mpWaitFinal: "Waiting for the final results…", gameOver: "🏆 Game over!", finalRanking: "Final ranking",
    roundDetail: "Round by round", awards: "Awards", awAccurate: "Most accurate", awAccurateDesc: "~{d} on average",
    awFastest: "Quickest on the draw", awFastestDesc: "Shortest response time", awLongest: "Longest miss",
    awChampion: "Champion", ptsTotal: "{pts} pts in total", awBestRound: "Best round", eliminatedTag: "Eliminated", answered: "Answered", hintN: "Hint {n}",
    waitingOthers: "Waiting for the others...", gameEnded: "Game over", playerLeft: "A player left the game.",

    tutoAria: "GéoCulture tutorial", tutoAlt: "Preview of the GéoCulture interface", tutoSkip: "Skip",
    tutoPrev: "Previous", tutoNext: "Next", tutoStart: "Let's go!", tutoDontShow: "Don't show at startup again",
    tuto1t: "Welcome to GéoCulture!",
    tuto1x: "This is the game screen. We describe a place, and you have to <b>find it on the map</b>. Here's a quick tour in a few steps.",
    tuto2t: "The hint to crack",
    tuto2x: "On the left: a <b>difficulty badge</b> (here EXPERT) and the <b>hint</b> to solve. The harder the badge, the more cryptic the hint… but the more points you score.",
    tuto3t: "Stuck? Change level",
    tuto3x: "“<b>Next hint</b>” reveals an easier hint: Expert → Hard → Medium → Easy. Handy when you're stuck… but the <b>maximum score drops</b> each time.",
    tuto4t: "Your progress",
    tuto4x: "These dots show which <b>hint level</b> you're at (4 steps, from Expert to Easy).",
    tuto5t: "The clock",
    tuto5x: "Each round is <b>timed</b>. The “max score left” drops as time passes: think it through, but don't dawdle.",
    tuto6t: "Move around and drop your pin",
    tuto6x: "<b>Zoom</b> (scroll wheel or +/−), move around, then <b>click the map</b> where you think it is. You can move your marker until you confirm.",
    tuto7t: "Aim true: it's all about precision",
    tuto7x: "When you're sure, click <b>Confirm</b>. Your score depends on the <b>distance</b> between your pin and the real place: the more <b>precise</b> you are, the more you win.",
    tuto8t: "Score and rounds",
    tuto8x: "At the top: the current <b>round</b>, your <b>total score</b> and the <b>maximum still reachable</b> this round.",
    tuto9t: "Modes for every taste",
    tuto9x: "From the <b>Menu</b>: <b>Classic</b>, <b>No-Zoom</b> (fixed map, for pros), <b>Perfection</b> (only precision counts, aim for a flawless run), historical <b>Events</b> and <b>Multiplayer</b>. Your turn to play!",

    repBtn: "Report a problem", repTitle: "Report a problem",
    repIntro: "A bug, a misplaced location, an idea? Describe it and we'll look into it as soon as possible. Thank you!",
    repType: "Type of problem", repDesc: "Description", repDescPh: "What happened? Which place / which mode?",
    repMail: "Your email (optional, so we can reply)", repMailPh: "you@example.com", repSend: "Send", repSending: "Sending…",
    repTooShort: "Please describe the problem (at least a few words).",
    repFailed: "Can't send right now, please try again in a moment.", repWriteUs: "Or write to us at {mail}.",
    repDone: "Thank you! Your report has been sent.<br>We'll look into it as soon as possible.",
    repCat1: "Technical bug", repCat2: "Error in a place or hint", repCat3: "Payment problem", repCat4: "Suggestion", repCat5: "Other"
  };

  /* ─────────────────────────────── ESPAÑOL ─────────────────────────────── */
  D.es = {
    docTitle: "GéoCulture — Juego de geolocalización cultural | Adivina los lugares del mundo",
    language: "Idioma",
    howToPlay: "Cómo jugar", gameMode: "Modo de juego", difficulty: "Dificultad", allLevels: "Todos los niveles",
    hintsPerPlace: "pistas por lugar", dailyChallenge: "Reto diario", multiplayer: "Multijugador", leaderboard: "Clasificación",
    disconnect: "Cerrar sesión", history: "Perfil", connectGoogle: "Iniciar sesión con Google",
    ruleNormal: "5 rondas · pistas progresivas · coloca el marcador",
    ruleNozoom: "Mapa bloqueado · sin zoom · Premium",
    rulePerfection: "10 rondas · eliminado si > 50 km · Premium",
    ruleChill: "Sin estrés · encuentra el lugar sin cronómetro",
    ruleDaily: "Los mismos 5 lugares para todos · 1 vez al día · clasificación diaria",
    ruleEvents: "Encuentra acontecimientos históricos · tolerancia según la escala · Premium",
    confirm: "Confirmar", nextHint: "Siguiente pista", exploreMap: "Explorar el mapa", nextRound: "Siguiente ronda",
    viewSummary: "Ver el resultado →", eliminated: "❌ ¡Eliminado! > 50km", finished: "¡Terminado!", playAgain: "↺ Jugar otra vez",
    backMenu: "⌂ Menú", dailyTitle: "RETO DIARIO", dailySubtitle: "5 lugares · se reinicia a medianoche (hora de París)",
    dailyPlayed: "✓ Jugado", dailyPlay: "Jugar", dailyLB: "Clasificación del día", back: "← Volver",
    alreadyPlayed: "¡Ya has jugado hoy!", premiumTitle: "⭐ Premium", loginRequired: "Inicio de sesión necesario",
    loginMsg: "Inicia sesión para acceder a {feature}.", loginBtn: "Iniciar sesión con Google", legalLink: "Aviso legal",
    mpTitle: "MULTIJUGADOR", mpCreate: "Crear", mpJoin: "Unirse", mpCode: "CÓDIGO", mpPseudo: "Apodo",
    mpRounds5: "5 rondas", mpRounds10: "10 rondas", mpCodeInvalid: "Código no válido", mpModuleNotLoaded: "Módulo no cargado",
    mpSalon: "Sala: ", mpError: "Error: ",
    lvlAll: "Todos los niveles", lvlExpert: "Experto", lvlHard: "Difícil", lvlMedium: "Medio", lvlEasy: "Fácil", lvlVeryEasy: "Muy fácil",
    lbTitle: "CLASIFICACIÓN", lbDailyTitle: "CLASIFICACIÓN DEL DÍA", lbLoading: "Cargando…", lbNoData: "Sin datos.",

    hdrRound: "Ronda", hdrTotal: "Puntuación total", hdrMaxLeft: "Máx. restante", menu: "Menú",
    startPrompt: "Pulsa para empezar", timeLeft: "Tiempo restante", maxThisLevel: "Puntuación máx. en este nivel",
    placeHint: "Haz clic en el mapa para colocar tu respuesta", confirmAnswer: "Validar mi respuesta →",
    exploreTip: "Muévete libremente — haz clic en los marcadores para ver los detalles", backToResults: "← Volver a los resultados",
    loading: "Cargando...", backToGame: "↓ Volver al juego",

    seoAria: "Acerca de GéoCulture",
    seoH1: "GéoCulture — el juego para adivinar los lugares y monumentos del mundo",
    seoLead: "GéoCulture es un <strong>juego gratuito de geolocalización cultural</strong>, al estilo de un GeoGuessr cultural. A partir de una pista, una foto o un acertijo histórico, sitúa el lugar correcto en el mapa del mundo, con la mayor precisión y rapidez posibles.",
    seoHowH: "¿Cómo se juega?",
    seoHowP: "Cada ronda te propone un lugar o un acontecimiento que encontrar. Las pistas van de la más <strong>críptica</strong> (nivel Experto) a la más <strong>explícita</strong> (nivel Fácil): cuanto antes aciertes, más puntos sumas. Haz clic en el mapa para colocar tu respuesta, valida y descubre a qué distancia estabas. Un <strong>reto diario</strong>, una clasificación y un modo <strong>multijugador</strong> completan la experiencia.",
    seoPlacesH: "Cientos de lugares y monumentos célebres",
    seoPlacesP: "Explora los grandes monumentos y lugares emblemáticos del planeta:",
    seoGrid: "<li>Torre Eiffel</li><li>Machu Picchu</li><li>Coliseo de Roma</li><li>Taj Mahal</li><li>Gran Muralla China</li><li>Estatua de la Libertad</li><li>Pirámides de Guiza</li><li>Monte Fuji</li><li>Petra</li><li>Sagrada Família</li><li>Cristo Redentor</li><li>Angkor Wat</li><li>Big Ben</li><li>Ópera de Sídney</li><li>Acrópolis de Atenas</li><li>Chichén Itzá</li><li>Monte Saint-Michel</li><li>Castillo de Neuschwanstein</li>",
    seoModesH: "Modos de juego para todos",
    seoModes: "<li><strong>Normal</strong> — la experiencia clásica, con cronómetro.</li><li><strong>Chill</strong> — sin límite de tiempo, para explorar con calma.</li><li><strong>Perfection</strong> — busca la partida perfecta.</li><li><strong>No-Zoom</strong> — mapa fijo, para un reto mayor.</li><li><strong>Acontecimientos históricos</strong> — adivina grandes batallas y fechas de la Historia.</li><li><strong>Multijugador</strong> — enfréntate a tus amigos en tiempo real.</li>",
    seoFaqH: "Preguntas frecuentes",
    faq1q: "¿GéoCulture es gratis?", faq1a: "Sí, GéoCulture es totalmente gratuito. Un acceso Premium opcional elimina los anuncios y desbloquea los modos avanzados.",
    faq2q: "¿Hace falta una cuenta para jugar?", faq2a: "No, puedes jugar al instante. Una cuenta de Google te permite guardar tu puntuación y participar en la clasificación.",
    faq3q: "¿Qué es el modo Acontecimientos?", faq3a: "Un modo en el que adivinas grandes acontecimientos históricos (batallas, tratados, revoluciones) a partir de pistas y luego los sitúas en el mapa del mundo.",
    faq4q: "¿Se puede jugar con otras personas?", faq4a: "Sí, el modo multijugador te permite crear una partida y enfrentarte a otros jugadores en tiempo real.",

    maxScoreHint: "Puntuación máx.: precisión a 100 m + respuesta rápida", nextHintFlash: "¡Siguiente pista!",
    noAttempt: "Sin intento", yourAnswer: "Tu respuesta", distance: "Distancia",
    missedName: "Fallado — {name}", missedToast: "¡Fallado! Era: {name}", fromTarget: "a {d} del objetivo",
    noPointPlaced: "Ningún punto colocado", total: "Total", shareTitle: "Comparte tu puntuación", copy: "Copiar",
    copyHint: "El botón Copiar copia tu puntuación completa con los emojis", scoreCopied: "¡Puntuación copiada!",
    shareDaily: "Reto diario #{n}", shareBrag: "¡He hecho {pts} pts!\n¿Puedes superarlo?", missed: "fallado",
    rank1: "Geógrafo legendario", rank2: "Experto internacional", rank3: "Buen explorador", rank4: "En progreso", rank5: "Principiante valiente",
    colPlace: "Lugar", colScore: "Puntos / Máx.", shareMyScore: "Compartir mi puntuación", close: "Cerrar",
    menuTagline: "Encuentra los lugares gracias a las pistas en el menor tiempo posible.", modeEvents: "Acontecimientos",
    learnMore: "↓ Más información sobre GéoCulture", lbUnavailable: "Clasificación no disponible",
    mpCreateGame: "Crear una partida", mpLevel: "Nivel", mpRounds: "Rondas", mpPseudoPh: "Tu apodo",
    mpCreateBtn: "Crear la partida", mpJoinGame: "Unirse a una partida", mpRoomCode: "Código de la sala", player: "Jugador",
    chooseLevel: "Elige tu nivel de dificultad", hints1: "1 pista", hintsN: "{n} pistas",

    premiumThanks: "¡Gracias! Acceso Premium activado. Recarga si es necesario.", paymentCancelled: "Pago cancelado.",
    loginError: "Error de inicio de sesión: ", signedOut: "Sesión cerrada", gameSaved: "¡Partida guardada!",
    loginForHistory: "Inicia sesión para ver tu historial", myGames: "Mis partidas",
    noGamesYet: "Todavía no hay partidas guardadas.", modeNormal: "Modo Normal", modeNozoom: "Modo No-Zoom",
    roundsN: "{n} rondas", dangerZone: "Zona de peligro", deleteMyAccount: "Eliminar mi cuenta y mis datos",
    deleteWarn: "Elimina definitivamente tu cuenta, tus partidas y tus puntuaciones. Irreversible.",
    noGamesMode: "No hay partidas en este modo.", noGamesToday: "Ninguna partida hoy.",
    unlockFeature: "Desbloquea {feature} y todos los modos avanzados.", includedPremium: "Incluido en Premium",
    featLifetime: "Acceso Premium de por vida, pago único", featNoAds: "Sin anuncios", featNozoom: "Modo No-Zoom",
    featPerf: "Modo Perfection", featMp: "Modo Multijugador", featEvents: "Modo Acontecimientos históricos", featSupport: "Apoyo a un desarrollador independiente",
    freePrice: "Precio libre — elige tu importe (mín. 2 €)", amountPh: "Importe (€)", unlockPremium: "Desbloquear Premium →",
    securePay: "Pago seguro con Stripe",
    payTerms: "Pago único — acceso permanente. Al validar, solicitas el acceso inmediato y renuncias a tu derecho de desistimiento de 14 días.",
    testerCode: "¿Tienes un código de probador?", activate: "Activar", loginFirst: "¡Primero inicia sesión!",
    codeInvalidDot: "Código no válido.", codeNotFound: "Código no encontrado.", codeUsed: "Código ya utilizado.",
    verifying: "Comprobando…", premiumActivated: "✓ ¡Premium activado! Que lo disfrutes.", networkError: "Error de red, inténtalo de nuevo.",
    minAmount: "El importe mínimo es de 2 €", maxAmount: "El importe máximo es de 500 €", redirecting: "Redirigiendo...",
    deleteAccountTitle: "⚠ Eliminar la cuenta", deleteIrrev: "Esta acción es {x}.", irreversible: "irreversible",
    deleteAllData: "Se eliminarán todos tus datos:", deleteDataList: "cuenta, partidas, puntuaciones, estado premium",
    yesDelete: "Sí, eliminar", cancel: "Cancelar", deleting: "Eliminando…", accountDeleted: "Cuenta eliminada",
    dataErased: "Tus datos se han borrado. ¡Hasta pronto!", error: "Error",

    mpRoomNotFound: "Sala no encontrada", mpAlreadyStarted: "La partida ya ha empezado", mpRoomFull: "Sala llena (8/8)",
    mpConnecting: "Conectando con la sala...", mpShareCode: "Comparte este código con tus amigos", mpPlayersN: "Jugadores ({n}/8)",
    me: "(yo)", host: "Anfitrión", mpLaunch: "▶ Empezar la partida", mpWaitMin: "Esperando (mín. 2 jugadores)",
    mpWaitHost: "Esperando a que el anfitrión empiece...", quit: "Salir", gameStarting: "¡Empieza la partida!",
    roundN: "Ronda {n}/{t}", missedCap: "Fallado", mpNextRound: "Siguiente ronda ▶",
    mpWaitNext: "Esperando a que el anfitrión lance la siguiente ronda...", mpFinalBtn: "🏆 Ver el resultado final",
    mpWaitFinal: "Esperando el resultado final…", gameOver: "🏆 ¡Fin de la partida!", finalRanking: "Clasificación final",
    roundDetail: "Detalle por ronda", awards: "Logros", awAccurate: "El más preciso", awAccurateDesc: "~{d} de media",
    awFastest: "El más rápido", awFastestDesc: "Menor tiempo de respuesta", awLongest: "El tiro más lejano",
    awChampion: "Campeón", ptsTotal: "{pts} pts en total", awBestRound: "Mejor ronda", eliminatedTag: "Eliminado", answered: "Respondido", hintN: "Pista {n}",
    waitingOthers: "Esperando a los demás...", gameEnded: "Partida terminada", playerLeft: "Un jugador ha abandonado la partida.",

    tutoAria: "Tutorial de GéoCulture", tutoAlt: "Vista previa de la interfaz de GéoCulture", tutoSkip: "Saltar",
    tutoPrev: "Anterior", tutoNext: "Siguiente", tutoStart: "¡Empezar!", tutoDontShow: "No volver a mostrar al inicio",
    tuto1t: "¡Bienvenido a GéoCulture!",
    tuto1x: "Esta es la pantalla de juego. Te describimos un lugar y tienes que <b>situarlo en el mapa</b>. Te lo enseñamos en unos pocos pasos.",
    tuto2t: "La pista que descifrar",
    tuto2x: "A la izquierda: una <b>insignia de dificultad</b> (aquí EXPERTO) y la <b>pista</b> que resolver. Cuanto más difícil es la insignia, más enigmática es la pista… pero más puntos sumas.",
    tuto3t: "¿Necesitas ayuda? Cambia de nivel",
    tuto3x: "«<b>Siguiente pista</b>» muestra una pista más fácil: Experto → Difícil → Medio → Fácil. Útil si te atascas… pero la <b>puntuación máxima baja</b> cada vez.",
    tuto4t: "Tu progreso",
    tuto4x: "Estos puntos indican en qué <b>nivel de pista</b> estás (4 escalones, de Experto a Fácil).",
    tuto5t: "El cronómetro",
    tuto5x: "Cada ronda está <b>cronometrada</b>. La «puntuación máx. restante» baja con el tiempo: piénsalo bien, pero no te entretengas.",
    tuto6t: "Muévete y coloca tu punto",
    tuto6x: "<b>Haz zoom</b> (rueda o +/−), muévete y luego <b>haz clic en el mapa</b> donde creas que está. Puedes corregir tu marcador mientras no hayas validado.",
    tuto7t: "Apunta bien: todo es cuestión de precisión",
    tuto7x: "Cuando estés seguro, pulsa <b>Validar</b>. Tu puntuación depende de la <b>distancia</b> entre tu punto y el lugar real: cuanto más <b>preciso</b> seas, más ganas.",
    tuto8t: "Puntuación y rondas",
    tuto8x: "Arriba: la <b>ronda</b> en curso, tu <b>puntuación total</b> y el <b>máximo aún alcanzable</b> en esta ronda.",
    tuto9t: "Modos para todos los gustos",
    tuto9x: "Desde el <b>Menú</b>: <b>Clásico</b>, <b>No-Zoom</b> (mapa fijo, para expertos), <b>Perfection</b> (solo cuenta la precisión, busca la perfección), <b>Acontecimientos</b> históricos y <b>Multijugador</b>. ¡Te toca jugar!",

    repBtn: "Informar de un problema", repTitle: "Informar de un problema",
    repIntro: "¿Un error, un lugar mal situado, una idea? Descríbelo y lo revisaremos lo antes posible. ¡Gracias!",
    repType: "Tipo de problema", repDesc: "Descripción", repDescPh: "¿Qué ha pasado? ¿En qué lugar / qué modo?",
    repMail: "Tu correo (opcional, para responderte)", repMailPh: "tu@ejemplo.com", repSend: "Enviar", repSending: "Enviando…",
    repTooShort: "Describe el problema, por favor (al menos unas palabras).",
    repFailed: "No se puede enviar ahora mismo, inténtalo de nuevo en un momento.", repWriteUs: "O escríbenos a {mail}.",
    repDone: "¡Gracias! Tu informe se ha enviado.<br>Lo revisaremos lo antes posible.",
    repCat1: "Error técnico", repCat2: "Error en un lugar o una pista", repCat3: "Problema de pago", repCat4: "Sugerencia", repCat5: "Otro"
  };

  /* ─────────────────────────────── DEUTSCH ─────────────────────────────── */
  D.de = {
    docTitle: "GéoCulture — Kulturelles Geolokalisierungsspiel | Errate Orte auf der ganzen Welt",
    language: "Sprache",
    howToPlay: "So wird gespielt", gameMode: "Spielmodus", difficulty: "Schwierigkeit", allLevels: "Alle Stufen",
    hintsPerPlace: "Hinweise pro Ort", dailyChallenge: "Tages-Challenge", multiplayer: "Mehrspieler", leaderboard: "Rangliste",
    disconnect: "Abmelden", history: "Profil", connectGoogle: "Mit Google anmelden",
    ruleNormal: "5 Runden · immer leichtere Hinweise · Markierung setzen",
    ruleNozoom: "Gesperrte Karte · kein Zoom · Premium",
    rulePerfection: "10 Runden · raus bei > 50 km · Premium",
    ruleChill: "Kein Stress · den Ort ohne Zeitlimit suchen",
    ruleDaily: "Dieselben 5 Orte für alle · 1x pro Tag · Tagesrangliste",
    ruleEvents: "Historische Ereignisse finden · Toleranz je nach Größenordnung · Premium",
    confirm: "Bestätigen", nextHint: "Nächster Hinweis", exploreMap: "Karte erkunden", nextRound: "Nächste Runde",
    viewSummary: "Zur Auswertung →", eliminated: "❌ Ausgeschieden! > 50km", finished: "Geschafft!", playAgain: "↺ Nochmal spielen",
    backMenu: "⌂ Menü", dailyTitle: "TAGES-CHALLENGE", dailySubtitle: "5 Orte · Neustart um Mitternacht (Pariser Zeit)",
    dailyPlayed: "✓ Gespielt", dailyPlay: "Spielen", dailyLB: "Tagesrangliste", back: "← Zurück",
    alreadyPlayed: "Heute schon gespielt!", premiumTitle: "⭐ Premium", loginRequired: "Anmeldung erforderlich",
    loginMsg: "Melde dich an, um {feature} zu nutzen.", loginBtn: "Mit Google anmelden", legalLink: "Impressum",
    mpTitle: "MEHRSPIELER", mpCreate: "Erstellen", mpJoin: "Beitreten", mpCode: "CODE", mpPseudo: "Spitzname",
    mpRounds5: "5 Runden", mpRounds10: "10 Runden", mpCodeInvalid: "Ungültiger Code", mpModuleNotLoaded: "Modul nicht geladen",
    mpSalon: "Raum: ", mpError: "Fehler: ",
    lvlAll: "Alle Stufen", lvlExpert: "Experte", lvlHard: "Schwer", lvlMedium: "Mittel", lvlEasy: "Leicht", lvlVeryEasy: "Sehr leicht",
    lbTitle: "RANGLISTE", lbDailyTitle: "TAGESRANGLISTE", lbLoading: "Wird geladen…", lbNoData: "Keine Daten.",

    hdrRound: "Runde", hdrTotal: "Gesamtpunkte", hdrMaxLeft: "Max. übrig", menu: "Menü",
    startPrompt: "Zum Starten antippen", timeLeft: "Verbleibende Zeit", maxThisLevel: "Max. Punkte auf dieser Stufe",
    placeHint: "Klicke auf die Karte, um deine Antwort zu setzen", confirmAnswer: "Antwort bestätigen →",
    exploreTip: "Bewege dich frei — klicke auf die Markierungen für Details", backToResults: "← Zurück zu den Ergebnissen",
    loading: "Wird geladen...", backToGame: "↓ Zurück zum Spiel",

    seoAria: "Über GéoCulture",
    seoH1: "GéoCulture — das Spiel, in dem du Orte und Sehenswürdigkeiten der Welt errätst",
    seoLead: "GéoCulture ist ein <strong>kostenloses Kultur-Geolokalisierungsspiel</strong>, ganz im Stil eines kulturellen GeoGuessr. Anhand eines Hinweises, eines Fotos oder eines historischen Rätsels markierst du die richtige Stelle auf der Weltkarte — so genau und so schnell wie möglich.",
    seoHowH: "Wie wird gespielt?",
    seoHowP: "Jede Runde stellt dir einen Ort oder ein Ereignis zum Finden. Die Hinweise reichen vom <strong>kryptischsten</strong> (Stufe Experte) bis zum <strong>eindeutigsten</strong> (Stufe Leicht): Je früher du es errätst, desto mehr Punkte bekommst du. Klicke auf die Karte, um deine Antwort zu setzen, bestätige und sieh, wie weit du daneben lagst. Eine <strong>Tages-Challenge</strong>, eine Rangliste und ein <strong>Mehrspieler</strong>-Modus runden das Spiel ab.",
    seoPlacesH: "Hunderte berühmte Orte und Sehenswürdigkeiten",
    seoPlacesP: "Entdecke die größten Sehenswürdigkeiten und Wahrzeichen der Welt:",
    seoGrid: "<li>Eiffelturm</li><li>Machu Picchu</li><li>Kolosseum in Rom</li><li>Taj Mahal</li><li>Chinesische Mauer</li><li>Freiheitsstatue</li><li>Pyramiden von Gizeh</li><li>Fuji</li><li>Petra</li><li>Sagrada Família</li><li>Cristo Redentor</li><li>Angkor Wat</li><li>Big Ben</li><li>Opernhaus Sydney</li><li>Akropolis von Athen</li><li>Chichén Itzá</li><li>Mont-Saint-Michel</li><li>Schloss Neuschwanstein</li>",
    seoModesH: "Spielmodi für alle",
    seoModes: "<li><strong>Normal</strong> — das klassische Spiel, mit Zeitlimit.</li><li><strong>Chill</strong> — ohne Zeitlimit, um in Ruhe zu erkunden.</li><li><strong>Perfection</strong> — das fehlerfreie Spiel als Ziel.</li><li><strong>No-Zoom</strong> — feste Karte, für mehr Herausforderung.</li><li><strong>Historische Ereignisse</strong> — errate große Schlachten und Wendepunkte der Geschichte.</li><li><strong>Mehrspieler</strong> — tritt in Echtzeit gegen deine Freunde an.</li>",
    seoFaqH: "Häufige Fragen",
    faq1q: "Ist GéoCulture kostenlos?", faq1a: "Ja, GéoCulture ist komplett kostenlos. Ein optionaler Premium-Zugang entfernt die Werbung und schaltet die erweiterten Modi frei.",
    faq2q: "Brauche ich ein Konto zum Spielen?", faq2a: "Nein, du kannst sofort loslegen. Mit einem Google-Konto kannst du deinen Punktestand speichern und an der Rangliste teilnehmen.",
    faq3q: "Was ist der Ereignis-Modus?", faq3a: "Ein Modus, in dem du anhand von Hinweisen große historische Ereignisse (Schlachten, Verträge, Revolutionen) errätst und sie dann auf der Weltkarte verortest.",
    faq4q: "Kann man zu mehreren spielen?", faq4a: "Ja, im Mehrspieler-Modus kannst du eine Partie erstellen und in Echtzeit gegen andere antreten.",

    maxScoreHint: "Max. Punkte: auf 100 m genau + schnelle Antwort", nextHintFlash: "Nächster Hinweis!",
    noAttempt: "Kein Versuch", yourAnswer: "Deine Antwort", distance: "Entfernung",
    missedName: "Daneben — {name}", missedToast: "Daneben! Gesucht war: {name}", fromTarget: "{d} vom Ziel entfernt",
    noPointPlaced: "Keine Markierung gesetzt", total: "Gesamt", shareTitle: "Teile deinen Punktestand", copy: "Kopieren",
    copyHint: "Die Schaltfläche Kopieren kopiert deinen kompletten Punktestand mit Emojis", scoreCopied: "Punktestand kopiert!",
    shareDaily: "Tages-Challenge #{n}", shareBrag: "Ich habe {pts} Pkt. geholt!\nSchaffst du mehr?", missed: "daneben",
    rank1: "Legendäre:r Geograf:in", rank2: "Internationale:r Expert:in", rank3: "Gute:r Entdecker:in", rank4: "Auf dem Weg", rank5: "Mutige:r Anfänger:in",
    colPlace: "Ort", colScore: "Punkte / Max.", shareMyScore: "Punktestand teilen", close: "Schließen",
    menuTagline: "Finde die Orte anhand von Hinweisen in möglichst kurzer Zeit.", modeEvents: "Ereignisse",
    learnMore: "↓ Mehr über GéoCulture", lbUnavailable: "Rangliste nicht verfügbar",
    mpCreateGame: "Partie erstellen", mpLevel: "Stufe", mpRounds: "Runden", mpPseudoPh: "Dein Spitzname",
    mpCreateBtn: "Partie erstellen", mpJoinGame: "Einer Partie beitreten", mpRoomCode: "Raumcode", player: "Spieler:in",
    chooseLevel: "Wähle deine Schwierigkeitsstufe", hints1: "1 Hinweis", hintsN: "{n} Hinweise",

    premiumThanks: "Danke! Premium ist aktiviert. Lade die Seite bei Bedarf neu.", paymentCancelled: "Zahlung abgebrochen.",
    loginError: "Anmeldefehler: ", signedOut: "Abgemeldet", gameSaved: "Partie gespeichert!",
    loginForHistory: "Melde dich an, um deinen Verlauf zu sehen", myGames: "Meine Partien",
    noGamesYet: "Noch keine Partien gespeichert.", modeNormal: "Modus Normal", modeNozoom: "Modus No-Zoom",
    roundsN: "{n} Runden", dangerZone: "Gefahrenzone", deleteMyAccount: "Mein Konto und meine Daten löschen",
    deleteWarn: "Löscht dein Konto, deine Partien und deine Punktestände endgültig. Nicht rückgängig zu machen.",
    noGamesMode: "Keine Partien in diesem Modus.", noGamesToday: "Heute noch keine Partien.",
    unlockFeature: "Schalte {feature} und alle erweiterten Modi frei.", includedPremium: "In Premium enthalten",
    featLifetime: "Lebenslanger Premium-Zugang, einmalige Zahlung", featNoAds: "Keine Werbung", featNozoom: "Modus No-Zoom",
    featPerf: "Modus Perfection", featMp: "Mehrspieler-Modus", featEvents: "Modus Historische Ereignisse", featSupport: "Unterstützt einen unabhängigen Entwickler",
    freePrice: "Freier Preis — wähle deinen Betrag (mind. 2 €)", amountPh: "Betrag (€)", unlockPremium: "Premium freischalten →",
    securePay: "Sichere Zahlung über Stripe",
    payTerms: "Einmalige Zahlung — dauerhafter Zugang. Mit der Bestätigung verlangst du den sofortigen Zugang und verzichtest auf dein 14-tägiges Widerrufsrecht.",
    testerCode: "Du hast einen Testercode?", activate: "Aktivieren", loginFirst: "Melde dich zuerst an!",
    codeInvalidDot: "Ungültiger Code.", codeNotFound: "Code nicht gefunden.", codeUsed: "Code bereits verwendet.",
    verifying: "Wird geprüft…", premiumActivated: "✓ Premium aktiviert! Viel Spaß.", networkError: "Netzwerkfehler, bitte erneut versuchen.",
    minAmount: "Der Mindestbetrag beträgt 2 €", maxAmount: "Der Höchstbetrag beträgt 500 €", redirecting: "Weiterleitung...",
    deleteAccountTitle: "⚠ Konto löschen", deleteIrrev: "Diese Aktion ist {x}.", irreversible: "unwiderruflich",
    deleteAllData: "Alle deine Daten werden gelöscht:", deleteDataList: "Konto, Partien, Punktestände, Premium-Status",
    yesDelete: "Ja, löschen", cancel: "Abbrechen", deleting: "Wird gelöscht…", accountDeleted: "Konto gelöscht",
    dataErased: "Deine Daten wurden gelöscht. Auf Wiedersehen!", error: "Fehler",

    mpRoomNotFound: "Raum nicht gefunden", mpAlreadyStarted: "Partie hat bereits begonnen", mpRoomFull: "Raum voll (8/8)",
    mpConnecting: "Verbindung zum Raum...", mpShareCode: "Teile diesen Code mit deinen Freunden", mpPlayersN: "Spieler ({n}/8)",
    me: "(ich)", host: "Gastgeber", mpLaunch: "▶ Partie starten", mpWaitMin: "Warten (mind. 2 Spieler)",
    mpWaitHost: "Warten, bis der Gastgeber startet...", quit: "Verlassen", gameStarting: "Die Partie beginnt!",
    roundN: "Runde {n}/{t}", missedCap: "Daneben", mpNextRound: "Nächste Runde ▶",
    mpWaitNext: "Warten, bis der Gastgeber die nächste Runde startet...", mpFinalBtn: "🏆 Endergebnis ansehen",
    mpWaitFinal: "Warten auf das Endergebnis…", gameOver: "🏆 Spielende!", finalRanking: "Endstand",
    roundDetail: "Runde für Runde", awards: "Auszeichnungen", awAccurate: "Am genauesten", awAccurateDesc: "~{d} im Schnitt",
    awFastest: "Am schnellsten", awFastestDesc: "Kürzeste Antwortzeit", awLongest: "Weitester Fehlschuss",
    awChampion: "Champion", ptsTotal: "{pts} Pkt. insgesamt", awBestRound: "Beste Runde", eliminatedTag: "Raus", answered: "Geantwortet", hintN: "Hinweis {n}",
    waitingOthers: "Warten auf die anderen...", gameEnded: "Partie beendet", playerLeft: "Ein Spieler hat die Partie verlassen.",

    tutoAria: "GéoCulture-Tutorial", tutoAlt: "Vorschau der GéoCulture-Oberfläche", tutoSkip: "Überspringen",
    tutoPrev: "Zurück", tutoNext: "Weiter", tutoStart: "Los geht's!", tutoDontShow: "Beim Start nicht mehr anzeigen",
    tuto1t: "Willkommen bei GéoCulture!",
    tuto1x: "Das ist der Spielbildschirm. Wir beschreiben dir einen Ort, und du musst ihn <b>auf der Karte finden</b>. Hier ein kurzer Rundgang in wenigen Schritten.",
    tuto2t: "Der Hinweis zum Entschlüsseln",
    tuto2x: "Links: ein <b>Schwierigkeitsabzeichen</b> (hier EXPERTE) und der <b>Hinweis</b>, den du lösen musst. Je schwerer das Abzeichen, desto rätselhafter der Hinweis… aber desto mehr Punkte gibt es.",
    tuto3t: "Du kommst nicht weiter? Wechsle die Stufe",
    tuto3x: "„<b>Nächster Hinweis</b>“ zeigt einen leichteren Hinweis: Experte → Schwer → Mittel → Leicht. Praktisch, wenn du feststeckst… aber die <b>maximale Punktzahl sinkt</b> jedes Mal.",
    tuto4t: "Dein Fortschritt",
    tuto4x: "Diese Punkte zeigen, auf welcher <b>Hinweisstufe</b> du bist (4 Stufen, von Experte bis Leicht).",
    tuto5t: "Die Uhr",
    tuto5x: "Jede Runde läuft <b>auf Zeit</b>. Die „max. übrigen Punkte“ sinken mit der Zeit: Denk nach, aber trödle nicht zu lange.",
    tuto6t: "Bewege dich und setze deine Markierung",
    tuto6x: "<b>Zoome</b> (Mausrad oder +/−), bewege dich und <b>klicke dann auf die Karte</b>, wo du den Ort vermutest. Du kannst deine Markierung ändern, bis du bestätigst.",
    tuto7t: "Ziel genau: Präzision ist alles",
    tuto7x: "Wenn du sicher bist, klicke auf <b>Bestätigen</b>. Deine Punkte hängen von der <b>Entfernung</b> zwischen deiner Markierung und dem echten Ort ab: Je <b>genauer</b> du bist, desto mehr gewinnst du.",
    tuto8t: "Punkte und Runden",
    tuto8x: "Oben: die aktuelle <b>Runde</b>, deine <b>Gesamtpunkte</b> und das in dieser Runde <b>noch erreichbare Maximum</b>.",
    tuto9t: "Modi für jeden Geschmack",
    tuto9x: "Im <b>Menü</b>: <b>Klassisch</b>, <b>No-Zoom</b> (feste Karte, für Profis), <b>Perfection</b> (nur Präzision zählt, das fehlerfreie Spiel als Ziel), historische <b>Ereignisse</b> und <b>Mehrspieler</b>. Jetzt bist du dran!",

    repBtn: "Problem melden", repTitle: "Problem melden",
    repIntro: "Ein Fehler, ein falsch platzierter Ort, eine Idee? Beschreib es uns, wir kümmern uns so schnell wie möglich darum. Danke!",
    repType: "Art des Problems", repDesc: "Beschreibung", repDescPh: "Was ist passiert? Bei welchem Ort / in welchem Modus?",
    repMail: "Deine E-Mail (optional, für eine Antwort)", repMailPh: "du@beispiel.de", repSend: "Senden", repSending: "Wird gesendet…",
    repTooShort: "Bitte beschreibe das Problem (zumindest ein paar Worte).",
    repFailed: "Senden ist gerade nicht möglich, versuche es gleich noch einmal.", repWriteUs: "Oder schreib uns an {mail}.",
    repDone: "Danke! Deine Meldung wurde gesendet.<br>Wir kümmern uns so schnell wie möglich darum.",
    repCat1: "Technischer Fehler", repCat2: "Fehler bei einem Ort oder Hinweis", repCat3: "Zahlungsproblem", repCat4: "Vorschlag", repCat5: "Sonstiges"
  };

  /* ─────────────────────────────── ITALIANO ─────────────────────────────── */
  D.it = {
    docTitle: "GéoCulture — Gioco di geolocalizzazione culturale | Indovina i luoghi del mondo",
    language: "Lingua",
    howToPlay: "Come si gioca", gameMode: "Modalità di gioco", difficulty: "Difficoltà", allLevels: "Tutti i livelli",
    hintsPerPlace: "indizi per luogo", dailyChallenge: "Sfida del giorno", multiplayer: "Multigiocatore", leaderboard: "Classifica",
    disconnect: "Esci", history: "Profilo", connectGoogle: "Accedi con Google",
    ruleNormal: "5 round · indizi progressivi · posiziona il segnaposto",
    ruleNozoom: "Mappa bloccata · niente zoom · Premium",
    rulePerfection: "10 round · eliminato se > 50 km · Premium",
    ruleChill: "Niente stress · cerca il luogo senza timer",
    ruleDaily: "Gli stessi 5 luoghi per tutti · 1 volta al giorno · classifica giornaliera",
    ruleEvents: "Ritrova eventi storici · tolleranza in base alla scala · Premium",
    confirm: "Conferma", nextHint: "Indizio successivo", exploreMap: "Esplora la mappa", nextRound: "Round successivo",
    viewSummary: "Vedi il risultato →", eliminated: "❌ Eliminato! > 50km", finished: "Finito!", playAgain: "↺ Gioca ancora",
    backMenu: "⌂ Menu", dailyTitle: "SFIDA DEL GIORNO", dailySubtitle: "5 luoghi · si azzera a mezzanotte (ora di Parigi)",
    dailyPlayed: "✓ Giocato", dailyPlay: "Gioca", dailyLB: "Classifica del giorno", back: "← Indietro",
    alreadyPlayed: "Hai già giocato oggi!", premiumTitle: "⭐ Premium", loginRequired: "Accesso richiesto",
    loginMsg: "Accedi per usare {feature}.", loginBtn: "Accedi con Google", legalLink: "Note legali",
    mpTitle: "MULTIGIOCATORE", mpCreate: "Crea", mpJoin: "Unisciti", mpCode: "CODICE", mpPseudo: "Nickname",
    mpRounds5: "5 round", mpRounds10: "10 round", mpCodeInvalid: "Codice non valido", mpModuleNotLoaded: "Modulo non caricato",
    mpSalon: "Stanza: ", mpError: "Errore: ",
    lvlAll: "Tutti i livelli", lvlExpert: "Esperto", lvlHard: "Difficile", lvlMedium: "Medio", lvlEasy: "Facile", lvlVeryEasy: "Facilissimo",
    lbTitle: "CLASSIFICA", lbDailyTitle: "CLASSIFICA DEL GIORNO", lbLoading: "Caricamento…", lbNoData: "Nessun dato.",

    hdrRound: "Round", hdrTotal: "Punteggio totale", hdrMaxLeft: "Max rimanente", menu: "Menu",
    startPrompt: "Tocca per iniziare", timeLeft: "Tempo rimanente", maxThisLevel: "Punteggio max a questo livello",
    placeHint: "Clicca sulla mappa per posizionare la tua risposta", confirmAnswer: "Conferma la risposta →",
    exploreTip: "Muoviti liberamente — clicca sui segnaposto per i dettagli", backToResults: "← Torna ai risultati",
    loading: "Caricamento...", backToGame: "↓ Torna al gioco",

    seoAria: "Informazioni su GéoCulture",
    seoH1: "GéoCulture — il gioco per indovinare i luoghi e i monumenti del mondo",
    seoLead: "GéoCulture è un <strong>gioco gratuito di geolocalizzazione culturale</strong>, nello spirito di un GeoGuessr culturale. Partendo da un indizio, una foto o un indovinello storico, individua il punto giusto sulla mappa del mondo, con la massima precisione e il più in fretta possibile.",
    seoHowH: "Come si gioca?",
    seoHowP: "Ogni round ti propone un luogo o un evento da ritrovare. Gli indizi vanno dal più <strong>criptico</strong> (livello Esperto) al più <strong>esplicito</strong> (livello Facile): prima indovini, più punti fai. Clicca sulla mappa per posizionare la risposta, conferma e scopri quanto eri lontano. Una <strong>sfida del giorno</strong>, una classifica e una modalità <strong>multigiocatore</strong> completano l'esperienza.",
    seoPlacesH: "Centinaia di luoghi e monumenti celebri",
    seoPlacesP: "Esplora i più grandi monumenti e luoghi simbolo del pianeta:",
    seoGrid: "<li>Torre Eiffel</li><li>Machu Picchu</li><li>Colosseo</li><li>Taj Mahal</li><li>Grande Muraglia cinese</li><li>Statua della Libertà</li><li>Piramidi di Giza</li><li>Monte Fuji</li><li>Petra</li><li>Sagrada Família</li><li>Cristo Redentore</li><li>Angkor Wat</li><li>Big Ben</li><li>Opera House di Sydney</li><li>Acropoli di Atene</li><li>Chichén Itzá</li><li>Mont-Saint-Michel</li><li>Castello di Neuschwanstein</li>",
    seoModesH: "Modalità di gioco per tutti",
    seoModes: "<li><strong>Normal</strong> — l'esperienza classica, con il timer.</li><li><strong>Chill</strong> — senza limiti di tempo, per esplorare con calma.</li><li><strong>Perfection</strong> — punta al percorso perfetto.</li><li><strong>No-Zoom</strong> — mappa fissa, per una sfida in più.</li><li><strong>Eventi storici</strong> — indovina grandi battaglie e date della Storia.</li><li><strong>Multigiocatore</strong> — sfida i tuoi amici in tempo reale.</li>",
    seoFaqH: "Domande frequenti",
    faq1q: "GéoCulture è gratis?", faq1a: "Sì, GéoCulture è completamente gratuito. Un accesso Premium facoltativo elimina la pubblicità e sblocca le modalità avanzate.",
    faq2q: "Serve un account per giocare?", faq2a: "No, puoi giocare subito. Un account Google ti permette di salvare il punteggio e partecipare alla classifica.",
    faq3q: "Cos'è la modalità Eventi?", faq3a: "Una modalità in cui indovini grandi eventi storici (battaglie, trattati, rivoluzioni) a partire da indizi, e poi li collochi sulla mappa del mondo.",
    faq4q: "Si può giocare in più persone?", faq4a: "Sì, la modalità multigiocatore permette di creare una partita e sfidare altri giocatori in tempo reale.",

    maxScoreHint: "Punteggio max: precisione entro 100 m + risposta rapida", nextHintFlash: "Indizio successivo!",
    noAttempt: "Nessun tentativo", yourAnswer: "La tua risposta", distance: "Distanza",
    missedName: "Mancato — {name}", missedToast: "Mancato! Era: {name}", fromTarget: "a {d} dall'obiettivo",
    noPointPlaced: "Nessun punto posizionato", total: "Totale", shareTitle: "Condividi il tuo punteggio", copy: "Copia",
    copyHint: "Il pulsante Copia copia il tuo punteggio completo con le emoji", scoreCopied: "Punteggio copiato!",
    shareDaily: "Sfida del giorno #{n}", shareBrag: "Ho fatto {pts} punti!\nSai fare di meglio?", missed: "mancato",
    rank1: "Geografo leggendario", rank2: "Esperto internazionale", rank3: "Buon esploratore", rank4: "In crescita", rank5: "Principiante coraggioso",
    colPlace: "Luogo", colScore: "Punti / Max", shareMyScore: "Condividi il mio punteggio", close: "Chiudi",
    menuTagline: "Trova i luoghi grazie agli indizi nel minor tempo possibile.", modeEvents: "Eventi",
    learnMore: "↓ Scopri di più su GéoCulture", lbUnavailable: "Classifica non disponibile",
    mpCreateGame: "Crea una partita", mpLevel: "Livello", mpRounds: "Round", mpPseudoPh: "Il tuo nickname",
    mpCreateBtn: "Crea la partita", mpJoinGame: "Unisciti a una partita", mpRoomCode: "Codice della stanza", player: "Giocatore",
    chooseLevel: "Scegli il tuo livello di difficoltà", hints1: "1 indizio", hintsN: "{n} indizi",

    premiumThanks: "Grazie! Accesso Premium attivato. Ricarica se necessario.", paymentCancelled: "Pagamento annullato.",
    loginError: "Errore di accesso: ", signedOut: "Disconnesso", gameSaved: "Partita salvata!",
    loginForHistory: "Accedi per vedere la tua cronologia", myGames: "Le mie partite",
    noGamesYet: "Ancora nessuna partita salvata.", modeNormal: "Modalità Normal", modeNozoom: "Modalità No-Zoom",
    roundsN: "{n} round", dangerZone: "Zona pericolosa", deleteMyAccount: "Elimina il mio account e i miei dati",
    deleteWarn: "Elimina definitivamente il tuo account, le tue partite e i tuoi punteggi. Irreversibile.",
    noGamesMode: "Nessuna partita in questa modalità.", noGamesToday: "Nessuna partita oggi.",
    unlockFeature: "Sblocca {feature} e tutte le modalità avanzate.", includedPremium: "Incluso in Premium",
    featLifetime: "Accesso Premium a vita, pagamento unico", featNoAds: "Senza pubblicità", featNozoom: "Modalità No-Zoom",
    featPerf: "Modalità Perfection", featMp: "Modalità Multigiocatore", featEvents: "Modalità Eventi storici", featSupport: "Sostieni uno sviluppatore indipendente",
    freePrice: "Prezzo libero — scegli tu l'importo (min. 2 €)", amountPh: "Importo (€)", unlockPremium: "Sblocca Premium →",
    securePay: "Pagamento sicuro tramite Stripe",
    payTerms: "Pagamento unico — accesso permanente. Confermando, chiedi l'accesso immediato e rinunci al tuo diritto di recesso di 14 giorni.",
    testerCode: "Hai un codice tester?", activate: "Attiva", loginFirst: "Prima accedi!",
    codeInvalidDot: "Codice non valido.", codeNotFound: "Codice non trovato.", codeUsed: "Codice già utilizzato.",
    verifying: "Verifica in corso…", premiumActivated: "✓ Premium attivato! Buon divertimento.", networkError: "Errore di rete, riprova.",
    minAmount: "L'importo minimo è di 2 €", maxAmount: "L'importo massimo è di 500 €", redirecting: "Reindirizzamento...",
    deleteAccountTitle: "⚠ Elimina l'account", deleteIrrev: "Questa azione è {x}.", irreversible: "irreversibile",
    deleteAllData: "Tutti i tuoi dati verranno eliminati:", deleteDataList: "account, partite, punteggi, stato premium",
    yesDelete: "Sì, elimina", cancel: "Annulla", deleting: "Eliminazione in corso…", accountDeleted: "Account eliminato",
    dataErased: "I tuoi dati sono stati cancellati. Arrivederci!", error: "Errore",

    mpRoomNotFound: "Stanza non trovata", mpAlreadyStarted: "Partita già iniziata", mpRoomFull: "Stanza piena (8/8)",
    mpConnecting: "Connessione alla stanza...", mpShareCode: "Condividi questo codice con i tuoi amici", mpPlayersN: "Giocatori ({n}/8)",
    me: "(io)", host: "Host", mpLaunch: "▶ Avvia la partita", mpWaitMin: "In attesa (min. 2 giocatori)",
    mpWaitHost: "In attesa che l'host avvii...", quit: "Esci", gameStarting: "La partita sta per iniziare!",
    roundN: "Round {n}/{t}", missedCap: "Mancato", mpNextRound: "Round successivo ▶",
    mpWaitNext: "In attesa che l'host avvii il round successivo...", mpFinalBtn: "🏆 Vedi il risultato finale",
    mpWaitFinal: "In attesa del risultato finale…", gameOver: "🏆 Fine partita!", finalRanking: "Classifica finale",
    roundDetail: "Dettaglio per round", awards: "Riconoscimenti", awAccurate: "Il più preciso", awAccurateDesc: "~{d} in media",
    awFastest: "Il più rapido", awFastestDesc: "Tempo di risposta più breve", awLongest: "Il tiro più lontano",
    awChampion: "Campione", ptsTotal: "{pts} punti in totale", awBestRound: "Miglior round", eliminatedTag: "Eliminato", answered: "Risposto", hintN: "Indizio {n}",
    waitingOthers: "In attesa degli altri...", gameEnded: "Partita terminata", playerLeft: "Un giocatore ha lasciato la partita.",

    tutoAria: "Tutorial di GéoCulture", tutoAlt: "Anteprima dell'interfaccia di GéoCulture", tutoSkip: "Salta",
    tutoPrev: "Indietro", tutoNext: "Avanti", tutoStart: "Si comincia!", tutoDontShow: "Non mostrare più all'avvio",
    tuto1t: "Benvenuto su GéoCulture!",
    tuto1x: "Questa è la schermata di gioco. Ti descriviamo un luogo e tu devi <b>trovarlo sulla mappa</b>. Ecco un breve giro in pochi passaggi.",
    tuto2t: "L'indizio da decifrare",
    tuto2x: "A sinistra: un <b>badge di difficoltà</b> (qui ESPERTO) e l'<b>indizio</b> da risolvere. Più il badge è difficile, più l'indizio è enigmatico… ma più punti ottieni.",
    tuto3t: "Ti serve aiuto? Cambia livello",
    tuto3x: "«<b>Indizio successivo</b>» mostra un indizio più facile: Esperto → Difficile → Medio → Facile. Comodo se sei bloccato… ma il <b>punteggio massimo cala</b> ogni volta.",
    tuto4t: "I tuoi progressi",
    tuto4x: "Questi punti indicano a quale <b>livello di indizio</b> sei arrivato (4 livelli, da Esperto a Facile).",
    tuto5t: "Il timer",
    tuto5x: "Ogni round è <b>a tempo</b>. Il «punteggio max rimanente» scende col passare del tempo: rifletti, ma non metterci troppo.",
    tuto6t: "Muoviti e posiziona il tuo punto",
    tuto6x: "<b>Fai zoom</b> (rotellina o +/−), spostati e poi <b>clicca sulla mappa</b> dove pensi che sia. Puoi correggere il segnaposto finché non confermi.",
    tuto7t: "Mira bene: conta tutto la precisione",
    tuto7x: "Quando sei sicuro, clicca su <b>Conferma</b>. Il tuo punteggio dipende dalla <b>distanza</b> tra il tuo punto e il luogo reale: più sei <b>preciso</b>, più vinci.",
    tuto8t: "Punteggio e round",
    tuto8x: "In alto: il <b>round</b> in corso, il tuo <b>punteggio totale</b> e il <b>massimo ancora raggiungibile</b> in questo round.",
    tuto9t: "Modalità per tutti i gusti",
    tuto9x: "Dal <b>Menu</b>: <b>Classica</b>, <b>No-Zoom</b> (mappa fissa, per esperti), <b>Perfection</b> (conta solo la precisione, punta alla perfezione), <b>Eventi</b> storici e <b>Multigiocatore</b>. Tocca a te!",

    repBtn: "Segnala un problema", repTitle: "Segnala un problema",
    repIntro: "Un bug, un luogo posizionato male, un'idea? Descrivilo e lo controlleremo il prima possibile. Grazie!",
    repType: "Tipo di problema", repDesc: "Descrizione", repDescPh: "Cos'è successo? Su quale luogo / in quale modalità?",
    repMail: "La tua e-mail (facoltativa, per risponderti)", repMailPh: "tu@esempio.it", repSend: "Invia", repSending: "Invio…",
    repTooShort: "Descrivi il problema (almeno qualche parola).",
    repFailed: "Impossibile inviare ora, riprova tra un attimo.", repWriteUs: "Oppure scrivici a {mail}.",
    repDone: "Grazie! La tua segnalazione è stata inviata.<br>La controlleremo il prima possibile.",
    repCat1: "Bug tecnico", repCat2: "Errore su un luogo o un indizio", repCat3: "Problema di pagamento", repCat4: "Suggerimento", repCat5: "Altro"
  };

  /* ───────────────────────────── PORTUGUÊS (BR) ───────────────────────────── */
  D.pt = {
    docTitle: "GéoCulture — Jogo de geolocalização cultural | Adivinhe os lugares do mundo",
    language: "Idioma",
    howToPlay: "Como jogar", gameMode: "Modo de jogo", difficulty: "Dificuldade", allLevels: "Todos os níveis",
    hintsPerPlace: "dicas por lugar", dailyChallenge: "Desafio do dia", multiplayer: "Multijogador", leaderboard: "Ranking",
    disconnect: "Sair", history: "Perfil", connectGoogle: "Entrar com Google",
    ruleNormal: "5 rodadas · dicas progressivas · coloque o marcador",
    ruleNozoom: "Mapa travado · sem zoom · Premium",
    rulePerfection: "10 rodadas · eliminado se > 50 km · Premium",
    ruleChill: "Sem pressa · encontre o lugar sem cronômetro",
    ruleDaily: "Os mesmos 5 lugares para todos · 1 vez por dia · ranking diário",
    ruleEvents: "Encontre acontecimentos históricos · tolerância conforme a escala · Premium",
    confirm: "Confirmar", nextHint: "Próxima dica", exploreMap: "Explorar o mapa", nextRound: "Próxima rodada",
    viewSummary: "Ver o resultado →", eliminated: "❌ Eliminado! > 50km", finished: "Fim!", playAgain: "↺ Jogar de novo",
    backMenu: "⌂ Menu", dailyTitle: "DESAFIO DO DIA", dailySubtitle: "5 lugares · reinicia à meia-noite (horário de Paris)",
    dailyPlayed: "✓ Jogado", dailyPlay: "Jogar", dailyLB: "Ranking do dia", back: "← Voltar",
    alreadyPlayed: "Você já jogou hoje!", premiumTitle: "⭐ Premium", loginRequired: "Login necessário",
    loginMsg: "Entre para acessar {feature}.", loginBtn: "Entrar com Google", legalLink: "Aviso legal",
    mpTitle: "MULTIJOGADOR", mpCreate: "Criar", mpJoin: "Entrar", mpCode: "CÓDIGO", mpPseudo: "Apelido",
    mpRounds5: "5 rodadas", mpRounds10: "10 rodadas", mpCodeInvalid: "Código inválido", mpModuleNotLoaded: "Módulo não carregado",
    mpSalon: "Sala: ", mpError: "Erro: ",
    lvlAll: "Todos os níveis", lvlExpert: "Especialista", lvlHard: "Difícil", lvlMedium: "Médio", lvlEasy: "Fácil", lvlVeryEasy: "Muito fácil",
    lbTitle: "RANKING", lbDailyTitle: "RANKING DO DIA", lbLoading: "Carregando…", lbNoData: "Sem dados.",

    hdrRound: "Rodada", hdrTotal: "Pontuação total", hdrMaxLeft: "Máx. restante", menu: "Menu",
    startPrompt: "Toque para começar", timeLeft: "Tempo restante", maxThisLevel: "Pontuação máx. neste nível",
    placeHint: "Clique no mapa para colocar sua resposta", confirmAnswer: "Confirmar minha resposta →",
    exploreTip: "Navegue à vontade — clique nos marcadores para ver detalhes", backToResults: "← Voltar aos resultados",
    loading: "Carregando...", backToGame: "↓ Voltar ao jogo",

    seoAria: "Sobre o GéoCulture",
    seoH1: "GéoCulture — o jogo para adivinhar os lugares e monumentos do mundo",
    seoLead: "GéoCulture é um <strong>jogo gratuito de geolocalização cultural</strong>, no espírito de um GeoGuessr cultural. A partir de uma dica, de uma foto ou de uma charada histórica, marque o lugar certo no mapa-múndi — com a maior precisão e rapidez possíveis.",
    seoHowH: "Como jogar?",
    seoHowP: "Cada rodada traz um lugar ou um acontecimento para encontrar. As dicas vão da mais <strong>enigmática</strong> (nível Especialista) à mais <strong>explícita</strong> (nível Fácil): quanto antes você acertar, mais pontos faz. Clique no mapa para colocar sua resposta, confirme e descubra a que distância você estava. Um <strong>desafio do dia</strong>, um ranking e um modo <strong>multijogador</strong> completam a experiência.",
    seoPlacesH: "Centenas de lugares e monumentos famosos",
    seoPlacesP: "Explore os maiores monumentos e lugares emblemáticos do planeta:",
    seoGrid: "<li>Torre Eiffel</li><li>Machu Picchu</li><li>Coliseu de Roma</li><li>Taj Mahal</li><li>Grande Muralha da China</li><li>Estátua da Liberdade</li><li>Pirâmides de Gizé</li><li>Monte Fuji</li><li>Petra</li><li>Sagrada Família</li><li>Cristo Redentor</li><li>Angkor Wat</li><li>Big Ben</li><li>Ópera de Sydney</li><li>Acrópole de Atenas</li><li>Chichén Itzá</li><li>Monte Saint-Michel</li><li>Castelo de Neuschwanstein</li>",
    seoModesH: "Modos de jogo para todos",
    seoModes: "<li><strong>Normal</strong> — a experiência clássica, com cronômetro.</li><li><strong>Chill</strong> — sem limite de tempo, para explorar com calma.</li><li><strong>Perfection</strong> — busque a partida perfeita.</li><li><strong>No-Zoom</strong> — mapa fixo, para um desafio maior.</li><li><strong>Acontecimentos históricos</strong> — adivinhe grandes batalhas e datas da História.</li><li><strong>Multijogador</strong> — enfrente seus amigos em tempo real.</li>",
    seoFaqH: "Perguntas frequentes",
    faq1q: "O GéoCulture é gratuito?", faq1a: "Sim, o GéoCulture é totalmente gratuito. Um acesso Premium opcional remove os anúncios e desbloqueia os modos avançados.",
    faq2q: "Preciso de uma conta para jogar?", faq2a: "Não, você pode jogar na hora. Uma conta Google permite salvar sua pontuação e participar do ranking.",
    faq3q: "O que é o modo Acontecimentos?", faq3a: "Um modo em que você adivinha grandes acontecimentos históricos (batalhas, tratados, revoluções) a partir de dicas e depois os localiza no mapa-múndi.",
    faq4q: "Dá para jogar com outras pessoas?", faq4a: "Sim, o modo multijogador permite criar uma partida e enfrentar outros jogadores em tempo real.",

    maxScoreHint: "Pontuação máx.: precisão de 100 m + resposta rápida", nextHintFlash: "Próxima dica!",
    noAttempt: "Sem tentativa", yourAnswer: "Sua resposta", distance: "Distância",
    missedName: "Errou — {name}", missedToast: "Errou! Era: {name}", fromTarget: "a {d} do alvo",
    noPointPlaced: "Nenhum ponto marcado", total: "Total", shareTitle: "Compartilhe sua pontuação", copy: "Copiar",
    copyHint: "O botão Copiar copia sua pontuação completa com os emojis", scoreCopied: "Pontuação copiada!",
    shareDaily: "Desafio do dia #{n}", shareBrag: "Fiz {pts} pts!\nVocê consegue fazer melhor?", missed: "errou",
    rank1: "Geógrafo lendário", rank2: "Especialista internacional", rank3: "Bom explorador", rank4: "Em evolução", rank5: "Iniciante corajoso",
    colPlace: "Lugar", colScore: "Pontos / Máx.", shareMyScore: "Compartilhar minha pontuação", close: "Fechar",
    menuTagline: "Encontre os lugares com a ajuda das dicas no menor tempo possível.", modeEvents: "Acontecimentos",
    learnMore: "↓ Saiba mais sobre o GéoCulture", lbUnavailable: "Ranking indisponível",
    mpCreateGame: "Criar uma partida", mpLevel: "Nível", mpRounds: "Rodadas", mpPseudoPh: "Seu apelido",
    mpCreateBtn: "Criar a partida", mpJoinGame: "Entrar em uma partida", mpRoomCode: "Código da sala", player: "Jogador",
    chooseLevel: "Escolha seu nível de dificuldade", hints1: "1 dica", hintsN: "{n} dicas",

    premiumThanks: "Obrigado! Acesso Premium ativado. Recarregue se necessário.", paymentCancelled: "Pagamento cancelado.",
    loginError: "Erro ao entrar: ", signedOut: "Você saiu", gameSaved: "Partida salva!",
    loginForHistory: "Entre para ver seu histórico", myGames: "Minhas partidas",
    noGamesYet: "Nenhuma partida salva por enquanto.", modeNormal: "Modo Normal", modeNozoom: "Modo No-Zoom",
    roundsN: "{n} rodadas", dangerZone: "Zona de perigo", deleteMyAccount: "Excluir minha conta e meus dados",
    deleteWarn: "Exclui definitivamente sua conta, suas partidas e suas pontuações. Irreversível.",
    noGamesMode: "Nenhuma partida neste modo.", noGamesToday: "Nenhuma partida hoje.",
    unlockFeature: "Desbloqueie {feature} e todos os modos avançados.", includedPremium: "Incluído no Premium",
    featLifetime: "Acesso Premium vitalício, pagamento único", featNoAds: "Sem anúncios", featNozoom: "Modo No-Zoom",
    featPerf: "Modo Perfection", featMp: "Modo Multijogador", featEvents: "Modo Acontecimentos históricos", featSupport: "Apoio a um desenvolvedor independente",
    freePrice: "Preço livre — escolha o valor (mín. 2 €)", amountPh: "Valor (€)", unlockPremium: "Desbloquear Premium →",
    securePay: "Pagamento seguro via Stripe",
    payTerms: "Pagamento único — acesso permanente. Ao confirmar, você solicita o acesso imediato e renuncia ao seu direito de arrependimento de 14 dias.",
    testerCode: "Tem um código de testador?", activate: "Ativar", loginFirst: "Entre primeiro!",
    codeInvalidDot: "Código inválido.", codeNotFound: "Código não encontrado.", codeUsed: "Código já utilizado.",
    verifying: "Verificando…", premiumActivated: "✓ Premium ativado! Aproveite.", networkError: "Erro de rede, tente novamente.",
    minAmount: "O valor mínimo é de 2 €", maxAmount: "O valor máximo é de 500 €", redirecting: "Redirecionando...",
    deleteAccountTitle: "⚠ Excluir a conta", deleteIrrev: "Esta ação é {x}.", irreversible: "irreversível",
    deleteAllData: "Todos os seus dados serão excluídos:", deleteDataList: "conta, partidas, pontuações, status premium",
    yesDelete: "Sim, excluir", cancel: "Cancelar", deleting: "Excluindo…", accountDeleted: "Conta excluída",
    dataErased: "Seus dados foram apagados. Até logo!", error: "Erro",

    mpRoomNotFound: "Sala não encontrada", mpAlreadyStarted: "A partida já começou", mpRoomFull: "Sala cheia (8/8)",
    mpConnecting: "Conectando à sala...", mpShareCode: "Compartilhe este código com seus amigos", mpPlayersN: "Jogadores ({n}/8)",
    me: "(eu)", host: "Anfitrião", mpLaunch: "▶ Iniciar a partida", mpWaitMin: "Aguardando (mín. 2 jogadores)",
    mpWaitHost: "Aguardando o anfitrião iniciar...", quit: "Sair", gameStarting: "A partida vai começar!",
    roundN: "Rodada {n}/{t}", missedCap: "Errou", mpNextRound: "Próxima rodada ▶",
    mpWaitNext: "Aguardando o anfitrião iniciar a próxima rodada...", mpFinalBtn: "🏆 Ver o resultado final",
    mpWaitFinal: "Aguardando o resultado final…", gameOver: "🏆 Fim de jogo!", finalRanking: "Ranking final",
    roundDetail: "Detalhe por rodada", awards: "Conquistas", awAccurate: "O mais preciso", awAccurateDesc: "~{d} em média",
    awFastest: "O mais rápido", awFastestDesc: "Menor tempo de resposta", awLongest: "O chute mais longe",
    awChampion: "Campeão", ptsTotal: "{pts} pts no total", awBestRound: "Melhor rodada", eliminatedTag: "Eliminado", answered: "Respondeu", hintN: "Dica {n}",
    waitingOthers: "Aguardando os outros...", gameEnded: "Partida encerrada", playerLeft: "Um jogador saiu da partida.",

    tutoAria: "Tutorial do GéoCulture", tutoAlt: "Prévia da interface do GéoCulture", tutoSkip: "Pular",
    tutoPrev: "Anterior", tutoNext: "Próximo", tutoStart: "Vamos lá!", tutoDontShow: "Não mostrar mais ao iniciar",
    tuto1t: "Bem-vindo ao GéoCulture!",
    tuto1x: "Esta é a tela de jogo. Descrevemos um lugar e você precisa <b>encontrá-lo no mapa</b>. Veja um tour rápido em poucos passos.",
    tuto2t: "A dica para decifrar",
    tuto2x: "À esquerda: um <b>selo de dificuldade</b> (aqui ESPECIALISTA) e a <b>dica</b> a resolver. Quanto mais difícil o selo, mais enigmática a dica… mas mais pontos você faz.",
    tuto3t: "Precisa de ajuda? Mude de nível",
    tuto3x: "“<b>Próxima dica</b>” revela uma dica mais fácil: Especialista → Difícil → Médio → Fácil. Útil quando você empaca… mas a <b>pontuação máxima cai</b> a cada vez.",
    tuto4t: "Seu progresso",
    tuto4x: "Estes pontos mostram em que <b>nível de dica</b> você está (4 níveis, de Especialista a Fácil).",
    tuto5t: "O cronômetro",
    tuto5x: "Cada rodada é <b>cronometrada</b>. A “pontuação máx. restante” diminui com o tempo: pense bem, mas não demore demais.",
    tuto6t: "Navegue e marque seu ponto",
    tuto6x: "<b>Dê zoom</b> (rodinha do mouse ou +/−), movimente o mapa e depois <b>clique no mapa</b> onde você acha que é. Você pode ajustar o marcador até confirmar.",
    tuto7t: "Mire bem: tudo depende da precisão",
    tuto7x: "Quando tiver certeza, clique em <b>Confirmar</b>. Sua pontuação depende da <b>distância</b> entre seu ponto e o lugar real: quanto mais <b>preciso</b>, mais você ganha.",
    tuto8t: "Pontuação e rodadas",
    tuto8x: "No alto: a <b>rodada</b> atual, sua <b>pontuação total</b> e o <b>máximo ainda possível</b> nesta rodada.",
    tuto9t: "Modos para todos os gostos",
    tuto9x: "No <b>Menu</b>: <b>Clássico</b>, <b>No-Zoom</b> (mapa fixo, para profissionais), <b>Perfection</b> (só a precisão conta, busque a perfeição), <b>Acontecimentos</b> históricos e <b>Multijogador</b>. Sua vez de jogar!",

    repBtn: "Relatar um problema", repTitle: "Relatar um problema",
    repIntro: "Um bug, um lugar mal posicionado, uma ideia? Descreva e vamos verificar o quanto antes. Obrigado!",
    repType: "Tipo de problema", repDesc: "Descrição", repDescPh: "O que aconteceu? Em qual lugar / qual modo?",
    repMail: "Seu e-mail (opcional, para respondermos)", repMailPh: "voce@exemplo.com", repSend: "Enviar", repSending: "Enviando…",
    repTooShort: "Descreva o problema (pelo menos algumas palavras).",
    repFailed: "Não foi possível enviar agora, tente de novo em instantes.", repWriteUs: "Ou escreva para {mail}.",
    repDone: "Obrigado! Seu relato foi enviado.<br>Vamos verificar o quanto antes.",
    repCat1: "Bug técnico", repCat2: "Erro em um lugar ou dica", repCat3: "Problema de pagamento", repCat4: "Sugestão", repCat5: "Outro"
  };

  /* ─────────────────────────────── Moteur ─────────────────────────────── */

  function T(key, vars) {
    var d = D[LANG] || D.en;
    var s = (d[key] != null) ? d[key] : (D.en[key] != null ? D.en[key] : (D.fr[key] != null ? D.fr[key] : key));
    if (vars) {
      Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    }
    return s;
  }

  // Libellé de niveau localisé à partir du libellé français stocké dans les données
  var LEVEL_KEYS = { 'EXPERT': 'lvlExpert', 'DIFFICILE': 'lvlHard', 'MOYEN': 'lvlMedium', 'FACILE': 'lvlEasy' };
  function levelLabelUpper(frLabel) {
    var k = LEVEL_KEYS[String(frLabel || '').toUpperCase()];
    return k ? T(k).toLocaleUpperCase(LOCALES[LANG]) : frLabel;
  }

  function applyI18n(root) {
    if (LANG === 'fr' && !root) return; // le HTML statique est déjà en français (et reste la version indexée)
    if (!root && D[LANG] && D[LANG].docTitle) document.title = D[LANG].docTitle;
    var scope = root || document;
    var q = function (sel) { return scope.querySelectorAll ? scope.querySelectorAll(sel) : []; };
    Array.prototype.forEach.call(q('[data-i18n]'), function (el) { el.textContent = T(el.getAttribute('data-i18n')); });
    Array.prototype.forEach.call(q('[data-i18n-html]'), function (el) { el.innerHTML = T(el.getAttribute('data-i18n-html')); });
    Array.prototype.forEach.call(q('[data-i18n-ph]'), function (el) { el.setAttribute('placeholder', T(el.getAttribute('data-i18n-ph'))); });
    Array.prototype.forEach.call(q('[data-i18n-aria]'), function (el) { el.setAttribute('aria-label', T(el.getAttribute('data-i18n-aria'))); });
  }

  function setLang(code) {
    if (SUPPORTED.indexOf(code) < 0 || code === LANG) return;
    try { localStorage.setItem('gc_lang', code); } catch (e) {}
    try { localStorage.removeItem('gc_game_v1'); } catch (e) {} // la partie en cours repart proprement dans la nouvelle langue
    location.reload();
  }

  // Sélecteur compact (affiché dans le menu principal)
  function langSwitcher() {
    var h = '<div class="gc-lang" role="group" aria-label="' + T('language') + '" style="display:flex;gap:4px;flex-wrap:wrap;justify-content:center;margin:-14px 0 22px">';
    SUPPORTED.forEach(function (c) {
      var on = c === LANG;
      h += '<button type="button" onclick="GC_setLang(\'' + c + '\')" title="' + NAMES[c] + '" aria-pressed="' + on + '" '
        + 'style="font-family:inherit;font-size:11px;font-weight:700;letter-spacing:.5px;padding:4px 9px;border-radius:6px;cursor:pointer;'
        + 'border:1px solid ' + (on ? '#f97316' : '#2d3f5e') + ';background:' + (on ? '#f97316' : 'transparent') + ';color:' + (on ? '#fff' : '#94a3b8') + '">'
        + c.toUpperCase() + '</button>';
    });
    return h + '</div>';
  }

  // Traduit les badges de niveau des données (appelé juste après data.js / events.js)
  function localizeData() {
    if (LANG === 'fr') return;
    var lists = [];
    if (typeof ROUNDS !== 'undefined') lists.push(ROUNDS);
    if (typeof EVENTS !== 'undefined') lists.push(EVENTS);
    lists.forEach(function (list) {
      list.forEach(function (r) {
        (r.hints || []).forEach(function (h) { h.l = levelLabelUpper(h.l); });
      });
    });
  }

  // Applique un fichier de contenu traduit : { R: {cle:[nom, desc, i1, i2, i3, i4]}, E: {...} }
  // La clé = nom du fichier photo sans dossier ni extension (unique par lieu / événement).
  function photoKey(p) { return String(p || '').replace(/^.*\//, '').replace(/\.[a-z0-9]+$/i, ''); }
  function applyContent(pack) {
    if (!pack) return;
    var apply = function (list, map) {
      if (!list || !map) return;
      list.forEach(function (r) {
        var t = map[photoKey(r.photo)];
        if (!t) return;
        if (t[0]) r.name = t[0];
        if (t[1]) r.desc = t[1];
        for (var i = 0; i < 4; i++) { if (t[2 + i] && r.hints && r.hints[i]) r.hints[i].t = t[2 + i]; }
      });
    };
    if (typeof ROUNDS !== 'undefined') apply(ROUNDS, pack.R);
    if (typeof EVENTS !== 'undefined') apply(EVENTS, pack.E);
  }

  window.GC_LANG = LANG;
  window.GC_LOCALE = LOCALES[LANG];
  window.GC_LANGS = SUPPORTED.slice();
  window._lang = LANG;
  window._t = D;
  window.T = T;
  window.applyI18n = applyI18n;
  window.GC_setLang = setLang;
  window.GC_langSwitcher = langSwitcher;
  window.GC_levelLabel = levelLabelUpper;
  window.GC_localizeData = localizeData;
  window.GC_APPLY_CONTENT = applyContent;
  window.GC_photoKey = photoKey;

  try { document.documentElement.lang = LANG; } catch (e) {}
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { applyI18n(); });
  else applyI18n();
})();
