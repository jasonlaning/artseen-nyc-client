import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import scroll from 'react-scroll';
import {getSingleDiscussion, resetSingleDiscussion} from '../../actions';
import ExhibitionHeading from './exhibition-heading';
import Comments from './comments';
import CommentForm from './comment-form';

export class SingleDiscussion extends React.Component {

	componentWillMount() {
		if (!this.props.loaded) {
			this.props.dispatch(getSingleDiscussion(this.props.match.params.discussionId));
		}
	}

	componentWillUnmount() {
		this.props.dispatch(resetSingleDiscussion());
	}

	render() {

		const windowScroll = () => {
			console.log('prevAction: ', this.props.prevAct);
			if (this.props.prevAction !== 'POST_NEW_COMMENT_SUCCESS' 
				&& this.props.prevAction !== 'GET_USER_TO_FOLLOW_SUCCESS'
				&& this.props.prevAction !== 'TOGGLE_MODAL') {
				scroll.animateScroll.scrollTo(200, {duration: 1000});
			} 
		}

		if (!this.props.loaded) {
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
	prevAction: state.prevAction,
	loaded: state.singleDiscussionLoaded
})

export default connect(mapStateToProps)(withRouter(SingleDiscussion));