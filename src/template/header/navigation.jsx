import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import ReactDOM from 'react-dom';

const colorsA = ['red', 'orange', 'yellow', 'olive', 'green', 'teal']

export default class HeaderMenu extends Component {
  state = { activeA: colorsA[0] }

  handleAClick = (e, { name }) => this.setState({ activeA: name })

  render() {
    const { activeA } = this.state

    return (
      <div>
        <Menu inverted>
          {colorsA.map(c => (
            <Menu.Item key={c} name={c} active={activeA === c} color={c} onClick={this.handleAClick} />
          ))}
        </Menu>
      </div>
    )
  }
}


ReactDOM.render(
  <HeaderMenu/>,
  document.querySelector('navigations')
)