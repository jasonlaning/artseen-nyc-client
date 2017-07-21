import React from 'react';
import { shallow, mount } from 'enzyme';
import { FollowUserModal } from '../follow-user-modal';

const mockToggleModal = {
	type: 'TOGGLE_MODAL'
	};

const mockAddUserToFavorites = {
	type: 'ADD_USER_TO_FAVORITES'
	};

const mockDeleteUserFromFavorites = {
	type: 'DELETE_USER_FROM_FAVORITES'
	};
        
jest.mock('../../../actions', () => Object.assign({},
	require.requireActual('../../../actions'),
	{
		toggleModal: jest.fn().mockImplementation(() => {
			return mockToggleModal;
		}),
		addUserToFavorites: jest.fn().mockImplementation(() => {
			return mockAddUserToFavorites;
		}),
		deleteUserFromFavorites: jest.fn().mockImplementation(() => {
			return mockDeleteUserFromFavorites;
		})
	}
));

describe('<FollowUserModal />', () => {

	const user = {
		username: 'myUsername',
		favoriteUsers: [{username: 'someUser'}, {username: 'someOtherUser'}],

	};
	const userToFollow = {
		username: 'someUser',
		profilePicURL: 'http://something.com',
		location: 'New York',
		about: 'About me something something'
	};
	const message = '';

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<FollowUserModal dispatch={dispatch} user={user}	userToFollow={userToFollow} message={message}  />);
	});

	it('Should dispatch toggleModal when close link is clicked', () => {
		const dispatch = jest.fn();
		const mockedEvent = {
			preventDefault: () => false
		};
		const wrapper = shallow(<FollowUserModal dispatch={dispatch} user={user}	
			userToFollow={userToFollow} message={message}  />);
		wrapper.find('a[className="modal-x"]').simulate('click', mockedEvent);
		expect(dispatch).toHaveBeenCalledWith(mockToggleModal);
	})

	it('Should dispatch addUserToFavorites when "follow" button is clicked', () => {
		const dispatch = jest.fn();
		const mockedEvent = {
			preventDefault: () => false
		};
		const wrapper = shallow(<FollowUserModal dispatch={dispatch} user={user}	
			userToFollow={userToFollow} message={message}  />);
		wrapper.find('button').at(0).simulate('click', mockedEvent);
		expect(dispatch).toHaveBeenCalledWith(mockAddUserToFavorites);
	})

	it('Should dispatch deleteUserFromFavorites when "unfollow" button is clicked', () => {
		const dispatch = jest.fn();
		const mockedEvent = {
			preventDefault: () => false
		};
		const wrapper = shallow(<FollowUserModal dispatch={dispatch} user={user}	
			userToFollow={userToFollow} message={message}  />);
		wrapper.find('button').at(1).simulate('click', mockedEvent);
		expect(dispatch).toHaveBeenCalledWith(mockDeleteUserFromFavorites);
	})

});