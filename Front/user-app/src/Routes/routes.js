import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { createContext } from "react";
import { GET_USER } from "../Queries/users";
import { pathNames } from "../Constants/pathNames";
import { PrivateRouteContainer } from "../Styles/privateRoute";
import { SiteWrapper } from "../Styles/home";
import Login from "../Components/userEntry/login";
import Register from "../Components/userEntry/register";
import HomePage from "../Components/home";
import GenericNotFound from "../Components/routeNotFound";
import PrivateRoute from "./RouteAuthorisation/privateRoute";
import LoggedInRoute from "./RouteAuthorisation/loggedInRoute";
import NavBar from "../Components/Widgets/NavBar";
import User from "../Components/user/userPage";
import PostThread from "../Components/posts/thread/postThread";

export const UserContext = createContext();

export const Routes = () => {
  const data = useQuery(GET_USER);

  return (
    <Router>
      <UserContext.Provider value={data}>
        <Switch>
          <LoggedInRoute exact path={[pathNames.login, "/"]}>
            <Login />
          </LoggedInRoute>
          <LoggedInRoute path={pathNames.register}>
            <Register />
          </LoggedInRoute>
          <PrivateRoute path={`${pathNames.user}:id`}>
            <NavBar />
            <PrivateRouteContainer>
              <SiteWrapper>
                <User />
              </SiteWrapper>
            </PrivateRouteContainer>
          </PrivateRoute>
          <PrivateRoute path={pathNames.home}>
            <NavBar />
            <PrivateRouteContainer>
              <SiteWrapper>
                <HomePage />
              </SiteWrapper>
            </PrivateRouteContainer>
          </PrivateRoute>
          <PrivateRoute path={`${pathNames.postThread}:id`}>
            <NavBar />
            <PrivateRouteContainer>
              <SiteWrapper>
                <PostThread />
              </SiteWrapper>
            </PrivateRouteContainer>
          </PrivateRoute>
          <Route component={GenericNotFound} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};
