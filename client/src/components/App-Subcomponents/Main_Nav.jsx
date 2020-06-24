import React from 'react';
import MenuElement from './Main_Nav-Subcomponents/MenuElement.jsx';
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
            <MenuElement name={"NEW IN"} />
            <MenuElement name={"WOMEN"} />
            <MenuElement name={"MEN"} />
            <MenuElement name={"SALE"} />
          </ul>
        </div>

        <div className="Main-Nav we-are-alo">
          <ul>
            <MenuElement name={"WE ARE ALO"} />
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