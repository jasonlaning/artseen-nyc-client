import React from 'react';

import AboutExhibitions from './about-exhibitions';
import AboutCommunity from './about-community';

import './about.css';

const About = (props) => (
	<div id="about" className="hash-anchor">
		<AboutExhibitions />
		<AboutCommunity />		
	</div>
);

export default About;