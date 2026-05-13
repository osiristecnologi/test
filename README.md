# 🐸 Coinhat-Feeds

> Mini DEX/Agregador de Memecoins Solana — Web3 Dashboard

## 📁 Estrutura

```
coinhat-feeds/
├── index.html              ← Entrada principal
├── style.css               ← Estilos completos (glassmorphism, mobile-first)
├── app.js                  ← Orquestrador principal
│
├── assets/
│   └── logo.jpg            ← Logo oficial (sapo com chapéu)
│
├── utils/
│   ├── cache.js            ← localStorage cache com TTL
│   ├── format.js           ← Formatadores (preço, market cap, %)
│   └── animations.js       ← Sparklines SVG + toast notifications
│
├── services/
│   ├── dexscreener.js      ← API DexScreener (pares Solana, busca)
│   ├── binance.js          ← API Binance (BTC/ETH/SOL ticker)
│   ├── jupiter.js          ← Jupiter Swap (com referral integrado)
│   └── newsapi.js          ← Feed de notícias cripto
│
└── components/
    ├── menu.js             ← Menu overlay lateral
    ├── search.js           ← Busca dinâmica de tokens
    ├── ticker.js           ← Ticker horizontal em tempo real
    ├── memecoins.js        ← Grid de 18 memecoins + cards
    ├── modal.js            ← Modal de token (gráfico, stats, swap)
    ├── swap.js             ← Integração Jupiter Swap
    ├── news.js             ← Seção notícias
    └── sections.js         ← Airdrops, Alpha, Parceiros
```

## 🚀 Deploy

### Vercel (recomendado)
```bash
npm i -g vercel
vercel --prod
```

### Render
- New Static Site → conectar repositório → Publish Directory: `.`

### Local
```bash
# Qualquer servidor HTTP estático
npx serve .
# ou
python3 -m http.server 3000
```

> ⚠️ Não abrir direto como `file://` — as APIs precisam de servidor HTTP.

## 💎 Referral Jupiter

Código configurado: `Bv9FatggxzDiWqYNEL9szrDvtmhXcx2xPeUKptGiWmie`

Todos os swaps gerados pelo app creditam comissão automaticamente.

## 🔑 APIs Utilizadas

| API | Endpoint | Chave necessária |
|-----|----------|-----------------|
| DexScreener | `api.dexscreener.com` | ❌ Gratuita |
| Binance | `api.binance.com` | ❌ Gratuita |
| Jupiter | `jup.ag` (iframe embed) | ❌ Gratuita |

## 🎨 Paleta

| Variável | Cor |
|----------|-----|
| `--yellow` | `#f7c600` |
| `--blue` | `#1a6bff` |
| `--green` | `#16c784` |
| `--red` | `#ea3943` |

---
© 2025 Coinhat-Feeds • Not financial advice
