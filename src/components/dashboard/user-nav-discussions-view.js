import React from 'react';
import {updateUserFeedView, fetchCommunity, fetchDiscussions} from '../../actions';
import store from '../../store';

const UserNavDiscussionsView = (props) => {

	const onClickCommunity = e => {
		e.preventDefault();
		store.dispatch(updateUserFeedView('community'));
		store.dispatch(fetchCommunity());
	}

	const onClickDiscussions = e => {
		e.preventDefault();
		store.dispatch(updateUserFeedView('discussions'));
		store.dispatch(fetchDiscussions());
	}

	return (
		<header className="wrapper user-nav">
			<h2 className="inactive"><a href="" onClick={e => onClickCommunity(e)} >Community Activity</a></h2>
			<h2 className="active"><a href="" onClick={e => onClickDiscussions(e)} >Discussions</a></h2>
		</header>
	);
}

export default UserNavDiscussionsView;