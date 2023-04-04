const { ApolloServer } = require('apollo-server');

const resolvers = {
  Query: {
    hello: () => 'Hello, world!'
  }
};

const server = new ApolloServer({
  typeDefs, // Your schema
  resolvers // Your resolver functions
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
