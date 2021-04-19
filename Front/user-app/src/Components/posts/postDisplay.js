import { PostWrapper } from "../../Styles/postDisplay";
import PostContainer from "./postContainer";

const PostDisplay = ({ post }) => {
  console.log(post);
  return <PostContainer post={post} />;
};

export default PostDisplay;
