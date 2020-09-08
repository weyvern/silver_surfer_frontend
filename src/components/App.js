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
import Events from './events/Events';
import Dashboard from './dashboard/Dashboard';
import PeopleList from './people/PeopleList';
import AuthContext from '../context/auth/authContext';
import './App.css';

const App = () => {
	const authContext = useContext(AuthContext);
	const { loadUser } = authContext;
	useEffect(() => {
		loadUser();
	}, []);
	return (
		<div className="App">
			<Switch>
				<ProtectedRoute exact path="/feed" component={PostList} />
				<ProtectedRoute exact path="/feed/createpost" component={CreatePost} />
				<ProtectedRoute exact path="/feed/:id" component={Post} />
				<ProtectedRoute exact path="/events" component={Events} />
				<ProtectedRoute exact path="/" component={Dashboard} />
				<ProtectedRoute
					exact
					path="/edit-profile"
					component={CreateUserProfile}
				/>
				<ProtectedRoute exact path="/people" component={PeopleList} />
				<LoginRoute exact path="/login" component={Login} />
				<LoginRoute exact path="/register" component={Register} />
				<ProtectedRoute exact path="/:username" component={UserProfile} />
			</Switch>
		</div>
	);
};

export default App;
