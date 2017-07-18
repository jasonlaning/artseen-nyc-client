import React from 'react';
import {connect} from 'react-redux';

import {postNewComment} from '../../actions';
import './comment-form.css'

export const CommentForm = (props) => {

	const formTitle = 'New Comment';
		let messageEnter = 'message-enter';
		let message = '';

		const toggleMessage = () => {
			if (props.message) {
				message = props.message
				return 'modal-title-remove'
			} else {
				messageEnter = ''
				return null
			}
		}

	return (
		<section>
			<form className="comment-form" onSubmit={e => {
					e.preventDefault();
					console.log('comment: ', e.target.comment.value);
					let comment = {
						discussionId: props.discId,
						discussionName: props.discName,
						text: e.target.comment.value
					}
					props.dispatch(postNewComment(props.user.username, comment))
					e.target.comment.value = '';
				}}>
				<h3 className="modal-title">
					<span className={toggleMessage()}>{formTitle}</span>
					<span className={`modal-message ${messageEnter}`}>{message}</span>
				</h3>
				<div>
					<textarea placeholder="write comment text here..." name="comment" id="comment" />
				</div>
				<button type="submit">Submit</button>
			</form>
		</section>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	discId: state.discussionToView.id,
	discName: state.discussionToView.name,
	message: state.message
})

export default connect(mapStateToProps)(CommentForm);