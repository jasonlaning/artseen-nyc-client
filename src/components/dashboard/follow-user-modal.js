import React from 'react';
import {connect} from 'react-redux';

import {toggleModal, addUserToFavorites, deleteUserFromFavorites} from '../../actions';

import './follow-user-modal.css';

const FollowUserModal = (props) => {

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

	return (
		<div>
			<div className="modal-overlay" onClick={e => onCloseModal(e, 'showFollowUserModal')}>
		</div> 
			<form className="follow-user-form modal-form" >
				<a href="" className="modal-x" onClick={e => onCloseModal(e, 'showFollowUserModal')} > </a>
				<div>
					<img className="profile-pic" src={props.userToFollow.profilePicURL} alt="" />
					<h2>{props.userToFollow.username}</h2>
					<p>{props.userToFollow.location}</p>
					<p>{props.userToFollow.about}</p>
				</div>
				<button onClick={(e) => onFollowClick(e)} disabled={followDisabled} >Follow</button>
				<button onClick={(e) => onUnfollowClick(e)} disabled={unfollowDisabled} >Unfollow</button>
				<div>
					<p className="modal-message">{props.message}</p>
				</div>
			</form>
		</div>
	);
}

const mapStateToProps = (state, props) => ({
	user: state.user,
	loggedIn: state.loggedIn,
	userToFollow: state.userToFollow,
	message: state.message
});

export default connect(mapStateToProps)(FollowUserModal);
