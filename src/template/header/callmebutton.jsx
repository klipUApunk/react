import React from 'react'
import { Button, Header, Modal, Divider, Form } from 'semantic-ui-react'
import ReactDOM from 'react-dom';

const sizes = 'small';

const Callme = () => (
  <Modal trigger={<Button>Заказать звонок</Button>}>
    <Modal.Header>Введите телефон и имя</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Перезвоним за 15 минут</Header>
        <div className="popupform">
        	<div>
		      	<Form>
		        	<Form.Group widths='equal'>
		          		<Form.Field label='Имя' control='input' placeholder='Ваше имя' />
		          		<Form.Field label='Телефон' control='input' placeholder='Телефон для связи' />
		        	</Form.Group>
		        	<Button primary type='submit'>Получить</Button>
		        	<Divider hidden />
		      	</Form>
			</div>
        </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Callme;

ReactDOM.render(
	<Callme/>,
	document.querySelector('callme')
)