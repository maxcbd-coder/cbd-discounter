# meilleurs-sites-cbd-pas-cher — landing Shopify (V4)

One-page « Meilleur site CBD pas cher en 2026 » (direction « ticket de caisse »), intégrée au thème **Horizon** de la boutique « Meilleurs sites CBD pas cher ».

- `design/` : maquette V4 de référence (handoff HTML + README).
- `theme/` : fichiers ajoutés ou remplacés dans le thème.
  - `layout/landing.liquid` : layout dédié (pas de panier, compte ni recherche). Produit, collection, panier, recherche, blog et article redirigent vers l'accueil (`noindex`).
  - `sections/msc-landing.liquid` : toute la page. Blocs « Boutique » (ordre = rang), « Règle du guide », « Question ». JSON-LD `WebSite`, `ItemList`, `FAQPage` générés depuis ces blocs.
  - `sections/msc-header.liquid`, `sections/msc-footer.liquid` : bandeau de relevé, en-tête sticky, pied de page.
  - `sections/msc-page.liquid`, `sections/msc-redirect.liquid` : pages / 404 et repli des gabarits marchands.
  - `snippets/msc-eur.liquid` : format « 7,50 € ».
  - `assets/msc-landing.css`, `assets/msc-landing.js` : styles et simulateur (rendu initial côté serveur).
  - `templates/*.json`, `templates/robots.txt.liquid`.
  - `settings_schema.msc-group.json` : groupe ajouté à `config/settings_schema.json` (title / meta description de l'accueil).

## Classement (relevé du 14/09/2026)
1 CBD Discounter · 2 Greenhouse CBD Shop · 3 CBDP Paris · 4 StreetShop France · 5 Deli Hemp · 6 CDUCBD · 7 Le Green Spot · 8 JustBob · 9 Weedy · 10 Crystalweed.

Sites exclus (déjà testés, ne jamais citer) : cbdpaschere.com, lecbd-discount.fr, destockcbd.com, lepetitbotaniste.com, thegreenstore.fr, cbdbicyclette.fr, cbdeau.fr, cbdsol.fr, cocorikush.fr, gardenz.fr, cbdpascher14.fr, mamakana.com, cbd.fr, cbdmoinscher.fr, greenowl.fr, lafermeducbd.fr, cibdol.com, highsociety.fr, cbdoo.fr.

Règles : liens externes (nofollow sponsored), prix et codes uniquement pour le top 3 ; le simulateur ne compare que le podium.
