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
			<a href="" onClick={e => onClickCommunity(e)} ><h2 className="inactive">Community Activity</h2></a>
			<a href="" onClick={e => onClickDiscussions(e)} ><h2 className="active">Discussions</h2></a>
		</header>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
});

export default connect(mapStateToProps)(UserNavDiscussionsView);