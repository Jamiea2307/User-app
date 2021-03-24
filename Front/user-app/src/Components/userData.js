import { useContext } from "react";
import { UserContext } from "../Routes/routes";
import Calendar from "../Components/calendar";

import NavBar from "../Components/Widgets/NavBar";

const UserData = () => {
  const { data } = useContext(UserContext);

  return (
    <div>
      <NavBar />
      <Calendar />
    </div>
  );
};

export default UserData;
