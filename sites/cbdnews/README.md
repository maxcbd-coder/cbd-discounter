# CBD News — landing Shopify (cbdnews.fr)

Boutique Shopify « Palmarès CBD » (`gwreds-19.myshopify.com`), domaine **cbdnews.fr**, marque **CBD News**.
Design « Palmarès » (préfixe `msc-`, mais CSS et section différents d'ActuCBD).

- Thème publié : **Copie de Horizon** (non modifiable par l'API).
- Thème de travail : **CBD News — refonte nov. 2026** (non publié). À prévisualiser puis publier depuis l'admin.
- Le premier commit de `theme/` est l'état publié avant modifications.

## Ce qui change

- Marque : « Palmarès CBD » → **CBD News** (logo « cbd » + pastille « news », wordmark, `<title>` via `snippets/msc-meta.liquid`, JSON-LD, pied de page, bandeau, e-mails `@cbdnews.fr`).
- Logos des boutiques (podium, palmarès, encart du n° 1) via `snippets/msc-shop-logo.liquid` ; initiales pour Green Owl.
- CBD Discounter : cases « Lien dofollow » et « Lier chaque mention » cochées → toutes les mentions et boutons en `rel="noopener"`, marche du podium vers le site. Greenhouse et CBDP Paris en `nofollow sponsored`.
- Signature datée (relevé 14/09, mise à jour 12/11/2026), 2 réflexes, 4 questions ; JSON-LD `WebSite`, `Article`, logos dans `ItemList`.
