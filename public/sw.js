// Service Worker para o Diário Poliglota
// Garante o funcionamento offline completo e o cache adequado dos assets do Vite.

const CACHE_NAME = 'diario-poliglota-v2';

const OFFLINE_URLS = [
  '/',
  '/index.html',
  '/icon.svg',
  '/icons.svg',
  '/favicon.svg',
  '/manifest.json'
];

// Instalação: pré-cacheia o shell principal offline
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(OFFLINE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Ativação: remove caches antigos
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Intercepta requisições
self.addEventListener('fetch', (e) => {
  // Apenas intercepta requisições GET
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // 1. Recursos Externos (Google Fonts, etc.) -> Cache-First
  const isGoogleFont = url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com');
  
  if (isGoogleFont) {
    e.respondWith(
      caches.match(e.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        
        return fetch(e.request).then((networkResponse) => {
          if (networkResponse.status === 200) {
            const cacheCopy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, cacheCopy));
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // 2. Recursos do próprio App (Same-Origin) -> Network-First
  // Isso inclui o index.html, arquivos do bundle (/assets/*), manifest, favicon, etc.
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(e.request)
        .then((networkResponse) => {
          // Atualiza o cache dinamicamente se a resposta for bem sucedida (200) ou status 0 (no-cors)
          if (networkResponse.status === 200 || networkResponse.status === 0) {
            const cacheCopy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, cacheCopy));
          }
          return networkResponse;
        })
        .catch(() => {
          // Fallback para o cache offline caso falhe a rede
          return caches.match(e.request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;
            // Se falhar a rede e não estiver no cache, retorna a raiz para SPA
            if (e.request.mode === 'navigate') {
              return caches.match('/');
            }
          });
        })
    );
  }
});
