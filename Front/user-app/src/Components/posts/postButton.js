import {
  CreatePostContainer,
  CreatePostButton,
} from "../../Styles/createPosts";
import { post } from "../../Constants/userContent";

const PostButton = ({ displayAddPost }) => {
  return (
    <CreatePostContainer>
      <CreatePostButton
        onClick={(e) => {
          e.preventDefault();
          displayAddPost(true);
        }}
      >
        {post.createPost}
      </CreatePostButton>
    </CreatePostContainer>
  );
};

export default PostButton;
