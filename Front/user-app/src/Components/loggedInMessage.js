import { useQuery } from "@apollo/client";
import { GET_USER } from "../Queries/users";

const LoggedInMessage = () => {
  const { data } = useQuery(GET_USER);

  return data ? <div>You are already logged in as {data.user.name}</div> : null;
};

export default LoggedInMessage;
