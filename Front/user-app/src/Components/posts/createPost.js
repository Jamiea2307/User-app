import { useState } from "react";
import PostButton from "./postButton";
import EditPost from "./editPost";

const CreatePost = () => {
  const [addPost, setAddPost] = useState(false);

  return addPost ? (
    <EditPost displayAddPost={(value) => setAddPost(value)} />
  ) : (
    <PostButton displayAddPost={(value) => setAddPost(value)} />
  );
};

export default CreatePost;
