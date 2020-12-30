import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { Provider } from "react-redux";

//importing pages
import Home from "./pages/Home";

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
          {/* <header className="App-header">
       PATRIC SEPULVEDA REALTOR
       <p>Coming soon</p>
      </header> */}
          <Home />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
