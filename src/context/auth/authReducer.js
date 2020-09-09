import {
	SET_LOADING,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	USER_PROFILE_LOADED,
	SET_USER_STATUS,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	CLEAR_ERRORS
} from './types';

export default (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case USER_LOADED:
		case SET_USER_STATUS:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload.user
			};
		case USER_PROFILE_LOADED:
			return {
				...state,
				userProfile: action.payload,
				loading: false
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				error: null
			};
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
				userProfile: null,
				error: action.payload
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			};
		default:
			return state;
	}
};
