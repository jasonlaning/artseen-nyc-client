import {mockUser, mockDiscussions, mockCommunity} from '../mock-data';

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

export const fetchUser = () => dispatch => {
 /*   fetch('/users/me').then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(user => {
        dispatch(fetchUserSuccess(user));
    });*/
	const user = Object.assign ({}, mockUser);

	dispatch(fetchUserSuccess(user));
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

export const fetchCommunity = () => dispatch => {

	dispatch(fetchCommunitySuccess(mockCommunity));
}

export const UPDATE_DISCUSSION_TO_VIEW = 'UPDATE_DISCUSSION_TO_VIEW';
export const updateDiscussionToView = discussionToView => ({
	type: UPDATE_DISCUSSION_TO_VIEW,
	discussionToView
})