import {Store} from 'flummox';

export default class FBStore extends Store {
	constructor(flux) {
		super();

		const fbActionIds = flux.getActionIds('fb');

		this.register(fbActionIds.isLoggedIn, this.handleLogin);
		this.register(fbActionIds.doLogin, this.handleLogin);

		this.state = {
			login: false,
			auth: null
		};
	}
	handleLogin(resp) {
		console.log(resp);
		if (resp.status === 'connected') {
			this.setState({
				login: true,
				auth: resp.authResponse
			});
		}
	}
}
