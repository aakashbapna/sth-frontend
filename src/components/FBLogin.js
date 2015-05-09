import React from 'react';
import StoreForm from './StoreForm';

export default class FBLoginComponent extends React.Component {
	handleClick() {
		console.log(this);
		this.props.flux.getActions('fb').doLogin();
	}
	render() {
		if (this.props.login) {
			return <StoreForm {...this.props} />
		} else {
			if (this.props.status === '')
				return <div>Loading...</div>;
			else
				return <button onClick={this.handleClick.bind(this)}>Login</button>;
		}
	}
}
