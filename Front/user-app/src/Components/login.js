import { useState } from "react";
import { useQuery } from "@apollo/client";
import { UserFormBox, UserBox, SubmitBox } from "../Styles/userFormStyles";
import { GET_USERS } from "../Queries/login";
import { loginData } from "../Constants/login";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let history = useHistory();
  const getUser = () => {};

  return (
    <UserFormBox>
      <h2>{loginData.title}</h2>
      <form className="login-form" onSubmit={getUser}>
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
        <div className="errorMessage">{}</div>
        <SubmitBox type="submit" value="Submit" />
      </form>
      <Link className="pageLink" to="/Register">
        {loginData.linkText}
      </Link>
    </UserFormBox>
  );
};

export default Login;
