import React from 'react';
import { shallow, mount } from 'enzyme';
import { CommunityActivity } from '../community-activity';

const mockGetMoreCommunity = {
            type: 'GET_MORE_COMMUNITY'
        };
        jest.mock('../../../actions', () => Object.assign({},
            require.requireActual('../../../actions'),
            {
                getMoreCommunity: jest.fn().mockImplementation(() => {
                    return mockGetMoreCommunity;
                })
            }
        ));

describe('<CommunityActivity />', () => {

	const community = [];
	const item = {
		discussion: {
			id: '0u812'
		}
	};
	// seed community with greater than 9 items
	for (let i=0; i<12; i++) {
		community.push(item);
	}

	const buttonsDisabled = [];

    it('Renders without crashing', () => {
    	const dispatch = jest.fn()
        shallow(<CommunityActivity dispatch={dispatch} community={community} 
        	buttonsDisabled={buttonsDisabled} />);
    });

	it('Should dispatch getMoreCommunity if button clicked', () => {
		const dispatch = jest.fn();
		const mockEvent = {
			preventDefault: () => false
		}
        const wrapper = shallow(<CommunityActivity dispatch={dispatch} community={community} 
			buttonsDisabled={buttonsDisabled} />);
		wrapper.find('button').simulate('click', mockEvent);
		expect(dispatch).toHaveBeenCalledWith(mockGetMoreCommunity);
    });

});