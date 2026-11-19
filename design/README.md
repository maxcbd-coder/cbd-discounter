# Handoff : meilleur-site-cbd-pas-cher.com (V4) — one-page « Meilleur site CBD pas cher en 2026 »

## Objectif
Reproduire **à l'identique, au pixel près**, la maquette `Meilleur Site CBD Pas Cher V4.dc.html` : une **page unique éditoriale** qui compare les prix de 10 boutiques CBD et met en avant **CBD Discounter** comme meilleur site pas cher. **Ce n'est pas un site marchand** : aucun panier, compte, recherche ou paiement.

Direction artistique : **ticket de caisse + étiquettes de prix de supermarché**, sur fond vert chlorophylle quadrillé.

## À propos des fichiers
- `Meilleur Site CBD Pas Cher V4.dc.html` : **référence de design** en HTML (prototype). L'ouvrir dans un navigateur avec `support.js` à côté. Ce n'est **pas** du code de production : les styles sont inline et le rendu passe par un runtime interne. **Recréer** le design dans la stack cible avec du CSS propre (classes, CSS modules ou Tailwind).
- Toutes les données sont dans le `<script type="text/x-dc">` en bas du fichier : `SHOPS`, `GUIDE`, `FAQ`, `QTYS`. Les **reprendre mot pour mot**.
- Les 3 blocs JSON-LD sont dans le `<helmet>` en haut du fichier : les **reprendre tels quels**.
- `support.js` : sert uniquement à ouvrir la référence.

### Stack
- **Site statique** (Astro ou Next.js en export statique) : idéal. Une seule interaction (simulateur), en JS vanilla.
- **Shopify** : layout dédié sans header, footer ni panier du thème. Une section Liquid par bloc ci-dessous, textes en `settings` et éléments répétés en `blocks`. Ne garder que `{{ content_for_header }}`. Rediriger `/cart`, `/collections`, `/products` vers `/` et les bloquer dans `robots.txt`.

## Fidelity
**High-fidelity.** Couleurs, typographies, tailles, espacements, textes et interactions sont définitifs. Comparer à la référence à 1440, 1024, 768 et 390px.

---

## 1. Design tokens

### Couleurs
| Rôle | Hex |
| --- | --- |
| Vert chlorophylle (hero, guide, boutons) | `#0B4D33` |
| Encre (texte, bordures, ombres pleines, footer) | `#101A14` |
| Fond de page | `#F4F5EE` |
| Fond « rayon » (section classement) | `#E2E6D8` (aussi survol de la nav) |
| Papier ticket | `#FBFBF4` |
| Blanc (cartes, simulateur, FAQ) | `#FFFFFF` |
| Jaune étiquette (accent principal) | `#FFE34A`, survol `#FFF07F` |
| Vert « meilleur prix » (barre n°1, pastille, résultat) | `#19C36B` |
| Vert pâle (encadré « Les plus ») | `#D7F5E3` |
| Barres concurrents (simulateur) | `#D3D8CB` |
| Texte secondaire sur clair | `#3D4A41` / `#26332A` |
| Rang atténué (places 4-10) | `#6B776E` |
| Texte secondaire sur vert | `#DDE8DF` ; sur encre `#C9D2CB` |
| Quadrillage hero | `linear-gradient(rgba(244,245,238,.07) 1px, transparent 1px)` + idem en 90deg, `background-size: 28px 28px` |

