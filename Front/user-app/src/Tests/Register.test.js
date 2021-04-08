import React from "react";
import Register from "../Components/userEntry/register";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { CREATE_USER } from "../Mutations/register";
import { MockedProvider } from "@apollo/client/testing";

it("renders correctly", () => {
  const userMock = {
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
  const tree = renderer
    .create(
      <MockedProvider mocks={[userMock]} addTypename={false}>
        <Router>
          <Register />
        </Router>
      </MockedProvider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
