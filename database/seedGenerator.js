const mongoose = require('mongoose');
const { createProducts, createMiscPages } = require('./seed.js')
const MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://localhost/Nav_Bar'; // connect to DB: "Nav_Bar"
mongoose.connect(url);

let Schema = mongoose.Schema;

// create product schema
let productSchema = new Schema({
  name: String,
  price: Number,
  img: String,
});

// create the 3 misc. section schema
let popularSuggestionSchema = new Schema({ page_name: String });
let categorySchema = new Schema({ page_name: String });
let pagesSchema = new Schema({ page_name: String });

// create model for all products
let productModel = mongoose.model('Products', productSchema);
let popularSuggestionsModel = mongoose.model('Popular_Suggestions', popularSuggestionSchema);
let categoryModel = mongoose.model('Category', categorySchema);
let pagesModel = mongoose.model('Pages', pagesSchema);

// seed products into db
let seedSpecificModel = (items, model) => {
  let itemList = [];

  // iterates through items
  // pushes each unit into array
  items.forEach(item => {
    let unit = new model(item);
    itemList.push(unit);
  });

  // inserts the itemList into DB
  model.insertMany(itemList, (err) => {
    err ? console.log(err) : console.log('unit was seeded')
  });

  console.log("seedSpecificModel complete")
}

// creates list of products
let allProducts = createProducts();

// creates list of pg names in 3 sections
let allPopulatSuggestions = createMiscPages();
let allCategories = createMiscPages();
let allPages = createMiscPages();

seedSpecificModel(allProducts, productModel);
seedSpecificModel(allPopulatSuggestions, popularSuggestionsModel);
seedSpecificModel(allCategories, categoryModel);
seedSpecificModel(allPages, pagesModel);