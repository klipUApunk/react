import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ReactDOM from 'react-dom';

const ButtonExampleButton = () => (
  <Button>
    Click Here
  </Button>
)

ReactDOM.render (
  <ButtonExampleButton/>,
  document.querySelector('footer')
);
