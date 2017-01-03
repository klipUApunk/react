import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../../images/logo.png';
import { IndexRoute, Link } from 'react-router';

export default class Logo extends Component {
	render() {
		return (
			<div>
				<Link to={IndexRoute}>KJDGH</Link>	 
				<a href="/" title="Test Project">
					<img src={logo} title="logo" alt="logo" />
				</a>
			</div>
		);
	}
}

ReactDOM.render(
	<Logo/>,
	document.querySelector('logo')
)