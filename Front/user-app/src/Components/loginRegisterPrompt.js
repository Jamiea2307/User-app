import { Link } from "react-router-dom";

const LoginRegisterPrompt = () => {
  return (
    <div>
      Please login or register to view content
      <Link to="/Login">
        <button>Login</button>
      </Link>
      <Link to="/Register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default LoginRegisterPrompt;
