import React from 'react';
import Alo_Menu from './Menus/We_Are_Alo_Menu.jsx';

export default class We_Are_Alo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onHover: false
    }
    this.handleHover = this.handleHover.bind(this);
    this.outOfHover = this.outOfHover.bind(this);
  }

  handleHover() { this.setState({ onHover: true }) }

  outOfHover() { this.setState({ onHover: false }) }

  render() {
    let { onHover } = this.state;

    let menu = onHover ? <div className="main-nav__menu"
      onMouseEnter={this.handleHover}
    >
      <Alo_Menu />
    </div > : <div className="main-nav__menu"></div>

    return (
      <li className="main-nav__item"
        onMouseOver={this.handleHover}
        onMouseLeave={this.outOfHover}>

        <a href="">{this.props.name}</a>

        {menu}
      </li >
    )
  }
}