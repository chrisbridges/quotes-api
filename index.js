const { ApolloServer, gql } = require("apollo-server");
// import schema from '.schema.graphql'
const quotes = require("./quotes.json");

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Quote {
    quote: String
    author: String
  }

  type Query {
    randomQuote: String
  }
`;

const resolvers = {
  Query: {
    randomQuote: () => quotes[Math.floor(Math.random() * quotes.length)].quote,
  },
};

const server = new ApolloServer({
  typeDefs, // Your schema
  resolvers, // Your resolver functions
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
