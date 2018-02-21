var express = require('express');
var path = require('path');

module.exports = (config, app) => {
  var app = express();

  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'pug')

  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Multisite 2 Home' });
  });
  
  return app;
}