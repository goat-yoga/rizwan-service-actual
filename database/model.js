const { productModel, popularSuggestionsModel, categoryModel, pagesModel } = require('./index.js');

let model = {
  fetchSearchData: (callback) => {
    productModel.find({})
      .exec((err, result) => {
        err ? callback(err, null) : callback(null, result)
      })
  }
};

module.exports = model;