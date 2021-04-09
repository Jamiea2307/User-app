import React from "react";
import Register from "../Components/userEntry/register";
import { BrowserRouter as Router } from "react-router-dom";
import { CREATE_USER } from "../Mutations/register";
import { MockedProvider } from "@apollo/client/testing";
import { render, fireEvent } from "@testing-library/react";
import { userMock } from "./MockedData/RegisterData";

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
  const { getByText } = render(
    <MockedProvider mocks={[userMock]} addTypename={false}>
      <Router>
        <Register />
      </Router>
    </MockedProvider>
  );
});

// test("renders correctly", () => {
//   const tree = renderer
//     .create(
//       <MockedProvider mocks={[userMock]} addTypename={false}>
//         <Router>
//           <Register />
//         </Router>
//       </MockedProvider>
//     )
//     .toJSON();

//   console.log(tree);

//   expect(tree).toMatchSnapshot();
// });
