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
			<h2>{date(props.date)}</h2>
			<p><a href="/dashboard" onClick={(e) => onClickUserToFollow(e)} 
					className="community-username">{props.username}</a> commented on <Link 
						to={`/dashboard/discussion/${props.id}`} className="community-title">
						{props.discussion.name}</Link>
			</p>
			<p className="snippet">{props.text}...</p>
		</li>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	loggedIn: state.loggedIn,
	modals: state.modals
});

export default connect(mapStateToProps)(CommunityItem);
