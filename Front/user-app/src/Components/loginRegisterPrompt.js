import { Link } from "react-router-dom";
import { LoginRegisterPromptContainer } from "../Styles/loginRegisterPromptStyles";

const LoginRegisterPrompt = () => {
  return (
    <LoginRegisterPromptContainer>
      <div className="promptContent">
        Please login or register to view content
      </div>
      <div className="promptContent">
        <Link to="/Login">
          <button className="promptContentButton">Login</button>
        </Link>
        <Link to="/Register">
          <button className="promptContentButton">Register</button>
        </Link>
      </div>
    </LoginRegisterPromptContainer>
  );
};

export default LoginRegisterPrompt;
