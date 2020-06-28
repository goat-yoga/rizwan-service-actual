import React from 'react';
import HeaderElement from './Header-Subcomponents/HeaderElement.jsx';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="header-container">
        <ul className="header-items-list">
          <HeaderElement name={'SHOP'} />
          <HeaderElement name={'ALO MOVES'} />
          <HeaderElement name={'ALO GIVES'} />
          <HeaderElement name={'STORES & STUDIOS'} />
          <li className="header-item">Free 1-2 Day Shipping to California</li>
        </ul>
      </div>
    )
  }
}