import {Actions} from 'flummox';

let isLoggedIn = function() {
	return new Promise(function(resolve, reject) {
		FB.getLoginStatus(resolve);
	});
};

let doLogin = function() {
	return new Promise(function(resolve, reject) {
		FB.login(resolve);
	});
};

export default class FBAction extends Actions {
	async isLoggedIn() {
		return await isLoggedIn();
	}
	async doLogin() {
		return await doLogin();
	}
}
