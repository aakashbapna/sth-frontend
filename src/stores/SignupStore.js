import {Store} from 'flummox';

export default class SignupStore extends Store {
	constructor(flux) {
		super();

		const signupActionIds = flux.getActionIds('signup');

		this.register(signupActionIds.setName, this.handleSetName);

		// Signup details
		this.state = {
			name: null
		};

	}
	handleSetName(name) {
		this.setState({name});
	}
}
