import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Image, Label, Segment, Progress } from 'semantic-ui-react';
import { Router, Route, browserHistory } from 'react-router';

export default class Sidebar extends Component {
	render() {
		return (
			<Grid>
			    <Grid.Row>
				    <Grid.Column>
				      <Segment raised>
				        <Label as='a' color='red' ribbon>Обзорище</Label>
				        <span>Карточка </span>
				        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
				      </Segment>
				    </Grid.Column>
				</Grid.Row>
			    <Grid.Row>
			      	<Grid.Column>
			        	<Segment padded>
			          		<Label attached='top'>HTML</Label>
			          		<Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
			        	</Segment>

			        	<Segment inverted>
			          		<Progress percent={93} error label>
    							Ошибка
  							</Progress>
  						</Segment>
			      	</Grid.Column>
				</Grid.Row>      
			</Grid>
		);
	}
}

ReactDOM.render((
	  	<Router history={browserHistory}>
	  		<Route path="/" component={Sidebar}> 
	    		<Route path="sidebar" component={Sidebar} />
	    	</Route>
	  	</Router> 
	),
	document.querySelector('.sidebar')
);