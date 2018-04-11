const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router
  .post('*', controller.dispatchPost)
  .get('/loaderio-dbccb84cd2f9c75a15a3c3e4479977d8/', controller.getLoadBalancerToken)
  .get('/loaderio-cb5b876def6d1805313fcb9b29ebd213/', controller.getReader1Token)
  .get('/loaderio-6551bc7e87e4c846f9b7dcc62d4e21ea/', (req, res) => {
    res.send('loaderio-6551bc7e87e4c846f9b7dcc62d4e21ea');
  })
  .get('*', controller.dispatchGet)

module.exports = router;