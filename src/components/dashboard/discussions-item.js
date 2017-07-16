import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

import './discussions-item.css';

const DiscussionsItem = (props) => {
	//const onTitleClick = () => {
	//	props.dispatch(getSingleDiscussion(props.id));
	//}

	const dateStart = moment(props.dateStart).format('MMM DD');
	const dateEnd = moment(props.dateEnd).format('MMM DD, YYYY');

	return (
		<li>
			<img src={props.image} alt="exhibition" title="exhibition" className="ex-photo"/>
			<div className="disc-item-container">
				<h2><Link to={`/dashboard/discussion/${props.id}`} >{props.name}</Link></h2>
		              <p>{props.venue.name} / {props.venue.address}</p>
		              <p>{dateStart} - {dateEnd}</p>
		              <p><b>Description:</b> {props.description}</p>
		              <p>{props.comments.length} Comments</p>
		      	</div>
		</li>
	);
}

export default (DiscussionsItem);