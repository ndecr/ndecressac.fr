# ndecressac.fr

Portfolio bilingue de Nicolas Decressac, construit avec React, Vite et TypeScript strict.

## Commandes

- `npm run dev` : serveur local
- `npm run verify` : ESLint, garde-fous d’architecture, TypeScript et build Vite
- `npm run build` : génération statique dans `docs/` pour GitHub Pages

## Architecture

Le flux respecte `services > types > models > context > hooks > views/components > views/layouts`. Les vues sont passives, les imports inter-dossiers passent par des barrels et chaque composant possède son fichier SCSS co-localisé.
