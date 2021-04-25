import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createCommentThread(
    $parentPost: String!
    $parentComment: String
    $body: String!
  ) {
    createCommentThread(
      parentPost: $parentPost
      parentComment: $parentComment
      body: $body
    )
  }
`;
