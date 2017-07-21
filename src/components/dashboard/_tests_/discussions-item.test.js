import React from 'react';
import { shallow, mount } from 'enzyme';
import { DiscussionsItem } from '../discussions-item';

describe('<DiscussionsItem />', () => {

	const dateStart = '20170101';
	const dateEnd = '20170201';
	const comments = [{text: 'a comment'}, {text: 'another comment'}];
	const id = '108354703';
	const name = 'Some Exhibition';
	const venue = {
		name: 'Some Gallery',
		address: 'New York, NY'
	};
	const description = 'A description about the art exhibition';

	it('Renders without crashing', () => {
		shallow(<DiscussionsItem dateStart={dateStart} dateEnd={dateEnd} comments={comments}
			id={id} name={name} venue={venue} description={description} />);
	});

});