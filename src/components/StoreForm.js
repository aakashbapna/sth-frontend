import React from 'react';
import {TextField, Paper, Checkbox, RaisedButton} from 'material-ui';
import GoogleMaps from './GoogleMaps';

export default class StoreForm extends React.Component {
	state = {
		user: Object.assign({}, this.props.user),
		pickup: false,
		delivery: false,
		deliver_within: 0
	}
	checkPickup(x) {
		console.log(x);
	}
	checkDelivery(x) {
		console.log(x);
	}
	handleSubmit() {
		console.log(this.refs);
	}
	render() {
		console.log(this.props);
		return <div className='store-form'>
			<Paper>
				<TextField
					ref='fullname'
					value={this.props.user.fullname}
					floatingLabelText='Owner Name'/>
				<TextField
					ref='email'
					disabled={true}
					value={this.props.user.email}
					floatingLabelText='Email Address'/>
				<TextField
					ref='phone_number'
					floatingLabelText='Phone Number'
					hintText='+91 9999900000 '/>
				<div className='checkbox-container'>
					<Checkbox
						ref='pickup'
						onCheck={this.checkPickup.bind(this)}
						label='Pick Up'/>
				</div>
				<div className='checkbox-container'>
					<Checkbox
						ref='delivery'
						onCheck={this.checkDelivery.bind(this)}
						label='Delivery'/>
				</div>
				<div>
					<GoogleMaps location={this.props.signup.location} />
				</div>
				<div className='submit-button'>
					<RaisedButton
						label='Submit'
						primary={true}
						onClick={this.handleSubmit.bind(this)}/>
				</div>
			</Paper>
		</div>;
	}
}
