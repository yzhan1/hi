const config = require('../config');

class Controller {
  static dispatchPost(req, res) {
    res.redirect(307, `${config.writer}${req.url}`);
  }

  static dispatchGet(req, res) {
    const timestamp = Date.now();

    const url = timestamp % config.base === 0 ? 
      `${config.reader1}${req.url}` : 
      `${config.reader2}${req.url}`;
    res.redirect(307, url);
  }

  static getLoaderToken(req, res) {
    res.send('loaderio-34e1f9ea260168c360b5bd9b9a84f3ab');
  }
}

module.exports = Controller;