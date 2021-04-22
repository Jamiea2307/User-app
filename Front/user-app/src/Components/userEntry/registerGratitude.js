import { registrationData } from "../../Constants/userContent";
import { Link } from "react-router-dom";
import { pathNames } from "../../Constants/pathNames";

const RegisterGratitude = () => {
  return (
    <div>
      {registrationData.successText}
      <Link className="pageLink" to={pathNames.login}>
        {registrationData.linkText}
      </Link>
    </div>
  );
};

export default RegisterGratitude;
