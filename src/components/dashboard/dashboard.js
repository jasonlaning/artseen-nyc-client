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

import {toggleModal, logOutUser, getUserSession} from '../../actions';

import SearchModal from './search-modal';
import FollowUserModal from './follow-user-modal';
import UserSettingsModal from './user-settings-modal';
import ProfilePicModal from './profile-pic-modal';

import './dashboard.css';

export const Dashboard = (props) => {

	const feedView = props.match.params.feedView;
	const loaded = props.loggedIn;

	if (!loaded) {
		props.dispatch(getUserSession());
	}

	const onClickLogOut = (e) => {
		e.preventDefault();
		console.log('log out function')
		props.dispatch(logOutUser());
	}

	const onClickSearch = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal))
	}

	const userFeedView = (feedView) => {
		if (feedView === 'discussions') {
				return <Discussions />
		} else if (feedView === 'discussion') {
				return <SingleDiscussion />
		}
		return <CommunityActivity />
	}

	const showModals = () => {
		if (props.modals.showSearchModal) {
			return <SearchModal />
		} else if (props.modals.showFollowUserModal) {
			return <FollowUserModal />
		} else if (props.modals.showUserSettingsModal) {
			return <UserSettingsModal />
		} else if (props.modals.showProfilePicModal) {
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
					<UserProfile />
					<UserNav userFeedView={feedView} />
					<div>{userFeedView(feedView)}</div>
				</main>
			)
		}
	}

	return (

			<div>
				{console.log('current state: ', props.state)}
				<ReactCSSTransitionGroup 
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
					transitionName="modal-fade">
					{showModals()}
				</ReactCSSTransitionGroup>
				<NavBar>
					<div className="nav-item"><a href="" onClick={(e) => onClickLogOut(e)}>Log out</a></div>
					<div className="nav-item"><a href="" onClick={(e) => onClickSearch(e, 'showSearchModal')}>Search</a></div>
				</NavBar>
				<ReactCSSTransitionGroup 
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
					transitionName="dashboard-fade">
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