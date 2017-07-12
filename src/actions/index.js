import {mockDiscussions, mockCommunity} from '../mock-data';
import axios from 'axios';

const {API_BASE_URL} = require('../config');

const api = axios.create({
	baseURL: API_BASE_URL,
	timeout: 1000,
	withCredentials: true
})

export const UPDATE_MODAL_MESSAGE = 'UPDATE_MODAL_MESSAGE';
export const updateModalMessage = (message) => ({
	type: UPDATE_MODAL_MESSAGE,
	message
})

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = (modal) => ({
	type: TOGGLE_MODAL,
	modal
})

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

export const getCommunity = () => dispatch => {
	
	dispatch(getCommunitySuccess(mockCommunity));
}

export const GET_USER_TO_FOLLOW_SUCCESS = 'GET_USER_TO_FOLLOW_SUCCESS';
export const getUserToFollowSuccess = userToFollow => ({
	type: GET_USER_TO_FOLLOW_SUCCESS,
	userToFollow
})

export const getUserToFollow = (username) => dispatch => {
	api.get(`users/${username}`)
		.then(res => {
			if (res.statusText !== 'OK') {
				return Promise.reject(res)
			}
			dispatch(getUserToFollowSuccess(res.data.user));
		})
		.catch(err => console.log('error: ', err.response.data.message))
}

export const addUserToFavorites = (username) => dispatch => {
	api.post('users/me/favorites', {
			username
		})
		.then(res => {
			if (res.status !== 201) {
				return Promise.reject(res);
			}
			dispatch(updateModalMessage('Success! Updating Community Activity...'));
			setTimeout(() => window.location ='/dashboard', 1500);
		})
		.catch(err => {
			dispatch(updateModalMessage(err.response.data.message));
		})
}

export const deleteUserFromFavorites = (username) => dispatch => {
	console.log(username);
	api.delete('users/me/favorites', {
			username
		})
		.then(res => {
			if (res.statusText !== 'OK') {
				return Promise.reject(res);
			}
			dispatch(updateModalMessage('Success! Updating Community Activity...'));
			setTimeout(() => window.location ='/dashboard', 1500);
		})
		.catch(err => {
			dispatch(updateModalMessage(err.response.data.message));
		})
}

export const UPDATE_DISCUSSION_TO_VIEW = 'UPDATE_DISCUSSION_TO_VIEW';
export const updateDiscussionToView = (discussion) => ({
	type: UPDATE_DISCUSSION_TO_VIEW,
	discussion
})

export const getSingleDiscussion = (id) => dispatch => {
	api.get(`single-discussion/${id}`)
		.then(res => {
			if (res.statusText !== 'OK') {
				return Promise.reject(res)
			}
			return res.data.discussion
		})
		.then(discussion => {
			dispatch(updateDiscussionToView(discussion))
		})
		.catch(err => {
			console.log('error: ', err.response.data.message);
		});   
}

export const POST_NEW_COMMENT_SUCCESS = 'POST_NEW_COMMENT_SUCCESS';
export const postNewCommentSuccess = (discussion) => ({
	type: POST_NEW_COMMENT_SUCCESS,
	discussion
})

export const postNewComment = (comment) => dispatch => {
	api.post('discussions/comment', {
	 		discussionId: comment.discussionId,
	 		discussionName: comment.discussionName,
	 		text: comment.text
	 	})
	 	.then((res) => {
	 		if (res.status === 201) {
	 			dispatch(postNewCommentSuccess(res.data.discussion));
	 		} else {
				return Promise.reject(res);
			}
	 	}) 
	 	.catch((err) => {
			dispatch(updateModalMessage(err.response.data.message))
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

	const getUser = () => {
		return api.get('users/me');
	}
	
	const getCommunity =  () => {
		return api.get('users/me/community');
	}

	const getDiscussions = () => {
		return api.get('discussions');
	}

	axios.all([getUser(), getCommunity(), getDiscussions()])
		.then(axios.spread((userRes, commRes, discRes) => {
			if (userRes.statusText !== 'OK' ||
				commRes.statusText !== 'OK' ||
				discRes.statusText !== 'OK') {
				return Promise.reject(userRes)
			}
			return [userRes.data.user, commRes.data.comments, discRes.data.discussions]
		}))
		.then(res => {
			dispatch(getUserSessionSuccess(...res));
		})
		.catch(err => {
			console.log('error: ', err.response.data.message);
			window.location.replace('/');
		});   
}

export const signInUser = (username, password) => dispatch => {
	dispatch(updateModalMessage('Signing in...'));
 	api.get('users/login', {
	 		headers: {
	 			authorization: 'Basic ' + btoa(username + ':' + password)
	 		}
	 	})
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

export const logOutUser = user => {
	api.get('users/logout')
	 	.then(res => {
			window.location.replace('/');
		})
}