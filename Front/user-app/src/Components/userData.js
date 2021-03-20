import { useQuery } from "@apollo/client";
import { GET_USERS } from "../Queries/users";
import LoginRegisterPrompt from "../Components/loginRegisterPrompt";

const UserData = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  console.log(error);

  if (loading) return <p>Loading ...</p>;
  if (error) return <LoginRegisterPrompt />;

  return <div>{data && data.users.map((data) => <div>{data.name}</div>)}</div>;
};

export default UserData;
