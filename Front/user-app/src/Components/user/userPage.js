import { useContext } from "react";
import { UserContext } from "../../Routes/routes";
import { GET_USER_POSTS } from "../../Queries/posts";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";

const User = () => {
  const { data } = useContext(UserContext);
  let { id } = useParams();

  const userPosts = useQuery(GET_USER_POSTS, {
    variables: { userName: id },
  });

  return <div></div>;
};

export default User;
