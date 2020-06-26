import React from 'react';
import Accessories_Menu from './Accessories_Menu.jsx'

export default class Accessories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onHover: false
    }
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState({ onHover: !this.state.onHover })
  }

  render() {
    let { onHover } = this.state;
    return (
      <li className="main-nav__item"
        onMouseOver={this.handleHover}
        onMouseOut={this.handleHover}>
        <a href="">{this.props.name}</a>

        {onHover ? <Accessories_Menu /> : null}
      </li >
    )
  }
}