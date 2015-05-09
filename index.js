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

let flux = new Flux();

window.addEventListener('DOMContentLoaded', function() {
	React.render(<App/>, document.body);
});
