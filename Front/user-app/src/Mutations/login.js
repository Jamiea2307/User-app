import { gql } from "@apollo/client";

export const LOGIN_USERS = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      email
      password
    }
  }
`;
