import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
	SET_LOADING,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	USER_PROFILE_LOADED,
	UPDATE_FRIENDS,
	SET_USER_STATUS,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	CLEAR_ERRORS
} from './types';

const AuthState = props => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		user: null,
		userProfile: null,
		error: null
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	// Set loading
	const setLoading = () => {
		dispatch({ type: SET_LOADING });
	};

	// Load User
	const loadUser = async () => {
		setLoading();
		setAuthToken(localStorage.token);
		try {
			const res = await axios.get(`${process.env.REACT_APP_AUTH_SERVICE}/user`);
			dispatch({
				type: USER_LOADED,
				payload: res.data
			});
			if (res.data.user.status === 'active') loadUserProfile(res.data.user.id);
		} catch (err) {
			dispatch({ type: AUTH_ERROR, payload: err.response.data });
		}
	};
	// Register user
	const registerUser = async newUser => {
		setLoading();
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const res = await axios.post(
				`${process.env.REACT_APP_AUTH_SERVICE}/signup`,
				newUser,
				config
			);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			});
			loadUser();
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response.data.msg
			});
		}
	};
	// Login
	const loginUser = async newUser => {
		setLoading();
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const res = await axios.post(
				`${process.env.REACT_APP_AUTH_SERVICE}/signin`,
				newUser,
				config
			);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			});
			loadUser();
		} catch (err) {
			dispatch({
				type: LOGIN_FAIL
			});
		}
	};
	// Logout
	const logoutUser = async () => {
		setLoading();
		dispatch({
			type: LOGOUT
		});
	};

	// Change user status
	const setUserStatus = async status => {
		setLoading();
		try {
			const res = await axios.patch(
				`${process.env.REACT_APP_AUTH_SERVICE}/set-status`,
				{
					status
				}
			);
			dispatch({
				type: SET_USER_STATUS,
				payload: res.data
			});
		} catch (err) {
			dispatch({ type: AUTH_ERROR, payload: err.response.data });
		}
	};

	// Get user profile
	const loadUserProfile = async id => {
		setLoading();
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_SOCIAL_SERVICE}/userprofiles/${id}/null`
			);
			dispatch({ type: USER_PROFILE_LOADED, payload: res.data.data });
		} catch (err) {
			dispatch({ type: AUTH_ERROR, payload: err.response.data });
		}
	};
	// Update friends relations
	const updateRelationship = async (sender, recipient, type) => {
		try {
			setLoading();
			const res = await axios.put(
				`${process.env.REACT_APP_SOCIAL_SERVICE}/userprofiles/${sender}/friends/${recipient}`,
				{ relationship: type }
			);
			dispatch({ type: UPDATE_FRIENDS, payload: res.data.data });
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				userProfile: state.userProfile,
				error: state.error,
				loadUser,
				registerUser,
				loginUser,
				logoutUser,
				setUserStatus,
				loadUserProfile,
				updateRelationship
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
