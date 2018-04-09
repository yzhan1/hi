const throng = require('throng');
const router = require('./routes');

const WORKERS = process.env.WEB_CONCURRENCY || 1;
const PORT = process.env.PORT || 3000;

throng({
  workers: WORKERS,
  lifetime: Infinity
}, start);

function start() {
  const express = require('express');
  const app = express();

  app.use((req, res, next) => {
    console.log(req.url);
    next();
  });

  app.use(router);
  app.listen(PORT, console.log(`Listening on port ${PORT}`));
};