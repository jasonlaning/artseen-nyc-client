import {mockUser, mockDiscussions, mockCommunity, mockUserToFollow} from '../mock-data';
import $ from 'jquery';
const {API_BASE_URL} = require('../config');

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = (user, community, discussions) => ({
	type: FETCH_USER_SUCCESS,
	user,
	community,
	discussions
})

export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const fetchUserError = (error) => ({
	type: FETCH_USER_ERROR,
	error
})

export const fetchUser = (username, password) => dispatch => {

	const headers = {
		'content-type': 'application/json',
	    authorization: 'Basic ' + btoa(username + ':' + password)
	}
 	fetch(`${API_BASE_URL}/users/login`, {headers})
 	.then(res => {
 		console.log("response: ", res);
 		console.log("response.user: ", res.user)
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(user => {
        dispatch(fetchUserSuccess(user, mockCommunity, mockDiscussions));
    })
    .catch(err => dispatch(fetchUserError(err)));   

/*
	const user = Object.assign ({}, mockUser);

	return (
		delay()
			.then(() => {
				dispatch(fetchUserSuccess(user, mockCommunity, mockDiscussions));
			})
	) */
}

export const LOG_OUT_USER_SUCCESS = 'LOG_OUT_USER_SUCCESS';
export const logOutUserSuccess = user => ({
	type: LOG_OUT_USER_SUCCESS,
	user
})

export const logOutUser = user => dispatch => {
    const delay = () => new Promise (resolve =>
    	setTimeout(resolve, 10)
    );

	return (
		delay()
			.then(() => {
				console.log('dispatching log out');
				window.location='/';
				dispatch(logOutUserSuccess(user));
			})
	)
}

export const FETCH_DISCUSSIONS_SUCCESS = 'FETCH_DISCUSSIONS_SUCCESS';
export const fetchDiscussionsSuccess = discussions => ({
	type: FETCH_DISCUSSIONS_SUCCESS,
	discussions
})

export const fetchDiscussions = () => dispatch => {

	dispatch(fetchDiscussionsSuccess(mockDiscussions));
}

export const FETCH_COMMUNITY_SUCCESS = 'FETCH_COMMUNITY_SUCCESS';
export const fetchCommunitySuccess = community => ({
	type: FETCH_COMMUNITY_SUCCESS,
	community
})

export const fetchCommunity = (username) => dispatch => {

	dispatch(fetchCommunitySuccess(mockCommunity));
}

export const FETCH_USER_TO_FOLLOW_SUCCESS = 'FETCH_USER_TO_FOLLOW_SUCCESS';
export const fetchUserToFollowSuccess = userToFollow => ({
	type: FETCH_USER_TO_FOLLOW_SUCCESS,
	userToFollow
})

export const fetchUserToFollow = (username) => dispatch => {
	//get the user to follow
	dispatch(fetchUserToFollowSuccess(mockUserToFollow));
}

export const UPDATE_DISCUSSION_TO_VIEW = 'UPDATE_DISCUSSION_TO_VIEW';
export const updateDiscussionToView = (id, list) => ({
	type: UPDATE_DISCUSSION_TO_VIEW,
	id,
	list
})

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = (modal) => ({
	type: TOGGLE_MODAL,
	modal
})

export const HANDLE_NEW_COMMENT_SUCCESS = 'HANDLE_NEW_COMMENT_SUCCESS';
export const handleNewCommentSuccess = (comment) => ({
	type: HANDLE_NEW_COMMENT_SUCCESS,
	comment
})

export const handleNewComment = (comment) => dispatch => {
	//post comment to discussion and to user who made it
	dispatch(handleNewCommentSuccess(comment));
}