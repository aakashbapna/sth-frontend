import {Store} from 'flummox';

export default class FBStore extends Store {
	constructor(flux) {
		super();

		const fbActionIds = flux.getActionIds('fb');

		this.register(fbActionIds.isLoggedIn, this.handleLogin);
		this.register(fbActionIds.doLogin, this.handleLogin);
		this.register(fbActionIds.delay, this.handleDelay);

		this.state = {
			login: false,
			auth: null
		};
	}
	handleDelay() {
		console.log('delay Called');
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
	getLogin() {
		return this.state.login;
	}
	getLoginCheck() {
		return this.state.loginCheck;
	}
}
