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
import Dashboard from './src/Dashboard';
import Signup from './src/Signup';
import Router from 'react-router';

let {
	DefaultRoute,
	Link,
	Route,
	RouteHandler
} = Router;

let container = document.createElement('div');
container.id = 'app';

let routes = (
	<Route name='app' path='/' handler={App}>
		<Route name='dashboard' handler={Dashboard} />
		<DefaultRoute handler={Signup}/>
	</Route>
);

window.addEventListener('DOMContentLoaded', function() {
	document.body.appendChild(container);
	Router.run(routes, function(Handler) {
		React.render(<Handler/>, container);
	});
});
