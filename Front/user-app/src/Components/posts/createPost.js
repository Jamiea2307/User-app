import { useState } from "react";
import { CREATE_POST } from "../../Mutations/createPost";
import { useMutation } from "@apollo/client";
import {
  CreatePostContainer,
  PostForm,
  PostTextArea,
} from "../../Styles/createPosts";

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
          <button
            onClick={(e) => {
              e.preventDefault();
              createNewPost(e);
            }}
          >
            Submit
          </button>
        </div>
      </PostForm>
    </CreatePostContainer>
  ) : (
    <CreatePostContainer>
      <button
        onClick={(e) => {
          e.preventDefault();
          setAddPost(true);
        }}
      >
        Create Post
      </button>
    </CreatePostContainer>
  );

  // return (
  //   <CreatePostContainer>
  //     <PostForm>
  //       <PostTextArea onChange={(e) => setPostContent(e.target.value)} />
  //       <div>
  //         <button
  //           onClick={(e) => {
  //             e.preventDefault();
  //             createNewPost(e);
  //           }}
  //         >
  //           Submit
  //         </button>
  //       </div>
  //     </PostForm>
  //   </CreatePostContainer>
  // );
};

export default CreatePost;
