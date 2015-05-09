import '../styles/stylesheet.less';
import React from 'react/addons';
import FBLogin from './FBLogin';

export default class extends React.Component {
	render() {
		let {flux} = this.props;
		return <div>
			<FBLogin flux={flux}/>
		</div>
	}
}
