import express from 'express'
import path from 'path'

import index from './routes/index'
import pokemon from './routes/pokemon'

export default (config) => {
  const app = express()

  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'pug')

  app.use('/', index)
  app.use('/pokemon', pokemon)

  return app
}