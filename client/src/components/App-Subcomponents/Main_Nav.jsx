import React from 'react';
import Women from './Main_Nav-Subcomponents/Women.jsx';
import Men from './Main_Nav-Subcomponents/Men.jsx';
import Accessories from './Main_Nav-Subcomponents/Accessories.jsx';
import Search from './Main_Nav-Subcomponents/Search.jsx';
import Authentication from './Main_Nav-Subcomponents/Authentication.jsx';
import Cart from './Main_Nav-Subcomponents/Cart.jsx';

export default class Main_Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="Main-Nav Menu">
        <h5>Main Nav goes here</h5>

        <div id="logo">
          <img src="logo" alt="DISPLAY ALO-YOGA LOGO HERE" />
        </div>

        <div className="Main-Nav Menu-Choices">
          <ul>
            <li className="main-nav__item"> {"NEW IN"} </li>
            <Women name={"WOMEN"} />
            <Men name={"MEN"} />
            <Accessories name={"ACCESSORIES"} />
          </ul>
        </div>

        <div className="Main-Nav we-are-alo">
          <ul>
            <li className="main-nav__item"> {"WE ARE ALO"} </li>
          </ul>
        </div>

        <div className="Main-Nav Navbar-icons">
          <ul>
            <Search />
            <Authentication />
            <Cart />
          </ul>
        </div>

      </div>
    )
  }
}