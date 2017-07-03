import React from 'react';
import {Link} from 'react-router-dom';

const CommunityItem = (props) => (
		<li>
			<h2>{props.date}</h2>
			<p><Link to="/:userId" className="user-profile-link">{props.username}</Link> commented on 
			<Link to="/:discussionId" className="discussion-link"> {props.artist}: {props.title}</Link></p>
			<p className="snippet">{props.comment}...</p>
		</li>
);

export default CommunityItem;