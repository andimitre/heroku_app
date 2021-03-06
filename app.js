var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
   res.sendFile('index.html'); 
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// listen on port 3000

app.listen(app.get('port'), function () {
  // console.log('Express app listening on port 3000');
});
