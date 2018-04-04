const throng = require('throng');

const WORKERS = process.env.WEB_CONCURRENCY || 1;
const PORT = process.env.PORT || 3000;

throng({
  workers: WORKERS,
  lifetime: Infinity
}, start);

function start() {
  const express = require('express');
  const app = express();

  app
    .get('/', (req, res) => res.redirect('http://nanotwitr.herokuapp.com'))
    .get('/about', (req, res) => res.send('about'))
    .get('/loaderio-34e1f9ea260168c360b5bd9b9a84f3ab', (req, res) => res.send('loaderio-34e1f9ea260168c360b5bd9b9a84f3ab'))
    .listen(PORT, console.log(`Listening on port ${PORT}`));
};