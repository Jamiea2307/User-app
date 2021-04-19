import { useParams } from "react-router";
import { GET_POSTS } from "../../Queries/posts";
import { useQuery } from "@apollo/client";
import PostDisplay from "./postsDisplay";

const PostThread = () => {
  let { id } = useParams();

  const { data, loading, error } = useQuery(GET_POSTS, {
    variables: { postId: id },
  });

  if (loading) return <div>...Loading</div>;
  if (error) return <div>error</div>;

  return (
    <div>
      <PostDisplay postData={data} />
    </div>
  );
};

export default PostThread;
