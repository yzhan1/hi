const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router
  .post('*', controller.dispatchPost)
  .get('*', controller.dispatchGet)
  .get('/loaderio-e70bc7cc9229c546018c143657c5ce53', controller.getLoaderToken);

module.exports = router;