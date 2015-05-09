import React from 'react';
import {DropDownMenu, TextField, Checkbox, Dialog} from 'material-ui';

import  Quagga from 'quagga';


class Delivery extends React.Component {
	render() {
		return <div>
			<Checkbox name="pickup" value="checkboxValue1" label="Pickup" />
			<Checkbox name="delivery" value="checkboxValue1" label="Delivery" />
		</div>
	}
}

class EntryForm extends React.Component {
	render() {
		return <div>
			<div> 
				<span className="title"> Product category </span>
				<DropDownMenu menuItems={this.props.categories} /> 
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

class PhotoMode extends React.Component {
	render() {
		return <div>The live cam view will come here:
					<div id="interactive" className="viewport"></div>
				</div>;
	}
}

export default class AddEntry extends React.Component {
	state = {
		dismissOnClickAway: true,
		modal: false,
	}

	onShow() {
		var App = {lastResult: null};
	    var state = {
	        inputStream: {
	            type : "LiveStream",
	            constraints: {
	                width: 640,
	                height: 280,
	                facing: "environment" // or user
	            }
	        },
	        locator: {
	            patchSize: "medium",
	            halfSample: true
	        },
	        numOfWorkers: 4,
	        decoder: {
	            readers : ["ean_reader"]
	        },
	        locate: true
	    };

		Quagga.init(state, function() {
			Quagga.start();
		});

	    Quagga.onProcessed(function(result) {

	        var drawingCtx = Quagga.canvas.ctx.overlay,
	            drawingCanvas = Quagga.canvas.dom.overlay;

	        if (result) {
	            if (result.boxes) {
	                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
	                result.boxes.filter(function (box) {
	                    return box !== result.box;
	                }).forEach(function (box) {
	                    Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
	                });
	            }

	            if (result.box) {
	                Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
	            }

	            if (result.codeResult && result.codeResult.code) {
	                Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
	            }
	        }
	    });
	    Quagga.onDetected(function(result) {
	        var code = result.codeResult.code;

	        if (code.length === 12) {
	          code = null;
	        }

	        if (App.lastResult !== code && code !== null) {
	            App.lastResult = code;
	            console.log(code);
	        }
	    });

	}

	render() {
		var standardActions = [
		  { text: 'Cancel' },
		  { text: 'Submit', onClick: this._onDialogSubmit, ref: 'submit' }
		];

		var showDialog = function() {
			console.log("helo");
		};

		console.log(this.refs);

		return <Dialog
					ref="addentry"
					title="Add new entry"
					actions={standardActions}
					actionFocus="submit"
					modal={this.state.modal}
					onShow={this.onShow}
					dismissOnClickAway={this.state.dismissOnClickAway}>
				<PhotoMode />
			</Dialog>;
	}
}
