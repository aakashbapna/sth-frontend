import React from 'react';
import StoreForm from './StoreForm';
import FluxComponent from 'flummox/component';
import {RaisedButton} from 'material-ui';

export default class FBLoginComponent extends React.Component {
	handleClick() {
		console.log(this);
		this.props.flux.getActions('fb').doLogin();
	}
	render() {
		if (this.props.login) {
			return (
				<FluxComponent flux={this.props.flux} connectToStores={['fb', 'signup']}>
					<StoreForm {...this.props} />
				</FluxComponent>
			);
		} else {
			if (this.props.status === '')
				return <div>Loading...</div>;
			else
				return <div className='login-fb'>
					<RaisedButton
						label='Login using Facebook'
						onClick={this.handleClick.bind(this)} />
				</div>
		}
	}
}
