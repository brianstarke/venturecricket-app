import ReactDOM from 'react-dom';
import React from 'react';
import Card from './components/card';

let piles = (
  <div>
    <div className="col-md-2">
      <div className="panel panel-success">
        <div className="panel-heading text-center">One</div>
      </div>
      <div className="panel panel-success">
        <div className="panel-heading text-center">$10,000</div>
      </div>
    </div>

    <div className="col-md-2">
      <div className="panel panel-info">
        <div className="panel-heading text-center">Two</div>
      </div>
    </div>

    <div className="col-md-2">
      <div className="panel panel-warning">
        <div className="panel-heading text-center">Three</div>
      </div>
    </div>

    <div className="col-md-2">
      <div className="panel panel-danger">
        <div className="panel-heading text-center">Four</div>
      </div>
    </div>

    <div className="col-md-2">
      <div className="panel panel-primary">
        <div className="panel-heading text-center">Five</div>
      </div>
    </div>
  </div>
)

let cards = (
  <div>
  <div className="row">
    <h3>opponent side</h3>
  </div>
  <div className="row">
    {piles}
    <div>
      <Card value='6' suit='Three'/>
    </div>
  </div>
  <div className="row">
    <Card value='5' suit='One'/>
    <Card value='2' suit='Two'/>
    <Card value='1' suit='Three'/>
    <Card value='10' suit='Four'/>
    <Card value='8' suit='Five'/>
  </div>
</div>
)

ReactDOM.render(cards, document.getElementById('app'));
