# Révision et Quiz Soutenance - D2WM (BAC+2) - CDA (BAC+3)

Ce projet est une **application web interactive** permettant de réviser et de tester ses connaissances pour les cursus **D2WM** et **CDA**.
Il est conçu pour préparer une **soutenance** devant des étudiants de niveau **BAC+2** et **BAC+3**.

Application 100% statique (HTML / CSS / JavaScript vanilla), sans framework ni dépendance : elle fonctionne en local ou sur GitHub Pages.

## 🎯 Objectif

- Proposer un **quiz interactif** : questions chronométrées, retour immédiat ("Bonne réponse" / "Mauvaise réponse") et explication pédagogique après chaque question
- Fournir une **base de questions** consultable par thème et par niveau, avec recherche plein texte et réponses complètes
- Offrir une page **"À retenir"** avec les points clés à formuler pendant l'oral de soutenance
- **Suivre la progression** : questions vues, thèmes maîtrisés, taux de réussite des derniers quiz et recommandations de révision

## 📚 Contenu pédagogique

- **381 questions** réparties en **22 thèmes** :
  Base de données, Algorithmes, Les IDE, L'environnement, Le versioning, Les maquettes, Le HTML, Le CSS, Le responsive design, L'accessibilité, Le DOM, JS - JavaScript, L'architecture, La POO, Le Clean Code, Le projet et les méthodes, CI/CD & Déploiement, Le Back-end & les API, La sécurité, Filière D2WM & CDA, UML & Conception, Les tests...
- **3 niveaux de difficulté** : Facile, Intermédiaire, Avancé
- **Filtre par filière** : Toute, D2WM, CDA
- **Vademecum PDF** complet intégré dans une page dédiée et accessible depuis le menu

## ✨ Fonctionnalités

### Quiz interactif
- Configuration : thème, niveau, filière (D2WM / CDA / Toute), nombre de questions (1 à 50), temps par question (10 à 300 s)
- Questions dans un ordre aléatoire à chaque session
- Chronomètre par question avec barre de progression
- Explication pédagogique après chaque réponse
- Score final avec pourcentage, temps total et message personnalisé
- Revue des mauvaises réponses en fin de quiz

### Base de questions
- Toutes les questions organisées par thème et niveau avec réponses et explications
- Recherche plein texte (questions et explications)
- Filtre par niveau de difficulté

### Suivi de progression (stockage local `localStorage`)
- **Historique** des 5 derniers quiz avec scores
- **Progression** : questions vues, thèmes maîtrisés (seuil de 70%), réussite des 3 derniers quiz
- **Révisions recommandées** : suggestions automatiques basées sur les thèmes les moins réussis

### Navigation et ergonomie
- Pages accueil / quiz / questions accessibles via `?page=...` ou ancres
- Header et footer mutualisés, chargés dynamiquement (`layout.js`) avec repli en cas d'absence de `fetch`
- Design responsive et animations d'entrée

---

## 🚀 Utilisation

### 1. Lancer en local
- Ouvrir le fichier `index.html` dans un navigateur web
*(Compatible avec Chrome, Firefox, Edge, Safari)*

### 2. Jouer
- Lire la question affichée
- Choisir une réponse parmi les propositions
- Lire l'explication affichée après votre réponse
- Passer à la question suivante
- Recevoir votre score final et la revue de vos erreurs à la fin du quiz

### 3. Accéder au quiz en ligne
- Ouvrir le lien fourni par GitHub Pages
- Partager l'URL avec les futurs D2WM ou CDA

## 🎯 Accéder à l'application en ligne

**[Cliquez ici pour accéder au quiz en ligne](https://eni-ecole-informatique.github.io/prepaSoutenanceD2WM/)**

---

## 📂 Structure du projet

```
prepaSoutenanceD2WM\
│── index.html      # Page principale : accueil, configuration quiz, quiz, résultats, base de questions
│── a-retenir.html  # Points clés à retenir pour la soutenance (15 questions clés + idées essentielles)
│── vademecum.html  # Page de consultation du Vademecum (PDF intégré, ouverture et téléchargement)
│── header.html     # Partial HTML de l'en-tête (chargé dynamiquement)
│── footer.html     # Partial HTML du pied de page (chargé dynamiquement)
│── quiz.js         # Données : l'ensemble des questions du quiz (thème, niveau, filière, réponses, explication)
│── script.js       # Logique : timer, gestion des questions, navigation, progression, historique, recommandations
│── layout.js       # Injection dynamique du header/footer avec fallback
│── style.css       # Styles du projet
│── img\
│────── capture-quiz-v1.png
│────── logo_eni.png
│── vademecum\
│────── VademecumV4_2025-10-15 1.pdf   # Vademecum complet de la formation
│── README.md       # Documentation du projet
│── license.txt     # Licence du projet
```

---

## 🖼 Aperçu visuel

**[Cliquez ici pour accéder à une capture d'écran du quiz](https://eni-ecole-informatique.github.io/prepaSoutenanceD2WM/img/capture-quiz-v1.png)**

---

## 📜 Licence

Ce projet est publié sous licence **MIT**.
Vous pouvez l'utiliser, le modifier et le partager librement.
