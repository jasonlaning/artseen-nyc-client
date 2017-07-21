import React from 'react';
import { shallow, mount } from 'enzyme';
import { NavBar } from '../nav-bar';

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

describe('<NavBar />', () => {

	const modals = {
		burgerModal: true
	}

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<NavBar dispatch={dispatch} modals={modals}  />);
	});

	it('Should dispatch toggleModal when burgerModal link is clicked', () => {
		const dispatch = jest.fn();
		const mockedEvent = {
			preventDefault: () => false
		};
		const wrapper = shallow(<NavBar dispatch={dispatch} modals={modals}  />);
		wrapper.find('img').at(0).simulate('click', mockedEvent);
		expect(dispatch).toHaveBeenCalledWith(mockToggleModal);
	})

});