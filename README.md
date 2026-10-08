# Palmarès CBD — landing Shopify

Landing « Top 10 des meilleurs sites CBD en France », intégrée au thème Shopify **Copie de Horizon** (non publié).

- `design/` : maquette de référence (`Palmares CBD V2.dc.html` + README de design). Ouvrir le HTML avec `support.js` à côté.
- `theme/` : fichiers ajoutés ou remplacés dans le thème.
  - `layout/landing.liquid` : layout minimal (sans panier, recherche ni scripts e-commerce d'Horizon). Les gabarits produit, collection, panier, recherche, blog et article redirigent vers l'accueil (`noindex`).
  - `sections/msc-landing.liquid` : toute la landing (hero + podium, palmarès, n°1 à la loupe, méthode, guide, FAQ). Contenu éditable dans l'éditeur de thème via des blocs : boutique (ordre = rang), atout du n°1, critère, réflexe, FAQ. Les JSON-LD `Organization`, `ItemList` et `FAQPage` sont générés depuis ces mêmes blocs.
  - `sections/msc-ticker.liquid`, `sections/msc-header.liquid`, `sections/msc-footer.liquid` : bandeau défilant, en-tête sticky et pied de page (sections statiques).
  - `sections/msc-page.liquid` : pages (mentions légales…) et 404 dans la même charte.
  - `assets/msc-landing.css`, `assets/msc-landing.js` : styles ; fiches dépliables, filtres par besoin, FAQ, copie du code.
  - `templates/*.json` : tous en `"layout": "landing"`.

Règles de contenu :
- Seuls les rangs 1 à 3 affichent « Visiter le site » (`rel="nofollow sponsored"`), et seulement si le champ « Lien » du bloc est rempli. Les rangs 4 à 10 affichent le domaine en texte, jamais cliquable.
- Les filtres (Petit budget, Livraison rapide, Boutique physique, Code promo) se règlent par cases à cocher sur chaque bloc boutique.
- Le coupon de la section « n°1 à la loupe » reprend le code, le domaine et le lien de la boutique n°1.
