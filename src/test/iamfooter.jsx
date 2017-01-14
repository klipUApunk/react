import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Container } from 'semantic-ui-react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { Footer } from '../template/footer/footer';

export default class IAMFooter extends Component {
	render() {
		return (
			<div>
				<Container>
					<Link to='footer'>Нажми и увидишь подвал</Link>
					{this.props.children}
				</Container>
			</div>
		);
	}
}
	
ReactDOM.render((
  	<Router history={browserHistory}>
  		<IndexRoute component={IAMFooter} />
  		<Route path="/footer" component={Footer} />
  	</Router>
	),	document.querySelector('footer')
);