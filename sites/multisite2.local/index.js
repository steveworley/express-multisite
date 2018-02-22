import express from 'express'
import path from 'path'

export default (config) => {
  const app = express();

  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'pug')

  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Multisite 2 Home' });
  });
  
  return app;
}