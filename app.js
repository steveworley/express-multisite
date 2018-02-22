import express from 'express'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import vhost from 'vhost'

// Configuration file for multisite setup.
import sites from './sites'

import users from './sites/shared/routes/users'

const app = express();

/** 
 * --- Shared application settings ---
 * 
 * This is the main Express applicaiton that is going to bootstrap the domain
 * specific sites. The request flow is hierarchical
 * 
 * ---
 */
app.set('views', path.join(__dirname, 'sites', 'shared', 'views'));
app.set('view engine', 'pug');

app.use((req, res, next) => {
  console.log(req)
  next()
})

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', users);

for (let site of sites) {
  let [domain, factory] = site
  app.use(vhost(domain, new factory()))
}

app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app
