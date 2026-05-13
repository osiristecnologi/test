// ═══ services/newsapi.js ═══
// Static crypto news feed (replace with live API key when available)
const NewsAPI = {
  async getLatest(){
    return [
      {title:'Solana bate recorde de transações em 2025 com 5.000 TPS',source:'CoinDesk',time:'2h atrás',url:'https://coindesk.com',emoji:'📈'},
      {title:'Memecoins da Solana dominam volume em DEXs nesta semana',source:'The Block',time:'4h atrás',url:'https://theblock.co',emoji:'🚀'},
      {title:'Jupiter DEX ultrapassa $1B em volume diário de swaps',source:'CryptoSlate',time:'5h atrás',url:'https://cryptoslate.com',emoji:'🔄'},
      {title:'WIF e BONK lideram ganhos entre memecoins do mês',source:'CoinTelegraph',time:'7h atrás',url:'https://cointelegraph.com',emoji:'🐕'},
      {title:'Airdrops na Solana: projetos distribuem tokens para early users',source:'Decrypt',time:'8h atrás',url:'https://decrypt.co',emoji:'🎁'},
      {title:'Análise: Por que memecoins Solana superam EVM em 2025',source:'Messari',time:'12h atrás',url:'https://messari.io',emoji:'🧠'},
    ];
  }
};

