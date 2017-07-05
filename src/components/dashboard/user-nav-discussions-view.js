import React from 'react';
import {connect} from 'react-redux';
import {updateUserFeedView, fetchCommunity, fetchDiscussions} from '../../actions';

const UserNavDiscussionsView = (props) => {

	const onClickCommunity = e => {
		e.preventDefault();
		props.dispatch(updateUserFeedView('community'));
		props.dispatch(fetchCommunity());
	}

	const onClickDiscussions = e => {
		e.preventDefault();
		props.dispatch(updateUserFeedView('discussions'));
		props.dispatch(fetchDiscussions());
	}

	return (
		<header className="wrapper user-nav">
			<h2 className="inactive"><a href="" onClick={e => onClickCommunity(e)} >Community Activity</a></h2>
			<h2 className="active"><a href="" onClick={e => onClickDiscussions(e)} >Discussions</a></h2>
		</header>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
});

export default connect(mapStateToProps)(UserNavDiscussionsView);