import { cacheName } from './cacheName.js';

self.addEventListener('fetch', event => {
	// console.log('method:', event.request.method);
	// console.log('headers:', event.request.headers);
	// console.log('url:', event.request.url);

	if (/posts/.test(event.request.url)) {
		// event.respondWith(new Response('[]'));
		event.respondWith(
			caches.match(event.request.url).then(async cachedResponse => {
				if (cachedResponse) return cachedResponse;

				const response = await fetch(event.request);
				const cache = await caches.open(cacheName);
				await cache.put(event.request.url, response.clone());

				return response;

				// const response = await fetch(event.request);
				// const posts = await response.json();
				// const newResponse = new Response(JSON.stringify(posts.slice(0, 10)));

				// const cache = await caches.open(cacheName);
				// await cache.put(event.request.url, newResponse.clone());

				// return newResponse;
			}),
		);
	}
});
