const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', (req, resp) => {
  resp.send(`Hello ${req.query.name}`);
});

app.post('/', (req, resp) => {
  resp.send(`Hello ${req.body.name}`);
});

app.listen(3000);
