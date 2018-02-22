import express from 'express'
import fetch from 'node-fetch'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const router = express.Router()

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8082/graphql', fetch }),
  cache: new InMemoryCache(),
})

/* GET home page. */
router.get('/', function(req, res, next) {
  return client.query({
    query: gql`
      {
        pokemons {
          title
          hp
          attack
          defense
          special_attack
          special_defense
        }
      }
    `
  }).then(function(graphql) { 
    if (graphql.errors) {
      return res.render('error', { error: graphql.errors })
    }
    return res.render('pokemon', { title: 'Gotta catch \'em all!', pokemon: graphql.data.pokemons, 'current': 'Pokemon' })
  })
  .catch(err => {
    console.log(err)
    res.status(403).render('error', { error: err })
  })

});

export default router
