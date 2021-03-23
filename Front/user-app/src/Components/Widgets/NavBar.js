import NavBarContainer from "../../Styles/navBarStyles";
import { useContext } from "react";
import { UserContext } from "../../Routes/routes";

const NavBar = () => {
  const { data } = useContext(UserContext);

  return <NavBarContainer>Welcome {data.user.name} !</NavBarContainer>;
};

export default NavBar;
