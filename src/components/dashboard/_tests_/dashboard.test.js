import React from 'react';
import { shallow, mount } from 'enzyme';
import { Dashboard } from '../dashboard';

const mockGetUserSession = {
			type: 'GET_USER_SESSION'
		};

const mockLogOutUser = {
			type: 'LOG_OUT_USER'
		};

const mockToggleModal = {
            type: 'TOGGLE_MODAL'
        };

jest.mock('../../../actions', () => Object.assign({},
    require.requireActual('../../../actions'),
    {
    	getUserSession: jest.fn().mockImplementation(() => {
			return mockGetUserSession;
		}),
		logOutUser: jest.fn().mockImplementation(() => {
			return mockLogOutUser;
		}),
        toggleModal: jest.fn().mockImplementation(() => {
            return mockToggleModal;
        })
    }
));

describe('<Dashboard />', () => {

	const match = {
		params: {
			feedView: 'discussion'
		}
	}
	const loggedIn = false;
	const modals = {
		burgerModal: false,
		searchModal: false,
		followUserModal: false,
		userSettingsModal: false,
		profilePicModal: false
	}

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<Dashboard match={match} dispatch={dispatch} loggedIn={loggedIn}
			modals={modals} />);
	});

	it('Dispatches getUserSession if not loaded', () => {
		const loggedIn = false;
		const dispatch = jest.fn();
		const wrapper = shallow(<Dashboard match={match} dispatch={dispatch} loggedIn={loggedIn}
			modals={modals} />);
		expect(dispatch).toHaveBeenCalledWith(mockGetUserSession);
	});

	it('If logged in renders the Main section', () => {
		const loggedIn = true;
		const dispatch = jest.fn();
		const wrapper = shallow(<Dashboard match={match} dispatch={dispatch} loggedIn={loggedIn}
			modals={modals} />);
		expect(wrapper.contains(<main />));
	});

	it('Dispatches logOutUser if log out clicked', () => {
		const loggedIn = true;
		const dispatch = jest.fn();
		const mockEvent = {
			preventDefault: () => false
		}
		const wrapper = shallow(<Dashboard match={match} dispatch={dispatch} loggedIn={loggedIn}
			modals={modals} />);
		wrapper.find('a[href="/"]').simulate('click', mockEvent);
		expect(dispatch).toHaveBeenCalledWith(mockLogOutUser);
	});

	it('Dispatches toggleModal if search link clicked', () => {
		const loggedIn = true;
		const dispatch = jest.fn();
		const mockEvent = {
			preventDefault: () => false
		}
		const wrapper = shallow(<Dashboard match={match} dispatch={dispatch} loggedIn={loggedIn}
			modals={modals} />);
		wrapper.find('a[href="/search"]').simulate('click', mockEvent);
		expect(dispatch).toHaveBeenCalledWith(mockToggleModal);
	});

});