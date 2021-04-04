const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    users: [User!]!
    user: User!
    posts: [Post]
    comments: Boolean!
    getUserPosts: Boolean!
  }

  type Post {
    id: String!
    name: String!
    content: String!
    date: String!
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
    createComment(content: String!): Boolean!
  }
`;

module.exports = typeDefs;
