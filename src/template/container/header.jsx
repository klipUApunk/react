import React from 'react'
import { Header } from 'semantic-ui-react'
import ReactDOM from 'react-dom';

const Header1 = () => (
  <div>
    <Header as='h1'>Главная страница</Header>
  </div>
)

export default Header1;

ReactDOM.render(
	<Header1/>,
	document.querySelector('header1')
)