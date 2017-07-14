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
		props.dispatch(signInUser(e.target.username.value, e.target.password.value));
		e.target.username.value = '';
		e.target.password.value = '';
	} 

	return ( 
		<div>
			<div className="modal-overlay" onClick={e => onCloseModal(e, 'showSignInModal')} >
			</div>      
			<form className="sign-in-form modal-form" onSubmit={e => onSignIn(e)} >
			<a href="" className="modal-x" onClick={e => onCloseModal(e, 'showSignInModal')} > </a>
				<div>
					<label htmlFor="username">Username</label>
					<input autoFocus type="text" name="username" id="username" required />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" required />
				</div>
				<button type="submit">Log In</button>
				<div>
					<p className="modal-message">{props.message}</p>
				</div>
			</form>
		</div>
	)
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	loggedIn: state.loggedIn,
	message: state.message
});

export default connect(mapStateToProps)(withRouter(SignInModal));