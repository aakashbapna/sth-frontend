import React from 'react';
// import FBComponent from './FBComponent';
import FBStore from '../stores/FBStore';

export default class extends React.Component {
	getInitialState() {
		return {
			loggedIn: false
		}
	}
	_onChange() {
		console.log('changed');
	}
	componentDidMount() {
		FBStore.addChangeListener(this._onchange);
	}
	componentWillUnmount() {
		FBStore.removeChangeListener(this._onchange);
	}
	render() {
		return <h1> Status: {this.state.loggedIn} </h1>
	}
}
