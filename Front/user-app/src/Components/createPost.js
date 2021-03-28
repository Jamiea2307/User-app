import styled from "styled-components";

const CreatePostContainer = styled.div`
  border: 1px solid black;
  width: auto;
  height: 10rem;
`;

const PostForm = styled.form``;

const CreatePost = () => {
  return (
    <CreatePostContainer>
      <PostForm>
        <input />
        <button>Submit</button>
      </PostForm>
    </CreatePostContainer>
  );
};

export default CreatePost;
