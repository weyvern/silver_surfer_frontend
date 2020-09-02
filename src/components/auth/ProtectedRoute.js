import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';
import LoginOption from '../auth/LoginOption';

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDUyNTgyMjNjYTdmNjliMGVlYWUyYiIsImlhdCI6MTU5OTA1NTgzN30.j6v36_XZpEcaTV0tykh7FN-qFiOFX6bpWYBv-XSJ1ls';
let isAuthenticated = true;
const ProtectedRoute = ({ component: Component, ...rest }) => {

	useEffect(() => {
		token === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDUyNTgyMjNjYTdmNjliMGVlYWUyYiIsImlhdCI6MTU5OTA1NTgzN30.j6v36_XZpEcaTV0tykh7FN-qFiOFX6bpWYBv-XSJ1ls'? isAuthenticated = true : isAuthenticated = false;
		console.log('loggedin'+ isAuthenticated);
		
	}, [])

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
