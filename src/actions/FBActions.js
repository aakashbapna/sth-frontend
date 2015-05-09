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

let delay = function(t) {
	return new Promise(function(resolve) {
		setTimeout(resolve, t || 100);
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
	async delay() {
		return await delay();
	}
}
