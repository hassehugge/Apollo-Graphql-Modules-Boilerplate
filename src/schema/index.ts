import {createApplication} from 'graphql-modules'
import {authorModule} from './author'
import {bookModule} from './book'

import {gql} from 'apollo-server'
import {createModule} from 'graphql-modules'

const typeDef = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`
const resolvers = {
  Query: {
    _empty: () => null,
  },
}

export const initModule = createModule({
  id: 'init-module',
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers,
})

const application = createApplication({
  modules: [initModule, authorModule, bookModule],
})
export const schema = application.createSchemaForApollo()
