import { useState } from "react";
import { CREATE_POST } from "../../Mutations/createPost";
import { useMutation } from "@apollo/client";
import { CreatePostContainer, PostForm } from "../../Styles/createPosts";

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");
  const [createPost] = useMutation(CREATE_POST);

  const createNewPost = async () => {
    console.log(postContent);
    try {
      await createPost({
        variables: {
          content: postContent,
        },
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <CreatePostContainer>
      <PostForm>
        <input onChange={(e) => setPostContent(e.target.value)} />
        <button
          onClick={(e) => {
            e.preventDefault();
            createNewPost(e);
          }}
        >
          Submit
        </button>
      </PostForm>
    </CreatePostContainer>
  );
};

export default CreatePost;
