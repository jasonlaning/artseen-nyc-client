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
	sessionEnded: false,
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
		let modals = Object.assign({}, state.modals);
		modals.showSignInModal = false;
		return Object.assign({}, state, {
			user: action.user,
			loggedIn: true,
			sessionEnded: false,
			modals
		})
	} else if (action.type === actions.LOG_OUT_USER_SUCCESS) {
		console.log('user logged out');
		return Object.assign({}, state, {
			user: {},
			loggedIn: false,
			sessionEnded: true
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
		let discussionToView = {};
		if (action.list === 'community') {
			discussionToView = Object.assign({}, state.community[action.index].discussion)
		} else {
			discussionToView = Object.assign({}, state.discussions[action.index])
		}
		console.log('discussion to view: ', discussionToView.title);
		return Object.assign({}, state, {
			discussionToView
		})
	} else if (action.type === actions.TOGGLE_MODAL) {
		let modals = Object.assign({}, state.modals);
		modals[action.modal] = !(state.modals[action.modal]);
		return Object.assign({}, state, { modals })
		}
	return state;
}