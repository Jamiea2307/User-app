import { useState } from "react";
import { ReplyButton } from "../../../Styles/comments";
import { comment } from "../../../Constants/userContent";
import CreateCommentThread from "./createCommentThread";
import CommentControls from "./commentControls";

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
    <CommentControls
      setDisplay={(e) => {
        setAddComment(e);
      }}
    />
  );
};

export default Comment;
