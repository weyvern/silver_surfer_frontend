import React, { useContext, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import LoginRoute from './auth/LoginRoute';
import Login from './auth/Login';
import Register from './auth/Register';
import CreateUserProfile from './auth/CreateUserProfile';
import ProtectedRoute from './auth/ProtectedRoute';
import Feed from './feed/Feed';
import PostFullPage from './feed/PostFullPage';
import CreatePost from './feed/CreatePost';
import UserProfile from './users/UserProfile';
import Events from './events/Events';
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
				<ProtectedRoute exact path="/feed" component={Feed} />
				<ProtectedRoute exact path="/feed/createpost" component={CreatePost} />
				<ProtectedRoute exact path="/feed/:id" component={PostFullPage} />
				<ProtectedRoute exact path="/events" component={Events} />
				<LoginRoute exact path="/login" component={Login} />
				<LoginRoute exact path="/register" component={Register} />
				<ProtectedRoute
					exact
					path="/userprofile"
					component={CreateUserProfile}
				/>
				<ProtectedRoute exact path="/:username" component={UserProfile} />
			</Switch>
		</div>
	);
};

export default App;
