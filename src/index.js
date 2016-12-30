import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

import Main from './components/main';
import Conteiner from './conteiner';

import ButtonExampleButton from './UI/ButtonExampleButton';

ReactDOM.render(
  <Conteiner/>,
  document.querySelector('#root')
); 

ReactDOM.render(
  <Main/>,
  document.querySelector('header')
);

ReactDOM.render (
  <ButtonExampleButton/>,
  document.querySelector('footer')
);