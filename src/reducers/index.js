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
	imageUploaded: '',
	exhibitions: [],
	searchResults: [],
	community: [],
	discussions: [],
	discussionToView: {
		id: '',
		comments: []
	},
	discussionIdFromSearch: '',
	searchSubmitted: false,
	singleDiscussionLoaded: false,
	userToFollow: {},
	modals: {
		showSignInModal: false,
		showFollowUserModal: false,
		showSearchModal: false,
		showUserSettingsModal: false,
		showProfilePicModal: false
	},
	prevAction: '',
	message: '',
	stickyStatus: false
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
	} else if (action.type === actions.UPDATE_USER_SETTINGS_SUCCESS) {
		let modals = Object.assign({}, state.modals);
		modals[action.modal] = false;
		return Object.assign({}, state, {
			user: action.user,
			modals,
			imageUploaded: '',
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
	} else if (action.type === actions.UPDATE_USER_FAVORITES_SUCCESS) {
		return Object.assign({}, state, {
			user: action.user
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
			singleDiscussionLoaded: true,
			prevAction: action.type
		})
	} else if (action.type === actions.GET_DISCUSSION_FROM_SEARCH_SUCCESS) {
		let modals = Object.assign({}, state.modals);
		let discussion = Object.assign({}, action.discussion);
		modals['showSearchModal'] = false;
		return Object.assign({}, state, {
			discussionIdFromSearch: action.discussion.id,
			discussionToView: discussion,
			modals,
			singleDiscussionLoaded: true,
			prevAction: action.type
		})
	} else if (action.type === actions.TOGGLE_MODAL) {
		let message = '';
		let modals = Object.assign({}, state.modals);
		modals[action.modal] = !(state.modals[action.modal]);
		return Object.assign({}, state, { 
			modals,
			message,
			discussionIdFromSearch: '',
			prevAction: action.type,
			searchResults: [],
			searchSubmitted: false
		})
	} else if (action.type === actions.GET_SEARCH_RESULTS_SUCCESS) {
		return Object.assign({}, state, {
			searchResults: action.searchResults,
			searchSubmitted: true
		})
	} else if (action.type === actions.POST_NEW_COMMENT_SUCCESS) {
		let discussionToView = Object.assign({}, action.discussion);
		return Object.assign({}, state, {
			discussionToView,
			prevAction: action.type
		})
	} else if (action.type === actions.UPLOAD_IMAGE_SUCCESS) {
		return Object.assign({}, state, {
			imageUploaded: action.url
		})
	} else if (action.type === actions.RESET_PROFILE_PIC_MODAL) {
		return Object.assign({}, state, {
			imageUploaded: ''
		})
	} else if (action.type === actions.RESET_SINGLE_DISCUSSION) {
		return Object.assign({}, state, {
			singleDiscussionLoaded: false
		})
	} else if (action.type === actions.UPDATE_STICKY) {
		let stickyStatus = false;
		if (action.status > 0) {
			stickyStatus = true;
		}
		return Object.assign({}, state, {
			stickyStatus
		})
	}
	return state;
}