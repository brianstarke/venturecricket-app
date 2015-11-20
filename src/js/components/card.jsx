import React, { PropTypes } from 'react'

class Card extends React.Component {
  constructor() {
    super()

    this.state = {
      panelClass: "panel-info"
    }

    this._mouseOver = this._mouseOver.bind(this)
    this._mouseOut = this._mouseOut.bind(this)
  }

  _mouseOver() {
    document.getElementById(this.state.cardId).style.visibility = 'visible';
  }

  _mouseOut() {
    document.getElementById(this.state.cardId).style.visibility = 'hidden';
  }

  componentWillMount() {
    switch (this.props.suit) {
      case 'One': this.setState({panelClass:"panel-success"})
      break;
      case 'Two': this.setState({panelClass:"panel-info"})
      break;
      case 'Three': this.setState({panelClass:"panel-warning"})
      break;
      case 'Four': this.setState({panelClass:"panel-danger"})
      break;
      case 'Five': this.setState({panelClass:"panel-primary"})
      break;
      default:
    }

    this.setState({
      cardId: this.props.suit + '-' + this.props.value
    })
  }

  render () {
    var c = "panel " + this.state.panelClass

    return (
      <div className="col-md-2">
      <div className={c}>
        <div className="panel-heading text-center">${this.props.value}0,000</div>
        <div
          onMouseOver={this._mouseOver}
          onMouseOut={this._mouseOut}
          className="panel-body text-center"
          style={{minHeight: '120px'}}>
          <h3>{this.props.suit}</h3>
          <div id={this.state.cardId} style={{visibility:"hidden"}}>
            <button className="btn btn-success btn-xs">Play</button>
            <button className="btn btn-danger btn-xs">Discard</button>
          </div>
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
