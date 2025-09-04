// === DONNÉES ===
        const questionsData = {
            "HTML/CSS": [
                {
                    question: "Quelle balise HTML5 est utilisée pour définir un contenu principal d'une page ?",
                    answers: ["\"<main>\"", "\"<content>\"", "\"<primary>\"", "\"<section>\""],
                    correct: 0,
                    explanation: "La balise \"<main>\" est spécifiquement conçue en HTML5 pour marquer le contenu principal d'un document, celui qui est directement lié au sujet central de la page."
                },
                {
                    question: "Comment centrer un élément horizontalement avec CSS Flexbox ?",
                    answers: ["justify-content: center", "align-items: center", "text-align: center", "margin: auto"],
                    correct: 0,
                    explanation: "justify-content: center permet de centrer les éléments flex horizontalement le long de l'axe principal du conteneur flex."
                },
                {
                    question: "Quelle propriété CSS permet de créer des colonnes égales dans une grille ?",
                    answers: ["grid-template-columns: 1fr 1fr", "display: grid", "grid-gap: 10px", "grid-auto-rows: 1fr"],
                    correct: 0,
                    explanation: "grid-template-columns: 1fr 1fr crée deux colonnes de taille égale, où 1fr représente une fraction de l'espace disponible."
                }
            ],
            "JavaScript": [
                {
                    question: "Comment déclarer une variable constante en JavaScript ES6+ ?",
                    answers: ["var myVar", "let myVar", "const myVar", "constant myVar"],
                    correct: 2,
                    explanation: "Le mot-clé 'const' permet de déclarer une variable constante qui ne peut pas être réassignée après sa déclaration initiale."
                },
                {
                    question: "Quelle méthode permet d'ajouter un élément à la fin d'un tableau ?",
                    answers: ["array.add()", "array.push()", "array.append()", "array.insert()"],
                    correct: 1,
                    explanation: "La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle longueur du tableau."
                },
                {
                    question: "Comment vérifier si une variable est de type 'string' ?",
                    answers: ["typeof variable === 'string'", "variable.isString()", "variable instanceof String", "String.isString(variable)"],
                    correct: 0,
                    explanation: "L'opérateur typeof retourne le type de la variable sous forme de chaîne. Pour vérifier si c'est une string, on compare avec 'string'."
                }
            ],
            "Base de données": [
                {
                    question: "Quelle commande SQL permet de récupérer tous les enregistrements d'une table ?",
                    answers: ["GET * FROM table", "SELECT * FROM table", "FETCH * FROM table", "RETRIEVE * FROM table"],
                    correct: 1,
                    explanation: "SELECT * FROM table est la syntaxe standard SQL pour récupérer tous les enregistrements (toutes les colonnes) d'une table donnée."
                },
                {
                    question: "Qu'est-ce qu'une clé primaire en base de données ?",
                    answers: ["Un index sur une colonne", "Un identifiant unique pour chaque ligne", "Une contrainte de validation", "Une relation entre tables"],
                    correct: 1,
                    explanation: "Une clé primaire est un identifiant unique pour chaque ligne d'une table, elle ne peut pas être nulle et doit être unique."
                }
            ],
            "Algorithmes": [
                {
                    question: "Quelle est la complexité temporelle d'une recherche dans un tableau trié avec la recherche binaire ?",
                    answers: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                    correct: 1,
                    explanation: "La recherche binaire a une complexité O(log n) car elle divise l'espace de recherche par 2 à chaque itération."
                },
                {
                    question: "Quel algorithme de tri a la meilleure complexité temporelle dans le cas moyen ?",
                    answers: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
                    correct: 2,
                    explanation: "Quick Sort a une complexité moyenne de O(n log n), ce qui en fait l'un des algorithmes de tri les plus efficaces en moyenne."
                }
            ]
        };
