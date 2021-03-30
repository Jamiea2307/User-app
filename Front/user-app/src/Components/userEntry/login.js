import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UserFormBox, SubmitBox } from "../../Styles/userFormStyles";
import { LOGIN_USERS } from "../../Mutations/login";
import { loginData } from "../../Constants/userContent";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserInput from "../Widgets/userInput";

const Login = () => {
  const history = useHistory();
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
      history.push("/home");
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
        }}
      >
        <UserInput
          loginData={loginData.email}
          setValue={setEmail}
          type="text"
        />
        <UserInput
          loginData={loginData.password}
          setValue={setPassword}
          type="password"
        />
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
