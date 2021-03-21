import { useQuery, useMutation } from "@apollo/client";
import { GET_USER } from "../Queries/users";
import { LOGOUT_USER } from "../Mutations/logout";
import LoginRegisterPrompt from "../Components/loginRegisterPrompt";
import { useHistory } from "react-router-dom";

const UserData = () => {
  const { loading, error, data } = useQuery(GET_USER);
  const [invalidateTokens] = useMutation(LOGOUT_USER);
  const history = useHistory();

  if (loading) return <p>Loading ...</p>;
  if (error) return <LoginRegisterPrompt />;

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
