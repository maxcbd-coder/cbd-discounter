# Meilleur site CBD — landing Shopify

Landing « Les 10 meilleurs sites pour acheter du CBD en 2026 », intégrée au thème Shopify **Copie de Horizon** (non publié).

- `design/` : maquette de référence (handoff HTML + README de design).
- `theme/` : fichiers ajoutés ou remplacés dans le thème.
  - `layout/landing.liquid` : layout minimal (sans panier, recherche ni scripts e-commerce d'Horizon). Les gabarits produit, collection, panier, recherche, blog et article redirigent vers l'accueil (`noindex`).
  - `sections/msc-landing.liquid` : toute la landing. Contenu éditable dans l'éditeur de thème via des blocs (boutique, choix, critère, conseil, FAQ). Les JSON-LD `Organization`, `ItemList` et `FAQPage` sont générés depuis ces mêmes blocs.
  - `sections/msc-header.liquid`, `sections/msc-footer.liquid` : en-tête et pied de page (sections statiques).
  - `sections/msc-page.liquid` : pages (mentions légales…) et 404 dans la même charte.
  - `assets/msc-landing.css`, `assets/msc-landing.js` : styles et accordéon FAQ / reveal au scroll.
  - `templates/*.json` : tous en `"layout": "landing"`.

Règle de contenu : seul un bloc boutique dont le champ « Lien » est rempli affiche « Voir le site » (top 3, `rel="nofollow sponsored"`). Les autres affichent le domaine en texte.
