const { productModel, popularSuggestionsModel, categoryModel, pagesModel } = require('./index.js');

let model = {
  // fetches search result
  fetchSearchData: (body, callback) => {
    let { search } = body
    // stores search data here
    let searchData = {}

    // adds products from DB to searchData
    productModel.find({
      name: {
        $regex: `${search}`,
        $options: 'i'
      }
    }).limit(3).exec()
      .then((results) => {
        searchData.products = results;
      })
      .then(() => {
        pagesModel.find({
          page_name: {
            $regex: `${search}`,
            $options: 'i'
          }
        }).limit(3).exec()
          .then((results) => {
            searchData.pages = results;
          })
          .then()

      })
      .catch(err => console.log(err))

    // console.log(searchData)
    // // adds pages from DB to searchData
    // pagesModel.find({
    //   page_name: {
    //     $regex: `${search}`,
    //     $options: 'i'
    //   }
    // }).limit(3)
    //   .exec((err, result) => {
    //     err ? callback(err, null) : searchData.pages = result
    //   })

    // // adds category from DB to searchData
    // categoryModel.find({
    //   page_name: {
    //     $regex: `${search}`,
    //     $options: 'i'
    //   }
    // }).limit(3)
    //   .exec((err, result) => {
    //     err ? callback(err, null) : searchData.categories = result
    //   })

    // // adds pages from DB to searchData
    // popularSuggestionsModel.find({
    //   page_name: {
    //     $regex: `${search}`,
    //     $options: 'i'
    //   }
    // }).limit(3)
    //   .exec((err, result) => {
    //     err ? callback(err, null) : searchData.popularSuggestions = result
    //   })
  }
};

model.fetchSearchData({ search: 'ba' }, (err, searchResults) => {
  err ? console.log(err) : res.status(200).json(searchResults);
})

module.exports = model;

