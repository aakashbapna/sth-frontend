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
}

// TODO validate before returning
export default class SignupActions extends Actions {
	setSync(prop, val) {
		return { [prop]: val };
	}
	async setLocation() {
		return await getLatLng();
	}
}
