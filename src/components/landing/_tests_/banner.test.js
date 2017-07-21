import React from 'react';
import { shallow, mount } from 'enzyme';
import { Banner } from '../banner';

describe('<Banner />', () => {

    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<Banner  />);
    });

});