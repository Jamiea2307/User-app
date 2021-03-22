import { useContext } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { UserContext } from "../Routes/routes";

import { LOGOUT_USER } from "../Mutations/logout";
import LoginRegisterPrompt from "../Components/loginRegisterPrompt";
import { useHistory } from "react-router-dom";

const UserData = () => {
  const [invalidateTokens] = useMutation(LOGOUT_USER);
  const history = useHistory();
  const { data, loading } = useContext(UserContext);
  console.log(data);
  console.log(loading);

  if (loading) return <p>Loading ...</p>;
  if (!data.user) return <LoginRegisterPrompt />;

  const logout = async () => {
    await invalidateTokens();
    history.go(0);
  };

  return (
    <div>
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
