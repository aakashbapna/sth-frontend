import '../styles/stylesheet.less';
import React from 'react/addons';
import FluxComponent from 'flummox/component';
import FBLogin from './FBLogin';
import {Dialog} from 'material-ui';

export default class extends React.Component {
	componentDidMount() {
		let {flux} = this.props;
		window.fbLoaded.then(function() {
			flux.getActions('fb').isLoggedIn();
			flux.getActions('signup').setLocation();
		});
	}
	render() {
		return <FluxComponent flux={this.props.flux} connectToStores={{
			fb: store => {
				return store.state;
			},
			signup: store => {
				return {
					signup: store.state
				}
			}
		}}>
			<FBLogin/>
		</FluxComponent>;
	}
}
