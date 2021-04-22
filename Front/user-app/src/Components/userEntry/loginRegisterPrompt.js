import { Link } from "react-router-dom";
import { LoginRegisterPromptContainer } from "../../Styles/loginRegisterPromptStyles";
import { pathNames } from "../../Constants/pathNames";

// PAGE CURRENTLY NOT IN USE

const LoginRegisterPrompt = () => {
  return (
    <LoginRegisterPromptContainer>
      <div className="promptContent">
        Please login or register to view content
      </div>
      <div className="promptContent">
        <Link to={pathNames.login}>
          <button className="promptContentButton">Login</button>
        </Link>
        <Link to={pathNames.register}>
          <button className="promptContentButton">Register</button>
        </Link>
      </div>
    </LoginRegisterPromptContainer>
  );
};

export default LoginRegisterPrompt;
