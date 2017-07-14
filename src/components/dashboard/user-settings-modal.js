import React from 'react';
import {connect} from 'react-redux';

import {toggleModal, updateUserSettings} from '../../actions';

import './user-settings-modal.css';

export const UserSettingsModal = (props) => {

	const modal = 'showUserSettingsModal'

	const onCloseModal = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
	}

	const onSubmit = (e, modal) => {
		e.preventDefault();
		props.dispatch(updateUserSettings(e.target.location.value, 
			e.target.about.value, props.user.profilePicURL, modal));
	} 

	return ( 
		<div>
			<div className="modal-overlay" onClick={e => onCloseModal(e, modal)} >
			</div>      
			<form className="user-settings-form modal-form" onSubmit={e => onSubmit(e, modal)} >
				<a href="" className="modal-x" onClick={e => onCloseModal(e, modal)} > </a>
    			<h3>{props.user.username}</h3>
				<div>
					<label htmlFor="location">Location</label>
					<input autoFocus type="text" name="location" id="location" defaultValue={props.user.location}/>
				</div>
				<div>
					<label htmlFor="about">About</label>
					<textarea type="text" name="about" id="about" defaultValue={props.user.about}></textarea>
				</div>
				<button type="submit">Save</button>
				<div>
					<p className="modal-message">{props.message}</p>
				</div>
			</form>
		</div>
	)
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	message: state.message
});

export default connect(mapStateToProps)(UserSettingsModal);