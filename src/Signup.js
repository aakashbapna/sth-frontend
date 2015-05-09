import React from 'react';
import Page from './components/Page';

export default class Signup extends React.Component {
	render() {
		return <Page flux={this.props.flux}/>;
	}
}
