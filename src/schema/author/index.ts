import {gql} from 'apollo-server'
import {createModule} from 'graphql-modules'
import {authors} from '../../data'

const typeDef = gql`
  extend type Query {
    authors: [Author]
  }
  type Author {
    name: String
  }
`
const resolvers = {
  Query: {
    authors: () => authors,
  },
}

export const authorModule = createModule({
  id: 'authors-module',
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers,
})
