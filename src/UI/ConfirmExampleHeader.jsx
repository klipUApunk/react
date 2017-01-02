import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'
import ReactDOM from 'react-dom';

export default class ConfirmExampleHeader extends Component {
  state = { open: false }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <Button onClick={this.show}>Заказать звонок</Button>
        <Confirm
          open={this.state.open}
          header='Выплывашка'
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}

ReactDOM.render (
  <ConfirmExampleHeader/>,
  document.querySelector('#root .content')
)