import { useState } from "react";
import {
  CommentArea,
  CommentTextArea,
  CommentControls,
  SubmitButton,
  CancelButton,
  ReplyButton,
} from "../../Styles/comments";

const Comment = () => {
  const [addComment, setAddComment] = useState(false);

  return addComment ? (
    <CommentArea>
      <CommentTextArea />
      <CommentControls>
        <SubmitButton
          onClick={(e) => {
            e.preventDefault();
            setAddComment(false);
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
