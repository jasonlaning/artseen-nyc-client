import React from 'react';
import moment from 'moment';

import './exhibition-heading.css';

export const ExhibitionHeading = (props) => {

    const commentsLength = () => {
        if (props.length === 1) {
            return <span className="total-comments">({props.length} comment)</span>
        } else if (props.length > 1) {
            return <span className="total-comments">({props.length} comments)</span>
        }
    }

    return (
    	<div className="exhibition-heading">
            <h1>{props.discussion.name}</h1>
            <p className="single-disc-venue">{props.discussion.venue.name} / {props.discussion.venue.address}<br /><span 
                className="single-disc-date">({moment(props.discussion.dateStart).format('MMM DD')} - 
            	{moment(props.discussion.dateEnd).format('MMM DD, YYYY')})</span></p>
            <p style={{fontWeight: 'bold'}}>Description: </p>
            <p className="single-disc-descr">{`${props.discussion.description.slice(0, 300)}...`}
            	<span style={{color: '#bdbdbd'}}><br />(full description at <a href={props.discussion.href} 
                    target="_blank" >NY Art Beat</a>)</span></p>
            <h3><span style={{textDecoration: 'underline'}}>Discussion</span> {commentsLength()}</h3>
        </div>
    )
};

export default ExhibitionHeading;