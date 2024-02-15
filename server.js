// server.js
const express = require('express');
const app = express();
const port = 3000;

// Endpoint for 200 response
app.get('/200', (req, res) => {
  res.status(200).send('This is a 200 OK response.');
});

// Endpoint for 407 response
app.get('/407', (req, res) => {
  res.status(407).send('This is a 407 Proxy Authentication Required response.');
});

// Endpoint for 407 response
app.post('/421', (req, res) => {
  res.status(421).send('This is a 421 Misdirected Request response.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
