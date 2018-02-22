import express from 'express'

const router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Multisite 1', current: 'Home' });
});

export default router
