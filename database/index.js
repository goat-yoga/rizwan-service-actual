const mongoose = require("mongoose");
const { createProducts, createMiscPages } = require("./seed.js");

let url = "mongodb://localhost/navbar"; // connect to local DB: "navbar"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

let Schema = mongoose.Schema;

let productSchema = new Schema({
  name: String,
  price: Number,
  img: String,
});

let popularSuggestionSchema = new Schema({ page_name: String });
let categorySchema = new Schema({ page_name: String });
let pagesSchema = new Schema({ page_name: String });

let productModel = mongoose.model("Products", productSchema);
let categoryModel = mongoose.model("Category", categorySchema);
let pagesModel = mongoose.model("Pages", pagesSchema);
let popularSuggestionsModel = mongoose.model(
  "Popular_Suggestions",
  popularSuggestionSchema
);

module.exports = {
  productModel,
  categoryModel,
  pagesModel,
  popularSuggestionsModel,
};
