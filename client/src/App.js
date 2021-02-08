import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { Provider } from "react-redux";
import store from './utils/store';

//importing pages
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import AllBlogs from "./pages/AllBlogs";
import SingleBlog from './pages/SingleBlog';
import NewBlog from './pages/NewBlog';

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
          <Provider store={store}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/blogs" component={AllBlogs} />
              <Route exact path="/newblog" component={NewBlog} />
              <Route exact path ="/blogs/:id" component={SingleBlog} />
            </Switch>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
