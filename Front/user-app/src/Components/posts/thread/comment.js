import { useState } from "react";
import { ReplyButton } from "../../../Styles/comments";
import CreateCommentThread from "./createCommentThread";

const Comment = () => {
  const [addComment, setAddComment] = useState(false);

  return addComment ? (
    <CreateCommentThread
      setDisplay={(e) => {
        setAddComment(e);
      }}
    />
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
