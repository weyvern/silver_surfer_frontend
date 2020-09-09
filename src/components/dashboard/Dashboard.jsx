import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
	const authContext = useContext(AuthContext);
	const {
		user: { status },
		userProfile,
		loading
	} = authContext;

	if (status === 'inactive') return <Redirect to="/edit-profile" />;
	return (
		!loading &&
		status === 'active' &&
		userProfile && <Redirect to={`/${userProfile.username}`} />
	);
};

export default Dashboard;
