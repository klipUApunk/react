import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import ReactDOM from 'react-dom';


export default class Readmore extends Component {
	render() {
		return (
			<div>
				<Grid >
					<Grid.Column width={4}>
					 	<Button
					      	color='red'
					      	content='Like'
					      	icon='heart'
		      				label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
		    			/>
					</Grid.Column>
					<Grid.Column width={4}>
						<Button content='Читать далее...' icon='right arrow' labelPosition='right' />
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

ReactDOM.render(
	<Readmore/>,
	document.querySelector('readmore')
)