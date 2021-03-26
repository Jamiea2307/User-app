import { useContext } from "react";
import { UserContext } from "../Routes/routes";

import NavBar from "../Components/Widgets/NavBar";

const UserData = () => {
  const { data } = useContext(UserContext);

  return (
    <div>
      <NavBar />
    </div>
  );
};

export default UserData;
