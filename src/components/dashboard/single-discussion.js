import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
//import Scroll from 'react-scroll';
import {getSingleDiscussion, resetSingleDiscussion} from '../../actions';
import ExhibitionHeading from './exhibition-heading';
import Comments from './comments';
import CommentForm from './comment-form';

//const Element = Scroll.Element;
//const scroller = Scroll.scroller;

export class SingleDiscussion extends React.Component {

	constructor(props) {
		super(props);
			if (!this.props.loaded) {
				this.props.dispatch(getSingleDiscussion(this.props.match.params.discussionId));
				//window.scrollTo(0, 130);
			}
			//Scroll.animateScroll.scrollTo(130, {duration: 0})
	}

	componentWillUnmount() {
		this.props.dispatch(resetSingleDiscussion());
	}

	componentDidUpdate(prevProps) {
		if (this.props.prevAction === 'GET_DISCUSSION_FROM_SEARCH_SUCCESS') {
			//window.scrollTo(0, 130);
		} else {
			//Scroll.animateScroll.scrollTo(130, {duration: 1000})
		}
	}

	render() {

		if (this.props.message) {
			console.log(this.props.message);
			return <Redirect to="/dashboard/404" />
		}

		const discussionLoaded = () => {
			if (this.props.loaded) {
				return (
					<div className="wrapper discussion-loaded">
						<ExhibitionHeading discussion={this.props.discussion} />
						<Comments comments={this.props.discussion.comments}/>
						<CommentForm />
					</div>
				)
			}
		}

		return (
			<section className='wrapper'>
			{console.log(window.scrollY)}
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