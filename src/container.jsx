import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Container } from 'semantic-ui-react';


export default class MyContainer extends Component {
  render() {
    return ( 
		<div>
			<header />
			
			<Container>
				<navigations/>
				<Grid>
					<Grid.Column width={12}>
						<div className="content" />
					</Grid.Column>
					<Grid.Column width={4}>
						<div className="sidebar" />
					</Grid.Column>
				</Grid>
			</Container>
			
			<footer/>
		</div>
		);
	}
}

ReactDOM.render(
  <MyContainer/>,
  document.querySelector('#root')
);