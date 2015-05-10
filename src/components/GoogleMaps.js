import React from 'react';
import {GoogleMaps, Marker} from 'react-google-maps';

let map;

export default class extends React.Component {
	state = {
		zoom: 16,
		center: {
			lat: this.props.location.lat,
			lng: this.props.location.lng
		}
	}

	_handle_marker_click () {
	    this.setState({
	      zoom: 8,
	      center: this.refs.marker.getPosition(),
	    });
	}

	render() {
		const {props, state} = this,
          {googleMapsApi, ...otherProps} = props;

		return <GoogleMaps
			ref='map'
			containerProps={{
				...otherProps,
				style: {
					height: '300px'
				}
			}}
			googleMapsApi={"undefined" !== typeof google ? google.maps : null}
			zoom={16}
			center={state.center}>
			<Marker ref="marker" position={state.center} title="Click to zoom"
          		onClick={this._handle_marker_click.bind(this)} />
		</GoogleMaps>
	}
}
