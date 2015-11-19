import ReactDOM from 'react-dom';
import React from 'react';
import Card from './components/card';

let cards = (
  <div>
    <Card value='5' suit='Farts'/>
    <Card value='2' suit='Poops'/>
  </div>
)

ReactDOM.render(cards, document.getElementById('app'));
