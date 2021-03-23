import { useContext } from "react";
import { useMutation } from "@apollo/client";
import { UserContext } from "../Routes/routes";
import { LOGOUT_USER } from "../Mutations/logout";
import { useHistory } from "react-router-dom";
import NavBar from "../Components/Widgets/NavBar";

const UserData = () => {
  const [invalidateTokens] = useMutation(LOGOUT_USER);
  const history = useHistory();
  const { data } = useContext(UserContext);

  const logout = async () => {
    await invalidateTokens();
    history.go(0);
  };

  return (
    <div>
      <NavBar />
      <div>Welcome {data.user.name}!</div>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserData;
