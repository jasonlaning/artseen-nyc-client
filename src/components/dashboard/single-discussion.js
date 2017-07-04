import React from 'react';
import {connect} from 'react-redux';

import ExhibitionHeading from './exhibition-heading';
import Comments from './comments';
import CommentForm from './comment-form';

const SingleDiscussion = (props) => {

	return (
		<section>
			<div className="wrapper">
				<ExhibitionHeading discussion={props.discussion} />
				<Comments comments={props.discussion.comments} />
				<CommentForm />
			</div>
			{window.scrollTo(0, 200)}
		</section>
	);
}

const mapStateToProps = (state, props) => ({
	discussion: state.discussionToView,
})

export default connect(mapStateToProps)(SingleDiscussion);