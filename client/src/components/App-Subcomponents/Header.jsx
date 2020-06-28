import React from 'react';
import HeaderElement from './Header-Subcomponents/HeaderElement.jsx';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: "SHOP"
    }
    this.headerSelection = this.headerSelection.bind(this);
  }

  // changes selection (in this.state) to name of specific header element
  headerSelection(name) { this.setState({ selection: name }) }

  render() {
    let { selection } = this.state;

    return (
      <div className="header-container">
        <ul className="header-items-list">
          <HeaderElement
            name={'SHOP'}
            selection={selection}
            headerSelection={this.headerSelection}
          />
          <HeaderElement
            name={'ALO MOVES'}
            selection={selection}
            headerSelection={this.headerSelection}
          />
          <HeaderElement
            name={'ALO GIVES'}
            selection={selection}
            headerSelection={this.headerSelection}
          />
          <HeaderElement
            name={'STORES & STUDIOS'}
            selection={selection}
            headerSelection={this.headerSelection}
          />
          <li className="header-message">Free 1-2 Day Shipping to California</li>
        </ul>
      </div>
    )
  }
}