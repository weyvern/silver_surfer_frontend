import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
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
		error: null
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	// Load User
	const loadUser = async () => {
		setAuthToken(localStorage.token);
		try {
			const res = await axios.get(
				'https://stormy-anchorage-49994.herokuapp.com/api/v1/auth/user'
			);
			dispatch({
				type: USER_LOADED,
				payload: res.data
			});
		} catch (err) {
			dispatch({ type: AUTH_ERROR, payload: err.response.data });
		}
	};
	// Register user
	const registerUser = async newUser => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const res = await axios.post(
				'https://stormy-anchorage-49994.herokuapp.com/api/v1/auth/signup',
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
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const res = await axios.post(
				'https://stormy-anchorage-49994.herokuapp.com/api/v1/auth/signin',
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
				type: LOGIN_FAIL,
				payload: err.response.data.msg
			});
		}
	};
	// Logout
	const logoutUser = async () => {
		dispatch({
			type: LOGOUT
		});
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				loadUser,
				registerUser,
				loginUser,
				logoutUser
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
