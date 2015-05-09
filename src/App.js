import React from 'react';
import Page from './components/Page';
import Flux from './Flux';

let flux = new Flux();
let actions = flux.getActions('fb');

actions.isLoggedIn();

export default class App extends React.Component {
	render() {
		return <Page flux={flux}/>;
	}
}
