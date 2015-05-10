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
		fetch('/backend',{
			method: 'POST',
			body: storeObj
		}).then(resp => {
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
		if(this.state.photoMode){
			showForm();
		}else{
			addStoreToDB();
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
			entryMode = <EntryForm categories={this.props.categories} entry={this.refs.photoMode.props} />

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
