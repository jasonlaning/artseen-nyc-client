import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import scroll from 'react-scroll';
import {updateDiscussionToView} from '../../actions';
import ExhibitionHeading from './exhibition-heading';
import Comments from './comments';
import CommentForm from './comment-form';

export const SingleDiscussion = (props) => {

	const loaded = (props.discussion.id === props.match.params.discussionId);

	if (!loaded && (props.discussions.length > 0)) {
	props.dispatch(updateDiscussionToView(props.match.params.discussionId));
	}

	const windowScroll = () => {
		console.log('prevAction: ', props.prevAct);
		if (props.prevAction !== 'HANDLE_NEW_COMMENT_SUCCESS' 
			&& props.prevAction !== 'FETCH_USER_TO_FOLLOW_SUCCESS'
			&& props.prevAction !== 'TOGGLE_MODAL') {
			scroll.animateScroll.scrollToTop({duration: 500});
		} 
	}

	console.log('discussionId', props.match.params.discussionId);
	console.log('discussion.id', props.discussion.id);

	if (!loaded) {
		return <section className="loading"></section>
	} else {

		return (
			<section>
				{windowScroll()}
				<div className="wrapper">
					<ExhibitionHeading discussion={props.discussion} />
					<Comments comments={props.discussion.comments}/>
					<CommentForm />
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state, props) => ({
	discussion: state.discussionToView,
	discussions: state.discussions,
	prevAction: state.prevAction
})

export default connect(mapStateToProps)(withRouter(SingleDiscussion));