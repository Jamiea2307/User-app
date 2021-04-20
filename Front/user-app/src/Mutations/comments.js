import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment($parent: String!, $body: String!) {
    createComment(parent: $parent, body: $body)
  }
`;

export const CREATE_REPLY = gql`
  mutation createReply(
    $parentPost: String!
    $parentComment: String!
    $body: String!
  ) {
    createReply(
      parentPost: $parentPost
      parentComment: $parentComment
      body: $body
    )
  }
`;
