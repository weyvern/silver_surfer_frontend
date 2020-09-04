import {
	USERPROFILES_LOADED,
	USERPROFILE_POSTED,
	USERPROFILE_EDITED,
	FRIEND_UPDATED,
} from './types';

export default (state, action) => {
	switch (action.type) {

        case USERPROFILES_LOADED:
            return {
				...state,
				loading: false,
				userProfiles: action.payload
			};
        case USERPROFILE_POSTED:
            return {
				...state,
				loading: false,
				userProfiles: [...state.userProfiles, action.payload]
            };
    //??
        case USERPROFILE_EDITED:
            return {
				...state,
				loading: false,
				story: action.payload
            };
    //??
        case FRIEND_UPDATED:
            return {
				...state,
				loading: false,
				story: action.payload
			};
       
		default:
			return state;
	}
};
