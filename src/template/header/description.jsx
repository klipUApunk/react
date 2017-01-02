import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Description extends Component {
	render() {
		return (
			<div>
				<p>
					Это тестовый проект для обучения. Здесь по преждему нечего делать
				</p>
			</div>
		);
	}
}

ReactDOM.render(
	<Description/>,
	document.querySelector('description')
)