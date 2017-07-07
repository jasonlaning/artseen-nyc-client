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
	exhibitions: [],
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
	prevAction: ''
};

export const artseenReducer = (state=initialState, action) => {
	if (action.type === actions.FETCH_USER_SUCCESS) {
		console.log('user fetched');
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
	} else if (action.type === actions.UPDATE_DISCUSSION_TO_VIEW) {
		let discussionIndex;
		console.log('action id', action.id);
		console.log(state.discussions);
		console.log(state.discussions[0]);
		console.log(state.discussions[0].id);
		console.log(action.id === state.discussions[0].id)

		for (let i=0; i < state.discussions.length; i++ ) {
			if (state.discussions[i].id === action.id) {
				discussionIndex = i;
			}
		}
		const discussionToView = Object.assign({}, state.discussions[discussionIndex]);
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