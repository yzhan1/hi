const config = require('../config');

class Controller {
  static dispatchPost(req, res) {
    res.redirect(307, `${config.writer}${req.url}`);
  }

  static dispatchGet(req, res) {
    const timestamp = Date.now();

    const url = timestamp % config.base === 0 ? 
      `${config.reader1}${req.url}`: 
      `${config.reader2}${req.url}`;
    res.redirect(307, url);
  }

  static getLoadBalancerToken(req, res) {
    res.send('loaderio-dbccb84cd2f9c75a15a3c3e4479977d8');
  }

  static getReader1Token(req, res) {
    res.send('loaderio-cb5b876def6d1805313fcb9b29ebd213');
  }

  static getReader2token(req, res) {
    res.send('loaderio-6551bc7e87e4c846f9b7dcc62d4e21ea');
  }
}

module.exports = Controller;