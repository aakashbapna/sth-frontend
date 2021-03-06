import React from 'react';
import {DropDownMenu, TextField, Checkbox, Dialog} from 'material-ui';

import EntryForm from './form'
import PhotoMode from './photoMode'


export default class AddProduct extends React.Component {
	state = {
		dismissOnClickAway: true,
		modal: false,
		photoMode: false,
		entryMode: false
	}

	addStoreToDB(storeObj){
		fetch('/addProduct/' + storeObj.sid ,{
			method: 'POST',
			body: JSON.stringify(storeObj)
		}).then(resp => {
			console.log(resp);
			if (resp.status !== 200) {
				return resp.json().then(bodyJson => {
					return Promise.reject(
						new Error('Error in Fetch Call', resp.status, bodyJson)
					);
				});
			}
			alert('Store Got Added');
		})
		.catch(err => {
			return Promise.reject(err);
		});
	}

	showForm() {
		this.setState({
			photoMode: false,
			entryMode : true
		});
	}

	_onDialogCancel() {
		this.setState({
			photoMode: false,
			entryMode : false
		});

		this.refs.addentry.dismiss();
	}
	_onDialogSubmit() {
		if(this.state.photoMode) {
			showForm();
		} else {
			var props = this.refs.entryForm.refs;

			var obj = {
				"sid": 123,
				"name": props.name.getValue(),
				"image": props.image.props.src,
				"pid": props.barcode.props.value,
				"price": props.price.getValue(),
				"quantity": props.quantity.getValue(),
				"unit": props.unit.getValue()
			};

			console.log(obj);


			this.addStoreToDB(obj);
		}
	}

	onShow() {
		this.setState({photoMode: true});
	}

	render() {
		var photoMode, entryMode, standardActions = [
			  { text: 'Cancel', onClick: this._onDialogCancel.bind(this) },
			  { text: this.state.photoMode ? 'Next' : 'Submit', onClick: this._onDialogSubmit.bind(this), ref: 'submit' }
			];

		if (this.state.photoMode)
			photoMode = <PhotoMode ref="photoMode" parent={this} />;

		if (this.state.entryMode)
			entryMode = <EntryForm ref="entryForm" categories={this.props.categories} entry={this.refs.photoMode.props} />

		return <Dialog className="dialog-ele"
					ref="addentry"
					title="Add new entry"
					actions={standardActions}
					actionFocus="submit"
					modal={this.state.modal}
					onShow={this.onShow.bind(this)}
					dismissOnClickAway={this.state.dismissOnClickAway}>
				{photoMode}
				{entryMode}
			</Dialog>;
	}
}
