import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid } from 'semantic-ui-react';

export default class Conteiner extends React.Component {
  render() {
    return ( 
		<div>
			<header />
			<Grid columns={3}>
				<Grid.Column>
					<div className="content" />
				</Grid.Column>
				<Grid.Column>
					<div className="sidebar" />
				</Grid.Column>
			</Grid>
			<footer/>
		</div>
		);
	}
}

ReactDOM.render(
  <Conteiner/>,
  document.querySelector('#root')
); 