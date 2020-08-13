const faker = require("faker");

let seedMethods = {
  createMiscPages: (count) => {
    let miscList = [];

    for (let i = 0; i < 40; i++) {
      let productObj = { page_name: faker.commerce.product() };
      miscList.push(productObj);
    }

    return miscList;
  },

  createProducts: (count) => {
    let productList = [];

    for (let i = 0; i < count; i++) {
      let productObj = {
        name: faker.commerce.product(),
        price: Math.floor(Math.random() * 100) + 50,
        img: `https://loremflickr.com/320/240`,
      };

      productList.push(productObj);
    }

    return productList;
  },
};

module.exports = seedMethods;
