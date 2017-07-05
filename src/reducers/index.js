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
	userToFollow: {},
	modals: {
		showSignInModal: false,
		showFollowUserModal: false,
		showSearchModal: false
	},
	prevAction: ''
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
			modals,
			prevAction: action.type
		})
	} else if (action.type === actions.FETCH_USER_TO_FOLLOW_SUCCESS) {
		let modals = Object.assign({}, state.modals);
		modals.showFollowUserModal = true;
		console.log(action.userToFollow)
		return Object.assign({}, state, {
			userToFollow: action.userToFollow,
			modals,
			prevAction: action.type
		})
	} else if (action.type === actions.LOG_OUT_USER_SUCCESS) {
		console.log('user logged out');
		return Object.assign({}, state, {
			user: {},
			loggedIn: false,
			sessionEnded: true,
			prevAction: action.type
		})
	} else if (action.type === actions.FETCH_DISCUSSIONS_SUCCESS) {
		console.log('discussions fetched');
		return Object.assign({}, state, {
			discussions: action.discussions,
			prevAction: action.type
		})
	} else if (action.type === actions.FETCH_COMMUNITY_SUCCESS) {
		console.log('community fetched');
		return Object.assign({}, state, {
			community: action.community,
			prevAction: action.type
		})
	} else if (action.type === actions.UPDATE_USER_FEED_VIEW) {
		console.log('user feed view set to: ', action.userFeedView)
		return Object.assign({}, state, {
			userFeedView: action.userFeedView,
			prevAction: action.type
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
			discussionToView,
			prevAction: action.type
		})
	} else if (action.type === actions.TOGGLE_MODAL) {
		let modals = Object.assign({}, state.modals);
		modals[action.modal] = !(state.modals[action.modal]);
		return Object.assign({}, state, { 
			modals,
			prevAction: action.type
		})
	} else if (action.type === actions.HANDLE_NEW_COMMENT_SUCCESS) {
		let discussionToView = Object.assign({}, state.discussionToView);
		discussionToView.comments.push(action.comment);
		return Object.assign({}, state, {
			discussionToView,
			prevAction: action.type
		})
	}
	return state;
}