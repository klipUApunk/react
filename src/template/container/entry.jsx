import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Entry extends React.Component {
  render() {
    return ( 
		<div>
			<p>
				Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезызвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
			</p>
			<p>
				По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых клиентов недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
			</p>
			<readmore/>
		</div>
		);
	}
}

ReactDOM.render(
  <Entry/>,
  document.querySelector('text')
);