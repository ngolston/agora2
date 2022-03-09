import React from "react";

import "./App.css";
import Home from "./pages/home/home";
import Communities from "./pages/Communities/Communities";
import CreatePost from "./pages/CreatePost/CreatePost";
import Login from "./components/LogIn/LogIn";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Communities">
                <Communities />
              </Route>
              <Route exact path="/CreatePost">
                <CreatePost />
              </Route>
              <Route exact path="/Login">
                <Login />
              </Route>
              <Route exact path="/Register">
                <RegisterPage />
              </Route>
              <Route exact path="/Profile">
                <Profile />
              </Route>
            </Switch>
          </>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
