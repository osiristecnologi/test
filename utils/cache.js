// ═══ utils/cache.js ═══
const cache={
  set(k,v,ttl=300000){
    try{localStorage.setItem('chf_'+k,JSON.stringify({v,t:Date.now()+ttl}));}catch(e){}
  },
  get(k){
    try{
      const d=JSON.parse(localStorage.getItem('chf_'+k)||'null');
      if(d&&d.t>Date.now())return d.v;
    }catch(e){}
    return null;
  }
};

