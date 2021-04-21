import { Link } from "react-router-dom";
import { pathNames } from "../../../Constants/pathNames";
import { PostWrapper } from "../../../Styles/postDisplay";
import Comment from "./comments";
import DateFormatter from "../../Widgets/dateFormatter";
import CommentDisplay from "./commentsDisplay";

const ThreadContainer = ({ post }) => {
  return (
    <PostWrapper>
      <div className="postDetailContainer">
        <Link className="postUserLink" to={`${pathNames.user}${post.name}`}>
          {post.name}
        </Link>
        <DateFormatter date={post.date} />
      </div>
      <div className="postText">{post.title}</div>
      <div className="postText">{post.body}</div>
      <Comment parentPostId={post.id} />
      <CommentDisplay parentPostId={post.id} />
    </PostWrapper>
  );
};

export default ThreadContainer;
