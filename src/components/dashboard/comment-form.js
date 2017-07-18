import React from 'react';
import {connect} from 'react-redux';

import {postNewComment, updateCommentFormMessage} from '../../actions';
import './comment-form.css'

export class CommentForm extends React.Component {

	componentWillMount() {
		this.props.dispatch(updateCommentFormMessage(''));
	}

	render() {
		const formTitle = 'New Comment';
			let messageEnter = 'message-enter';
			let message = '';

		const toggleMessage = () => {
			if (this.props.message) {
				message = this.props.message
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
							discussionId: this.props.discId,
							discussionName: this.props.discName,
							text: e.target.comment.value
						}
						this.props.dispatch(postNewComment(this.props.user.username, comment))
						e.target.comment.value = '';
					}}>
					<h3 className="modal-title">
						<span className={toggleMessage()}>{formTitle}</span>
						<span className={`modal-message ${messageEnter}`}>{message}</span>
					</h3>
					<div>
						<textarea placeholder="write comment text here..." name="comment" id="comment" required />
					</div>
					<button type="submit">Submit</button>
				</form>
			</section>
		);
	}
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	discId: state.discussionToView.id,
	discName: state.discussionToView.name,
	message: state.commentFormMessage
})

export default connect(mapStateToProps)(CommentForm);