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

export class Home extends React.Component {

	onSignInClick = (e, modal) => {
		e.preventDefault();
		e.stopPropagation();
		this.props.dispatch(toggleModal(modal));
	}

	render() {

		let signInModal;
		if (this.props.showSignInModal) {
			signInModal = <SignInModal />;
		}

		return (
			<div>
				{console.log('rendered Home')}
				{console.log('state: ', this.props.state)}
				<NavBar>
					<div className="nav-item">
						<a href="" onClick={(e) => this.onSignInClick(e, 'showSignInModal')}>Log in</a>
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
					<SignUp message={this.props.message} />
				</main>
				<Footer />
				<ReactCSSTransitionGroup 
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
					transitionName="modal-fade">
					{signInModal}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	showSignInModal: state.modals.showSignInModal,
	loggedIn: state.loggedIn,
	message: state.message,
	state: state
})

export default connect(mapStateToProps)(Home);