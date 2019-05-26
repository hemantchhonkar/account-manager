const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (request, response) => {
  response.send('Hello There !');
});

app.listen(PORT, () => {

  console.log('Running on port ', PORT);
});
