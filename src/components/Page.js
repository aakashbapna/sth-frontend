import React from 'react/addons';
import '../styles/stylesheet.less';

export default class extends React.Component {
	render() {
		let {flux} = this.props;
		return <div className="page">
			<h1>Hi!!!</h1>
		</div>;
	}
}
