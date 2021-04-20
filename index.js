const { ApolloServer, gql } = require('apollo-server');
const ContactAPI = require('./datasources/contacts');

const typeDefs = require('./schema.js');

const resolvers = require('./resolvers.js');

const dataSources = () => ({
  contactAPI: new ContactAPI(),
});
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQL running at ${url}`);
});
