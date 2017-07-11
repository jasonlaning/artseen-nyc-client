import {/*mockUser, */mockDiscussions, mockCommunity, mockUserToFollow} from '../mock-data';
import axios from 'axios';
import $ from 'jquery';

const {API_BASE_URL} = require('../config');

export const SIGN_IN_USER_SUCCESS = 'SIGN_IN_USER_SUCCESS';
export const signInUserSuccess = (user, community, discussions) => ({
	type: SIGN_IN_USER_SUCCESS,
	user,
	community,
	discussions
})

export const SIGN_IN_USER_ERROR = 'SIGN_IN_USER_ERROR';
export const signInUserError = (error) => ({
	type: SIGN_IN_USER_ERROR,
	error
})

export const signInUser = (username, password) => dispatch => {

	const settings = {
		url: `${API_BASE_URL}/users/login`,
		method: "GET",
		headers: {
			'content-type': 'application/json',
			authorization: 'Basic ' + btoa(username + ':' + password)
		},
	 	withCredentials: true
	};

 	axios(settings).then(()=> window.location ='/dashboard');
 	
/*
 	.then(res => {
 		console.log(res);
	        if (res.statusText !== 'OK') {
			return Promise.reject(res.statusText);
	       }
	      return window.location = '/dashboard';
	      // return res.data.user;
	})
	.then(user => {
		console.log('user: ', user);
		return dispatch(signInUserSuccess(user, mockCommunity, mockDiscussions));
	})
	.catch(err => {
		console.log('error: ', err);
		return dispatch(signInUserError(err))
	});*/   
}

export const getUserSession = () => dispatch => {

	const settings = {
		url: `${API_BASE_URL}/users/me`,
		method: 'GET',
		headers: {
			'content-type': 'application/json'
	 	},
	 	withCredentials: true,
	 	cache: false
	}

	axios(settings)
 	.then(res => {
 		console.log(res);

 		return dispatch(signInUserSuccess(res.data.user, mockCommunity, mockDiscussions))
 	/*	
	        if (res.statusText !== 'OK') {
			return Promise.reject(res.statusText);
	       } else if (res.data.message === 'Please sign in') {
	       	return Promise.reject(res.data.message);
	       }
	       return res.data.user;
	})
	.then(user => {
		console.log('user: ', user);
		return dispatch(signInUserSuccess(user, mockCommunity, mockDiscussions));
	})
	.catch(err => {
		console.log('error: ', err);
	//	window.location = '/';
		return dispatch(signInUserError(err))*/
	});   
}

export const LOG_OUT_USER_SUCCESS = 'LOG_OUT_USER_SUCCESS';
export const logOutUserSuccess = user => ({
	type: LOG_OUT_USER_SUCCESS,
	user
})

export const logOutUser = user => dispatch => {
    const settings = {
		url: `${API_BASE_URL}/users/logout`,
		method: 'GET',
		headers: {
			'content-type': 'application/json'
	 	},
	 	xhrFields: {
	 		withCredentials: true
	 	},
		crossDomain: true
	}

	$.ajax(settings)
 	.done(res => {
 		console.log(res);
		window.location.replace('/');
		//dispatch(logOutUserSuccess(user));
	})
}

export const GET_DISCUSSIONS_SUCCESS = 'GET_DISCUSSIONS_SUCCESS';
export const getDiscussionsSuccess = discussions => ({
	type: GET_DISCUSSIONS_SUCCESS,
	discussions
})

export const getDiscussions = () => dispatch => {

	dispatch(getDiscussionsSuccess(mockDiscussions));
}

export const GET_COMMUNITY_SUCCESS = 'GET_COMMUNITY_SUCCESS';
export const getCommunitySuccess = community => ({
	type: GET_COMMUNITY_SUCCESS,
	community
})

export const getCommunity = (username) => dispatch => {

	dispatch(getCommunitySuccess(mockCommunity));
}

export const GET_USER_TO_FOLLOW_SUCCESS = 'GET_USER_TO_FOLLOW_SUCCESS';
export const getUserToFollowSuccess = userToFollow => ({
	type: GET_USER_TO_FOLLOW_SUCCESS,
	userToFollow
})

export const getUserToFollow = (username) => dispatch => {
	//get the user to follow
	dispatch(getUserToFollowSuccess(mockUserToFollow));
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

export const POST_NEW_COMMENT_SUCCESS = 'HANDLE_NEW_COMMENT_SUCCESS';
export const postNewCommentSuccess = (comment) => ({
	type: POST_NEW_COMMENT_SUCCESS,
	comment
})

export const postNewComment = (comment) => dispatch => {
	//post comment to discussion and to user who made it
	dispatch(postNewCommentSuccess(comment));
}