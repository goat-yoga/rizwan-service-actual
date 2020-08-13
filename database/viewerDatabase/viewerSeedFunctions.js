const faker = require("faker");
const mongoose = require("mongoose");
const { createMiscPages, createProducts } = require("../seed.js");
const {
  productModel,
  popularSuggestionsModel,
  categoryModel,
  pagesModel,
} = require("../index.js");

let url = "mongodb://localhost/navbar";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

let seedItemsIntoModel = (items, model) => {
  let itemList = [];

  items.forEach((item) => {
    let unit = new model(item);
    itemList.push(unit);
  });

  model.insertMany(itemList, (err) => {
    err ? console.log(err) : console.log("unit was seeded");
  });
};

// create list to be inserted into DB
let allProducts = createProducts(100);
let allPopularSuggestions = createMiscPages(30);
let allCategories = createMiscPages(30);
let allPages = createMiscPages(30);

// seed list of items
seedItemsIntoModel(allProducts, productModel);
seedItemsIntoModel(allPopularSuggestions, popularSuggestionsModel);
seedItemsIntoModel(allCategories, categoryModel);
seedItemsIntoModel(allPages, pagesModel);
