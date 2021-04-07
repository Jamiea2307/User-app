import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Register, { CREATE_USER } from "../Components/userEntry/register";
import { MockedProvider } from "@apollo/client/testing";

configure({ adapter: new Adapter() });

describe("Register", () => {
  it("renders correctly", () => {
    shallow(
      <MockedProvider mocks={[]}>
        <Register />
      </MockedProvider>
    );
  });
});
