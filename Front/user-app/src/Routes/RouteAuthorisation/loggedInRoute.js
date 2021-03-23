import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../routes";

const LoggedInRoute = ({ children, ...rest }) => {
  const { data } = useContext(UserContext);
  console.log(data);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !data ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/user",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default LoggedInRoute;
