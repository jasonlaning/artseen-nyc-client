import React from 'react';
import { shallow, mount } from 'enzyme';
import { ExhibitionHeading } from '../exhibition-heading';

describe('<ExhibitionHeading />', () => {

    const discussion = {
    	name: 'Some Name',
    	venue: {
    		name: 'Gallery name',
    		address: 'New York'
    	},
    	dateStart: '20170101',
    	dateEnd: '20170201',
    	description: 'Something about this art exhibition',
    	href: 'http://artexhibition.com'
    }

    it('Renders without crashing', () => {
        shallow(<ExhibitionHeading  discussion={discussion} />);
    });

});