import React from 'react';
import {GoogleMaps, Marker} from 'react-google-maps';

let map;

export default class extends React.Component {
	state = {
		marker: {
			lat: this.props.location.lat,
			lng: this.props.location.lng
		}
	}
	render() {
		return <GoogleMaps
			ref='map'
			containerProps={{
				style: {
					height: '300px'
				}
			}}
			googleMapsApi={"undefined" !== typeof google ? google.maps : null}
			zoom={16}
			center={this.props.location}>
		</GoogleMaps>
	}
}
