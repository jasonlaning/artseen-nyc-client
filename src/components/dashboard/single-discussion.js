import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import scroll from 'react-scroll';
import {updateDiscussionToView} from '../../actions';
import ExhibitionHeading from './exhibition-heading';
import Comments from './comments';
import CommentForm from './comment-form';

export class SingleDiscussion extends React.Component {

	componentWillMount() {
		this.props.dispatch(updateDiscussionToView(this.props.match.params.discussionId));
	}

	render() {

		const windowScroll = () => {
			console.log('prevAction: ', this.props.prevAct);
			if (this.props.prevAction !== 'HANDLE_NEW_COMMENT_SUCCESS' 
				&& this.props.prevAction !== 'FETCH_USER_TO_FOLLOW_SUCCESS'
				&& this.props.prevAction !== 'TOGGLE_MODAL') {
				scroll.animateScroll.scrollTo(200, {duration: 1000});
			} 
		}

		const loaded = (this.props.discussion.id === this.props.match.params.discussionId);

		if (!loaded) {
			return <section className="loading"></section>
		} else {

			return (
				<section>
					{windowScroll()}
					<div className="wrapper">
						<ExhibitionHeading discussion={this.props.discussion} />
						<Comments comments={this.props.discussion.comments}/>
						<CommentForm />
					</div>
				</section>
			);
		}
	}
}

const mapStateToProps = (state, props) => ({
	discussion: state.discussionToView,
	discussions: state.discussions,
	prevAction: state.prevAction
})

export default connect(mapStateToProps)(withRouter(SingleDiscussion));