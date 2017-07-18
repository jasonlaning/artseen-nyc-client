import React from 'react';
import {connect} from 'react-redux';

import {toggleModal, updateUserSettings} from '../../actions';

import './user-settings-modal.css';

export const UserSettingsModal = (props) => {

	const modal = 'userSettingsModal'

	const onCloseModal = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
	}

	const onSubmit = (e, modal) => {
		e.preventDefault();
		props.dispatch(updateUserSettings(e.target.location.value, 
			e.target.about.value, props.user.profilePicURL, modal));
	} 

	const modalTitle = 'Edit Profile Settings';
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
			<div className="modal-overlay" onClick={e => onCloseModal(e, modal)} >
			</div>  
			<div className="modal-container">    
				<form className="user-settings-form modal-form" onSubmit={e => onSubmit(e, modal)} >
					<h3 className="modal-title">
						<span className={toggleMessage()}>{modalTitle}</span>
						<span className={`modal-message ${messageEnter}`}>{message}</span>
					</h3>
					<a href="" className="modal-x" onClick={e => onCloseModal(e, modal)} > </a>
					<div className="form-container">
						<div>
							<label htmlFor="location">Location</label>
							<input autoFocus type="text" name="location" id="location" 
								maxLength="32" defaultValue={props.user.location}/>
						</div>
						<div>
							<label htmlFor="about">About</label>
							<input type="text" name="about" id="about" 
								defaultValue={props.user.about} maxLength="65" />
						</div>
					<button type="submit">Save</button>
					</div>
				</form>
			</div>
		</div>
	)
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	message: state.message
});

export default connect(mapStateToProps)(UserSettingsModal);