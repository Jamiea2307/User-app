import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { GET_COMMENTS } from "../../../Queries/comments";
import { PostContext } from "./threadContainer";

const CommentDisplay = () => {
  const parentPostId = useContext(PostContext);
  const { loading, data } = useQuery(GET_COMMENTS, {
    variables: { parentPost: parentPostId },
  });

  return (
    <div
      style={{ paddingTop: "3rem", borderTop: "1px solid rgba(0,0,0,0.16)" }}
    >
      Comment Display
    </div>
  );
};

export default CommentDisplay;
