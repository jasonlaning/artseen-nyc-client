import React from 'react';

import store from '../../store';
import {updateUserFeedView, updateDiscussionToView} from '../../actions';

const CommunityItem = (props) => {

	const onTitleClick = (e) => {
		e.preventDefault();
		store.dispatch(updateUserFeedView('single-discussion'));
		store.dispatch(updateDiscussionToView(e.currentTarget.name, 'community'));
	}

	return (
		<li>
			<h2>{props.date}</h2>
			<p>{props.username} commented on 
			<a href="" name={props.index} onClick={e => onTitleClick(e)} > {props.discussion.artist}: {props.discussion.title}</a></p>
			<p className="snippet">{props.comment}...</p>
		</li>
	);
}

export default CommunityItem;