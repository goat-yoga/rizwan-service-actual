let model = require('../database/model.js');

let searchController = {
  // fetches full database
  // TODO: figure out how to filter based on search query
  displaySearch: (req, res) => {
    model.fetchSearchData((err, searchResults) => {
      err ? console.log(err) : res.status(200).json(searchResults);
    });
  }
};

module.exports = searchController;