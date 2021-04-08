import React from "react";
import renderer from "react-test-renderer";
import Login from "../Components/userEntry/login";
import { BrowserRouter as Router } from "react-router-dom";
import { LOGIN_USERS } from "../Mutations/login";
import { MockedProvider } from "@apollo/client/testing";

describe("Login", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MockedProvider mocks={[]}>
          <Router>
            <Login />
          </Router>
        </MockedProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
