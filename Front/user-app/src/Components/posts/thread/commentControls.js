import { comment } from "../../../Constants/userContent";
import { CommentButton } from "../../../Styles/comments";

const CommentControls = ({ setDisplay }) => {
  return (
    <div>
      <CommentButton
        onClick={(e) => {
          e.preventDefault();
          setDisplay(true);
        }}
      >
        {comment.reply}
      </CommentButton>
      <CommentButton>Show more comments</CommentButton>
    </div>
  );
};

export default CommentControls;
