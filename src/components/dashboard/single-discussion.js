import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import scroll from 'react-scroll';
import {getSingleDiscussion, resetSingleDiscussion} from '../../actions';
import ExhibitionHeading from './exhibition-heading';
import Comments from './comments';
import CommentForm from './comment-form';

export class SingleDiscussion extends React.Component {

	constructor(props) {
		super(props);
			this.props.dispatch(getSingleDiscussion(this.props.match.params.discussionId));
			scroll.animateScroll.scrollTo(200, {duration: 1000})
	}

	componentWillUnmount() {
		this.props.dispatch(resetSingleDiscussion());
	}

	render() {

		if (this.props.message) {
			console.log(this.props.message);
			return <Redirect to="/dashboard/404" />
		}

		if (!this.props.loaded) {
			return <section className="loading"></section>
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
}

const mapStateToProps = (state, props) => ({
	discussion: state.discussionToView,
	discussions: state.discussions,
	loaded: state.singleDiscussionLoaded,
	message: state.message
})

export default connect(mapStateToProps)(withRouter(SingleDiscussion));