import { useState } from "react";
import styled from "styled-components";

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

  const click = (e) => {
    e.preventDefault();
    console.log(postContent);
  };

  return (
    <CreatePostContainer>
      <PostForm>
        <input onChange={(e) => setPostContent(e.target.value)} />
        <button
          onClick={(e) => {
            click(e);
          }}
        >
          Submit
        </button>
      </PostForm>
    </CreatePostContainer>
  );
};

export default CreatePost;
