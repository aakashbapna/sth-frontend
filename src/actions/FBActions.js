import {Actions} from 'flummox';

let isLoggedIn = function() {
	return new Promise(function(resolve, reject) {
		FB.getLoginStatus(function(resp) {
			resolve(resp);
		});
	});
};

let doLogin = function() {
	return new Promise(function(resolve, reject) {
		FB.login(resolve);
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
