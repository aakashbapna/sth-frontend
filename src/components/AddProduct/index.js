import React from 'react';
import {DropDownMenu, TextField, Checkbox, Dialog} from 'material-ui';

import EntryForm from './form'
import PhotoMode from './photoMode'


export default class AddProduct extends React.Component {
	state = {
		dismissOnClickAway: true,
		modal: false,
		photoMode: false
	}

	onShow() {
		this.setState({photoMode: true});
	}

	render() {
		var photoMode, standardActions = [
			  { text: 'Cancel' },
			  { text: 'Submit', onClick: this._onDialogSubmit, ref: 'submit' }
			];

		// if (this.state.photoMode)
		// 	photoMode = <PhotoMode ref="photoMode" />;

		return <Dialog
					ref="addentry"
					title="Add new entry"
					actions={standardActions}
					actionFocus="submit"
					modal={this.state.modal}
					onShow={this.onShow.bind(this)}
					dismissOnClickAway={this.state.dismissOnClickAway}>
				{photoMode}
				<EntryForm categories={this.props.categories} />
			</Dialog>;
	}
}
