import { useState } from "react";
import { CREATE_POST } from "../../Mutations/createPost";
import { useMutation } from "@apollo/client";
// import { CreatePostContainer } from "../../Styles/createPosts";
// import {
//   SubmitButton,
//   CancelButton,
// } from "../../Styles/StandardWidgets/buttons";
// import { post } from "../../Constants/userContent";
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
