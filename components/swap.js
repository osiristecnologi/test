// ═════════════════════════════
// components/swap.js
// ═════════════════════════════

const Swap = {

  modal: null,

  init() {

    this.modal = document.getElementById('swap-modal');

    const openBtn = document.getElementById('open-swap-btn');
    const modalSwapBtn = document.getElementById('modal-swap-btn');

    const closeBtn = document.getElementById('swap-close');
    const backdrop = document.getElementById('swap-backdrop');

    // Open swap
    if (openBtn) {
      openBtn.addEventListener('click', () => this.open());
    }

    if (modalSwapBtn) {
      modalSwapBtn.addEventListener('click', () => this.open());
    }

    // Close swap
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Backdrop
    if (backdrop) {
      backdrop.addEventListener('click', () => this.close());
    }

  },

  open() {

    if (!this.modal) return;

    this.modal.classList.add('open');

    document.body.style.overflow = 'hidden';

  },

  close() {

    if (!this.modal) return;

    this.modal.classList.remove('open');

    document.body.style.overflow = '';

  }

};

// Global
window.Swap = Swap;

