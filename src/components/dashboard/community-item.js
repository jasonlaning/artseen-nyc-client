import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {fetchUserToFollow} from '../../actions';

import './community-item.css';

const CommunityItem = (props) => {

	const onTitleClick = e => {
		e.preventDefault();
		//props.dispatch(updateDiscussionToView(e.currentTarget.name, 'community'));
		props.history.push(`/dashboard/discussion/${e.currentTarget.name}`);
	}

	const onClickUserToFollow = e => {
		e.preventDefault();
		props.dispatch(fetchUserToFollow(props.username));
		//dispatch get the user data
		//reducer should change state to open modal
	}

	return (
		<li>
			<h2>{props.date}</h2>
			<p><a href="" onClick={(e) => onClickUserToFollow(e)} 
					className="community-username">{props.username}</a> commented on 
				<a href="" name={props.id} onClick={e => onTitleClick(e)} 
					className="community-title"> {props.discussion.name}</a></p>
			<p className="snippet">{props.comment}...</p>
		</li>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	loggedIn: state.loggedIn,
	modals: state.modals
});

export default connect(mapStateToProps)(withRouter(CommunityItem));
