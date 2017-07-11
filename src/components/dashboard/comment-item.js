import React from 'react';
import {connect} from 'react-redux';
import {getUserToFollow} from '../../actions';

import './comment-item.css';

export const CommentItem = (props) => (
	<li className="comment-item">
	    <h3>{props.date}</h3>
	    <p><a href="" className="comment-username" onClick={e => {
		    		e.preventDefault();
		    		props.dispatch(getUserToFollow(props.username))
	    		}} >
	    		{props.username}</a> wrote:</p>
	    <p className="snippet">{props.text}</p>
	</li>
);

const mapStateToProps = (state, props) => ({
	user: state.user,
	loggedIn: state.loggedIn,
	modals: state.modals
});

export default connect(mapStateToProps)(CommentItem);