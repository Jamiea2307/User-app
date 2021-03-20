import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../Mutations/register";
import { useState } from "react";
import { UserFormBox, UserBox, SubmitBox } from "../Styles/userFormStyles";
import { registrationData } from "../Constants/registration";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formDisplay, setFormDisplay] = useState("hidden");
  const [successDisplay, setSuccessDisplay] = useState("none");
  const [createUser, { data }] = useMutation(CREATE_USER);

  const submitUser = async () => {
    try {
      await createUser({
        variables: {
          name: name,
          email: email,
          password: password,
        },
      });
      if (data) {
        setFormDisplay("none");
        setSuccessDisplay("block");
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <UserFormBox>
      <form
        style={{ display: formDisplay }}
        className="registrationForm"
        onSubmit={(e) => {
          e.preventDefault();
          submitUser();
        }}
      >
        <h2>{registrationData.title}</h2>
        <UserBox>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <label>{registrationData.name} </label>
        </UserBox>
        <UserBox>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <label>{registrationData.email} </label>
        </UserBox>
        <UserBox>
          <input
            type="password"
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
