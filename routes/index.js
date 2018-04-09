const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router
  .post('*', controller.dispatchPost)
  .get('*', controller.dispatchGet)
  .get('/loaderio-34e1f9ea260168c360b5bd9b9a84f3ab', controller.getLoaderToken);

module.exports = router;