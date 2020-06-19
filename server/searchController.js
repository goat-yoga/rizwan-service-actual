let model = require('../database/model.js');

let searchController = {
  // fetches full database
  // TODO: figure out how to filter based on search query
  displaySearch: (req, res) => {
    model.fetchSearchData((err, result) => {
      err ? console.log(err) : res.status(200).json(result);
    });
  }
};

module.exports = searchController;