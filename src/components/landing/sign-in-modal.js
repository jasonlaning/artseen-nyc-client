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
			props.dispatch(signInUser(e.target.signInUsername.value, 
				e.target.signInPassword.value));
			e.target.signInUsername.value = '';
			e.target.signInPassword.value = '';
			e.target.signInUsername.focus();
		} 

		const modalTitle = 'Log in';
		let messageEnter = 'message-enter';
		let message = '';

		const toggleMessage = () => {
			if (props.message) {
				message = props.message
				return 'modal-title-remove'
			} else {
				messageEnter = ''
				return null
			}
		}

		return ( 
			<div>
				<div className="modal-overlay" onClick={e => onCloseModal(e, 'signInModal')} >
				</div>      
				<div className="modal-container">
					<form className="sign-in-form modal-form" onSubmit={e => onSignIn(e)} >
						<h3 className="modal-title">
							<span className={toggleMessage()}>{modalTitle}</span>
							<span className={`modal-message ${messageEnter}`}>{message}</span>
						</h3>
						<div className="form-container">
							<a href="" className="modal-x" onClick={e => onCloseModal(e, 'signInModal')} > </a>
							<div>
								<label htmlFor="signInUsername">Username</label>
								<input autoFocus type="text" name="signInUsername" id="signInUsername" required />
							</div>
							<div>
								<label htmlFor="signInPassword">Password</label>
								<input type="password" name="signInPassword" id="signInPassword" required />
							</div>
							<button type="submit">Log In</button>
						</div>
					</form>
				</div>
			</div>
		)
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	loggedIn: state.loggedIn,
	message: state.message
});

export default connect(mapStateToProps)(withRouter(SignInModal));