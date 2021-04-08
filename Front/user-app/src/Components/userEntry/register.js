import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../Mutations/register";
import { UserFormBox, SubmitBox } from "../../Styles/userFormStyles";
import { registrationData } from "../../Constants/userContent";
import { Link } from "react-router-dom";
import { pathNames } from "../../Constants/pathNames";
import RegisterGratitude from "./registerGratitude";
import UserInput from "../Widgets/userInput";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  console.log(data);

  return !data ? (
    <UserFormBox>
      <form
        className="registrationForm"
        onSubmit={(e) => {
          e.preventDefault();
          submitUser();
        }}
      >
        <h2>{registrationData.title}</h2>
        <UserInput
          loginData={registrationData.name}
          setValue={setName}
          type="text"
        />
        <UserInput
          loginData={registrationData.email}
          setValue={setEmail}
          type="text"
        />
        <UserInput
          loginData={registrationData.password}
          setValue={setPassword}
          type="password"
        />
        <div className="errorMessage">{errorMessage}</div>
        <SubmitBox type="submit" value="Submit" />
      </form>
      <Link className="pageLink" to={pathNames.login}>
        {registrationData.linkText}
      </Link>
    </UserFormBox>
  ) : (
    <UserFormBox>
      <RegisterGratitude />
    </UserFormBox>
  );
};

export default Register;
