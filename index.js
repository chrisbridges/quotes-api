const { ApolloServer, gql } = require('apollo-server');
// import schema from '.schema.graphql'
const quotes = require('./quotes.json')

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields: 'title' and 'author'.
  type Quote {
    quote: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    randomQuote: String
  }
`;

const resolvers = {
  Query: {
    randomQuote: () => quotes[Math.floor(Math.random()*quotes.length)].quote
  }
};

const server = new ApolloServer({
  typeDefs, // Your schema
  resolvers // Your resolver functions
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
