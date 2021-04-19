import { Homepage } from "../Styles/home";
import CreatePost from "./posts/createPost";
import PostDisplay from "./posts/postsDisplay";

const HomePage = () => {
  return (
    <Homepage>
      <CreatePost />
      <PostDisplay />
    </Homepage>
  );
};

export default HomePage;
