import React from 'react';

export default class ProductCard extends React.Component {
	render() {
		return <div className="product-card">
			<h4>{this.props.name}</h4>
			<p>{this.props.sid}</p>
			
		</div>
	}
}
