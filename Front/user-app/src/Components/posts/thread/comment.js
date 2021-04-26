import DateFormatter from "../../Widgets/dateFormatter";
import CommentControls from "./commentControls";
import { useLazyQuery } from "@apollo/client";
import { GET_MORE_COMMENTS } from "../../../Queries/comments";
import { SingleComment } from "../../../Styles/comments";

const Comment = ({ comment }) => {
  const [getMoreComments, { loading, data }] = useLazyQuery(GET_MORE_COMMENTS);

  return (
    <SingleComment key={comment.id}>
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
          <Comment className="Comments" comment={comment} key={comment.id} />
        ))}
    </SingleComment>
  );
};

export default Comment;
