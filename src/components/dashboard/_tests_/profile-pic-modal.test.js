import React from 'react';
import { shallow, mount } from 'enzyme';
import { ProfilePicModal } from '../profile-pic-modal';

const mockToggleModal = {
	type: 'TOGGLE_MODAL'
	};

const mockUpdateUserSettings = {
	type: 'UPDATE_USER_SETTINGS'
	};

const mockResetProfilePicModal = {
	type: 'RESET_PROFILE_PIC_MODAL'
	};
     
jest.mock('../../../actions', () => Object.assign({},
	require.requireActual('../../../actions'),
	{
		toggleModal: jest.fn().mockImplementation(() => {
			return mockToggleModal;
		}),
		updateUserSettings: jest.fn().mockImplementation(() => {
			return mockUpdateUserSettings;
		}),
		resetProfilePicModal: jest.fn().mockImplementation(() => {
			return mockResetProfilePicModal;
		})
	}
));

describe('<ProfilePicModal />', () => {

	const imageUploaded = '';
	const user = {
		location: 'new york',
		about: 'something about me'
	}
	const message = '';

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<ProfilePicModal dispatch={dispatch} imageUploaded={imageUploaded} user={user} 
			message={message} />);
	});

	it('Should dispatch toggleModal when close link is clicked', () => {
		const dispatch = jest.fn();
		const mockedEvent = {
			preventDefault: () => false
		};
		const wrapper = shallow(<ProfilePicModal dispatch={dispatch} imageUploaded={imageUploaded} user={user} 
			message={message} />);
		wrapper.find('a[className="modal-x"]').simulate('click', mockedEvent);
		expect(dispatch).toHaveBeenCalledWith(mockToggleModal);
	})

	it('Should dispatch updateUserSettings when form is submitted', () => {
		const dispatch = jest.fn();
		const mockedEvent = {
			preventDefault: () => false
		};
		const wrapper = shallow(<ProfilePicModal dispatch={dispatch} imageUploaded={imageUploaded} user={user} 
			message={message} />);
		wrapper.find('form').simulate('submit', mockedEvent);
		expect(dispatch).toHaveBeenCalledWith(mockUpdateUserSettings);
	})

	it('Should dispatch resetProfilePicModal when close link is clicked', () => {
		const dispatch = jest.fn();
		const mockedEvent = {
			preventDefault: () => false
		};
		const wrapper = shallow(<ProfilePicModal dispatch={dispatch} imageUploaded={imageUploaded} user={user} 
			message={message} />);
		wrapper.find('a[className="modal-x"]').simulate('click', mockedEvent);
		expect(dispatch).toHaveBeenCalledWith(mockResetProfilePicModal);
	})

});