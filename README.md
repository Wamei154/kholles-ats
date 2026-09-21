# Khôlles ATS

Petit site que je bricole pour m'aider à suivre mes khôlles et réviser, en prépa ATS au lycée Blaise Pascal (Rouen).

Au départ c'était juste pour avoir le colloscope sous la main sans réouvrir un PDF à chaque fois, et ça a fini par prendre des flashcards aussi.

## Ce qu'il y a dedans

- **Colloscope** : tu choisis ton groupe et la semaine, ça t'affiche direct tes khôlles (prof, salle, horaire) et les devoirs à rendre.
- **Emploi du temps** en un clic, avec zoom sur l'image.
- **Flashcards** par matière et par chapitre, avec un système basique de "à revoir / acquis" pour pas retomber sur les cartes que tu maîtrises déjà. Certains paquets ont une page de résumé de cours à lire avant.

## Techno

Rien de compliqué : du HTML/CSS/JS pur, Tailwind chargé en CDN, KaTeX pour les formules. Pas de build, pas de dépendances à installer. La progression sur les flashcards reste dans le navigateur (localStorage), rien n'est envoyé nulle part.

## Fichiers

- `index.html` : la page
- `app.js` : toute la logique (navigation, flashcards, colloscope)
- `data.js` : les données — colloscope, EDT, paquets de cartes
- `style.css` : quelques styles en plus (carte qui se retourne, etc.)
- `edt.jpg` : l'emploi du temps

## Pour lancer

Y a rien à installer, tu ouvres `index.html` dans un navigateur et c'est bon. Sinon ça tourne aussi tel quel sur GitHub Pages.

## Modifier les données

- Colloscope / groupes de TP : dans `data.js`, tableau `groups` de chaque matière (une valeur par semaine).
- Ajouter un paquet de flashcards : un tableau de cartes (`front` / `back` / `hint`) + une entrée dans `decks`, puis la rattacher dans `library`.

## ⚠️

C'est un projet que je fais pour moi, en cours d'année, donc c'est jamais figé et il peut y avoir des erreurs — vérifiez toujours les infos importantes (colloscope notamment) avec les sources officielles.
