import React from 'react';

const UserNavDiscussionsView = (props) => {

	const onClickCommunity = e => {
		e.preventDefault();
		// update state.userFeedView
	}

	return (
		<header className="wrapper user-nav">
			<h2 className="inactive"><a href="" onClick={e => onClickCommunity(e)} >Community Activity</a></h2>
			<h2 className="active">Discussions</h2>
		</header>
	);
}

export default UserNavDiscussionsView;