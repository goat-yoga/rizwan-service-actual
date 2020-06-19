let model = require('../database/model.js');

let controller = {
  displayNav: (req, res) => {
    model.getNavComponents((something) => {
      // TODO: access model to display Nav
    });
  }
};

module.exports = controller;