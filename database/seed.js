const faker = require('faker');

// create 100 products
let createProduct = () => {
  let array = [];

  // creates obj w/ fake names, price btw/ 50-150 & img
  for (let i = 0; i < 100; i++) {

    let productObj = {
      name: faker.commerce.product(),
      price: Math.floor(Math.random() * 100) + 50,
      img: faker.image.fashion()
    };

    array.push(productObj);
  }

  return array;
}

// create 15 pages for popular suggestions
// create 15 pages for category
// create 15 pages for pages
let createMiscPages = () => {
  let array = [];

  // creates obj w/ fake data,
  for (let i = 0; i < 15; i++) {

    let productObj = {
      page_name: faker.commerce.product(),
    };

    array.push(productObj);
  }

  return array;
}

// create obj holding created methods
let seedMethods = { createProduct, createMiscPages }

module.exports = seedMethods;