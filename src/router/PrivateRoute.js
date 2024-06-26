import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const isLogin = () => {
		if (localStorage.getItem('sessionToken') && localStorage.getItem('userDetails')) return true;
		else return false;
	};
	return (
		// Show the component only when the user is logged in
		// Otherwise, redirect the user to /signin page
		<Route {...rest} render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to="/" />)} />
	);
};

export default PrivateRoute;
