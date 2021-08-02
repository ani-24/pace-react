import React from "react";
import Home from "./Home";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <Header />
      <h1>This is courses Page</h1>
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <Home />
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/courses">
        <Courses />
      </Route>
    </Switch>
  );
};

export default App;
