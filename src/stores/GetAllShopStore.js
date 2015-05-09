import {Store} from 'flummox';

export default class GetAllShopStore extends Store {
	constructor(flux) {
		super();

		const getAllStoresActionIds = flux.getActionIds('getallstores');

		this.register(getAllStoresActionIds.getAndUpdateStores, this.handleData);

		this.state = {
			queryResult: null
		};
	}

	handleData(data) {
		this.setState({queryResult: data});
	}
}
