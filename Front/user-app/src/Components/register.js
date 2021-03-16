import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import {
  LoginBox,
  LoginTitle,
  UserBox,
  LoginInput,
  LoginLabel,
  SubmitBox,
  ErrorMessage,
  LoginLink,
} from "../Styles/loginstyles";
import { registrationData } from "../Constants/registration";

import { Link } from "react-router-dom";

const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      name
      email
      password
    }
  }
`;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [formDisplay, setFormDisplay] = useState("block");
  const [successDisplay, setSuccessDisplay] = useState("none");
  const [createUser, { data }] = useMutation(CREATE_USER);

  return (
    <LoginBox>
      <LoginTitle>{registrationData.title}</LoginTitle>
      <form
        style={{ display: formDisplay }}
        className="registrationForm"
        onSubmit={(e) => {
          e.preventDefault();
          createUser({
            variables: { name: name, email: email, password: password },
          });
        }}
      >
        <UserBox>
          <LoginInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <LoginLabel>{registrationData.name} </LoginLabel>
        </UserBox>
        <UserBox>
          <LoginInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginLabel>{registrationData.email} </LoginLabel>
        </UserBox>
        <UserBox>
          <LoginInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginLabel>{registrationData.password}</LoginLabel>
        </UserBox>
        <ErrorMessage>{error}</ErrorMessage>
        <SubmitBox type="submit" value="Submit" />
      </form>
      <div style={{ display: successDisplay }}>
        {registrationData.successText}
      </div>
      <Link to="/Login">
        <LoginLink>{registrationData.linkText}</LoginLink>
      </Link>
    </LoginBox>
  );
};

export default Register;
