// Future Makers v2 — minimal service worker (Stage D1).
// Network-first so deploys show immediately; enables PWA install.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
