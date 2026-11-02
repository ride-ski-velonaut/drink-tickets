// Drink Tickets service worker.
// Cache first: the app always opens from the saved copy on the phone, instantly,
// whatever the signal. In the background it asks GitHub for newer files and saves
// them, so an update shows up on the launch after the one that downloaded it.
const CACHE = 'drink-tickets-v2';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(e.request, {ignoreSearch: true});
    const fresh = fetch(e.request, {cache: 'no-cache'}).then(res => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(e.request, res.clone());
      return res;
    });
    if (cached) {
      e.waitUntil(fresh.catch(() => {}));  // update quietly in the background
      return cached;
    }
    try { return await fresh; }
    catch (err) { return (await cache.match('index.html')) || Response.error(); }
  })());
});
