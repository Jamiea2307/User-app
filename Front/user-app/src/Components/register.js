import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../Mutations/register";
import { useState } from "react";
import {
  UserFormBox,
  UserBox,
  SubmitBox,
  ErrorMessage,
} from "../Styles/userFormStyles";
import { registrationData } from "../Constants/registration";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formDisplay, setFormDisplay] = useState("block");
  const [successDisplay, setSuccessDisplay] = useState("none");
  const [createUser] = useMutation(CREATE_USER);

  const submitUser = async () => {
    try {
      await createUser({
        variables: {
          name: name,
          email: email,
          password: password,
        },
      });
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <UserFormBox>
      <h2>{registrationData.title}</h2>
      <form
        style={{ display: formDisplay }}
        className="registrationForm"
        onSubmit={(e) => {
          e.preventDefault();
          submitUser();
        }}
      >
        <UserBox>
          <input
            type="text"
            // value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>{registrationData.name} </label>
        </UserBox>
        <UserBox>
          <input
            type="text"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>{registrationData.email} </label>
        </UserBox>
        <UserBox>
          <input
            type="password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>{registrationData.password}</label>
        </UserBox>
        <div className="errorMessage">{errorMessage}</div>
        <SubmitBox type="submit" value="Submit" />
      </form>
      <div style={{ display: successDisplay }}>
        {registrationData.successText}
      </div>
      <Link className="pageLink" to="/Login">
        {registrationData.linkText}
      </Link>
    </UserFormBox>
  );
};

export default Register;
