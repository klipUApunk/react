import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Content extends Component {
  render() {
    return ( 
		<div>
			<header1 />
			<text/>
		</div>
		);
	}
}

ReactDOM.render(
  <Content/>,
  document.querySelector('.content')
);