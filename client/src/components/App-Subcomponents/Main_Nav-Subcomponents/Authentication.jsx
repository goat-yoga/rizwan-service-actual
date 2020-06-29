import React from 'react';
import NormalAuth from './Authentication/Auth-regular.svg';
import HoveredAuth from './Authentication/Auth-hovered.svg';

export default class Authentication extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }
    this.elementIsClicked = this.elementIsClicked.bind(this);
    this.elementIsNotClicked = this.elementIsNotClicked.bind(this);
  }

  elementIsClicked() { this.setState({ isClicked: true }) }

  elementIsNotClicked() { this.setState({ isClicked: false }) }

  render() {
    let { isClicked } = this.state;

    let AuthStatus =
      (!isClicked) ?
        <div class="auth-logo">
          <NormalAuth />
        </div> :

        <div class="auth-logo selected">
          <HoveredAuth />
        </div>;


    return (
      <li >
        {AuthStatus}
      </li>
    )
  }
}