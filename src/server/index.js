import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

const app = express()
const port = 3001

function handleErrors(response) { 
  if (!response.ok) { 
    const responseError = {
      statusText: response.statusText,
      status: response.status
    };
    throw(responseError);
  }
  return response;
}

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.get('/list', cors(corsOptions), async (req, res) => {
  const response = await fetch('https://restcountries.com/v3/all');

  res.send(await response.json());
});

app.get('/name/:name', cors(corsOptions), async (req, res) => {
  console.log(req.params.name);
  const response = await fetch(`https://restcountries.com/v3.1/name/${req.params.name}`)
    .then(handleErrors)
    .catch(function(error) {
      console.log(`Error ${error.status}`);
    });

  if (response) {
    let result = await response.json();
    result.sort((a, b) => b.population - a.population);

    res.send(result);
  } else {
    res.sendStatus(404);
  }
});

app.get('/full-name/:name', cors(corsOptions), async (req, res) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${req.params.name}?fullText=true`)
    .then(handleErrors)
    .catch(function(error) {
      console.log(`Error ${error.status}`);
    });

  if (response) {
    let result = await response.json();
    result.sort((a, b) => b.population - a.population);

    res.send(result);
  } else {
    res.sendStatus(404);
  }
});

app.get('/alpha/:code', cors(corsOptions), async (req, res) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${req.params.code}`)
    .then(handleErrors)
    .catch(function(error) {
      console.log(`Error ${error.status}`);
    });

  if (response) {
    let result = await response.json();
    result.sort((a, b) => b.population - a.population);

    res.send(result);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});