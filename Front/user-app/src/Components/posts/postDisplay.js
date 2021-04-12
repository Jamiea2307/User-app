import { GET_POSTS } from "../../Queries/posts";
import { useQuery } from "@apollo/client";
import DateFormatter from "../Widgets/dateFormatter";
import Comment from "../posts/comments";
import { DisplayContainer, PostContainer } from "../../Styles/postDisplay";

const PostDisplay = () => {
  const { loading, data } = useQuery(GET_POSTS);

  if (loading) return <div>Loading</div>;

  return (
    <DisplayContainer>
      {data.posts.map((post) => (
        <PostContainer key={post.id}>
          <div>
            {post.name} ∙ <DateFormatter date={post.date} />
          </div>
          <div className="postText">{post.content}</div>
          <Comment />
        </PostContainer>
      ))}
    </DisplayContainer>
  );
};

export default PostDisplay;
