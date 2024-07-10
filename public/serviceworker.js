let CACHE_NAME = 'kk';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/kk.png',
    '/favicon.png',
    '/static/*',
    '/static/media/pp.12f1dcaa4b100f744ec4.png',
    '/static/media/1111.4069e762625fdc819250.png'
];

// Install event
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting();
});



// Activate event
self.addEventListener('activate', function(event) {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                    return null;
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                console.log('From cache',event.request.url)
                return response;
            }
            console.log('From Online',event.request.url)
            return fetch(event.request);
        })
    );
});
