import { gql } from "@apollo/client";

export const GET_COMMENTS = gql`
  query getComments($parentPost: String!) {
    getComments(parentPost: $parentPost) {
      _id
      name {
        id
        name
      }
      body
      dateAdded
      children
    }
  }
`;
