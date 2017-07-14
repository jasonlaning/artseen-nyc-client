import React from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';

import {updateUserSettings, resetProfilePicModal, toggleModal, uploadImage} from '../../actions';

import './profile-pic-modal.css';

export const ProfilePicModal = (props) => {

	const modal = 'showProfilePicModal';

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
						New Profile Image<br/>Here<br />(or click to select a file)</p>
				</Dropzone>
			)
		} else {
			return (
				<div>
					<img src={props.imageUploaded} alt="preview" className="profile-pic" />
					<button type="submit">Save?</button><button onClick={e => onCloseModal(e, modal)}>Cancel</button>
				</div>
			)
		}
	}

	const onSubmit = (e, modal) => {
		e.preventDefault();
		props.dispatch(updateUserSettings(props.user.location, 
			props.user.about, props.imageUploaded, modal));
	} 

	return ( 
		<div>
			<div className="modal-overlay" onClick={e => onCloseModal(e, modal)} >
			</div>      
			<form className="profile-pic-form modal-form" onSubmit={e => onSubmit(e, modal)} >
				<a href="" className="modal-x" onClick={e => onCloseModal(e, modal)} > </a>
				{dropzoneView()}
				<div>
					<p className="modal-message">{props.message}</p>
				</div>
			</form>
		</div>
	)
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	imageUploaded: state.imageUploaded,
	message: state.message
});

export default connect(mapStateToProps)(ProfilePicModal);