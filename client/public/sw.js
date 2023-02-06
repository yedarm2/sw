self.addEventListener('install', event => {
	console.log('[Service Worker] Install');

	event.waitUntil(
		caches.open('테스트 캐시').then(cache => cache.addAll(['/', '/index.html', '/bundle.js'])),
	);
});

self.addEventListener('fetch', event => {
	console.log('fetch 했당');

	event.respondWith(
		caches.match(event.request).then(resource => {
			return (
				resource ||
				fetch.then(event.request).then(response => {
					return caches.open('테스트 캐시').then(cache => {
						console.log('fetch cache=>', event.request.url);
						cache.put(event.request, response.clone());

						return response;
					});
				})
			);
		}),
	);
});
