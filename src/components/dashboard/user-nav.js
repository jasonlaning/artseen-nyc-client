import React from 'react';

import './user-nav.css';

import UserNavCommunityView from './user-nav-community-view';
import UserNavDiscussionsView from './user-nav-discussions-view';

const UserNav = (props) => {

	const navView = (view) => {
		if (view === 'community') {
			return <UserNavCommunityView />
		} else {
			return <UserNavDiscussionsView />
		}
	}

	return (
		<section>
		   {navView(props.userFeedView)}   
		</section>
	);
}

export default UserNav;