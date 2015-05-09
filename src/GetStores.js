import React from 'react';
import FluxComponent from 'flummox/component';
import ProductCard from './components/ProductCard';

class StoreComponent extends React.Component {

	componentDidMount(){
		this.props.flux.getActions('getallstores').getAndUpdateStores('GET');
	}

	render(){
		return <div className="store-component">
			{this.props.queryResult && this.props.queryResult.map(x=> {
				return (
					<ProductCard {...x}/>
				)
			})}
		</div>
	}
}

export default class GetStores extends React.Component {
	render() {
		return <FluxComponent flux={this.props.flux} connectToStores={['getallstores']}>
			<StoreComponent/>
		</FluxComponent>
	}
}
