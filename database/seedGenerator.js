const mongoose = require('mongoose');
const { createProducts, createMiscPages } = require('./seed.js')

let url = 'mongodb://localhost/Nav_Bar'; // connect to local DB: "Nav_Bar"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); // get access to DB w/ connecting


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


// seed items into respective models db
let seedItemsIntoModel = (items, model) => {
  let itemList = [];

  // iterates through array of items
  // push each unit into itemsList
  items.forEach(item => {
    let unit = new model(item);
    itemList.push(unit);
  });

  // inserts the itemList into DB
  model.insertMany(itemList, (err) => {
    err ? console.log(err) : console.log('unit was seeded')
  });

  console.log(`${model} has been fully seeded`);
}


// creates list of products
let allProducts = createProducts();

// creates list of pg names in 3 sections
let allPopularSuggestions = createMiscPages();
let allCategories = createMiscPages();
let allPages = createMiscPages();


// seed each items into model
seedItemsIntoModel(allProducts, productModel);
seedItemsIntoModel(allPopularSuggestions, popularSuggestionsModel);
seedItemsIntoModel(allCategories, categoryModel);
seedItemsIntoModel(allPages, pagesModel);