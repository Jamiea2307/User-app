import CreatePost from "./posts/createPost";
import { Homepage } from "../Styles/homeStyles";
import PostDisplay from "./posts/postDisplay";

const HomePage = () => {
  return (
    <Homepage>
      <CreatePost />
      <PostDisplay />
    </Homepage>
  );
};

export default HomePage;
