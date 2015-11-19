import React, { PropTypes } from 'react'

class Card extends React.Component {
  constructor() {
    super()

    this.state = {
      panelClass: "panel-info"
    }

    this._mouseOver = this._mouseOver.bind(this)
  }

  _mouseOver() {
    console.log("MOUSE!")
  }

  componentWillMount() {
    switch (this.props.suit) {
      case 'Farts': this.setState({panelClass:"panel-success"})
      break;
      case 'Poops': this.setState({panelClass:"panel-info"})
      break;
      default:

    }
  }

  render () {
    var c = "panel " + this.state.panelClass

    return (
      <div className="col-md-2">
      <div className={c}>
        <div className="panel-heading text-center">${this.props.value}00,000</div>
        <div
          onMouseOver={this._mouseOver}      
          className="panel-body text-center"
          style={{minHeight: '100px'}}>
          <h3>{this.props.suit}</h3>
        </div>
      </div>
    </div>
    )
  }
}

Card.propTypes = {
  value: PropTypes.string.isRequired,
  suit: PropTypes.string.isRequired
}

export default Card
