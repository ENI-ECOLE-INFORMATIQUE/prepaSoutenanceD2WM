(function () {
    const headerFallback = `
        <header>
            <div class="container header-content">
                <a href="index.html" class="logo">
                    <img src="img/logo_eni.png" alt="LOGO ENI Ecole Informatique" title="ENI Ecole Informatique">
                    <span class="text-header">Quiz D2WM - CDA</span>
                </a>
                <nav>
                    <ul>
                        <li><a href="index.html" class="nav-link" data-page="accueil">Accueil</a></li>
                        <li><a href="#quiz-setup" class="nav-link" data-page="quiz-setup">Quiz</a></li>
                        <li><a href="#questions-list" class="nav-link" data-page="questions-list">Questions</a></li>
                        <li><a href="a-retenir.html" class="nav-link">À retenir</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    `;

    const footerFallback = `
        <footer class="site-footer">
            <div class="container">
                <p>&copy; 2025-2026 Quiz D2WM - CDA - Plateforme de révision pour stagiaires en développement logiciel</p>
                <p>ENI Ecole Informatique - <a href="https://www.linkedin.com/in/sanchezdenis/" target="_blank" rel="noopener">Denis Sanchez</a> - V1.1 - 2026/09/28</p>
            </div>
        </footer>
    `;

    function bindHeaderNavigation() {
        document.querySelectorAll('.nav-link[data-page]').forEach(link => {
            link.addEventListener('click', function (event) {
                const page = this.dataset.page;
                if (!page || typeof showPage !== 'function') return;
                event.preventDefault();
                showPage(page);
            });
        });
    }

    function loadPartial(id, url, fallback, callback) {
        const placeholder = document.getElementById(id);
        if (!placeholder) return;

        if (!window.fetch) {
            placeholder.innerHTML = fallback;
            if (callback) callback();
            return;
        }

        fetch(url, { cache: 'no-store' })
            .then(response => response.ok ? response.text() : Promise.reject())
            .then(html => {
                placeholder.innerHTML = html && html.trim() ? html : fallback;
                if (callback) callback();
            })
            .catch(() => {
                placeholder.innerHTML = fallback;
                if (callback) callback();
            });
    }

    document.addEventListener('DOMContentLoaded', function () {
        loadPartial('site-header', 'header.html', headerFallback, bindHeaderNavigation);
        loadPartial('site-footer', 'footer.html', footerFallback);
    });
})();
