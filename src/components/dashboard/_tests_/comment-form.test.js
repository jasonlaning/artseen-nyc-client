import React from 'react';
import { shallow, mount } from 'enzyme';
import { CommentForm } from '../comment-form';

const mockPostNewComment = {
            type: 'GET_USER_TO_FOLLOW'
        };
        
jest.mock('../../../actions', () => Object.assign({},
    require.requireActual('../../../actions'),
    {
        postNewComment: jest.fn().mockImplementation(() => {
            return mockPostNewComment;
        })
    }
));

describe('<CommentForm />', () => {

	const message = '';
	const discId = '12345';
	const discName = 'Fake Art Exhibition';
	const user = {
		username: 'someUser'
	}

    it('Renders without crashing', () => {
    	const dispatch = jest.fn();
        shallow(<CommentForm dispatch={dispatch} message={message} discId={discId}
        	discName={discName} user={user} />);
    });

    it('Dispatches updateCommentFormMessage with an empty string', () => {
    	const dispatch = jest.fn();
    	const wrapper = shallow(<CommentForm dispatch={dispatch} message={message} discId={discId}
        	discName={discName} user={user} />);
    	expect(dispatch).toHaveBeenCalledWith({
            message: '',
            type: 'UPDATE_COMMENT_FORM_MESSAGE'
        });
    })

    it('Should dispatch postNewComment when the form is submitted', () => {
        const dispatch = jest.fn();
        const mockedEvent = {
            target: {
                comment: {
                    value: 'some crazy comment about art'
                }
            }
        };
    	const wrapper = mount(<CommentForm dispatch={dispatch} message={message} discId={discId}
        	discName={discName} user={user} />);
    	wrapper.find('form').simulate('submit', mockedEvent);
    	expect(dispatch).toHaveBeenCalledWith(mockPostNewComment);
    })

});