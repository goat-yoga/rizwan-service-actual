import React from 'react';
import HeaderElement from './Header-Subcomponents/HeaderElement.jsx';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="Header">
        <ul>
          <HeaderElement name={'SHOP'} />
          <HeaderElement name={'ALO MOVES'} />
          <HeaderElement name={'ALO GIVES'} />
          <HeaderElement name={'STORES & STUDIOS'} />
        </ul>
      </div>
    )
  }
}