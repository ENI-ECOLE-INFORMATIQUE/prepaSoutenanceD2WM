// === DONNÉES ===
        const questionsData = {
            "HTML/CSS": [
                {
                    question: "Quelle balise HTML5 est utilisée pour définir un contenu principal d'une page ?",
                    answers: ["<main>", "<content>", "<primary>", "<section>"],
                    correct: 0,
                    explanation: "La balise <main> est spécifiquement conçue en HTML5 pour marquer le contenu principal d'un document, celui qui est directement lié au sujet central de la page."
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
            ],
            "Les IDE": [
                {
                    question: "Qu'est-ce qu'un environnement de développement intégré (IDE) ?",
                    answers: [
                        "Un simple éditeur de texte",
                        "Un logiciel qui fournit des outils complets (éditeur, compilateur, débogueur, gestion de projet)",
                        "Un gestionnaire de fichiers",
                        "Un navigateur web spécialisé"
                    ],
                    correct: 1,
                    explanation: "Un IDE combine un éditeur de code, un compilateur/interpréteur, un débogueur et des outils de gestion de projet. Il facilite le développement avec des fonctionnalités comme l’autocomplétion et l’intégration Git."
                },
                {
                    question: "Citez des IDE couramment utilisés.",
                    answers: [
                        "Notepad, Paint, Chrome",
                        "JetBrains (IntelliJ IDEA, WebStorm, PyCharm, PHPStorm), VS Code, Eclipse, NetBeans",
                        "Google Docs et Excel",
                        "Uniquement Visual Studio"
                    ],
                    correct: 1,
                    explanation: "Les IDE populaires incluent la suite JetBrains, Visual Studio Code, Eclipse et NetBeans. Chacun est adapté à différents langages."
                },
                {
                    question: "Quelles sont les principales fonctionnalités dans un IDE ?",
                    answers: [
                        "Uniquement écrire du texte",
                        "Complétion de code, débogage, gestion de versions, support multi-langage, tests intégrés",
                        "Lecture de PDF",
                        "Exécution de scripts sans écrire de code"
                    ],
                    correct: 1,
                    explanation: "Un IDE moderne intègre des outils de complétion, débogage, gestion Git, support multi-langage, tests et extensions."
                }
            ],

            "L'environnement": [
                {
                    question: "Comment configurer les variables d'environnement sur votre système ?",
                    answers: [
                        "On ne peut pas configurer de variables d'environnement",
                        "Uniquement via un logiciel externe",
                        "Windows : via le Panneau de configuration ; macOS/Linux : dans ~/.bashrc ou ~/.bash_profile",
                        "Elles se configurent directement dans le code"
                    ],
                    correct: 2,
                    explanation: "Sous Windows, elles se définissent dans les paramètres système avancés. Sous macOS/Linux, dans les fichiers de configuration du shell."
                },
                {
                    question: "Qu'est-ce qu'un serveur web local ?",
                    answers: [
                        "Un serveur installé sur une machine distante",
                        "Un logiciel qui simule un serveur web sur votre ordinateur pour tester vos applications",
                        "Un hébergeur gratuit en ligne",
                        "Un service cloud obligatoire"
                    ],
                    correct: 1,
                    explanation: "Un serveur web local permet de tester des applications web sur sa machine (ex : WAMP, MAMP, XAMPP, ou Live Server de VS Code)."
                    }
            ],

            "Le versioning": [
                {
                    question: "Qu'est-ce qu'un logiciel de versioning et pourquoi est-il important ?",
                    answers: [
                        "Un logiciel qui fait des sauvegardes automatiques",
                        "Un outil qui gère les différentes versions de fichiers et facilite la collaboration",
                        "Un programme pour compiler du code",
                        "Un système de chat pour développeurs"
                    ],
                    correct: 1,
                    explanation: "Le versioning (Git, SVN, etc.) permet de suivre les modifications, revenir en arrière, travailler en équipe et gérer les conflits."
                },
                {
                    question: "Comment installer Git sur votre système ?",
                    answers: [
                        "Télécharger depuis git-scm.com et suivre les instructions selon l’OS",
                        "Il est déjà installé sur tous les PC",
                        "Depuis le Microsoft Store uniquement",
                        "Uniquement via Docker"
                    ],
                    correct: 0,
                    explanation: "On télécharge Git sur git-scm.com, on installe selon l’OS, puis on vérifie avec `git --version`."
                }
            ]
        };
