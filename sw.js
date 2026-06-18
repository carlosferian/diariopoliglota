// Service worker — Diário Poliglota
// Estratégia: cache-first para CDN, network-first para o app shell.

const CACHE = 'diario-poliglota-v1';

const SHELL = [
  './index.html',
  './icon.svg',
  './manifest.json',
];

const CDN = [
  'https://unpkg.com/react@18.3.1/umd/react.development.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js',
  'https://unpkg.com/@babel/standalone@7.29.0/babel.min.js',
];

// Pré-cacheia o app shell na instalação
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

// Remove caches antigos na ativação
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = e.request.url;

  // CDN: cache-first (scripts não mudam para a versão fixada)
  if (CDN.includes(url)) {
    e.respondWith(
      caches.match(e.request).then((hit) => {
        if (hit) return hit;
        return fetch(e.request).then((res) => {
          caches.open(CACHE).then((c) => c.put(e.request, res.clone()));
          return res;
        });
      })
    );
    return;
  }

  // Fontes do Google: cache-first (ficam estáveis)
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    e.respondWith(
      caches.match(e.request).then((hit) => {
        if (hit) return hit;
        return fetch(e.request).then((res) => {
          caches.open(CACHE).then((c) => c.put(e.request, res.clone()));
          return res;
        });
      })
    );
    return;
  }

  // App shell (same-origin): network-first, cai no cache se offline
  if (url.startsWith(self.location.origin)) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          caches.open(CACHE).then((c) => c.put(e.request, res.clone()));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  }
});
