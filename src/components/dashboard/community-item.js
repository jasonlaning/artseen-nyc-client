import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUserToFollow } from '../../actions';

import './community-item.css';

export const CommunityItem = (props) => {

	const onClickUserToFollow = e => {
		e.preventDefault();
		props.dispatch(getUserToFollow(props.username));
	}

	return (		
		<li className="community-item">
			<div className="community-header">
				<a href="/dashboard" 
					onClick={(e) => onClickUserToFollow(e)} >
				<img src={props.profilePicURL} alt="user-profile" />
				<p className="community-username">{props.username}
				</p></a>
				<p className="community-date">{moment(props.date).fromNow()}</p>
			</div>
			<Link to={`/dashboard/discussion/${props.id}`} >
			<p className="snippet">&ldquo;{props.text}&rdquo;</p>
			<p className="community-from">from <span className="community-title">{props.discussion.name}</span>
			</p></Link>			
		</li>
	);
}

export default connect()(CommunityItem);
