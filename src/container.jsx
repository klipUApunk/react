import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Container } from 'semantic-ui-react';

export default class MyContainer extends React.Component {
  render() {
    return ( 
		<div>
			<Container>
				<header />
				<navigations/>
				<Grid>
					<Grid.Column width={12}>
						<div className="content" />
					</Grid.Column>
					<Grid.Column width={4}>
						<div className="sidebar" />
					</Grid.Column>
				</Grid>
				<footer/>
			</Container>
		</div>
		);
	}
}

ReactDOM.render(
  <MyContainer/>,
  document.querySelector('#root')
);