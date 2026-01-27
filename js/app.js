/* ========================================
   IT Cheatsheets - Page d'accueil (Dark Theme)
   ======================================== */

// Données des fiches disponibles
const appData = [
    // ==================== DATA SCIENCE ====================
    // Ordre : Pandas → Dataviz → ML → NLP → Vision → SQL → R → VectorDB
    {
        id: 'python-pandas',
        title: 'Python Pandas',
        desc: 'Manipulation de DataFrames, imports CSV et nettoyage.',
        type: 'Data Science',
        icon: 'fas fa-table',
        color: 'text-indigo-400',
        bgGlow: 'bg-indigo-500/20',
        link: 'sheets/pandas.html'
    },
    {
        id: 'matplotlib',
        title: 'Matplotlib & Seaborn',
        desc: 'Création de graphiques et visualisation de données.',
        type: 'Data Science',
        icon: 'fas fa-chart-line',
        color: 'text-teal-400',
        bgGlow: 'bg-teal-500/20',
        link: 'sheets/dataviz.html'
    },
    {
        id: 'scikit-learn',
        title: 'Machine Learning',
        desc: 'Scikit-Learn : fit, predict, preprocessing et métriques.',
        type: 'Data Science',
        icon: 'fas fa-brain',
        color: 'text-orange-400',
        bgGlow: 'bg-orange-500/20',
        link: 'sheets/sklearn.html'
    },
    {
        id: 'nlp-python',
        title: 'NLP Python',
        desc: 'Spacy, BERTopic, sentiment analysis, embeddings et topic modeling.',
        type: 'Data Science',
        icon: 'fas fa-language',
        color: 'text-violet-400',
        bgGlow: 'bg-violet-500/20',
        link: 'sheets/nlp.html'
    },
    {
        id: 'computer-vision',
        title: 'Computer Vision',
        desc: 'OpenCV, PIL, détection d\'objets et deep learning vision.',
        type: 'Data Science',
        icon: 'fas fa-eye',
        color: 'text-emerald-400',
        bgGlow: 'bg-emerald-500/20',
        link: 'sheets/vision.html'
    },
    {
        id: 'sql-basics',
        title: 'SQL Mémento',
        desc: 'Requêtes SELECT, JOINS, GROUP BY et agrégations.',
        type: 'Data Science',
        icon: 'fas fa-database',
        color: 'text-slate-300',
        bgGlow: 'bg-slate-500/20',
        link: 'sheets/sql.html'
    },
    {
        id: 'r-tidyverse',
        title: 'R Tidyverse',
        desc: 'Grammaire de manipulation des données avec dplyr & tidyr.',
        type: 'Data Science',
        icon: 'fab fa-r-project',
        color: 'text-blue-400',
        bgGlow: 'bg-blue-500/20',
        link: 'sheets/r-tidyverse.html'
    },
    {
        id: 'vectordb',
        title: 'Bases Vectorielles',
        desc: 'FAISS, ChromaDB, Pinecone et intégration LangChain pour RAG.',
        type: 'Data Science',
        icon: 'fas fa-project-diagram',
        color: 'text-fuchsia-400',
        bgGlow: 'bg-fuchsia-500/20',
        link: 'sheets/vectordb.html'
    },

    // ==================== WEB & DEVOPS ====================
    // Ordre par similarité et difficulté croissante
    {
        id: 'javascript',
        title: 'JavaScript',
        desc: 'Fondamentaux ES6+, DOM, async/await et manipulation de données.',
        type: 'Web & DevOps',
        icon: 'fab fa-js',
        color: 'text-yellow-400',
        bgGlow: 'bg-yellow-500/20',
        link: 'sheets/javascript.html'
    },
    {
        id: 'angular',
        title: 'Angular',
        desc: 'CLI, composants, services, routing et RxJS.',
        type: 'Web & DevOps',
        icon: 'fab fa-angular',
        color: 'text-red-400',
        bgGlow: 'bg-red-500/20',
        link: 'sheets/angular.html'
    },
    {
        id: 'react',
        title: 'React Hooks',
        desc: 'Aide-mémoire pour useState, useEffect et le cycle de vie.',
        type: 'Web & DevOps',
        icon: 'fab fa-react',
        color: 'text-cyan-400',
        bgGlow: 'bg-cyan-500/20',
        link: 'sheets/react.html'
    },
    {
        id: 'django',
        title: 'Django Framework',
        desc: 'Gestion de projet : startproject, migrations, runserver et shell.',
        type: 'Web & DevOps',
        icon: 'fab fa-python',
        color: 'text-emerald-400',
        bgGlow: 'bg-emerald-500/20',
        link: 'sheets/django.html'
    },
    {
        id: 'django-rest',
        title: 'Django REST API',
        desc: 'Création d\'APIs RESTful : serializers, viewsets, authentification.',
        type: 'Web & DevOps',
        icon: 'fas fa-plug',
        color: 'text-lime-400',
        bgGlow: 'bg-lime-500/20',
        link: 'sheets/django-rest.html'
    },
    {
        id: 'rust',
        title: 'Rust',
        desc: 'Syntaxe, ownership, borrowing, Cargo et gestion des erreurs.',
        type: 'Web & DevOps',
        icon: 'fab fa-rust',
        color: 'text-orange-400',
        bgGlow: 'bg-orange-500/20',
        link: 'sheets/rust.html'
    },
    {
        id: 'docker',
        title: 'Docker Mémo',
        desc: 'Gestion des conteneurs, images et Dockerfile de base.',
        type: 'Web & DevOps',
        icon: 'fab fa-docker',
        color: 'text-sky-400',
        bgGlow: 'bg-sky-500/20',
        link: 'sheets/docker.html'
    },
    {
        id: 'devsecops',
        title: 'DevSecOps',
        desc: 'Sécurité CI/CD, scanning de vulnérabilités, secrets et hardening.',
        type: 'Web & DevOps',
        icon: 'fas fa-shield-alt',
        color: 'text-emerald-400',
        bgGlow: 'bg-emerald-500/20',
        link: 'sheets/devsecops.html'
    },

    // ==================== OUTILS ====================
    {
        id: 'git-essentials',
        title: 'Git Essentiels',
        desc: 'Workflow standard : add, commit, push, merge et rebase.',
        type: 'Outils',
        icon: 'fab fa-git-alt',
        color: 'text-orange-400',
        bgGlow: 'bg-orange-500/20',
        link: 'sheets/git.html'
    },
    {
        id: 'terminal',
        title: 'Shell Linux',
        desc: 'Commandes Bash indispensables pour naviguer et gérer les fichiers.',
        type: 'Outils',
        icon: 'fas fa-terminal',
        color: 'text-gray-300',
        bgGlow: 'bg-gray-500/20',
        link: 'sheets/shell.html'
    },
    {
        id: 'windows-term',
        title: 'Windows Terminal',
        desc: 'PowerShell & CMD : Administration système et scripts d\'automatisation.',
        type: 'Outils',
        icon: 'fab fa-windows',
        color: 'text-blue-400',
        bgGlow: 'bg-blue-500/20',
        link: 'sheets/windows.html'
    },
    {
        id: 'regex',
        title: 'Regex (Expressions)',
        desc: 'Guide de survie pour les expressions régulières.',
        type: 'Outils',
        icon: 'fas fa-code',
        color: 'text-pink-400',
        bgGlow: 'bg-pink-500/20',
        link: 'sheets/regex.html'
    },
    {
        id: 'cron',
        title: 'Cron & Planification',
        desc: 'Syntaxe crontab, automatisation et planification de tâches.',
        type: 'Outils',
        icon: 'fas fa-clock',
        color: 'text-amber-400',
        bgGlow: 'bg-amber-500/20',
        link: 'sheets/cron.html'
    },
    {
        id: 'network',
        title: 'Réseau Linux',
        desc: 'Diagnostic réseau, configuration IP, DNS et firewall.',
        type: 'Outils',
        icon: 'fas fa-network-wired',
        color: 'text-blue-400',
        bgGlow: 'bg-blue-500/20',
        link: 'sheets/network.html'
    },
    {
        id: 'security',
        title: 'Sécurité Linux',
        desc: 'Permissions, SSH, chiffrement et hardening système.',
        type: 'Outils',
        icon: 'fas fa-lock',
        color: 'text-red-400',
        bgGlow: 'bg-red-500/20',
        link: 'sheets/security.html'
    },
    {
        id: 'server',
        title: 'Configuration Serveur',
        desc: 'Nginx, Apache, systemd, SSL/TLS et déploiement.',
        type: 'Outils',
        icon: 'fas fa-server',
        color: 'text-indigo-400',
        bgGlow: 'bg-indigo-500/20',
        link: 'sheets/server.html'
    }
];

