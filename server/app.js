var express = require('express');
var bodyParser = require('body-parser');
var globSync = require('glob').sync;
var morgan = require('morgan');

var app = module.exports = express();
app.use(morgan('dev'));
var routes = globSync('./routes/**/*.js', {
  cwd: __dirname
}).map(function(file) {
  require(file)(app);
});

// GET /static/style.css etc.
app.use('/client', express.static('./client'));

app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: './client/'
  });
});

app.listen(3000, function() {
  console.log('Express server listening on port 3000')
})