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
    .get('/', (req, res) => res.send('index'))
    .get('/about', (req, res) => res.send('about'))
    .listen(PORT, console.log(`Listening on port ${PORT}`));
};