let router = require('express').Router();

router
  .route('/')
  .get(controller.displayNav);

module.exports = router;