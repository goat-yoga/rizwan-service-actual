import React from 'react';
import MenuElement from './Main_Nav-Subcomponents/MenuElement.jsx';


export default class Main_Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="Main-Nav">
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

      </div>
    )
  }
}