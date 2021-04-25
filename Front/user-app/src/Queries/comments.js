import { gql } from "@apollo/client";

export const GET_COMMENTS = gql`
  query getPostComments($parentPost: String!) {
    getPostComments(parentPost: $parentPost) {
      id
      name
      body
      date
    }
  }
`;

export const GET_MORE_COMMENTS = gql`
  query getMoreComments($parentComment: String!) {
    getMoreComments(parentComment: $parentComment) {
      id
      name
      body
      date
    }
  }
`;
