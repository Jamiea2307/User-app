import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UserFormBox, SubmitBox } from "../../Styles/userFormStyles";
import { LOGIN_USERS } from "../../Mutations/login";
import { loginData } from "../../Constants/userContent";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { pathNames } from "../../Constants/pathNames";
import UserInput from "../Widgets/userInput";

const Login = () => {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [loginUser] = useMutation(LOGIN_USERS);

  console.log(userDetails);

  const submitUser = async () => {
    try {
      await loginUser({
        variables: {
          email: userDetails.email,
          password: userDetails.password,
        },
      });
      history.push(pathNames.home);
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
          setValue={(email) => setUserDetails({ ...userDetails, email: email })}
          type="text"
        />
        <UserInput
          loginData={loginData.password}
          setValue={(password) =>
            setUserDetails({ ...userDetails, password: password })
          }
          type="password"
        />
        <div className="errorMessage">{errorMessage}</div>
        <SubmitBox type="submit" value="Submit" />
      </form>
      <Link className="pageLink" to={pathNames.register}>
        {loginData.linkText}
      </Link>
    </UserFormBox>
  );
};

export default Login;
