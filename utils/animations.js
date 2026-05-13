// ═══ utils/animations.js ═══
function generateSparkline(up){
  const pts=[];
  let y=18;
  for(let i=0;i<12;i++){
    y+=((Math.random()-0.44)*(up?1.2:1))*5;
    y=Math.max(4,Math.min(32,y));
    pts.push({x:i*(120/11),y});
  }
  const line='M'+pts.map(p=>`${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' L ');
  const area=line+' L 120,36 L 0,36 Z';
  return{line,area};
}

function toast(msg,type='info'){
  const c=document.getElementById('toasts');
  const t=document.createElement('div');
  t.className='toast '+type;
  t.textContent=msg;
  c.appendChild(t);
  requestAnimationFrame(()=>requestAnimationFrame(()=>t.classList.add('show')));
  setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),400)},3000);
}

