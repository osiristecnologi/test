// ═══ utils/format.js ═══
const fmt = {
  price(n){
    if(n===undefined||n===null)return'—';
    if(n<0.0001)return'$'+n.toExponential(2);
    if(n<1)return'$'+n.toFixed(6);
    if(n<1000)return'$'+n.toFixed(4);
    return'$'+n.toLocaleString('pt-BR',{maximumFractionDigits:2});
  },
  large(n){
    if(!n)return'—';
    if(n>=1e9)return'$'+(n/1e9).toFixed(2)+'B';
    if(n>=1e6)return'$'+(n/1e6).toFixed(2)+'M';
    if(n>=1e3)return'$'+(n/1e3).toFixed(2)+'K';
    return'$'+n.toFixed(2);
  },
  pct(n){
    if(n===undefined||n===null)return'—';
    const s=n>0?'+':'';
    return s+n.toFixed(2)+'%';
  },
  addr(a){
    if(!a)return'—';
    return a.slice(0,6)+'…'+a.slice(-5);
  },
  time(ts){
    if(!ts)return'';
    const d=new Date(ts*1000);
    const diff=Math.floor((Date.now()-d)/1000);
    if(diff<60)return diff+'s atrás';
    if(diff<3600)return Math.floor(diff/60)+'min atrás';
    if(diff<86400)return Math.floor(diff/3600)+'h atrás';
    return Math.floor(diff/86400)+'d atrás';
  }
};

