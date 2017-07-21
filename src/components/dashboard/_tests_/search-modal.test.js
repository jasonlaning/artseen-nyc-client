import React from 'react';
import { shallow, mount } from 'enzyme';
import { SearchModal } from '../search-modal';

const mockToggleModal = {
	type: 'TOGGLE_MODAL'
	};

const mockGetExhibitionsForSearch = {
	type: 'GET_EXHIBITIONS_FOR_SEARCH'
	};
        
jest.mock('../../../actions', () => Object.assign({},
	require.requireActual('../../../actions'),
	{
		toggleModal: jest.fn().mockImplementation(() => {
			return mockToggleModal;
		}),
		getExhibitionsForSearch: jest.fn().mockImplementation(() => {
			return mockGetExhibitionsForSearch;
		})
	}
));

describe('<SearchModal />', () => {

	const discussionIdFromSearch = '123abc';
	const searchResults = [{name: 'some exhibition'}, {name: 'some exhibition'}, {name: 'some exhibition'}];
	const searchSubmitted = false;
	const message = '';


	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<SearchModal dispatch={dispatch} discussionIdFromSearch={discussionIdFromSearch} 
			searchResults={searchResults} searchSubmitted={searchSubmitted} message={message} />);
	});

	it('Should dispatch toggleModal when close link is clicked', () => {
		const dispatch = jest.fn();
		const mockedEvent = {
			preventDefault: () => false
		};
		const wrapper = shallow(<SearchModal dispatch={dispatch} discussionIdFromSearch={discussionIdFromSearch} 
			searchResults={searchResults} searchSubmitted={searchSubmitted} message={message} />);
		wrapper.find('a[className="modal-x"]').simulate('click', mockedEvent);
		expect(dispatch).toHaveBeenCalledWith(mockToggleModal);
	})
/*
	it('Dispatches [aCTION_NAME]', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(<SearchModal dispatch={dispatch} />);
		expect(dispatch).toHaveBeenCalledWith(mock[ACTION_NAME]);
	})
*/

	it('Should dispatch getExhibitionsForSearch when search form is submitted', () => {
		const dispatch = jest.fn();
		const mockedEvent = {
			target: {
				'search-exhibitions': {
					value: 'paintings'
				}
			},
			preventDefault: () => false
		};
		const wrapper = shallow(<SearchModal dispatch={dispatch} discussionIdFromSearch={discussionIdFromSearch} 
			searchResults={searchResults} searchSubmitted={searchSubmitted} message={message} />);
		wrapper.find('form').simulate('submit', mockedEvent);
		expect(dispatch).toHaveBeenCalledWith(mockGetExhibitionsForSearch);
	})


});