import { artseenReducer } from './index';
import * as actions from '../actions';

const initialState = {
	user: {
		username: '',
		location: '',
		about: '',
		profilePicURL: '',
		favoriteUsers: ''
	},
	loggedIn: false,
	imageUploaded: '',
	exhibitions: [],
	searchResults: [],
	community: [],
	discussions: [],
	discussionToView: {
		id: '',
		comments: []
	},
	discussionIdFromSearch: '',
	searchSubmitted: false,
	singleDiscussionLoaded: false,
	userToFollow: {},
	modals: {
		signInModal: false,
		followUserModal: false,
		searchModal: false,
		userSettingsModal: false,
		profilePicModal: false,
		signUpModal: false,
		burgerModal: false
	},
	prevAction: '',
	message: '',
	commentFormMessage: '',
	stickyStatus: false,
	buttonsDisabled: []
};

describe('artseenReducer', () => {

	it('Should set the initial state when nothing is passed in', () => {
		const state = artseenReducer(undefined, {type: '__UNKNOWN'});
		expect(state).toEqual(initialState);
	});

	it('Should return the current state on an unknown action', () => {
		let currentState = {};
		const state = artseenReducer(currentState, {type: '__UNKNOWN'});
	expect(state).toBe(currentState);
    	});

	describe('updateModalMessage', () => {
		it('Should update the modal message', () => {
			let state;
			const message = 'Server Error';
			state = artseenReducer(state, actions.updateModalMessage(message));
			expect(state.message).toEqual(message);
		})
	})

	describe('updateCommentFormMessage', () => {
		it('Should update the message for the comment form', () => {
			let state;
			const message = 'Fake message';
			state = artseenReducer(state, actions.updateCommentFormMessage(message));
			expect(state.commentFormMessage).toEqual(message);
		});
	});

	describe('getUserSessionSuccess', () => {
		it('Should save the user info to the state and set loggedIn to true', () => {
			let state;
			const user = { username: 'foo'}
			const community = [{comment: 'something'}];
			const discussions = [{discussion: 'something else'}];
			state = artseenReducer(state, actions.getUserSessionSuccess(user, community, discussions));
			expect(state.user).toEqual(user);
			expect(state.community).toEqual(community);
			expect(state.discussions).toEqual(discussions);
			expect(state.loggedIn).toEqual(true);
		});
	});

	describe('getUserToFollowSuccess', () => {
		it('Should add user info to userToFollow and set modal to true', () => {
			let state;
			const userToFollow = { username: 'somethingFake', followed: false };
			state = artseenReducer(state, actions.getUserToFollowSuccess(userToFollow));
			expect(state.userToFollow).toEqual(userToFollow);
			expect(state.modals.followUserModal).toEqual(true);
		});
	});

	describe('updateUserFavoritesSuccess', () => {
		it('Should update the user`s list of favorite users', () => {
			let state;
			const user = {
				username: 'myUsername',
				favoriteUsers: [{username: 'somebody'}]
			}
			state = artseenReducer(state, actions.updateUserFavoritesSuccess(user));
			expect(state.user).toEqual(user);
		});
	});

	describe('getMoreDiscussionsSuccess', () => {
		it('Should add new discussions to discussions', () => {
			let state = {};
			state.discussions = [{id: 'olddiscussion'}];
			const discussions = [{id: 'newdiscussion#1'}, {id: 'newdiscussion#2'}];
			const expectedDiscussions = [{id: 'olddiscussion'}, {id: 'newdiscussion#1'}, {id: 'newdiscussion#2'}];
			state = artseenReducer(state, actions.getMoreDiscussionsSuccess(discussions));
			expect(state.discussions).toEqual(expectedDiscussions);
		});
	});

	describe('getMoreCommunitySuccess', () => {
		it('Should add new comments to community comments', () => {
			let state = {
				community: [{comment: 'first comment'}]
			}
			const community = [{comment: 'new comment'}]
			const expectedCommunity = [{comment: 'first comment'}, {comment: 'new comment'}];
			state = artseenReducer(state, actions.getMoreCommunitySuccess(community));
			expect(state.community).toEqual(expectedCommunity);
		});
	});

	describe('getCommunitySuccess', () => {
		it('Should save fetched community to the state', () => {
			let state;
			const community = [{comment: 'first comment'}, {comment: 'second comment'}];
			state = artseenReducer(state, actions.getCommunitySuccess(community));
			expect(state.community).toEqual(community);
		});
	});

	describe('updateDiscussionToView', () => {
		it('Should save discussion to view and set loaded to true', () => {
			let state;
			const discussion = {id: '123abc'};
			state = artseenReducer(state, actions.updateDiscussionToView(discussion));
			expect(state.discussionToView).toEqual(discussion);
			expect(state.singleDiscussionLoaded).toEqual(true);
		});
	});

	describe('getDiscussionFromSearchSuccess', () => {
		it('Should save the discussion and set loaded to true', () => {
			let state;
			const discussion = {id: 'abc123'};
			state = artseenReducer(state, actions.getDiscussionFromSearchSuccess(discussion));
			expect(state.discussionToView).toEqual(discussion);
			expect(state.singleDiscussionLoaded).toEqual(true);
		});
	});

	describe('toggleModal', () => {
		it('Should toggle the modal', () => {
			let state = {
				modals: {
					searchModal: false
				}
			}
			const modal = 'searchModal';
			const expectedModalStatus = true;
			state = artseenReducer(state, actions.toggleModal(modal));
			expect(state.modals.searchModal).toEqual(expectedModalStatus);
		});
	});

	describe('updateLoadMoreButton', () => {
			it('Should add button to disabled buttons', () => {
				let state;
				const button = 'loadMoreButton';
				state = artseenReducer(state, actions.updateLoadMoreButton(button));
				expect(state.buttonsDisabled).toEqual([button]);
			});
		});	

	describe('getSearchResultsSuccess', () => {
		it('Should save the search results and set searchSubmitted to true', () => {
			let state;
			const searchResults = [{name: 'some exhibition'}, {name: 'some other exhibition'}];
			state = artseenReducer(state, actions.getSearchResultsSuccess(searchResults));
			expect(state.searchResults).toEqual(searchResults);
			expect(state.searchSubmitted).toEqual(true);
		});
	});

	describe('postNewCommentSuccess', () => {
		it('Should update discussionToView with updated discussion that includes new comment', () => {
			let state;
			const discussion = {
				comments: [{text: 'some new comment about art'}]
			}
			state = artseenReducer(state, actions.postNewCommentSuccess(discussion));
			expect(state.discussionToView).toEqual(discussion);
		});
	});

	describe('uploadImageSuccess', () => {
		it('Should save the url of the uploaded image', () => {
			let state;
			const url = 'http://fakeimage.jpg';
			state = artseenReducer(state, actions.uploadImageSuccess(url));
			expect(state.imageUploaded).toEqual(url);
		});
	});

	describe('resetProfilePicModal', () => {
		it('Should set imageUploaded to an empty string', () => {
			let state;
			state = artseenReducer(state, actions.resetProfilePicModal());
			expect(state.imageUploaded).toEqual('');
		});
	});

	describe('resetSingleDiscussion', () => {
		it('Should set singleDiscussionLoaded to false', () => {
			let state;
			state = artseenReducer(state, actions.resetSingleDiscussion());
			expect(state.singleDiscussionLoaded).toEqual(false);
		});
	});

	describe('updateSticky', () => {
		it('Should update status of sticky navbar', () => {
			let state;
			const status = 1;
			state = artseenReducer(state, actions.updateSticky(status));
			expect(state.stickyStatus).toEqual(true);
		});
	});

})