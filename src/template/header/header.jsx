import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Header extends Component {
	render() {
		return (
			<div>
				<logo/>
				<description/>
				<callme/>
			</div>
		);
	}
}

ReactDOM.render(
	<Header/>,
	document.querySelector('header')
)