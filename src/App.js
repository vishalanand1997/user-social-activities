import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./components/Login/Login";
import News from "./components/News/News";
import SignUp from "./components/Signup/SignUp";
import SpecificNews from "./components/SpecificNews/SpecificNews";
import { store } from "./store";
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  console.log("Store", store.getState());
  return (
      <Router>
        <Switch>
        <Route path="/specificNews/:id">
            <SpecificNews />
          </Route>
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