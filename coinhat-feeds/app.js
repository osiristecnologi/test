// ===============================
// Coinhat-Feeds — app.js
// ===============================

// Logo global
const LOGO = window.COINHAT_LOGO || 'assets/logo.jpg';

// Helper
const $ = (id) => document.getElementById(id);

// ===============================
// Apply Logo
// ===============================
function applyLogos() {
  document
    .querySelectorAll('.brand-logo, .menu-brand-logo')
    .forEach((el) => {
      el.src = LOGO;
    });
}

// ===============================
// App Router
// ===============================
const App = {

  currentSection: 'home',

  showSection(sectionId) {

    this.currentSection = sectionId;

    // Remove active
    document.querySelectorAll('.section').forEach((section) => {
      section.classList.remove('active');
    });

    // Add active
    const target = $('sec-' + sectionId);

    if (target) {
      target.classList.add('active');
    }

    // Lazy loading sections
    try {

      switch (sectionId) {

        case 'news':
          if (typeof News !== 'undefined') {
            News.load();
          }
          break;

        case 'airdrops':
          if (typeof Sections !== 'undefined') {
            Sections.loadAirdrops();
          }
          break;

        case 'alpha':
          if (typeof Sections !== 'undefined') {
            Sections.loadAlpha();
          }
          break;

        case 'partners':
          if (typeof Sections !== 'undefined') {
            Sections.loadPartners();
          }
          break;

      }

    } catch (err) {
      console.error('Section error:', err);
    }

  }

};

// ===============================
// Initialize Modules
// ===============================
function initModules() {

  try {

    if (typeof Menu !== 'undefined') {
      Menu.init();
    }

    if (typeof Search !== 'undefined') {
      Search.init();
    }

    if (typeof Modal !== 'undefined') {
      Modal.init();
    }

    if (typeof Swap !== 'undefined') {
      Swap.init();
    }

    if (typeof Memecoins !== 'undefined') {
      Memecoins.load();
    }

  } catch (err) {
    console.error('Init error:', err);
  }

}

// ===============================
// Auto Refresh
// ===============================
function startAutoRefresh() {

  setInterval(() => {

    try {

      if (typeof cache !== 'undefined') {
        cache.set('memecoins', null, 0);
      }

      if (typeof Memecoins !== 'undefined') {
        Memecoins.load();
      }

    } catch (err) {
      console.error('Refresh error:', err);
    }

  }, 60000);

}

// ===============================
// Keyboard Shortcuts
// ===============================
function bindKeyboardEvents() {

  document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {

      try {

        if (typeof Modal !== 'undefined') {
          Modal.close();
        }

        if (typeof Jupiter !== 'undefined') {
          Jupiter.close();
        }

        if (typeof Menu !== 'undefined') {
          Menu.close();
        }

      } catch (err) {
        console.error('Close error:', err);
      }

    }

  });

}

// ===============================
// App Start
// ===============================
window.addEventListener('DOMContentLoaded', () => {

  applyLogos();

  initModules();

  startAutoRefresh();

  bindKeyboardEvents();

  console.log('🚀 Coinhat-Feeds initialized');

});
