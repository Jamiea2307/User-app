const { gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
    cats: [Cat!]!
    users: [User!]!
  }

  type Cat {
    id: ID!
    name: String!
  }

  type User {
    name: String!
    email: String!
    password: String!
  }

  type Mutation {
    createCat(name: String!): Cat!
    createUser(name: String!, email: String!, password: String!): User!
  }
`;

module.exports = typeDefs;
