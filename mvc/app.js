const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const findUserMiddleware = require('./middlewares/findUser');
const authUserMiddleware = require('./middlewares/authUser');

const app = express();

const taskRoutes = require('./routes/tasks_routes');
const registrationRoutes = require('./routes/registrations_routes');
const sessionRoutes = require('./routes/sessions_routes');
const categoryRoutes = require('./routes/categories_router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');

app.use(
  session({
    secret: ['123451154264230', 'cdc1w6c51c65ce+6e2e+6e+00'],
    saveUninitialized: false,
    resave: false,
  })
);
app.use(findUserMiddleware);
app.use(authUserMiddleware);
app.use(taskRoutes);
app.use(categoryRoutes);
app.use(registrationRoutes);
app.use(sessionRoutes);
app.get('/', (req, resp) => {
  resp.render('home', { user: req.user });
});

app.listen(3000);
