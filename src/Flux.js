import {Flux} from 'flummox';

import FBActions from './actions/FBActions';
import FBStore from './stores/FBStore';

export default class AppFlux extends Flux {
	constructor() {
		super();

		// facebook related
		this.createActions('fb', FBActions);
		this.createStore('fb', FBStore, this);


	}
}
