import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Login, { LOGIN_USERS } from "../Components/userEntry/login";
import { MockedProvider } from "@apollo/client/testing";

configure({ adapter: new Adapter() });

describe("Login", () => {
  it("renders correctly", () => {
    shallow(
      <MockedProvider mocks={[]}>
        <Login />
      </MockedProvider>
    );
  });
});
