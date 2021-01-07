import React from "react";
import Auth from "../utils/auth";

import Jumbotron from "../components/Jumbotron";
// import Header from '../components/Header';

const Home = () => {
  if (Auth.loggedIn()) {
    return (
      <div className="home-page">
        <Jumbotron />
        <h1>You are now logged in, admin sees this</h1>
      </div>
    );
  } else {
    return (
      <div className="home-page">
        <Jumbotron />
        Normal people see this
      </div>
    );
  }
};

export default Home;
