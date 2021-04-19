import { useState } from "react";
import {
  CommentArea,
  CommentTextArea,
  CommentControls,
  ReplyButton,
} from "../../Styles/comments";
import {
  SubmitButton,
  CancelButton,
} from "../../Styles/StandardWidgets/buttons";
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../../Mutations/createComment";

const Comment = ({ parentPostId }) => {
  const [addComment, setAddComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [createComment] = useMutation(CREATE_COMMENT);

  const submitComment = async (e) => {
    e.preventDefault();
    try {
      await createComment({
        variables: {
          parent: parentPostId,
          body: commentText,
        },
      });
      setAddComment(false);
      setCommentText("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return addComment ? (
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
            setAddComment(false);
          }}
        >
          Cancel
        </CancelButton>
      </CommentControls>
    </CommentArea>
  ) : (
    <ReplyButton
      onClick={(e) => {
        e.preventDefault();
        setAddComment(true);
      }}
    >
      Reply
    </ReplyButton>
  );
};

export default Comment;
