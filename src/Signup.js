import React from 'react';
import Page from './components/Page';
import Flux from './Flux';

let flux = new Flux();

export default class Signup extends React.Component {
	render() {
		return <Page flux={flux}/>;
	}
}
