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

        <div className="Main-Nav Menu-Choices">
          <ul>
            <MenuElement />
            <MenuElement />
            <MenuElement />
            <MenuElement />
          </ul>
        </div>

      </div>
    )
  }
}