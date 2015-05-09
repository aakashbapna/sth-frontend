import {Actions} from 'flummox';

let isLoggedIn = function() {
	return new Promise(function(resolve, reject) {
		FB.getLoginStatus(function(resp) {
			if (resp.authResponse) {
				FB.api('/me', function(resp2) {
					resolve(Object.assign({}, resp, resp2));
				});
			} else {
				resolve(resp);
			}
		});
	});
};

let doLogin = function() {
	return new Promise(function(resolve, reject) {
		FB.login(function(resp) {
			if(resp.authResponse) {
				FB.api('/me', function(resp2) {
					resolve(Object.assign({}, resp, resp2));
				});
			} else {
				reject(new Error('couldn\'t get permissions'));
			}
		}, {
			scope: 'email, public_profile',
			return_scopes: true
		});
	});
};

export default class FBAction extends Actions {
	async isLoggedIn() {
		try {
			return await isLoggedIn();
		} catch(e) {
			console.log(e.stack);
			throw e;
		}
	}
	async doLogin() {
		return await doLogin();
	}
}
