import React from 'react';
import DefaultCartLogo from './Cart/Cart_NoHover.svg';
import HoverCartLogo from './Cart/Cart_Hover.svg';
import CartMenu from './Cart/CartMenu.jsx';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartOnHover: false
    }
    this.hover = this.hover.bind(this);
    this.noHover = this.noHover.bind(this);
  }

  hover() { this.setState({ cartOnHover: true }) }

  noHover() { this.setState({ cartOnHover: false }) }

  render() {
    let { cartOnHover } = this.state;

    let cartStatus = !cartOnHover ?
      <div className="cart-container"> <DefaultCartLogo /> </div > :
      <div className="cart-container icon-selected"> <HoverCartLogo /><CartMenu /> </div>;

    return (
      <li onMouseOver={this.hover} onMouseLeave={this.noHover}> {cartStatus} </li>
    )
  }
}