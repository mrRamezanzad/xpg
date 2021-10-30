const express = require('express');

const routes = require('./routes');

const app = express();

// importing all application initializations 
require('./tools/init.tool')(app, express)

// application api routes handler
app.use('/', routes);

// error handler
require('./middlewares/error.middleware')(app)

module.exports = app;