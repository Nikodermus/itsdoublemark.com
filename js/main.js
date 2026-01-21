/**
 * MAIN - APEIRON
 * Archivo principal y utilidades generales
 */

(function() {
    'use strict';

    // ============================================
    // Configuration
    // ============================================
    const CONFIG = {
        debounceDelay: 150,
        throttleDelay: 100
    };

    // ============================================
    // Utility Functions
    // ============================================
    
    /**
     * Debounce function
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in ms
     */
    function debounce(func, wait = CONFIG.debounceDelay) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Throttle function
     * @param {Function} func - Function to throttle
     * @param {number} limit - Limit in ms
     */
    function throttle(func, limit = CONFIG.throttleDelay) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    /**
     * Check if element is in viewport
     * @param {Element} el - DOM element
     * @returns {boolean}
     */
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    /**
     * Get scroll percentage
     * @returns {number}
     */
    function getScrollPercentage() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        return (scrollTop / docHeight) * 100;
    }

    // ============================================
    // Prevent FOUC (Flash of Unstyled Content)
    // ============================================
    function preventFOUC() {
        document.documentElement.classList.add('js-loaded');
    }

    // ============================================
    // Console Welcome Message
    // ============================================
    function consoleWelcome() {
        const styles = [
            'color: #f4c542',
            'background: #16161a',
            'font-size: 14px',
            'padding: 10px 20px',
            'font-family: monospace'
        ].join(';');

        console.log('%c⚡ APEIRON - Double Mark ⚡', styles);
        console.log('%cDesciende, mejora, muere.', 'color: #c44569; font-size: 12px;');
    }

    // ============================================
    // Handle Broken Images
    // ============================================
    function handleBrokenImages() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            img.addEventListener('error', function() {
                // Add class for styling fallback
                this.classList.add('img-error');
                
                // Optionally set a fallback image
                // this.src = 'images/placeholder.jpg';
            });
        });
    }

    // ============================================
    // Keyboard Navigation Enhancement
    // ============================================
    function enhanceKeyboardNav() {
        // Add visible focus indicator when using keyboard
        document.body.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.body.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-nav');
        });
    }

    // ============================================
    // External Links
    // ============================================
    function handleExternalLinks() {
        const links = document.querySelectorAll('a[href^="http"]');
        
        links.forEach(link => {
            // Check if link is external
            if (link.hostname !== window.location.hostname) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    // ============================================
    // Resize Handler
    // ============================================
    const handleResize = debounce(() => {
        // Update any size-dependent calculations
        document.documentElement.style.setProperty(
            '--vh', 
            `${window.innerHeight * 0.01}px`
        );
    });

    // ============================================
    // Touch Device Detection
    // ============================================
    function detectTouchDevice() {
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            document.body.classList.add('touch-device');
        } else {
            document.body.classList.add('no-touch');
        }
    }

    // ============================================
    // Performance: Visibility API
    // ============================================
    function handleVisibilityChange() {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                // Page is hidden - pause animations, etc.
                document.body.classList.add('page-hidden');
            } else {
                // Page is visible again
                document.body.classList.remove('page-hidden');
            }
        });
    }

    // ============================================
    // Error Handling
    // ============================================
    window.addEventListener('error', (e) => {
        // Log errors for debugging
        console.error('Error:', e.message);
    });

    // ============================================
    // Initialize
    // ============================================
    function init() {
        preventFOUC();
        consoleWelcome();
        handleBrokenImages();
        enhanceKeyboardNav();
        handleExternalLinks();
        detectTouchDevice();
        handleVisibilityChange();
        
        // Set initial viewport height
        handleResize();
        
        // Listen for resize
        window.addEventListener('resize', handleResize);
    }

    // ============================================
    // Export utilities to global scope (optional)
    // ============================================
    window.APEIRON = {
        debounce,
        throttle,
        isInViewport,
        getScrollPercentage
    };

    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
