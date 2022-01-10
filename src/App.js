import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login/Login";
import News from "./components/Posts/News";
import SignUp from "./components/Signup/SignUp";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}