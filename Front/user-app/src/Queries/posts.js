import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      name
      title
      body
      date
    }
  }
`;

export const GET_USER_POSTS = gql`
  query getUserPosts($userName: String!) {
    getUserPosts(userName: $userName) {
      id
      name
      title
      body
      date
    }
  }
`;
