import {
	UPDATE_MODAL_MESSAGE,
	updateModalMessage,
	UPDATE_COMMENT_FORM_MESSAGE,
	updateCommentFormMessage,
	TOGGLE_MODAL,
	toggleModal,
	RESET_SINGLE_DISCUSSION,
	resetSingleDiscussion,
	GET_DISCUSSION_FROM_SEARCH_SUCCESS,
	getDiscussionFromSearchSuccess,
	getDiscussionFromSearch,
	GET_SEARCH_RESULTS_SUCCESS,
	getSearchResultsSuccess,
	getExhibitionsForSearch,
	GET_MORE_DISCUSSIONS_SUCCESS,
	getMoreDiscussionsSuccess,
	UPDATE_LOAD_MORE_BUTTON,
	updateLoadMoreButton,
	GET_MORE_COMMUNITY_SUCCESS,
	getMoreCommunitySuccess,
	getMoreDiscussions,
	getMoreCommunity,
	GET_COMMUNITY_SUCCESS,
	getCommunitySuccess,
    getCommunity,
	GET_USER_TO_FOLLOW_SUCCESS,
	getUserToFollowSuccess,
	getUserToFollow,
	UPDATE_USER_FAVORITES_SUCCESS,
	updateUserFavoritesSuccess,
	addUserToFavorites,
	deleteUserFromFavorites,
	UPDATE_DISCUSSION_TO_VIEW,
	updateDiscussionToView,
	getSingleDiscussion,
	POST_NEW_COMMENT_SUCCESS,
	postNewCommentSuccess,
	postNewComment,
	GET_USER_SESSION_SUCCESS,
	getUserSessionSuccess,
	getUserSession,
	RESET_PROFILE_PIC_MODAL,
	resetProfilePicModal,
	UPLOAD_IMAGE_SUCCESS,
	uploadImageSuccess,
	uploadImage,
	UPDATE_USER_SETTINGS_SUCCESS,
	updateUserSettingsSuccess,
	updateUserSettings,
	logOutUser
} from './index';

import axios from 'axios';

import MockAdapter from 'axios-mock-adapter';

import { API_BASE_URL } from '../config';

describe('updateModalMessage', () => {
    it('Should return the action', () => {
        const message = 'message';
        const action = updateModalMessage(message);
        expect(action.type).toEqual(UPDATE_MODAL_MESSAGE);
        expect(action.message).toEqual(message);
    });
});

describe('updateCommentFormMessage', () => {
    it('Should return the action', () => {
        const message = 'message';
        const action = updateCommentFormMessage(message);
        expect(action.type).toEqual(UPDATE_COMMENT_FORM_MESSAGE);
        expect(action.message).toEqual(message);
    });
});

describe('toggleModal', () => {
    it('Should return the action', () => {
        const modal = 'modal';
        const action = toggleModal(modal);
        expect(action.type).toEqual(TOGGLE_MODAL);
        expect(action.modal).toEqual(modal);
    });
});

describe('resetSingleDiscussion', () => {
    it('Should return the action', () => {
        const action = resetSingleDiscussion();
        expect(action.type).toEqual(RESET_SINGLE_DISCUSSION);
    });
});

describe('getDiscussionFromSearchSuccess', () => {
    it('Should return the action', () => {
        const discussion = 'discussion';
        const action = getDiscussionFromSearchSuccess(discussion);
        expect(action.type).toEqual(GET_DISCUSSION_FROM_SEARCH_SUCCESS);
        expect(action.discussion).toEqual(discussion);
    });
});

describe('getSearchResultsSuccess', () => {
    it('Should return the action', () => {
        const searchResults = 'searchResults';
        const action = getSearchResultsSuccess(searchResults);
        expect(action.type).toEqual(GET_SEARCH_RESULTS_SUCCESS);
        expect(action.searchResults).toEqual(searchResults);
    });
});

describe('getMoreDiscussionsSuccess', () => {
    it('Should return the action', () => {
        const discussions = 'discussions';
        const action = getMoreDiscussionsSuccess(discussions);
        expect(action.type).toEqual(GET_MORE_DISCUSSIONS_SUCCESS);
        expect(action.discussions).toEqual(discussions);
    });
});

describe('updateLoadMoreButton', () => {
    it('Should return the action', () => {
        const button = 'button';
        const action = updateLoadMoreButton(button);
        expect(action.type).toEqual(UPDATE_LOAD_MORE_BUTTON);
        expect(action.button).toEqual(button);
    });
});

describe('getMoreCommunitySuccess', () => {
    it('Should return the action', () => {
        const comments = 'comments';
        const action = getMoreCommunitySuccess(comments);
        expect(action.type).toEqual(GET_MORE_COMMUNITY_SUCCESS);
        expect(action.comments).toEqual(comments);
    });
});

