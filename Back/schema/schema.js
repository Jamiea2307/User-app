const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    users: [User!]!
    user: User!
  }

  type User {
    name: String!
    email: String!
    password: String!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    loginUser(email: String!, password: String!): User!
    logoutUser: Boolean!
    invalidateTokens: Boolean!
  }
`;

module.exports = typeDefs;
