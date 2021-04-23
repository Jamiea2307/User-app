import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { GET_COMMENTS } from "../../../Queries/comments";
import { PostContext } from "./threadContainer";
import DateFormatter from "../../../Components/Widgets/dateFormatter";
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
      {data.getComments.map((comment) => (
        <div key={comment.id}>
          {comment.name}
          {comment.body}
          <DateFormatter date={comment.date} />
          <Comment />
        </div>
      ))}
    </div>
  );
};

export default CommentDisplay;
