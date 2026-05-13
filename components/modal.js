// ═══ components/modal.js ═══
const Modal = {
  current: null,
  open(pair){
    this.current=pair;
    const $=id=>document.getElementById(id);
    $('m-logo').src=pair.info?.imageUrl||'';
    $('m-logo').onerror=function(){this.style.display='none'};
    $('m-name').textContent=pair.baseToken?.name||'—';
    $('m-sym').textContent=pair.baseToken?.symbol||'';
    $('m-price').textContent=fmt.price(parseFloat(pair.priceUsd||0));
    const chg=parseFloat(pair.priceChange?.h24||0);
    $('m-chg').textContent=fmt.pct(chg);
    $('m-chg').style.color=chg>=0?'var(--green)':'var(--red)';
    $('m-mcap').textContent=fmt.large(pair.marketCap);
    $('m-vol').textContent=fmt.large(pair.volume?.h24);
    $('m-liq').textContent=fmt.large(pair.liquidity?.usd);
    const addr=pair.baseToken?.address||pair.pairAddress||'';
    $('m-contract').textContent=addr?fmt.addr(addr):'—';
    $('m-contract').title=addr;
    $('m-chart').src=`https://dexscreener.com/solana/${pair.pairAddress}?embed=1&theme=light&info=0&trades=0`;
    const links=[];
    if(pair.info?.websites?.length)links.push({icon:'🌐',label:'Site',url:pair.info.websites[0].url});
    (pair.info?.socials||[]).forEach(s=>{
      if(s.type==='twitter')links.push({icon:'𝕏',label:'Twitter',url:s.url});
      if(s.type==='telegram')links.push({icon:'✈',label:'Telegram',url:s.url});
    });
    $('m-links').innerHTML=links.map(l=>`<a href="${l.url}" target="_blank" rel="noopener" class="link-pill">${l.icon} ${l.label}</a>`).join('');
    document.getElementById('token-modal').classList.add('open');
    document.body.style.overflow='hidden';
  },
  close(){
    document.getElementById('token-modal').classList.remove('open');
    document.body.style.overflow='';
    setTimeout(()=>{document.getElementById('m-chart').src='';},400);
  },
  init(){
    document.getElementById('modal-close').addEventListener('click',()=>this.close());
    document.getElementById('modal-backdrop').addEventListener('click',()=>this.close());
    document.getElementById('modal-swap-btn').addEventListener('click',()=>{
      this.close();
      Jupiter.open(this.current?.baseToken?.address);
    });
    document.getElementById('copy-contract-btn').addEventListener('click',()=>{
      const addr=this.current?.baseToken?.address||this.current?.pairAddress||'';
      if(!addr)return;
      navigator.clipboard.writeText(addr)
        .then(()=>toast('Endereço copiado!','success'))
        .catch(()=>{
          const ta=document.createElement('textarea');
          ta.value=addr; document.body.appendChild(ta); ta.select();
          document.execCommand('copy'); ta.remove();
          toast('Endereço copiado!','success');
        });
    });
  }
};

