import React from 'react';

class Cart_Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    }
  }

  render() {
    let { cartItems } = this.state;

    let cartStatus = (cartItems.length === 0) ? "YOUR BAG IS EMPTY" : `YOUR CART HAS ${cartItems.length} ITEMS`;

    let cartList = (cartItems.length === 0) ? <li>"Free worldwide shipping and easy returns" </li> :
      cartItems.map(item => {
        return (<li>{item}</li>)
      })

    return (
      <div className="cart-menu">
        <div className="cart-status">{cartStatus}</div>
        <div className="cart-list">
          <ul>
            {cartList}
          </ul>
        </div>
      </div>
    )
  }
}

export default Cart_Menu;


