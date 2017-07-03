import React from 'react';

const UserNavCommunityView = (props) => {

	const onClickDiscussions = e => {
		e.preventDefault();
		// update state.userFeedView
	}

	return (
		<header className="wrapper user-nav">
			<h2 className="active">Community Activity</h2>
			<h2 className="inactive"><a href="" onClick={e => onClickDiscussions(e)} >Discussions</a></h2>
		</header>
	);
}

export default UserNavCommunityView;