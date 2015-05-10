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

	_onDialogSubmit(){
		this.setState({
			photoMode: false,
			entryMode : true
		});
	}

	onShow() {
		this.setState({photoMode: true});
	}

	render() {
		var photoMode, entryMode, standardActions = [
			  { text: 'Cancel' },
			  { text: 'Next', onClick: this._onDialogSubmit.bind(this), ref: 'submit' }
			];

		if (this.state.photoMode)
			photoMode = <PhotoMode ref="photoMode" />;

		if (this.state.entryMode)
			entryMode = <EntryForm categories={this.props.categories} />

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
