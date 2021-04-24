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

// export const CREATE_REPLY = gql`
//   mutation createReply(
//     $parentPost: String!
//     $parentComment: String!
//     $body: String!
//   ) {
//     createReply(
//       parentPost: $parentPost
//       parentComment: $parentComment
//       body: $body
//     )
//   }
// `;
