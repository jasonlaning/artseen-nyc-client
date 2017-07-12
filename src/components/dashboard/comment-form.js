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
					discussionId: props.discId,
					discussionName: props.discName,
					text: e.target.comment.value
				}
				props.dispatch(postNewComment(comment))
				e.target.comment.value = '';
			}}>
			<div>
				<label htmlFor="comment">New Comment:</label>
				<textarea placeholder="text goes here..." name="comment" id="comment" />
			</div>
			<button type="submit">Submit</button>
			<div>
				<p className="modal-message">{props.message}</p>
			</div>
		</form>
	</section>
);

const mapStateToProps = (state, props) => ({
	discId: state.discussionToView.id,
	discName: state.discussionToView.name,
	message: state.message
})

export default connect(mapStateToProps)(CommentForm);