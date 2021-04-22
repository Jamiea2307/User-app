// import { useContext } from "react";
// import { UserContext } from "../../Routes/routes";
import { GET_USER_POSTS } from "../../Queries/posts";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { userDetails } from "../../Constants/userContent";

const User = () => {
  //   const { data } = useContext(UserContext);
  let { id } = useParams();

  const { data, loading, error } = useQuery(GET_USER_POSTS, {
    variables: { userName: id },
  });

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  return (
    <div style={{ marginTop: "3rem" }}>
      <div>
        {userDetails.activity} {id}
      </div>
      {data.getUserPosts.map((post) => (
        <div key={post.id}>
          {post.name}
          {post.content}
          {post.date}
        </div>
      ))}
    </div>
  );
};

export default User;
