# Handoff : Palmarès CBD (V2) — landing « Top 10 des meilleurs sites CBD en France »

## Overview
Landing one-page d'un comparateur, **Palmarès CBD** (nom provisoire). Classement de 10 boutiques CBD françaises : bandeau défilant, hero « podium », palmarès interactif (lignes dépliables + filtres par besoin), section « n°1 à la loupe » avec coupon copiable, méthode, guide, FAQ, footer. DA « grow-room / sticker » : vert pin, vert acide, violet, crème, typo Unbounded, pastilles arrondies à contour épais.

## About the Design Files
Les fichiers de ce dossier sont des **références de design en HTML** — un prototype montrant l'apparence et le comportement attendus, **pas du code de production**. La tâche est de **recréer ce design dans l'environnement du projet cible** (Next.js, Astro, WordPress…) avec ses conventions. Sans codebase existante : **Astro ou Next.js en rendu statique** (3 petits états client : fiches dépliées, filtre actif, FAQ, + copie du code).

Le prototype utilise un framework interne à styles inline : **ne pas reprendre les styles inline**, les convertir en CSS / Tailwind / CSS-modules. Ouvrir `Palmares CBD V2.dc.html` dans un navigateur (avec `support.js` à côté) pour voir la référence. Toutes les données sont dans le `<script type="text/x-dc">` en bas du fichier : `SHOPS`, `FILTERS`, `TIPS`, `FAQ`, `TICKER` — **à extraire telles quelles** dans un fichier de contenu.

## Fidelity
**High-fidelity.** Couleurs, typo, espacements, contenus et interactions définitifs. Recréer **au pixel près**. Comparer à la référence à 1440, 1024, 768 et 390px.

---

## Design Tokens

### Couleurs
| Rôle | Hex |
| --- | --- |
| Pin (fond sombre, encre, contours) | `#0F2E1D` |
| Pin surélevé (cartes sur sombre, hover nav) | `#163D27` |
| Vert acide (accent principal, n°1, CTA) | `#C8F560` — hover `#D6FA80` |
| Vert feuille (podium 2, CTA hover) | `#24753F` — hover `#2C8649` |
| Violet « purple haze » (podium 3, badges, focus) | `#B79CFF` — hover `#C7B2FF` |
| Crème (fond principal clair) | `#F1F4E4` |
| Crème alterné (FAQ) | `#E3ECD2` |
| Blanc cassé (cartes, lignes 2-3) | `#FBFCF6` |
| Texte secondaire sur clair | `#33463A` / `#23372B` |
| Texte atténué sur clair | `#4A5E50` |
| Texte secondaire sur sombre | `#CFE0CF` ; atténué `#A9C2AE` |
| Fond pastille de donnée | `rgba(15,46,29,0.07)` |
| Texture hero | `radial-gradient(rgba(200,245,96,0.16) 1.2px, transparent 1.6px)` / `background-size: 22px 22px` |

Pas d'ombre. Pas de dégradé (hors texture de points).

### Typographie (Google Fonts)
- **Unbounded** 400/600/800 — titres, chiffres, noms de boutiques, logo.
- **Instrument Sans** 400/500/600/700 — corps et UI. Body 17px / lh 1.55 / `text-wrap: pretty`.
- **DM Mono** 400/500 — codes promo, domaines, kickers de section, ticker.

| Élément | Police | Taille | Poids | lh | Tracking |
| --- | --- | --- | --- | --- | --- |
| H1 | Unbounded | `clamp(38px, 6.4vw, 92px)` | 800 | .95 | −0.045em (« CBD » en `#C8F560`) |
| H2 de section | Unbounded | `clamp(30px, 4.6vw, 60px)` | 800 | 1 | −0.04em |
| Kicker de section (« 01 — le classement ») | DM Mono | 13px | 400 | — | .06em |
| Rang dans le palmarès | Unbounded | `clamp(34px, 4vw, 54px)` | 800 | .9 | −0.06em |
| Nom boutique (H3) | Unbounded | `clamp(19px, 2vw, 26px)` | 600 | 1.1 | −0.02em |
| Chiffres podium | Unbounded | 1 : `clamp(80px,12vw,180px)` · 2 : `clamp(56px,8vw,120px)` · 3 : `clamp(48px,7vw,100px)` | 800 | .8 | −0.06em |
| Code coupon | DM Mono | `clamp(30px, 4.4vw, 52px)` | 500 | — | .06em |
| Wordmark footer | Unbounded | `clamp(56px, 15vw, 230px)` | 800 | .8 | −0.06em |

