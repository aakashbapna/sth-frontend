import React from 'react';
import NavMenu from 'material-design-icons/navigation/1x_web/ic_menu_white_24dp.png';
import {IconButton} from 'material-ui';

class Logo extends React.Component {
	render() {
		return <div>
			<IconButton className='icon-navigation'/>
			<h1 className='logo-big'>Get Local</h1>
		</div>
	}
}

export default class Header extends React.Component {
	render() {
		return <div className='header'>
			<style>
				{
					`
					.icon-navigation {
						background-image: url(${NavMenu.src});
						background-size: 24px 24px;
						background-repeat: no-repeat;
						background-position: center center;
					}
					`
				}
			</style>
			<Logo />
		</div>
	}
}
