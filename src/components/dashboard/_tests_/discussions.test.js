import React from 'react';
import { shallow, mount } from 'enzyme';
import { Discussions } from '../discussions';

const mockGetMoreDiscussions = {
	type: 'GET_MORE_DISCUSSIONS'
	};
        
jest.mock('../../../actions', () => Object.assign({},
	require.requireActual('../../../actions'),
	{
		getMoreDiscussions: jest.fn().mockImplementation(() => {
			return mockGetMoreDiscussions;
		})
	}
));

describe('<Discussions />', () => {

	const discussions = [{ id: 'ljoweir08723' }, { id: 'ljoweir08723' }, { id: 'ljoweir08723' }, { id: 'ljoweir08723' },
		{ id: 'ljoweir08723' }, { id: 'ljoweir08723' }, { id: 'ljoweir08723' }, { id: 'ljoweir08723' }, { id: 'ljoweir08723' },
		{ id: 'ljoweir08723' }, { id: 'ljoweir08723' }, ];
	const buttonsDisabled = [{}];

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<Discussions dispatch={dispatch} discussions={discussions} buttonsDisabled={buttonsDisabled}  />);
	});

	it('Should dispatch getMoreDiscussions when there are more than 9 discussions and the button is clicked', () => {
		const dispatch = jest.fn();
		const mockedEvent = {
				preventDefault: () => false
		};
		const wrapper = shallow(<Discussions dispatch={dispatch} discussions={discussions} 
			buttonsDisabled={buttonsDisabled}  />);
		wrapper.find('button').simulate('click', mockedEvent);
		expect(dispatch).toHaveBeenCalledWith(mockGetMoreDiscussions);
	})

});