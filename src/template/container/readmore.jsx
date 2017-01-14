import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ReactDOM from 'react-dom';


export default class Readmore extends Component {
	render() {
		return (
			<div>
					 	<Button
					      	color='red'
					      	content='Like'
					      	icon='heart'
		      				label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
		    			/>
						<Button content='Читать далее...' icon='right arrow' labelPosition='right' floated='right' />
			</div>
		);
	}
}

ReactDOM.render(
	<Readmore/>,
	document.querySelector('readmore')
)