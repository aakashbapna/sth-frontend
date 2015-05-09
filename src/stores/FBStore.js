import {Store} from 'flummox';

window.fbAsyncInit = function() {
	FB.init({
		appId: process.env.FB_APP_ID,
		cookie: true,
		xfbml: true,
		version: 'v2.3'
	});
};

// Load FB Api async
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

export default class FBStore extends Store {
	constructor(flux) {
		super();

		const fbActionIds = flux.getActionIds('fb');
		this.register(fbActionIds.isLoggedIn, this.handleLoginCheck);
		this.register(fbActionIds.doLogin, this.handleLogin);

		this.state = {
			loginCheck: false,
			login: false
		};
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
}
