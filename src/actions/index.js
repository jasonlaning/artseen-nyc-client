import {mockUser, mockDiscussions, mockCommunity, mockUserToFollow} from '../mock-data';

export const UPDATE_USER_FEED_VIEW = 'UPDATE_FEED_VIEW';
export const updateUserFeedView = userFeedView => ({
	type: 'UPDATE_FEED_VIEW',
	userFeedView
})

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = user => ({
	type: FETCH_USER_SUCCESS,
	user
})

export const fetchUser = (username, password) => dispatch => {
 /*   fetch('/users/me').then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(user => {
        dispatch(fetchUserSuccess(user));
    });*/
    const delay = () => new Promise (resolve =>
    	setTimeout(resolve, 10)
    );

	const user = Object.assign ({}, mockUser);

	return (
		delay()
			.then(() => {
				dispatch(fetchUserSuccess(user));
			})
			.then(() => {
				dispatch(fetchCommunity());
			})
	)
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
				dispatch(logOutUserSuccess(user));
				//window.location = '/';
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
export const updateDiscussionToView = (index, list) => ({
	type: UPDATE_DISCUSSION_TO_VIEW,
	index,
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