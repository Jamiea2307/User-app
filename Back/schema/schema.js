const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    users: [User!]!
    user: User!
    posts: [Post]
    getThread(postId: String!): Post!
    getUserPosts(userName: String!): [Post]!
    # getComments(parentPost: String!): [Comment!]
    getComments(parentPost: String!): [Comment!]!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): Boolean!
    loginUser(email: String!, password: String!): User!
    createPost(title: String!, body: String!): Boolean!
    logoutUser: Boolean!
    invalidateTokens: Boolean!
    createCommentThread(parent: String!, body: String!): Boolean!
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
    _id: String!
    parentPost: String!
    children: [String!]
    name: UserDetails!
    body: String!
    dateAdded: String!
  }

  type UserDetails {
    id: String!
    name: String!
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
