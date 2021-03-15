import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/login";
import Register from "./Components/register";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
