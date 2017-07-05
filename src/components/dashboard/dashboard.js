import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import NavBar from '../nav-bar/nav-bar';
import Footer from '../footer/footer';
import UserProfile from './user-profile';
import UserNav from './user-nav';
import CommunityActivity from './community-activity';
import Discussions from './discussions';
import SingleDiscussion from './single-discussion';

import {toggleModal, logOutUser} from '../../actions';

import SearchModal from './search-modal';
import FollowUserModal from './follow-user-modal';

export const Dashboard = (props) => {

	// insert something to attempt to fetch user with cookie for each mount

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
		} else if (feedView === 'single-discussion') {
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

	if (props.sessionEnded || !(props.loggedIn)) {
		return <Redirect to='/' />
	}

	return (

			<div>{console.log('rendered and userFeedView: ', props.userFeedView)}
				{console.log('current state: ', props.state)}
				{searchModal}
				{followUserModal}
				<NavBar>
					<div className="nav-item"><a href="" onClick={(e) => onClickLogOut(e)}>Log out</a></div>
					<div className="nav-item"><a href="" onClick={(e) => onClickSearch(e, 'showSearchModal')}>Search</a></div>
				</NavBar>
				<main>
					<UserProfile  />
					<UserNav userFeedView={props.userFeedView} />
					{userFeedView(props.userFeedView)}
				</main>
				<Footer />
			</div>
	);		
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	userFeedView: state.userFeedView,
	loggedIn: state.loggedIn,
	sessionEnded: state.sessionEnded,
	modals: state.modals,
	state: state
});

export default connect(mapStateToProps)(Dashboard);