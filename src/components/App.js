import React, { useContext, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import LoginRoute from './auth/LoginRoute';
import Login from './auth/Login';
import Register from './auth/Register';
import CreateUserProfile from './users/CreateUserProfile';
import ProtectedRoute from './auth/ProtectedRoute';
import PostList from './feed/PostList';
import Post from './feed/Post';
import CreatePost from './feed/CreatePost';
import UserProfile from './users/UserProfile';
import EventList from './events/EventList';
import Dashboard from './dashboard/Dashboard';
import PeopleDashboard from './people/PeopleDashboard';
import AuthContext from '../context/auth/authContext';
import ChatContainer from './chat/ChatContainer';
import { Spinner } from 'react-rainbow-components';
import './App.css';

const App = () => {
	const authContext = useContext(AuthContext);
	const { loadUser, loading } = authContext;
	useEffect(() => {
		loadUser();
	}, []);
	return !loading ? (
		<div className="App">
			<Switch>
				<ProtectedRoute exact path="/feed" component={PostList} />
				<ProtectedRoute exact path="/feed/createpost" component={CreatePost} />
				<ProtectedRoute exact path="/feed/:id" component={Post} />
				<ProtectedRoute exact path="/events" component={EventList} />
				<ProtectedRoute exact path="/" component={Dashboard} />
				<ProtectedRoute
					exact
					path="/edit-profile"
					component={CreateUserProfile}
				/>
				<ProtectedRoute exact path="/people" component={PeopleDashboard} />
				<ProtectedRoute exact path="/chat/:id" component={ChatContainer} />
				<ProtectedRoute path="/chat" component={ChatContainer} />
				<LoginRoute exact path="/login" component={Login} />
				<LoginRoute exact path="/register" component={Register} />
				<ProtectedRoute exact path="/:username" component={UserProfile} />
			</Switch>
		</div>
	) : (
		<Spinner />
	);
};

export default App;
