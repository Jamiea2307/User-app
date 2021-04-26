import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { GET_COMMENTS } from "../../../Queries/comments";
import { PostContext } from "./threadContainer";
import Comment from "./comment";
import { CommentWrapper } from "../../../Styles/comments";

const CommentDisplay = () => {
  const parentPostId = useContext(PostContext);
  const { loading, data } = useQuery(GET_COMMENTS, {
    variables: { parentPost: parentPostId },
  });

  if (loading) return <div>Loading....</div>;

  return (
    <CommentWrapper>
      {data.getPostComments.map((comment) => (
        <div className="commentGroup" key={comment.id}>
          <Comment comment={comment} />
        </div>
      ))}
    </CommentWrapper>
  );
};

export default CommentDisplay;