describe('getCommunitySuccess', () => {
    it('Should return the action', () => {
        const community = 'community';
        const action = getCommunitySuccess(community);
        expect(action.type).toEqual(GET_COMMUNITY_SUCCESS);
        expect(action.community).toEqual(community);
    });
});

describe('getUserToFollowSuccess', () => {
    it('Should return the action', () => {
        const userToFollow = 'userToFollow';
        const action = getUserToFollowSuccess(userToFollow);
        expect(action.type).toEqual(GET_USER_TO_FOLLOW_SUCCESS);
        expect(action.userToFollow).toEqual(userToFollow);
    });
});

describe('updateUserFavoritesSuccess', () => {
    it('Should return the action', () => {
        const user = 'user';
        const action = updateUserFavoritesSuccess(user);
        expect(action.type).toEqual(UPDATE_USER_FAVORITES_SUCCESS);
        expect(action.user).toEqual(user);
    });
});

describe('updateDiscussionToView', () => {
    it('Should return the action', () => {
        const discussion = 'discussion';
        const action = updateDiscussionToView(discussion);
        expect(action.type).toEqual(UPDATE_DISCUSSION_TO_VIEW);
        expect(action.discussion).toEqual(discussion);
    });
});

describe('postNewCommentSuccess', () => {
    it('Should return the action', () => {
        const discussion = 'discussion';
        const action = postNewCommentSuccess(discussion);
        expect(action.type).toEqual(POST_NEW_COMMENT_SUCCESS);
        expect(action.discussion).toEqual(discussion);
    });
});

describe('getUserSessionSuccess', () => {
    it('Should return the action', () => {
        const user = 'user';
        const community = 'community';
        const discussions = 'discussions';
        const action = getUserSessionSuccess(user);
        expect(action.type).toEqual(GET_USER_SESSION_SUCCESS);
        expect(action.user).toEqual(user, community, discussions);
    });
});

describe('resetProfilePicModal', () => {
    it('Should return the action', () => {
        const action = resetProfilePicModal();
        expect(action.type).toEqual(RESET_PROFILE_PIC_MODAL);
    });
});

describe('uploadImageSuccess', () => {
    it('Should return the action', () => {
        const url = 'url';
        const action = uploadImageSuccess(url);
        expect(action.type).toEqual(UPLOAD_IMAGE_SUCCESS);
        expect(action.url).toEqual(url);
    });
});

describe('updateUserSettingsSuccess', () => {
    it('Should return the action', () => {
        const user = 'user';
        const modal = 'modal';
        const action = updateUserSettingsSuccess(user);
        expect(action.type).toEqual(UPDATE_USER_SETTINGS_SUCCESS);
        expect(action.user).toEqual(user, modal);
    });
});

describe('getDiscussionFromSearch', () => {
    it('Should dispatch getDiscussionFromSearchSuccess', () => {
        const discussion = {
        	id: '134',
        	$: {
        		href: 'href'
        	},
        	Name: ['something'],
        	Venue: [{
        		Name: ['name'],
        		Address: ['address'],
        		Area: ['area']
        	}],
        	Description: ['description'],
        	Image: ['', '', {$: {src: 'src'}}],
        	DateStart: ['20170101'],
        	DateEnd: ['20170201'],
        	searchTerms: []
        };
        const mock = new MockAdapter(axios);
        mock
            .onAny()
        	.reply(200, {
        				discussion
        			})
        const dispatch = jest.fn();
        getDiscussionFromSearch(discussion)(dispatch).then(() => {
            expect(dispatch).toHaveBeenCalledWith(getDiscussionFromSearchSuccess(discussion));
        }).catch((err) => console.log(err));
    });
});

describe('getMoreDiscussions', () => {
    it('Should dispatch getMoreDiscussionsSuccess', () => {
        const mock = new MockAdapter(axios);
        mock
            .onAny()
            .reply(200, {
                    discussions: [{discussion: {id: '123abc'}}]
                    })
        const dispatch = jest.fn();
        getMoreDiscussions(9)(dispatch).then(() => {
            expect(dispatch).toHaveBeenCalledWith(getMoreDiscussionsSuccess([{
                discussion: {id: '123abc'}
            }]));
        }).catch((err) => console.log(err));
    });
});

describe('getMoreCommunity', () => {
    it('Should dispatch getMoreCommunitySuccess', () => {
        const comments = [{comment: 'something'}];
        const mock = new MockAdapter(axios);
        mock
            .onAny()
            .reply(200, {
                    comments
                    })
        const dispatch = jest.fn();
        getMoreCommunity(9)(dispatch).then(() => {
            expect(dispatch).toHaveBeenCalledWith(getMoreCommunitySuccess(comments));
        }).catch((err) => console.log(err));
    });
});

