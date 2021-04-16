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
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [createUser, { data }] = useMutation(CREATE_USER);

  console.log(userDetails);

  const submitUser = async () => {
    try {
      await createUser({
        variables: {
          name: userDetails.name,
          email: userDetails.email,
          password: userDetails.password,
        },
      });
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

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
          setValue={(name) => setUserDetails({ ...userDetails, name: name })}
          type="text"
        />
        <UserInput
          loginData={registrationData.email}
          setValue={(email) => setUserDetails({ ...userDetails, email: email })}
          type="text"
        />
        <UserInput
          loginData={registrationData.password}
          setValue={(password) =>
            setUserDetails({ ...userDetails, password: password })
          }
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
