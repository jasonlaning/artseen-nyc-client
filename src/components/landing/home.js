import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NavBar from '../nav-bar/nav-bar';
import Banner from './banner';
import About from './about';
import Footer from '../footer/footer';
import SignInModal from './sign-in-modal';
import SignUpModal from './sign-up-modal';
import {toggleModal, createNewDemoUser} from '../../actions';

import './home.css';

export const Home = (props) => {

	const onModalLinkClick = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
		props.dispatch(toggleModal('burgerModal'))
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
				<div className="nav-item">
					<a href="/sign-in" onClick={(e) => onModalLinkClick(e, 'signInModal')}>Log in</a>
				</div>
				<div className="nav-item">
					<a href="/sign-up" onClick={(e) => onModalLinkClick(e, 'signUpModal')}>Sign up</a>
				</div>
				<div className="nav-item">
					<a href="/demo" onClick={(e) => onDemoClick(e)}>Demo</a>
				</div>
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