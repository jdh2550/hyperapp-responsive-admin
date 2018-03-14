import express from 'express'
import cors from 'cors'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import compression from 'compression'

import schema from './data/schema'
import { GRAPHQL_PORT } from './constants'

const graphQLServer = express()

// switch on compression
graphQLServer.use(compression())
// use cors to allow being called from browsers
graphQLServer.use(cors())
// This is where you switch on the graphql endpoint (i.e. your API is served from here)
graphQLServer.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress( req => ({
    schema,
    tracing: true,
    cacheControl: true,
    context: { Authorization: req.get('Authorization')}
  }))
)
// And this is where you enable the interactive graphiql endpoint - which is way cool!
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
)
