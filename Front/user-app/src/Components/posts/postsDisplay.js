import { GET_POSTS } from "../../Queries/posts";
import { useQuery } from "@apollo/client";
import { DisplayContainer } from "../../Styles/postDisplay";
import PostContainer from "./postContainer";

const PostsDisplay = () => {
  const { loading, data } = useQuery(GET_POSTS);

  if (loading) return <div>Loading</div>;

  console.log(loading);

  return (
    <DisplayContainer>
      {data.posts.map((post) => (
        <PostContainer post={post} key={post.id} />
      ))}
    </DisplayContainer>
  );
};

export default PostsDisplay;
