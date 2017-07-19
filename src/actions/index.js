import {parseString} from 'xml2js';
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

export const UPDATE_COMMENT_FORM_MESSAGE = 'UPDATE_COMMENT_FORM_MESSAGE';
export const updateCommentFormMessage = (message) => ({
	type: UPDATE_COMMENT_FORM_MESSAGE,
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

	dispatch(updateModalMessage('Searching...'));
	axios({
		method: 'get',
		url: 'https://crossorigin.me/http://www.nyartbeat.com/list/event_free.en.xml'
	})
		.then(res => {
			parseString(res.data, (err, result) => {
				if (err) {
					dispatch(updateModalMessage('Server Error'));
					console.log(err);
				} else {
					const exhibitions = result.Events.Event;
					const searchResults = searchExhibitions(searchTerms, exhibitions);
					dispatch(getSearchResultsSuccess(searchResults));
					dispatch(updateModalMessage(''));
				}
			})
		})
		.catch(err => {
			console.log(err);
		})

	/*
	const exhibitions = mockExhibitions.Events.Event;
	const searchResults = searchExhibitions(searchTerms, exhibitions);
	console.log('searchResults: ', searchResults)
	dispatch(getSearchResultsSuccess(searchResults));
	*/
}

export const GET_MORE_DISCUSSIONS_SUCCESS = 'GET_MORE_DISCUSSIONS_SUCCESS';
export const getMoreDiscussionsSuccess = (discussions) => ({
	type: GET_MORE_DISCUSSIONS_SUCCESS,
	discussions
})

export const UPDATE_LOAD_MORE_BUTTON = 'UPDATE_LOAD_MORE_BUTTON';
export const updateLoadMoreButton = (button) => ({
	type: UPDATE_LOAD_MORE_BUTTON,
	button
})

export const GET_MORE_COMMUNITY_SUCCESS = 'GET_MORE_COMMUNITY_SUCCESS';
export const getMoreCommunitySuccess = (comments) => ({
	type: GET_MORE_COMMUNITY_SUCCESS,
	comments
})

export const getMoreDiscussions = (skip) => dispatch => {

	api.get(`discussions/${skip}`)
		.then(res => {
			if (res.statusText !== 'OK') {
				return Promise.reject(res)
			} else if (res.data.discussions.length > 0) {
				dispatch(getMoreDiscussionsSuccess(res.data.discussions));
			} else {
				dispatch(updateLoadMoreButton('discussions'));
			}
		})
		.catch(err => console.log(err));
}

export const getMoreCommunity = (skip) => dispatch => {

	api.get(`users/me/community/${skip}`)
		.then(res => {
			if (res.statusText !== 'OK') {
				return Promise.reject(res)
			} else if (res.data.comments.length > 0) {
				dispatch(getMoreCommunitySuccess(res.data.comments));
			} else {
				dispatch(updateLoadMoreButton('community'));
			}
		})
		.catch(err => console.log(err));
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
			dispatch(updateModalMessage(`${username} followed!`));
			setTimeout(() => dispatch(updateUserFavoritesSuccess(res.data.user)), 1600);
		})
		.then(() => {
			dispatch(getCommunity());
		})
		.catch(err => {
			dispatch(updateModalMessage(err.response.data.message));
		})
		setTimeout(() => dispatch(toggleModal('followUserModal')), 1500);
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
			dispatch(updateModalMessage(`${username} unfollowed!`))
			setTimeout(() => dispatch(updateUserFavoritesSuccess(res.data.user)), 1600);
		})
		.then(() => {
			dispatch(getCommunity());
		})
		.catch(err => {
			dispatch(updateModalMessage(err.response.data.message));
		})
		setTimeout(() => dispatch(toggleModal('followUserModal')), 1500);
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

export const postNewComment = (username, comment) => dispatch => {

	// check for Demo user to disable demo comments
	let demoUser = username.slice(0, 10);
	console.log(demoUser);
	if (demoUser === 'Demo123abc') {
		const demoMsg = 'Commenting is disabled for demos';
		return dispatch(updateCommentFormMessage(demoMsg));
	} else {
		dispatch(updateCommentFormMessage('Saving comment...'));
		api.post('discussions/comment', {
		 		discussionId: comment.discussionId,
		 		discussionName: comment.discussionName,
		 		text: comment.text
		 	})
		 	.then((res) => {
		 		if (res.status === 201) {
		 			dispatch(updateCommentFormMessage(''));
		 			dispatch(postNewCommentSuccess(res.data.discussion));
		 		} else {
					return Promise.reject(res);
				}
		 	}) 
		 	.catch((err) => {
		 		if(err.response.data.message) {
		 			dispatch(updateCommentFormMessage(err.response.data.message))
		 		} else {
		 			dispatch(updateCommentFormMessage('Error'));
		 			console.log(err);
		 		}
			})
	}
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
	 			console.lo
	 			dispatch(getUserSession());
	 		} else {
				return Promise.reject();
			}
	 	}) 
	 	.catch(() => {
			dispatch(updateModalMessage('Invalid Username or Password'));
		})
}

export const signUpNewUser = (username, password, location) => dispatch => {
	dispatch(updateModalMessage('Signing up...'));
 	api.post('users/sign-up', {
	 		username,
	 		password,
	 		location,
	 		favoriteUsers: []
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

export const createNewDemoUser = () => dispatch => {

	const demoData = {
		username: `Demo123abc${((Math.random() * 999999999999) + 111111111111).toString()}`,
		password: 'demo',
		location: 'New York, New York',
		about: 'This is a demo profile. Sign up for an account to enable commenting.',
		favoriteUsers: ['jesseDidThis', 'maggie_mags', 'everything_ryan']
	}
	
 	api.post('users/sign-up', {
	 		username: demoData.username,
	 		password: demoData.password,
	 		location: demoData.location,
	 		about: demoData.about,
	 		favoriteUsers: demoData.favoriteUsers
	 	})
	 	.then((res) => {
	 		if (res.status === 201) {
	 			dispatch(signInUser(demoData.username, demoData.password));
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
		.catch(err => {
			console.log(err);
			dispatch(updateModalMessage('Error'));
		});
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
	 			dispatch(getUserSession());
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