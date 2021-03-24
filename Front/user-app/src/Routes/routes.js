import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { createContext } from "react";
import { GET_USER } from "../Queries/users";
import Login from "../Components/userEntry/login";
import Register from "../Components/userEntry/register";
import UserData from "../Components/userData";
import GenericNotFound from "../Components/routeNotFound";
import PrivateRoute from "./RouteAuthorisation/privateRoute";
import LoggedInRoute from "./RouteAuthorisation/loggedInRoute";

export const UserContext = createContext();

export const Routes = () => {
  const data = useQuery(GET_USER);

  return (
    <Router>
      <UserContext.Provider value={data}>
        <Switch>
          <LoggedInRoute exact path={["/login", "/"]}>
            <Login />
          </LoggedInRoute>
          <LoggedInRoute path="/Register">
            <Register />
          </LoggedInRoute>
          <PrivateRoute path="/User">
            <UserData />
          </PrivateRoute>
          <Route component={GenericNotFound} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};
