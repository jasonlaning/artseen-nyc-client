import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { getUserToFollow } from '../../actions';

import './comment-item.css';

export const CommentItem = (props) => (
	<li className="comment-item">
	    <div className="comment-header">
	    	<a href="" className="comment-username" onClick={e => {
		    		e.preventDefault();
		    		props.dispatch(getUserToFollow(props.username))
	    		}} >
    		<img src={props.profilePicURL} alt="user-profile" />
			<p className="comment-username">{props.username}
			</p></a>
			<p className="comment-date">{moment(props.date).fromNow()}</p>
		</div>
			<p className="snippet">&ldquo;{props.text}&rdquo;</p>
	</li>
);

export default connect()(CommentItem);