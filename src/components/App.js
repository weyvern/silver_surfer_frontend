import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import LoginRoute from './auth/LoginRoute';
import Login from './auth/Login';
import Register from './auth/Register';
import CreateUserProfile from './auth/CreateUserProfile';
import UserProfile from './users/UserProfile';
import Feed from './feed/Feed';
import Events from './events/Events';

import './App.css';

import { AuthProvider } from '../context/AuthState';

const App = () => {
	return (
		<div className="App">
			<Switch>
				<ProtectedRoute exact path="/" component={Feed} />
				<ProtectedRoute exact path="/events" component={Events} />
				<LoginRoute exact path="/login" component={Login} />
				<LoginRoute exact path="/register" component={Register} />
				<ProtectedRoute exact path="/userprofile" component={CreateUserProfile} />
				<ProtectedRoute exact path="/:username" component={UserProfile} />
			</Switch>
		</div>
	);
};

export default App;
