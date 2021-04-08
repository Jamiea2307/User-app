import { CREATE_USER } from "../../Mutations/register";

export const userMock = {
  request: {
    query: CREATE_USER,
    variables: {
      name: "TestUser",
      email: "TestUser@email.com",
      password: "Password123",
    },
  },
  result: {
    data: {
      createUser: true,
    },
  },
};
