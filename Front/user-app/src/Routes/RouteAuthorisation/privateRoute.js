import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../routes";
import LoadingSpinner from "../../Components/Widgets/loadingSpinner";

const PrivateRoute = ({ children, ...rest }) => {
  const { data, loading } = useContext(UserContext);

  if (loading) return <LoadingSpinner />;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        data ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
