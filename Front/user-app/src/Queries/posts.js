import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      name
      content
      date
    }
  }
`;

export const GET_USER_POSTS = gql`
  query getPosts {
    posts {
      id
      name
      content
      date
    }
  }
`;
