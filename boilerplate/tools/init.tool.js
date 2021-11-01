const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

module.exports = async (app, express) => {

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  mongoose.connect(`mongodb://localhost/example`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  }, (err) => {
    if (err) return console.log(err)
    console.log(`[+] Successfully Connected To mongodb://localhost/example`)
  })
}