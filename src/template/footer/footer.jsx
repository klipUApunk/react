import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

export default class Footer extends Component {
	render() {
		return (
			<div>
				<Container>
					<p>Я подвал</p>
					<Link to="/">Home</Link>
				</Container>
			</div>
		);
	}
}

ReactDOM.render((
  	<Router history={browserHistory}>
  		<Route path="/footer" component={Footer} />
  	</Router>
	),	document.querySelector('footer')
);