// ═══ components/sections.js ═══
const Sections = {
  airdropsLoaded:false, alphaLoaded:false, partnersLoaded:false,

  loadAirdrops(){
    if(this.airdropsLoaded)return; this.airdropsLoaded=true;
    const el=document.getElementById('airdrops-content');
    const items=[
      {icon:'🚀',title:'Jupiter JUP — Ongoing Rewards',desc:'Participe do programa de pontos Jupiter para ganhar JUP. Conecte sua carteira e faça swaps regularmente.',btn:'Ver Detalhes',url:'https://jup.ag/?referral=Bv9FatggxzDiWqYNEL9szrDvtmhXcx2xPeUKptGiWmie'},
      {icon:'⭐',title:'Marginfi Season 3',desc:'Deposite ativos no Marginfi para acumular pontos e se qualificar para o próximo airdrop.',btn:'Participar',url:'https://app.marginfi.com'},
      {icon:'💧',title:'Drift Protocol Airdrop',desc:'Use a plataforma de derivativos Drift para se qualificar para distribuições futuras de DRIFT.',btn:'Acessar',url:'https://drift.trade'},
      {icon:'🌊',title:'Kamino Finance Points',desc:'Forneça liquidez na Kamino e ganhe pontos convertíveis em tokens KMNO.',btn:'Depositar',url:'https://kamino.finance'},
    ];
    el.innerHTML=items.map((a,i)=>`
      <div class="content-card" style="animation:fadeUp .4s ease ${i*60}ms both">
        <div class="cc-icon">${a.icon}</div>
        <div class="cc-title">${a.title}</div>
        <div class="cc-desc">${a.desc}</div>
        <button class="cc-btn" onclick="window.open('${a.url}','_blank')">${a.btn} →</button>
      </div>
    `).join('');
  },

  loadAlpha(){
    if(this.alphaLoaded)return; this.alphaLoaded=true;
    const el=document.getElementById('alpha-content');
    const items=[
      {tag:'🔥 HOT CALL',text:'MOODENG/SOL mostrando breakout no gráfico 4h. Volume 3x acima da média. Watch $0.0065.',time:'há 15 min'},
      {tag:'📊 ANÁLISE',text:'Dominância de BTC caindo abaixo de 53% — sinal histórico de alt season. Solana lidera rotação.',time:'há 42 min'},
      {tag:'👀 DEX ALERT',text:'Novo par na Raydium com $2M de liquidez em 30min. Contrato verificado. DYOR.',time:'há 1h'},
      {tag:'🚀 LAUNCH',text:'Pump.fun: token de AI com 500 holders em 10min. Market cap ainda abaixo de $500k.',time:'há 2h'},
      {tag:'💡 INSIGHT',text:'Wallets de baleias acumulando WIF nos últimos 3 dias. Total: +8.2M tokens. Confluência bullish.',time:'há 3h'},
    ];
    el.innerHTML=items.map((a,i)=>`
      <div class="alpha-item" style="animation:fadeUp .4s ease ${i*55}ms both">
        <div class="alpha-tag">${a.tag}</div>
        <div class="alpha-text">${a.text}</div>
        <div class="alpha-time">${a.time}</div>
      </div>
    `).join('');
  },

  loadPartners(){
    if(this.partnersLoaded)return; this.partnersLoaded=true;
    const el=document.getElementById('partners-grid');
    const items=[
      {icon:'🪐',name:'Jupiter',desc:'Melhor agregador de DEX na Solana. Swap com os melhores preços.',tag:'DEX Aggregator',url:'https://jup.ag/?referral=Bv9FatggxzDiWqYNEL9szrDvtmhXcx2xPeUKptGiWmie'},
      {icon:'📡',name:'DexScreener',desc:'Rastreamento em tempo real de pares em todas as chains.',tag:'Analytics',url:'https://dexscreener.com'},
      {icon:'👻',name:'Phantom',desc:'Carteira não-custodial líder no ecossistema Solana.',tag:'Wallet',url:'https://phantom.app'},
      {icon:'⚡',name:'Helius',desc:'Infraestrutura RPC de alta performance para Solana.',tag:'Infrastructure',url:'https://helius.dev'},
      {icon:'🦅',name:'Raydium',desc:'AMM nativa da Solana com pools de liquidez profunda.',tag:'AMM / DEX',url:'https://raydium.io'},
      {icon:'🌊',name:'Orca',desc:'Swap intuitivo com Whirlpools de liquidez concentrada.',tag:'DEX',url:'https://orca.so'},
    ];
    el.innerHTML=items.map((p,i)=>`
      <div class="partner-card" style="animation:fadeUp .4s ease ${i*55}ms both;cursor:pointer" onclick="window.open('${p.url}','_blank')">
        <div class="pc-icon">${p.icon}</div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-desc">${p.desc}</div>
        <span class="pc-tag">${p.tag}</span>
      </div>
    `).join('');
  }
};

