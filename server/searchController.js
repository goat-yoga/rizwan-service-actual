let model = require('../database/model.js');

let searchController = {
  displayNav: (req, res) => {
    model.getNavComponents((something) => {
      // TODO: access model to display Nav
    });
  }
};

module.exports = searchController;