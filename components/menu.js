// ═══ components/menu.js ═══
const Menu = {
  init(){
    const overlay  = document.getElementById('menu-overlay');
    const burger   = document.getElementById('hamburger');
    const closeBtn = document.getElementById('menu-close');
    const backdrop = document.getElementById('menu-backdrop');

    burger.addEventListener('click',  ()=>this.open());
    closeBtn.addEventListener('click',()=>this.close());
    backdrop.addEventListener('click',()=>this.close());

    document.querySelectorAll('.menu-item').forEach(el=>{
      el.addEventListener('click',()=>{
        document.querySelectorAll('.menu-item').forEach(i=>i.classList.remove('active'));
        el.classList.add('active');
        App.showSection(el.dataset.sec);
        this.close();
      });
    });
  },
  open(){
    document.getElementById('menu-overlay').classList.add('open');
    document.getElementById('hamburger').classList.add('open');
    document.body.style.overflow='hidden';
  },
  close(){
    document.getElementById('menu-overlay').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
    document.body.style.overflow='';
  }
};

