// ═══ components/ticker.js ═══
const Ticker = {
  async build(pairs){
    let tickers={btc:{price:67000,chg:1.2},eth:{price:3400,chg:0.8},sol:{price:168,chg:3.4}};
    try{ tickers=await Binance.getTickers(); }catch(e){}
    const majors=[
      {sym:'BTC',price:tickers.btc.price,chg:tickers.btc.chg},
      {sym:'ETH',price:tickers.eth.price,chg:tickers.eth.chg},
      {sym:'SOL',price:tickers.sol.price,chg:tickers.sol.chg},
    ];
    const memes=(pairs||[]).slice(0,10).map(p=>({
      sym:p.baseToken?.symbol||'?',
      price:parseFloat(p.priceUsd||0),
      chg:parseFloat(p.priceChange?.h24||0),
    }));
    const all=[...majors,...memes];
    const html=all.map(t=>`
      <span class="ticker-item">
        <span class="ti-sym">${t.sym}</span>
        <span class="ti-price">${fmt.price(t.price)}</span>
        <span class="ti-chg ${t.chg>=0?'up':'dn'}">${t.chg>=0?'+':''} ${(t.chg||0).toFixed(2)}%</span>
      </span>
    `).join('');
    document.getElementById('ticker-track').innerHTML=html+html;
  }
};

