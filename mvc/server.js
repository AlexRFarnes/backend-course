const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// const sequelize = new Sequelize('backend-project', null, null, {
//   dialect: 'sqlite',
//   storage: './backend-project',
// });

app.use('view engine', 'pug');

app.post('pending-tasks', (req, resp) => {});

app.listen(3000);
