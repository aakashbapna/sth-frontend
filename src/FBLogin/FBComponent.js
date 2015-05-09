import React from 'react';

export default class extends React.Component {
	componentWillMount() {
		this.props.profile.on('change', () => {
			this.forceUpdate();
		});
	}
	componentWillUnmount() {
		this.props.profile.off('change');
	}
	render() {
		return <div>
			<h1> Facebook logged in </h1>
		</div>;
	}
}
