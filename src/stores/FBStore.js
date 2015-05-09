import {Store} from 'flummox';

export default class FBStore extends Store {
	constructor(flux) {
		super();

		const fbActionIds = flux.getActionIds('fb');

		this.register(fbActionIds.isLoggedIn, this.handleLoginCheck);
		this.register(fbActionIds.doLogin, this.handleLogin);
		this.register(fbActionIds.delay, this.handleDelay);

		this.state = {
			loginCheck: false,
			login: false
		};
	}
	handleDelay() {
		console.log('delay Called');
	}
	handleLoginCheck(resp) {
		console.log(resp);
		this.setState({
			loginCheck: true
		});
	}
	handleLogin(resp) {
		console.log(resp);
		this.setState({
			login: true
		});
	}
	getLogin() {
		return this.state.login;
	}
	getLoginCheck() {
		return this.state.loginCheck;
	}
}
