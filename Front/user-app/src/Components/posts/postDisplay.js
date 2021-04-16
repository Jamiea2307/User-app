import { GET_POSTS } from "../../Queries/posts";
import { useQuery } from "@apollo/client";
import DateFormatter from "../Widgets/dateFormatter";
// import Comment from "../posts/comments";
import { DisplayContainer, PostContainer } from "../../Styles/postDisplay";
import { Link } from "react-router-dom";
import { pathNames } from "../../Constants/pathNames";

const PostDisplay = () => {
  const { loading, data } = useQuery(GET_POSTS);

  if (loading) return <div>Loading</div>;

  return (
    <DisplayContainer>
      {data.posts.map((post) => (
        <PostContainer key={post.id}>
          <div className="postDetailContainer">
            <Link className="postUserLink" to={`${pathNames.user}${post.name}`}>
              {post.name}
            </Link>

            <DateFormatter date={post.date} />
          </div>
          <div className="postText">{post.title}</div>
          {/* <Comment /> */}
        </PostContainer>
      ))}
    </DisplayContainer>
  );
};

export default PostDisplay;
