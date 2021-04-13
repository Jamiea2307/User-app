import { CreatePostContainer } from "../../Styles/createPosts";
import {
  SubmitButton,
  CancelButton,
} from "../../Styles/StandardWidgets/buttons";
import { post } from "../../Constants/userContent";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../Mutations/createPost";
import { useState } from "react";

const EditPost = ({ displayAddPost }) => {
  const [postContent, setPostContent] = useState("");
  const [createPost] = useMutation(CREATE_POST);

  const createNewPost = async () => {
    try {
      await createPost({
        variables: {
          content: postContent,
        },
      });
      displayAddPost(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
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
              displayAddPost(false);
            }}
          >
            {post.cancel}
          </CancelButton>
        </div>
      </form>
    </CreatePostContainer>
  );
};

export default EditPost;
