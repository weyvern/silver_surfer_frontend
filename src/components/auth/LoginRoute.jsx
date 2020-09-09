import React from 'react';
import { Route } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';

const LoginRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={() => (
				<AuthLayout>
					<Component />
				</AuthLayout>
			)}
		/>
	);
};

export default LoginRoute;
