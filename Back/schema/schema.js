const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    users: [User!]!
    user: User!
    posts: [Post]
    getThread(postId: String!): Post!
    getUserPosts(userName: String!): [Post]!
    getPostComments(parentPost: String!): [Comment!]!
    getMoreComments(parentComment: String!): [Comment]
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): Boolean!
    loginUser(email: String!, password: String!): User!
    createPost(title: String!, body: String!): Boolean!
    logoutUser: Boolean!
    invalidateTokens: Boolean!
    createCommentThread(
      parentPost: String!
      parentComment: String
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
    parentPost: String!
    parentComment: String
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
