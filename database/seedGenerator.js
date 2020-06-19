const mongoose = require('mongoose');
const { createProduct, createMiscPages } = require('./seed.js')
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




// creates and connects to client.
// have access to DB
var conn = MongoClient.connect(url) // returns a Promise

module.exports = conn;