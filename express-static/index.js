const express = require('express');
const path = require('path');
const app = express();

const pathway = path.join(__dirname, 'public');

const static = express.static(pathway);

app.use(static);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
