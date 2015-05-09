import React from 'react';
import Page from './components/Page';
import Flux from './Flux';

let flux = new Flux();
let actions = flux.getActions('app');

actions.isLoggedIn();

export default class App extends React.Component {
	render() {
		return <Page flux={flux}/>;
	}
}
