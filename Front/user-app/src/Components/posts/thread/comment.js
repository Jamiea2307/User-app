import DateFormatter from "../../Widgets/dateFormatter";
import CommentControls from "./commentControls";
import { useLazyQuery } from "@apollo/client";
import { GET_MORE_COMMENTS } from "../../../Queries/comments";

const Comment = ({ comment }) => {
  const [getMoreComments, { loading, data }] = useLazyQuery(GET_MORE_COMMENTS);

  return (
    <div key={comment.id}>
      {comment.name}
      {comment.body}
      <DateFormatter date={comment.date} />
      <CommentControls
        parentComment={comment.id}
        moreComments={() =>
          getMoreComments({ variables: { parentComment: comment.id } })
        }
      />
      {data &&
        !loading &&
        data.getMoreComments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
    </div>
  );
};

export default Comment;
