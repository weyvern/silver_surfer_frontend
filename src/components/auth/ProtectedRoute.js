import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';
import LoginOption from '../auth/LoginOption';
import AuthContext from '../../context/auth/authContext';
import GlobalState from '../../context/global/globalState';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated } = authContext;
	return isAuthenticated ? (
		<Route
			{...rest}
			render={props => (
				<GlobalState>
				<DashboardLayout>
					<Component {...props} />
				</DashboardLayout>
				</GlobalState>
			)}
		/>
	) : (
		<AuthLayout>
			<LoginOption />
		</AuthLayout>
	);
};

export default ProtectedRoute;
