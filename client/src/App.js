import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
// import { Provider } from "react-redux";

//importing pages
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from './pages/Login'

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/login" component = {Login} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
