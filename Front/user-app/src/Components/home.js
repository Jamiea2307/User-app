import { Homepage } from "../Styles/home";
import CreatePost from "./posts/createPost";
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
