import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NavBar from '../nav-bar/nav-bar';
import Footer from '../footer/footer';
import UserProfile from './user-profile';
import UserNav from './user-nav';
import CommunityActivity from './community-activity';
import Discussions from './discussions';
import SingleDiscussion from './single-discussion';

import { toggleModal, logOutUser, getUserSession } from '../../actions';

import SearchModal from './search-modal';
import FollowUserModal from './follow-user-modal';
import UserSettingsModal from './user-settings-modal';
import ProfilePicModal from './profile-pic-modal';
import Error404 from '../error-404';

import './dashboard.css';

export const Dashboard = (props) => {

	const feedViews = ['discussions', 'discussion'];
	const loaded = props.loggedIn;
	let feedView;

	if (feedViews.indexOf(props.match.params.feedView) !== -1) {
		feedView = props.match.params.feedView; 
	} else if (props.match.params.feedView) {
		feedView ='404';
	}

	if (!loaded) {
		props.dispatch(getUserSession());
	}

	const onClickLogOut = (e) => {
		e.preventDefault();
		props.dispatch(logOutUser());
	}

	const onClickSearch = (e, modal) => {
		e.preventDefault();
		if (props.modals.burgerModal) {
			props.dispatch(toggleModal('burgerModal'));
		}
		props.dispatch(toggleModal(modal));
	}

	const userFeedView = (feedView) => {
		if (feedView === 'discussions') {
			return <Discussions key="disc" />
		} else if (feedView === 'discussion') {
			return <SingleDiscussion key="singledisc" />
		} else if (feedView === '404') {
			return <Error404 />
		}
		return <CommunityActivity key="commact" />
	}

	const showModals = () => {
		if (props.modals.searchModal) {
			return <SearchModal />
		} else if (props.modals.followUserModal) {
			return <FollowUserModal />
		} else if (props.modals.userSettingsModal) {
			return <UserSettingsModal />
		} else if (props.modals.profilePicModal) {
			return <ProfilePicModal />
		}
	}

	const fadeIn = () => {
		if (!loaded) {
			return (
				<div key="loading-wrapper">
					<section className="loading"></section>			
				</div>
			)
		} else {
			return (
				<main key="main">
					<UserProfile key="userprof" />
					<UserNav userFeedView={feedView} key="usernav" />
					<ReactCSSTransitionGroup 
					transitionEnterTimeout={300}
					transitionLeaveTimeout={1}
					transitionName="dashboard-fade">
					{userFeedView(feedView)}
					</ReactCSSTransitionGroup>
				</main>
			)
		}
	}

	return (
			<div className="dashboard">
				<ReactCSSTransitionGroup 
					transitionEnterTimeout={300}
					transitionLeaveTimeout={300}
					transitionName="modal-fade">
					{showModals()}
				</ReactCSSTransitionGroup>
				<NavBar>
					<a className="nav-item" href="/" onClick={(e) => onClickLogOut(e)}>Log out</a>
					<a className="nav-item" href="/search" onClick={(e) => 
						onClickSearch(e, 'searchModal')} ><div className="glass-container">Search <img src="/search.png"
							alt="search" className="search-glass" /></div></a>
				</NavBar>
				<ReactCSSTransitionGroup 
					transitionEnterTimeout={300}
					transitionLeaveTimeout={300}
					transitionName="dashboard-fade">
					{fadeIn()}
				</ReactCSSTransitionGroup>
				<Footer />
			</div>
	);		
}

const mapStateToProps = (state, props) => ({
	loggedIn: state.loggedIn,
	modals: state.modals
});

export default connect(mapStateToProps)(Dashboard);