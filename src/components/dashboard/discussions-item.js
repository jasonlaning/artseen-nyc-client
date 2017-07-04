import React from 'react';
import {updateUserFeedView, updateDiscussionToView} from '../../actions';
import store from '../../store';

const DiscussionsItem = (props) => {
	const onTitleClick = (e) => {
		e.preventDefault();
		store.dispatch(updateUserFeedView('single-discussion'));
		store.dispatch(updateDiscussionToView(e.currentTarget.name, 'discussions'));
	}

	return (
		<li>
			<h2><a href="discussion" name={props.index} onClick={(e) => onTitleClick(e)} >{props.artist}: {props.title}</a></h2>
		              <p>{props.gallery} / {props.address}</p>
		              <p>{props.openDate} - {props.closeDate}</p>
		              <p><b>Description:</b> {props.description}</p>
		              <p>{props.comments.length} Comments</p>
		</li>
	);
}

export default DiscussionsItem;