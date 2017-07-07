import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {updateDiscussionToView} from '../../actions';

const DiscussionsItem = (props) => {
	const onTitleClick = (e) => {
		e.preventDefault();
		props.dispatch(updateDiscussionToView(e.currentTarget.name, 'discussions'));
		props.history.push(`/dashboard/discussion/${e.currentTarget.name}`);
	}

	return (
		<li>
			<h2><a href="discussion" name={props.id} onClick={(e) => onTitleClick(e)} >{props.artist}: {props.title}</a></h2>
		              <p>{props.gallery} / {props.address}</p>
		              <p>{props.openDate} - {props.closeDate}</p>
		              <p><b>Description:</b> {props.description}</p>
		              <p>{props.comments.length} Comments</p>
		</li>
	);
}

export default connect()(withRouter(DiscussionsItem));