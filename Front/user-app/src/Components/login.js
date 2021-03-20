import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UserFormBox, UserBox, SubmitBox } from "../Styles/userFormStyles";
import { LOGIN_USERS } from "../Mutations/login";
import { loginData } from "../Constants/login";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loginUser] = useMutation(LOGIN_USERS);

  const submitUser = async () => {
    try {
      await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      setErrorMessage();
    } catch (err) {
      setErrorMessage(err.message);
    }
  };
  return (
    <UserFormBox>
      <h2>{loginData.title}</h2>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          submitUser();
          // getUser;
        }}
      >
        <UserBox className="user-box">
          <input
            className="login-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>{loginData.email} </label>
        </UserBox>
        <UserBox>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>{loginData.password}</label>
        </UserBox>
        <div className="errorMessage">{errorMessage}</div>
        <SubmitBox type="submit" value="Submit" />
      </form>
      <Link className="pageLink" to="/Register">
        {loginData.linkText}
      </Link>
    </UserFormBox>
  );
};

export default Login;
