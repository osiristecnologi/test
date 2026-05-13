// ═══ components/swap.js ═══

const Swap = {
  modal: null,

  init() {
    this.modal = document.getElementById('swap-modal');

    document
      .getElementById('open-swap-btn')
      ?.addEventListener('click', () => this.open());

    document
      .getElementById('swap-close')
      ?.addEventListener('click', () => this.close());

    document
      .getElementById('swap-backdrop')
      ?.addEventListener('click', () => this.close());
  },

  open() {
    this.modal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  close() {
    this.modal?.classList.remove('open');
    document.body.style.overflow = '';
  }
};
