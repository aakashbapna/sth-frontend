import React from 'react';
import {Paper, TextField, RaisedButton} from 'material-ui';
import FluxComponent from 'flummox/component';
import RouterContainer from './RouterContainer';

class StoreNameComponent extends React.Component {
	state = {
		name: this.props.name
	}
	handleClick(e) {
		this.props.flux.getActions('signup').setSync('name', this.state.name);
		RouterContainer.get().transitionTo('/signup');
	}
	handleChange(e) {
		this.setState({
			name: e.target.value
		});
	}
	render() {
		return <div className='store-name-component'>
			<Paper>
				<TextField
					onChange={this.handleChange.bind(this)}
					className='store-name-input'
					hintText='Company Name'
					floatingLabelText='Sign up to start selling your items'/>
				<RaisedButton
					label='Start'
					className='store-name-button'
					onClick={this.handleClick.bind(this)}
					primary={true}/>
			</Paper>
		</div>;
	}
}

export default class StoreName extends React.Component {
	render() {
		return <FluxComponent
			flux={this.props.flux}
			connectToStores={['signup']}>
			<StoreNameComponent />
		</FluxComponent>
	}
}
