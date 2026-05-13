// ═══ services/binance.js ═══
const Binance = {
  async getTickers(){
    try{
      const r=await fetch('https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT","SOLUSDT"]');
      const d=await r.json();
      const result={};
      d.forEach(t=>{
        if(t.symbol==='BTCUSDT')result.btc={price:parseFloat(t.lastPrice),chg:parseFloat(t.priceChangePercent)};
        if(t.symbol==='ETHUSDT')result.eth={price:parseFloat(t.lastPrice),chg:parseFloat(t.priceChangePercent)};
        if(t.symbol==='SOLUSDT')result.sol={price:parseFloat(t.lastPrice),chg:parseFloat(t.priceChangePercent)};
      });
      return result;
    }catch(e){
      return{
        btc:{price:67000,chg:1.2},
        eth:{price:3400,chg:0.8},
        sol:{price:168,chg:3.4}
      };
    }
  }
};

