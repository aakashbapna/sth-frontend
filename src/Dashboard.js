import React from 'react';
import {DropDownMenu, TextField, Checkbox} from 'material-ui';

class Delivery extends React.Component{
	render(){
		return <div>
			<Checkbox name="pickup" value="checkboxValue1" label="Pickup" />
			<Checkbox name="delivery" value="checkboxValue1" label="Delivery" />
		</div>
	}
}

export default class Dashboard extends React.Component {
	state = {
		menuItems : [
		   { payload: '1', text: 'Fruits & Vegetables' },
		   { payload: '2', text: 'Grocery & Staples' },
		   { payload: '3', text: 'Bread Dairy & Eggs' },
		   { payload: '4', text: 'Beverages' },
		   { payload: '5', text: 'Branded Foods' },
		   { payload: '6', text: 'Personal Care' }

		],
		errorText : "This field is required"
	}
	
	render() {
		return <div className="dashboard">
			<h2> Catalogue Page </h2>
			<div> 
				<span className="title"> Product category </span>
				<DropDownMenu menuItems={this.state.menuItems} /> 
			</div>
			<div> 
				<span className="title"> Product Name </span>
				<TextField floatingLabelText='name' />
			</div>
			<div> 
				<div className="fix-image"><span className="title"> Product Image </span></div>
				<img src="" width="200px" height="200px"/>
			</div>
			<div> 
				<span className="title">Delivery Options</span>
				<Delivery/>
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
