import React from 'react';
import { shallow, mount } from 'enzyme';
import { UserProfile } from '../user-profile';

const mockToggleModal = {
	type: 'TOGGLE_MODAL'
	};
   
jest.mock('../../../actions', () => Object.assign({},
	require.requireActual('../../../actions'),
	{
		toggleModal: jest.fn().mockImplementation(() => {
			return mockToggleModal;
		})
	}
));

describe('<UserProfile />', () => {

	const user = {
		username: 'someUsername',
		profilePicURL: 'http://something.jpg',
		location: 'new york',
		about: 'something something about me'
	}

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<UserProfile dispatch={dispatch} user={user}  />);
	});

	it('Should dispatch toggleModal when link for update profile pic is clicked', () => {
		const dispatch = jest.fn();
		const mockedEvent = {
			preventDefault: () => false
		};
		const wrapper = shallow(<UserProfile dispatch={dispatch} user={user}  />);
		wrapper.find('a').at(0).simulate('click', mockedEvent);
		expect(dispatch).toHaveBeenCalledWith(mockToggleModal);
	})

	it('Should dispatch toggleModal when userSettings link is clicked', () => {
		const dispatch = jest.fn();
		const mockedEvent = {
			preventDefault: () => false
		};
		const wrapper = shallow(<UserProfile dispatch={dispatch} user={user}  />);
		wrapper.find('a').at(1).simulate('click', mockedEvent);
		expect(dispatch).toHaveBeenCalledWith(mockToggleModal);
	})

});