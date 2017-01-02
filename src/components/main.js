import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component {
  render() {
    return ( 
		<div id="Main">
		  	<p>Я твой первый абзац!</p>
		</div>
		);
	}
}

ReactDOM.render(
  <Main/>,
  document.querySelector('header')
);