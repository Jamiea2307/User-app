import { NavBarContainer, LogoutButton } from "../../Styles/navBarStyles";
import { useContext } from "react";
import { UserContext } from "../../Routes/routes";
import { LOGOUT_USER } from "../../Mutations/logout";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { navBar } from "../../Constants/userContent";
import { Link } from "react-router-dom";
import { pathNames } from "../../Constants/pathNames";

const NavBar = () => {
  const { data } = useContext(UserContext);
  const [invalidateTokens] = useMutation(LOGOUT_USER);
  const history = useHistory();

  const logout = async () => {
    await invalidateTokens();
    history.go(0);
  };

  return (
    <NavBarContainer>
      <Link className="userName" to={`${pathNames.user}${data.user.name}`}>
        {data.user.name}
      </Link>
      <LogoutButton
        onClick={() => {
          logout();
        }}
      >
        {navBar.logout}
      </LogoutButton>
    </NavBarContainer>
  );
};

export default NavBar;
