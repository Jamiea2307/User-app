import { useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import { CREATE_COMMENT } from "../../../Mutations/comments";
import {
  CommentArea,
  CommentControls,
  CommentTextArea,
} from "../../../Styles/comments";
import {
  CancelButton,
  SubmitButton,
} from "../../../Styles/StandardWidgets/buttons";
import { PostContext } from "./threadContainer";

const CreateComment = ({ setDisplay }) => {
  const [commentText, setCommentText] = useState("");
  const [createComment] = useMutation(CREATE_COMMENT);
  const parentPostId = useContext(PostContext);

  const submitComment = async (e) => {
    e.preventDefault();
    try {
      await createComment({
        variables: {
          parent: parentPostId,
          body: commentText,
        },
      });
      setDisplay(false);
      setCommentText("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <CommentArea>
      <CommentTextArea
        value={commentText}
        onChange={(e) => {
          e.preventDefault();
          setCommentText(e.target.value);
        }}
      />
      <CommentControls>
        <SubmitButton
          onClick={(e) => {
            submitComment(e);
          }}
        >
          Submit
        </SubmitButton>
        <CancelButton
          onClick={(e) => {
            e.preventDefault();
            setDisplay(false);
          }}
        >
          Cancel
        </CancelButton>
      </CommentControls>
    </CommentArea>
  );
};

export default CreateComment;
