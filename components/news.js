// ═══ components/news.js ═══
const News = {
  loaded: false,
  async load(){
    if(this.loaded)return;
    this.loaded=true;
    const grid=document.getElementById('news-grid');
    const items=await NewsAPI.getLatest();
    grid.innerHTML=items.map((n,i)=>`
      <div class="news-card" style="animation:fadeUp .4s ease ${i*60}ms both" onclick="window.open('${n.url}','_blank')">
        <div class="news-img-placeholder">${n.emoji}</div>
        <div class="news-content">
          <div class="news-source">${n.source}</div>
          <div class="news-title">${n.title}</div>
          <div class="news-meta"><span>${n.time}</span><span class="news-open">Ler →</span></div>
        </div>
      </div>
    `).join('');
  }
};

