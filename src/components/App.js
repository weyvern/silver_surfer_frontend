import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import LoginRoute from './auth/LoginRoute';
import Login from './auth/Login';
import Register from './auth/Register';
import CreateUserProfile from './auth/CreateUserProfile';
import Dashboard from './Dashboard';
import UserProfile from './users/UserProfile';
import Feed from './feed/Feed';
import SinglePost from './feed/SinglePost';
import CreatePost from './feed/CreatePost';
import Events from './events/Events';

import './App.css';

import { AuthProvider } from '../context/AuthState';

const App = () => {
	return (
		<div className="App">
			<Switch>
				<ProtectedRoute exact path="/home" component={Dashboard} />
				<ProtectedRoute exact path="/feed" component={Feed} />
				<ProtectedRoute exact path="/feed/:id" component={SinglePost} />
				<ProtectedRoute exact path="/feed/createpost" component={CreatePost} />
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
