import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Image, Label, Segment, Progress } from 'semantic-ui-react';

export default class Sidebar extends Component {
	render() {
		return (
			<Grid>
			    <Grid.Row>
			    <Grid.Column>
			      <Segment raised>
			        <Label as='a' color='red' ribbon>Обзорище</Label>
			        <span>Карточка</span>
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

ReactDOM.render(
	<Sidebar/>,
	document.querySelector('.sidebar')
)