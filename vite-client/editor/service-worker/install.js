import { cacheName } from './cacheName.js';
const prepareFileList = [
	'/',
	'/index.html',
	'/editor/css/style.css',
	'/@vite/client',
	'/editor/index.js',
	'node_modules/vite/dist/client/env.mjs',
	'editor/app/editor.js',
	'/node_modules/.vite/deps/codemirror.js',
	'/node_modules/.vite/deps/@codemirror_view.js',
	'/node_modules/.vite/deps/@codemirror_commands.js',
	'/node_modules/.vite/deps/@codemirror_lang-markdown.js',
	'/node_modules/.vite/deps/@codemirror_theme-one-dark.js',
	'/editor/app/menu.js',
	'/editor/lib/actions.js',
];

self.addEventListener('install', event => {
	console.log('installed message');
	event.waitUntil(
		caches
			.open(cacheName)
			.then(cache => cache.addAll(prepareFileList))
			.then(() => console.log('캐시 완료')),
	);
});
