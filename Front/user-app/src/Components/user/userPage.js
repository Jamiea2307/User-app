import { GET_USER_POSTS } from "../../Queries/posts";
import { useQuery } from "@apollo/client";

const User = () => {
  const data = useQuery(GET_USER_POSTS);
  return <div></div>;
};

export default User;
