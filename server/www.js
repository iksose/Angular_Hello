var app = require('./app');
var http = require('http');
var server = http.createServer(app);
var port = process.env.PORT || '3000';
app.set('port', port);
server.listen(port);