# Handoff : classement-cbd-qualite-prix.com (V5) — one-page « Le classement CBD qualité/prix 2026 »

## Objectif
Reproduire **à l'identique, au pixel près**, la maquette `Classement CBD Qualite Prix V5.dc.html` : une **page unique éditoriale** qui classe 10 boutiques CBD selon leur **rapport qualité-prix** et met en avant **CBD Discounter** comme meilleur choix. **Ce n'est pas un site marchand** : aucun panier, compte, recherche ou paiement.

Direction artistique : **Bauhaus géométrique**. Code visuel central : **cercle vert = qualité**, **carré corail = prix**. Signature : une **balance animée** qui penche selon le site choisi.

## À propos des fichiers
- `Classement CBD Qualite Prix V5.dc.html` : **référence de design** en HTML (prototype). L'ouvrir dans un navigateur avec `support.js` à côté. Ce n'est **pas** du code de production : les styles sont inline et le rendu passe par un runtime interne. **Recréer** le design dans la stack cible avec du CSS propre (classes, CSS modules ou Tailwind).
- Toutes les données sont dans le `<script type="text/x-dc">` en bas du fichier : `SHOPS`, `GUIDE_Q`, `GUIDE_P`, `FAQ`, `RADIUS`, `HEAD`. Les **reprendre mot pour mot**.
- Les 3 blocs JSON-LD sont dans le `<helmet>` en haut du fichier : les **reprendre tels quels**.
- `support.js` : sert uniquement à ouvrir la référence.

### Stack
- **Site statique** (Astro ou Next.js en export statique) : idéal. Une seule interaction (la balance), en JS vanilla (~30 lignes).
- **Shopify** : layout dédié sans header, footer ni panier du thème (garder seulement `{{ content_for_header }}`). Une section Liquid par bloc ci-dessous, textes en `settings`, éléments répétés en `blocks`. Rediriger `/cart`, `/collections`, `/products` vers `/` et les bloquer dans `robots.txt`.

## Fidelity
**High-fidelity.** Couleurs, typographies, tailles, espacements, textes et interactions sont définitifs. Comparer à la référence à 1440, 1024, 900, 768 et 390px.

---

## 1. Design tokens

### Couleurs
| Rôle | Hex | Sens |
| --- | --- | --- |
| Vert forêt (encre, bordures, fonds sombres) | `#13261C` | structure |
| Vert feuille | `#2F8F4E` | **qualité** (cercles, CTA principal) |
| Vert clair | `#7BC98F` | qualité secondaire, rang 3 |
| Vert texte sur sauge | `#1F6B39` | libellés sur `#DCE5D6` |
| Corail | `#EE6A47` | **prix** (carrés) |
| Corail texte | `#D2512F` | « prix » dans le logo et le H1 |
| Corail clair | `#F28B6D` / `#FBE3DA` | rang 2, fonds de pastilles prix |
| Moutarde | `#F2B705` | n°1, pivot de la balance, FAQ |
| Fond de page | `#F7F6F1` | — |
| Sauge (panneau balance, analyses, vignettes 4-10) | `#DCE5D6` | — |
| Blanc | `#FFFFFF` | cartes |
| Texte atténué | `#4E5F54` / `#3E4F44` | — |
| Texte secondaire sur forêt | `#CFDACF` | — |

**Bordures : 3px solid `#13261C` partout.** Aucune ombre. Les rayons sont uniquement géométriques : `50%` (cercles), `999px` (boutons pilule), `0` (carrés). Triangles en CSS (bordures).

### Typographies (Google Fonts)
```
https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700;800;900&family=Albert+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Martian+Mono:wght@400;500;700&display=swap
```
| Famille | Usage |
| --- | --- |
| **League Spartan** 700-900 | Titres, chiffres, noms de boutiques, logo. Interlettrage négatif. |
| **Albert Sans** 400-700 | Corps et interface. Body : 18px, line-height 1.6, `text-wrap: pretty`. |
| **Martian Mono** 400-700 | Libellés de section, intitulés de colonnes, codes promo, domaines. |

