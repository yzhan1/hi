const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router
  .post('*', controller.dispatchPost)
  .get('*', controller.dispatchGet)
  .get('/loaderio-dbccb84cd2f9c75a15a3c3e4479977d8/', controller.getLoaderToken);

module.exports = router;