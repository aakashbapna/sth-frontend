import React from 'react';
import Header from './components/Header';
import StoreName from './components/StoreName';

export default class Homepage extends React.Component {
	render() {
		return <div className='page'>
			<Header />
			<StoreName flux={this.props.flux} />
		</div>;
	}
}
