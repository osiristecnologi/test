// ═══ services/dexscreener.js ═══
const DexScreener = {
  async getTopSolana(){
    const cached=cache.get('memecoins');
    if(cached)return cached;
    try{
      const res=await fetch('https://api.dexscreener.com/token-boosts/top/v1');
      const boostData=await res.json();
      const solTokens=boostData.filter(t=>t.chainId==='solana').slice(0,18);
      const addr=solTokens.map(t=>t.tokenAddress).join(',');
      const r2=await fetch(`https://api.dexscreener.com/latest/dex/tokens/${addr}`);
      const d2=await r2.json();
      const seen=new Map();
      (d2.pairs||[]).filter(p=>p.chainId==='solana').forEach(p=>{
        const k=p.baseToken?.address;
        if(!k)return;
        const cur=seen.get(k);
        const liq=parseFloat(p.liquidity?.usd||0);
        if(!cur||liq>parseFloat(cur.liquidity?.usd||0))seen.set(k,p);
      });
      let pairs=[...seen.values()].slice(0,18);
      if(pairs.length<18){
        const r3=await fetch('https://api.dexscreener.com/latest/dex/search?q=solana+meme');
        const d3=await r3.json();
        const extra=(d3.pairs||[]).filter(p=>p.chainId==='solana');
        const existing=new Set(pairs.map(p=>p.baseToken?.address));
        for(const p of extra){
          if(!existing.has(p.baseToken?.address)){pairs.push(p);existing.add(p.baseToken?.address);}
          if(pairs.length>=18)break;
        }
      }
      cache.set('memecoins',pairs,30000);
      return pairs;
    }catch(e){
      console.error('DexScreener error:',e);
      return null;
    }
  },
  async search(q){
    const cached=cache.get('search_'+q);
    if(cached)return cached;
    try{
      const r=await fetch(`https://api.dexscreener.com/latest/dex/search?q=${encodeURIComponent(q)}`);
      const d=await r.json();
      const pairs=(d.pairs||[]).filter(p=>p.chainId==='solana').slice(0,6);
      cache.set('search_'+q,pairs,60000);
      return pairs;
    }catch(e){return[];}
  }
};

