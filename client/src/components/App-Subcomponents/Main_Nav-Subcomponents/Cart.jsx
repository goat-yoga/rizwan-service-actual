import React from 'react';
import DefaultCartLogo from './Cart/Cart_NoHover.svg';
import HoverCartLogo from './Cart/Cart_Hover.svg';


export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartOnHover: false
    }
    this.hoveringOverCart = this.hoveringOverCart.bind(this);
  }

  hoveringOverCart() { this.setState({ cartOnHover: false }) }

  notHoveringOnCart() { this.setState({ cartOnHover: true }) }

  render() {
    return (
      <li>
        <DefaultCartLogo />
        <HoverCartLogo />
      </li>
    )
  }
}