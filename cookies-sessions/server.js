const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

const app = express();

app.use(
  cookieSession({
    name: 'session',
    keys: ['123456789', 'abcdefghij'],
  })
);

app.get('/', (req, resp) => {
  req.session.visits = req.session.visits || 0;
  req.session.visits += 1;

  resp.send(`${req.session.visits} visit(s)`);
});

app.listen(3000);
