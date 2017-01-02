import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ReactDOM from 'react-dom';

const ButtonExampleButton = () => (
  <div>
  <Button onClick="" type="submit">
    Жми
  </Button>
  <p>Привет </p>
  </div>
)

export default ButtonExampleButton;

ReactDOM.render (
  <ButtonExampleButton/>,
  document.querySelector('footer')
);