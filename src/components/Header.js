import React from 'react';
import image from '../images/logo-big.png';

class Logo extends React.Component {
	render() {
		return <div className='logo-big'>
			<img src={image.src} />
		</div>
	}
}

export default class Header extends React.Component {
	render() {
		return <div className='header'>
			<Logo />
		</div>
	}
}
