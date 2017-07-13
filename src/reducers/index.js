import * as actions from '../actions';

const initialState = {
	user: {
		username: '',
		location: '',
		about: '',
		profilePicURL: '',
		favoriteUsers: ''
	},
	loggedIn: false,
	exhibitions: [],
	searchResults: [],
	community: [],
	discussions: [],
	discussionToView: {
		id: '',
	},
	userToFollow: {},
	modals: {
		showSignInModal: false,
		showFollowUserModal: false,
		showSearchModal: false
	},
	prevAction: '',
	message: ''
};

export const artseenReducer = (state=initialState, action) => {
	if (action.type === actions.UPDATE_MODAL_MESSAGE) {
		return Object.assign({}, state, {
			message: action.message
		})
	} else if (action.type === actions.GET_USER_SESSION_SUCCESS) {
		console.log('user signed in');
		let modals = Object.assign({}, state.modals);
		modals.showSignInModal = false;
		return Object.assign({}, state, {
			user: action.user,
			community: action.community,
			discussions: action.discussions,
			loggedIn: true,
			modals,
			prevAction: action.type
		})
	} else if (action.type === actions.GET_USER_TO_FOLLOW_SUCCESS) {
		let modals = Object.assign({}, state.modals);
		modals.showFollowUserModal = true;
		// check if user is already followed
		let userToFollow = Object.assign({}, action.userToFollow);
		if (state.user.favoriteUsers.indexOf(action.userToFollow.username) > -1) {
			userToFollow.followed = true
		} else {
			userToFollow.followed = false
		}
		return Object.assign({}, state, {
			userToFollow,
			modals,
			prevAction: action.type
		})
	} else if (action.type === actions.GET_DISCUSSIONS_SUCCESS) {
		console.log('discussions fetched');
		return Object.assign({}, state, {
			discussions: action.discussions,
			prevAction: action.type
		})
	} else if (action.type === actions.GET_COMMUNITY_SUCCESS) {
		console.log('community fetched');
		return Object.assign({}, state, {
			community: action.community,
			prevAction: action.type
		})
	} else if (action.type === actions.UPDATE_DISCUSSION_TO_VIEW) {
		const discussionToView = Object.assign({}, action.discussion);
		console.log('discussion to view: ', discussionToView);
		return Object.assign({}, state, {
			discussionToView,
			prevAction: action.type
		})
	} else if (action.type === actions.TOGGLE_MODAL) {
		let message = '';
		let modals = Object.assign({}, state.modals);
		modals[action.modal] = !(state.modals[action.modal]);
		return Object.assign({}, state, { 
			modals,
			message,
			prevAction: action.type,
			searchResults: []
		})
	} else if (action.type === actions.GET_SEARCH_RESULTS_SUCCESS) {
		return Object.assign({}, state, {
			exhibitions: action.exhibitions,
			searchResults: action.searchResults
		})
	} else if (action.type === actions.POST_NEW_COMMENT_SUCCESS) {
		let discussionToView = Object.assign({}, action.discussion);
		return Object.assign({}, state, {
			discussionToView,
			prevAction: action.type
		})
	}
	return state;
}