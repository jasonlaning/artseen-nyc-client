import React from 'react';
import {updateUserFeedView, updateDiscussionToView} from '../../actions';
import store from '../../store';
import {Link} from 'react-router-dom';

const DiscussionsItem = (props) => {
	const onTitleClick = (e) => {
		e.preventDefault();
		store.dispatch(updateUserFeedView('single-discussion'));
		store.dispatch(updateDiscussionToView(e.currentTarget.name));
	}

	return (
		<li>
			<h3>{props.artist}: <a href="" name={props.index} onClick={(e) => onTitleClick(e)} >{props.title}</a></h3>
		              <p>{props.gallery} / {props.address}</p>
		              <p>{props.openDate} - {props.closeDate}</p>
		              <p><b>Description:</b> {props.description}</p>
		              <p>{props.comments.length} Comments</p>
		</li>
	);
}

export default DiscussionsItem;