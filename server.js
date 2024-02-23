const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Controllers 
const routes = require('./controllers');

// Helpers
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Creates the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({ helpers });

// // Set Handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use(routes);
 

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
