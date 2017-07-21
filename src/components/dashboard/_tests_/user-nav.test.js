import React from 'react';
import { shallow, mount } from 'enzyme';
import { UserNav } from '../user-nav';

const mockGetUserSession = {
	type: 'GET_USER_SESSION'
	};
        
jest.mock('../../../actions', () => Object.assign({},
	require.requireActual('../../../actions'),
	{
		getUserSession: jest.fn().mockImplementation(() => {
			return mockGetUserSession;
		})
	}
));

describe('<UserNav />', () => {

	const userFeedView = 'community activity';

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<UserNav dispatch={dispatch} userFeedView={userFeedView}  />);
	});

	it('Should render discussions as "active view" if userFeedView is "discussions"', () => {
		const dispatch = jest.fn();
		const userFeedView = 'discussions';
		const wrapper = shallow(<UserNav dispatch={dispatch} userFeedView={userFeedView}  />);
		expect(wrapper.contains(<h2 className="active" >All Discussions</h2>)).toEqual(true);
	});

	it('Should render community activity as "active view" if userFeedView is "community activity"', () => {
		const dispatch = jest.fn();
		const userFeedView = 'community activity';
		const wrapper = shallow(<UserNav dispatch={dispatch} userFeedView={userFeedView}  />);
		expect(wrapper.contains(<h2 className="active">Community Activity</h2>)).toEqual(true);
	});

	it('Should dispatch getUserSession when nav link is clicked', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(<UserNav dispatch={dispatch}  />);
		wrapper.find('Link').simulate('click');
		expect(dispatch).toHaveBeenCalledWith(mockGetUserSession);
	})

});