import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Container } from 'semantic-ui-react';

export default class Footer extends Component {
	render() {
		return (
			<div>
				<Container>
					<p>Я подвал </p>
				</Container>
			</div>
		);
	}
}

ReactDOM.render(
	<Footer/>,
	document.querySelector('footer')
)