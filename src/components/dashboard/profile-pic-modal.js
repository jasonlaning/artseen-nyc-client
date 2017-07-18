import React from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';

import {updateUserSettings, resetProfilePicModal, toggleModal, uploadImage} from '../../actions';

import './profile-pic-modal.css';

export const ProfilePicModal = (props) => {

	const modal = 'profilePicModal';

	const onCloseModal = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
		props.dispatch(resetProfilePicModal())
	}

	const onImageDrop = image => {
			console.log(image);
			props.dispatch(uploadImage(image));
		}

	const dropzoneView = () => {
		if (props.imageUploaded === '') {
			return (
				<Dropzone
					multiple={false}
					className="dropzone-container"
					accept="image/*"
					onDrop={pic => onImageDrop(pic)}>
					<p className="drop-instructions">Drag and Drop<br/>
						New Profile Image<br /><br/>or click<br/>to select a file</p>
				</Dropzone>
			)
		} else {
			return (
				<div>
					<img src={props.imageUploaded} alt="preview" />
					<div className="profile-pic-button-container"><button type="submit">Save?</button><button onClick={e => 
						onCloseModal(e, modal)}>Cancel</button></div>
				</div>
			)
		}
	}

	const onSubmit = (e, modal) => {
		e.preventDefault();
		props.dispatch(updateUserSettings(props.user.location, 
			props.user.about, props.imageUploaded, modal));
	} 

	const modalTitle = 'Update Profile Pic';
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
				<form className="profile-pic-form modal-form" onSubmit={e => onSubmit(e, modal)} >
					<h3 className="modal-title">
						<span className={toggleMessage()}>{modalTitle}</span>
						<span className={`modal-message ${messageEnter}`}>{message}</span>
					</h3>					
					<a href="" className="modal-x" onClick={e => onCloseModal(e, modal)} > </a>
					{dropzoneView()}
				</form>
			</div>
		</div>
	)
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	imageUploaded: state.imageUploaded,
	message: state.message
});

export default connect(mapStateToProps)(ProfilePicModal);