import React from 'react';
import { Route } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';
import LoginOption from '../auth/LoginOption';

const isAuthenticated = false;
const ProtectedRoute = ({ component: Component, ...rest }) => {
	return isAuthenticated ? (
		<Route
			{...rest}
			render={props => (
				<DashboardLayout>
					<Component {...props} />
				</DashboardLayout>
			)}
		/>
	) : (
		<AuthLayout>
			<LoginOption />
		</AuthLayout>
	);
};

export default ProtectedRoute;
