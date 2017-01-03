import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Container } from 'semantic-ui-react';
import { Router, Route, browserHistory, Link } from 'react-router';

export default class IAMFooter extends Component {
	render() {
		return (
			<div>
				<Container>
					<Link to='/footer'>Нажми и увидишь подвал</Link>
				</Container>
			</div>
		);
	}
}
	
ReactDOM.render((
  	<Router history={browserHistory}>
  		<Route path="/" component={IAMFooter} />
  	</Router>
	),	document.querySelector('footer')
);