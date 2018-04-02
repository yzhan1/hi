const throng = require('throng');

const WORKERS = process.env.WEB_CONCURRENCY || 1;
const PORT = process.env.PORT || 3000;

throng({
  workers: WORKERS,
  lifetime: Infinity
}, start);

const start = () => {
  const express = require('express');
  const app = express();

  app
    .get('/', index)
    .get('/about', about)
    .listen(PORT, onListen);

  const index = (req, res) => res.send('index');

  const about = (req, res) => res.send('about');

  const listen = () => console.log(`Listening on port ${PORT}`);
};