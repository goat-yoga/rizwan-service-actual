import React from 'react';
import Women_Menu from './Women_Menu.jsx'

export default class Women extends React.Component {
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

        {onHover ? <Women_Menu /> : null}
      </li >
    )
  }
}