/**
 * Dark Theme Template - JavaScript Utilities
 * ==========================================
 */

// ========================================
// Filter Buttons Handler
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initFilterButtons();
    initSearchInput();
    initModal();
});

/**
 * Initialize filter button toggle behavior
 */
function initFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active from all
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active to clicked
            button.classList.add('active');
            
            // Trigger custom event for filtering
            const filterValue = button.textContent.trim();
            document.dispatchEvent(new CustomEvent('filterChange', { 
                detail: { filter: filterValue } 
            }));
        });
    });
}

/**
 * Initialize search input with debounce
 */
function initSearchInput() {
    const searchInput = document.querySelector('.input[type="text"]');
    if (!searchInput) return;
    
    let debounceTimer;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase().trim();
            document.dispatchEvent(new CustomEvent('searchChange', { 
                detail: { term: searchTerm } 
            }));
        }, 300);
    });
}

/**
 * Modal utilities
 */
function initModal() {
    // Close modal on overlay click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

/**
 * Open a modal with content
 * @param {string} content - HTML content for the modal
 */
function openModal(content) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
        <div class="modal-content">
            <button class="btn-icon" style="position: absolute; top: 1rem; right: 1rem;" onclick="closeModal()">
                <i class="fas fa-times"></i>
            </button>
            ${content}
        </div>
    `;
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
}

/**
 * Close any open modal
 */
function closeModal() {
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.remove();
        document.body.style.overflow = '';
    }
}

// ========================================
// Animation Utilities
// ========================================

/**
 * Fade in elements on scroll
 */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// ========================================
// Copy to Clipboard
// ========================================

/**
 * Copy text to clipboard with feedback
 * @param {string} text - Text to copy
 * @param {HTMLElement} button - Button element to show feedback on
 */
async function copyToClipboard(text, button) {
    try {
        await navigator.clipboard.writeText(text);
        
        // Store original content
        const originalHTML = button.innerHTML;
        
        // Show success feedback
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.style.color = 'var(--color-success)';
        
        // Reset after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.color = '';
        }, 2000);
        
    } catch (err) {
        console.error('Failed to copy:', err);
    }
}

// ========================================
// Theme Toggle (Optional)
// ========================================

/**
 * Toggle between dark and light theme
 * Note: This template is optimized for dark theme
 */
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isDark = !document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

/**
 * Initialize theme from localStorage
 */
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
}

// Export for ES modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        openModal,
        closeModal,
        copyToClipboard,
        toggleTheme
    };
}
