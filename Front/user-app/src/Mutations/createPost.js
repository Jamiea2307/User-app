import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation createPost($content: String!) {
    createPost(content: $content) {
      content
    }
  }
`;
