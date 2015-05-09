import {Flux} from 'flummox';

import FBActions from './actions/FBActions';
import FBStore from './stores/FBStore';

export default class AppFlux extends Flux {
	constructor() {
		super();
		this.createActions('app', FBActions);
		this.createStore('app', FBStore, {});
	}
}
