import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSingleDiscussion, resetSingleDiscussion} from '../../actions';
import Footer from '../footer/footer';
import ExhibitionHeading from './exhibition-heading';
import Comments from './comments';
import CommentForm from './comment-form';
import './single-discussion.css';

export class SingleDiscussion extends React.Component {

	constructor(props) {
		super(props);
			if (!this.props.loaded) {
				this.props.dispatch(getSingleDiscussion(this.props.match.params.discussionId));
			}
	}

	componentWillUnmount() {
		this.props.dispatch(resetSingleDiscussion());
	}

	render() {

		const discussionLoaded = () => {
			if (this.props.loaded) {
				return (
					<div className="wrapper discussion-loaded">
						<ExhibitionHeading discussion={this.props.discussion} 
							length={this.props.discussion.comments.length} />
						<Comments comments={this.props.discussion.comments}/>
						<CommentForm />
						<Footer />
					</div>
				)
			} 
		}

		return (
			<section className='single-discussion'>
				{discussionLoaded()}
			</section>
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