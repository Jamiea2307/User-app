import CreatePost from "../Components/createPost";
import { Homepage } from "../Styles/homeStyles";

import NavBar from "./Widgets/NavBar";

const HomePage = () => {
  return (
    <Homepage>
      <CreatePost />
    </Homepage>
  );
};

export default HomePage;
