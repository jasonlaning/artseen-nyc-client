import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NavBar from '../nav-bar/nav-bar';
import Footer from '../footer/footer';
import UserProfile from './user-profile';
import UserNav from './user-nav';
import CommunityActivity from './community-activity';
import Discussions from './discussions';
import SingleDiscussion from './single-discussion';

import {toggleModal, logOutUser, updateDiscussionToView, fetchUser} from '../../actions';

import SearchModal from './search-modal';
import FollowUserModal from './follow-user-modal';

import './dashboard.css';

export const Dashboard = (props) => {

	const feedView = props.match.params.feedView;
	const loaded = props.loggedIn;

	// insert something to attempt to fetch user with cookie for each mount
	// but not the following, which should be replaced!!
	// below is for page refresh
	if (!loaded) {
		if (feedView === ('discussion')) {
		props.dispatch(fetchUser())
			.then(() => {
				if (props.match.params.feedView === 'discussion') {
					console.log('fetching discussion');
					props.dispatch(updateDiscussionToView(props.match.params.discussionId));
				}
			})
		} else {
			props.dispatch(fetchUser());
		}
	}

	const onClickLogOut = (e) => {
		e.preventDefault();
		console.log('log out function')
		props.dispatch(logOutUser());
	}

	const onClickSearch = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
	}

	const userFeedView = (feedView) => {
		if (feedView === 'discussions') {
				return <Discussions />
		} else if (feedView === 'discussion') {
				return <SingleDiscussion />
		}
		return <CommunityActivity />
	}

	let searchModal;
	if (props.modals.showSearchModal) {
		searchModal = <SearchModal />;
	}

	let followUserModal;
	if (props.modals.showFollowUserModal) {
		followUserModal = <FollowUserModal />;
	}

	const fadeIn = () => {
		if (!loaded) {
			return (
				<div key="loading-wrapper">
					<section className="loading" key="loading"> </section>			
				</div>
			)
		} else {
			return (
				<main key="main">
					<UserProfile  />
					<UserNav userFeedView={feedView} />
					<div key="feed-wrapper">{userFeedView(feedView)}</div>
				</main>
			)
		}
	}

	return (

			<div>
				{console.log('current state: ', props.state)}
				{searchModal}
				{followUserModal}
				<NavBar>
					<div className="nav-item"><a href="" onClick={(e) => onClickLogOut(e)}>Log out</a></div>
					<div className="nav-item"><a href="" onClick={(e) => onClickSearch(e, 'showSearchModal')}>Search</a></div>
				</NavBar>
				<ReactCSSTransitionGroup
				      transitionName="dashboard-fade"
				      transitionEnter={true}
				      transitionEnterTimeout={500}
				      transitionLeave={false}>
					{fadeIn()}
				</ReactCSSTransitionGroup>
				<Footer />
			</div>
	);		
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	discussionToView: state.discussionToView,
	loggedIn: state.loggedIn,
	modals: state.modals,
	state: state
});

export default connect(mapStateToProps)(Dashboard);