import React from 'react';

import  Quagga from 'quagga';


export default class PhotoMode extends React.Component {
	componentDidMount() {
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
		return <div>The live cam view will come here:
					<div id="interactive" className="viewport"></div>
				</div>;
	}
}
