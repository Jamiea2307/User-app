import { useState } from "react";
import styled from "styled-components";
import { CREATE_POST } from "../Mutations/createPost";
import { useMutation } from "@apollo/client";

const CreatePostContainer = styled.div`
  border: 1px solid black;
  border-radius: 0.5rem;
  width: auto;
  height: 10rem;
  background: #fff;
`;

const PostForm = styled.form``;

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");
  const [createPost] = useMutation(CREATE_POST);

  const createNewPost = (e) => {
    console.log(postContent);
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
