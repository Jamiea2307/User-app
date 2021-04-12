import React from "react";
import renderer from "react-test-renderer";
import Login from "../Components/userEntry/login";
import { BrowserRouter as Router } from "react-router-dom";
import { LOGIN_USERS } from "../Mutations/login";
import { render, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

describe("Login Tests", () => {
  test("renders correctly", () => {
    const { getByText } = render(
      <MockedProvider mocks={[]}>
        <Router>
          <Login />
        </Router>
      </MockedProvider>
    );

    getByText("Login");
    getByText("Email:");
    getByText("Password:");
    getByText("Register");
  });
});
