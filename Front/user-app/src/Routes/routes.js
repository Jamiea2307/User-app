import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Components/login";
import Register from "../Components/register";
import UserData from "../Components/userData";

import { useQuery } from "@apollo/client";
import { createContext } from "react";
import { GET_USER } from "../Queries/users";

export const UserContext = createContext();

export const Routes = () => {
  const data = useQuery(GET_USER);

  return (
    <Router>
      <UserContext.Provider value={data}>
        <Switch>
          <Route exact path={["/login", "/"]} component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/User" component={UserData} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};
