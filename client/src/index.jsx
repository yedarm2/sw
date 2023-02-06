import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').then(registration => {
		console.log('ServiceWorker registration successfull with scope:', registration.active);
	});
}

root.render(<App />);
