// Prelude
import 'babel-core/polyfill';
import BPromise from 'bluebird';
window.Promise = BPromise;
import 'whatwg-fetch';
const __DEV__ = true;
const __PROD__ = !__DEV__;
if (__DEV__) {
	Promise.longStackTraces();
	Error.stackTraceLimit = Infinity;
}

import React from 'react';
import App from './src/App';

let container = document.createElement('div');
container.id = 'app';

window.addEventListener('DOMContentLoaded', function() {
	document.body.appendChild(container);
	React.render(<App/>, container);
});
