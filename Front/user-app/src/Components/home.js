import CreatePost from "./posts/createPost";
import PostDisplay from "./posts/postsDisplay";

const HomePage = () => {
  return (
    <div>
      <CreatePost />
      <PostDisplay />
    </div>
  );
};

export default HomePage;
