import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/login";
import Register from "./Components/register";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `http://localhost:4000/graphql`,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
