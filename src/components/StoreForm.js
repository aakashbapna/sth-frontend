import React from 'react';
import {TextField, Paper, Checkbox, RaisedButton, Dialog} from 'material-ui';
import GoogleMaps from './GoogleMaps';
import RouterContainer from './RouterContainer';

export default class StoreForm extends React.Component {
	state = {
		user: Object.assign({}, this.props.user),
		pickup: false,
		delivery: false,
		deliver_within: 0
	}
	checkPickup(x) {
		this.setState({
			pickup: this.refs.pickup.isChecked()
		});
	}
	checkDelivery(x) {
		this.setState({
			delivery: this.refs.delivery.isChecked()
		});
	}
	handleSubmit() {
		let i = this.refs;
		let data = {
			sid: this.props.user.userid,
			name: this.props.signup.name,
			ownername: i.fullname.getValue(),
			email: i.email.getValue(),
			phone_number: i.phone_number,
			pickup: i.pickup.isChecked() ? 1 : 0,
			delivery: i.delivery.isChecked() ? 1 : 0,
			deliver_within: i.deliver_within && i.deliver_within.getValue(),
			location: this.props.signup.location.lat + ',' + this.props.signup.location.lng,
			products: []
		};
		this.props.flux.getActions('signup').doSignup(data);
	}
	moveon() {
		RouterContainer.get().transitionTo('/dashboard');
	}
	render() {
		console.log(this.props);
		var dactions = [
			{
				text: 'Cool !',
				ref: 'moveon',
				onClick: this.moveon.bind(this)
			}
		];
		return <div className='store-form'>
			<Paper>
				<TextField
					ref='fullname'
					defaultValue={this.props.user.fullname}
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
					{this.state.delivery &&
						<TextField
							ref='deliver_within'
							floatingLabelText='Deliver within (in KM)'
							defaultValue='2' />
					}
				</div>
				{this.props.signup.location.lat !== 0 &&
					<div className='maps-container'>
						<GoogleMaps location={this.props.signup.location} />
					</div>
				}
				<div className='submit-button'>
					<RaisedButton
						label='Submit'
						primary={true}
						onClick={this.handleSubmit.bind(this)}/>
				</div>
				{this.props.signup.done && <Dialog
					ref='donedialog'
					title='Store created'
					actions={dactions}
					openImmediately={true}
					actionFocus='moveon'>
					Store has been successfully created.
				</Dialog>}
			</Paper>
		</div>;
	}
}
