import {Store} from 'flummox';

export default class SignupStore extends Store {
	constructor(flux) {
		super();

		const signupActionIds = flux.getActionIds('signup');

		this.register(signupActionIds.setSync, this.handleSetSync);
		this.register(signupActionIds.setLocation, this.handleSetLocation);

		// Signup details
		this.state = {
			name: null,
			email: null,
			phone_number: null,
			pickup: false,
			delivery: false,
			deliver_within: 0,
			location: {
				lat: 0,
				lng: 0
			},
			working_hours: {
				start: 10,
				end: 22
			},
			working_days: {
				weekdays: true,
				weekends: true
			}
		};

	}
	handleSetSync(prop) {
		let state = Object.assign({}, prop);
		this.setState(state);
	}
	handleSetLocation(location) {
		let locState = {
			lat: location.lat,
			lng: location.lng
		};
		this.setState({
			location: locState
		});
	}
}
