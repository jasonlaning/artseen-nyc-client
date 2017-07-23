import React from 'react';
import { connect } from 'react-redux';

import { toggleModal, addUserToFavorites, deleteUserFromFavorites } from '../../actions';

import './follow-user-modal.css';

export const FollowUserModal = (props) => {

	const onCloseModal = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
	}

	const onFollowClick = e => {
		e.preventDefault();
		props.dispatch(addUserToFavorites(props.userToFollow.username));
	}

	const onUnfollowClick = e => {
		e.preventDefault();
		props.dispatch(deleteUserFromFavorites(props.userToFollow.username));
	}

	let followDisabled = true;
	let unfollowDisabled = true;
	if ((props.user.favoriteUsers.indexOf(props.userToFollow.username) === -1) && 
		(props.user.username !== props.userToFollow.username)) {
		followDisabled = false;
	} else if ((props.user.favoriteUsers.indexOf(props.userToFollow.username) !== -1) &&
		(props.user.username !== props.userToFollow.username)) {
		unfollowDisabled = false;
	}

	const modalTitle = 'Profile';
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
			<div className="modal-overlay" onClick={e => onCloseModal(e, 'followUserModal')}>
		</div> 
			<div className="modal-container">
				<form className="follow-user-form modal-form" >
					<h3 className="modal-title">
						<span className={toggleMessage()}>{modalTitle}</span>
						<span className={`modal-message ${messageEnter}`}>{message}</span>
					</h3>
					<a href="" className="modal-x" onClick={e => onCloseModal(e, 'followUserModal')} > </a>
					<div className="form-container">
						<div className="follow-wrapper">
							<img className="profile-pic" src={props.userToFollow.profilePicURL} alt="" />
							<h2>{props.userToFollow.username}</h2>
							<p className="location">{props.userToFollow.location}</p>
							<p className="about">{props.userToFollow.about}</p>
						</div>
						<button onClick={(e) => onFollowClick(e)} disabled={followDisabled} >Follow</button>
						<button onClick={(e) => onUnfollowClick(e)} disabled={unfollowDisabled} >Unfollow</button>
					</div>
				</form>
			</div>
		</div>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	userToFollow: state.userToFollow,
	message: state.message
});

export default connect(mapStateToProps)(FollowUserModal);
