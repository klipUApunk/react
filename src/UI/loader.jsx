import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import ReactDOM from 'react-dom';

const LoaderExampleText = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader>Ждем</Loader>
      </Dimmer>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active inverted>
        <Loader inverted>Загрузка</Loader>
      </Dimmer>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderExampleText;

ReactDOM.render (
  <LoaderExampleText/>,
  document.querySelector('.sidebar')
);