describe('getCommunity', () => {
    it('Should dispatch getCommunitySuccess', () => {
        const comments = [{comment: 'something'}];
        const mock = new MockAdapter(axios);
        mock
            .onAny()
            .reply(200, {
                    comments
                    })
        const dispatch = jest.fn();
        getCommunity()(dispatch).then(() => {
            expect(dispatch).toHaveBeenCalledWith(getCommunitySuccess(comments));
        }).catch((err) => console.log(err));
    });
});

describe('getUserToFollow', () => {
    it('Should dispatch getUserToFollowSuccess', () => {
        const user = {
            username: 'something'
        };
        const mock = new MockAdapter(axios);
        mock
            .onAny()
            .reply(200, {
                    user
                    })
        const dispatch = jest.fn();
        getUserToFollow(user.username)(dispatch).then(() => {
            expect(dispatch).toHaveBeenCalledWith(getUserToFollowSuccess(user));
        }).catch((err) => console.log(err));
    });
});

describe('addUserToFavorites', () => {
    it('Should dispatch updateModalMessage', () => {
        const user = {
            username: 'something'
        };
        const mock = new MockAdapter(axios);
        mock
            .onAny()
            .reply(201, {
                    user
                    })
        const dispatch = jest.fn();
        addUserToFavorites(user.username)(dispatch).then(() => {
            expect(dispatch).toHaveBeenCalledWith(updateModalMessage(`${user.username} followed!`));
        }).catch((err) => console.log(err));
    });
});

describe('deleteUserFromFavorites', () => {
    it('Should dispatch updateModalMessage', () => {
        const user = {
            username: 'something'
        };
        const mock = new MockAdapter(axios);
        mock
            .onAny()
            .reply(200, {
                    user
                    })
        const dispatch = jest.fn();
        deleteUserFromFavorites(user.username)(dispatch).then(() => {
            expect(dispatch).toHaveBeenCalledWith(updateModalMessage(`${user.username} unfollowed!`));
        }).catch((err) => console.log(err));
    });
});

describe('getSingleDiscussion', () => {
    it('Should dispatch updateDiscussionToView', () => {
        const discussion = {
            name: 'something'
        };
        const mock = new MockAdapter(axios);
        mock
            .onAny()
            .reply(200, {
                    discussion
                    })
        const dispatch = jest.fn();
        getSingleDiscussion('123abc')(dispatch).then(() => {
            expect(dispatch).toHaveBeenCalledWith(updateDiscussionToView(discussion));
        }).catch((err) => console.log(err));
    });
});

describe('postNewComment', () => {
    it('Should dispatch postNewCommentSuccess', () => {
        const discussion = {
            name: 'something'
        };
        const username = 'someUser';
        const comment = {
            text: 'some comment',
            discussionId: '123abc',
            discussionName: 'name'
        };

        const mock = new MockAdapter(axios);
        mock
            .onAny()
            .reply(201, {
                    discussion
                    })
        const dispatch = jest.fn();
        postNewComment(username, comment)(dispatch).then(() => {
            expect(dispatch).toHaveBeenCalledWith(postNewCommentSuccess(discussion));
        }).catch((err) => console.log(err));
    });
});

describe('getUserSession', () => {
    it('Should dispatch getUserSessionSuccess', () => {
        const user = {
            username: 'someUsername'
        };
        const comments = [{text: 'some comment about art'}];
        const discussions = [{
            name: 'something'
        }];
        const mock = new MockAdapter(axios);
        mock
            .onAny()
            .reply(200, {
                    user, comments, discussions
                    })
        const dispatch = jest.fn();
        getUserSession()(dispatch).then(() => {
            expect(dispatch).toHaveBeenCalledWith(getUserSessionSuccess(user, comments, discussions));
        }).catch((err) => console.log(err));
    });
});

describe('uploadImage', () => {
    it('Should dispatch uploadImageSuccess', () => {
        const secure_url = 'https://someimage.jpg'
        const mock = new MockAdapter(axios);
        mock
            .onAny()
            .reply(200, {
                    secure_url
                    })
        const dispatch = jest.fn();
        uploadImage(['image'])(dispatch).then(() => {
            expect(dispatch).toHaveBeenCalledWith(uploadImageSuccess(secure_url));
        }).catch((err) => console.log(err));
    });
});

describe('updateUserSettings', () => {
    it('Should dispatch updateUserSettingsSuccess', () => {
        const location = 'new yawk';
        const about = 'about the user';
        const profilePicURL = 'http://someimage.jpg';
        const modal = 'userSettingsModal';
        const user = {
            location,
            about,
            profilePicURL
        }
        const mock = new MockAdapter(axios);
        mock
            .onAny()
            .reply(200, {
                    user
                    })
        const dispatch = jest.fn();
        updateUserSettings(location, about, profilePicURL, modal)(dispatch).then(() => {
            expect(dispatch).toHaveBeenCalledWith(updateUserSettingsSuccess(user, modal));
        }).catch((err) => console.log(err));
    });
});