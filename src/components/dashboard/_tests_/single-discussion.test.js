import React from 'react';
import { shallow, mount } from 'enzyme';
import { SingleDiscussion } from '../single-discussion';

const mockGetSingleDiscussion = {
	type: 'GET_SINGLE_DISCUSSION'
	};
        
jest.mock('../../../actions', () => Object.assign({},
	require.requireActual('../../../actions'),
	{
		getSingleDiscussion: jest.fn().mockImplementation(() => {
			return mockGetSingleDiscussion;
		})
	}
));

describe('<SingleDiscussion />', () => {

	const loaded = false;
	const discussion = {
		name: 'some exhibition',
		comments: [{name: 'something'}, {name: 'somethingElse'}]
	}
	const match = {
		params: {
			discussionId: 'abc123'
		}
	};

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<SingleDiscussion dispatch={dispatch} loaded={loaded} discussion={discussion} 
			match={match} />);
	});


	it('Dispatches getSingleDiscussion if not loaded', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(<SingleDiscussion dispatch={dispatch} loaded={loaded} 
			discussion={discussion} match={match} />);
		expect(dispatch).toHaveBeenCalledWith(mockGetSingleDiscussion);
	})

});