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

export default (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case STORIES_LOADED:
			return {
				...state,
				loading: false,
				stories: action.payload
			};
		case STORY_LOADED:
			return {
				...state,
				loading: false,
				story: action.payload
			};
		case STORY_POSTED:
			return {
				...state,
				loading: false,
				stories: [state.stories, action.payload]
			};
		//??
		case STORY_EDITED:
			return {
				...state,
				loading: false,
				story: action.payload
			};
		case STORY_DELETED:
			return {
				...state,
				loading: false,
				stories: state.stories.filter(story => story._id !== action.payload)
			};
		//?
		case COMMENT_POSTED:
			return {
				...state,
				loading: false,
				story: {
					...state.story,
					comments: [action.payload, ...state.story.comments]
				}
			};
		//?
		case COMMENT_EDITED:
			return {
				...state,
				loading: false,
				story: action.payload
			};
		//?
		case COMMENT_DELETED:
			return {
				...state,
				loading: false,
				story: action.payload
			};
		default:
			return state;
	}
};
