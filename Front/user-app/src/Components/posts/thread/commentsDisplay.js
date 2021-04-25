import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { GET_COMMENTS } from "../../../Queries/comments";
import { PostContext } from "./threadContainer";
import Comment from "./comment";

const CommentDisplay = () => {
  const parentPostId = useContext(PostContext);
  const { loading, data } = useQuery(GET_COMMENTS, {
    variables: { parentPost: parentPostId },
  });

  if (loading) return <div>Loading....</div>;

  return (
    <div
      style={{ paddingTop: "3rem", borderTop: "1px solid rgba(0,0,0,0.16)" }}
    >
      {data.getPostComments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentDisplay;
