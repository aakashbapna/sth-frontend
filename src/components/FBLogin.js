import React from 'react';

export default class FBLogin extends React.Component {
	componentDidMount() {
		let {flux} = this.props;
		window.fbAsyncInit = function() {
			FB.init({
				appId: process.env.FB_APP_ID,
				cookie: true,
				xfbml: true,
				version: 'v2.3'
			});
			flux.getActions('fb').isLoggedIn();
		};

		// Load FB Api async
		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

	}
	handleClick() {
		console.log(this);
		this.props.flux.getActions('fb').doLogin();
	}
	render() {
		if (this.props.login) {
			return <div>{this.props.auth}</div>
		} else {
			return <button onClick={this.handleClick.bind(this)}>Login</button>
		}
	}
}