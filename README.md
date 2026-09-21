# 🎓 Khôlles ATS

Application web personnelle pour suivre le programme de khôlles et réviser efficacement en prépa **ATS** (Lycée Blaise Pascal, Rouen).

## ✨ Fonctionnalités

- **Colloscope interactif** : affiche les khôlles programmées (matière, professeur, salle, horaire) et les devoirs à venir, selon ton groupe de khôlle et la semaine sélectionnée.
- **Emploi du temps** : consultation rapide de l'EDT avec zoom.
- **Bibliothèque de flashcards** : paquets de révision par matière et par chapitre (Mathématiques, Physique, Mécanique, Électronique...), avec :
  - suivi de progression par carte (mémorisation espacée simplifiée),
  - indices/astuces au dos de chaque carte,
  - rendu LaTeX (formules) via KaTeX,
  - pages de résumé de cours avant certains paquets de cartes.

## 🛠️ Stack technique

- HTML / CSS (Tailwind CDN) / JavaScript vanilla — aucun framework, aucune dépendance à installer.
- [KaTeX](https://katex.org/) pour l'affichage des formules mathématiques.
- [Font Awesome](https://fontawesome.com/) pour les icônes.
- Progression sauvegardée en local (`localStorage`) : rien n'est envoyé à un serveur.

## 📂 Structure du projet

| Fichier | Rôle |
|---|---|
| `index.html` | Structure de la page et composants d'interface |
| `app.js` | Logique de l'application (navigation, flashcards, colloscope) |
| `data.js` | Données : colloscope, emploi du temps, paquets de flashcards |
| `style.css` | Styles complémentaires (carte 3D, scrollbar, etc.) |
| `edt.jpg` | Image de l'emploi du temps |

## 🚀 Utilisation

Le site est entièrement statique : ouvre simplement `index.html` dans un navigateur, ou héberge le dossier tel quel (GitHub Pages, Netlify, etc.). Aucune installation ni build n'est nécessaire.

## 📝 Mettre à jour les données

- **Colloscope / groupes** : à modifier dans `data.js`, tableaux `groups` de chaque matière (un élément par semaine).
- **Nouveau paquet de flashcards** : ajouter un tableau de cartes (`front`/`back`/`hint`) et une entrée dans l'objet `decks`, puis la référencer dans `library`.

## ⚠️ Statut

Projet en développement personnel, maintenu au fil de l'année scolaire — les informations du colloscope sont à vérifier auprès des sources officielles.

## 📄 Licence

Ce projet est publié sous licence MIT (voir [`LICENSE`](./LICENSE)) — usage libre, sans garantie.
