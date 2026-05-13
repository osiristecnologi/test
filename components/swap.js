// ═══ components/swap.js ═══
const Swap = {
  init(){
    document.getElementById('swap-close')?.addEventListener('click', () => Jupiter.close());
    document.getElementById('swap-bg')?.addEventListener('click', () => Jupiter.close());
    document.getElementById('open-swap-btn')?.addEventListener('click', () => Jupiter.open());
    document.getElementById('nav-swap-btn')?.addEventListener('click', () => Jupiter.open());
    document.getElementById('modal-swap-btn')?.addEventListener('click', () => {
      closeModal(); 
      Jupiter.open(currentPair.baseToken.address);
    });
  }
};
