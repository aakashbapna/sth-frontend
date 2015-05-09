import {Actions} from 'flummox';

let getAndUpdateStores = function(methodType, storeId) {
	storeId = storeId || '';
	return fetch('/backend' + storeId,{
		method: methodType
	})
	.then(resp => {
		if (resp.status !== 200) {
			return resp.json().then(bodyJson => {
				return Promise.reject(
					new Error('Error in Fetch Call', resp.status, bodyJson)
				);
			});
		}
		return resp.json();
	})
	.catch(err => {
		return Promise.reject(err);
	});
};

export default class GetAllShopActions extends Actions {
	async getAndUpdateStores(methodType, storeId) {
		try {
			return await getAndUpdateStores(methodType, storeId);
		} catch(e) {
			console.log(e.stack);
			throw e;
		}
	}
}
