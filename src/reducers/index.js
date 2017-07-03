import * as actions from '../actions';

const initialState = {
	user: {
		username: '',
		location: '',
		about: '',
		profilePicURL: '',
		comments: '',
		favoriteUsers: ''
	},
	loggedIn: false,
	userFeedView: 'community',
	exhibitions: [],
	community: [],
	discussions: [],
	discussionToView: {},
	userToView: {},
	modals: {
		showSignInModal: false,
		showUserProfileModal: false,
		showSearchModal: false
	}
};

export const artseenReducer = (state=initialState, action) => {
	if (action.type === actions.FETCH_USER_SUCCESS) {
		console.log('user fetched');
		return Object.assign({}, state, {
			user: action.user
		})
	} else if (action.type === actions.FETCH_DISCUSSIONS_SUCCESS) {
		console.log('discussions fetched');
		return Object.assign({}, state, {
			discussions: action.discussions
		})
	} else if (action.type === actions.FETCH_COMMUNITY_SUCCESS) {
		console.log('community fetched');
		return Object.assign({}, state, {
			community: action.community
		})
	} else if (action.type === actions.UPDATE_USER_FEED_VIEW) {
		console.log('user feed view set to: ', action.userFeedView)
		return Object.assign({}, state, {
			userFeedView: action.userFeedView
		})
	} else if (action.type === actions.UPDATE_DISCUSSION_TO_VIEW) {
		console.log('discussion to view: ', action.discussionToView);
		return Object.assign({}, state, {
			discussionToView: action.discussionToView
		})
	}
	return state;
}