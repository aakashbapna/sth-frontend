import React from 'react';

import  Quagga from 'quagga';


export default class PhotoMode extends React.Component {
	componentWillUnmount(){
		Quagga.stop();
	}

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
	        var code = result.codeResult.code,
	        	getImage = function(q) {
	        		var query = encodeURI(q);
					fetch('/getProductImage?q=' + query)
					  .then(function(response) {
					    return response.json()
					  }).then(function(json) {
					  	console.log(json.responseData.results[0].unescapedUrl);
					  });
	        	};

	        if (code.length === 12) {
	          code = null;
	        }

	        if (App.lastResult !== code && code !== null) {
	            App.lastResult = code;
	            console.log(code);

				fetch('/getProductInfo?find=' + code)
				  .then(function(response) {
				    return response.json()
				  }).then(function(json) {
				    switch(json.status.code) {
				    	case "200":
				    		if(json.product.image !== null) {
				    			console.log("searchig for: " + json.product.attributes.product);
				    			// fetch image from google
				    			getImage(json.product.attributes.product);
				    		}
				    		break;
				    	case "404":
				    		console.log("product not found");
				    		break;
				    	default:
				    		console.log("unrecognized status" + json.status);
				    }
				  }).catch(function(ex) {
				    console.log('parsing failed', ex)
				  })
	        }
	    });
	}

	render() {
		return <div>The live cam view will come here:
					<div id="interactive" className="viewport"></div>
				</div>;
	}
}
