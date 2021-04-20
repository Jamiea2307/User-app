const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    users: [User!]!
    user: User!
    posts: [Post]
    getThread(postId: String!): Post!
    getUserPosts(userName: String!): [Post]!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): Boolean!
    loginUser(email: String!, password: String!): User!
    createPost(title: String!, body: String!): Boolean!
    logoutUser: Boolean!
    invalidateTokens: Boolean!
    createComment(parent: String!, body: String!): Boolean!
    createReply(
      parentPost: String!
      parentComment: String!
      body: String!
    ): Boolean!
  }

  type Post {
    id: String!
    name: String!
    title: String!
    body: String!
    date: String!
  }

  type Comment {
    id: String!
    name: String!
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
`;

module.exports = typeDefs;
