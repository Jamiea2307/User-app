import { useContext } from "react";
import { PostContext } from "./threadContainer";

const CommentDisplay = () => {
  const parentPostId = useContext(PostContext);

  return <div style={{ marginTop: "3rem" }}>Comment Display</div>;
};

export default CommentDisplay;
