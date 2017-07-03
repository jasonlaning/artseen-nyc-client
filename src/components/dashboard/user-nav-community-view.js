import React from 'react';
import {updateUserFeedView, fetchDiscussions} from '../../actions';
import store from '../../store';

const UserNavCommunityView = (props) => {

	const onClickDiscussions = e => {
		e.preventDefault();
		store.dispatch(updateUserFeedView('discussions'));
		store.dispatch(fetchDiscussions());
	}

	return (
		<header className="wrapper user-nav">
			<h2 className="active">Community Activity</h2>
			<h2 className="inactive"><a href="" onClick={e => onClickDiscussions(e)} >Discussions</a></h2>
		</header>
	);
}

export default UserNavCommunityView;