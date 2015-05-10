import React from 'react';

import  Quagga from 'quagga';


export default class PhotoMode extends React.Component {
	state = {
		status: "The live cam view will come here:"
	}

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

	    (function(that) {
		    Quagga.onDetected(function(result) {
		        var code = result.codeResult.code,
		        	getImage = function(q) {
		    			// fetch image from google
		        		var query = encodeURI(q);
						fetch('/getProductImage?q=' + query)
						  .then(function(response) {
						    return response.json()
						  }).then(function(json) {
						  	that.props.image = json.responseData.results[0].unescapedUrl;

						  	console.log("product identified.. moving to thenext page...");

						  	that.props.parent.showForm();
						  });
		        	};

		        if (code.length === 12) {
		          code = null;
		        }

		        if (App.lastResult !== code && code !== null) {
		            App.lastResult = code;
					that.setState({status: "Identified barcode value to be " + code});

					fetch('/getProductInfo?find=' + code)
					  .then(function(response) {
					    return response.json()
					  }).then(function(json) {
					  	console.log(json);
					    switch(json.status.code) {
					    	case "200":
								that.props.product = json.product;

					    		that.setState({status: "product found. Trying to fetch image... searchig for: " + json.product.attributes.product});
				    			getImage(json.product.attributes.product);
					    		break;
					    	case "404":
					    		that.setState({status: "product not found"});
					    		break;
					    	default:
					    		that.setState({status: "unrecognized status" + json.status});
					    }
					  }).catch(function(ex) {
					    console.log('parsing failed', ex)
					  })
		        }
		    });
	    })(this);
	}

	render() {
		console.log(this.props);
		return <div id="photoMode">
					<span className="status">{this.state.status}</span>
					<div id="interactive" className="viewport"></div>
				</div>;
	}
}
