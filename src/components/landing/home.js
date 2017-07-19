import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NavBar from '../nav-bar/nav-bar';
import Banner from './banner';
import About from './about';
import Footer from '../footer/footer';
import SignInModal from './sign-in-modal';
import SignUpModal from './sign-up-modal';
import { toggleModal, createNewDemoUser } from '../../actions';
//import { Redirect } from 'react-router-dom';

import './home.css';

export const Home = (props) => {

//	if (props.loggedIn) {
		//return <Redirect to={'/dashboard'} />
//	}

	const onModalLinkClick = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
		if (props.modals.burgerModal) {
			props.dispatch(toggleModal('burgerModal'))
		}
	}

	const showModals = () => {
		if (props.modals.signInModal) {
			return <SignInModal />
		} else if (props.modals.signUpModal) {
			return <SignUpModal />
		}
	}

	const onDemoClick = e => {
		e.preventDefault();
		props.dispatch(createNewDemoUser());
	} 

	return (
		<div>
			{console.log('rendered Home')}
			{console.log('state: ', props.state)}
			<NavBar>
				<a className="nav-item" href="/sign-in" onClick={(e) => onModalLinkClick(e, 'signInModal')}>Log in</a>
				<a className="nav-item" href="/sign-up" onClick={(e) => onModalLinkClick(e, 'signUpModal')}>Sign up</a>
				<a className="nav-item" href="/demo" onClick={(e) => onDemoClick(e)}>Demo</a>
			</NavBar>
			<main>
				<Banner />
				<About />
			</main>
			<Footer />
			<ReactCSSTransitionGroup 
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}
				transitionName="modal-fade">
				{showModals()}
			</ReactCSSTransitionGroup>
		</div>
	)
}

const mapStateToProps = (state, props) => ({
	modals: state.modals,
	loggedIn: state.loggedIn,
	message: state.message,
	state: state
})

export default connect(mapStateToProps)(Home);