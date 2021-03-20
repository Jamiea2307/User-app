import { useQuery } from "@apollo/client";
import { GET_USER } from "../Queries/users";
import LoginRegisterPrompt from "../Components/loginRegisterPrompt";

const UserData = () => {
  const { loading, error, data } = useQuery(GET_USER);

  console.log(data);

  if (loading) return <p>Loading ...</p>;
  if (error) return <LoginRegisterPrompt />;

  return <div>Welcome {data.user.name}!</div>;
};

export default UserData;
