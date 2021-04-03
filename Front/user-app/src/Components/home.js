import CreatePost from "./posts/createPost";
import { Homepage } from "../Styles/home";
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
