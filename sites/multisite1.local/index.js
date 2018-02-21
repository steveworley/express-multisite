var express = require('express');
var path = require('path');

module.exports = (config) => {
  var app = express();

  var index = require('./routes/index');
  
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');

  app.use('/', index);
  
  return app;
}