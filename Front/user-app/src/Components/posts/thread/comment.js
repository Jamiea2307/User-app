import { useState } from "react";
import { ReplyButton } from "../../../Styles/comments";
import { comment } from "../../../Constants/userContent";
import CreateCommentThread from "./createCommentThread";

const Comment = ({ parentComment }) => {
  const [addComment, setAddComment] = useState(false);

  return addComment ? (
    <CreateCommentThread
      setDisplay={(e) => {
        setAddComment(e);
      }}
      parentComment={parentComment}
    />
  ) : (
    <ReplyButton
      onClick={(e) => {
        e.preventDefault();
        setAddComment(true);
      }}
    >
      {comment.reply}
    </ReplyButton>
  );
};

export default Comment;
