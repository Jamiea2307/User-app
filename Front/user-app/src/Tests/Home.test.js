import React from "react";
import renderer from "react-test-renderer";
import Home from "../Components/home";

describe("Home", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
