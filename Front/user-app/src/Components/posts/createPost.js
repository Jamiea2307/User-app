import { useState } from "react";
import { CREATE_POST } from "../../Mutations/createPost";
import { useMutation } from "@apollo/client";
import {
  CreatePostContainer,
  CreatePostButton,
} from "../../Styles/createPosts";
import {
  SubmitButton,
  CancelButton,
} from "../../Styles/StandardWidgets/buttons";
import { post } from "../../Constants/userContent";

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");
  const [createPost, { data, loading }] = useMutation(CREATE_POST);
  const [addPost, setAddPost] = useState(false);

  console.log("data = ", data);
  console.log("loading = ", loading);

  const createNewPost = async () => {
    try {
      await createPost({
        variables: {
          content: postContent,
        },
      });
      setAddPost(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return addPost ? (
    <CreatePostContainer>
      <form>
        <textarea
          className="postTextArea"
          onChange={(e) => setPostContent(e.target.value)}
        />
        <div>
          <SubmitButton
            onClick={(e) => {
              e.preventDefault();
              createNewPost(e);
            }}
          >
            {post.submit}
          </SubmitButton>
          <CancelButton
            onClick={(e) => {
              e.preventDefault();
              setAddPost(false);
            }}
          >
            {post.cancel}
          </CancelButton>
        </div>
      </form>
    </CreatePostContainer>
  ) : (
    <CreatePostContainer>
      <CreatePostButton
        onClick={(e) => {
          e.preventDefault();
          setAddPost(true);
        }}
      >
        {post.createPost}
      </CreatePostButton>
    </CreatePostContainer>
  );
};

export default CreatePost;
