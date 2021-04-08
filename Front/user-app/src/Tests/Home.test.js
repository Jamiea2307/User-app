import React from "react";
import renderer from "react-test-renderer";
import Home from "../Components/home";
import { MockedProvider } from "@apollo/client/testing";
import { BrowserRouter as Router } from "react-router-dom";
import { CREATE_POST } from "../Mutations/createPost";

describe("Home", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MockedProvider mocks={[]}>
          <Router>
            <Home />{" "}
          </Router>
        </MockedProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
