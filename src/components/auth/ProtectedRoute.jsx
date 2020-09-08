import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import PostState from '../../context/post/PostState';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';
import LoginOption from '../auth/LoginOption';
import { Spinner } from 'react-rainbow-components';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, loading } = authContext;
	return isAuthenticated ? (
		<Route
			{...rest}
			render={props => (
				<DashboardLayout>
					<PostState>
						{loading ? <Spinner /> : <Component {...props} />}
					</PostState>
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
