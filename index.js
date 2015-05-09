// Prelude
import 'babel-core/polyfill';
import BPromise from 'bluebird';
window.Promise = BPromise;
import {fetch} from 'whatwg-fetch';
window.fetch = fetch;
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
import Homepage from './src/Homepage';
import GetStores from './src/GetStores';
import Router from 'react-router';
import RouterContainer from './src/components/RouterContainer';
import './src/LoadFbSdk';

let {
	DefaultRoute,
	Link,
	Route,
	RouteHandler
} = Router;

let container = document.createElement('div');
container.id = 'app';

let fbRoot = document.createElement('div');
fbRoot.id = 'fb-root';

let routes = (
	<Route name='app' path='/' handler={App}>
		<Route name='dashboard' handler={Dashboard} />
		<Route name='signup' handler={Signup} />
		<Route name='getStoredItems' handler={GetStores} />
		<DefaultRoute handler={Homepage}/>
	</Route>
);

RouterContainer.set(Router.create({ routes }));

window.addEventListener('DOMContentLoaded', function() {
	document.body.appendChild(container);
	document.body.appendChild(fbRoot);
	RouterContainer.get().run(function(Handler) {
		React.render(<Handler/>, container);
	});
});
