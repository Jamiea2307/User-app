import { useContext } from "react";
import { UserContext } from "../../Routes/routes";
import { GET_USER_POSTS } from "../../Queries/posts";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";

const User = () => {
  //   const { data } = useContext(UserContext);
  let { id } = useParams();

  const { data, loading } = useQuery(GET_USER_POSTS, {
    variables: { userName: id },
  });

  if (loading) return <div>Loading...</div>;

  return data.getUserPosts.map((post) => (
    <div>
      {post.name}
      {post.content}
      {post.date}
    </div>
  ));
};

export default User;
