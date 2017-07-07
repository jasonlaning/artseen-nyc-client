import React from 'react';
import {connect} from 'react-redux';

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
/*
		if (this.props.loggedIn) {
			return <Redirect to='/dashboard' />
		}
*/
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
					<SignUp />
				</main>
				<Footer />
				{signInModal}
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	showSignInModal: state.modals.showSignInModal,
	loggedIn: state.loggedIn,
	state: state
})

export default connect(mapStateToProps)(Home);