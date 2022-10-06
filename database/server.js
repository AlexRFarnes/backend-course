const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');
const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Opens the connection to the DB
// const db = new sqlite3.Database('backend-project');

const sequelize = new Sequelize('backend-porject', null, null, {
  dialect: 'sqlite',
  storage: './backend-project',
});

// db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');

// app.post('/pending-tasks', (req, resp) => {
//   const description = req.body.description;
//   db.run(`INSERT INTO tasks(description) VALUES(?)`, description);
//   resp.send('Insertion completed');
// });

app.listen(3000);

// process.on('SIGINT', () => {
//   console.log('Goodbye - Att. The Server');
//   db.close();
//   // Terminates the server
//   process.exit();
// });
