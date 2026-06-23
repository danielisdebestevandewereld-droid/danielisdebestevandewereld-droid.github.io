
self.addEventListener('install', (event) => {
  console.log('Service Worker installeren...');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker actief...');
});


self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});