const faker = require("faker");

let seedMethods = {
  createMiscPages: () => {
    let miscList = [];

    for (let i = 0; i < 40; i++) {
      let productObj = { page_name: faker.commerce.product() };
      miscList.push(productObj);
    }

    return miscList;
  },

  createProducts: () => {
    let productList = [];

    // creates obj w/ name, price, img
    for (let i = 0; i < data.Contents.length; i++) {
      let productObj = {
        name: faker.commerce.product(),
        price: Math.floor(Math.random() * 100) + 50,
        img: ``,
      };

      productList.push(productObj);
    }

    return productList;
  },
};

module.exports = seedMethods;
