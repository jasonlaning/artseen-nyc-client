import {/*mockUser, */mockDiscussions, mockCommunity, mockUserToFollow} from '../mock-data';
import axios from 'axios';

const {API_BASE_URL} = require('../config');

const api = axios.create({
	baseURL: API_BASE_URL,
	timeout: 1000
})

export const UPDATE_MODAL_MESSAGE = 'UPDATE_MODAL_MESSAGE';
export const updateModalMessage = (message) => ({
	type: UPDATE_MODAL_MESSAGE,
	message
})

export const signUpNewUser = (username, password) => dispatch => {

	dispatch(updateModalMessage('Signing up...'));

 	api.post('users/sign-up', {
	 		username,
	 		password
	 	})
	 	.then((res) => {
	 		if (res.status === 201) {
	 			dispatch(signInUser(username, password));
	 		} else {
				return Promise.reject(res);
			}
	 	}) 
	 	.catch((err) => {
			return dispatch(updateModalMessage(err.response.data.message))
		})
}

export const signInUser = (username, password) => dispatch => {

	const settings = {
		url: `${API_BASE_URL}/users/login`,
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			authorization: 'Basic ' + btoa(username + ':' + password)
		},
	 	withCredentials: true
	};

	dispatch(updateModalMessage('Signing in...'));

 	axios(settings)
 	.then((res) => {
 		console.log(res)
 		if (res.data.user) {
 			window.location ='/dashboard'
 		} else {
			return Promise.reject();
		}
 	}) 
 	.catch(() => {
 		const err = "Invalid Username or Password";
		return dispatch(updateModalMessage(err))
	})
}

export const GET_USER_SESSION_SUCCESS = 'GET_USER_SESSION_SUCCESS';
export const getUserSessionSuccess = (user, community, discussions) => ({
	type: GET_USER_SESSION_SUCCESS,
	user,
	community,
	discussions
})

export const getUserSession = () => dispatch => {

	const settings = {
		url: `${API_BASE_URL}/users/me`,
		method: 'GET',
		headers: {
			'content-type': 'application/json'
	 	},
	 	withCredentials: true
	}

	axios(settings)
 	.then(res => { 
	        if (res.statusText !== 'OK') {
			return Promise.reject(res.statusText);
	       }
	       return res.data.user;
	})
	.then(user => {
		return dispatch(getUserSessionSuccess(user, mockCommunity, mockDiscussions));
	})
	.catch(err => {
		console.log('error: ', err);
		window.location.replace('/');
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
	 	withCredentials: true
	}

	axios(settings)
 	.then(res => {
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