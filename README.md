# ActuCBD — landing Shopify (actucbd.com)

Landing « Les 10 meilleurs sites pour acheter du CBD en 2026 », à la marque **ActuCBD** (nom de domaine `actucbd.com`).

- Thème publié : **Copie de Horizon** (non modifiable par l'API).
- Thème de travail : **ActuCBD — refonte nov. 2026** (non publié, copie du thème publié + fichiers de ce dépôt). À prévisualiser puis publier depuis l'admin Shopify.

## Fichiers

- `design/` : maquette de référence (handoff HTML + README de design).
- `theme/` : fichiers ajoutés ou remplacés dans le thème.
  - `layout/landing.liquid` : layout minimal (sans panier, recherche ni scripts e-commerce d'Horizon). Les gabarits produit, collection, panier, recherche, blog et article redirigent vers l'accueil (`noindex`).
  - `snippets/msc-meta.liquid` : balises `<title>`, description, Open Graph et Twitter à la marque ActuCBD (indépendantes du nom interne de la boutique Shopify). Le titre et la description SEO de l'accueil sont définis ici.
  - `snippets/msc-shop-logo.liquid` : logo d'une boutique dans une tuile carrée ; sans image, monogramme.
  - `snippets/msc-autolink.liquid` : transforme chaque mention d'une boutique en lien (blocs boutique dont « Lier chaque mention » est coché).
  - `sections/msc-landing.liquid` : toute la landing. Contenu éditable dans l'éditeur de thème via des blocs (boutique, choix, besoin, critère, conseil, signal d'alerte, FAQ). Les JSON-LD `Organization`, `WebSite`, `Article`, `ItemList` et `FAQPage` sont générés depuis ces mêmes blocs.
  - `sections/msc-header.liquid`, `sections/msc-footer.liquid` : en-tête et pied de page (sections statiques).
  - `sections/msc-page.liquid` : pages (mentions légales…) et 404 dans la même charte.
  - `assets/msc-landing.css` : styles de la maquette. `assets/msc-actucbd.css` : compléments (logos, liens de mention, sommaire, « selon votre besoin », signaux d'alerte).
  - `assets/msc-landing.js` : accordéon FAQ / reveal au scroll.
  - `templates/*.json` : tous en `"layout": "landing"`.

## Règles de liens

Chaque bloc boutique a trois réglages :

| Réglage | Effet |
| --- | --- |
| Lien « Voir le site » | Rempli : bouton « Voir le site ». Vide : le domaine s'affiche en texte. |
| Lien dofollow | Coché : `rel="noopener"`. Décoché : `rel="nofollow sponsored noopener"`. |
| Lier chaque mention du nom | Coché : chaque occurrence du nom dans les textes de la page devient un lien vers le site (même `rel`). |

Configuration actuelle : **CBD Discounter** → dofollow + toutes les mentions liées vers `https://cbd-discounter.fr/`. Greenhouse CBD Shop et CBDP Paris → bouton « Voir le site » en `nofollow sponsored`. Les autres → domaine en texte.

## Logos

Les logos sont des fichiers Shopify (Contenu > Fichiers, « Logo … »), importés depuis les favicons publics des sites (16 à 192 px selon le site). Pour un meilleur rendu, remplacer l'image du bloc boutique par un logo carré d'au moins 128 px. Green Owl n'a pas de logo exploitable : le monogramme s'affiche.