### Formes / espacement
- Conteneur `max-width: 1360px`, padding horizontal `clamp(16px, 3vw, 40px)`.
- Padding vertical de section `clamp(48px, 7vw, 96px)`.
- Rayons : pastilles/boutons `999px` ; lignes du palmarès 28px ; cartes 20–26px ; coupon 32px ; blocs podium `28px 28px 0 0`.
- Contours : **2px solid `#0F2E1D`** (lignes, cartes, boutons ronds, chips filtres) ; pointillés 1.5–2px pour codes promo et séparateurs.
- Tap targets ≥ 44px (CTA 54–56px).

---

## Sections (dans l'ordre)

### 0. Ticker
Bande 34px `#C8F560`, texte DM Mono 12.5px uppercase .08em 500. Texte `TICKER` répété 4× dans un conteneur `width: max-content` animé `translateX(0 → -50%)` en `40s linear infinite`. `aria-hidden`. Coupé sous `prefers-reduced-motion`.

### 1. Header sticky
`position: sticky; top: 0; z-index: 50`, fond `#0F2E1D`. Flex wrap space-between, padding 10px.
- Logo : « palmarès » Unbounded 800 21px crème + pastille « cbd » (Unbounded 600 12px, fond `#C8F560`, padding 5px 10px).
- Nav : Podium · Palmarès · Méthode · FAQ (pastilles 44px, padding 0 14px, 14px 500, nowrap ; hover fond `#163D27` texte `#C8F560`) + « Code du n°1 » (fond `#C8F560`, 600, padding 0 18px ; hover `#B79CFF`).

### 2. Hero (`#haut`)
Fond pin + texture de points. Grille `repeat(auto-fit, minmax(min(100%, 420px), 1fr))`, align end.
- Gauche : sticker « Palmarès 2026 · relevé du 14.09 » (contour 1.5px `#C8F560`, DM Mono 12.5px, pastille avec point 8px, `rotate(-2deg)`) ; H1 « Top 10 des meilleurs sites CBD en France » ; intro `#CFE0CF` max 44ch ; CTA « Voir le palmarès » (plein acide, 56px) + « Code DISCOUNTER15 » (contour pointillé 1.5px violet, code en mono violet) ; 4 stats en cartes `#163D27` radius 18px : **10** boutiques classées · **3** sites sur le podium · **4** codes promo actifs · **0,34 €** le gramme le plus bas relevé (chiffre Unbounded 800 30px acide).
- Droite `#podium` : grille 3 colonnes `minmax(0,1fr)`, align end, hauteur `clamp(320px, 40vw, 500px)`. Ordre visuel **2 – 1 – 3** :
  - 2 : hauteur 70 %, `#24753F`, texte crème, « Greenhouse CBD Shop » / « dès 2,80 €/g ».
  - 1 : hauteur 100 %, `#C8F560`, « CBD Discounter » / « dès 0,75 €/g » ; sticker « notre n°1 » centré au-dessus (violet, contour 2px pin, `rotate(-4deg)`).
  - 3 : hauteur 52 %, `#B79CFF`, « CBDP Paris » / « livraison offerte ».
  - Chaque bloc est un lien vers `#rang-N`. Socle 14px crème sous le podium.

### 3. 01 — Le palmarès complet (`#classement`)
Fond crème. En-tête : kicker + H2 à gauche, phrase d'aide à droite.
**Filtres** (`role="group"`) : « Ton besoin : » + chips `Tout voir / Petit budget / Livraison rapide / Boutique physique / Code promo` (44px, contour 2px pin, `aria-pressed` ; actif : fond pin texte acide).
**Liste `<ol>`** de 10 lignes `<li id="rang-N">` (contour 2px pin, radius 28px, gap 12px). Fond : n°1 `#C8F560`, n°2-3 `#FBFCF6`, n°4-10 transparent. Si un filtre est actif, les lignes non concernées passent à `opacity: .4` (transition .3s) et les concernées reçoivent un badge violet « ✓ correspond ».
En-tête de ligne (flex wrap, gap 14px 22px) : rang « 01 » · bloc nom (H3 + badge « Meilleur site 2026 » pour le n°1 + accroche 15px) · chips de données (Prix dès, Livraison, code promo en chip pointillée mono si présent) · actions à droite :
- **Rangs 1-3** : bouton « Visiter le site » (48px, fond pin, texte acide ; hover `#24753F`), `rel="nofollow sponsored"`.
- **Rangs 4-10** : domaine en DM Mono 13px `#4A5E50`, **non cliquable**.
- Bouton rond 48px `+ / −` (`aria-expanded`, `aria-label` « Ouvrir/Fermer la fiche X ») qui déplie la fiche.
Fiche dépliée (séparateur 2px pointillé) : grille auto-fit 280px → verdict 16.5px + `<dl>` spécialité / site ; carte « Ce qu'on aime » (fond acide, marqueurs ↑) ; carte « À savoir » (crème, marqueurs ↓). **Fiche n°1 ouverte par défaut.**

