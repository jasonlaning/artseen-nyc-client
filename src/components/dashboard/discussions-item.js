import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

import './discussions-item.css';

export const DiscussionsItem = (props) => {

	const dateStart = moment(props.dateStart).format('MMM DD');
	const dateEnd = moment(props.dateEnd).format('MMM DD, YYYY');

	const lastUpdate = () => {
		if (props.comments.length > 0) {
			return `Last comment: ${moment(props.comments[props.comments.length - 1].date).fromNow()}`
		}
		return 'No comments'
	}

	return (
		<li>
			<img src={props.image} alt="exhibition" title="exhibition" className="ex-photo"/>
			<div className="disc-item-container">
				<h2><Link to={`/dashboard/discussion/${props.id}`} >{props.name}</Link></h2>
				<p className="disc-item-venue">{props.venue.name} / {props.venue.address}</p>
				<span className="disc-item-date"> ({dateStart} - {dateEnd})</span>
				<p><span style={{fontWeight: 'bold'}}>Description:</span></p>
				<p className="disc-item-descr">{props.description.slice(0, 250)}...</p>
				<p className="disc-last-updated">
				<Link to={`/dashboard/discussion/${props.id}`} >{lastUpdate()}
				</Link>
				</p>
		    </div>
		</li>
	);
}

export default (DiscussionsItem);