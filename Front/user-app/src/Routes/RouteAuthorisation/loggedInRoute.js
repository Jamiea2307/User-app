import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../routes";
import { pathNames } from "../../Constants/pathNames";
import LoadingSpinner from "../../Components/Widgets/loadingSpinner";

const LoggedInRoute = ({ children, ...rest }) => {
  const { data, loading } = useContext(UserContext);

  if (loading) return <LoadingSpinner />;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !data ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: pathNames.home,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default LoggedInRoute;
