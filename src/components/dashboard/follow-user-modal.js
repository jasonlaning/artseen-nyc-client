import React from 'react';
import {connect} from 'react-redux';

import {toggleModal, addUserToFavorites, deleteUserFromFavorites} from '../../actions';

import './follow-user-modal.css';

const FollowUserModal = (props) => {

	const onCloseModal = (e, modal) => {
		e.preventDefault();
		props.dispatch(toggleModal(modal));
	}

	const onFollowFormSubmit = e => {
		e.preventDefault();
		if (e.target.action.value === 'follow') {
			props.dispatch(addUserToFavorites(props.userToFollow.username));
		} else {
			props.dispatch(deleteUserFromFavorites(props.userToFollow.username));
		}
	}

	return (
		<div>
			<div className="modal-overlay" onClick={e => onCloseModal(e, 'showFollowUserModal')}>
		</div> 
			<form className="follow-user-form modal-form" onSubmit={e => onFollowFormSubmit(e)} >
				<a href="" className="modal-x" onClick={e => onCloseModal(e, 'showFollowUserModal')} > </a>
				<div>
					<h2>{props.userToFollow.username}</h2>
					<p><img src={props.userToFollow.profilePicURL} alt="" /></p>
					<p>{props.userToFollow.location}</p>
					<p>{props.userToFollow.about}</p>
				</div>
				<button type="submit" name="action" value="follow">Follow</button>
				<button type="submit" name="action" value="unfollow">Unfollow</button>
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
