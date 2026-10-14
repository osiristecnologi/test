
const CACHE_NAME = 'feeds-pwa-v2';
const urlsToCache = [
  '/',
  '/coinhatfeeds_PWA_FINAL.html',
  '/manifest.json',
  '/icon-72x72.png',
  '/icon-96x96.png',
  '/icon-128x128.png',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache).catch(()=>{}))
  );
});

self.addEventListener('fetch', event => {
  // Cache first for icons and manifest, network first for API
  if (event.request.url.includes('api.dexscreener.com') || 
      event.request.url.includes('api.coingecko.com') ||
      event.request.url.includes('api.binance.com')) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
});