| Élément | Police | Taille | Graisse | lh | ls |
| --- | --- | --- | --- | --- | --- |
| H1 | League Spartan | `clamp(46px, 7vw, 104px)` | 900 | .9 | −0.035em |
| H2 | League Spartan | `clamp(38px, 5.4vw, 76px)` | 900 | .92 | −0.03em |
| Libellé de section (« 01 — L'indice qualité-prix ») | Martian Mono | 12.5px | 500 | — | uppercase |
| Nom n°1 (carte classement) | League Spartan | `clamp(36px, 4.6vw, 64px)` | 900 | .92 | −0.03em |
| Chiffre « 1 » géant | League Spartan | `clamp(120px, 14vw, 200px)` | 900 | .75 | −0.06em |
| Nom dans les analyses | League Spartan | `clamp(28px, 3.4vw, 44px)` | 900 | 1 | −0.025em |
| Multiplicateurs ×3,7 / ×9,5 | League Spartan | `clamp(48px, 5vw, 72px)` | 900 | .9 | — |

### Mise en page
- Conteneur : `max-width: 1320px; margin: 0 auto; padding-inline: clamp(14px, 3vw, 40px)`.
- Padding vertical des sections : `clamp(56px, 8vw, 104px)`.
- Zones cliquables ≥ 44px (CTA 48-56px). Boutons en pilule (`border-radius: 999px`), `white-space: nowrap`.
- Liens par défaut : `#2F8F4E`, soulignés (`text-underline-offset: 3px`) ; survol `#13261C`.
- Focus : `outline: 3px solid #EE6A47; outline-offset: 3px`. Sélection : fond moutarde.
- `scroll-behavior: smooth` ; ancres avec `scroll-margin-top: 70-80px` (header sticky).

---

## 2. Sections (dans l'ordre)

### 2.1 Header sticky
`position: sticky; top: 0; z-index: 50`, fond `#F7F6F1`, bordure basse 3px. Flex wrap space-between.
- **Logo** (lien `#balance`) : cercle vert 18px + carré corail 16px, puis « classement-cbd-**qualite**-**prix**.com » (League Spartan 800, `clamp(15px, 1.6vw, 18px)`), avec « qualite » en `#2F8F4E` et « prix » en `#D2512F`.
- **Nav** (15px 600, 44px, survol vert) : L'indice `#indice` · Classement `#classement` · Analyses `#analyses` · Guide `#guide` · FAQ `#faq`, puis la pilule foncée « ● N°1 : CBD Discounter » (point moutarde, lien externe ; survol fond vert).

### 2.2 Hero `#balance`
Grille `repeat(auto-fit, minmax(min(100%, 460px), 1fr))`, gap `clamp(36px, 5vw, 72px)`, `align-items: center`.

**Colonne gauche**
1. Libellé : trait 28×3px + « Édition 2026 · 10 boutiques pesées » (Martian Mono 12.5px uppercase).
2. **H1** : « Le classement CBD **qualité**/**prix** 2026 » (« qualité » vert, « / » encre, « prix » corail texte).
3. Chapô `clamp(18px, 1.8vw, 21px)`, max 46ch, « CBD Discounter » en gras.
4. **Encadré formule** (bordure 3px, fond blanc, padding 16px 20px) en grille de 5 colonnes : cercle vert 26px · « atouts vérifiés » · « ÷ » (League Spartan 900 34px) · carré corail 24px · « prix au gramme ».
5. CTA : « Voir CBD Discounter » (pilule verte 56px, texte blanc ; survol fond forêt) + « Le classement complet » (pilule contour 3px ; survol fond forêt, texte clair).

**Colonne droite : panneau balance** (fond sauge, bordure 3px, padding `clamp(18px, 3vw, 28px)`, `position: relative`)
- Décor : soleil moutarde de 120px en haut à droite (absolu, top/right 18px).
- Titre « La balance qualité-prix » (Martian Mono 12px 700) + consigne 15px.
- **Balance** (`aria-hidden`, hauteur `clamp(300px, 34vw, 380px)`, max-width 520px, centrée) :
  - **Socle** : demi-disque forêt 170×54px, `border-radius: 85px 85px 0 0`, en bas au centre.
  - **Pied** : barre de 14px de large, de `top: 92px` jusqu'à `bottom: 50px`.
  - **Fléau** : barre forêt de 12px de haut, `left: 6%; right: 6%; top: 92px`, `transform: rotate(var(--tilt))`, `transform-origin: center`, `transition: transform .9s cubic-bezier(.3,1.5,.5,1)` (léger rebond).
  - **Plateaux** accrochés à chaque extrémité du fléau. Chaque accroche est contre-tournée (`rotate(calc(var(--tilt) * -1))`, `transform-origin: 0 0`, même transition) pour que les plateaux restent verticaux. Chaque plateau : tige de 3×64px, puis une coupe de 152×26px avec bordure 3px et `border-radius: 0 0 76px 76px`.
    - **Plateau gauche (qualité)** : coupe verte ; posés dessus, un **cercle de 36px par atout** (bordure 3px, couleurs en alternance `#2F8F4E`, `#7BC98F`, `#F2B705`).
    - **Plateau droit (prix)** : coupe corail ; posé dessus, un **carré corail** dont le côté vaut `24 + prix × 11` px (0,75 € → 32px, 2,80 € → 55px, 7,14 € → 103px), transition `.6s` sur la taille.
  - **Pivot** : rond moutarde de 36px bordé 3px, centré à `top: 80px`, au-dessus du fléau.
- **Sélecteur** (`role="group"`) : 3 pilules (48px, bordure 3px, `aria-pressed`) : CBD Discounter · Greenhouse CBD Shop · CBDP Paris. Actif : fond forêt, texte clair. **Défaut : CBD Discounter.**
- **Légende** en 2 cartes blanches bordées : « ● Ce que vous obtenez » (liste des atouts) et « ■ Ce que vous payez » (prix en League Spartan 900 40px + « prix d'appel au gramme »).
- **Verdict** : barre forêt, texte clair 16px : « **Indice X,XX** (moutarde) · texte du verdict ».

**Inclinaisons** (négatif = le plateau qualité descend) :
| Site | tilt | Indice |
| --- | --- | --- |
| CBD Discounter | −14deg | 4,00 |
| Greenhouse CBD Shop | −3deg | 1,07 |
| CBDP Paris | +13deg | 0,42 |

Le rendu initial (CBD Discounter) doit être dans le HTML côté serveur ; le JS met seulement à jour l'inclinaison, la taille du carré, les atouts, le prix, l'indice et le verdict.

### 2.3 L'indice `#indice`
Fond forêt, texte clair. En-tête 2 colonnes : libellé moutarde + H2 « À services égaux, le prix tranche » | paragraphe explicatif `#CFDACF`.
- **3 cercles** proportionnels (grille `auto-fit, 260px`, `align-items: end`), chiffre de l'indice au centre (League Spartan 900, texte forêt) :
  - n°1 : diamètre `clamp(180px, 20vw, 260px)`, fond moutarde, texte `clamp(48px, 5.4vw, 72px)` → **4,00**
  - n°2 : `clamp(96px, 10vw, 134px)`, fond `#7BC98F`, texte `clamp(28px, 3vw, 38px)` → **1,07**
  - n°3 : `clamp(64px, 6.4vw, 84px)`, fond corail, texte `clamp(20px, 2vw, 26px)` → **0,42**
  - Sous chaque cercle : filet clair 3px, « N. Nom » (26px 800), « 3 atouts ÷ X,XX €/g » (Martian Mono 13px).
- **Bandeau des multiplicateurs** : grille de 2 cellules séparées par un filet clair de 3px : « **×3,7** » (moutarde) « Greenhouse CBD Shop coûte 3,7 fois plus cher au gramme que CBD Discounter. » · « **×9,5** » (corail) « CBDP Paris coûte 9,5 fois plus cher au gramme que CBD Discounter. »

### 2.4 Classement `#classement`
H2 « Les 10 sites, du meilleur rapport qualité-prix au moins documenté ».
- **Carte n°1** (bordure 3px, fond blanc, grille `auto-fit, 280px`) :
  - bloc gauche moutarde (min-height 260px, bordure droite 3px) : « Meilleur rapport qualité-prix 2026 » + « 1 » géant ; grand cercle vert de 200px bordé, qui déborde en bas à droite (`right/bottom: -40px`, `overflow: hidden`) ;
  - bloc droit (`grid-column: span 2`) : H3 « CBD Discounter », phrase, 2 tuiles bordées (carré corail 44px + « 0,75 €/g / prix d'appel » ; cercle vert 44px + « 4,00 / indice qualité-prix »), 3 pastilles sauge à puce verte (Catalogue large · Expédié le jour même avant 14h30 · Code DISCOUNTER15), CTA pilule verte « Visiter CBD Discounter → » + lien « Lire l'analyse » (`#analyse-1`).
- **Cartes n°2 et n°3** (grille `auto-fit, 340px`, gap 20px), chacune en grille `110px 1fr` :
  - colonne de rang colorée (n°2 `#F28B6D`, n°3 `#7BC98F`) avec le chiffre dans une forme de 64px bordée : **n°2 carré** (`radius 0`), **n°3 goutte** (`radius: 0 50% 50% 50%`) ;
  - H3, phrase, `<dl>` Prix dès / Indice / Code, CTA pilule contour « Visiter le site → ».
- **Places 4 à 10** : H3 « Places 4 à 10 · citées à titre d'information, indice non calculable faute de prix comparable ». Grille `auto-fit, 240px` de vignettes sauge bordées : rang dans un carré contour de 40px, nom (lien d'ancre `#analyse-N`), spécificité, domaine en Martian Mono. **Ni prix, ni code, ni lien externe.**

### 2.5 Analyses `#analyses`
Fond sauge, bordures 3px haut et bas. H2 « Chaque site, côté qualité et côté prix ». 10 `<article id="analyse-N">` (fond `#F7F6F1`, bordure 3px, gap 20px) :
- **En-tête** (bordure basse 3px, fond : n°1 moutarde, n°2 `#FBE3DA`, n°3 sauge, 4-10 `#F7F6F1`) : forme du rang 52px (n°1 cercle, n°2 carré, n°3 goutte, 4-10 carré), H3 nom, chapô 17px, et pour les **rangs 1-3 uniquement** une pilule foncée « Visiter → ».
- **Corps en 3 colonnes** (grille `auto-fit, 260px`, séparées par des bordures de 3px, astuce `margin: 0 -3px -3px 0` pour fusionner les traits) :
  1. **● Côté qualité** : texte + liste d'atouts à puces vertes.
  2. **■ Côté prix** : prix en League Spartan 900 30px (« Prix non communiqué » pour les rangs 4-10), texte, ligne Martian Mono « Code : X · domaine ».
  3. **▲ Notre verdict** (fond blanc, triangle moutarde en CSS) : texte.

### 2.6 Guide `#guide`
H2 « Juger soi-même le rapport qualité-prix ». 2 cartes côte à côte (grille `auto-fit, 420px`) :
- **Évaluer la qualité** : en-tête vert (texte blanc, cercle clair), 5 points avec numéro dans un **cercle** sauge 40px.
- **Évaluer le prix** : en-tête corail (texte forêt, carré clair), 4 points avec numéro dans un **carré** `#FBE3DA` 40px.
- Chaque point : H3 21px 800 + texte 16.5px, séparateurs 1px `rgba(19,38,28,.2)`.

### 2.7 FAQ `#faq`
Fond moutarde, bordure haute 3px. H2 « Qualité, prix : vos questions ». Grille `auto-fit, 440px`, gap colonnes 32px. 8 Q/R **toujours visibles** (pas d'accordéon) : filet haut 3px, numéro dans une forme forêt de 40px (texte moutarde) qui **alterne cercle et carré**, H3 22px 800, réponse 17px. **Texte identique au JSON-LD FAQPage.**

### 2.8 Footer
Fond forêt. **Frise géométrique** en haut : grille de 12 colonnes, hauteur `clamp(40px, 6vw, 80px)`, bordure basse 3px claire. Cases dans l'ordre : demi-cercle vert (bas) · carré moutarde · demi-cercle corail (haut) · vide · cercle sauge · carré vert · demi-cercle moutarde (droite) · vide · carré corail · cercle vert · demi-cercle moutarde (gauche) · carré sauge.
Puis 3 colonnes (logo + phrase · Transparence · liens Mentions légales / Confidentialité / `contact@classement-cbd-qualite-prix.com`) et la ligne légale en Martian Mono : « Vente interdite aux mineurs. Les produits au CBD ne sont pas des médicaments. THC ≤ 0,3 %. © 2026 classement-cbd-qualite-prix.com ».

---

## 3. L'indice qualité-prix (logique)
```
indice = atouts_vérifiés / prix_d_appel_au_gramme
CBD Discounter      : 3 / 0,75 = 4,00
Greenhouse CBD Shop : 3 / 2,80 = 1,07
CBDP Paris          : 3 / 7,14 = 0,42
```
Calculé **uniquement pour le podium**. Rangs 4-10 : « — » (pas de prix comparable).

## 4. Règles de contenu (impératives)
- **Ordre** : 1 CBD Discounter · 2 Greenhouse CBD Shop · 3 CBDP Paris · 4 StreetShop France · 5 CBDOO · 6 CDUCBD · 7 Le Green Spot · 8 Mama Kana · 9 Green Owl · 10 CBDSol.
- **Liens externes uniquement vers le top 3**, toujours en `rel="nofollow sponsored"` :
  - CBD Discounter → `https://www.cbd-discounter.fr/`
  - Greenhouse CBD Shop → `https://www.greenhouse-cbd-shop.fr/` *(à confirmer)*
  - CBDP Paris → `https://www.cbdp-paris.fr/` *(à confirmer)*
- Rangs 4-10 : domaine affiché en texte, **jamais cliquable**, **aucun prix**, **aucun code promo**.
- **Codes promo** : DISCOUNTER15, GREENHOUSE15, PARIS15 uniquement.
- **CBD Discounter n'est jamais placé derrière un concurrent** : pas de tri, pas de prix de concurrent inférieur au sien, indice calculé sur le podium seulement.
- Aucune allégation thérapeutique ; mention mineurs / non médicament / THC ≤ 0,3 % obligatoire.

## 5. SEO
- `<title>` : « Classement CBD qualité-prix 2026 : les 10 meilleurs sites | classement-cbd-qualite-prix.com »
- `<meta name="description">` : « Quel site de CBD offre le meilleur rapport qualité-prix ? Notre classement 2026 de 10 boutiques : CBD Discounter en tête, indice 4,00, 0,75 €/g, expédition le jour même. »
- Un seul `<h1>` ; H2 par section ; H3 par carte, analyse, point de guide et question ; H4 pour les colonnes des analyses.
- JSON-LD : `WebSite`, `ItemList` (10 positions : URLs des sites pour 1-3, ancres `#analyse-N` pour 4-10), `FAQPage` (8 Q/R).
- Tout le contenu est rendu côté serveur, y compris l'état initial de la balance.
- Polices en `display=swap` (idéalement auto-hébergées). Aucune image. Objectif Lighthouse 95+ partout.
- `prefers-reduced-motion: reduce` : supprimer les transitions de la balance.

## 6. Checklist de recette
- [ ] Rendu identique à la référence à 1440, 1024, 900, 768 et 390px.
- [ ] Balance : les 3 états penchent du bon côté avec le rebond, les plateaux restent verticaux, le carré prix change de taille.
- [ ] Sélecteur de la balance utilisable au clavier, `aria-pressed` à jour.
- [ ] Indices exacts : 4,00 / 1,07 / 0,42 ; multiplicateurs ×3,7 / ×9,5.
- [ ] Liens externes uniquement vers le top 3, tous en `nofollow sponsored`.
- [ ] Aucun prix ni code promo pour les places 4 à 10.
- [ ] Les CTA ne passent jamais sur deux lignes.
- [ ] Pas de panier, de compte ni de recherche.
- [ ] JSON-LD valides dans le test des résultats enrichis de Google.
