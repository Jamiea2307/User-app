import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/login";
import Register from "./Components/register";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
      </Switch>
    </Router>
  );
};
