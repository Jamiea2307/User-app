const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    users: [User!]!
    user: User!
    posts: [Post]
    comments: Boolean!
    getUserPosts(userName: String!): [Post]!
  }

  type Post {
    id: String!
    name: String!
    title: String!
    body: String!
    date: String!
  }

  type User {
    name: String!
    email: String!
    password: String!
  }

  type PostContent {
    title: String!
    body: String!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): Boolean!
    loginUser(email: String!, password: String!): User!
    createPost(title: String!, body: String!): Boolean!
    logoutUser: Boolean!
    invalidateTokens: Boolean!
    createComment(content: String!): Boolean!
  }
`;

module.exports = typeDefs;
