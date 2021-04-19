import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment($parent: String!, $body: String!) {
    createComment(parent: $parent, body: $body)
  }
`;
