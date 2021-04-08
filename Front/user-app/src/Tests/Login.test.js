import React from "react";
import renderer from "react-test-renderer";
import Login from "../Components/userEntry/login";
import { LOGIN_USERS } from "../Mutations/login";
import { MockedProvider } from "@apollo/client/testing";

describe("Login", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MockedProvider mocks={[]}>
          <Login />
        </MockedProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
