import React from 'react';
import Women from './Main_Nav-Subcomponents/Women.jsx';
import Men from './Main_Nav-Subcomponents/Men.jsx';
import Accessories from './Main_Nav-Subcomponents/Accessories.jsx';
import We_Are_Alo from './Main_Nav-Subcomponents/We_Are_Alo.jsx';
import Search from './Main_Nav-Subcomponents/Search.jsx';
import Authentication from './Main_Nav-Subcomponents/Authentication.jsx';
import Cart from './Main_Nav-Subcomponents/Cart.jsx';

export default class Main_Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveringOn: null,
      showWomenMenu: false,
      showMenMenu: false,
      showAccessoriesMenu: false,
      showWeAreAloMenu: false
    }
    this.hoveringOver = this.hoveringOver.bind(this);
    this.stopHoveringOver = this.stopHoveringOver.bind(this);
  }

  hoveringOver(e) {
    this.setState({ hoveringOn: [e.target.name] })
    let { hoveringOn } = this.state
    console.log(this.state);

    if (hoveringOn === 'WOMEN') this.setState({ showWomenMenu: true });
    if (hoveringOn === 'MEN') this.setState({ showMenMenu: true });
    if (hoveringOn === 'ACCESSORIES') this.setState({ showAccessoriesMenu: true });
    if (hoveringOn === 'WE ARE ALO') this.setState({ showWeAreAloMenu: true });
  }

  stopHoveringOver() {
    this.setState({
      showWomenMenu: false,
      showMenMenu: false,
      showAccessoriesMenu: false,
      showWeAreAloMenu: false
    });
  }

  render() {
    return (
      <div className="Main-Nav Menu">
        <h5>Main Nav goes here</h5>

        <div id="logo">
          <a href=""> <img src="logo" alt="DISPLAY ALO-YOGA LOGO HERE" /> </a>
        </div>

        <div className="Main-Nav Menu-Choices">
          <ul>
            <li className="main-nav__item"> <a href=""> {"NEW IN"} </a> </li>
            <Women name={"WOMEN"} handleHover={this.handleHover} />
            <Men name={"MEN"} handleHover={this.handleHover} />
            <Accessories
              name={"ACCESSORIES"}
              onMouseOver={(e) => this.handleHover(e)}
              onMouseOut={console.log(this.state)}
              showMenu={this.state.showAccessoriesMenu}
            />
          </ul>
        </div>

        <div className="Main-Nav we-are-alo">
          <ul>
            <We_Are_Alo name={"WE ARE ALO"} handleHover={this.handleHover} />
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