import { gql } from "@apollo/client";

// export const GET_USERS = gql`
//   query getUsers {
//     users {
//       name
//     }
//   }
// `;

export const GET_USER = gql`
  query getUser {
    user {
      name
    }
  }
`;
