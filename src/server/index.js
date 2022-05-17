const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('It works');
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});