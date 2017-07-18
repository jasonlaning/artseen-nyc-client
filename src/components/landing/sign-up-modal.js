import React from 'react';
import {connect} from 'react-redux';
import {toggleModal, signUpNewUser} from '../../actions';

export const SignUpModal = (props) => {

		const onCloseModal = (e, modal) => {
			e.preventDefault();
			props.dispatch(toggleModal(modal));
		}

		const onSignUp = e => {
			e.preventDefault();
			props.dispatch(signUpNewUser(e.target.signUpUsername.value, 
				e.target.signUpPassword.value, e.target.location.value));
			e.target.signUpUsername.value = '';
			e.target.signUpPassword.value = '';
			e.target.location.value = '';
			e.target.signUpUsername.focus();
		} 

		const modalTitle = 'Create New Account';
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
				<div className="modal-overlay" onClick={e => onCloseModal(e, 'signUpModal')} >
				</div>      
				<div className="modal-container">
					<form className="sign-up-form modal-form" onSubmit={e => onSignUp(e)} >
						<h3 className="modal-title">
							<span className={toggleMessage()}>{modalTitle}</span>
							<span className={`modal-message ${messageEnter}`}>{message}</span>
						</h3>
						<div className="form-container">
							<a href="" className="modal-x" onClick={e => onCloseModal(e, 'signUpModal')} > </a>
							<div>
								<label htmlFor="signUpUsername">Username</label>
								<input autoFocus type="text" name="signUpUsername" id="signUpUsername" 
									maxLength="20" required />
							</div>
							<div>
								<label htmlFor="location">Location (optional)</label>
								<input type="text" name="location" id="location" maxLength="32" />
							</div>
							<div>
								<label htmlFor="signUpPassword">Password</label>
								<input type="password" name="signUpPassword" id="signUpPassword" required />
							</div>
							<button type="submit">Sign Up</button>
						</div>
					</form>
				</div>
			</div>
		)
}

const mapStateToProps = (state, props) => ({
	message: state.message
});

export default connect(mapStateToProps)(SignUpModal);