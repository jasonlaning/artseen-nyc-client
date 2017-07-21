import React from 'react';
import { shallow, mount } from 'enzyme';
import { CommunityItem } from '../community-item';

const mockGetUserToFollow = {
            type: 'GET_USER_TO_FOLLOW'
        };
        
jest.mock('../../../actions', () => Object.assign({},
    require.requireActual('../../../actions'),
    {
        getUserToFollow: jest.fn().mockImplementation(() => {
            return mockGetUserToFollow;
        })
    }
));

describe('<CommunityItem />', () => {

	const profilePicURL = 'http://noimage.jpg';
	const username = 'somethingFake123';
	const date = '20170101';
	const id = '134o2ij42';
	const text = 'some comment about art';
	const discussion = {
		name: 'Some Art Title'
	};

    it('Renders without crashing', () => {
        shallow(<CommunityItem profilePicURL={profilePicURL} username={username} date={date}
        	id={id} text={text} discussion={discussion} />);
    });

	it('Dispatches getUserToFollow with the username when link clicked', () => {
        const dispatch = jest.fn();
        const mockEvent = {
			preventDefault: () => false
		}
    	const wrapper = shallow(<CommunityItem profilePicURL={profilePicURL} username={username} date={date}
        	id={id} text={text} discussion={discussion} dispatch={dispatch} />);
        wrapper.find('a').simulate('click', mockEvent);
    	expect(dispatch).toHaveBeenCalledWith(mockGetUserToFollow)
    })

});