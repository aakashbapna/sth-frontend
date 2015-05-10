import React from 'react';

import {DropDownMenu, TextField, Checkbox, Dialog} from 'material-ui';

export default class EntryForm extends React.Component {
	render() {
		return <div>
			<div> 
				<span className="title"> Product category </span>
				<DropDownMenu menuItems={this.props.categories} /> 
			</div>
			<div> 
				<span className="title"> Product Name </span>
				<TextField floatingLabelText='name' value={this.props.entry.product.attributes.product} />
			</div>
			<div> 
				<div className="fix-image"><span className="title"> Product Image </span></div>
				<img src={this.props.entry.image} width="200px" height="200px"/>
			</div>
			<div> 
				<span className="title">Delivery Options</span>
				<div>
					<Checkbox name="pickup" value="checkboxValue1" label="Pickup" />
					<Checkbox name="delivery" value="checkboxValue1" label="Delivery" />
				</div>
			</div>
			<div>
				<span className="title"> Product Price </span>
				<TextField floatingLabelText='price' />
			</div>
			 <div>
				<span className="title"> Product Unit </span>
				<TextField floatingLabelText='unit' />
			</div>
			<div>
				<span className="title"> Product Quantity </span>
				<TextField floatingLabelText='quantity' />
			</div>
		</div>;
	}
}
