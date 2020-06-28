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
    this.headerSelected = this.headerSelected.bind(this);
  }

  headerSelected(headerItem, selection) {
    if (headerItem === "SHOP") selection = 'selectShop';
    if (headerItem === "ALO MOVES") selection = 'selectAloMoves';
    if (headerItem === "ALO GIVES") selection = 'selectAloGives';
    if (headerItem === "STORES & STUDIOS") selection = 'selectStores';

    this.setState({
      selectShop: false,
      selectAloMoves: false,
      selectAloGives: false,
      selectStores: false
    })

    this.setState({ selection: true }, () => { console.log(this.state) })
  }

  render() {
    let { selectShop, selectAloMoves, selectAloGives, selectStores } = this.state;

    return (
      <div className="header-container">
        <ul className="header-items-list">
          <HeaderElement
            name={'SHOP'}
            selected={selectShop}
            headerSelected={this.headerSelected}
          />
          <HeaderElement
            name={'ALO MOVES'}
            selected={selectAloMoves}
            headerSelected={this.headerSelected}
          />
          <HeaderElement
            name={'ALO GIVES'}
            selected={selectAloGives}
            headerSelected={this.headerSelected}
          />
          <HeaderElement
            name={'STORES & STUDIOS'}
            selected={selectStores}
            headerSelected={this.headerSelected}
          />
          <li className="header-message">Free 1-2 Day Shipping to California</li>
        </ul>
      </div>
    )
  }
}