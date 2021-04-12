import { NavBarContainer, LogoutButton } from "../../Styles/navBarStyles";
import { useContext } from "react";
import { UserContext } from "../../Routes/routes";
import { LOGOUT_USER } from "../../Mutations/logout";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { navBar } from "../../Constants/userContent";

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
      <div className="userName">{data.user.name}</div>
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