**Aucun border-radius**, sauf les petits ronds décoratifs (trou de l'étiquette). **Ombres pleines sans flou** (`4px 4px 0`, `6px 6px 0`, `8px 8px 0`). Une seule ombre floue : sous le ticket du hero (`0 30px 50px -20px rgba(0,0,0,.5)`).

### Typographies (Google Fonts)
```
https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Courier+Prime:wght@400;700&family=Schibsted+Grotesk:wght@400;500;600;700;800&display=swap
```
| Famille | Usage |
| --- | --- |
| **Archivo** (axe largeur 62-125) | Titres, prix, rangs. Toujours condensé via `font-stretch` (62 % à 80 %), le plus souvent en uppercase. |
| **Courier Prime** 400/700 | Ticket, libellés de section, données, codes promo, logo. |
| **Schibsted Grotesk** 400-800 | Corps de texte et interface. Body : 18px, line-height 1.6, `text-wrap: pretty`. |

| Élément | Police | Taille | Graisse | lh | Détails |
| --- | --- | --- | --- | --- | --- |
| H1 | Archivo | `clamp(48px, 7.6vw, 112px)` | 900 | .88 | stretch 68 %, uppercase, ls −0.02em ; « pas cher » sur fond jaune, texte encre, `rotate(-2deg)`, padding 0 .12em |
| H2 | Archivo | `clamp(38px, 5.4vw, 76px)` | 900 | .9 | stretch 68 %, uppercase, ls −0.015em |
| Libellé de section (« 01 · Simulateur de panier ») | Courier Prime | 14px | 700 | — | uppercase, `#0B4D33` (jaune sur fond vert) |
| Prix étiquette n°1 (euros) | Archivo | `clamp(110px, 11vw, 150px)` | 900 | .82 | stretch 62 % |
| Prix étiquettes n°2-3 (euros) | Archivo | `clamp(84px, 8vw, 110px)` | 900 | .82 | stretch 62 % |
| Centimes + « € » | Archivo | 34px | 900 | — | à droite des euros, au-dessus de « le gramme » (Courier 13px) |
| Nom sur étiquette | Archivo | `clamp(26px, 2.4vw, 32px)` | 800 | 1 | stretch 75 %, uppercase |
| Nom dans les avis | Archivo | `clamp(36px, 4.4vw, 60px)` | 900 | .9 | stretch 70 %, uppercase ; n°1 en `#0B4D33` |
| Total simulateur | Archivo | `clamp(26px, 3vw, 38px)` | 900 | 1 | stretch 70 % |
| Ticket | Courier Prime | 15px | 400/700 | 1.5 | — |

### Mise en page
- Conteneur : `max-width: 1320px; margin: 0 auto; padding-inline: clamp(14px, 3vw, 36px)`.
- Padding vertical des sections : `clamp(56px, 8vw, 104px)`.
- Bordures : **2px solid `#101A14`** partout ; séparateurs internes en pointillés (`1px dashed` ou `2px dashed`).
- Zones cliquables ≥ 44px (CTA 50-54px).
- Liens par défaut : `#0B4D33`, soulignés (`text-underline-offset: 3px`) ; survol `#101A14`.
- Focus : `outline: 3px solid #FFE34A; outline-offset: 2px; box-shadow: 0 0 0 6px #101A14`. Sélection : fond jaune.
- `html { scroll-behavior: smooth }` ; ancres avec `scroll-margin-top: 70-80px` (header sticky).

---

## 2. Sections (dans l'ordre)

### 2.1 Bandeau de relevé
Fond jaune, bordure basse 2px. Flex wrap space-between, padding 8px, Courier Prime 13.5px 700 uppercase : « Relevé des prix du 14 septembre 2026 » · « Prix au gramme TTC · hors frais de port ».

### 2.2 Header sticky
`position: sticky; top: 0; z-index: 50`, fond `#F4F5EE`, bordure basse 2px. Flex wrap space-between.
- **Logo** (lien `#ticket`) : Courier Prime 700 `clamp(15px, 1.6vw, 18px)`, « meilleur-site-cbd-**pas-cher**.com » ; « pas-cher » dans une boîte jaune bordée 2px, padding 0 6px.
- **Nav** (15px 600) : Simulateur `#simulateur` · Le rayon `#rayon` · Avis `#avis` · Guide `#guide` · FAQ `#faq` (44px, padding 0 12px, survol fond `#E2E6D8`) + CTA « DISCOUNTER15 → » (fond vert, texte jaune, Courier 700, lien externe CBD Discounter ; survol fond encre).

### 2.3 Hero `#ticket`
Fond vert + quadrillage, texte `#F4F5EE`. Grille `repeat(auto-fit, minmax(min(100%, 440px), 1fr))`, gap `clamp(40px, 6vw, 88px)`, `align-items: center`.

**Colonne gauche**
1. Libellé jaune : « Comparatif des prix · 10 boutiques · édition 2026 ».
2. **H1** : « Meilleur site CBD **pas cher** en 2026 ».
3. Chapô `clamp(18px, 1.8vw, 21px)` `#DDE8DF`, max 46ch ; « CBD Discounter » en `<strong>` clair.
4. Ligne CTA (flex wrap, gap 22px 28px) :
   - **Étiquette de prix** (lien CBD Discounter) : fond jaune, bordure 2px, `clip-path: polygon(22px 0, 100% 0, 100% 100%, 22px 100%, 0 50%)` (étiquette à pointe gauche), `rotate(-3deg)`, padding 16px 28px 16px 46px. Trou : rond 12px vert bordé 2px, à 20px du bord gauche, centré verticalement. Contenu : « CBD DISCOUNTER · DÈS » (Courier 12.5px) puis « 0,75€/g » (Archivo stretch 62 %, 900, 72px ; « /g » en 30px).
   - Pile de 2 liens : « Voir les prix CBD Discounter » (fond clair, bordure 2px, ombre `4px 4px 0 #101A14`, 54px, 800 ; survol fond jaune) et « Calculer mon panier ↓ » (lien texte vers `#simulateur`).

**Colonne droite : le ticket** (`<figure>`, largeur `min(100%, 430px)`, centré, `rotate(2deg)`)
- Corps : fond `#FBFBF4`, Courier 15px, padding `28px clamp(18px,3vw,30px) 18px`, ombre floue.
- En-tête centré : « MEILLEUR-SITE-CBD-PAS-CHER.COM » (700 16px), « Ticket n° 2026-0914 · comparatif des prix » (13px).
- Ligne pointillée en texte (`- - - -`, `overflow: hidden; white-space: nowrap`).
- 3 lignes en grille `auto 1fr auto` : « 01 / CBD DISCOUNTER ……… / 0,75 €/G » (en gras), puis « 02 GREENHOUSE CBD SHOP 2,80 €/G », « 03 CBDP PARIS 7,14 €/G ». La colonne du milieu se termine par des points de conduite coupés (`overflow: hidden`).
- Pointillés, puis 3 lignes clé/valeur 14px : MEILLEUR PRIX PODIUM → **CBD DISCOUNTER** · EXPÉDITION → **JOUR MÊME <14H30** · CODE N°1 → **DISCOUNTER15** (surligné jaune).
- Ligne `= = = =`, code-barres de 54px : `repeating-linear-gradient(90deg, #101A14 0 2px, transparent 2px 4px, #101A14 4px 5px, transparent 5px 8px, #101A14 8px 11px, transparent 11px 13px, #101A14 13px 14px, transparent 14px 17px)`.
- Pied : « Merci de votre visite · prix relevés le 14/09/2026 ».
- **Bord déchiré en dents de scie** sous le ticket : div de 10px, `background: conic-gradient(from -45deg at bottom, #FBFBF4 90deg, transparent 0) 0 0 / 20px 10px repeat-x`.
- `<figcaption>` masquée visuellement qui reprend les 3 prix en texte (accessibilité et SEO).

### 2.4 Bandeau verdict
Fond encre. Grille `auto-fit, minmax(min(100%, 280px), 1fr)`, 3 cellules séparées par des filets verticaux `rgba(244,245,238,.18)`, padding 22px. Chaque cellule : libellé Courier 13px jaune uppercase + valeur 18px 600.
« Prix le plus bas du podium » → CBD Discounter, 0,75 €/g · « Seul envoi le jour même » → CBD Discounter, avant 14h30 · « Code à utiliser » → DISCOUNTER15.

### 2.5 Simulateur `#simulateur` (interactif)
En-tête en 2 colonnes : libellé + H2 « Combien vous coûte votre CBD ? » à gauche ; à droite, texte d'explication (17.5px `#3D4A41`).
**Carte** : fond blanc, bordure 2px, ombre `8px 8px 0 #0B4D33`.
- **Sélecteur de quantité** (bordure basse 2px) : libellé « QUANTITÉ » (Courier 14px), puis 5 boutons `5 g / 10 g / 20 g / 50 g / 100 g` (flex 1 1 70px, 60px de haut, bordure gauche 2px, Archivo stretch 75 %, 800, 24px, `aria-pressed`). Actif : fond jaune. **Défaut : 10 g.**
- **3 barres** (padding `clamp(20px, 3vw, 32px)`, gap 18px), grille `minmax(130px, 220px) minmax(0, 1fr)` :
  - gauche : nom (18px 700) + prix au gramme (Courier 13.5px) ;
  - droite : barre de 44px de haut, bordure 2px, largeur = `total / total max × 100 %` (max `calc(100% - 120px)`, min 10px), `transition: width .5s cubic-bezier(.2,.8,.2,1)` ; puis le total en Archivo.
  - Couleurs : CBD Discounter `#19C36B`, les deux autres `#D3D8CB`.
- **Pied** (fond jaune, bordure haute 2px pointillée) : phrase d'économie (17.5px 600) + CTA « Commander chez CBD Discounter → » (fond encre, texte jaune, 50px).

**Logique**
```js
const PRICES = { "CBD Discounter": 0.75, "Greenhouse CBD Shop": 2.80, "CBDP Paris": 7.14 };
total = prix * quantité;  // format fr : 7,50 €
phrase = `Pour ${q} g, CBD Discounter vous fait économiser ${total2 - total1} par rapport à Greenhouse CBD Shop et ${total3 - total1} par rapport à CBDP Paris.`
```
Le simulateur ne compare **que les 3 sites du podium**. Le rendu initial (10 g) doit être présent dans le HTML côté serveur ; le JS ne fait que le mettre à jour.

### 2.6 Le rayon `#rayon`
Fond `#E2E6D8`, bordures 2px en haut et en bas. Libellé « 02 · Le classement », H2 « Les 10 sites, rangés comme en rayon », texte d'intro.

**Étiquettes du podium** : `<ol>` en grille `auto-fit, minmax(min(100%, 300px), 1fr)`, gap 22px, `align-items: end`. Chaque étiquette (`<li id="etiquette-N">`) :
- fond blanc, bordure 2px, ombre `6px 6px 0 #101A14` ;
- **n°1 uniquement : pastille « MEILLEUR PRIX »** de 108×108px, fond `#19C36B`, position absolue `top: -34px; right: -14px`, `rotate(10deg)`, texte Archivo 900 15px uppercase, en forme d'étoile :
  `clip-path: polygon(50% 0, 64.6% 14.9%, 85.4% 14.6%, 85.1% 35.4%, 100% 50%, 85.1% 64.6%, 85.4% 85.4%, 64.6% 85.1%, 50% 100%, 35.4% 85.1%, 14.6% 85.4%, 14.9% 64.6%, 0 50%, 14.9% 35.4%, 14.6% 14.6%, 35.4% 14.9%)` ;
- bandeau haut (bordure basse 2px, Courier 14px uppercase) : « N° X du classement », fond jaune pour le n°1, `#F4F5EE` pour les n°2-3 ;
- corps (padding 18px) : nom (H3) ; **prix en format étiquette** (euros géants + « ,75€ » + « le gramme ») ; `<dl>` Livraison / Atout / Code (bordure haute pointillée) ; CTA « Voir le site → » (52px, bordure 2px : n°1 fond vert texte jaune, n°2-3 fond encre texte clair ; survol fond jaune) ;
- code-barres décoratif de 30px en pied (marges 0 18px 12px).

**Le reste du rayon (places 4 à 10)** : bloc bordé 2px, fond `#F4F5EE`, en-tête encre « Le reste du rayon · places 4 à 10 ». 7 lignes en grille `56px 1fr` séparées par des pointillés : rang en Archivo 40px `#6B776E` ; nom (lien d'ancre interne vers `#avis-N`, Archivo stretch 80 % 800 21px) + spécificité ; ligne Courier 13.5px « Livraison : … · domaine ». **Ni prix, ni code, ni lien externe.**

### 2.7 Avis détaillés `#avis`
Libellé « 03 · Avis détaillés », H2 « Notre avis sur chaque site ». 10 `<article id="avis-N">` (bordure haute 2px, padding vertical `clamp(28px, 4vw, 44px)`), grille `auto-fit, minmax(min(100%, 300px), 1fr)` :
- **Colonne gauche** : étiquettes « N° 0X » (bordure 2px) + pour le n°1 « Meilleur site pas cher 2026 » (fond `#19C36B`) ; H3 nom ; chapô (19px 600) ; encadré blanc bordé de données en Courier (Prix dès / Livraison / Code / Site) ; **rangs 1-3 uniquement** : CTA « Visiter {nom} → » (fond vert, texte jaune).
- **Colonne droite** (`grid-column: span 2`) : paragraphes 18px lh 1.68 max 68ch ; puis 2 encadrés « + Les plus » (fond `#D7F5E3`) et « − Les moins » (blanc), bordés 2px, titres Courier 14px uppercase.
- Valeurs « Prix dès » : `0,75 €/g`, `2,80 €/g`, `7,14 €/g` pour le podium, « non communiqué » pour les rangs 4-10.

### 2.8 Guide `#guide`
Fond vert, texte clair. Libellé jaune « 04 · Guide d'achat », H2 « Le vrai prix d'une commande », intro.
- **Formule visuelle** (flex wrap, gap 10px, Archivo stretch 72 % 800 `clamp(18px, 2vw, 24px)` uppercase) : [Prix au gramme] **×** [Quantité] **+** [Frais de port] **−** [Code promo] **=** [Ce que vous payez]. Boîtes bordées 2px, padding 12px 16px : la 1re en jaune, les 3 suivantes en `#F4F5EE`, le résultat en `#19C36B`. Opérateurs en jaune, 32px.
- **6 règles** en grille `auto-fit, minmax(min(100%, 300px), 1fr)` : filet haut `rgba(244,245,238,.4)`, « RÈGLE 0X » (Courier jaune), H3 Archivo stretch 78 % 800 25px uppercase, texte 17px `#DDE8DF`.

### 2.9 FAQ `#faq`
Libellé « 05 · Questions fréquentes », H2 « CBD pas cher : vos questions ». Grille `auto-fit, minmax(min(100%, 440px), 1fr)`, gap 14px. 8 cartes blanches bordées 2px, **toujours ouvertes** (pas d'accordéon) : H3 en grille `34px 1fr` (numéro Courier vert + question 19px 700), réponse 17px décalée de 42px. **Texte identique au JSON-LD FAQPage.**

### 2.10 Footer
Fond encre. 3 colonnes (`auto-fit, 260px`) : logo + phrase · « Transparence » · liens (Mentions légales, Confidentialité, `contact@meilleur-site-cbd-pas-cher.com`). Puis un grand code-barres clair de `clamp(60px, 9vw, 120px)` de haut, le numéro « 2 0 2 6 0 9 1 4 · 0 7 5 » (Courier 13px, ls .3em, centré), et la ligne légale : « Vente interdite aux mineurs. Les produits au CBD ne sont pas des médicaments. THC ≤ 0,3 %. © 2026 meilleur-site-cbd-pas-cher.com ».

---

## 3. Règles de contenu (impératives)
- **Ordre** : 1 CBD Discounter · 2 Greenhouse CBD Shop · 3 CBDP Paris · 4 StreetShop France · 5 CBDOO · 6 CDUCBD · 7 Le Green Spot · 8 Mama Kana · 9 Green Owl · 10 CBDSol.
- **Liens externes uniquement vers le top 3**, toujours en `rel="nofollow sponsored"` :
  - CBD Discounter → `https://www.cbd-discounter.fr/`
  - Greenhouse CBD Shop → `https://www.greenhouse-cbd-shop.fr/` *(à confirmer)*
  - CBDP Paris → `https://www.cbdp-paris.fr/` *(à confirmer)*
- Rangs 4-10 : domaine affiché en texte, **jamais cliquable**, **aucun prix affiché**, **aucun code promo**.
- **Codes promo** : DISCOUNTER15, GREENHOUSE15, PARIS15 uniquement.
- **CBD Discounter n'est jamais placé derrière un concurrent** : pas de tri, pas de prix de concurrent inférieur au sien (le prix de CBDSol est volontairement absent), le simulateur ne compare que le podium.
- Aucune allégation thérapeutique ; mention mineurs / non médicament / THC ≤ 0,3 % obligatoire.

## 4. SEO
- `<title>` : « Meilleur site CBD pas cher en 2026 : le comparatif des prix | meilleur-site-cbd-pas-cher.com »
- `<meta name="description">` : « Comparatif des prix au gramme de 10 sites CBD français. CBD Discounter, meilleur prix du podium à 0,75 €/g, expédition le jour même. Simulateur et codes promo. »
- Un seul `<h1>` ; H2 par section ; H3 par étiquette, avis, règle et question ; H4 pour « Les plus » et « Les moins ».
- JSON-LD : `WebSite`, `ItemList` (10 positions : URLs des sites pour 1-3, ancres `#avis-N` pour 4-10), `FAQPage` (8 Q/R).
- Tout le contenu est rendu côté serveur, y compris l'état initial du simulateur.
- Polices en `display=swap` (idéalement auto-hébergées). Aucune image. Objectif Lighthouse 95+ partout.

## 5. Checklist de recette
- [ ] Rendu identique à la référence à 1440, 1024, 768 et 390px.
- [ ] Le ticket a bien son bord en dents de scie et son code-barres.
- [ ] La pastille étoilée « Meilleur prix » est sur l'étiquette n°1 uniquement.
- [ ] Le simulateur fonctionne au clavier, les 5 quantités sont justes (ex. 10 g → 7,50 € / 28,00 € / 71,40 €).
- [ ] Liens externes uniquement vers le top 3, tous en `nofollow sponsored`.
- [ ] Aucun prix ni code promo pour les places 4 à 10.
- [ ] Pas de panier, de compte ni de recherche.
- [ ] JSON-LD valides dans le test des résultats enrichis de Google.
