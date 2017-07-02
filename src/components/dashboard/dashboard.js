import React from 'react';

import NavBar from '../nav-bar/nav-bar';
import Footer from '../footer/footer';
import UserProfile from './user-profile';
import UserNav from './user-nav';
import CommunityActivity from './community-activity';
// import SearchModal from './search-modal';
// import UserProfileModal from './user-profile-modal';

const Dashboard = (props) => (
	<div>
		{/*<SearchModal />*/}
		{/*<UserProfileModal />*/}
		<NavBar>
			<div className="nav-item search-glass">&#9906;</div>
		</NavBar>
		<main>
			<UserProfile />
			<UserNav />
			<CommunityActivity />
		</main>
		<Footer />
	</div>
);

export default Dashboard;