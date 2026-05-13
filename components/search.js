// ═══ components/search.js ═══
const Search = {
  timer: null,
  init(){
    const wrap  = document.getElementById('search-wrap');
    const input = document.getElementById('search-input');
    const drop  = document.getElementById('search-drop');
    const btn   = document.getElementById('search-toggle');

    btn.addEventListener('click',()=>{
      if(wrap.classList.toggle('open')) input.focus();
      else{ input.value=''; drop.classList.remove('vis'); }
    });

    input.addEventListener('input',()=>{
      clearTimeout(this.timer);
      const q=input.value.trim();
      if(q.length<2){drop.classList.remove('vis');return;}
      this.timer=setTimeout(()=>this.doSearch(q),400);
    });

    document.addEventListener('click',e=>{
      if(!wrap.contains(e.target)){
        drop.classList.remove('vis');
        wrap.classList.remove('open');
      }
    });
  },
  async doSearch(q){
    const pairs = await DexScreener.search(q);
    this.render(pairs);
  },
  render(pairs){
    const drop = document.getElementById('search-drop');
    if(!pairs.length){
      drop.innerHTML='<div class="s-item" style="color:var(--t3)">Nenhum resultado</div>';
      drop.classList.add('vis');
      return;
    }
    drop.innerHTML=pairs.map(p=>`
      <div class="s-item" data-pair='${JSON.stringify(p).replace(/'/g,"&apos;")}'>
        <img src="${p.info?.imageUrl||''}" alt="" onerror="this.style.background='var(--yellow-lt)'"/>
        <div>
          <div class="s-name">${p.baseToken?.name||'—'}</div>
          <div class="s-sym">${p.baseToken?.symbol||''}</div>
        </div>
        <span class="s-price">${fmt.price(parseFloat(p.priceUsd||0))}</span>
      </div>
    `).join('');
    drop.classList.add('vis');
    drop.querySelectorAll('.s-item').forEach(el=>{
      el.addEventListener('click',()=>{
        try{ Modal.open(JSON.parse(el.dataset.pair.replace(/&apos;/g,"'")));}catch(e){}
        drop.classList.remove('vis');
        document.getElementById('search-wrap').classList.remove('open');
        document.getElementById('search-input').value='';
      });
    });
  }
};

