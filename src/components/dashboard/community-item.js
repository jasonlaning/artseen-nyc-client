import React from 'react';
import {connect} from 'react-redux';

import {updateUserFeedView, updateDiscussionToView, fetchUserToFollow} from '../../actions';

import './community-item.css';

const CommunityItem = (props) => {

	const onTitleClick = e => {
		e.preventDefault();
		props.dispatch(updateUserFeedView('single-discussion'));
		props.dispatch(updateDiscussionToView(e.currentTarget.name, 'community'));
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
				<a href="" name={props.index} onClick={e => onTitleClick(e)} 
					className="community-title"> {props.discussion.artist}: {props.discussion.title}</a></p>
			<p className="snippet">{props.comment}...</p>
		</li>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	loggedIn: state.loggedIn,
	modals: state.modals
});

export default connect(mapStateToProps)(CommunityItem);
