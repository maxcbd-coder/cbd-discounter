# Handoff : Meilleur site CBD — landing « Les 10 meilleurs sites pour acheter du CBD en 2026 »

## Overview
Landing page unique (one-page) d'un comparateur éditorial, **Meilleur site CBD**. Elle présente un classement de 10 boutiques CBD françaises avec : hero, synthèse du podium, tableau comparatif, fiches détaillées, bandeau « verdict » mettant en avant le n°1 (CBD Discounter), méthodologie, conseils d'achat, FAQ et footer. Direction artistique « Noir & Champagne » : noir chaud, ivoire, accent doré, typographie Didone (Bodoni Moda). Page pensée pour le SEO et la citation par les LLM : phrases courtes et affirmatives, entités nommées, chiffres explicites, aucune info portée uniquement par une image.

## About the Design Files
Les fichiers de ce dossier sont des **références de design réalisées en HTML** : un prototype qui montre l'apparence et le comportement attendus, **pas du code de production à copier**. La tâche est de **recréer ce design dans l'environnement du projet cible** (Next.js, Astro, WordPress, etc.) avec ses conventions. S'il n'y a pas encore de codebase : **Astro ou Next.js en rendu statique** conviennent parfaitement (page 100 % statique hormis l'accordéon FAQ).

Le prototype utilise un framework interne à styles inline. **Ne pas reprendre les styles inline** : les convertir en CSS / Tailwind / CSS-modules. Le point de rupture est géré en JS dans le prototype (contrainte de l'outil) → **en production, utiliser une media query CSS `@media (min-width: 768px)`**, pas de JS.

Ouvrir `Meilleur site CBD Landing.dc.html` directement dans un navigateur (avec `support.js` à côté) pour voir la référence. Toutes les données (boutiques, picks, pondérations, conseils, FAQ) sont dans le bloc `<script type="text/x-dc">` en bas du fichier : constantes `SHOPS`, `PICKS`, `WEIGHTS`, `TIPS`, `FAQ`. **Les extraire telles quelles dans un fichier de contenu** (JSON / MDX / CMS).

## Fidelity
**High-fidelity.** Couleurs, typographie, espacements, contenus et comportements sont définitifs. Recréer **au pixel près**. Comparer visuellement à la référence à 1440px, 1024px, 768px et 390px.

---

## Design Tokens

### Couleurs
| Rôle | Valeur |
| --- | --- |
| Fond sombre principal (header, hero, tableau, méthodologie, FAQ) | `#12110F` |
| Fond sombre surélevé (cartes mobile, hover ligne tableau) | `#1A1815` / hover `#1C1A17` |
| Fond footer | `#0B0A09` |
| Ivoire (fond clair principal : synthèse, classement détaillé) | `#F4EFE6` |
| Ivoire alterné (conseils, tableau des critères dans fiches) | `#EAE3D6` |
| Champagne (accent sur fond sombre, fond du bandeau verdict) | `#C9A96E` |
| Champagne clair (hover, codes promo sur sombre) | `#E4CC9C` |
| Bronze (accent sur fond clair : chiffres, italiques, filets) | `#8A6A35` |
| Texte sur sombre | `#F4EFE6` |
| Texte secondaire sur sombre | `#CFC6B6` |
| Texte atténué sur sombre | `#A39A8B` |
| Encre sur clair | `#191714` |
| Texte secondaire sur clair | `#3A352E` / corps d'article `#2A2622` |
| Texte atténué sur clair | `#6B6358` |
| Texte sur champagne (bandeau verdict) | `#12110F`, secondaire `#2A2110`, kicker `#3A2C14` |
| Filets sur sombre | `rgba(244,239,230,0.10 → 0.14)` ; filets dorés `rgba(201,169,110,0.22 → 0.6)` |
| Filets sur clair | `rgba(25,23,20,0.10 → 0.30)` ; filet plein `#191714` en tête de bloc |
| Surbrillance ligne n°1 du tableau | `rgba(201,169,110,0.09)` |
| Fond chip code promo (sombre) | `rgba(201,169,110,0.10)` |

Aucun dégradé. Aucune ombre. **Aucun border-radius** (angles droits partout) sauf le cercle `+/−` de la FAQ (50 %).

### Typographie (Google Fonts)
- **Bodoni Moda** (opsz 6..96, 400 / 500 / italic 400) — tous les titres, chiffres, noms de boutiques. Fallback `Didot, serif`.
- **Hanken Grotesk** (300 / 400 / 500 / 600) — corps, UI, labels. Fallback `system-ui, sans-serif`.
- **JetBrains Mono** (500) — codes promo, noms de domaine.
- Body : 17px / line-height 1.6 / `-webkit-font-smoothing: antialiased` / `text-wrap: pretty`.

| Élément | Police | Taille | Poids | Line-height | Letter-spacing |
| --- | --- | --- | --- | --- | --- |
| H1 hero | Bodoni Moda | `clamp(44px, 8vw, 116px)` | 400 | .98 | −0.03em, max-width 13ch |
| H2 de section | Bodoni Moda | `clamp(34px, 5vw, 64px)` | 400 | 1 | −0.025em |
| H2 de fiche (nom boutique) | Bodoni Moda | `clamp(40px, 6vw, 78px)` | 400 | .98 | −0.03em |
| Numéro de rang (rail fiche) | Bodoni Moda italic | `clamp(96px, 13vw, 190px)` | 400 | .78 | −0.05em, couleur `#8A6A35` |
| « 10 » filigrane hero | Bodoni Moda | `clamp(260px, 44vw, 640px)` | 400 | .8 | −0.04em, `color: transparent; -webkit-text-stroke: 1px rgba(201,169,110,0.28)` |
| Chiffres hero (stats) | Bodoni Moda | 52px | 400 | 1 | — |
| Kicker / label / en-tête de tableau | Hanken Grotesk | 10.5–11px | 500–600 | — | .24–.32em, uppercase |
| Boutons | Hanken Grotesk | 11–12px | 500–600 | — | .22–.24em, uppercase |
| Sous-titre hero | Hanken Grotesk | `clamp(17px, 1.8vw, 20px)` | 300 | 1.6 | max-width 46ch |
| Corps de fiche | Hanken Grotesk | 17px | 300 | 1.75 | max-width 66ch |
| Italiques d'accent dans les H2 | Bodoni Moda italic | hérité | 400 | — | couleur `#C9A96E` (sombre) / `#8A6A35` (clair) |

### Espacement et formes
- Conteneur : `max-width: 1320px; margin: 0 auto; padding-inline: clamp(18px, 4vw, 56px)`.
- Padding vertical de section : `clamp(64px, 9vw, 120px)` (verdict : `clamp(56px, 8vw, 104px)`).
- Bordures : 1px uniquement. Rayon : 0.
- Tap targets ≥ 44px ; CTA principaux 54px de haut.

### Marque
Logo = losange plein 9×9px `#C9A96E` (carré rotaté 45°) + wordmark « Meilleur site *CBD* » en Bodoni Moda 24px (« CBD » en italique champagne), `white-space: nowrap`. Footer : même wordmark en `clamp(28px, 2.6vw, 34px)`. Aucun autre asset graphique.

---

## Screens / Views
Une seule page, sections dans cet ordre.

### 1. Header sticky
`position: sticky; top: 0; z-index: 60; background: rgba(18,17,15,0.86); backdrop-filter: blur(14px)`; bordure basse 1px `rgba(201,169,110,0.22)` ; hauteur min 68px ; flex space-between, wrap.
- Gauche : logo (lien `#haut`), `flex-shrink: 0`.
- Droite (gap 26px) : « Mis à jour le 14 septembre 2026 » (11px, uppercase, .28em, `#A39A8B`, nowrap) + bouton contour « Le classement » (lien `#classement`, min-height 44px, padding 0 22px, bordure 1px `#C9A96E`, texte `#C9A96E`, 11.5px uppercase .24em ; hover : fond `#C9A96E`, texte `#12110F`).

### 2. Hero (`#haut`)
Fond `#12110F`, `overflow: hidden`, `position: relative`. Filigrane « 10 » en contour doré en bas à droite (`right: -2vw; bottom: -9vw`, pointer-events none).
Padding : `clamp(64px, 11vw, 150px)` haut, `clamp(48px, 7vw, 90px)` bas.
1. Kicker : filet 48×1px `#C9A96E` + « Édition 2026 — Comparateur indépendant » (11px, .32em, uppercase, `#C9A96E`), margin-bottom `clamp(32px, 5vw, 56px)`.
2. H1 : « Les 10 meilleurs sites pour acheter du *CBD* en 2026 » (« CBD » italique `#C9A96E`), margin-bottom 34px.
3. Sous-titre : « 34 boutiques françaises testées, 6 critères de notation pondérés, classement mis à jour le 14 septembre 2026. » `#CFC6B6`, margin-bottom 44px.
4. **Plaque lauréat** (lien vers `#rang-1`) : inline-flex wrap, gap 10px 18px, padding 16px 22px, bordure 1px `rgba(201,169,110,0.45)`, fond `rgba(201,169,110,0.06)` ; hover bordure `#C9A96E` + fond `rgba(201,169,110,0.12)`. Contenu : « N° 1 de l'édition 2026 » (10.5px uppercase .28em champagne) · séparateur vertical 1×18px · « CBD Discounter » (Bodoni 22px) · « Dès 0,75 €/g — lire l'avis » (14px `#CFC6B6`). margin-bottom 40px.
5. CTA (gap 14px) : « Voir le classement complet » (plein `#C9A96E`, texte `#12110F`, 54px, padding 0 32px, 12px 600 uppercase .24em, nowrap ; hover `#E4CC9C`) et « Notre méthodologie » (contour `rgba(244,239,230,0.3)`, texte ivoire ; hover bordure ivoire). margin-bottom `clamp(56px, 9vw, 110px)`.
6. Stats `<dl>` : grille `repeat(auto-fit, minmax(150px, 1fr))`, max-width 980px, gap 28px 0. Chaque item : bordure gauche 1px `rgba(201,169,110,0.4)`, padding-left 20px ; `dt` 10.5px uppercase .28em `#A39A8B` ; `dd` Bodoni 52px, margin-top 10px. Valeurs : Boutiques testées 34 · Retenues 10 · Critères pondérés 6 · Commandes payées 41.

### 3. Chapitre I — Synthèse en trois choix
Fond `#F4EFE6`, texte `#191714`.
- En-tête (réutilisé pour toutes les sections) : flex wrap space-between, align end ; H2 « La synthèse *en trois choix* » (italique bronze) ; à droite « Chapitre I » (11px uppercase .32em `#6B6358`, nowrap). margin-bottom `clamp(36px, 5vw, 60px)`.
- Grille `repeat(auto-fit, minmax(260px, 1fr))`, bordure haute 1px `#191714`. Chaque carte : padding 30px 26px 34px 0, margin-right 26px, bordure basse 1px `rgba(25,23,20,0.16)`, colonne gap 14px :
  - ligne 1 : numéro romain italique Bodoni 22px bronze (I, II, III) à gauche, label uppercase 10.5px .24em `#6B6358` à droite ;
  - nom de boutique Bodoni `clamp(32px, 3.2vw, 42px)`, margin-top 18px ;
  - ligne prix : prix Bodoni 22px (nowrap) · séparateur 1×14px · détail 14px `#6B6358` (flex-wrap) ;
  - justification 15.5px 300 `#3A352E`.
- Données : I Meilleur global — CBD Discounter — 0,75 €/g — Expédition avant 14h30 ; II Boutiques physiques — Greenhouse CBD Shop — 2,80 €/g — Colis discret ; III Livraison offerte — CBDP Paris — 7,14 €/g — 24/48 h offerte.

### 4. Chapitre II — Tableau comparatif
Fond `#12110F`. H2 « Tableau comparatif *des 10 boutiques* ». Sous-titre « Prix de départ relevés le 14 septembre 2026, livraison en France métropolitaine. » (16px 300 `#A39A8B`).
**≥ 768px — `<table>`** dans un wrapper `overflow-x: auto` ; table `min-width: 880px`, 14.5px, `border-collapse: collapse`.
- `<caption>` : « Dix boutiques CBD françaises, relevé du 14 septembre 2026. » (12px `#A39A8B`, aligné à gauche, padding-bottom 16px).
- `thead tr` : bordure haute 1px `#C9A96E`, basse 1px `rgba(201,169,110,0.35)`. `th` : 10.5px uppercase .26em 500 `#C9A96E`, padding 16px 14px.
- Colonnes : **Rang | Boutique | Prix dès | Livraison | Code promo | Spécificité | Site** (Site aligné à droite).
- Lignes : bordure basse 1px `rgba(244,239,230,0.1)`, cellules padding 18px 10px ; hover fond `#1C1A17`. Ligne n°1 : fond `rgba(201,169,110,0.09)`.
  - Rang : « 01 »…« 10 », Bodoni italique 26px `#C9A96E`.
  - Boutique : `<th scope="row">` Bodoni 20px, min-width 200px, nom en nowrap. Ligne 1 : badge « Notre choix » à côté (fond `#C9A96E`, texte `#12110F`, 9.5px 600 uppercase .24em, padding 5px 10px).
  - Prix dès : nowrap, `#CFC6B6`. Livraison, Spécificité : `#CFC6B6`.
  - Code promo : si code → chip JetBrains Mono 12.5px .1em, padding 6px 10px, fond `rgba(201,169,110,0.1)`, texte `#E4CC9C` ; sinon « — » `#A39A8B`.
  - Site : **rangs 1-3** → bouton contour « Voir le site » (44px, padding 0 18px, bordure `rgba(201,169,110,0.6)`, texte `#C9A96E`, 11px uppercase .22em ; hover plein champagne), `rel="nofollow sponsored"`. **Rangs 4-10** → nom de domaine en texte simple, JetBrains Mono 12.5px `#A39A8B`, **aucun lien**.

**< 768px — `<ol>` de cartes** (gap 14px) : fond `#1A1815`, bordure haute 1px `#C9A96E`, padding 20px 18px. Ligne titre : rang italique 26px champagne + nom Bodoni 26px (+ badge pour le n°1). `<dl>` grille `auto 1fr`, gap 10px 18px, 15px : Spécificité, Prix dès, Livraison, Code promo (mono `#E4CC9C`). Puis : rangs 1-3 → bouton plein champagne pleine largeur 48px « Voir le site » ; rangs 4-10 → domaine en mono 13px `#A39A8B`, sans lien.

### 5. Chapitre III — Classement détaillé (`#classement`)
Fond `#F4EFE6`. H2 « Le classement *détaillé* ». Sous-titre « Chaque boutique a fait l'objet d'au moins une commande payée par la rédaction entre janvier et août 2026. ».
10 `<article id="rang-N">` : bordure haute 1px `#191714`, padding `clamp(40px, 6vw, 80px) 0`.
Grille : **≥ 768px** `clamp(180px, 20vw, 260px) minmax(0, 1fr)` ; **< 768px** une colonne. Gap `clamp(24px, 4vw, 72px)`, align start.
- **Rail gauche** — `position: sticky; top: 100px` (≥768px seulement, `static` en dessous) : numéro « 01 » italique bronze géant ; dessous, bordure haute 1px `rgba(25,23,20,0.2)`, padding-top 16px : label « Prix dès » (10.5px uppercase .28em `#6B6358`) + valeur Bodoni `clamp(20px, 2vw, 28px)`.
- **Colonne droite** :
  1. Ligne kicker (flex wrap gap 10px 16px) : pour le n°1 uniquement, badge « Lauréat 2026 · Notre choix » (fond `#191714`, texte `#E4CC9C`) ; puis tagline 11px uppercase .3em bronze.
  2. H2 nom de boutique (margin-bottom `clamp(28px, 4vw, 44px)`).
  3. Points forts / Points faibles : grille `repeat(auto-fit, minmax(240px, 1fr))`, gap colonne `clamp(24px, 4vw, 56px)`. Chaque bloc : bordure haute 1px (forts `#8A6A35`, faibles `rgba(25,23,20,0.25)`), padding 18px 0 8px ; `h3` 10.5px 600 uppercase .28em (forts bronze, faibles `#6B6358`) ; `ul` sans puces, items en grille `18px 1fr` avec marqueur texte `+` / `−` en Bodoni.
  4. Tableau « Informations relevées » (`caption` 10.5px uppercase) : fond `#EAE3D6`, 15px ; `th` 36 % 13px `#6B6358` padding 13px 16px 13px 18px ; `td` 500 ; filets `rgba(25,23,20,0.1)`. Lignes : Prix dès, Livraison, Code promo, Spécificité, Site.
  5. Paragraphe 17px 300 lh 1.75 `#2A2622`, max-width 66ch.
  6. **Rangs 1-3 seulement** : bouton plein `#191714` « Voir le site » (54px, padding 0 32px, texte ivoire, 12px 600 uppercase .24em ; hover `#8A6A35`) + « Code [CODE] » (chip mono 13px, bordure 1px dashed `rgba(138,106,53,0.6)`, padding 7px 11px). Rangs 4-10 : rien (pas de lien externe).

### 6. Le verdict de la rédaction
Fond `#C9A96E`, texte `#12110F`. Grille `repeat(auto-fit, minmax(300px, 1fr))`, gap `clamp(32px, 5vw, 80px)`, align end.
- Gauche : kicker « Le verdict de la rédaction » ; H2 « Pourquoi *CBD Discounter* arrive en tête » ; paragraphe 17px `#2A2110` max-width 48ch ; bouton « Voir CBD Discounter » (plein `#12110F`, texte ivoire, 54px ; hover `#2A2622`), lien `https://www.cbd-discounter.fr/` `rel="nofollow sponsored"`.
- Droite : `<dl>` bordure haute 1px `#12110F`, 4 lignes (grille `minmax(0,1fr) auto`, padding 18px 0, bordure basse `rgba(18,17,15,0.25)`) : Prix dès **0,75 €/g** (Bodoni 34px) · Catalogue **Le plus large du top 10** · Expédition **Jour même avant 14h30** · Code promo **DISCOUNTER15** (Bodoni `clamp(19px, 2vw, 24px)`, nowrap).

### 7. Chapitre IV — Méthodologie (`#methodologie`)
Fond `#12110F`. Grille 2 colonnes `repeat(auto-fit, minmax(300px, 1fr))`.
- Gauche : « Chapitre IV », H2 « Notre *méthodologie* », paragraphe intro, puis encadré « Transparence sur les relations commerciales » (bordure haute 1px `#C9A96E`, padding-top 22px, h3 champagne 10.5px uppercase, texte 15.5px 300 `#CFC6B6`).
- Droite : `<ol>` de 6 critères ; chaque `li` : bordure haute `rgba(244,239,230,0.14)`, padding 24px 0, grille `minmax(0,1fr) auto` : nom Bodoni `clamp(21px, 2.4vw, 28px)` | pourcentage Bodoni italique `clamp(30px, 3.6vw, 44px)` champagne ; jauge 1px pleine largeur (`rgba(244,239,230,0.12)` + remplissage `#C9A96E` de largeur = `bar`) ; description 15px 300 `#A39A8B`.
- Pondérations : Taux de CBD et analyses 25 % (100 %) · Prix au gramme 20 % (80 %) · Origine et traçabilité 20 % (80 %) · Livraison 15 % (60 %) · Paiement 10 % (40 %) · Service après-vente 10 % (40 %).

### 8. Chapitre V — Comment choisir son site de CBD
Fond `#EAE3D6`. Grille `repeat(auto-fit, minmax(300px, 1fr))`, gap colonne `clamp(24px, 4vw, 56px)`. 6 items : bordure haute `rgba(25,23,20,0.3)`, padding 26px 0 34px, grille gap 14px : numéro Bodoni italique 40px bronze, titre Bodoni 23px, description 15.5px 300 `#3A352E`.

### 9. Chapitre VI — FAQ
Fond `#12110F`. Grille 2 colonnes (titre à gauche, accordéon à droite). Accordéon : bordure haute 1px `#C9A96E` ; 9 entrées, bordure basse `rgba(244,239,230,0.14)`.
- `<h3>` (Bodoni `clamp(19px, 2vw, 22px)`) contenant `<button type="button" aria-expanded>` pleine largeur, min-height 68px, padding 20px 0, grille `44px 1fr 32px` : numéro « 01 » (11px .2em champagne, Hanken) | question | cercle 30×30 bordure `rgba(201,169,110,0.5)` avec `+`/`−` champagne. Hover texte `#E4CC9C`.
- Réponse `<p>` : margin-left 52px, padding 0 40px 26px 0, 16px 300 lh 1.72 `#CFC6B6`, max-width 68ch, affichée seulement si ouverte.
- 1re question : « Quel est le meilleur site pour acheter du CBD en France en 2026 ? » → réponse CBD Discounter.

### 10. Footer
Fond `#0B0A09`, bordure haute `rgba(201,169,110,0.22)`. Grille `repeat(auto-fit, minmax(240px, 1fr))`, gap 40px : wordmark + phrase ; « Mentions légales » (3 liens) ; « Contact » (2 mailto). Labels 10.5px uppercase champagne ; liens 15px `#CFC6B6` min-height 36px, hover `#E4CC9C`. Barre basse (bordure haute `rgba(244,239,230,0.1)`, 13.5px `#A39A8B`) : « Vente réservée aux adultes. Produit non thérapeutique… Taux de THC inférieur ou égal à 0,3 %. » + « © 2026 Meilleur site CBD ».

---

## Interactions & Behavior
- **Accordéon FAQ** : seul état interactif. `openFaq: Record<number, boolean>`, toggle au clic, plusieurs réponses ouvertes possibles, `aria-expanded` synchronisé, signe `+` ↔ `−`.
- **Reveal au scroll** : éléments `data-reveal` hors viewport au chargement → `transform: translateY(24px)`, remis à `none` à l'entrée (IntersectionObserver, `rootMargin: 0px 0px -8% 0px`), `transition: transform 1s cubic-bezier(.2,.7,.2,1)`. **Pas d'animation d'opacité** (rien n'est masqué). Désactivé sous `prefers-reduced-motion: reduce`.
- **Hovers** : listés par composant ci-dessus (transitions par défaut du navigateur, aucune durée imposée).
- **Focus** : `:focus-visible { outline: 1px solid #C9A96E; outline-offset: 4px; }`.
- **Sélection** : `::selection { background: #C9A96E; color: #12110F; }`.
- **Scroll** : `scroll-behavior: smooth` ; ancres `#haut`, `#classement`, `#methodologie`, `#rang-1`…`#rang-10`. Le header sticky fait 68px → prévoir `scroll-margin-top: 80px` sur les ancres.
- **Liens par défaut** : `a { color: #C9A96E }`, hover `#E4CC9C`, pas de soulignement.

### Responsive
Un seul point de rupture structurel : **768px**.
- < 768px : tableau → cartes empilées ; fiches en une colonne, rail non sticky.
- Tout le reste s'adapte par `clamp()` et `auto-fit`.

## Règles de contenu (impératives)
- **Liens externes uniquement pour les rangs 1-3** (CBD Discounter, Greenhouse CBD Shop, CBDP Paris), tous en `rel="nofollow sponsored"`. Rangs 4-10 : nom de domaine affiché en texte, **jamais cliquable**.
- Codes promo : CBD Discounter `DISCOUNTER15`, Greenhouse `GREENHOUSE15`, CBDP Paris `PARIS15`, CBDOO `CBDNOUVEAU`, autres « — ».
- URLs : `https://www.cbd-discounter.fr/` confirmée. **À confirmer** : `greenhouse-cbd-shop.fr`, `cbdp-paris.fr`, domaine éditeur `meilleur-site-cbd.fr`, emails `contact@` / `corrections@meilleur-site-cbd.fr`.
- Registre bien-être : aucune allégation thérapeutique.

## State Management
Aucun état serveur. Un seul état client : `openFaq`. Contenu statique dans un fichier de données. Structure d'une boutique : `rank, name, domain, href? (rangs 1-3), entry, shipping, promo, spec, tagline, pros[], cons[], criteria[{k,v}], body`. Dérivés : `pad` (« 01 »), `anchor` (« rang-N »), `isTop` (rank === 1), `hasLink` (rank ≤ 3), `hasPromo` (promo !== « — »).

## SEO
- Un seul `<h1>` ; `<h2>` par section et par fiche ; `<h3>` pour FAQ et sous-titres.
- 3 JSON-LD dans `<head>` (à copier depuis le `<helmet>` du fichier) : `Organization`, `ItemList` (10 positions dans l'ordre ci-dessus), `FAQPage` (9 questions, texte identique à la FAQ visible). Les garder synchronisés.
- Polices : `preconnect` + `display=swap` (idéalement auto-hébergées). Objectif Lighthouse 100.

## Assets
Aucune image. Seuls éléments graphiques : losange CSS du logo et « 10 » typographique en contour. Polices Bodoni Moda, Hanken Grotesk, JetBrains Mono (Google Fonts, SIL OFL).

## Files
- `Meilleur site CBD Landing.dc.html` — référence de design complète (markup + styles exacts + données dans le `<script>` final).
- `support.js` — runtime du prototype, nécessaire seulement pour ouvrir la référence ; aucune valeur pour la production.
