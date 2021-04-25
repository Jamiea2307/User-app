import { Link } from "react-router-dom";
import { pathNames } from "../../../Constants/pathNames";
import { PostWrapper } from "../../../Styles/postDisplay";
import CommentControls from "./commentControls";
import DateFormatter from "../../Widgets/dateFormatter";
import CommentDisplay from "./commentsDisplay";
import { createContext } from "react";

export const PostContext = createContext();

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
      <PostContext.Provider value={post.id}>
        <CommentControls />
        <CommentDisplay />
      </PostContext.Provider>
    </PostWrapper>
  );
};

export default ThreadContainer;
