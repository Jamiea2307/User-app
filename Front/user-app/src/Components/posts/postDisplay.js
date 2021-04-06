import styled from "styled-components";
import { GET_POSTS } from "../../Queries/posts";
import { useQuery } from "@apollo/client";
import DateFormatter from "../Widgets/dateFormatter";
import Comment from "../posts/comments";

const DisplayContainer = styled.div`
  border: 1px solid black;
  margin-top: 1rem;
  background: #fff;
`;

const PostContainer = styled.div`
  border-left: 1px solid black;
  margin: 1.5rem 1rem;
  padding: 1rem;
`;

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
          <div>{post.content}</div>
          <Comment />
        </PostContainer>
      ))}
    </DisplayContainer>
  );
};

export default PostDisplay;
