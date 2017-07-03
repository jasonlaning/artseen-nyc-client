import React from 'react';
import ScrollToTop from '../scroll-to-top';

import NavBar from '../nav-bar/nav-bar';
import Footer from '../footer/footer';
import UserProfile from './user-profile';
import UserNav from './user-nav';
import CommunityActivity from './community-activity';
import Discussions from './discussions';
import SingleDiscussion from './single-discussion';

// import SearchModal from './search-modal';
// import UserProfileModal from './user-profile-modal';

const Dashboard = (props) => {
	const userFeedView = (feedView) => {
		if (feedView === 'discussions') {
			return <Discussions />
		} else if (feedView === 'single-discussion') {
			return <SingleDiscussion />
		}
		return <CommunityActivity />
	}

	return (
		<div>
			<ScrollToTop />
			{/*<SearchModal />*/}
			{/*<UserProfileModal />*/}
			<NavBar>
				<div className="nav-item search-glass">&#9906;</div>
			</NavBar>
			<main>
				<UserProfile />
				<UserNav userFeedView="community-activity" />
				{userFeedView(props.userFeedView)}
			</main>
			<Footer />
		</div>
	);
}

export default Dashboard;