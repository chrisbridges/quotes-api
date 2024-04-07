const { ApolloServer, gql } = require("apollo-server");
// import schema from '.schema.graphql'
const quotes = require("./quotes.json");

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Quote {
    quote: String!
    author: String
  }

  type Query {
    randomQuote: Quote
    allQuotes: [Quote]
  }
`;

const resolvers = {
  Query: {
    randomQuote: () => {
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      // do i need to return this as an object, or can I simply return the quote found?
      return {
        quote: quote.quote,
        author: quote.author ? quote.author : null,
      };
    },
    allQuotes: () => quotes,
    //TODO: add quote by author query, but relegate to DB
  },
};

const server = new ApolloServer({
  typeDefs, // Your schema
  resolvers, // Your resolver functions
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
