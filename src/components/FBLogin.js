import React from 'react';
import StoreForm from './StoreForm';
import FluxComponent from 'flummox/component';

export default class FBLoginComponent extends React.Component {
	handleClick() {
		console.log(this);
		this.props.flux.getActions('fb').doLogin();
	}
	render() {
		if (this.props.login) {
			return (
				<FluxComponent flux={this.props.flux} connectToStores={{}}>
					<StoreForm {...this.props} />
				</FluxComponent>
			);
		} else {
			if (this.props.status === '')
				return <div>Loading...</div>;
			else
				return <button onClick={this.handleClick.bind(this)}>Login</button>;
		}
	}
}
