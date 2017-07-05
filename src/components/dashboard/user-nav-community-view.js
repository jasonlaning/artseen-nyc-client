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
			<a href="" onClick={e => onClickDiscussions(e)} ><h2 className="inactive">Discussions</h2></a>
		</header>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
});

export default connect(mapStateToProps)(UserNavCommunityView);