import styled from "styled-components";
import { GET_POSTS } from "../../Queries/posts";
import { useQuery } from "@apollo/client";

const DisplayContainer = styled.div`
  border: 1px solid black;
  height: 1rem;
  margin-top: 1rem;
  background: #fff;
`;

const PostDisplay = () => {
  const posts = useQuery(GET_POSTS);

  console.log(posts.data.posts);

  return <DisplayContainer></DisplayContainer>;
};

export default PostDisplay;
