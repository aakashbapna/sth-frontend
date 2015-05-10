import React from 'react';

import {DropDownMenu, TextField, Checkbox, Dialog} from 'material-ui';

export default class EntryForm extends React.Component {
	render() {
		return <div>
			<div>
				<input type="hidden" ref="barcode" value={this.props.entry.product.EAN13} />
				<DropDownMenu ref="category" menuItems={this.props.categories} /> 
			</div>
			<div> 
				<TextField ref="name" floatingLabelText='Product Name' value={this.props.entry.product.attributes.product} />
			</div>
			<div> 
				<img ref="image" src={this.props.entry.image} width="200px" height="200px"/>
			</div>
			<div>
				<TextField ref="price" floatingLabelText='Product Price' />
			</div>
			<div>
				<TextField ref="quantity" floatingLabelText='Product Quantity' />
			</div>
			 <div>
				<TextField ref="unit" floatingLabelText='Product Unit' />
			</div>
		</div>;
	}
}
