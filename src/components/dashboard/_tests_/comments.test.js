import React from 'react';
import { shallow, mount } from 'enzyme';
import { Comments } from '../comments';

describe('<Comments />', () => {

	const comments = [{
		comment: 'something about art'
		}, {
		comment: 'something else'
		}]

    it('Renders without crashing', () => {
        shallow(<Comments comments={comments}/>);
    });
    
});