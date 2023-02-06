/*
 Copyright 2022 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		VitePWA({
			registerType: 'autoUpdate',
			injectRegister: 'script',
			workbox: {
				globPatterns: ['**/*.{js,css,html}'],
			},
		}),
	],
	server: {
		proxy: {
			'/api': {
				// target: 'http://jsonplaceholder.typicode.com',
				target: 'http://localhost:3001',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
	build: {
		emptyOutDir: false,
		rollupOptions: {
			input: {
				index: resolve(__dirname, 'index.html'),
				serviceWorker: resolve(__dirname, './editor/service-worker.js'),
			},
		},
	},
});
