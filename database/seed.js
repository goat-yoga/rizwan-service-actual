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

  seedItemsIntoModel: (items, model) => {
    let itemList = [];

    items.forEach((item) => {
      let unit = new model(item);
      itemList.push(unit);
    });

    model.insertMany(itemList, (err) => {
      err ? console.log(err) : console.log("unit was seeded");
    });
  },
};

module.exports = seedMethods;
