import React from 'react';
import { shallow, mount } from 'enzyme';
import { SearchResult } from '../search-result';

const mockGetDiscussionFromSearch = {
	type: 'GET_DISCUSSION_FROM_SEARCH'
	};
        
jest.mock('../../../actions', () => Object.assign({},
	require.requireActual('../../../actions'),
	{
		getDiscussionFromSearch: jest.fn().mockImplementation(() => {
			return mockGetDiscussionFromSearch;
		})
	}
));

describe('<SearchResult />', () => {

	const $ = {
		id: 'abc123'
	};

	const id = 'abc123';
	const Name = 'name';

	const discussion = {
		id: 'abc123',
		Name: 'Some Exhibition'
	}

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<SearchResult dispatch={dispatch} $={$} id={id} Name={Name} />);
	});

	it('Should dispatch getDiscussionFromSearch when search item link is clicked', () => {
		const dispatch = jest.fn();
		const mockedEvent = {
			preventDefault: () => false
		};
		const wrapper = shallow(<SearchResult dispatch={dispatch} $={$} id={id} Name={Name} />);
		wrapper.find('a').simulate('click', mockedEvent);
		expect(dispatch).toHaveBeenCalledWith(mockGetDiscussionFromSearch);
	})

});