// État de l'application (restauré depuis localStorage si disponible)
let currentFilter = localStorage.getItem('cheatsheetFilter') || 'all';

/**
 * Définit le filtre actif et met à jour l'UI
 */
function setFilter(category, value, btn) {
    currentFilter = value;

    // Sauvegarde dans localStorage pour persistance
    localStorage.setItem('cheatsheetFilter', value);

    // Mise à jour de l'UI des boutons (supporte les deux classes)
    const parent = btn.parentElement;
    parent.querySelectorAll('.filter-btn, .filter-btn-dark').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    render();
}

/**
 * Restaure l'état du filtre depuis localStorage
 */
function restoreFilterState() {
    const savedFilter = localStorage.getItem('cheatsheetFilter') || 'all';
    currentFilter = savedFilter;

    // Mettre à jour l'UI des boutons de filtre
    const filterButtons = document.querySelectorAll('.filter-btn, .filter-btn-dark');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        // Récupérer la valeur du filtre depuis l'attribut onclick
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr) {
            const match = onclickAttr.match(/setFilter\([^,]+,\s*'([^']+)'/);
            if (match && match[1] === savedFilter) {
                btn.classList.add('active');
            }
        }
    });
}

/**
 * Rendu de la grille de fiches (Dark Theme)
 */
