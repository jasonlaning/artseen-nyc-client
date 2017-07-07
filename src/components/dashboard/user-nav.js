import React from 'react';

import './user-nav.css';

import UserNavCommunityView from './user-nav-community-view';
import UserNavDiscussionsView from './user-nav-discussions-view';

const UserNav = (props) => {

	const navView = (view) => {
		if (view === 'discussions' || view === 'discussion') {
			return <UserNavDiscussionsView />
		} else {
			return <UserNavCommunityView />
		}
	}

	return (
		<section>
		   {navView(props.userFeedView)}   
		</section>
	);
}

export default UserNav;