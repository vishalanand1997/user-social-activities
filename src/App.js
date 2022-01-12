import React from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Login from "./components/Login/Login";
import News from "./components/News/News";
import SignUp from "./components/Signup/SignUp";
import SpecificNews from "./components/SpecificNews/SpecificNews";
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from "./router/PublicRoute";
import PrivateRoute from "./router/PrivateRoute";
export default function App() {
  return (
		<Router>
			<Switch>
				<PublicRoute restricted={false} component={SignUp} path="/signUp" exact />
				<PublicRoute restricted={false} component={Login} path="/" exact />
				<PrivateRoute component={News} path="/news" exact />
				<PrivateRoute component={SpecificNews} path="/specificNews/:id" exact />
			</Switch>
		</Router>
  );
}