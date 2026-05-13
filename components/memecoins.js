// ═══ components/memecoins.js ═══
const LOGO_COLORS=['#f7c600','#1a6bff','#16c784','#ea3943','#9945ff','#ff6b2b','#00d4ff','#ff2e7e','#7cff6b','#ffb800','#4B0082','#00C853'];

const Memecoins = {
  allCoins: [],

  getMockData(){
    const names=[
      {n:'Bonk',s:'BONK',p:0.0000248,chg:12.4,mc:1580000000,vol:89000000,liq:12000000},
      {n:'dogwifhat',s:'WIF',p:1.42,chg:-3.2,mc:1420000000,vol:134000000,liq:18000000},
      {n:'Popcat',s:'POPCAT',p:0.482,chg:8.1,mc:480000000,vol:42000000,liq:9000000},
      {n:'MEW',s:'MEW',p:0.00621,chg:22.3,mc:620000000,vol:51000000,liq:7500000},
      {n:'Fwog',s:'FWOG',p:0.083,chg:-1.4,mc:83000000,vol:12000000,liq:4000000},
      {n:'Retardio',s:'RETARDIO',p:0.0142,chg:5.7,mc:14200000,vol:3200000,liq:2100000},
      {n:'Book of Meme',s:'BOME',p:0.00902,chg:-0.8,mc:380000000,vol:28000000,liq:8000000},
      {n:'Silly Dragon',s:'SILLY',p:0.00421,chg:14.2,mc:42100000,vol:9800000,liq:1900000},
      {n:'Catwifhat',s:'CWIF',p:0.00038,chg:31.0,mc:3800000,vol:1200000,liq:450000},
      {n:'Peng',s:'PENG',p:0.00287,chg:-5.1,mc:2870000,vol:890000,liq:320000},
      {n:'Harambe',s:'HARAMBE',p:0.00193,chg:9.8,mc:1930000,vol:670000,liq:280000},
      {n:'Nyan Cat',s:'NYAN',p:0.00044,chg:2.3,mc:4400000,vol:1100000,liq:550000},
      {n:'Moo Deng',s:'MOODENG',p:0.00512,chg:47.1,mc:51200000,vol:18900000,liq:3200000},
      {n:'Goat',s:'GOAT',p:0.312,chg:-2.9,mc:312000000,vol:22000000,liq:6700000},
      {n:'Act I',s:'ACT',p:0.0078,chg:6.2,mc:7800000,vol:2100000,liq:780000},
      {n:'Zerebro',s:'ZEREBRO',p:0.0234,chg:13.5,mc:23400000,vol:7800000,liq:1900000},
      {n:'AI16Z',s:'AI16Z',p:0.421,chg:-1.2,mc:421000000,vol:31000000,liq:8900000},
      {n:'Pnut',s:'PNUT',p:0.182,chg:4.8,mc:182000000,vol:15400000,liq:4200000},
    ];
    return names.map((m,i)=>({
      pairAddress:'mock_'+i,
      baseToken:{name:m.n,symbol:m.s,address:'So1111111111111111111111111111111111111111'+i},
      priceUsd:String(m.p),
      priceChange:{h24:m.chg},
      marketCap:m.mc,
      volume:{h24:m.vol},
      liquidity:{usd:m.liq},
      chainId:'solana',
      info:{},
    }));
  },

  async load(){
    const grid = document.getElementById('coin-grid');
    grid.innerHTML = Array(18).fill('<div class="skel-card skeleton"></div>').join('');
    let pairs = await DexScreener.getTopSolana();
    if(!pairs||pairs.length===0){
      pairs = this.getMockData();
      toast('Usando dados de exemplo (API offline)','error');
    }
    this.allCoins = pairs;
    this.render(pairs);
    Ticker.build(pairs);
  },

  render(pairs){
    const grid = document.getElementById('coin-grid');
    grid.innerHTML='';
    pairs.slice(0,18).forEach((p,i)=>{
      const price=parseFloat(p.priceUsd||0);
      const chg=parseFloat(p.priceChange?.h24||0);
      const up=chg>=0;
      const col=LOGO_COLORS[i%LOGO_COLORS.length];
      const hasImg=p.info?.imageUrl;
      const spark=generateSparkline(up);
      const card=document.createElement('div');
      card.className='coin-card';
      card.style.animation=`fadeUp .4s ease ${i*35}ms both`;
      card.innerHTML=`
        <div class="card-header">
          ${hasImg?`<img class="card-logo" src="${p.info.imageUrl}" alt="${p.baseToken?.symbol}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`:'' }
          <div class="card-logo-fb" style="width:36px;height:36px;border-radius:50%;background:${col};display:${hasImg?'none':'flex'};align-items:center;justify-content:center;font-weight:700;font-size:.8rem;color:#fff;flex-shrink:0">${(p.baseToken?.name||'?').slice(0,2).toUpperCase()}</div>
          <div class="card-id" style="overflow:hidden;flex:1">
            <div class="c-name">${p.baseToken?.name||'—'}</div>
            <div class="c-sym">${p.baseToken?.symbol||'—'}</div>
          </div>
          <div class="card-live"><span class="dot"></span>LIVE</div>
        </div>
        <div class="card-body">
          <div class="card-price">${fmt.price(price)}</div>
          <span class="card-chg ${up?'up':'dn'}">${up?'▲':'▼'} ${fmt.pct(chg)}</span>
          <div class="card-meta">
            <div class="card-meta-item"><div class="cmi-label">Market Cap</div><div class="cmi-val">${fmt.large(p.marketCap)}</div></div>
            <div class="card-meta-item"><div class="cmi-label">Liquidez</div><div class="cmi-val">${fmt.large(p.liquidity?.usd)}</div></div>
            <div class="card-meta-item"><div class="cmi-label">Vol 24h</div><div class="cmi-val">${fmt.large(p.volume?.h24)}</div></div>
            <div class="card-meta-item"><div class="cmi-label">Rede</div><div class="cmi-val">SOL</div></div>
          </div>
        </div>
        <div class="card-mini-chart">
          <svg class="mini-sparkline" viewBox="0 0 120 36" preserveAspectRatio="none">
            <defs><linearGradient id="sg${i}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${up?'#16c784':'#ea3943'}" stop-opacity=".3"/>
              <stop offset="100%" stop-color="${up?'#16c784':'#ea3943'}" stop-opacity="0"/>
            </linearGradient></defs>
            <path d="${spark.area}" fill="url(#sg${i})"/>
            <path d="${spark.line}" fill="none" stroke="${up?'#16c784':'#ea3943'}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>`;
      card.addEventListener('click',()=>Modal.open(p));
      grid.appendChild(card);
    });
  }
};

