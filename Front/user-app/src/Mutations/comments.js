import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createCommentThread($parent: String!, $body: String!) {
    createCommentThread(parent: $parent, body: $body)
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
