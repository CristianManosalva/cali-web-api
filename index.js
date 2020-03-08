const express = require('express');
const app = express();
const { config } = require('./config/config.js');

app.get('/', (req, res) => {
  res.json({ testing: 'server' });
});

app.listen(config.port, () => {
  console.log(`listening on port {config.port}`);
});
