/* ========================================
   IT Cheatsheets - Logique commune des fiches (Dark Theme)
   ======================================== */

/**
 * Échappe les caractères HTML pour éviter les injections XSS
 */
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/**
 * Affiche les détails d'une commande dans la modale (Dark Theme)
 * @param {string} categoryId - ID de la catégorie
 * @param {number} cmdIndex - Index de la commande dans la catégorie
 */
function showDetails(categoryId, cmdIndex) {
    if (typeof cheatsheetData === 'undefined') {
        console.error('cheatsheetData non défini');
        return;
    }

    const category = cheatsheetData.find(c => c.id === categoryId);
    if (!category) return;

    const command = category.commands[cmdIndex];
    if (!command) return;

    const modal = document.getElementById('detailModal');
    const content = document.getElementById('modalContent');

    // Options/Paramètres
    let optionsHtml = '';
    if (command.details.options && command.details.options.length > 0) {
        optionsHtml = `
            <div class="mb-6">
                <h4 class="font-semibold text-slate-200 mb-3 flex items-center">
                    <i class="fas fa-sliders-h mr-2 text-sky-400"></i>Options / Paramètres
                </h4>
                <div class="bg-slate-800/50 rounded-lg overflow-hidden border border-white/5">
                    <table class="w-full text-sm">
                        <tbody>
                            ${command.details.options.map(opt => `
                                <tr class="border-b border-white/5 last:border-0">
                                    <td class="p-3 font-mono text-sky-400 whitespace-nowrap font-semibold">${escapeHtml(opt.flag)}</td>
                                    <td class="p-3 text-slate-400">${opt.desc}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    // Exemples
    let examplesHtml = '';
    if (command.details.examples && command.details.examples.length > 0) {
        examplesHtml = `
            <div class="mb-6">
                <h4 class="font-semibold text-slate-200 mb-3 flex items-center">
                    <i class="fas fa-code mr-2 text-sky-400"></i>Exemples pratiques
                </h4>
                <div class="space-y-2">
                    ${command.details.examples.map(ex => `
                        <div class="bg-slate-950 rounded-lg p-3 border border-white/5">
                            <code class="text-emerald-400 text-sm block mb-1">${escapeHtml(ex.code)}</code>
                            <span class="text-slate-500 text-xs">${ex.desc}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Conseils
    let tipsHtml = '';
    if (command.details.tips && command.details.tips.length > 0) {
        tipsHtml = `
            <div class="mb-4">
                <h4 class="font-semibold text-slate-200 mb-3 flex items-center">
                    <i class="fas fa-lightbulb mr-2 text-yellow-400"></i>Conseils
                </h4>
                <ul class="space-y-2">
                    ${command.details.tips.map(tip => `
                        <li class="flex items-start text-sm text-slate-400">
                            <span class="text-yellow-400 mr-2 mt-0.5">💡</span>
                            ${tip}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    // Avertissements
    let warningsHtml = '';
    if (command.details.warnings && command.details.warnings.length > 0) {
        warningsHtml = `
            <div class="mb-4 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h4 class="font-semibold text-red-400 mb-2 flex items-center">
                    <i class="fas fa-exclamation-triangle mr-2"></i>Attention
                </h4>
                <ul class="space-y-2">
                    ${command.details.warnings.map(warn => `
                        <li class="flex items-start text-sm text-red-300">
                            <span class="mr-2 mt-0.5">⚠️</span>
                            ${warn}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    // Notes
    let notesHtml = '';
    if (command.details.notes && command.details.notes.length > 0) {
        notesHtml = `
            <div class="mb-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <h4 class="font-semibold text-blue-400 mb-2 flex items-center">
                    <i class="fas fa-info-circle mr-2"></i>Note importante
                </h4>
                <ul class="space-y-2">
                    ${command.details.notes.map(note => `
                        <li class="flex items-start text-sm text-blue-300">
                            <span class="mr-2 mt-0.5">📝</span>
                            ${note}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    content.innerHTML = `
        <div class="sticky top-0 z-10 bg-slate-800 border-b border-white/10 p-4 flex items-center justify-between">
            <h3 class="font-bold text-lg text-slate-100 flex items-center">
                <i class="fas ${category.icon} mr-2 text-sky-400"></i>
                Détails de la commande
            </h3>
            <button type="button" onclick="closeModal()" class="btn-icon-dark w-10 h-10 rounded-full">
                <i class="fas fa-times text-lg"></i>
            </button>
        </div>

        <div class="p-6">
            <!-- Commande principale -->
            <div class="bg-slate-950 rounded-lg p-4 mb-6 border border-white/10">
                <code class="text-orange-400 text-lg font-mono">${escapeHtml(command.cmd)}</code>
                <p class="text-slate-500 text-sm mt-2">${command.desc}</p>
            </div>

            <!-- Explication -->
            <div class="mb-6">
                <h4 class="font-semibold text-slate-200 mb-3 flex items-center">
                    <i class="fas fa-book-open mr-2 text-sky-400"></i>Explication
                </h4>
                <p class="text-slate-400 leading-relaxed">${command.details.explanation}</p>
            </div>

            <!-- Syntaxe -->
            <div class="mb-6">
                <h4 class="font-semibold text-slate-200 mb-3 flex items-center">
                    <i class="fas fa-terminal mr-2 text-sky-400"></i>Syntaxe
                </h4>
                <div class="bg-slate-800/50 rounded-lg p-3 border border-white/5 syntax-content">
                    <div class="text-slate-300 text-sm">${command.details.syntax.includes('$') ? command.details.syntax : escapeHtml(command.details.syntax)}</div>
                </div>
            </div>

            ${optionsHtml}
            ${examplesHtml}
            ${notesHtml}
            ${tipsHtml}
            ${warningsHtml}

            <!-- Bouton copier -->
            <div class="mt-6 pt-4 border-t border-white/10">
                <button type="button" onclick="copyModalCommand(this, '${escapeHtml(command.cmd).replace(/'/g, "\\'")}')"
                        class="btn-primary-dark w-full py-3 flex items-center justify-center">
                    <i class="far fa-copy mr-2"></i>Copier la commande
                </button>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

/**
 * Ferme la modale
 */
function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    const modal = document.getElementById('detailModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

/**
 * Copie une commande dans le presse-papier
 */
function copyToClipboard(text, buttonElement) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    const decodedText = textarea.value;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(decodedText).then(() => {
            showCopyFeedback(buttonElement);
        }).catch(() => {
            fallbackCopy(decodedText, buttonElement);
        });
    } else {
        fallbackCopy(decodedText, buttonElement);
    }
}

/**
 * Méthode de copie de secours
 */
function fallbackCopy(text, buttonElement) {
    const tempInput = document.createElement("input");
    tempInput.style.position = 'absolute';
    tempInput.style.left = '-9999px';
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showCopyFeedback(buttonElement);
}

/**
 * Affiche le feedback visuel après copie
 */
function showCopyFeedback(buttonElement) {
    if (!buttonElement) return;
    buttonElement.innerHTML = '<i class="fas fa-check text-emerald-400"></i>';
    setTimeout(() => {
        buttonElement.innerHTML = '<i class="far fa-copy"></i>';
    }, 1000);
}

/**
 * Copie depuis le bouton de la modale
 */
function copyModalCommand(buttonElement, text) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    const decodedText = textarea.value;

    const showSuccess = () => {
        buttonElement.innerHTML = '<i class="fas fa-check mr-2"></i>Copié !';
        setTimeout(() => {
            buttonElement.innerHTML = '<i class="far fa-copy mr-2"></i>Copier la commande';
        }, 1500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(decodedText).then(showSuccess).catch(() => {
            fallbackCopy(decodedText, null);
            showSuccess();
        });
    } else {
        fallbackCopy(decodedText, null);
        showSuccess();
    }
}

/**
 * Rendu des catégories de commandes (Dark Theme)
 * @param {string} filter - Terme de recherche optionnel
 */
function renderCategories(filter = '') {
    if (typeof cheatsheetData === 'undefined') {
        console.error('cheatsheetData non défini');
        return;
    }

    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = '';

    cheatsheetData.forEach(category => {
        const filteredCommands = category.commands
            .map((c, idx) => ({ ...c, originalIndex: idx }))
            .filter(c =>
                c.cmd.toLowerCase().includes(filter.toLowerCase()) ||
                c.desc.toLowerCase().includes(filter.toLowerCase())
            );

        if (filteredCommands.length > 0) {
            const card = document.createElement('div');
            card.className = `glass-card rounded-xl overflow-hidden ${category.color} command-card`;

            let commandsHtml = filteredCommands.map(c => {
                const safeCmd = escapeHtml(c.cmd);
                return `
                <div class="command-row group flex items-center justify-between p-3 hover:bg-white/5 rounded-lg border-b border-white/5 last:border-0 cursor-pointer transition-all"
                     onclick="showDetails('${category.id}', ${c.originalIndex})">
                    <div class="flex-1 min-w-0 mr-4">
                        <code class="block text-sm font-mono text-slate-300 bg-slate-800/50 p-1.5 rounded px-2 break-all group-hover:text-sky-400 transition-colors border border-white/5">${safeCmd}</code>
                        <span class="text-xs text-slate-500 mt-1.5 block truncate">${c.desc}</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <span class="text-slate-600 group-hover:text-sky-400 transition">
                            <i class="fas fa-chevron-right text-xs"></i>
                        </span>
                        <button type="button" onclick="event.stopPropagation(); copyToClipboard(this.getAttribute('data-cmd'), this)" data-cmd="${safeCmd}" class="btn-icon-dark" title="Copier">
                            <i class="far fa-copy"></i>
                        </button>
                    </div>
                </div>
            ` }).join('');

            card.innerHTML = `
                <div class="p-4 bg-slate-800/50 border-b border-white/5 flex items-center justify-between">
                    <h2 class="font-semibold text-slate-200 flex items-center">
                        <i class="fas ${category.icon} w-6 text-center mr-2 text-sky-400"></i>
                        ${category.title}
                    </h2>
                </div>
                <div class="p-3">
                    ${commandsHtml}
                </div>
            `;
            grid.appendChild(card);
        }
    });

    // Message si aucun résultat
    if (grid.children.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12 text-slate-500 glass-card rounded-xl border border-dashed border-white/10">
                <i class="fas fa-search text-4xl mb-4 opacity-30"></i>
                <p>Aucune commande trouvée.</p>
                <button onclick="document.getElementById('searchInput').value=''; renderCategories();" class="btn-link-dark mt-4 text-sm">
                    <i class="fas fa-undo mr-1"></i>Réinitialiser
                </button>
            </div>
        `;
    }
}

// Écouteur global pour fermer la modale avec Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderCategories(e.target.value);
        });
    }
    renderCategories();
});
