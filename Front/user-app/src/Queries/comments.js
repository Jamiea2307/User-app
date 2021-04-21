import { gql } from "@apollo/client";

export const GET_Comments = gql`
  query getComments {
    getComments {
      id
      name
      body
      date
    }
  }
`;
