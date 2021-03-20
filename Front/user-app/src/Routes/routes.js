import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Components/login";
import Register from "../Components/register";
import UserData from "../Components/userData";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={["/login", "/"]} component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/User" component={UserData} />
      </Switch>
    </Router>
  );
};
