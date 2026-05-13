// ═══ services/jupiter.js ═══
const JUPITER_REF = 'Bv9FatggxzDiWqYNEL9szrDvtmhXcx2xPeUKptGiWmie';

const Jupiter = {
  getSwapUrl(tokenAddress){
    const sym = tokenAddress || 'USDC';
    return `https://jup.ag/swap/SOL-${sym}?referral=${JUPITER_REF}`;
  },
  open(tokenAddress){
    const iframe = document.getElementById('jupiter-iframe');
    iframe.src = this.getSwapUrl(tokenAddress);
    const modal = document.getElementById('swap-modal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  },
  close(){
    document.getElementById('swap-modal').classList.remove('open');
    document.body.style.overflow = '';
  }
};
So olha para de fica vomitando codigo aqui pelo amor de Deus
