import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import scroll from 'react-scroll';
import {getSingleDiscussion, resetSingleDiscussion} from '../../actions';
import ExhibitionHeading from './exhibition-heading';
import Comments from './comments';
import CommentForm from './comment-form';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class SingleDiscussion extends React.Component {

	constructor(props) {
		super(props);
			this.props.dispatch(getSingleDiscussion(this.props.match.params.discussionId));
			scroll.animateScroll.scrollTo(200, {duration: 1000})
	}

	componentWillUnmount() {
		this.props.dispatch(resetSingleDiscussion());
	}

	componentDidUpdate() {
		if (this.props.prevAction === 'UPDATE_DISCUSSION_TO_VIEW') {
			scroll.animateScroll.scrollTo(200, {duration: 1000})
		}
	}

	render() {

		if (this.props.message) {
			console.log(this.props.message);
			return <Redirect to="/dashboard/404" />
		}

		const waitForLoaded = () => {
			if (!this.props.loaded) {
				return (
					<section className="loading"></section>
				)
				} else {

					return (
						<section>
							<div className="wrapper">
								<ExhibitionHeading discussion={this.props.discussion} />
								<Comments comments={this.props.discussion.comments}/>
								<CommentForm />
							</div>
						</section>
					);
				}
		}

		return (
			<div>
			{waitForLoaded()}
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	discussion: state.discussionToView,
	discussions: state.discussions,
	loaded: state.singleDiscussionLoaded,
	prevAction: state.prevAction,
	message: state.message
})

export default connect(mapStateToProps)(withRouter(SingleDiscussion));