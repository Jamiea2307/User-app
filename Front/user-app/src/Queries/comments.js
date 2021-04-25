import { gql } from "@apollo/client";

export const GET_COMMENTS = gql`
  query getPostComments($parentPost: String!) {
    getPostComments(parentPost: $parentPost) {
      id
      name
      body
      date
      # children
    }
  }
`;
