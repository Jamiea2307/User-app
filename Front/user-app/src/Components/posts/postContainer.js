import { Link } from "react-router-dom";
import { pathNames } from "../../Constants/pathNames";
import { PostWrapper } from "../../Styles/postDisplay";
import DateFormatter from "../Widgets/dateFormatter";

const PostContainer = ({ post }) => {
  console.log(post);
  return (
    <PostWrapper>
      <div className="postDetailContainer">
        <Link className="postUserLink" to={`${pathNames.user}${post.name}`}>
          {post.name}
        </Link>
        <DateFormatter date={post.date} />
      </div>
      <Link className="postText" to={`${pathNames.postThread}${post.id}`}>
        {post.title}
      </Link>
    </PostWrapper>
  );
};

export default PostContainer;
