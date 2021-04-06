import { registrationData } from "../../Constants/userContent";
import { Link } from "react-router-dom";
import { pathNames } from "../../Constants/pathNames";

const RegisterGratitude = () => {
  return (
    <div>
      Thank you for registering
      <Link className="pageLink" to={pathNames.login}>
        {registrationData.linkText}
      </Link>
    </div>
  );
};

export default RegisterGratitude;
