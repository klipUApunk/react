import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
	render() {
		return (
			<div>
				<Container>
					<p>Я подвал</p>
					<p>Назад</p>
				</Container>
			</div>
		);
	}
}

ReactDOM.render(
	<Footer/>,
	document.querySelector('footer')
);