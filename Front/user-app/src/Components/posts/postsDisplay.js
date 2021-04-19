import { GET_POSTS } from "../../Queries/posts";
import { useQuery } from "@apollo/client";
// import Comment from "../posts/comments";
import { DisplayContainer } from "../../Styles/postDisplay";
import PostContainer from "./postContainer";

const PostsDisplay = () => {
  const { loading, data } = useQuery(GET_POSTS);

  console.log(data);

  if (loading) return <div>Loading</div>;

  return (
    <DisplayContainer>
      {data.posts.map((post) => (
        <PostContainer post={post} key={post.id} />
      ))}
    </DisplayContainer>
  );
};

export default PostsDisplay;
