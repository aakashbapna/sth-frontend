import React from 'react/addons';
import '../styles/stylesheet.less';
import FluxComponent from 'flummox/component';

import FBLogin from './FBLogin';

export default class extends React.Component {
	render() {
		let {flux} = this.props;
		return <FluxComponent flux={flux} connectToStores={['fb']}>
			<FBLogin/>
		</FluxComponent>
	}
}
