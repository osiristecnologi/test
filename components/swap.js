// ═══ components/swap.js ═══
const Swap = {
  init(){
    document.getElementById('swap-close').addEventListener('click',()=>Jupiter.close());
    document.getElementById('swap-backdrop').addEventListener('click',()=>Jupiter.close());
    document.getElementById('open-swap-btn').addEventListener('click',()=>Jupiter.open());
  }
};

