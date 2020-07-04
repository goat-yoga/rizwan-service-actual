import React from 'react';
import Logo from './Logo.jsx';
import Women from './Main_Nav-Comp/Women.jsx';
import Men from './Main_Nav-Comp/Men.jsx';
import Accessories from './Main_Nav-Comp/Accessories.jsx';
import We_Are_Alo from './Main_Nav-Comp/We_Are_Alo.jsx';
import Search from './Main_Nav-Comp/Search.jsx';
import Authentication from './Main_Nav-Comp/Authentication.jsx';
import Cart from './Main_Nav-Comp/Cart.jsx';

export default class Main_Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="main-nav-container">

        <div className="main-nav-logo">
          <Logo />
        </div>

        <div className="menu">
          <ul className="menu-list">

            <li className="main-nav__title">
              <a className="main-nav__title-name new-in" href="">NEW IN</a>
            </li>

            <Women name={"WOMEN"} />
            <Men name={"MEN"} />
            <Accessories name={"ACCESSORIES"} />
          </ul>
        </div>

        <div className="Main-Nav navbar-icons">
          <ul className="nav-icons-list">
            <We_Are_Alo name={"WE ARE ALO"} />
            <Search />
            <Authentication />
            <Cart />
          </ul>
        </div>

      </div >
    )
  }
}