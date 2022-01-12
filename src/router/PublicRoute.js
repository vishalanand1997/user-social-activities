import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
	const isLogin = () => {
		if (localStorage.getItem('sessionToken') && localStorage.getItem('userDetails')) return true;
		else return false;
	};
	return (
		// restricted = false meaning public route
		// restricted = true meaning restricted route
		<Route
			{...rest}
			render={(props) => (isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />)}
		/>
	);
};

export default PublicRoute;
