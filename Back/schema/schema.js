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
    createPost(content: String!): Boolean!
    logoutUser: Boolean!
    invalidateTokens: Boolean!
  }
`;

module.exports = typeDefs;
