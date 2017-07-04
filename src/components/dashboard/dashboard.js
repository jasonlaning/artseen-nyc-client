import React from 'react';
import {connect} from 'react-redux';
import ScrollToTop from '../scroll-to-top';

import NavBar from '../nav-bar/nav-bar';
import Footer from '../footer/footer';
import UserProfile from './user-profile';
import UserNav from './user-nav';
import CommunityActivity from './community-activity';
import Discussions from './discussions';
import SingleDiscussion from './single-discussion';

import {fetchUser, fetchCommunity} from '../../actions';

// import SearchModal from './search-modal';
// import UserProfileModal from './user-profile-modal';

export class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		this.props.dispatch(fetchUser());
		this.props.dispatch(fetchCommunity());
	}

	render() {
		const userFeedView = (feedView) => {
			if (feedView === 'discussions') {
				return <Discussions />
			} else if (feedView === 'single-discussion') {
				return <SingleDiscussion />
			}
			return <CommunityActivity />
		}



		return (

			<div key="0">{console.log('reloaded and userFeedView: ', this.props.userFeedView)}
				<ScrollToTop />
				{/*<SearchModal />*/}
				{/*<UserProfileModal />*/}
				<NavBar>
					<div className="nav-item">Search</div>
				</NavBar>
				<main>
					<UserProfile  />
					<UserNav userFeedView={this.props.userFeedView} />
					{userFeedView(this.props.userFeedView)}
				</main>
				<Footer />
			</div>

		);
	}
}

const mapStateToProps = state => ({
	user: state.user,
	userFeedView: state.userFeedView
});

export default connect(mapStateToProps)(Dashboard);