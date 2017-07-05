import React from 'react';
import {connect} from 'react-redux';
import {updateUserFeedView, fetchDiscussions} from '../../actions';

const UserNavCommunityView = (props) => {

	const onClickDiscussions = e => {
		e.preventDefault();
		props.dispatch(updateUserFeedView('discussions'));
		props.dispatch(fetchDiscussions());
	}

	return (
		<header className="wrapper user-nav">
			<h2 className="active">Community Activity</h2>
			<h2 className="inactive"><a href="" onClick={e => onClickDiscussions(e)} >Discussions</a></h2>
		</header>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
});

export default connect(mapStateToProps)(UserNavCommunityView);