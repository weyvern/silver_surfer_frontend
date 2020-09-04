import React, { useReducer } from 'react';
import axios from 'axios';
import GlobalContext from './globalContext';
import GlobalReducer from './globalReducer';
import {
	STORIES_LOADED,
	STORY_POSTED,
	STORY_EDITED,
	STORY_DELETED,
	COMMENT_POSTED,
	COMMENT_EDITED,
	COMMENT_DELETED,
	USERPROFILES_LOADED,
	USERPROFILE_POSTED,
	USERPROFILE_EDITED,
	FRIEND_UPDATED,
} from './types';


const GlobalState = props => {
	const initialState = {
		stories: [],
		loading: true,
		user: null,
		error: null
	};

	const [state, dispatch] = useReducer(GlobalReducer, initialState);

	// get Stories
	const getStories = async () => {
		try {
			const res = await axios.get(
				'http://localhost:5000/api/v1/stories'
			);
			dispatch({
				type: STORIES_LOADED,
				payload: res.data
			});
		} catch (err) {
			/*dispatch({ type: STORIES_ERROR, payload: err.response.data });*/
			console.log(err);
		}
	};

	// post Story
	const postStory = async (newStory) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};

			const res = await axios.post(
				'http://localhost:5000/api/v1/stories/',
				newStory,
				config
			);
			dispatch({
				type: STORY_POSTED,
				payload: res.data
			});
		} catch (err) {
			/*dispatch({ type: STORIES_ERROR, payload: err.response.data });*/
			console.log(err);
		}
	};

	// edit Story
	const editStory = async (id, editedStory) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const res = await axios.put(
				`http://localhost:5000/api/v1/stories/${id}`,
				editedStory,
				config
			);
			dispatch({
				type: STORY_EDITED,
				payload: res.data
			});
		} catch (err) {
			/*dispatch({ type: STORIES_ERROR, payload: err.response.data });*/
			console.log(err);
		}
	};

	// delete Story
	const deleteStory = async (id) => {
		try {
			const res = await axios.delete(
				`http://localhost:5000/api/v1/stories/${id}`
			);
			dispatch({
				type: STORY_DELETED,
				payload: res.data
			});
		} catch (err) {
			/*dispatch({ type: STORIES_ERROR, payload: err.response.data });*/
			console.log(err);
		}
	};


	// post Comment
	const postComment = async (id, newComment) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const res = await axios.put(
				`http://localhost:5000/api/v1/stories/${id}/comments`,
				newComment,
				config
			);
			dispatch({
				type: COMMENT_POSTED,
				payload: res.data
			});
		} catch (err) {
			/*dispatch({ type: STORIES_ERROR, payload: err.response.data });*/
			console.log(err);
		}
	};


	// edit Comment
	const editComment = async (id, comment_id, editedComment) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const res = await axios.put(
				`http://localhost:5000/api/v1/stories/${id}/comments/${comment_id}`,
				editedComment,
				config
			);
			dispatch({
				type: COMMENT_EDITED,
				payload: res.data
			});
		} catch (err) {
			/*dispatch({ type: STORIES_ERROR, payload: err.response.data });*/
			console.log(err);
		}
	};

	// delete Comment
	const deleteComment = async (id, comment_id) => {
		try {
			const res = await axios.delete(
				`http://localhost:5000/api/v1/stories/${id}/comments/${comment_id}`
			);
			dispatch({
				type: COMMENT_DELETED,
				payload: res.data
			});
		} catch (err) {
			/*dispatch({ type: STORIES_ERROR, payload: err.response.data });*/
			console.log(err);
		}
	};
	

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
		<GlobalContext.Provider
			value={{
				loading: state.loading,
				//user: state.user,
				error: state.error,
				stories: state.stories,
				getStories,
				postStory,
				editStory,
				deleteStory,
				postComment,
				editComment,
				deleteComment,
				getUserProfiles,
				postUserProfile,
				editUserProfile,
				updateFriend
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
