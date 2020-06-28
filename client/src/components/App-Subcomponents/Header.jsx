import React from 'react';
import HeaderElement from './Header-Subcomponents/HeaderElement.jsx';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectShop: true,
      selectAloMoves: false,
      selectAloGives: false,
      selectStores: false
    }
  }

  render() {
    return (
      <div className="header-container">
        <ul className="header-items-list">
          <HeaderElement name={'SHOP'} selected={true} />
          <HeaderElement name={'ALO MOVES'} selected={false} />
          <HeaderElement name={'ALO GIVES'} selected={false} />
          <HeaderElement name={'STORES & STUDIOS'} selected={false} />
          <li className="header-message">Free 1-2 Day Shipping to California</li>
        </ul>
      </div>
    )
  }
}