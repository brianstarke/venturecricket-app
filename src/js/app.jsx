import ReactDOM from 'react-dom';
import React from 'react';
import Card from './components/card';

let cards = (
  <div>
    <Card value='5' suit='One'/>
    <Card value='2' suit='Two'/>
    <Card value='1' suit='Three'/>
    <Card value='10' suit='Four'/>
    <Card value='8' suit='Five'/>
  </div>
)

ReactDOM.render(cards, document.getElementById('app'));
