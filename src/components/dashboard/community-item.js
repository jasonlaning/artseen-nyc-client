import React from 'react';
import date from '../date';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getUserToFollow} from '../../actions';

import './community-item.css';

const CommunityItem = (props) => {

	const onClickUserToFollow = e => {
		e.preventDefault();
		props.dispatch(getUserToFollow(props.username));
	}

	return (
		
		<li>
			<div className="community-header">
				<a href="/dashboard" 
					onClick={(e) => onClickUserToFollow(e)} >
				<img src={props.profilePicURL} alt="user-profile" />
				<p className="community-username">{props.username}
				</p></a>
				<p className="community-date">{date(props.date)}</p>
			</div>
			<Link to={`/dashboard/discussion/${props.id}`} >
			<p className="snippet">	&ldquo;{props.text.slice(0, 80)}...&rdquo;</p>
			<p className="community-from">from <span className="community-title">{props.discussion.name}</span>
			</p></Link>
			
		</li>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	loggedIn: state.loggedIn,
	modals: state.modals
});

export default connect(mapStateToProps)(CommunityItem);
