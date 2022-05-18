import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

const app = express()
const port = 3001

let corsOptions = {
  origin: 'http://localhost:3000'
}

app.get('/list', cors(corsOptions), async (req, res) => {
    let data = {};
    const response = await fetch('https://restcountries.com/v2/all');

  res.send(await response.json());
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});