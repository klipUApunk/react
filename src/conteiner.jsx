import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

export default class Conteiner extends Component {
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
			<footer />
		</div>
		);
	}
}