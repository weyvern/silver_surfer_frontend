import React, { useReducer } from 'react';
import axios from 'axios';
import UserProfileContext from './userProfileContext';
import UserProfileReducer from './userProfileReducer';
import {
	USERPROFILES_LOADED,
	USERPROFILE_POSTED,
	USERPROFILE_EDITED,
	FRIEND_UPDATED,
} from './types';


const UserProfileState = props => {
	const initialState = {
		stories: [],
		loading: true,
		user: null,
		error: null
	};

	const [state, dispatch] = useReducer(UserProfileReducer, initialState);

	// get User Profiles
	const getUserProfiles = async () => {
		try {
			const res = await axios.get(
				'http://localhost:5000/api/v1/userprofiles'
			);
			dispatch({
				type: USERPROFILES_LOADED,
				payload: res.data
			});
		} catch (err) {
			/*dispatch({ type: STORIES_ERROR, payload: err.response.data });*/
			console.log(err);
		}
	};


	// post User Profile
	const postUserProfile = async (newUserProfile) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const res = await axios.post(
				'http://localhost:5000/api/v1/userprofiles',
				newUserProfile,
				config
			);
			dispatch({
				type: USERPROFILE_POSTED,
				payload: res.data
			});
		} catch (err) {
			/*dispatch({ type: STORIES_ERROR, payload: err.response.data });*/
			console.log(err);
		}
	};

	// edit User Profile
	const editUserProfile = async (username, editedUserProfile) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const res = await axios.put(
				`http://localhost:5000/api/v1/userprofiles/${username}`,
				editedUserProfile,
				config
			);
			dispatch({
				type: USERPROFILE_EDITED,
				payload: res.data
			});
		} catch (err) {
			/*dispatch({ type: STORIES_ERROR, payload: err.response.data });*/
			console.log(err);
		}
	};

	// update Friend relationship
	const updateFriend = async (username, friendUsername, friendStatus) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const res = await axios.put(
				`http://localhost:5000/api/v1/userprofiles/${username}/friends/${friendUsername}`,
				friendStatus,
				config
			);
			dispatch({
				type: FRIEND_UPDATED,
				payload: res.data
			});
		} catch (err) {
			/*dispatch({ type: STORIES_ERROR, payload: err.response.data });*/
			console.log(err);
		}
	};


	return (
		<UserProfileContext.Provider
			value={{
				loading: state.loading,
				error: state.error,
				userProfiles: state.userProfiles,
				getUserProfiles,
				postUserProfile,
				editUserProfile,
				updateFriend
			}}
		>
			{props.children}
		</UserProfileContext.Provider>
	);
};

export default UserProfileState;
