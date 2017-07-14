import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NavBar from '../nav-bar/nav-bar';
import Banner from './banner';
import About from './about';
import SignUp from './sign-up';
import Footer from '../footer/footer';
import SignInModal from './sign-in-modal';
import {toggleModal} from '../../actions';

import './home.css';

export const Home = (props) => {

	const onSignInClick = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
	}

	const showModal = (modal) => {
		if (props[modal]) {
			return <SignInModal />
		}
	}

	return (
		<div>
			{console.log('rendered Home')}
			{console.log('state: ', props.state)}
			<NavBar>
				<div className="nav-item">
					<a href="" onClick={(e) => onSignInClick(e, 'showSignInModal')}>Log in</a>
				</div>
				<div className="nav-item">
					<a href="#sign-up">Sign up</a>
				</div>
				<div className="nav-item">
					<a href="#about">About</a>
				</div>
			</NavBar>
			<main>
				<Banner />
				<About />
				<SignUp message={props.message} />
			</main>
			<Footer />
			<ReactCSSTransitionGroup 
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}
				transitionName="modal-fade">
				{showModal('showSignInModal')}
			</ReactCSSTransitionGroup>
		</div>
	)
}

const mapStateToProps = (state, props) => ({
	showSignInModal: state.modals.showSignInModal,
	loggedIn: state.loggedIn,
	message: state.message,
	state: state
})

export default connect(mapStateToProps)(Home);