import { useParams } from "react-router";
import { GET_THREAD } from "../../../Queries/posts";
import { useQuery } from "@apollo/client";
import { DisplayContainer } from "../../../Styles/postDisplay";
import ThreadContainer from "./threadContainer";

const PostThread = () => {
  let { id } = useParams();

  const { data, loading, error } = useQuery(GET_THREAD, {
    variables: { postId: id },
  });

  if (loading) return <div>...Loading</div>;
  if (error) return <div>error</div>;

  return (
    <DisplayContainer>
      <ThreadContainer post={data.getThread} />
    </DisplayContainer>
  );
};

export default PostThread;
