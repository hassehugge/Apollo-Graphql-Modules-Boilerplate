import {gql} from 'apollo-server'
import {createModule} from 'graphql-modules'
import {books} from '../../data'

const typeDef = gql`
  extend type Query {
    books: [Book]
  }

  type Book {
    title: String!
    author: Author
  }

  extend type Author {
    age: Int
  }
`
const resolvers = {
  Query: {
    books: () => books,
  },
}

export const bookModule = createModule({
  id: 'book-module',
  dirname: __dirname,
  typeDefs: [typeDef],
  resolvers,
})
