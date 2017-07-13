import React from 'react';
import date from '../date';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getUserToFollow} from '../../actions';

import './community-item.css';

const CommunityItem = (props) => {

	const onTitleClick = e => {
		e.preventDefault();
		props.history.push(`/dashboard/discussion/${e.currentTarget.name}`);
	}

	const onClickUserToFollow = e => {
		e.preventDefault();
		props.dispatch(getUserToFollow(props.username));
	}

	return (
		<li>
			<h2>{date(props.date)}</h2>
			<p><a href="" onClick={(e) => onClickUserToFollow(e)} 
					className="community-username">{props.username}</a> commented on 
				<a href="" name={props.id} onClick={e => onTitleClick(e)} 
					className="community-title"> {props.discussion.name}</a></p>
			<p className="snippet">{props.text}...</p>
		</li>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	loggedIn: state.loggedIn,
	modals: state.modals
});

export default connect(mapStateToProps)(withRouter(CommunityItem));
