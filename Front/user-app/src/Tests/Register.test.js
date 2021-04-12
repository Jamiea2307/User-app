import React from "react";
import Register from "../Components/userEntry/register";
import { BrowserRouter as Router } from "react-router-dom";
import { CREATE_USER } from "../Mutations/register";
import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { userMock } from "./MockedData/RegisterData";

describe("Register Tests", () => {
  test("renders correctly", () => {
    const { getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Router>
          <Register />
        </Router>
      </MockedProvider>
    );

    getByText("Register");
    getByText("Name:");
    getByText("Email:");
    getByText("Password:");
    getByText("Login");
    // getByText("Thank you for registering! Please login");
  });

  test("allows users to register", () => {
    const registerComponent = render(
      <MockedProvider mocks={[userMock]} addTypename={false}>
        <Router>
          <Register />
        </Router>
      </MockedProvider>
    );

    userEvent.click(registerComponent.getByDisplayValue("Submit"));

    console.log(registerComponent);
  });
});
