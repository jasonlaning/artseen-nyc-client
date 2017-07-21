import React from 'react';
import { shallow, mount } from 'enzyme';
import { UserSettingsModal } from '../user-settings-modal';

const mockToggleModal = {
	type: 'TOGGLE_MODAL'
	};

const mockUpdateUserSettings = {
	type: 'UPDATE_USER_SETTINGS'
	};
   
jest.mock('../../../actions', () => Object.assign({},
	require.requireActual('../../../actions'),
	{
		toggleModal: jest.fn().mockImplementation(() => {
			return mockToggleModal;
		}),
		updateUserSettings: jest.fn().mockImplementation(() => {
			return mockUpdateUserSettings;
		})
	}
));

describe('<UserSettingsModal />', () => {

	const user = {
		username: 'someUsername',
		profilePicURL: 'http://something.jpg',
		location: 'new york',
		about: 'something something about me'
	}

	const message = '';

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<UserSettingsModal dispatch={dispatch} user={user} message={message}  />);
	});

	it('Should dispatch toggleModal when close modal link is clicked', () => {
		const dispatch = jest.fn();
		const mockedEvent = {
			preventDefault: () => false
		};
		const wrapper = shallow(<UserSettingsModal dispatch={dispatch} user={user} message={message}  />);
		wrapper.find('a').simulate('click', mockedEvent);
		expect(dispatch).toHaveBeenCalledWith(mockToggleModal);
	})

	it('Should dispatch updateUserSettings when form is submitted', () => {
		const dispatch = jest.fn();
		const mockedEvent = {
			target: {
				about: 'new about section',
				location: 'new location',
				profilePicURL: 'http://someimage.jpg'
			},
			preventDefault: () => false
		};
		const wrapper = shallow(<UserSettingsModal dispatch={dispatch} user={user} message={message}  />);
		wrapper.find('form').simulate('submit', mockedEvent);
		expect(dispatch).toHaveBeenCalledWith(mockUpdateUserSettings);
	})

});