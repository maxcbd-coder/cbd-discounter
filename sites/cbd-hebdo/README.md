# CBD Hebdo — landing Shopify (cbd-hebdo.fr)

Boutique Shopify « Gazette du chanvre » (`anpe3v-hr.myshopify.com`), domaine **cbd-hebdo.fr**, marque **CBD Hebdo**.
Design « Gazette » (sections `gz-*`, layout `gazette`), distinct de la landing ActuCBD.

- Thème publié : **Copie de Horizon** (non modifiable par l'API).
- Thème de travail : **CBD Hebdo — refonte nov. 2026** (non publié). À prévisualiser puis publier depuis l'admin.
- `theme/` : fichiers propres à la Gazette. Le premier commit de ce dossier est l'état publié avant modifications.

## Ce qui change par rapport au thème publié

- Marque : « La Gazette du Chanvre » → **CBD Hebdo** (titre du journal, `<title>`, Open Graph, JSON-LD, pied de page, FAQ, e-mail `redaction@cbd-hebdo.fr`).
- Logos des boutiques (podium, tableau, liste mobile, fiches, face-à-face, encart « À la une ») via `snippets/gz-shop-logo.liquid` ; monogramme si pas de logo (Green Owl).
- CBD Discounter : chaque mention dans les textes devient un lien dofollow (`rel="noopener"`) via `snippets/gz-autolink.liquid`. Les boutons du n° 1 sont aussi en dofollow (case « Lien dofollow » du bloc, « Bouton : lien dofollow » de l'encart). Greenhouse et CBDP Paris restent en `nofollow sponsored`.
- Contenu : date de mise à jour (12 novembre 2026), 2 conseils, 4 termes de lexique, 4 questions ; JSON-LD `WebSite`, `Article.dateModified`, logos dans `ItemList`.

## Liens de mention

La liste des boutiques liées se règle en tête de `snippets/gz-autolink.liquid` :

```
assign targets = 'CBD Discounter|https://www.cbd-discounter.fr/|noopener' | split: ';;'
```

Le sommaire des fiches garde ses ancres internes (navigation).
