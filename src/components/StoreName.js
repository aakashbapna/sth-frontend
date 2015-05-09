import React from 'react';
import {Paper, TextField, RaisedButton} from 'material-ui';
import FluxComponent from 'flummox/component';

class StoreNameComponent extends React.Component {
	render() {
		return <div className='store-name-component'>
			<Paper>
				<TextField
					className='store-name-input'
					hintText='Company Name'
					floatingLabelText='Sign up to start selling your items'/>
				<RaisedButton
					className='store-name-button'
					label='Start ->'
					primary={true} />
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
