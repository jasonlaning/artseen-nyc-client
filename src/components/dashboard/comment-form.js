import React from 'react';
import {connect} from 'react-redux';

import {postNewComment} from '../../actions';
import './comment-form.css'

const CommentForm = (props) => (
	<section>
		<form className="comment-form" onSubmit={e => {
				e.preventDefault();
				console.log('comment: ', e.target.comment.value);
				let comment = {
					username: props.username,
					date: 'today',
					text: e.target.comment.value,
					discussionId: props.discussionId
				}
				props.dispatch(postNewComment(comment))
				e.target.comment.value = '';
			}}>
			<div>
				<label htmlFor="comment">New Comment:</label>
				<textarea placeholder="text goes here..." name="comment" id="comment" />
			</div>
			<button type="submit">Submit</button>
		</form>
	</section>
);

const mapStateToProps = (state, props) => ({
	username: state.user.username,
	discussionId: state.discussionToView.id
})

export default connect(mapStateToProps)(CommentForm);