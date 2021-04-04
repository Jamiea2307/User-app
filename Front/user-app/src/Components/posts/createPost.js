import { useState } from "react";
import { CREATE_POST } from "../../Mutations/createPost";
import { useMutation } from "@apollo/client";
import {
  CreatePostContainer,
  PostForm,
  PostTextArea,
  CreatePostButton,
} from "../../Styles/createPosts";
import {
  SubmitButton,
  CancelButton,
} from "../../Styles/StandardWidgets/buttons";

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");
  const [createPost, { data }] = useMutation(CREATE_POST);
  const [addPost, setAddPost] = useState(false);

  const createNewPost = async () => {
    try {
      await createPost({
        variables: {
          content: postContent,
        },
      });
      if (data) {
        setAddPost(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return addPost ? (
    <CreatePostContainer>
      <PostForm>
        <PostTextArea onChange={(e) => setPostContent(e.target.value)} />
        <div>
          <SubmitButton
            onClick={(e) => {
              e.preventDefault();
              createNewPost(e);
            }}
          >
            Submit
          </SubmitButton>
          <CancelButton
            onClick={(e) => {
              e.preventDefault();
              setAddPost(false);
            }}
          >
            Cancel
          </CancelButton>
        </div>
      </PostForm>
    </CreatePostContainer>
  ) : (
    <CreatePostContainer>
      <CreatePostButton
        onClick={(e) => {
          e.preventDefault();
          setAddPost(true);
        }}
      >
        Create Post
      </CreatePostButton>
    </CreatePostContainer>
  );
};

export default CreatePost;
