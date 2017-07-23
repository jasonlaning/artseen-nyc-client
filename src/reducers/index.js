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
		signInModal: false,
		followUserModal: false,
		searchModal: false,
		userSettingsModal: false,
		profilePicModal: false,
		signUpModal: false,
		burgerModal: false
	},
	prevAction: '',
	message: '',
	commentFormMessage: '',
	buttonsDisabled: []
};

export const artseenReducer = (state=initialState, action) => {
	if (action.type === actions.UPDATE_MODAL_MESSAGE) {
		return Object.assign({}, state, {
			message: action.message
		})
	} else 	if (action.type === actions.UPDATE_COMMENT_FORM_MESSAGE) {
		return Object.assign({}, state, {
			commentFormMessage: action.message
		})
	} else if (action.type === actions.GET_USER_SESSION_SUCCESS) {
		console.log('user signed in');
		let modals = Object.assign({}, state.modals);
		modals.signInModal = false;
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
		modals.followUserModal = true;
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
	} else if (action.type === actions.GET_MORE_DISCUSSIONS_SUCCESS) {
		let loadedDiscussions = state.discussions;
		return Object.assign({}, state, {
			discussions: loadedDiscussions.concat(action.discussions),
			prevAction: action.type
		})
	} else if (action.type === actions.GET_MORE_COMMUNITY_SUCCESS) {
		let loadedCommunity = state.community;
		return Object.assign({}, state, {
			community: loadedCommunity.concat(action.comments),
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
		modals['searchModal'] = false;
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
	} else if (action.type === actions.UPDATE_LOAD_MORE_BUTTON) {
			let buttons = state.buttonsDisabled;
			return Object.assign({}, state, {
				buttonsDisabled: buttons.concat(action.button)
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
	} 
	return state;
}