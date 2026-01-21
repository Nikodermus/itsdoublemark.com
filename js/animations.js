/**
 * ANIMATIONS - APEIRON
 * Animaciones al hacer scroll y efectos visuales
 */

(function () {
    'use strict';

    // ============================================
    // Intersection Observer for Scroll Animations
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animation class
    function initScrollAnimations() {
        const animatedElements =
            document.querySelectorAll('.animate-on-scroll');

        animatedElements.forEach((el) => {
            animationObserver.observe(el);
        });
    }

    // ============================================
    // Stagger Animation for Grid Items
    // ============================================
    function initStaggerAnimation() {
        const grids = document.querySelectorAll(
            '.features__grid, .characters__grid'
        );

        grids.forEach((grid) => {
            const items = grid.querySelectorAll('.animate-on-scroll');

            items.forEach((item, index) => {
                item.style.transitionDelay = `${index * 0.1}s`;
            });
        });
    }

    // ============================================
    // Counter Animation (if needed)
    // ============================================
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;

            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Observe counters
    function initCounters() {
        const counters = document.querySelectorAll('[data-counter]');

        if (counters.length === 0) return;

        const counterObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = parseInt(entry.target.dataset.counter);
                        animateCounter(entry.target, target);
                        counterObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        counters.forEach((counter) => {
            counterObserver.observe(counter);
        });
    }

    // ============================================
    // Image Lazy Loading Enhancement
    // ============================================
    function initLazyLoading() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');

        if ('loading' in HTMLImageElement.prototype) {
            // Browser supports native lazy loading
            lazyImages.forEach((img) => {
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });
            });
        } else {
            // Fallback for older browsers
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                        }
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            lazyImages.forEach((img) => {
                imageObserver.observe(img);
            });
        }
    }

    // ============================================
    // Reduced Motion Check
    // ============================================
    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    // ============================================
    // Initialize All Animations
    // ============================================
    function init() {
        // Skip animations if user prefers reduced motion
        if (prefersReducedMotion()) {
            document.querySelectorAll('.animate-on-scroll').forEach((el) => {
                el.classList.add('visible');
            });
            return;
        }

        initScrollAnimations();
        initStaggerAnimation();
        initCounters();
        initLazyLoading();

        // Add page loaded class for initial animations
        document.body.classList.add('page-loaded');
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

// Parallax Effect for Hero Section
(function () {
    const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (prefersReduced) return;

    const title = document.querySelector('.hero__title');

    const wrapper = document.querySelector('.hero-parallax');

    const shadow1 = document.querySelector('hero-parallax__shadow--1');
    const shadow2 = document.querySelector('hero-parallax__shadow--2');

    if (!finePointer) return;

    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    const getNumberVar = (el, name, fallback) => {
        const v = parseFloat(
            getComputedStyle(el).getPropertyValue(name).trim()
        );
        return Number.isFinite(v) ? v : fallback;
    };

    let strength = getNumberVar(
        wrapper,
        '--parallax-strength',
        Math.min(20, Math.max(10, Math.round(window.innerWidth / 80)))
    );
    strength = clamp(strength, 0, 200);

    let ease = getNumberVar(wrapper, '--parallax-ease', 0.12);
    ease = clamp(ease, 0.01, 0.5);

    let tx = 0,
        ty = 0;
    let targetX = 0,
        targetY = 0;

    let rafId = null;
    const animate = () => {
        tx += (targetX - tx) * ease;
        ty += (targetY - ty) * ease;
        wrapper.style.setProperty('--tx', tx.toFixed(2) + 'px');
        wrapper.style.setProperty('--ty', ty.toFixed(2) + 'px');
        rafId = requestAnimationFrame(animate);
    };

    const onMove = (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        targetX = -x * strength;
        targetY = -y * strength;
        if (rafId === null) rafId = requestAnimationFrame(animate);
    };

    const onLeave = () => {
        targetX = 0;
        targetY = 0;
    };

    window.addEventListener('mousemove', onMove, {
        passive: true,
    });
    window.addEventListener('mouseleave', onLeave, {
        passive: true,
    });
})();
