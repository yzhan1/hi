const config = require('../config');

module.exports = {
    dispatchPost(req, res) {
        res.redirect(307, `https://nanotwitr.herokuapp.com${req.url}`);
    },

    dispatchGet(req, res) {
        const timestamp = Date.now();
        if (timestamp % 2 === 0) {
            res.redirect(307, `${config.reader1}${req.url}`);
        } else {
            res.redirect(307, `${config.reader2}${req.url}`);
        }
    },

    getLoaderToken(req, res) {
        res.send('loaderio-34e1f9ea260168c360b5bd9b9a84f3ab');
    }
};