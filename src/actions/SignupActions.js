import {Actions} from 'flummox';

let getLatLng = function() {
	return new Promise(function(resolve, reject) {
		navigator.geolocation.getCurrentPosition(function(position) {
			console.log(position);
			resolve({
				lat: position.coords.latitude,
				lng: position.coords.longitude
			});
		}, function error(err) {
			console.log(err);
			reject(err);
		}, {
			maximumAge: 5 * 60 * 1000,
			timeout: 10*1000
		});
	});
};

let doSignup = function(data) {
	return Promise.resolve({
		done: true
	});
};

// TODO validate before returning
export default class SignupActions extends Actions {
	setName(name) {
		return name;
	}
	async setLocation() {
		return await getLatLng();
	}
	async doSignup(data) {
		return await doSignup(data);
	}
}
