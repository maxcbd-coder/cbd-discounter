# Landings CBD — thèmes Shopify

Deux one-pages éditoriales (pas de boutique) intégrées au thème **Horizon** de chaque boutique Shopify. CBD Discounter est n°1 partout, et chaque mention de « CBD Discounter » dans les textes renvoie vers https://www.cbd-discounter.fr/ (`nofollow sponsored`).

| Dossier | Boutique | Maquette |
| --- | --- | --- |
| `design/` + `theme/` | Meilleurs sites CBD pas cher (préfixe `msc-`) | V4 « ticket de caisse » |
| `classement-cbd-qualite-prix/` | Classement CBD meilleur rapport qualité/prix (préfixe `cqp-`) | V5 « Bauhaus », balance qualité-prix |

Chaque thème : `layout/landing.liquid` (layout dédié, gabarits marchands redirigés vers l'accueil en `noindex`), une section principale éditable par blocs (boutiques = rang, guide, FAQ ; JSON-LD `WebSite`, `ItemList`, `FAQPage` générés depuis les blocs), en-tête / pied de page, pages et 404, `robots.txt.liquid`, et un groupe ajouté à `config/settings_schema.json` (title / meta description de l'accueil).

## Classement (relevé du 14/09/2026)
1 CBD Discounter · 2 Greenhouse CBD Shop · 3 CBDP Paris · 4 StreetShop France · 5 Deli Hemp · 6 CDUCBD · 7 Le Green Spot · 8 JustBob · 9 Weedy · 10 Crystalweed.

Sites exclus (déjà testés, ne jamais citer) : cbdpaschere.com, lecbd-discount.fr, destockcbd.com, lepetitbotaniste.com, thegreenstore.fr, cbdbicyclette.fr, cbdeau.fr, cbdsol.fr, cocorikush.fr, gardenz.fr, cbdpascher14.fr, mamakana.com, cbd.fr, cbdmoinscher.fr, greenowl.fr, lafermeducbd.fr, cibdol.com, highsociety.fr, cbdoo.fr.

Règles : liens externes, prix, codes (et indice qualité-prix) uniquement pour le top 3.
