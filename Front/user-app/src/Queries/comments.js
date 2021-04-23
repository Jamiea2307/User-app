import { gql } from "@apollo/client";

export const GET_COMMENTS = gql`
  query getComments($parentPost: String!) {
    getComments(parentPost: $parentPost) {
      id
      name
      body
      date
      children
    }
  }
`;
