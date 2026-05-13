// ═══ app.js ═══
// Set logo everywhere
const LOGO = window.COINHAT_LOGO;
document.querySelectorAll('.brand-logo,.menu-brand-logo').forEach(el=>el.src=LOGO);

// Shorthand
const $ = id => document.getElementById(id);

// ── Section Router ──
const App = {
  showSection(id){
    document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
    $('sec-'+id)?.classList.add('active');
    if(id==='news')     News.load();
    if(id==='airdrops') Sections.loadAirdrops();
    if(id==='alpha')    Sections.loadAlpha();
    if(id==='partners') Sections.loadPartners();
  }
};

// ── Init all modules ──
Menu.init();
Search.init();
Modal.init();
Swap.init();

// ── Load home data ──
Memecoins.load();

// ── Auto refresh every 60s ──
setInterval(()=>{
  cache.set('memecoins',null,0);
  Memecoins.load();
}, 60000);

// ── ESC to close any modal ──
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    Modal.close();
    Jupiter.close();
    Menu.close();
  }
});

