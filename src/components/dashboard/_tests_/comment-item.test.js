import React from 'react';
import moment from 'moment';
import { shallow, mount } from 'enzyme';
import { CommentItem } from '../comment-item';

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

describe('<CommentItem />', () => {

	const username = 'someUser';
    const profilePicURL = 'http://nothing.jpg';
    const date = '20170101';
    const text = 'some text about something';

    it('Renders without crashing', () => {
        shallow(<CommentItem />);
    });

    it('Dispatches getUserToFollow with the username when link clicked', () => {
        const dispatch = jest.fn();
    	const wrapper = mount(<CommentItem username={username} profilePicURL={profilePicURL} date={date}
            text={text} dispatch={dispatch}/>);
        wrapper.find('a').simulate('click');
    	expect(dispatch).toHaveBeenCalledWith(mockGetUserToFollow)
    })

});