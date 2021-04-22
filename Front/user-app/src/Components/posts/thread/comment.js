import { useState } from "react";
import { ReplyButton } from "../../../Styles/comments";
import CreateComment from "./createComment";

const Comment = () => {
  const [addComment, setAddComment] = useState(false);

  return addComment ? (
    <CreateComment
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
