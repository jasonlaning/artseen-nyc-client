import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {toggleModal, signInUser} from '../../actions';

import './sign-in-modal.css';

export const SignInModal = (props) => {

	const onCloseModal = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
	}

	const onSignIn = e => {
		e.preventDefault();
		props.dispatch(signInUser(e.target.username.value, e.target.password.value))
	} 

	/*if (props.loggedIn) {
		props.history.push('/dashboard');
	}*/

	return ( 
		<div>
			<div className="modal-overlay" onClick={e => onCloseModal(e, 'showSignInModal')} >
			</div>      
			<form className="sign-in-form modal-form" onSubmit={e => onSignIn(e)} >
			<a href="" className="modal-x" onClick={e => onCloseModal(e, 'showSignInModal')} > </a>
				<div>
					<label htmlFor="username">Username</label>
					<input autoFocus type="text" name="username" id="username" />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" />
				</div>
				<button type="submit">Log In</button>
			</form>
		</div>
	)
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(withRouter(SignInModal));