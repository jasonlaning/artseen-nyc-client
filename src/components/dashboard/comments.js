import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import CommentItem from './comment-item';

export const Comments = (props) => {

	const comments = props.comments.map((item, index) => 
		<CommentItem key={index} {...item} />
		)

	return (
		<ul className="comments">
			<ReactCSSTransitionGroup 
			transitionEnterTimeout={500}
			transitionLeaveTimeout={500}
			transitionName="dashboard-fade">
				{comments}
			</ReactCSSTransitionGroup>
		</ul> 
	);
}

export default Comments;