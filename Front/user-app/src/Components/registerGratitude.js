import { registrationData } from "../Constants/userContent";
import { Link } from "react-router-dom";

const RegisterGratitude = () => {
  return (
    <div>
      Thank you for registering
      <Link className="pageLink" to="/Login">
        {registrationData.linkText}
      </Link>
    </div>
  );
};

export default RegisterGratitude;
