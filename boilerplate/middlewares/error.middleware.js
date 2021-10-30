const createError = require('http-errors');
const path = require('path')

const BaseError = require("../errors/BaseError")

module.exports = (app) => {

// catch 404 and forward to error handler
app.use(function(req, res, next) {next(createError(404));})
  
app.use(function(err, req, res, next) {
  if(err instanceof BaseError)
   return res.status(err.statusCode).json({
      error: err.name,
      status: err.statusCode,
      description: err.message
    })

    // set locals, only providing error in development
    res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render(path.join(__dirname, '../views/error'));
})

}