import React from 'react';

import {RaisedButton} from 'material-ui';

import AddProduct from "./components/AddProduct/"


export default class Dashboard extends React.Component {
	state = {
		categories : [
			"Fruits & Vegetables",	"Grocery & Staples",	"Bread Dairy & Eggs",
			"Beverages", 			"Branded Foods",		"Personal Care",
			"Household", 			"Imported & Gourmet",	"Meat"
		],
		menuItems : [],
		errorText : "This field is required"
	}


	componentWillMount() {
		this.state.menuItems = this.state.categories.map(function(text, index) {
			return {text: text, payload: index+1};
		});
	}
	
	hello() {
		this.refs.addentry.refs.addentry.show();
	}
	
	render() {
		return <div className="dashboard">
			<RaisedButton onClick={this.hello.bind(this)} label="Add new entry" style={{"float": "right"}} />
			<h2> Catalogue Page </h2>

			<AddProduct ref='addentry' categories={this.state.menuItems} />
		</div>;
	}
}
