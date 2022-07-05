// Choose a cache name
const cacheName = 'm1lille1-v1';
// List the files to precache
const precacheResources = [
  "/m1lille1/index.html",
  "/m1lille1/main.css",
  "/m1lille1/main.js",
  "/m1lille1/svg.css",
  '/m1lille1/images/m1.svg',
  '/m1lille1/images/m1_72.png',
  '/m1lille1/images/m1_96.png',
  '/m1lille1/images/m1_128.png',
  '/m1lille1/images/m1_192.png',
  '/m1lille1/images/m1_384.png',
  '/m1lille1/images/m1_512.png',
  "https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js",
];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

// clear old caches when the service worker is activated
self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
  event.waitUntil(
    caches.keys().then(function(allCaches) {
      return Promise.all(
        allCaches.filter(function(name) {
          return name != cacheName
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    })
  );
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Cache first strategy
      return cachedResponse || fetch(event.request);
    }),
  );
});
