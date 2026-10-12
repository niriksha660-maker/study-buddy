/* ..STUDY BUDDYYY.. (Sbeta) — service worker v2: offline app shell + PWABuilder-style offline fallback page */
const CACHE = 'studybuddy-v2';
const SHELL = ['./', './index.html', './offline.html'];
const OFFLINE_FALLBACK_PAGE = './offline.html';

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // App pages (navigations): network-first → cache → offline fallback page (PWABuilder pattern)
  if (req.mode === 'navigate' && new URL(req.url).origin === location.origin){
    e.respondWith((async () => {
      try {
        const networkResp = await fetch(req);
        const cp = networkResp.clone();
        caches.open(CACHE).then(c => c.put('./index.html', cp)).catch(() => {});
        return networkResp;
      } catch (err) {
        const hit = await caches.match('./index.html');
        if (hit) return hit;
        const cache = await caches.open(CACHE);
        return cache.match(OFFLINE_FALLBACK_PAGE);
      }
    })());
    return;
  }

  // Other assets: cache-first
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      const cp = res.clone();
      caches.open(CACHE).then(c => c.put(req, cp)).catch(() => {});
      return res;
    }))
  );
});
