// ===== Bhardwaj Innovation Center - Main JavaScript =====

(function () {
    'use strict';

    // Language preference key
    var LANG_KEY = 'bic_lang_preference';

    /**
     * Save language preference to localStorage
     */
    function saveLangPreference(lang) {
        try {
            localStorage.setItem(LANG_KEY, lang);
        } catch (e) {
            // localStorage not available, ignore
        }
    }

    /**
     * Get saved language preference
     */
    function getLangPreference() {
        try {
            return localStorage.getItem(LANG_KEY);
        } catch (e) {
            return null;
        }
    }

    /**
     * Redirect to preferred language on landing page
     */
    function checkLangRedirect() {
        // Only on the root landing page
        if (window.location.pathname.endsWith('/index.html') ||
            window.location.pathname.endsWith('/bic-website/')) {
            var saved = getLangPreference();
            if (saved === 'en' || saved === 'hi') {
                // Only auto-redirect if user has visited before
                var hasVisited = sessionStorage.getItem('bic_visited');
                if (hasVisited) {
                    window.location.href = saved + '/index.html';
                }
            }
        }
    }

    /**
     * Mark language choice and save preference
     */
    function handleLangSelection() {
        var langBtns = document.querySelectorAll('[data-lang]');
        langBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var lang = this.getAttribute('data-lang');
                saveLangPreference(lang);
                sessionStorage.setItem('bic_visited', 'true');
            });
        });
    }

    /**
     * Detect current language from URL path
     */
    function getCurrentLang() {
        var path = window.location.pathname;
        if (path.indexOf('/hi/') !== -1) return 'hi';
        if (path.indexOf('/en/') !== -1) return 'en';
        return null;
    }

    /**
     * Save current language as preference when browsing
     */
    function trackCurrentLang() {
        var lang = getCurrentLang();
        if (lang) {
            saveLangPreference(lang);
            sessionStorage.setItem('bic_visited', 'true');
        }
    }

    /**
     * Highlight active nav link
     */
    function highlightActiveNav() {
        var currentPage = window.location.pathname.split('/').pop() || 'index.html';
        var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(function (link) {
            var href = link.getAttribute('href');
            if (href && href.indexOf(currentPage) !== -1) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Smooth scroll for anchor links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', function () {
        handleLangSelection();
        trackCurrentLang();
        highlightActiveNav();
        initSmoothScroll();
    });

})();
