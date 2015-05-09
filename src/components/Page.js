import React from 'react/addons';
import '../styles/stylesheet.less';

export default class extends React.Component {
	render() {
		let {flux} = this.props;
		console.log(flux);
		return <div className="page">
			<h1>Hi!!!</h1>
		</div>;
	}
}
