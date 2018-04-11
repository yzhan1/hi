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

  static getLoaderToken(req, res) {
    res.send('loaderio-dbccb84cd2f9c75a15a3c3e4479977d8');
  }
}

module.exports = Controller;