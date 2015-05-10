import {Store} from 'flummox';

export default class SignupStore extends Store {
	constructor(flux) {
		super();

		const signupActionIds = flux.getActionIds('signup');

		this.register(signupActionIds.setName, this.handleSetName);
		this.register(signupActionIds.setLocation, this.handleSetLocation);
		this.register(signupActionIds.doSignup, this.handleSignup);

		// Signup details
		this.state = {
			name: null,
			location: {
				lat: 0,
				lng: 0
			},
			done: false,
			doneData: null,
		};

	}
	handleSetName(name) {
		this.setState({name});
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
	handleSignup(resp) {
		console.log('Done');
		this.setState({
			done: true,
			doneData: resp
		});
	}
}
