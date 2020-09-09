import React, { useReducer } from 'react';
import axios from 'axios';
import PostContext from './postContext';
import PostReducer from './postReducer';
import {
	STORIES_LOADED,
	STORY_LOADED,
	STORY_POSTED,
	STORY_EDITED,
	STORY_DELETED,
	COMMENT_POSTED,
	COMMENT_EDITED,
	COMMENT_DELETED,
	STORY_LIKED,
	SET_LOADING
} from './types';

const PostState = props => {
	const initialState = {
		stories: [],
		story: null,
		loading: true,
		user: null,
		error: null
	};

	const [state, dispatch] = useReducer(PostReducer, initialState);

	// Set loading

	const setLoading = () => {
		dispatch({ type: SET_LOADING });
	};

	// get Stories
	const getStories = async () => {
		setLoading();
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_SOCIAL_SERVICE}/stories`
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

	// get Story
	const getStory = async id => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_SOCIAL_SERVICE}/stories/${id}`
			);
			dispatch({
				type: STORY_LOADED,
				payload: res.data.data
			});
		} catch (err) {
			/*dispatch({ type: STORIES_ERROR, payload: err.response.data });*/
			console.log(err);
		}
	};

	// post Story
	const postStory = async newStory => {
		setLoading();
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};

			const res = await axios.post(
				`${process.env.REACT_APP_SOCIAL_SERVICE}/stories/`,
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
				`${process.env.REACT_APP_SOCIAL_SERVICE}/stories/${id}`,
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
	const deleteStory = async id => {
		try {
			const res = await axios.delete(
				`${process.env.REACT_APP_SOCIAL_SERVICE}/stories/${id}`
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

	// add like
	const addLike = async (id) => {
		try {
			await axios.put(
				`${process.env.REACT_APP_SOCIAL_SERVICE}/stories/${id}/likes`
			);
			getStory(id);
			/* dispatch({ type: COMMENT_POSTED, payload: res.data.data }); */
		} catch (err) {
			console.log(err);
		}
	};


	// delete like
	const deleteLike = async (id) => {
		try {
			await axios.delete(
				`${process.env.REACT_APP_SOCIAL_SERVICE}/stories/${id}/likes`
			);
			getStory(id);
			/* dispatch({ type: COMMENT_POSTED, payload: res.data.data }); */
		} catch (err) {
			console.log(err);
		}
	};

	// post Comment
	const postComment = async (newComment, id) => {
		try {
			await axios.post(
				`${process.env.REACT_APP_SOCIAL_SERVICE}/stories/${id}/comments`,
				newComment
			);
			getStory(id);
			/* dispatch({ type: COMMENT_POSTED, payload: res.data.data }); */
		} catch (err) {
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
				`${process.env.REACT_APP_SOCIAL_SERVICE}/stories/${id}/comments/${comment_id}`,
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
				`${process.env.REACT_APP_SOCIAL_SERVICE}/stories/${id}/comments/${comment_id}`
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

	return (
		<PostContext.Provider
			value={{
				loading: state.loading,
				error: state.error,
				story: state.story,
				stories: state.stories,
				getStory,
				getStories,
				postStory,
				editStory,
				deleteStory,
				postComment,
				editComment,
				deleteComment,
				addLike,
				deleteLike
			}}
		>
			{props.children}
		</PostContext.Provider>
	);
};

export default PostState;
