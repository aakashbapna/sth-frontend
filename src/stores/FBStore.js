import {Store} from 'flummox';

export default class FBStore extends Store {
	constructor(flux) {
		super();

		const fbActionIds = flux.getActionIds('fb');

		this.register(fbActionIds.isLoggedIn, this.handleLogin);
		this.register(fbActionIds.doLogin, this.handleLogin);

		this.state = {
			status: '',
			login: false,
			auth: null,
			user: null
		};
	}
	handleLogin(resp) {
		this.setState({
			status: resp.status,
		})
		if (resp.status === 'connected') {
			let userinfo = {
				fullname: resp.name,
				userid: resp.id,
				email: resp.email
			};
			this.setState({
				login: true,
				auth: resp.authResponse,
				user: userinfo
			});
		}
	}
}
