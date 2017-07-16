import {mockDiscussions, mockExhibitions} from '../mock-data';
//import {parseString} from 'xml2js';
import axios from 'axios';
import searchExhibitions from '../components/search-exhibitions';

const {API_BASE_URL} = require('../config');

const api = axios.create({
	baseURL: API_BASE_URL,
	withCredentials: true
})

export const UPDATE_STICKY = 'UPDATE_STICKY';
export const updateSticky = (status) => ({
	type: UPDATE_STICKY,
	status
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

export const RESET_SINGLE_DISCUSSION = 'RESET_SINGLE_DISCUSSION';
export const resetSingleDiscussion = () => ({
	type: RESET_SINGLE_DISCUSSION
})

export const GET_DISCUSSION_FROM_SEARCH_SUCCESS = 'GET_DISCUSSION_FROM_SEARCH_SUCCESS';
export const getDiscussionFromSearchSuccess = (discussion) => ({
	type: GET_DISCUSSION_FROM_SEARCH_SUCCESS,
	discussion
})

export const getDiscussionFromSearch = (discussion) => dispatch => {

	api.post('/discussions', {
			id: discussion.id,
			href: discussion.$.href,
			name: discussion.Name[0],
			venue: {
				name: discussion.Venue[0].Name[0],
				address: discussion.Venue[0].Address[0],
				area: discussion.Venue[0].Area[0]._
			},
			description: discussion.Description[0],
			image: discussion.Image[2].$.src,
			dateStart: discussion.DateStart[0],
			dateEnd: discussion.DateEnd[0],
			searchTerms: discussion.searchTerms
		})
		.then(res => {
			dispatch(getDiscussionFromSearchSuccess(res.data.discussion));
		})
		.catch(err => {
			console.log(err);
		})
}

export const GET_SEARCH_RESULTS_SUCCESS = 'GET_SEARCH_RESULTS_SUCCESS';
export const getSearchResultsSuccess = (searchResults) => ({
	type: GET_SEARCH_RESULTS_SUCCESS,
	searchResults
})

export const getExhibitionsForSearch = (searchTerms) => dispatch => {

	/*
	axios({
		method: 'get',
		url: 'https://crossorigin.me/http://www.nyartbeat.com/list/event_free.en.xml'
	})
		.then(res => {
			parseString(res.data, (err, result) => {
				if (err) {
					console.log('error: ', err);
				} else {
					console.log(result.Events.Event);
					dispatch(getExhibitionsForSearchSuccess(result.Events.Event));
				}
			})
		})
		*/
	// get exhibitions above .then =>
	// uncomment import parseString
	const exhibitions = mockExhibitions.Events.Event;
	const searchResults = searchExhibitions(searchTerms, exhibitions);
	console.log('searchResults: ', searchResults)
	dispatch(getSearchResultsSuccess(searchResults));
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

export const getCommunity = () => dispatch => {

	api.get('users/me/community')
		.then(res => {
			if (res.statusText !== 'OK') {
				return Promise.reject(res)
			}
			dispatch(getCommunitySuccess(res.data.comments));
		})
		.catch(err => console.log(err))
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
				console.log(res.statusText);
				return Promise.reject(res)
			}
			dispatch(getUserToFollowSuccess(res.data.user));
		})
		.catch(err => console.log('error: ', err))
}

export const UPDATE_USER_FAVORITES_SUCCESS = 'UPDATE_USER_FAVORITES_SUCCESS';
export const updateUserFavoritesSuccess = (user) => ({
	type: UPDATE_USER_FAVORITES_SUCCESS,
	user
})

export const addUserToFavorites = (username) => dispatch => {
	api.post('users/me/favorites', {
			username
		})
		.then(res => {
			if (res.status !== 201) {
				return Promise.reject(res);
			}
			dispatch(updateUserFavoritesSuccess(res.data.user));
		})
		.then(() => {
			dispatch(getCommunity());
		})
		.then(()=> {
			dispatch(toggleModal('showFollowUserModal'))
		})
		.catch(err => {
			dispatch(updateModalMessage(err.response.data.message));
		})
}

export const deleteUserFromFavorites = (username) => dispatch => {
	console.log(username);
	api.delete('users/me/favorites', {
			data: {username}
		})
		.then(res => {
			if (res.statusText !== 'OK') {
				return Promise.reject(res);
			}
			dispatch(updateUserFavoritesSuccess(res.data.user));
		})
		.then(() => {
			dispatch(getCommunity());
		})
		.then(()=> {
			dispatch(toggleModal('showFollowUserModal'))
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
			dispatch(updateModalMessage("Discussion not found."))
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
			dispatch(updateModalMessage('Invalid Username or Passowrd'));
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

export const RESET_PROFILE_PIC_MODAL = 'RESET_PROFILE_PIC_MODAL';
export const resetProfilePicModal = () => ({
	type: RESET_PROFILE_PIC_MODAL
})

export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const uploadImageSuccess = (url) => ({
	type: UPLOAD_IMAGE_SUCCESS,
	url
})

export const uploadImage = (image) => dispatch => {
	dispatch(updateModalMessage('Uploading new image...'));
	const file = image[0];
	let data = new FormData();
	data.append('file', file);
	data.append('upload_preset', 'dw4rjy87');
	axios.post('https://api.cloudinary.com/v1_1/w0932jor82/upload', data)
		.then(res => {
			dispatch(uploadImageSuccess(res.data.secure_url));
			dispatch(updateModalMessage(''));
		})
		.catch(err => console.log(err));
}

export const UPDATE_USER_SETTINGS_SUCCESS = 'UPDATE_USER_SETTINGS_SUCCESS';
export const updateUserSettingsSuccess = (user, modal) => ({
	type: UPDATE_USER_SETTINGS_SUCCESS,
	user,
	modal
})

export const updateUserSettings = (location, about, profilePicURL, modal) => dispatch => {
	api.put('users/me', {
	 		location,
	 		about,
	 		profilePicURL
	 	})
	 	.then((res) => {
	 		if (res.status === 200) {
	 			dispatch(updateUserSettingsSuccess(res.data.user, modal));
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