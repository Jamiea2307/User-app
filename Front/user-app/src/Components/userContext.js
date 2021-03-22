import { useQuery } from "@apollo/client";
import { createContext } from "react";
import { GET_USER } from "../Queries/users";

export const UserContext = createContext();

const userContext = () => {
  const { data } = useQuery(GET_USER);
  console.log(data);

  return <UserContext.Provider value={data}></UserContext.Provider>;
};
