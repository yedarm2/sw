self.addEventListener('activate', event => {
	console.log('Service worker activated!!');
	event.waitUntil(clients.claim());
});
