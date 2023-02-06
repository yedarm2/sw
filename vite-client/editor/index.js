/*
 Copyright 2021 Google LLC

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

if ('serviceWorker' in navigator) {
	window.addEventListener('load', async () => {
		try {
			const registration = await navigator.serviceWorker.register('/service-worker.js', {
				type: 'module',
			});
			const posts1 = await fetch('https://jsonplaceholder.typicode.com/posts');
			const posts2 = await fetch('/api/posts');
		} catch (error) {
			console.log('Service worker 등록을 실패했습니다. ㅠㅠ', error);
		}
	});
}

window.addEventListener('DOMContentLoaded', async () => {
	// Set up the editor
	const { Editor } = await import('./app/editor.js');
	const editor = new Editor(document.body);

	// Set up the menu
	const { Menu } = await import('./app/menu.js');
	new Menu(document.querySelector('.actions'), editor);

	// Set the initial state in the editor
	// const defaultText = `# Welcome to PWA Edit!\n\nTo leave the editing area, press the \`esc\` key, then \`tab\` or \`shift+tab\`.`;
	await navigator.serviceWorker.ready;
	setTimeout(async () => {
		const postsResponse = await fetch('/api/posts');
		const posts = await postsResponse.json();
		const defaultText = JSON.stringify(posts, null, '\t');
		console.log('loaded json');

		editor.setContent(defaultText);
	}, 3000);
});
