import React from 'react';
import NormalAuth from './Authentication/Auth-regular.svg';
import HoveredAuth from './Authentication/Auth-hovered.svg';
import AuthMenu from './Authentication/AuthMenu.jsx';

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
  elementIsNotClicked() { this.setState({ isClicked: false }, () => console.log(this.state)) }

  render() {
    let { isClicked } = this.state;

    let AuthStatus = (!isClicked) ?
      <div>
        <div className="auth-logo" onClick={this.elementIsClicked}>
          <NormalAuth />
        </div>
        <div className="auth-menu-container hidden"></div>
      </div> :

      <div>
        <div className="auth-logo icon-selected" onClick={this.elementIsNotClicked}>
          <HoveredAuth />
        </div>
        <div className="auth-menu-container"> <AuthMenu /> </div>
      </div>;

    return (
      <li>
        {AuthStatus}
      </li>
    )
  }

}