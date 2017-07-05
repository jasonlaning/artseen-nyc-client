import React from 'react';
import {connect} from 'react-redux';
import scroll from 'react-scroll';

import ExhibitionHeading from './exhibition-heading';
import Comments from './comments';
import CommentForm from './comment-form';

const SingleDiscussion = (props) => {

	const windowScroll = () => {
		console.log('prevAction: ', props.prevAct);
		if (props.prevAction !== 'HANDLE_NEW_COMMENT_SUCCESS' 
			&& props.prevAction !== 'FETCH_USER_TO_FOLLOW_SUCCESS'
			&& props.prevAction !== 'TOGGLE_MODAL') {
			//return window.scrollTo(0, 0);
			scroll.animateScroll.scrollToTop({duration: 500});
		} 
	}

	return (
		<section>
			{windowScroll()}
			<div className="wrapper">
				<ExhibitionHeading discussion={props.discussion} />
				<Comments comments={props.discussion.comments} />
				<CommentForm />
			</div>
		</section>
	);
}

const mapStateToProps = (state, props) => ({
	discussion: state.discussionToView,
	prevAction: state.prevAction
})

export default connect(mapStateToProps)(SingleDiscussion);