import React from 'react';

const Men_Menu = (props) => {
  return (
    <div className="main-nav__menu">

      <div className="main-nav__column">
        <a href="">Get Inspired</a>

        <ul>
          <li className="main-nav__item">
            <a href="">New Arrivals</a></li>
          <li className="main-nav__item">
            <a href="">Bestsellers</a></li>
          <li className="main-nav__item">
            <a href="">Lounge Shop</a></li>
          <li className="main-nav__item special-sale">
            <a href="">Sale</a></li>
        </ul>
      </div>

      <div className="main-nav__column">
        <a href="">Tops</a>

        <ul>
          <li className="main-nav__item">
            <a href="">Short Sleeves</a></li>
          <li className="main-nav__item">
            <a href="">Long Sleeves</a></li>
          <li className="main-nav__item">
            <a href="">Tanks</a></li>
        </ul>
      </div>

      <div className="main-nav__column">
        <a href="">Bottoms</a>

        <ul>
          <li className="main-nav__item">
            <a href="">Shorts</a></li>
          <li className="main-nav__item">
            <a href="">Pants</a></li>
          <li className="main-nav__item">
            <a href="">Sweats & Lounge</a></li>
          <li className="main-nav__item">
            <a href="">Underwear</a></li>
        </ul>
      </div>

      <div className="main-nav__column">
        <a href="">Outerwear</a>

        <ul>
          <li className="main-nav__item">
            <a href="">Sweatshirt</a></li>
          <li className="main-nav__item">
            <a href="">Jackets</a></li>
        </ul>

      </div>

      <div className="main-nav__column">
        <a href="">Accessories</a>

        <ul>
          <li className="main-nav__item">
            <a href="">Yoga Mats & Essentials</a></li>
          <li className="main-nav__item">
            <a href="">Bags</a></li>
          <li className="main-nav__item">
            <a href="">Hats & Hair Accessories</a></li>
          <li className="main-nav__item">
            <a href="">Shoes & Socks</a></li>
          <li className="main-nav__item">
            <a href="">Books</a></li>
          <li className="main-nav__item">
            <a href="">Gift Card</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Men_Menu;