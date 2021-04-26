import { useState } from "react";
import CreateCommentThread from "./createCommentThread";
import { CommentButton } from "../../../Styles/comments";
import { comment } from "../../../Constants/userContent";

const CommentControls = ({ parentComment, moreComments, type }) => {
  const [addComment, setAddComment] = useState(false);

  return addComment ? (
    <CreateCommentThread
      setDisplay={(e) => {
        setAddComment(e);
      }}
      parentComment={parentComment}
    />
  ) : (
    <div>
      <CommentButton
        onClick={(e) => {
          e.preventDefault();
          setAddComment(true);
        }}
      >
        {comment.reply}
      </CommentButton>
      {!type ? (
        <CommentButton
          onClick={() => {
            moreComments();
          }}
        >
          Show Replies
        </CommentButton>
      ) : null}
    </div>
  );
};

export default CommentControls;
