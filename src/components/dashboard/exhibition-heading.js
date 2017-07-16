import React from 'react';
import moment from 'moment';

import './exhibition-heading.css';

const ExhibitionHeading = (props) => (
	<div className="exhibition-heading">
        <h1>{props.discussion.name}</h1>
        <p className="single-disc-venue">{props.discussion.venue.name} / {props.discussion.venue.address} <span 
            className="single-disc-date">({moment(props.discussion.dateStart).format('MMM DD')} - 
        	{moment(props.discussion.dateEnd).format('MMM DD, YYYY')})</span></p>
        <p style={{fontWeight: 'bold'}}>Description: </p>
        <p className="single-disc-descr">{`${props.discussion.description.slice(0, 300)}...`}
        	<span style={{color: '#bdbdbd'}}> (full description at <a href={props.discussion.href} 
                target="_blank" >NY Art Beat</a>)</span></p>
        <p style={{fontWeight: 'bold', 'padding-bottom': '10px'}}>Comments:</p>
    </div>
);

export default ExhibitionHeading;