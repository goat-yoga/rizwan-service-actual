import React from 'react';
import Acc_Menu from './Accessories_Menu.jsx'

export default class Accessories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onHover: false
    }
    this.displayMenu = this.displayMenu.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  displayMenu() {
    if (this.state.onHover) {
      <Acc_Menu />
    }
  }

  componentDidUpdate(props) {
    this.displayMenu();
  }

  handleHover() {
    this.setState({ onHover: !this.state.onHover })
  }

  render() {
    return (
      <li className="main-nav__item"
        onMouseOver={this.handleHover}
        onMouseOut={this.handleHover}>
        <a href="">{this.props.name}</a>

        <div className="main-nav__column"> </div>
      </li >
    )
  }
}