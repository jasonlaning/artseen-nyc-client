import React from 'react';
import moment from 'moment';

const ExhibitionHeading = (props) => (
	<section>
        <h1>{props.discussion.name}</h1>
        <p>{props.discussion.venue.name} / {props.discussion.venue.address}</p>
        <p>{moment(props.discussion.dateStart).format('MMM DD')} - 
        	{moment(props.discussion.dateEnd).format('MMM DD, YYYY')}</p>
        <p><span style={{fontWeight: 'bold'}}>Description: </span>
        	{props.discussion.description}</p>
        <p>Comments:</p>
    </section>
);

export default ExhibitionHeading;