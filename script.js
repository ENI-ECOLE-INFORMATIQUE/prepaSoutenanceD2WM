// === VARIABLES GLOBALES ===
        let currentQuiz = [];
        let currentQuestionIndex = 0;
        let score = 0;
        let timer = null;
        let timePerQuestion = 30;
        let totalTime = 0;
        let questionStartTime = 0;


        // === INITIALISATION ===
        document.addEventListener('DOMContentLoaded', function() {
            initializeThemeSelect();
            initializeNiveauSelect();
            afficherTotalQuestions();
            displayQuestionsList();
            displayHistory();
        });

        function initializeThemeSelect() {
            const select = document.getElementById('theme-select');
            const themes = Object.keys(questionsData);
            
            themes.forEach(theme => {
                const option = document.createElement('option');
                option.value = theme;
                option.textContent = theme;
                select.appendChild(option);
            });
        }

        function initializeNiveauSelect() {
            const niveauSelect = document.getElementById('niveau-select');
            if (!niveauSelect) return;

            // Récupération de tous les niveaux uniques
            const niveaux = new Set();

            for (const theme in questionsData) {
                questionsData[theme].forEach(q => {
                    if (q.level) {
                        niveaux.add(q.level);
                    }
                });
            }
            
             // Nettoyer la liste (on garde "Tous les niveaux")
            niveauSelect.innerHTML = '<option value="all">Tous les niveaux</option>';

            // Ajouter les niveaux triés alphabétiquement
            Array.from(niveaux).sort().forEach(niveau => {
                const option = document.createElement('option');
                option.value = niveau;
                option.textContent = niveau;
                niveauSelect.appendChild(option);
            });
        }

        function afficherTotalQuestions() {
            let total = 0;
            for (const theme in questionsData) {
                total += questionsData[theme].length;
            }
            const infoElement = document.getElementById('total-questions-info');
            if (infoElement) {
                infoElement.textContent = `Nombre total de questions disponibles : ${total}`;
            }
        }

        // === NAVIGATION ===
        function showPage(pageId) {
            // Masquer toutes les pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Afficher la page demandée
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
            
            // Mettre à jour la navigation active de manière robuste
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                const onClickAttr = link.getAttribute('onclick');
                if (onClickAttr && onClickAttr.includes(`showPage('${pageId}')`)) {
                    link.classList.add('active');
                } else if ((pageId === 'quiz' || pageId === 'results' || pageId === 'quiz-setup') && 
                           onClickAttr && onClickAttr.includes("showPage('quiz-setup')")) {
                    link.classList.add('active');
                }
            });
            
            // Arrêter le timer si on quitte le quiz
            if (pageId !== 'quiz' && timer) {
                clearInterval(timer);
                timer = null;
            }

            // Déclencher l'animation d'entrée
            animatePageEntry();
        }

        // === QUIZ ===
        function startQuiz() {
            const selectedTheme = document.getElementById('theme-select').value;
            const selectedNiveau = document.getElementById('niveau-select').value;
            const questionCount = parseInt(document.getElementById('question-count').value);
            timePerQuestion = parseInt(document.getElementById('time-limit').value);
            
            // Préparer les questions
            let availableQuestions = [];
            if (selectedTheme === 'all') {
                Object.values(questionsData).forEach(themeQuestions => {
                    availableQuestions.push(...themeQuestions);
                });
            } else {
                availableQuestions = [...questionsData[selectedTheme]];
            }
            
            // Filtrer selon le niveau
            if (selectedNiveau !== "all") {
                availableQuestions = availableQuestions.filter(q => q.level === selectedNiveau);
            }       

            // Mélanger et sélectionner les questions
            availableQuestions.sort(() => Math.random() - 0.5);
            currentQuiz = availableQuestions.slice(0, Math.min(questionCount, availableQuestions.length));

            // Vérifier si pas assez de questions
            if (currentQuiz.length === 0) {
                alert("Aucune question trouvée pour ce thème et ce niveau.");
                return;
            }
            
            // Réinitialiser les variables
            currentQuestionIndex = 0;
            score = 0;
            totalTime = 0;
            
            // Afficher le quiz
            showPage('quiz');
            displayQuestion();
        }

        function displayQuestion() {
            const question = currentQuiz[currentQuestionIndex];
            console.log(question);
            
            // Mettre à jour l'en-tête
            document.getElementById('current-question').textContent = currentQuestionIndex + 1;
            document.getElementById('total-questions').textContent = currentQuiz.length;
            
            // Mettre à jour la barre de progression
            const progressPercent = (currentQuestionIndex / currentQuiz.length) * 100;
            const progressBar = document.getElementById('quiz-progress-bar');
            if (progressBar) {
                progressBar.style.width = `${progressPercent}%`;
            }
            
            // Afficher la question
            document.getElementById('question-text').textContent = question.question;

            // Affichage du thème et du niveau au-dessus de la question
            document.getElementById("question-meta").innerHTML = `
                <strong>Thème :</strong> ${question.theme} &nbsp; | &nbsp; 
                <strong>Niveau :</strong> ${question.level}
            `;
            
            // Afficher les réponses
            const answersContainer = document.getElementById('answers-container');
            answersContainer.innerHTML = '';
            
            question.answers.forEach((answer, index) => {
                const button = document.createElement('button');
                button.className = 'answer-btn';
                button.textContent = answer;
                button.onclick = () => selectAnswer(index);
                answersContainer.appendChild(button);
            });
            
            // Masquer l'explication et le bouton suivant
            document.getElementById('explanation').classList.remove('show');
            document.getElementById('next-btn').classList.add('hidden');
            
            // Démarrer le timer
            questionStartTime = Date.now();
            startTimer();
        }

        function startTimer() {
            let timeLeft = timePerQuestion;
            const timerElement = document.getElementById('timer');
            
            timer = setInterval(() => {
                timerElement.textContent = timeLeft;
                
                if (timeLeft <= 5) {
                    timerElement.classList.add('warning');
                } else {
                    timerElement.classList.remove('warning');
                }
                
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    selectAnswer(-1); // Temps écoulé
                }
                
                timeLeft--;
            }, 1000);
        }

        function selectAnswer(selectedIndex) {
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
            
            const question = currentQuiz[currentQuestionIndex];
            const answersContainer = document.getElementById('answers-container');
            const buttons = answersContainer.querySelectorAll('.answer-btn');
            
            // Calculer le temps de réponse
            const responseTime = Date.now() - questionStartTime;
            totalTime += responseTime;
            
            // Colorer les réponses
            buttons.forEach((button, index) => {
                if (index === question.correct) {
                    button.classList.add('correct');
                } else if (index === selectedIndex) {
                    button.classList.add('incorrect');
                }
                button.onclick = null; // Désactiver les clics
            });
            
            // Vérifier la réponse
            if (selectedIndex === question.correct) {
                score++;
            }
            
            // Afficher l'explication
            const explanationElement = document.getElementById('explanation');
            const formattedExplanation = question.explanation.replace(/\n/g, "<br>");
            explanationElement.innerHTML = `<strong>Explication :</strong> 
                <div class="explanation-container">
                    <div class="explanation-content">
                        <div class="explanation-text">${formattedExplanation}</div>
                    </div>
                </div>`;
            explanationElement.classList.add('show');
            
            // Afficher le bouton suivant
            document.getElementById('next-btn').classList.remove('hidden');
        }

        function nextQuestion() {
            currentQuestionIndex++;
            
            if (currentQuestionIndex < currentQuiz.length) {
                displayQuestion();
            } else {
                showResults();
            }
        }

        function showResults() {
            const percentage = Math.round((score / currentQuiz.length) * 100);
            
            // Mettre à jour l'affichage des résultats
            document.getElementById('score-text').textContent = `${percentage}%`;
            document.getElementById('correct-answers').textContent = score;
            document.getElementById('incorrect-answers').textContent = currentQuiz.length - score;
            document.getElementById('total-time').textContent = Math.round(totalTime / 1000) + 's';
            
            // Animer le cercle de score
            const scoreCircle = document.getElementById('score-circle');
            scoreCircle.style.setProperty('--score-percentage', `${percentage}%`);
            
            // Sauvegarder dans le localStorage
            saveQuizResult();
            
            // Afficher la page des résultats
            showPage('results');
        }

        function escapeHTML(str) {
            const div = document.createElement("div");
            div.textContent = str;
            return div.innerHTML;
        }

        // === LISTE DES QUESTIONS ===
        function displayQuestionsList() {
            const container = document.getElementById('questions-container');
            container.innerHTML = '';
            
            // Trier les thèmes par ordre alphabétique
            const sortedThemes = Object.keys(questionsData).sort((a, b) => 
                a.toLowerCase().localeCompare(b.toLowerCase())
            );
            
            sortedThemes.forEach(theme => {
                const questions = questionsData[theme];
                
                // Créer la section du thème
                const themeSection = document.createElement('div');
                themeSection.className = 'theme-section';
                
                // En-tête du thème
                const themeHeader = document.createElement('div');
                themeHeader.className = 'theme-header';
                themeHeader.innerHTML = `<h3 title="(Cliquer pour afficher/cacher la liste des questions)">${theme} <small class="theme-count">(${questions.length} questions)</small></h3>`;
                
                // Contenu du thème
                const themeContent = document.createElement('div');
                themeContent.className = 'theme-content';
                
                questions.forEach((question, index) => {
                    const questionItem = document.createElement('div');
                    questionItem.className = 'question-item';
                    questionItem.setAttribute('data-level', question.level);
                    questionItem.style.display = 'none';
                    
                    questionItem.innerHTML = `
                        <div class="question-text">${index + 1}. ${question.question}</div>
                        <div class="question-meta"> 
                            <strong>Thème :</strong> ${question.theme} &nbsp; | &nbsp; 
                            <strong>Niveau :</strong> <span class="badge badge-${question.level.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}">${question.level}</span>
                        </div>
                        <div class="question-answer">
                            <div class="correct-answer">✓ Réponse : ${question.answers[question.correct]}</div>
                            <div class="explanation-container">
                                <div class="explanation-content">
                                    <div class="explanation-text">${question.explanation.replace(/\n/g, "<br>")}</div>
                                </div>
                            </div>    
                        </div>
                    `;
                    
                    themeContent.appendChild(questionItem);
                });
                
                // Gérer le clic pour ouvrir/fermer
                themeHeader.querySelector("h3").addEventListener("click", () => {
                    const query = document.getElementById('question-search-input').value.trim();
                    const selectedLevel = document.getElementById('question-level-filter').value;
                    if (query !== '' || selectedLevel !== 'all') return; // Ne rien faire en recherche active
                    
                    const isExpanded = themeSection.classList.toggle('expanded');
                    const items = themeSection.querySelectorAll('.question-item');
                    items.forEach(item => {
                        item.style.display = isExpanded ? 'block' : 'none';
                    });
                });
                
                themeSection.appendChild(themeHeader);
                themeSection.appendChild(themeContent);
                container.appendChild(themeSection);
            });
        }

        function filterQuestionsList() {
            const query = document.getElementById('question-search-input').value.toLowerCase().trim();
            const selectedLevel = document.getElementById('question-level-filter').value;
            
            const themeSections = document.querySelectorAll('.theme-section');
            
            themeSections.forEach(section => {
                const questions = section.querySelectorAll('.question-item');
                let matchCount = 0;
                
                questions.forEach(item => {
                    const qText = item.querySelector('.question-text').textContent.toLowerCase();
                    const expText = item.querySelector('.explanation-text').textContent.toLowerCase();
                    const qLevel = item.getAttribute('data-level');
                    
                    const matchesSearch = query === '' || qText.includes(query) || expText.includes(query);
                    const matchesLevel = selectedLevel === 'all' || qLevel === selectedLevel;
                    
                    if (matchesSearch && matchesLevel) {
                        item.classList.add('search-match');
                        item.style.display = 'block';
                        matchCount++;
                    } else {
                        item.classList.remove('search-match');
                        item.style.display = 'none';
                    }
                });
                
                const countBadge = section.querySelector('.theme-count');
                if (countBadge) {
                    if (query !== '' || selectedLevel !== 'all') {
                        countBadge.textContent = `(${matchCount} trouvé(s) / ${questions.length})`;
                    } else {
                        countBadge.textContent = `(${questions.length} questions)`;
                    }
                }
                
                if (matchCount > 0 || (query === '' && selectedLevel === 'all')) {
                    section.style.display = 'block';
                    if (query !== '' || selectedLevel !== 'all') {
                        section.classList.add('expanded');
                    } else {
                        section.classList.remove('expanded');
                        // Remasquer les questions si on revient à la normale
                        questions.forEach(item => {
                            item.style.display = 'none';
                        });
                    }
                } else {
                    section.style.display = 'none';
                    section.classList.remove('expanded');
                }
            });
        }

        // === GESTION DES ÉVÉNEMENTS ===
        document.addEventListener('keydown', function(event) {
            // Permettre la navigation avec les touches numériques pendant le quiz
            if (document.getElementById('quiz').classList.contains('active')) {
                const key = event.key;
                if (key >= '1' && key <= '4') {
                    const answerIndex = parseInt(key) - 1;
                    const buttons = document.querySelectorAll('.answer-btn');
                    if (buttons[answerIndex] && timer) {
                        selectAnswer(answerIndex);
                    }
                }
            }
        });

        // Empêcher le clic droit et certaines touches pour éviter la triche
        document.addEventListener('contextmenu', function(e) {
            if (document.getElementById('quiz').classList.contains('active')) {
                e.preventDefault();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (document.getElementById('quiz').classList.contains('active')) {
                // Empêcher F12, Ctrl+Shift+I, etc.
                if (e.key === 'F12' || 
                    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                    (e.ctrlKey && e.shiftKey && e.key === 'C') ||
                    (e.ctrlKey && e.key === 'u')) {
                    e.preventDefault();
                }
            }
        });

        // === FONCTIONS UTILITAIRES ===
        function shuffleArray(array) {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        }

        function formatTime(milliseconds) {
            const seconds = Math.floor(milliseconds / 1000);
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            
            if (minutes > 0) {
                return `${minutes}m ${remainingSeconds}s`;
            }
            return `${remainingSeconds}s`;
        }

        // === SAUVEGARDE DES RÉSULTATS (localStorage) ===
        function saveQuizResult() {
            const themeSelect = document.getElementById('theme-select');
            const result = {
                date: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
                score: score,
                total: currentQuiz.length,
                percentage: Math.round((score / currentQuiz.length) * 100),
                timeSpent: Math.round(totalTime / 1000),
                theme: themeSelect ? (themeSelect.value === 'all' ? 'Tous les thèmes' : themeSelect.value) : 'Tous les thèmes'
            };
            
            let history = [];
            try {
                history = JSON.parse(localStorage.getItem('quiz_history')) || [];
            } catch (e) {
                history = [];
            }
            
            history.unshift(result);
            history = history.slice(0, 5); // Conserver les 5 derniers résultats
            localStorage.setItem('quiz_history', JSON.stringify(history));
            
            displayHistory();
        }

        function displayHistory() {
            const container = document.getElementById('history-container');
            if (!container) return;
            
            let history = [];
            try {
                history = JSON.parse(localStorage.getItem('quiz_history')) || [];
            } catch (e) {
                history = [];
            }
            
            if (history.length === 0) {
                container.innerHTML = '<p class="no-history">Aucun historique disponible pour le moment.</p>';
                return;
            }
            
            let html = '<div class="history-list">';
            history.forEach(item => {
                const scoreClass = item.percentage >= 70 ? 'score-good' : (item.percentage >= 40 ? 'score-average' : 'score-bad');
                html += `
                    <div class="history-item">
                        <div class="history-meta">
                            <span class="history-date">${item.date}</span>
                            <span class="history-theme" title="${item.theme}">${item.theme}</span>
                        </div>
                        <div class="history-stats">
                            <span class="history-time">⏱ ${item.timeSpent}s</span>
                            <span class="history-score ${scoreClass}">${item.score}/${item.total} (${item.percentage}%)</span>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            container.innerHTML = html;
        }

        function clearHistory() {
            if (confirm("Voulez-vous vraiment effacer votre historique de scores ?")) {
                localStorage.removeItem('quiz_history');
                displayHistory();
            }
        }

        // === GESTION DES ERREURS ===
        window.addEventListener('error', function(e) {
            console.error('Erreur dans l\'application:', e.error);
            // Dans un environnement de production, on pourrait logger l'erreur
        });

        // === RESPONSIVE - GESTION DU REDIMENSIONNEMENT ===
        window.addEventListener('resize', function() {
            // Ajuster l'affichage si nécessaire
            if (window.innerWidth <= 768) {
                // Mode mobile
                document.body.classList.add('mobile');
            } else {
                document.body.classList.remove('mobile');
            }
        });

        // === PRÉCHARGEMENT DES DONNÉES ===
        function preloadData() {
            // Vérifier que toutes les questions ont les bonnes propriétés
            Object.entries(questionsData).forEach(([theme, questions]) => {
                questions.forEach((question, index) => {
                    if (!question.question || !question.answers || typeof question.correct !== 'number' || !question.explanation) {
                        console.warn(`Question invalide détectée dans ${theme}, question ${index + 1}`);
                    }
                });
            });
        }

        // === ACCESSIBILITÉ ===
        function setupAccessibility() {
            // Ajouter des attributs ARIA pour l'accessibilité
            document.querySelectorAll('.answer-btn').forEach((btn, index) => {
                btn.setAttribute('role', 'button');
                btn.setAttribute('aria-label', `Réponse ${index + 1}`);
                btn.setAttribute('tabindex', '0');
            });
        }

        // === ANIMATIONS D'ENTRÉE ===
        function animatePageEntry() {
            const activePage = document.querySelector('.page.active');
            if (activePage) {
                activePage.style.opacity = '0';
                activePage.style.transform = 'translateY(15px)';
                
                setTimeout(() => {
                    activePage.style.transition = 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.1, 0.76, 0.55, 0.94)';
                    activePage.style.opacity = '1';
                    activePage.style.transform = 'translateY(0)';
                }, 30);
            }
        }

        // Initialisation finale
        document.addEventListener('DOMContentLoaded', function() {
            preloadData();
            setupAccessibility();
            
            
            // Ajouter une classe pour indiquer que JS est chargé
            document.body.classList.add('js-loaded');
        });