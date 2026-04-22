# GéoCulture 🌍

Jeu de géolocalisation culturelle — 492 lieux historiques à travers le monde.

## Structure du projet

```
geoculture/
├── index.html        ← page principale + emplacements pub
├── css/
│   └── style.css     ← tous les styles
├── js/
│   ├── data.js       ← les 492 lieux avec indices et descriptions
│   └── game.js       ← logique du jeu, timer, score, carte
└── README.md
```

## Déployer sur GitHub Pages

### 1. Créer le repository

1. Va sur [github.com](https://github.com) → **New repository**
2. Nom : `geoculture` (ou ce que tu veux)
3. Visibilité : **Public** (obligatoire pour GitHub Pages gratuit)
4. Coche **Add a README file** → Create repository

### 2. Uploader les fichiers

**Option A — Interface web (plus simple) :**
1. Dans ton repo, clique **Add file → Upload files**
2. Glisse-dépose tous les fichiers/dossiers du projet
3. Commit changes

**Option B — Git en ligne de commande :**
```bash
git clone https://github.com/TON_USERNAME/geoculture.git
cp -r /chemin/vers/geoculture/* geoculture/
cd geoculture
git add .
git commit -m "Initial commit"
git push
```

### 3. Activer GitHub Pages

1. Dans ton repo → **Settings** → **Pages** (menu gauche)
2. Source : **Deploy from a branch**
3. Branch : **main** → dossier **/ (root)**
4. **Save**
5. Attendre 2-3 minutes → ton jeu est en ligne sur :
   `https://gaelbodevin-bit.github.io/geoculture/`

---

## Ajouter Google AdSense

### 1. Créer un compte AdSense
1. Va sur [adsense.google.com](https://adsense.google.com)
2. Connecte-toi avec ton compte Google
3. Ajoute ton site : `TON_USERNAME.github.io/geoculture`
4. Attendre l'approbation (quelques jours à quelques semaines)

### 2. Intégrer les publicités

Une fois approuvé, Google te donne un **code éditeur** (ca-pub-XXXXXXXXXXXXXXXX).

Dans `index.html`, décommente et remplis :

```html
<!-- Dans <head> -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-TON_ID" crossorigin="anonymous"></script>

<!-- Bannière haut (728×90) -->
<ins class="adsbygoogle"
     data-ad-client="ca-pub-TON_ID"
     data-ad-slot="TON_SLOT_ID"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

### Emplacements pub dans le jeu

| Emplacement | Format | Où |
|---|---|---|
| Bannière haute | 728×90 Leaderboard | Sous le header, visible en jeu |
| Rectangle inter-manche | 300×250 | Écran résultat entre les manches |

---

## Améliorations possibles

- [ ] Ajout d'un leaderboard (Firebase ou Supabase)
- [ ] Mode multijoueur
- [ ] Catégories de lieux (Europe, Asie, etc.)
- [ ] Difficulté choisissable
- [ ] Partage du score sur réseaux sociaux
- [ ] Favicon et icône PWA
