const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

const taskRoutes = require('./routes/tasks_routes');
const registrationRoutes = require('./routes/registrations_routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');
app.use(taskRoutes);
app.use(registrationRoutes);

app.listen(3000);
