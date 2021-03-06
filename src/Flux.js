import {Flux} from 'flummox';

import FBActions from './actions/FBActions';
import FBStore from './stores/FBStore';

import SignupActions from './actions/SignupActions';
import SignupStore from './stores/SignupStore';

import GetAllShopActions from './actions/GetAllShopActions';
import GetAllShopStore  from './stores/GetAllShopStore';

export default class AppFlux extends Flux {
	constructor() {
		super();

		// facebook related
		this.createActions('fb', FBActions);
		this.createStore('fb', FBStore, this);

		// signup
		this.createActions('signup', SignupActions);
		this.createStore('signup', SignupStore, this);

		//GetStores
		this.createActions('getallstores', GetAllShopActions);
		this.createStore('getallstores', GetAllShopStore, this);

	}
}