function render() {
    const grid = document.getElementById('categoriesGrid');
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    grid.innerHTML = '';

    // Filtrage des données
    const filtered = appData.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm) ||
            item.desc.toLowerCase().includes(searchTerm);
        const matchesType = currentFilter === 'all' || item.type === currentFilter;

        return matchesSearch && matchesType;
    });

    // Génération des cartes (Dark Theme)
    filtered.forEach(item => {
        const card = document.createElement('a');
        card.href = item.link;
        card.className = `glass-card shine-effect card-glow rounded-xl p-5 flex flex-col h-full cursor-pointer group relative overflow-hidden`;

        card.innerHTML = `
            <div class="flex items-center gap-4 mb-3 relative z-10">
                <div class="w-11 h-11 rounded-lg ${item.bgGlow} flex items-center justify-center text-xl ${item.color} icon-glow transition-all duration-300">
                    <i class="${item.icon}"></i>
                </div>
                <div>
                    <h3 class="font-bold text-slate-100 group-hover:text-sky-400 transition-colors">${item.title}</h3>
                    <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">${item.type}</span>
                </div>
            </div>

            <p class="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-2 relative z-10">${item.desc}</p>

            <div class="mt-auto flex items-center text-sm font-semibold text-sky-400 transition-all relative z-10 group-hover:translate-x-1">
                <span>Voir la fiche</span>
                <i class="fas fa-arrow-right ml-2 text-xs transition-all duration-300 group-hover:ml-3"></i>
            </div>

            <!-- Subtle corner glow on hover -->
            <div class="absolute right-0 bottom-0 w-32 h-32 bg-sky-500/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>
        `;
        grid.appendChild(card);
    });

    // Message si aucun résultat (Dark Theme)
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-16 text-slate-500 glass-card rounded-xl border border-dashed border-white/10">
                <i class="fas fa-search text-4xl mb-4 opacity-30"></i>
                <p>Aucune fiche trouvée pour cette recherche.</p>
                <button onclick="document.getElementById('searchInput').value=''; render();" class="btn-link-dark mt-4 text-sm">
                    <i class="fas fa-undo mr-1"></i>Réinitialiser la recherche
                </button>
            </div>
        `;
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Restaurer l'état du filtre depuis localStorage
    restoreFilterState();

    // Écouteur de recherche
    document.getElementById('searchInput').addEventListener('input', render);

    // Rendu initial
    render();
});