### 4. 02 — Le n°1 à la loupe (`#code`)
Fond `#C8F560`, bordures haut/bas 2px pin. Grille 2 colonnes auto-fit 400px.
- Gauche : H2 « CBD Discounter, premier du palmarès 2026 », intro, 3 cartes pin (grille `84px 1fr`) : « € — 0,75 € le gramme », « 14h30 — Expédié le jour même », « + — Un catalogue large ».
- Droite : **coupon** crème (contour 2px, radius 32px, `rotate(1.5deg)`, encoches rondes 36px en acide sur les côtés) : « bon de réduction · cbd-discounter.fr », « Ton code chez le n°1 », **DISCOUNTER15** entre deux filets pointillés, boutons « Copier le code » (violet ; copie dans le presse-papier, libellé → « Code copié ✓ » pendant 2,2s) et « Aller sur CBD Discounter » (pin, lien sponsorisé).

### 5. 03 — La méthode (`#methode`)
Fond pin. H2 « Comment on départage les boutiques ». Barre empilée pleine largeur (hauteur `clamp(56px,7vw,84px)`, radius 999px, contour 2px acide) en 5 segments `flex: 30/20/20/20/10` : acide / feuille / violet / crème / pin surélevé, libellés % en Unbounded 800. Légende en 5 cartes `#163D27` : Prix d'appel 30 % · Livraison 20 % · Catalogue 20 % · Transparence 20 % · Bonus 10 %. Encadré pointillé violet « Liens et transparence ».

### 6. 04 — Six réflexes avant de commander
Fond crème. Grille auto-fit 300px de 6 cartes `#FBFCF6` (contour 2px, radius 26px) : pastille numéro 52px acide, titre Unbounded 19px, texte 15.5px.

### 7. 05 — FAQ (`#faq`)
Fond `#E3ECD2`, bordure haute 2px. 2 colonnes (titre « Tu te demandes… » | accordéon). 7 items en cartes crème radius 22px ; bouton pleine largeur 64px, rond 40px pin avec `+ / −` acide. **1re question ouverte par défaut.**

### 8. Footer
Fond pin. 3 colonnes (texte, liens légaux, contact), puis wordmark géant « palmarès » acide (nowrap, padding-bottom .14em), puis barre acide : mention légale + « © 2026 Palmarès CBD ».

---

## Interactions & état
- `open: Record<number, boolean>` — fiches dépliées (défaut `{0: true}`).
- `filter: null | 'budget' | 'rapide' | 'boutique' | 'promo'` — tags par boutique dans `SHOPS[].tags`.
- `faq: Record<number, boolean>` (défaut `{0: true}`).
- `copied: boolean` — feedback du bouton copier (`navigator.clipboard.writeText('DISCOUNTER15')`).
- Focus : `outline: 3px solid #B79CFF; outline-offset: 3px`. Sélection : fond acide.
- `scroll-behavior: smooth` ; ancres `#haut #podium #classement #rang-1…10 #code #methode #faq` avec `scroll-margin-top` 70–90px (header sticky).
- **Responsive** : aucun point de rupture JS, tout est en `flex-wrap`, `auto-fit` et `clamp()`. Le podium reste en 3 colonnes même en mobile.

## Règles de contenu (impératives)
- Ordre : 1 CBD Discounter · 2 Greenhouse CBD Shop · 3 CBDP Paris · 4 StreetShop France · 5 CBDOO · 6 CDUCBD · 7 Le Green Spot · 8 Mama Kana · 9 Green Owl · 10 CBDSol.
- **Liens externes uniquement pour les rangs 1-3**, en `rel="nofollow sponsored"`. Rangs 4-10 : domaine en texte, jamais cliquable.
- Codes : DISCOUNTER15, GREENHOUSE15, PARIS15, CBDNOUVEAU.
- **À confirmer** : nom du site et domaine (`palmares-cbd.fr`, e-mails), URLs `greenhouse-cbd-shop.fr` et `cbdp-paris.fr`.
- Mention obligatoire : majeurs, non médicament, THC ≤ 0,3 %. Aucune allégation thérapeutique.

## SEO
Un seul H1, H2 par section, H3 par boutique / conseil / question. 3 JSON-LD à copier depuis le `<helmet>` : `Organization`, `ItemList` (10 positions), `FAQPage` (7 Q/R identiques au texte visible). Polices en `preconnect` + `display=swap`.

## Assets
Aucune image ni SVG. Tout est typographique / CSS. Polices SIL OFL.

## Files
- `Palmares CBD V2.dc.html` — référence complète (markup, styles exacts, données).
- `support.js` — runtime du prototype, uniquement pour ouvrir la référence.
